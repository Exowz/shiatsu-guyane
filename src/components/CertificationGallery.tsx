'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Award, Star, Users, Heart, Target, Sparkles, ImageIcon, X } from 'lucide-react';
import type { Dictionary } from '@/types/dictionary';

// Client Component for Image Modal
function ImageModal({ onClose, certTitle, certOrg, certYear, allImages, currentIndex, dictionary }: {
  onClose: () => void;
  certTitle: string;
  certOrg: string;
  certYear: string;
  allImages: string[];
  currentIndex: number;
  dictionary: Dictionary;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);

  const navigateImage = useCallback((direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImageIndex(currentImageIndex > 0 ? currentImageIndex - 1 : allImages.length - 1);
    } else {
      setCurrentImageIndex(currentImageIndex < allImages.length - 1 ? currentImageIndex + 1 : 0);
    }
  }, [currentImageIndex, allImages.length]);

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') navigateImage('prev');
    if (e.key === 'ArrowRight') navigateImage('next');
  }, [onClose, navigateImage]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'unset';
    };
  }, [currentImageIndex, handleKeyPress]);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative max-w-5xl max-h-[90vh] w-full">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors duration-300"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Navigation arrows for multiple images */}
        {allImages.length > 1 && (
          <>
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 sm:w-12 sm:h-12 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors duration-300"
            >
              <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 sm:w-12 sm:h-12 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors duration-300"
            >
              <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Image */}
        <div className="relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-2xl">
          <Image
            src={allImages[currentImageIndex]}
            alt={`${certTitle} - ${dictionary.components.certificationGallery.diplomaCount.single} ${currentImageIndex + 1}`}
            width={1200}
            height={900}
            className="object-contain w-full h-full max-h-[75vh]"
          />
          
          {/* Image info overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6">
            <h3 className="text-white font-bold text-lg sm:text-xl mb-1">{certTitle}</h3>
            <p className="text-white/90 text-sm sm:text-base">{certOrg} • {certYear}</p>
            
            {allImages.length > 1 && (
              <div className="mt-2 flex items-center gap-2">
                <div className="flex gap-1">
                  {allImages.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-white/80 text-xs sm:text-sm ml-2">
                  {currentImageIndex + 1} / {allImages.length}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Thumbnail navigation for multiple images */}
        {allImages.length > 1 && (
          <div className="mt-4 flex gap-2 sm:gap-3 justify-center overflow-x-auto pb-2">
            {allImages.map((thumb, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative w-12 h-12 sm:w-16 sm:h-16 rounded-md sm:rounded-lg overflow-hidden flex-shrink-0 transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'ring-2 ring-white scale-110' 
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <Image
                  src={thumb}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Client Component for Interactive Certification Card
interface CertificationItem {
  title: React.ReactNode;
  organization: React.ReactNode;
  year: React.ReactNode;
  description?: React.ReactNode;
  category?: React.ReactNode;
  images: string[];
  icon?: React.ReactNode;
  gradient?: string;
  details?: React.ReactNode;
  [key: string]: unknown;
}

function InteractiveCertificationCard({ cert, dictionary }: { cert: CertificationItem, dictionary: Dictionary }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openImage = (imagePath: string, imageIndex: number) => {
    setSelectedImage(imagePath);
    setSelectedImageIndex(imageIndex);
  };

  return (
    <>
      <div className="bg-card/60 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg sm:shadow-xl hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-[1.02] group border border-[rgb(var(--color-primary))]/10">
        <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${cert.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
          {cert.icon}
        </div>
        
        <h3 className="font-bold text-base sm:text-lg md:text-xl text-card-foreground mb-2">{cert.title}</h3>
        <p className="text-[rgb(var(--color-text-secondary))] mb-1 text-xs sm:text-sm">{cert.organization}</p>
        <p className="text-[rgb(var(--color-primary))] font-semibold mb-2 text-sm sm:text-base">{cert.year}</p>
        <p className="text-[rgb(var(--color-text-secondary))] text-xs mb-4">{cert.details}</p>
        
        {/* Image Gallery Thumbnails - NOW CLICKABLE */}
        {cert.images && cert.images.length > 0 && (
          <div className="mt-4 sm:mt-6">
            <div className="flex items-center gap-2 mb-3">
              <ImageIcon className="w-3 h-3 sm:w-4 sm:h-4 text-[rgb(var(--color-primary))]" />
              <span className="text-xs sm:text-sm font-medium text-[rgb(var(--color-text-secondary))]">
                {cert.images.length} {cert.images.length === 1 ? dictionary.components.certificationGallery.diplomaCount.single : dictionary.components.certificationGallery.diplomaCount.plural}
              </span>
            </div>
            
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {cert.images.slice(0, 3).map((imagePath: string, imgIndex: number) => (
                <div 
                  key={imgIndex}
                  className="relative aspect-square rounded-lg sm:rounded-xl overflow-hidden cursor-pointer group/img shadow-md hover:shadow-lg transition-all duration-300"
                  onClick={() => openImage(imagePath, imgIndex)}
                >
                  <Image
                    src={imagePath}
                    alt={`${cert.title} - ${dictionary.components.certificationGallery.diplomaCount.single} ${imgIndex + 1}`}
                    fill
                    className="object-cover group-hover/img:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover/img:bg-black/10 transition-colors duration-300"></div>
                  
                  {/* Image counter for multiple images */}
                  {cert.images.length > 3 && imgIndex === 2 && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <span className="text-white font-bold text-xs sm:text-sm">
                        +{cert.images.length - 2}
                      </span>
                    </div>
                  )}
                  
                  {/* Zoom indicator */}
                  <div className="absolute top-1 right-1 w-4 h-4 sm:w-5 sm:h-5 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                    <ImageIcon className="w-2 h-2 sm:w-3 sm:h-3 text-[rgb(var(--color-primary))]" />
                  </div>
                </div>
              ))}
            </div>
            
            {/* View all images button for multiple images */}
            {cert.images.length > 1 && (
              <button 
                onClick={() => openImage(cert.images[0], 0)}
                className="mt-3 w-full text-xs sm:text-sm text-[rgb(var(--color-primary))] hover:text-[rgb(var(--color-secondary))] font-medium transition-colors duration-300 py-1"
              >
                {dictionary.components.certificationGallery.viewAllButton.replace('{{count}}', cert.images.length.toString())}
              </button>
            )}
          </div>
        )}
        
        {/* Decorative accent */}
        <div className={`w-full h-1 bg-gradient-to-r ${cert.gradient} rounded-full mt-4 sm:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal 
          onClose={() => setSelectedImage(null)}
          certTitle={String(cert.title)}
          certOrg={String(cert.organization)}
          certYear={String(cert.year)}
          allImages={cert.images}
          currentIndex={selectedImageIndex}
          dictionary={dictionary}
        />
      )}
    </>
  );
}

// Main Certification Gallery Component
export default function CertificationGallery({ dictionary }: { dictionary: Dictionary }) {
  const certs = dictionary.components.certificationGallery.certifications;
  const certifications = [
    {
      icon: <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: certs.shiatsuProfessionnel.title,
      organization: certs.shiatsuProfessionnel.organization,
      year: certs.shiatsuProfessionnel.year,
      gradient: "from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]",
      details: certs.shiatsuProfessionnel.details,
      images: ["/images/diplomas/shiatsu-professionnel-1.jpg"]
    },
    {
      icon: <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: certs.ohashiatsuAdvanced.title,
      organization: certs.ohashiatsuAdvanced.organization,
      year: certs.ohashiatsuAdvanced.year,
      gradient: "from-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))]",
      details: certs.ohashiatsuAdvanced.details,
      images: ["/images/diplomas/ohashiatsu-advanced-1.jpg"]
    },
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: certs.ohashiatsuInstructor.title,
      organization: certs.ohashiatsuInstructor.organization,
      year: certs.ohashiatsuInstructor.year,
      gradient: "from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-primary))]",
      details: certs.ohashiatsuInstructor.details,
      images: ["/images/diplomas/ohashiatsu-instructor-1.jpg"]
    },
    {
      icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: certs.seikiShiatsu.title,
      organization: certs.seikiShiatsu.organization,
      year: certs.seikiShiatsu.year,
      gradient: "from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]",
      details: certs.seikiShiatsu.details,
      images: ["/images/diplomas/seiki-shiatsu-1.jpg", "/images/diplomas/seiki-shiatsu-2.jpg", "/images/diplomas/seiki-shiatsu-3.jpg"]
    },
    {
      icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: certs.sophrologie.title,
      organization: certs.sophrologie.organization,
      year: certs.sophrologie.year,
      gradient: "from-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))]",
      details: certs.sophrologie.details,
      images: ["/images/diplomas/sophrologie-1.jpg"]
    },
    {
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: certs.formationsSpecialisees.title,
      organization: certs.formationsSpecialisees.organization,
      year: certs.formationsSpecialisees.year,
      gradient: "from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-primary))]",
      details: certs.formationsSpecialisees.details,
      images: ["/images/diplomas/formations-continues-1.jpg"]
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
      {certifications.map((cert, index) => (
        <InteractiveCertificationCard key={index} cert={cert} dictionary={dictionary} />
      ))}
    </div>
  );
}
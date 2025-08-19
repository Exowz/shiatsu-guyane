'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Heart, Leaf, Star, ArrowUp } from 'lucide-react';
import { HealthcareDisclaimer } from '@/components/ui/HealthcareDisclaimer';
import type { Dictionary, Locale } from '@/types/dictionary';

interface FooterProps {
  dictionary: Dictionary;
  lang: Locale;
}

export const Footer = ({ dictionary, lang }: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[rgb(var(--color-surface))] via-[rgb(var(--color-background))] to-[rgb(var(--color-surface))]">
      {/* Sophisticated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-[rgb(var(--color-tertiary))]/6 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-[rgb(var(--color-primary))]/4 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 pt-20 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-card/70 backdrop-blur-md rounded-full shadow-lg">
                <Leaf className="w-6 h-6 text-[rgb(var(--color-tertiary))]" />
                <span className="text-xl font-bold text-card-foreground">Nathalie Jean</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-[rgb(var(--color-text))] leading-tight">
                <span className="bg-gradient-to-r from-[rgb(var(--color-secondary))] to-[rgb(var(--color-primary))] bg-clip-text text-transparent">
                  {dictionary.components.footer.practitioner.description}
                </span>
              </h3>
              
              <p className="text-[rgb(var(--color-text-secondary))] leading-relaxed max-w-lg">
                {dictionary.components.footer.practitioner.longDescription}
              </p>

              {/* Certifications */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <Star className="w-4 h-4 text-[rgb(var(--color-primary))]" />
                  <span className="text-sm font-medium text-[rgb(var(--color-text-secondary))]">{dictionary.components.footer.practitioner.certification}</span>
                </div>
                <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <Star className="w-4 h-4 text-[rgb(var(--color-tertiary))]" />
                  <span className="text-sm font-medium text-[rgb(var(--color-text-secondary))]">{dictionary.components.footer.practitioner.certification2}</span>
                </div>
                <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <Heart className="w-4 h-4 text-[rgb(var(--color-secondary))]" />
                  <span className="text-sm font-medium text-[rgb(var(--color-text-secondary))]">{dictionary.components.footer.practitioner.experience}</span>
                </div>
                <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <Leaf className="w-4 h-4 text-[rgb(var(--color-primary))]" />
                  <span className="text-sm font-medium text-[rgb(var(--color-text-secondary))]">{dictionary.components.footer.practitioner.memberships}</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-[rgb(var(--color-text))] flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                {dictionary.components.footer.contact.title}
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-card/40 backdrop-blur-sm rounded-2xl hover:bg-card/60 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-[rgb(var(--color-tertiary))] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[rgb(var(--color-text))]">{dictionary.components.footer.contact.office.title}</p>
                    <p className="text-sm text-[rgb(var(--color-text-secondary))]">
                      {dictionary.components.footer.contact.office.address}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-card/40 backdrop-blur-sm rounded-2xl hover:bg-card/60 transition-all duration-300">
                  <Phone className="w-5 h-5 text-[rgb(var(--color-primary))] flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[rgb(var(--color-text))]">+594 (0) 6 94 00 70 97</p>
                    <p className="text-sm text-[rgb(var(--color-text-secondary))]">{dictionary.components.footer.contact.office.schedule}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-card/40 backdrop-blur-sm rounded-2xl hover:bg-card/60 transition-all duration-300">
                  <Mail className="w-5 h-5 text-[rgb(var(--color-secondary))] flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[rgb(var(--color-text))]">nathalie.jean@shiatsu-guyane.com</p>
                    <p className="text-sm text-[rgb(var(--color-text-secondary))]">{dictionary.components.footer.contact.email.responseTime}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-[rgb(var(--color-text))] flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))] rounded-lg flex items-center justify-center">
                  <Leaf className="w-4 h-4 text-white" />
                </div>
                {dictionary.components.footer.navigation.title}
              </h4>
              
              <div className="grid grid-cols-2 gap-3">
                <Link 
                  href={`/${lang}/`} 
                  className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-primary))] transition-colors duration-300 text-sm font-medium"
                  key="nav-home"
                >
                  {dictionary.components.footer.navigation.home}
                </Link>
                <Link 
                  href={`/${lang}/about`} 
                  className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-primary))] transition-colors duration-300 text-sm font-medium"
                  key="nav-about"
                >
                  {dictionary.navbar.about}
                </Link>
                <Link 
                  href={`/${lang}/le-shiatsu`} 
                  className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-primary))] transition-colors duration-300 text-sm font-medium"
                  key="nav-shiatsu"
                >
                  {dictionary.navbar.whatIsShiatsu}
                </Link>
                <Link 
                  href={`/${lang}/pour-qui`} 
                  className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-primary))] transition-colors duration-300 text-sm font-medium"
                  key="nav-pour-qui"
                >
                  {dictionary.navbar.whoIsItFor}
                </Link>
                <Link 
                  href={`/${lang}/services-pricing`} 
                  className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-primary))] transition-colors duration-300 text-sm font-medium"
                  key="nav-pricing"
                >
                  {dictionary.navbar.services}
                </Link>
                <Link 
                  href={`/${lang}/contact`} 
                  className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-primary))] transition-colors duration-300 text-sm font-medium"
                  key="nav-contact"
                >
                  {dictionary.navbar.contact}
                </Link>
                <Link 
                  href={`/${lang}/infos-pratiques`} 
                  className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-primary))] transition-colors duration-300 text-sm font-medium"
                  key="nav-infos"
                >
                  {dictionary.navbar.practicalInfo}
                </Link>
              </div>

              {/* Hours */}
              <div className="mt-6 p-4 bg-card/40 backdrop-blur-sm rounded-2xl">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-[rgb(var(--color-tertiary))]" />
                  <span className="font-semibold text-[rgb(var(--color-text))]">{dictionary.components.footer.schedule.title}</span>
                </div>
                <div className="space-y-1 text-sm text-[rgb(var(--color-text-secondary))]">
                  <div className="flex justify-between">
                    <span>{dictionary.components.footer.schedule.weekdays.label}</span>
                    <span>{dictionary.components.footer.schedule.weekdays.hours}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{dictionary.components.footer.schedule.saturday.label}</span>
                    <span>{dictionary.components.footer.schedule.saturday.hours}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{dictionary.components.footer.schedule.sunday.label}</span>
                    <span>{dictionary.components.footer.schedule.sunday.hours}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Healthcare Disclaimer Section */}
        <div className="container mx-auto px-6 py-8">
          <HealthcareDisclaimer dictionary={dictionary} lang={lang} variant="footer" />
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[rgb(var(--color-primary))]/20">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-[rgb(var(--color-text-secondary))] text-sm">
                  {dictionary.components.footer.copyright}
                </p>
                <p className="text-[rgb(var(--color-text-secondary))] text-xs mt-1">
                  {dictionary.components.footer.practitioner.memberships}
                </p>
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <Link 
                  href={`/${lang}/mentions-legales`} 
                  className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-primary))] transition-colors duration-300"
                  key="legal-mentions"
                >
                  {dictionary.components.footer.legal.mentions}
                </Link>
                <Link 
                  href={`/${lang}/politique-confidentialite`} 
                  className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-primary))] transition-colors duration-300"
                  key="legal-privacy"
                >
                  {dictionary.components.footer.legal.privacy}
                </Link>
                <Link 
                  href={`/${lang}/cgv`} 
                  className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-primary))] transition-colors duration-300"
                  key="legal-terms"
                >
                  {dictionary.components.footer.legal.terms}
                </Link>
              </div>

              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-2 bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
              >
                <span className="text-sm">{dictionary.components.footer.backToTop}</span>
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Zen elements */}
        <div className="absolute bottom-8 left-8 w-3 h-3 bg-[rgb(var(--color-tertiary))]/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-12 right-12 w-4 h-4 bg-[rgb(var(--color-primary))]/20 rounded-full animate-pulse delay-1000"></div>
      </div>
    </footer>
  );
};
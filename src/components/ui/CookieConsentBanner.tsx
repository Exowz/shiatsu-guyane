'use client';

import { useState, useEffect } from 'react';
import { X, Cookie, Shield, Settings, Check } from 'lucide-react';
import Link from 'next/link';
import { Locale, Dictionary } from '@/types/dictionary';

// Declare gtag global
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
}

interface CookieConsentBannerProps {
  dictionary: Dictionary;
  lang: Locale;
}

export const CookieConsentBanner = ({ dictionary, lang }: CookieConsentBannerProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Always required
    analytics: false,
    performance: false,
    preferences: false,
  });

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookie-consent');
    const hasPreferences = localStorage.getItem('cookie-preferences');
    
    if (!hasConsent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    } else if (hasPreferences) {
      // Load saved preferences
      try {
        const savedPrefs = JSON.parse(hasPreferences);
        setCookiePreferences(prev => ({ ...prev, ...savedPrefs }));
      } catch (error) {
        console.error('Error parsing cookie preferences:', error);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      performance: true,
      preferences: true,
    };
    
    setCookiePreferences(allAccepted);
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-preferences', JSON.stringify(allAccepted));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    
    setIsVisible(false);
    // Trigger analytics initialization if accepted
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'denied'
      });
    }
  };

  const handleAcceptSelected = () => {
    localStorage.setItem('cookie-consent', 'customized');
    localStorage.setItem('cookie-preferences', JSON.stringify(cookiePreferences));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    
    setIsVisible(false);
    // Update consent based on selections
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: cookiePreferences.analytics ? 'granted' : 'denied',
        ad_storage: 'denied'
      });
    }
  };

  const handleRejectNonEssential = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      performance: false,
      preferences: false,
    };
    
    setCookiePreferences(essentialOnly);
    localStorage.setItem('cookie-consent', 'rejected');
    localStorage.setItem('cookie-preferences', JSON.stringify(essentialOnly));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    
    setIsVisible(false);
  };

  const togglePreference = (key: keyof typeof cookiePreferences) => {
    if (key === 'essential') return; // Essential cookies cannot be disabled
    
    setCookiePreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isVisible) return null;

  const t = (dictionary.legal as any)?.cookieConsent || {
    title: "Nous utilisons des cookies",
    description: "Nous utilisons des cookies pour améliorer votre expérience de navigation, analyser l'utilisation du site et personnaliser le contenu.",
    essentialCookies: {
      title: "Cookies essentiels",
      description: "Nécessaires au fonctionnement du site"
    },
    analyticsCookies: {
      title: "Cookies analytiques", 
      description: "Nous aident à comprendre l'utilisation du site"
    },
    performanceCookies: {
      title: "Cookies de performance",
      description: "Optimisent les performances du site"
    },
    preferencesCookies: {
      title: "Cookies de préférences",
      description: "Mémorisent vos choix personnels"
    },
    acceptAll: "Tout accepter",
    acceptSelected: "Accepter la sélection",
    rejectNonEssential: "Rejeter non-essentiels",
    customize: "Personnaliser",
    privacyPolicy: "Politique de confidentialité",
    moreInfo: "Plus d'informations"
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" />
      
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card/95 backdrop-blur-md border border-[rgb(var(--color-primary))]/20 rounded-2xl shadow-2xl p-6 md:p-8">
            
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] rounded-xl flex items-center justify-center">
                  <Cookie className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[rgb(var(--color-text))] mb-1">
                    {t.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-[rgb(var(--color-text-secondary))]">
                    <Shield className="w-4 h-4" />
                    <span>RGPD Conforme</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => setIsVisible(false)}
                className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-text))] transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Description */}
            <p className="text-[rgb(var(--color-text-secondary))] mb-6 leading-relaxed">
              {t.description}
            </p>

            {/* Cookie Details */}
            {showDetails && (
              <div className="mb-6 space-y-4 p-4 bg-[rgb(var(--color-primary))]/5 rounded-xl border border-[rgb(var(--color-primary))]/10">
                <h4 className="font-semibold text-[rgb(var(--color-text))] mb-4">Paramètres des cookies :</h4>
                
                <div className="grid gap-4">
                  {[
                    {
                      key: 'essential' as const,
                      title: t.essentialCookies.title,
                      description: t.essentialCookies.description,
                      required: true
                    },
                    {
                      key: 'analytics' as const,
                      title: t.analyticsCookies.title,
                      description: t.analyticsCookies.description,
                      required: false
                    },
                    {
                      key: 'performance' as const,
                      title: t.performanceCookies.title,
                      description: t.performanceCookies.description,
                      required: false
                    },
                    {
                      key: 'preferences' as const,
                      title: t.preferencesCookies.title,
                      description: t.preferencesCookies.description,
                      required: false
                    }
                  ].map((cookie) => (
                    <div 
                      key={cookie.key}
                      className="flex items-center justify-between p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/20"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h5 className="font-medium text-[rgb(var(--color-text))]">
                            {cookie.title}
                          </h5>
                          {cookie.required && (
                            <span className="text-xs bg-[rgb(var(--color-secondary))]/20 text-[rgb(var(--color-secondary))] px-2 py-1 rounded-full font-medium">
                              Requis
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-[rgb(var(--color-text-secondary))]">
                          {cookie.description}
                        </p>
                      </div>
                      
                      <button
                        onClick={() => togglePreference(cookie.key)}
                        disabled={cookie.required}
                        className={`ml-4 w-12 h-6 rounded-full relative transition-all duration-300 ${
                          cookiePreferences[cookie.key]
                            ? 'bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]'
                            : 'bg-gray-300 dark:bg-gray-600'
                        } ${cookie.required ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                      >
                        <div
                          className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${
                            cookiePreferences[cookie.key] ? 'translate-x-6' : 'translate-x-0.5'
                          }`}
                        >
                          {cookiePreferences[cookie.key] && (
                            <Check className="w-3 h-3 text-[rgb(var(--color-primary))] absolute top-1 left-1" />
                          )}
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAcceptAll}
                className="flex-1 bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                {t.acceptAll}
              </button>
              
              {showDetails ? (
                <button
                  onClick={handleAcceptSelected}
                  className="flex-1 bg-[rgb(var(--color-tertiary))] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[rgb(var(--color-tertiary))]/80 transition-all duration-300"
                >
                  {t.acceptSelected}
                </button>
              ) : (
                <button
                  onClick={() => setShowDetails(true)}
                  className="flex-1 flex items-center justify-center gap-2 bg-[rgb(var(--color-tertiary))] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[rgb(var(--color-tertiary))]/80 transition-all duration-300"
                >
                  <Settings className="w-4 h-4" />
                  {t.customize}
                </button>
              )}
              
              <button
                onClick={handleRejectNonEssential}
                className="flex-1 border border-[rgb(var(--color-text-secondary))]/30 text-[rgb(var(--color-text))] px-6 py-3 rounded-xl font-semibold hover:bg-[rgb(var(--color-text-secondary))]/10 transition-all duration-300"
              >
                {t.rejectNonEssential}
              </button>
            </div>

            {/* Footer */}
            <div className="mt-4 pt-4 border-t border-[rgb(var(--color-text-secondary))]/20 text-center">
              <p className="text-sm text-[rgb(var(--color-text-secondary))]">
                {t.moreInfo}{' '}
                <Link 
                  href={`/${lang}/politique-confidentialite`}
                  className="text-[rgb(var(--color-primary))] hover:text-[rgb(var(--color-secondary))] font-medium transition-colors"
                >
                  {t.privacyPolicy}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
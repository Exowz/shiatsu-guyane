'use client';

import { AlertTriangle, Shield, Award, Heart, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Locale, Dictionary } from '@/types/dictionary';

interface HealthcareDisclaimerProps {
  dictionary: Dictionary;
  lang: Locale;
  variant?: 'full' | 'compact' | 'footer';
}

export const HealthcareDisclaimer = ({ 
  dictionary, 
  lang, 
  variant = 'full' 
}: HealthcareDisclaimerProps) => {
  const t = (dictionary.legal as any)?.healthcareDisclaimer || {
    title: "Mentions Thérapeutiques Importantes",
    subtitle: "Information réglementaire et professionnelle",
    disclaimers: {
      notMedicalAdvice: {
        title: "Non-substitution médicale",
        description: "Le Shiatsu ne remplace pas un traitement médical. Consultez votre médecin pour tout problème de santé."
      },
      ffstCertification: {
        title: "Certification FFST",
        description: "Praticienne certifiée FFST avec 500h+ de formation selon les standards européens."
      },
      emergencyContact: {
        title: "Urgence médicale", 
        description: "En cas d'urgence, contactez le 15 (SAMU) ou rendez-vous aux urgences."
      },
      dataProtection: {
        title: "Protection des données",
        description: "Toutes les données de santé sont protégées selon le RGPD et le secret professionnel."
      }
    },
    credentials: {
      title: "Qualifications Professionnelles",
      items: [
        "Certifiée FFST (Fédération Française de Shiatsu Traditionnel)",
        "500+ heures de formation théorique et pratique",
        "Formation continue en anatomie et physiologie",
        "Membre actif de la communauté professionnelle",
        "Assurance responsabilité civile professionnelle"
      ]
    },
    contact: "Pour toute question sur vos traitements médicaux, consultez votre médecin traitant."
  };

  if (variant === 'compact') {
    return (
      <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/50 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-amber-800 dark:text-amber-200 font-medium mb-1">
              {t.disclaimers.notMedicalAdvice.title}
            </p>
            <p className="text-xs text-amber-700 dark:text-amber-300">
              {t.disclaimers.notMedicalAdvice.description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className="text-xs text-[rgb(var(--color-text-secondary))]/80 text-center space-y-2">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Shield className="w-3 h-3 text-[rgb(var(--color-primary))]/60" />
          <span className="font-medium">Certification FFST • Assurance Professionnelle</span>
        </div>
        <p>{t.disclaimers.notMedicalAdvice.description}</p>
        <p>En cas d&apos;urgence médicale: 15 (SAMU) • Données protégées RGPD</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-200 dark:border-amber-800/50 rounded-2xl p-8 shadow-lg">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
          <AlertTriangle className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100">
            {t.title}
          </h3>
          <p className="text-sm text-amber-700 dark:text-amber-300">
            {t.subtitle}
          </p>
        </div>
      </div>

      {/* Disclaimers Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {Object.entries(t.disclaimers).map(([key, disclaimer]: [string, any]) => {
          const icons = {
            notMedicalAdvice: AlertTriangle,
            ffstCertification: Award,
            emergencyContact: Heart,
            dataProtection: Shield
          };
          
          const colors = {
            notMedicalAdvice: 'text-red-600 dark:text-red-400',
            ffstCertification: 'text-blue-600 dark:text-blue-400',
            emergencyContact: 'text-red-600 dark:text-red-400',
            dataProtection: 'text-green-600 dark:text-green-400'
          };

          const Icon = icons[key as keyof typeof icons] || AlertTriangle;
          const colorClass = colors[key as keyof typeof colors] || 'text-amber-600 dark:text-amber-400';

          return (
            <div 
              key={key}
              className="bg-white/60 dark:bg-gray-900/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 dark:border-gray-700/30"
            >
              <div className="flex items-start gap-3">
                <Icon className={`w-5 h-5 ${colorClass} flex-shrink-0 mt-0.5`} />
                <div>
                  <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
                    {disclaimer.title}
                  </h4>
                  <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                    {disclaimer.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Professional Credentials */}
      <div className="bg-white/80 dark:bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-white/50 dark:border-gray-700/50">
        <div className="flex items-center gap-3 mb-4">
          <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <h4 className="text-lg font-semibold text-amber-900 dark:text-amber-100">
            {t.credentials.title}
          </h4>
        </div>
        
        <div className="grid md:grid-cols-2 gap-3">
          {t.credentials.items.map((credential: string, index: number) => (
            <div key={index} className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm text-amber-800 dark:text-amber-200">
                {credential}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-6 pt-4 border-t border-amber-200 dark:border-amber-800/50">
        <div className="flex items-start gap-3">
          <Heart className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-700 dark:text-amber-300 italic">
            {t.contact}
          </p>
        </div>
      </div>

      {/* External Links */}
      <div className="mt-4 flex flex-wrap gap-4 text-sm">
        <Link
          href="https://ffst.fr/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
        >
          FFST Official
          <ExternalLink className="w-3 h-3" />
        </Link>
        
        <Link
          href={`/${lang}/politique-confidentialite`}
          className="inline-flex items-center gap-1 text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200 transition-colors"
        >
          Politique RGPD
        </Link>
      </div>
    </div>
  );
};
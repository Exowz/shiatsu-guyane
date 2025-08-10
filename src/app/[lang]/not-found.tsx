'use client';
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

// interface NotFoundProps {
//   params: { lang: string };
// }

export default function NotFound() {
  // Default to French if no lang param (this shouldn't happen in practice)
  const lang = 'fr';
  
  const texts = {
    fr: {
      title: 'Page non trouvée',
      description: 'Désolé, la page que vous recherchez n\'existe pas ou a été déplacée.',
      home: 'Retour à l\'accueil',
      back: 'Page précédente',
      help: 'Besoin d\'aide ?',
      contact: 'Contactez-nous'
    },
    en: {
      title: 'Page not found',
      description: 'Sorry, the page you are looking for does not exist or has been moved.',
      home: 'Back to home',
      back: 'Previous page',
      help: 'Need help?',
      contact: 'Contact us'
    }
  };

  const t = texts[lang as keyof typeof texts] || texts.fr;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
      <div className="max-w-md w-full mx-auto text-center p-8">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-2">{t.title}</h2>
          <p className="text-muted-foreground">
            {t.description}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/${lang}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <Home className="w-4 h-4" />
            {t.home}
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.back}
          </button>
        </div>
        
        <div className="mt-8 text-sm text-muted-foreground">
          <p>{t.help} <Link href={`/${lang}/contact`} className="text-primary hover:underline">{t.contact}</Link></p>
        </div>
      </div>
    </div>
  );
}
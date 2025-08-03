import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/lib/i18n-config';
import { CtaSection } from '@/components/sections/CtaSection';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { ExpandableCardGrid } from '@/components/ui/expandable-card-grid';

export default async function ShiatsuPage(props: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);
  const t = dictionary.shiatsuPage;

  return (
    <div className="bg-background text-foreground">
      {/* 1. Page Header */}
      <section className="bg-secondary">
        <div className="container mx-auto px-6 pt-24 pb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground">{t.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">{t.subtitle}</p>
        </div>
      </section>

      {/* --- DÉBUT DE L'INTRODUCTION GÉNÉRALE --- */}
      <main className="container mx-auto px-6 py-16 lg:py-24 space-y-20">
        {/* Définition et Histoire */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="w-full h-auto rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/shiatsu-general.jpg" 
              alt="Pratique du Shiatsu"
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">{t.general.definition.heading}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.general.definition.p1}</p>
            <h3 className="text-2xl font-bold pt-4">{t.general.history.heading}</h3>
            <p className="text-muted-foreground leading-relaxed">{t.general.history.p1}</p>
          </div>
        </section>

        {/* Principes et Objectifs */}
        <section className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold">{t.general.principles.heading}</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{t.general.principles.p1}</p>
            <div className="mt-8 text-left">
              <h3 className="text-2xl font-bold text-center mb-6">{t.general.objectives.heading}</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.general.objectives.points.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
        </section>

        {/* Techniques */}
        <section className="text-center bg-secondary rounded-lg p-8 lg:p-12">
          <h2 className="text-3xl font-bold mb-4 text-secondary-foreground">{t.general.techniques.heading}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t.general.techniques.p1}</p>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">{t.general.techniques.p2}</p>
        </section>
      
      {/* --- FIN DE L'INTRODUCTION GÉNÉRALE --- */}


      {/* --- DÉBUT DE LA SECTION DES ÉCOLES --- */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">{t.schools.heading}</h2>
        </div>
        <ExpandableCardGrid cards={t.schools.items} />
      </section>

      </main>

      {/* Final Call to Action */}
      <CtaSection dictionary={dictionary} lang={lang} />
    </div>
  );
}
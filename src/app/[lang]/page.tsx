import { AboutIntroSection } from '@/components/sections/AboutIntroSection';
import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { WhatIsShiatsuSection } from '@/components/sections/WhatIsShiatsuSection';
import { WhoIsItForSection } from '@/components/sections/WhoIsItForSection';

import { getDictionary } from '@/lib/dictionary';
import { i18n, Locale } from '@/lib/i18n-config';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({
    lang: locale,
  }));
}

export default async function HomePage(props: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <HeroSection dictionary={dictionary} lang={lang} />
      <AboutIntroSection dictionary={dictionary} lang={lang} />
      <WhatIsShiatsuSection dictionary={dictionary} lang={lang} />
      <WhoIsItForSection dictionary={dictionary} lang={lang} />
      <BenefitsSection dictionary={dictionary} lang={lang} />
      <TestimonialsSection dictionary={dictionary} lang={lang} />
      <CtaSection dictionary={dictionary} lang={lang} />
    </>
  );
}
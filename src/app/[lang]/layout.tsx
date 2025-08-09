// src/app/[lang]/layout.tsx

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CookieConsentBanner } from "@/components/ui/CookieConsentBanner";
import { getDictionary } from "@/lib/dictionary";
import { i18n, Locale } from "@/lib/i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({
    lang: locale,
  }));
}

export default async function LangLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const { children } = props;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Navbar key={lang} dictionary={dictionary} lang={lang} />
      
      <main className="flex-grow">
        {children}
      </main>

      <Footer dictionary={dictionary} lang={lang} />
      <CookieConsentBanner dictionary={dictionary} lang={lang} />
    </>
  );
}
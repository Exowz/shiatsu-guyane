// src/app/[lang]/layout.tsx

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CookieConsentBanner } from "@/components/ui/CookieConsentBanner";
import { Signature } from "@/components/ui/Signature";
import { getDictionary } from "@/lib/dictionary";
import { i18n, Locale } from "@/lib/i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({
    lang: locale,
  }));
}

export default async function LangLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await props.params;
  const lang = rawLang as Locale;
  const { children } = props;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Header key={lang} dictionary={dictionary} lang={lang} />
      
      <main className="flex-grow">
        {children}
      </main>

      <Footer dictionary={dictionary} lang={lang} />
      <Signature dictionary={dictionary} />
      <CookieConsentBanner dictionary={dictionary} lang={lang} />
    </>
  );
}
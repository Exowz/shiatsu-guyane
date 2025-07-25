// src/app/[lang]/layout.tsx

import { Navbar } from "@/components/layout/Navbar";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/i18n-config";

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
    </>
  );
}
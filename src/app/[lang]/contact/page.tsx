import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/lib/i18n-config';

export default async function ContactPage(props: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);

  return (
    <div className="container mx-auto px-6 py-24">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p>Contact page content coming soon...</p>
    </div>
  );
}
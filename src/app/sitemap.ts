import type { MetadataRoute } from 'next';
import { i18n } from '@/lib/i18n-config';
import { SITE_CONFIG } from '@/lib/constants';

// Localized routes under /[lang]. Keep in sync with src/app/[lang]/**/page.tsx
const ROUTES = [
  '',
  '/about',
  '/contact',
  '/le-shiatsu',
  '/pour-qui',
  '/services-pricing',
  '/infos-pratiques',
  '/politique-confidentialite',
] as const;

// Map internal locale segment -> IETF hreflang code
const HREFLANG: Record<string, string> = {
  fr: 'fr',
  en: 'en',
  'pt-BR': 'pt-BR',
  es: 'es',
  'zh-cn': 'zh-CN',
  'zh-hk': 'zh-HK',
  hmn: 'hmn',
};

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url.replace(/\/$/, '');

  return ROUTES.map((route) => {
    const languages: Record<string, string> = {};
    for (const locale of i18n.locales) {
      languages[HREFLANG[locale] ?? locale] = `${base}/${locale}${route}`;
    }
    languages['x-default'] = `${base}/${i18n.defaultLocale}${route}`;

    return {
      url: `${base}/${i18n.defaultLocale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
      alternates: { languages },
    };
  });
}

export const i18n = {
  defaultLocale: 'fr',
  locales: ['fr', 'en', 'pt-BR', 'es', 'zh-cn', 'hmn', 'zh-hk'],
} as const;

export type Locale = (typeof i18n)['locales'][number];
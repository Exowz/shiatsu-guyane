import { cache } from 'react'; // 1. Import 'cache' from React
import type { Locale } from './i18n-config';
import type { Dictionary } from '@/types/dictionary';

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  fr: () => import('@/dictionaries/fr.json').then((module) => module.default),
  'pt-BR': () => import('@/dictionaries/pt-BR.json').then((module) => module.default),
  es: () => import('@/dictionaries/es.json').then((module) => module.default),
};

// 2. Wrap the entire function in the 'cache()' function
export const getDictionary = cache(async (locale: Locale): Promise<Dictionary> => {
  console.log("Requesting dictionary for locale:", locale); // You can leave this for now
  
  const loader = dictionaries[locale] || dictionaries.fr;
  return loader() as Promise<Dictionary>;
});
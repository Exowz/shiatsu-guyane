import { cache } from 'react';
import type { Locale } from './i18n-config';
import type { Dictionary } from '@/types/dictionary';

// Use static imports to avoid webpack JSON parsing issues
import enDict from '@/dictionaries/en.json';
import frDict from '@/dictionaries/fr.json';
import ptBRDict from '@/dictionaries/pt-BR.json';
import esDict from '@/dictionaries/es.json';
import zhCnDict from '@/dictionaries/zh-cn.json';
import hmnDict from '@/dictionaries/hmn.json';

const dictionaries = {
  en: enDict,
  fr: frDict,
  'pt-BR': ptBRDict,
  es: esDict,
  'zh-cn': zhCnDict,
  hmn: hmnDict,
};

export const getDictionary = cache(async (locale: Locale): Promise<Dictionary> => {
  const dictionary = dictionaries[locale] || dictionaries.fr;
  return Promise.resolve(dictionary as Dictionary);
});

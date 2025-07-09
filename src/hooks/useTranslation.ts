"use client";

import { useSyncExternalStore } from 'react';
import selectedLanguageStore, { Language } from '@/state/external/language';
import { SiteData } from '@/data';

// Import translation files
import enTranslations from '@/translations/en.json';
import hiTranslations from '@/translations/hi.json';

const translations: Record<Language, SiteData> = {
  EN: enTranslations as SiteData,
  HI: hiTranslations as SiteData,
};

export function useTranslation() {
  const selectedLanguage = useSyncExternalStore(
    selectedLanguageStore.subscribe,
    selectedLanguageStore.getSnapshot,
    selectedLanguageStore.getServerSnapshot
  );

  const t = translations[selectedLanguage];

  return {
    t,
    language: selectedLanguage,
  };
}

export default useTranslation; 
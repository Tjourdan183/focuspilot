// Can be imported from a shared config
export const locales = [
  // Germanic languages
  'de', // German
  'en', // English
  'nl', // Dutch
  
  // Romance languages
  'fr', // French
  'es', // Spanish
  'it', // Italian
  'pt', // Portuguese
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'de';

export const languageNames: Record<Locale, string> = {
  de: 'Deutsch',
  en: 'English',
  nl: 'Nederlands',
  fr: 'Français',
  es: 'Español',
  it: 'Italiano',
  pt: 'Português',
};

export const languageFlags: Record<Locale, string> = {
  de: '🇩🇪',
  en: '🇬🇧',
  nl: '🇳🇱',
  fr: '🇫🇷',
  es: '🇪🇸',
  it: '🇮🇹',
  pt: '🇵🇹',
}; 
import { useState, useEffect } from 'react';
import { Locale, defaultLocale } from './i18n';

type Messages = {
  [key: string]: any;
};

export function useTranslations() {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const [messages, setMessages] = useState<Messages>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get locale from localStorage or browser
    const savedLocale = localStorage.getItem('locale') as Locale;
    const browserLocale = navigator.language.split('-')[0] as Locale;
    
    const initialLocale = savedLocale || browserLocale || defaultLocale;
    setLocale(initialLocale);
  }, []);

  useEffect(() => {
    const loadMessages = async () => {
      setIsLoading(true);
      try {
        const response = await import(`../messages/${locale}.json`);
        setMessages(response.default);
      } catch (error) {
        console.error(`Failed to load messages for locale ${locale}:`, error);
        // Fallback to default locale
        if (locale !== defaultLocale) {
          const fallbackResponse = await import(`../messages/${defaultLocale}.json`);
          setMessages(fallbackResponse.default);
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadMessages();
  }, [locale]);

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value = messages;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return {
    locale,
    changeLocale,
    t,
    isLoading
  };
} 
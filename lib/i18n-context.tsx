'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { locales, Locale } from './i18n';

interface I18nContextType {
  locale: Locale;
  changeLocale: (locale: Locale) => void;
  t: (key: string) => string;
  isLoading: boolean;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('de');
  const [messages, setMessages] = useState<Record<string, unknown> | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load saved locale from localStorage
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && locales.includes(savedLocale)) {
      setLocale(savedLocale);
    }
  }, []);

  useEffect(() => {
    const loadMessages = async () => {
      setIsLoading(true);
      try {
        const messages = await import(`../messages/${locale}.json`);
        setMessages(messages.default);
      } catch (error) {
        console.error(`Failed to load messages for locale ${locale}:`, error);
        // Fallback to English if the selected locale fails to load
        const fallbackMessages = await import('../messages/en.json');
        setMessages(fallbackMessages.default);
      }
      setIsLoading(false);
    };

    loadMessages();
  }, [locale]);

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  const t = (key: string): string => {
    if (!messages) return key;
    
    const keys = key.split('.');
    let value: unknown = messages;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && value !== null && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <I18nContext.Provider value={{ locale, changeLocale, t, isLoading }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslations() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useTranslations must be used within an I18nProvider');
  }
  return context;
} 
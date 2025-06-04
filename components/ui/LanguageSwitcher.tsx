"use client";

import { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { locales, languageNames, languageFlags, Locale } from '@/lib/i18n';
import { useTranslations } from '@/lib/i18n-context';

export default function LanguageSwitcher() {
  const { locale, changeLocale } = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (newLocale: Locale) => {
    changeLocale(newLocale);
    setIsOpen(false);
  };

  // Group languages by family for better organization
  const languageGroups = {
    'Germanic': ['de', 'en', 'nl'],
    'Romance': ['fr', 'es', 'it', 'pt']
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-secondary/20 transition-colors duration-200 text-muted-foreground hover:text-foreground"
        aria-label="Select language"
      >
        <GlobeAltIcon className="w-5 h-5" />
        <span className="text-lg">{languageFlags[locale]}</span>
        <span className="hidden sm:inline text-sm font-medium">
          {languageNames[locale]}
        </span>
        <ChevronDownIcon 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-80 bg-background border border-border rounded-xl shadow-xl z-50 max-h-96 overflow-y-auto">
          <div className="p-3">
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <GlobeAltIcon className="w-4 h-4" />
              Select Language
            </h3>
            
            {Object.entries(languageGroups).map(([groupName, groupLocales]) => (
              <div key={groupName} className="mb-4 last:mb-0">
                <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 px-2">
                  {groupName}
                </h4>
                <div className="space-y-1">
                  {groupLocales.map((loc) => {
                    const localeKey = loc as Locale;
                    return (
                      <button
                        key={localeKey}
                        onClick={() => handleLanguageChange(localeKey)}
                        className={`
                          w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors duration-150
                          ${locale === localeKey 
                            ? 'bg-accent text-accent-foreground font-medium' 
                            : 'hover:bg-secondary/50 text-foreground'
                          }
                        `}
                      >
                        <span className="text-lg">{languageFlags[localeKey]}</span>
                        <span className="text-sm">{languageNames[localeKey]}</span>
                        {locale === localeKey && (
                          <div className="ml-auto w-2 h-2 bg-accent-foreground rounded-full"></div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 
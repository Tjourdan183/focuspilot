"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Settings, Shield, Eye, BarChart3, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/lib/i18n-context";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  personalization: boolean;
}

const CookieConsent = () => {
  const { t } = useTranslations();
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    personalization: false,
  });

  useEffect(() => {
    const cookieConsent = localStorage.getItem('focuspilot-cookie-consent');
    if (!cookieConsent) {
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    } else {
      const saved = JSON.parse(cookieConsent);
      setPreferences(saved.preferences);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    const consentData = {
      preferences: prefs,
      timestamp: new Date().toISOString(),
      version: "1.0"
    };
    localStorage.setItem('focuspilot-cookie-consent', JSON.stringify(consentData));
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      personalization: true,
    };
    savePreferences(allAccepted);
  };

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      personalization: false,
    };
    savePreferences(necessaryOnly);
  };

  const cookieCategories = [
    {
      key: 'necessary' as keyof CookiePreferences,
      icon: Shield,
      title: t("CookieConsent.categories.necessary.title"),
      description: t("CookieConsent.categories.necessary.description"),
      required: true,
      examples: t("CookieConsent.categories.necessary.examples")
    },
    {
      key: 'analytics' as keyof CookiePreferences,
      icon: BarChart3,
      title: t("CookieConsent.categories.analytics.title"),
      description: t("CookieConsent.categories.analytics.description"),
      required: false,
      examples: t("CookieConsent.categories.analytics.examples")
    },
    {
      key: 'marketing' as keyof CookiePreferences,
      icon: Zap,
      title: t("CookieConsent.categories.marketing.title"),
      description: t("CookieConsent.categories.marketing.description"),
      required: false,
      examples: t("CookieConsent.categories.marketing.examples")
    },
    {
      key: 'personalization' as keyof CookiePreferences,
      icon: Eye,
      title: t("CookieConsent.categories.personalization.title"),
      description: t("CookieConsent.categories.personalization.description"),
      required: false,
      examples: t("CookieConsent.categories.personalization.examples")
    }
  ];

  if (!showBanner && !showSettings) return null;

  return (
    <AnimatePresence>
      {(showBanner || showSettings) && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
            onClick={() => showSettings && setShowSettings(false)}
          />

          {showBanner && !showSettings && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="fixed bottom-6 left-6 right-6 md:left-8 md:right-8 lg:left-auto lg:right-8 lg:max-w-md glass rounded-2xl shadow-2xl border border-white/20 z-[9999]"
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {t("CookieConsent.banner.title")}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t("CookieConsent.banner.description")}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={acceptAll}
                    className="flex-1 bg-foreground hover:bg-foreground/90 text-background font-semibold rounded-xl"
                  >
                    {t("CookieConsent.banner.acceptAll")}
                  </Button>
                  <Button
                    onClick={acceptNecessary}
                    variant="outline"
                    className="flex-1 border-2 border-border hover:border-accent rounded-xl"
                  >
                    {t("CookieConsent.banner.acceptNecessary")}
                  </Button>
                  <Button
                    onClick={() => setShowSettings(true)}
                    variant="ghost"
                    className="flex-shrink-0 hover:bg-accent/10 rounded-xl"
                  >
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground mt-4 text-center">
                  {t("CookieConsent.banner.moreInfo")}{" "}
                  <a href="/privacy" className="text-accent hover:underline">
                    {t("CookieConsent.banner.privacyPolicy")}
                  </a>
                </p>
              </div>
            </motion.div>
          )}

          {showSettings && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-4 md:inset-8 lg:inset-16 glass rounded-2xl shadow-2xl border border-white/20 z-[9999] overflow-hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {t("CookieConsent.settings.title")}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      {t("CookieConsent.settings.subtitle")}
                    </p>
                  </div>
                  <Button
                    onClick={() => setShowSettings(false)}
                    variant="ghost"
                    size="sm"
                    className="rounded-xl"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <div className="flex-1 overflow-y-auto p-6">
                  <div className="space-y-6">
                    {cookieCategories.map((category) => {
                      const Icon = category.icon;
                      return (
                        <div
                          key={category.key}
                          className="glass rounded-xl p-6 border border-white/10"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-accent to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="text-lg font-semibold text-foreground">
                                  {category.title}
                                </h3>
                                <div className="flex items-center gap-2">
                                  {category.required && (
                                    <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full font-medium">
                                      {t("CookieConsent.settings.required")}
                                    </span>
                                  )}
                                  <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                      type="checkbox"
                                      checked={preferences[category.key]}
                                      onChange={(e) => {
                                        if (!category.required) {
                                          setPreferences(prev => ({
                                            ...prev,
                                            [category.key]: e.target.checked
                                          }));
                                        }
                                      }}
                                      disabled={category.required}
                                      className="sr-only"
                                    />
                                    <div className={`
                                      w-11 h-6 rounded-full transition-colors duration-200
                                      ${preferences[category.key] 
                                        ? 'bg-accent' 
                                        : 'bg-muted'
                                      }
                                      ${category.required ? 'opacity-50' : ''}
                                    `}>
                                      <div className={`
                                        w-4 h-4 bg-white rounded-full shadow-sm transform transition-transform duration-200
                                        ${preferences[category.key] 
                                          ? 'translate-x-6' 
                                          : 'translate-x-1'
                                        }
                                        mt-1
                                      `} />
                                    </div>
                                  </label>
                                </div>
                              </div>
                              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                                {category.description}
                              </p>
                              <p className="text-xs text-muted-foreground/80">
                                <strong>{t("CookieConsent.settings.examples")}:</strong> {category.examples}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="border-t border-border p-6">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={() => savePreferences(preferences)}
                      className="flex-1 bg-foreground hover:bg-foreground/90 text-background font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02]"
                    >
                      {t("CookieConsent.settings.savePreferences")}
                    </Button>
                    <Button
                      onClick={acceptAll}
                      variant="outline"
                      className="flex-1 border-2 border-border hover:border-accent rounded-xl transition-all duration-200"
                    >
                      {t("CookieConsent.settings.acceptAll")}
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 text-center">
                    {t("CookieConsent.settings.canChange")}{" "}
                    <a href="/privacy" className="text-accent hover:underline">
                      {t("CookieConsent.settings.privacyPolicy")}
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent; 
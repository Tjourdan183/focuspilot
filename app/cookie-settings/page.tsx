"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Eye, BarChart3, Zap, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/lib/i18n-context";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Link from "next/link";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  personalization: boolean;
}

export default function CookieSettingsPage() {
  const { t } = useTranslations();
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    personalization: false,
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('focuspilot-cookie-consent');
    if (cookieConsent) {
      const saved = JSON.parse(cookieConsent);
      setPreferences(saved.preferences);
    }
  }, []);

  const savePreferences = () => {
    const consentData = {
      preferences,
      timestamp: new Date().toISOString(),
      version: "1.0"
    };
    localStorage.setItem('focuspilot-cookie-consent', JSON.stringify(consentData));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
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

  return (
    <div className="relative min-h-screen bg-background">
      <AnimatedBackground isHomePage={false} />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">Privacy Settings</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
              <span className="text-gradient">{t("CookieConsent.settings.title")}</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("CookieConsent.settings.subtitle")}
            </p>
          </div>

          <div className="space-y-6">
            {cookieCategories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="glass rounded-2xl p-8 border border-white/20 shadow-lg"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-accent to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-foreground">
                          {category.title}
                        </h3>
                        <div className="flex items-center gap-3">
                          {category.required && (
                            <span className="text-sm bg-accent/20 text-accent px-3 py-1 rounded-full font-medium">
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
                              w-14 h-8 rounded-full transition-colors duration-200
                              ${preferences[category.key] 
                                ? 'bg-accent' 
                                : 'bg-muted'
                              }
                              ${category.required ? 'opacity-50' : ''}
                            `}>
                              <div className={`
                                w-6 h-6 bg-white rounded-full shadow-sm transform transition-transform duration-200
                                ${preferences[category.key] 
                                  ? 'translate-x-7' 
                                  : 'translate-x-1'
                                }
                                mt-1
                              `} />
                            </div>
                          </label>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {category.description}
                      </p>
                      <p className="text-sm text-muted-foreground/80">
                        <strong>{t("CookieConsent.settings.examples")}:</strong> {category.examples}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <div className="glass rounded-2xl p-8 border border-white/20">
              <Button
                onClick={savePreferences}
                className={`px-12 py-4 font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 ${
                  saved 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-foreground hover:bg-foreground/90'
                } text-background`}
              >
                {saved ? '✓ Saved!' : t("CookieConsent.settings.savePreferences")}
              </Button>
              
              <p className="text-sm text-muted-foreground mt-6">
                {t("CookieConsent.settings.canChange")}{" "}
                <Link href="/privacy" className="text-accent hover:underline">
                  {t("CookieConsent.settings.privacyPolicy")}
                </Link>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 
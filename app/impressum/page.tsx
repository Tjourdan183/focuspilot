"use client";
import React from "react";
import { motion } from "framer-motion";
import { Building2, Mail, Phone, MapPin, ArrowLeft, Shield, Globe } from "lucide-react";
import { useTranslations } from "@/lib/i18n-context";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Link from "next/link";

export default function ImpressumPage() {
  const { t, isLoading } = useTranslations();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">{t("Common.loading")}</p>
        </div>
      </div>
    );
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      } 
    }),
  };

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
            {t("Impressum.backToHome")}
          </Link>

          <div className="text-center mb-12">
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6"
            >
              <Building2 className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">{t("Impressum.badge")}</span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-4xl md:text-5xl font-black mb-6 tracking-tight"
            >
              <span className="text-gradient">{t("Impressum.title")}</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              {t("Impressum.subtitle")}
            </motion.p>
          </div>

          <div className="space-y-8">
            {/* Company Information */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="glass rounded-2xl p-8 border border-white/20 shadow-lg"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-6">{t("Impressum.company.title")}</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">{t("Impressum.company.details")}</h3>
                      <div className="space-y-2 text-muted-foreground">
                        <p className="font-medium text-foreground">Nexoventis AG</p>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-accent" />
                          <span>Bahnhofstrasse 10<br />8001 Zürich<br />Schweiz</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">{t("Impressum.company.contact")}</h3>
                      <div className="space-y-3 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-accent" />
                          <a href="tel:+41443112233" className="hover:text-accent transition-colors">
                            +41 (0) 44 311 22 33
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-accent" />
                          <a href="mailto:info@focuspilot.ai" className="hover:text-accent transition-colors">
                            info@focuspilot.ai
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-accent" />
                          <a href="https://www.focuspilot.ai" className="hover:text-accent transition-colors">
                            www.focuspilot.ai
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Legal Information */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="glass rounded-2xl p-8 border border-white/20 shadow-lg"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-6">{t("Impressum.legal.title")}</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">{t("Impressum.legal.registration")}</h3>
                      <div className="space-y-2 text-muted-foreground">
                        <p><strong>{t("Impressum.legal.registerNumber")}:</strong> CHE-123.456.789</p>
                        <p><strong>{t("Impressum.legal.taxNumber")}:</strong> CHE-123.456.789 MWST</p>
                        <p><strong>{t("Impressum.legal.court")}:</strong> {t("Impressum.legal.courtLocation")}</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">{t("Impressum.legal.management")}</h3>
                      <div className="space-y-2 text-muted-foreground">
                        <p><strong>{t("Impressum.legal.ceo")}:</strong> Thomas Jourdan</p>
                        <p><strong>{t("Impressum.legal.cto")}:</strong> Samuel Fricker</p>
                        <p><strong>{t("Impressum.legal.operations")}:</strong> Orhan Koca</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Responsible for Content */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={5}
              className="glass rounded-2xl p-8 border border-white/20 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">{t("Impressum.content.title")}</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>{t("Impressum.content.responsible")}</p>
                <div className="bg-muted/20 rounded-xl p-4">
                  <p className="font-medium text-foreground">Thomas Jourdan</p>
                  <p>Nexoventis AG</p>
                  <p>Bahnhofstrasse 10, 8001 Zürich</p>
                  <p>
                    <a href="mailto:thomas.jourdan@focuspilot.ai" className="text-accent hover:underline">
                      thomas.jourdan@focuspilot.ai
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Disclaimer */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={6}
              className="glass rounded-2xl p-8 border border-white/20 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">{t("Impressum.disclaimer.title")}</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{t("Impressum.disclaimer.liability.title")}</h3>
                  <p>{t("Impressum.disclaimer.liability.content")}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{t("Impressum.disclaimer.links.title")}</h3>
                  <p>{t("Impressum.disclaimer.links.content")}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{t("Impressum.disclaimer.copyright.title")}</h3>
                  <p>{t("Impressum.disclaimer.copyright.content")}</p>
                </div>
              </div>
            </motion.div>

            {/* Additional Links */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={7}
              className="text-center"
            >
              <div className="glass rounded-2xl p-8 border border-white/20">
                <h3 className="text-lg font-semibold text-foreground mb-4">{t("Impressum.links.title")}</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/privacy" className="text-accent hover:underline">
                    {t("Impressum.links.privacy")}
                  </Link>
                  <span className="text-muted-foreground">·</span>
                  <Link href="/terms" className="text-accent hover:underline">
                    {t("Impressum.links.terms")}
                  </Link>
                  <span className="text-muted-foreground">·</span>
                  <Link href="/cookie-settings" className="text-accent hover:underline">
                    {t("Impressum.links.cookies")}
                  </Link>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  {t("Impressum.lastUpdated")}: Januar 2025
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 
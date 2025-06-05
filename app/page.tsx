// app/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import { useState, useEffect } from "react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { useTranslations } from "@/lib/i18n-context";

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { t, isLoading } = useTranslations();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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

  return (
    <div className="relative min-h-screen bg-background">
      <AnimatedBackground isHomePage={true} />

      {/* Hero Section - Professional & Clean */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="relative z-10 text-center max-w-7xl mx-auto space-y-8">
          {/* Status badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 glass rounded-full">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-muted-foreground">
              {t("HomePage.statusBadge")}
            </span>
          </div>

          {/* Main headline */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight">
              <span className="block text-foreground">FocusPilot</span>
              <span className="block text-gradient">.ai</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("HomePage.subtitle")}
            </p>
          </div>

          {/* Professional CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button className="group relative px-8 py-4 bg-foreground hover:bg-foreground/90 text-background font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                {t("HomePage.cta.startTrial")}
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Button>
            
            <Button variant="outline" className="px-8 py-4 border-2 border-border glass rounded-xl transition-all duration-300 hover:border-accent">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t("HomePage.cta.watchDemo")}
              </span>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="relative mt-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 blur-2xl"></div>
            <div className="relative backdrop-blur-sm bg-black/5 dark:bg-black/20 rounded-xl border border-white/10">
              <div className="flex flex-wrap justify-center items-center gap-6 py-4 px-6">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1,2,3,4,5].map(i => (
                      <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-background"></div>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-slate-800 dark:text-white">{t("HomePage.trustIndicators.users")}</span>
                </div>
                <div className="text-sm font-medium text-slate-800 dark:text-white">{t("HomePage.trustIndicators.rating")}</div>
                <div className="text-sm font-medium text-slate-800 dark:text-white">{t("HomePage.trustIndicators.security")}</div>
              </div>
            </div>
          </div>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <Button variant="outline" className="h-16 px-8 glass hover:bg-accent/5 transition-all duration-300 border-2">
              <div className="flex items-center gap-3">
                <Image 
                  src="appstore.svg" 
                  alt="Download on App Store"
                  width={30}
                  height={30}
                  className="w-9 h-9"
                />
                <div className="text-left">
                  <div className="text-xs">{t("HomePage.appStores.appStore.prefix")}</div>
                  <div className="text-lg font-semibold">{t("HomePage.appStores.appStore.name")}</div>
                </div>
              </div>
            </Button>

            <Button variant="outline" className="h-16 px-8 glass hover:bg-accent/5 transition-all duration-300 border-2">
              <div className="flex items-center gap-3">
                <Image 
                  src="playstore.svg" 
                  alt="Get it on Play Store"
                  width={30}
                  height={30}
                  className="w-9 h-9"
                />
                <div className="text-left">
                  <div className="text-xs">{t("HomePage.appStores.playStore.prefix")}</div>
                  <div className="text-lg font-semibold">{t("HomePage.appStores.playStore.name")}</div>
                </div>
              </div>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section - Professional Cards */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Section header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
              <span className="text-sm font-medium text-muted-foreground">Features</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              <span className="text-foreground">{t("HomePage.features.title").split(' ')[0]} {t("HomePage.features.title").split(' ')[1]}</span>
              <br />
              <span className="text-gradient">{t("HomePage.features.title").split(' ')[2]}</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("HomePage.features.subtitle")}
            </p>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            {/* Feature 1 - AI Focus */}
            <div className="group relative h-full flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative glass rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] border border-transparent hover:border-accent/20 flex flex-col h-full">
                
                <div className="w-16 h-16 gradient-brand rounded-xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg">
                  🧠
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {t("HomePage.features.aiPowered.title")}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t("HomePage.features.aiPowered.description")}
                </p>
                
                <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all duration-300 mt-auto">
                  {t("HomePage.features.aiPowered.learnMore")} 
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Feature 2 - Smart Timer */}
            <div className="group relative h-full flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative glass rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] border border-transparent hover:border-accent/20 flex flex-col h-full">
                
                <div className="w-16 h-16 gradient-success rounded-xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg">
                  ⏰
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {t("HomePage.features.smartTimer.title")}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t("HomePage.features.smartTimer.description")}
                </p>
                
                <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all duration-300 mt-auto">
                  {t("HomePage.features.smartTimer.learnMore")} 
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Feature 3 - Analytics */}
            <div className="group relative h-full flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative glass rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] border border-transparent hover:border-accent/20 flex flex-col h-full">
                
                <div className="w-16 h-16 gradient-purple rounded-xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg">
                  📊
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {t("HomePage.features.analytics.title")}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t("HomePage.features.analytics.description")}
                </p>
                
                <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all duration-300 mt-auto">
                  {t("HomePage.features.analytics.learnMore")} 
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials with professional design */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <span className="text-sm font-medium text-muted-foreground">Testimonials</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            <span className="text-foreground">{t("HomePage.testimonials.title").split(' ')[0]} {t("HomePage.testimonials.title").split(' ')[1]}</span>
            <br />
            <span className="text-gradient">{t("HomePage.testimonials.title").split(' ').slice(2).join(' ')}</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("HomePage.testimonials.subtitle")}
          </p>
        </div>
        <div className="relative">
          <TestimonialsMarquee />
        </div>
      </section>

      {/* Final CTA - Professional */}
      <section className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="relative glass rounded-3xl p-16 shadow-2xl border border-accent/10">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-purple-500/5 rounded-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                <span className="text-gradient">{t("HomePage.finalCta.title")}</span>
              </h2>
              
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                {t("HomePage.finalCta.subtitle")}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="group relative px-12 py-6 bg-foreground hover:bg-foreground/90 text-background font-bold text-lg rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                  <span className="relative z-10 flex items-center gap-2">
                    {t("HomePage.finalCta.startTrial")}
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground mt-6">
                {t("HomePage.finalCta.features")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

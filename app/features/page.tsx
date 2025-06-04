// app/features/page.tsx
"use client";

import { useState } from "react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

export default function FeaturesPage() {
  const featureList = [
    {
      title: "KI-Fokus-Analyse",
      description: "Revolutionäre KI analysiert Ihre Arbeitsgewohnheiten in Echtzeit und optimiert automatisch Ihre produktivsten Zeitfenster für maximale Effizienz.",
      icon: "🧠",
      gradient: "from-purple-500/10 to-violet-500/10",
      borderGradient: "from-purple-500/20 to-violet-500/20"
    },
    {
      title: "Smart Focus Timer",
      description: "Intelligente Pomodoro-Timer, die sich dynamisch an Ihren Arbeitsrhythmus anpassen und für optimale Konzentrationsphasen sorgen.",
      icon: "⏰",
      gradient: "from-violet-500/10 to-fuchsia-500/10",
      borderGradient: "from-violet-500/20 to-fuchsia-500/20"
    },
    {
      title: "Real-time Analytics",
      description: "Spektakuläre Dashboards visualisieren Ihre Produktivitätsmuster mit interaktiven Diagrammen und actionable Insights.",
      icon: "📊",
      gradient: "from-fuchsia-500/10 to-purple-500/10",
      borderGradient: "from-fuchsia-500/20 to-purple-500/20"
    },
    {
      title: "Team Collaboration",
      description: "Nahtlose Integration für Teams mit geteilten Workspaces, Produktivitäts-Challenges und gemeinsamen Zielverfolgung.",
      icon: "🤝",
      gradient: "from-purple-500/10 to-violet-500/10",
      borderGradient: "from-purple-500/20 to-violet-500/20"
    },
    {
      title: "Smart Notifications",
      description: "Intelligente Benachrichtigungen, die Sie zur richtigen Zeit motivieren, ohne Ihren Flow zu unterbrechen.",
      icon: "🔔",
      gradient: "from-violet-500/10 to-fuchsia-500/10",
      borderGradient: "from-violet-500/20 to-fuchsia-500/20"
    },
    {
      title: "Cross-Platform Sync",
      description: "Synchronisiert nahtlos zwischen Desktop, Mobile und Web - Ihre Produktivität überall verfügbar.",
      icon: "🔄",
      gradient: "from-fuchsia-500/10 to-purple-500/10",
      borderGradient: "from-fuchsia-500/20 to-purple-500/20"
    }
  ];

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground colorVariant="purple" />
      
      {/* Main Content */}
      <main className="relative">
        {/* Header Section */}
        <section className="relative py-32 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 glass rounded-full mb-8">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-muted-foreground">
                Revolutionary Features
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight">
              <span className="text-foreground">Premium</span>
              <br />
              <span className="text-gradient">Features</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed">
              Entdecken Sie die Zukunft der Produktivität mit 
              <span className="font-semibold text-foreground">
                KI-gestützten Tools, die Sie begeistern werden.
              </span>
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featureList.map((feature, idx) => (
                <div
                  key={idx}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className="relative glass rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] h-full flex flex-col border border-transparent hover:border-accent/20">
                    
                    <div className={`w-20 h-20 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center text-4xl mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300 text-white`}>
                      {feature.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-gradient transition-all duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed text-lg flex-1 mb-6">
                      {feature.description}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-border">
                      <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all duration-300">
                        Mehr erfahren 
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose FocusPilot Section */}
        <section className="relative py-32 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 px-4 py-2 glass rounded-full mb-8">
                <span className="text-sm font-medium text-muted-foreground">
                  🌟 Warum FocusPilot?
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">
                <span className="text-gradient">
                  Der Unterschied
                </span>
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Was FocusPilot zur besten Produktivitätsplattform der Welt macht.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                {[
                  {
                    icon: "🤖",
                    title: "Echte KI-Integration",
                    description: "Nicht nur ein Timer - eine intelligente Plattform, die von Ihrem Verhalten lernt."
                  },
                  {
                    icon: "🎨",
                    title: "Wunderschönes Design",
                    description: "Jedes Detail wurde für maximale Benutzerfreundlichkeit und Ästhetik optimiert."
                  },
                  {
                    icon: "🔒",
                    title: "Datenschutz First",
                    description: "Ihre Daten bleiben privat. DSGVO-konform und ende-zu-ende verschlüsselt."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg flex-shrink-0 text-white">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-violet-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative glass rounded-3xl p-12 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] border border-transparent hover:border-accent/20">
                  <div className="text-center">
                    <div className="text-6xl mb-8">📈</div>
                    <h3 className="text-3xl font-bold text-foreground mb-6">
                      +200% Produktivität
                    </h3>
                    <p className="text-xl text-muted-foreground mb-8">
                      Durchschnittliche Steigerung unserer Nutzer in den ersten 30 Tagen.
                    </p>
                    <div className="grid grid-cols-3 gap-6 text-center">
                      <div>
                        <div className="text-2xl font-bold text-purple-500">10k+</div>
                        <div className="text-sm text-muted-foreground">Aktive Nutzer</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-500">4.9★</div>
                        <div className="text-sm text-muted-foreground">App Rating</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-500">98%</div>
                        <div className="text-sm text-muted-foreground">Zufriedenheit</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 px-4">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="relative glass rounded-3xl p-16 shadow-2xl border border-accent/10">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-purple-500/5 rounded-3xl"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                  <span className="text-gradient">
                    Bereit für den Boost?
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                  Erleben Sie alle Features kostenlos für 14 Tage - keine Kreditkarte erforderlich.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group relative px-12 py-6 bg-foreground hover:bg-foreground/90 text-background font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <span className="relative z-10 flex items-center gap-2">
                      🚀 Kostenlos testen
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                  <button className="px-12 py-6 border-2 border-border glass rounded-xl transition-all duration-300 hover:border-accent text-foreground font-bold text-lg">
                    📹 Demo ansehen
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

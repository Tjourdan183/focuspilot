// app/about/page.tsx
"use client";

import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import Image from "next/image";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground colorVariant="yellow" />
      
      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-32 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 glass rounded-full mb-8">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-muted-foreground">
                About Us
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight">
              <span className="text-foreground">Unsere</span>
              <br />
              <span className="text-gradient">Vision</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              Wir revolutionieren die Art, wie Menschen arbeiten und produktiv sind. 
              <span className="font-semibold text-foreground">
                Mit KI-gestützter Innovation für eine bessere Zukunft.
              </span>
            </p>
          </div>
        </section>

        {/* Story & Mission Sections */}
        <section className="relative py-20 px-4">
          <div className="max-w-6xl mx-auto space-y-32">
            
            {/* Our Story */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 glass rounded-full">
                  <span className="text-sm font-medium text-muted-foreground">
                    📖 Unsere Geschichte
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                  <span className="text-gradient">
                    Wie alles begann
                  </span>
                </h2>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  FocusPilot.ai wurde von <span className="font-bold text-foreground">Samuel</span> gegründet, einem leidenschaftlichen
                  Software-Entwickler, der nach einer revolutionären Lösung suchte, um sein
                  eigenes Zeitmanagement und seinen Fokus zu optimieren.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Aus dieser Vision entstand eine Plattform, die heute weltweit Teams und
                  Einzelpersonen dabei hilft, <span className="font-semibold text-foreground">ihre Produktivität zu revolutionieren</span> und
                  ihre Ziele zu erreichen.
                </p>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative glass rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] border border-transparent hover:border-accent/20">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                    alt="Team working together"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-lg w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Our Mission */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative group order-2 lg:order-1">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative glass rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] border border-transparent hover:border-accent/20">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                    alt="Mission visualization"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-lg w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="space-y-8 order-1 lg:order-2">
                <div className="inline-flex items-center gap-3 px-4 py-2 glass rounded-full">
                  <span className="text-sm font-medium text-muted-foreground">
                    🎯 Unsere Mission
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                  <span className="text-gradient">
                    Produktivität neu definieren
                  </span>
                </h2>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Wir glauben daran, dass jeder Mensch das Potenzial hat, <span className="font-bold text-foreground">Höchstleistungen zu erbringen</span>,
                  wenn Ablenkungen minimiert und Fokus maximiert werden.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Mit Hilfe von <span className="font-semibold text-foreground">KI-gestützter Analyse</span>, intuitiven Benutzeroberflächen und bewährten
                  Zeitmanagement-Methoden wollen wir Menschen auf der ganzen Welt dabei unterstützen,
                  ihre Träume zu verwirklichen.
                </p>
              </div>
            </div>

            {/* Values Section */}
            <div className="text-center">
              <div className="inline-flex items-center gap-3 px-4 py-2 glass rounded-full mb-12">
                <span className="text-sm font-medium text-muted-foreground">
                  💎 Unsere Werte
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tight">
                <span className="text-gradient">
                  Woran wir glauben
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "🚀",
                    title: "Innovation",
                    description: "Wir pushen kontinuierlich die Grenzen dessen, was in der Produktivitätstechnologie möglich ist.",
                    gradient: "from-blue-500/10 to-purple-500/10"
                  },
                  {
                    icon: "🤝",
                    title: "Gemeinschaft", 
                    description: "Erfolg entsteht gemeinsam. Wir bauen Tools, die Teams und Individuen gleichermaßen stärken.",
                    gradient: "from-emerald-500/10 to-cyan-500/10"
                  },
                  {
                    icon: "⚡",
                    title: "Einfachheit",
                    description: "Die beste Technologie ist unsichtbar. Wir schaffen intuitive Erlebnisse, die einfach funktionieren.",
                    gradient: "from-purple-500/10 to-pink-500/10"
                  }
                ].map((value, index) => (
                  <div key={index} className="group relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className="relative glass rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] border border-transparent hover:border-accent/20">
                      <div className="text-4xl mb-6">{value.icon}</div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative py-32">
          <div className="max-w-7xl mx-auto px-4 text-center mb-12 relative z-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 glass rounded-full mb-8">
              <span className="text-sm font-medium text-muted-foreground">
                🌟 Testimonials
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
              <span className="text-foreground">
                Was unsere
              </span>
              <br />
              <span className="text-gradient">
                Community sagt
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Über 10.000 Menschen haben bereits ihre Produktivität mit FocusPilot revolutioniert.
            </p>
          </div>
          <div className="relative z-10">
            <TestimonialsMarquee />
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative glass rounded-3xl p-16 shadow-2xl border border-accent/10">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-purple-500/5 rounded-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                  <span className="text-gradient">
                    Bereit mitzumachen?
                  </span>
                </h2>
                
                <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                  Werden Sie Teil der FocusPilot-Community und revolutionieren Sie Ihre Produktivität noch heute.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group relative px-12 py-6 bg-foreground hover:bg-foreground/90 text-background font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <span className="relative z-10 flex items-center gap-2">
                      🚀 Jetzt kostenlos starten
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                </div>
                
                <p className="text-sm text-muted-foreground mt-6">
                  ✅ 14 Tage kostenlos · ✅ Keine Kreditkarte erforderlich · ✅ Sofortiger Zugang
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

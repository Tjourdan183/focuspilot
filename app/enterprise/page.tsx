// app/enterprise/page.tsx
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

export default function EnterprisePage() {
  return (
    <div className="relative min-h-screen bg-background">
      <AnimatedBackground colorVariant="green" isHomePage={false} />
      <main className="flex flex-col bg-background text-foreground font-sans">
        {/* Green blur accent for enterprise page */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-[600px] h-[400px] bg-green-500/20 blur-3xl rounded-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" style={{zIndex:0}} />
        </div>
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 text-center mb-12">
            <h1 className="text-4xl font-bold">Enterprise Solutions</h1>
            <p className="mt-4 text-muted-foreground">
              Individuelle Unternehmenslösungen für große Teams.
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-3">
            <div className="glass rounded-card p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-2 border-white/20 dark:border-white/10">
              <h3 className="text-2xl font-semibold mb-3">Dedicated Support</h3>
              <p className="text-muted-foreground">
                Persönlicher Ansprechpartner für deinen gesamten Enterprise-Account.
              </p>
            </div>
            <div className="glass rounded-card p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-2 border-white/20 dark:border-white/10">
              <h3 className="text-2xl font-semibold mb-3">Custom SLAs</h3>
              <p className="text-muted-foreground">
                Maßgeschneiderte Service-Level-Agreements, abgestimmt auf deine Geschäftsprozesse.
              </p>
            </div>
            <div className="glass rounded-card p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-2 border-white/20 dark:border-white/10">
              <h3 className="text-2xl font-semibold mb-3">Advanced Security</h3>
              <p className="text-muted-foreground">
                Enterprise-Grade Sicherheitsfeatures, Single Sign-On und Audit-Logs.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" onClick={() => { /* Kontakt-Formular o.Ä. */ }}>
              Anfrage stellen
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}

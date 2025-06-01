"use client";
import React from "react";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col font-inter bg-white pt-24">
      <h1 className="text-3xl font-bold text-center mt-12">🚀 About Page Loaded 🚀</h1>

      {/* ---------- About Section ---------- */}
      <section id="about" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold">About Focuspilot.ai</h2>
          <p className="mt-4 text-gray-600">
            Focuspilot.ai wurde entwickelt, um Einzelpersonen und Teams dabei zu helfen, Ablenkungen
            zu reduzieren und ihre Produktivität auf das nächste Level zu heben. Wir glauben an
            den Fokus als Schlüssel zum Erfolg – und bauen Werkzeuge, die genau dabei unterstützen.
          </p>
          <p className="mt-8 text-gray-600">
            Unser Team besteht aus Entwickler:innen, Designer:innen und Produktstrateg:innen, die
            alle eines gemeinsam haben: Die Leidenschaft für effizientes Arbeiten.  
            No fluff, real tools.
          </p>
        </div>
      </section>
    </main>
  );
}

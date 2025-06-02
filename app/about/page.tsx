"use client";
import React from "react";
import TestimonialsMarquee from '@/components/TestimonialsMarquee'

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col font-inter bg-white pt-24">
      <h1 className="text-3xl font-bold text-center mt-12">🚀 About Page Loaded 🚀</h1>

      {/* ---------- About Section ---------- */}
      <section id="about" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold">About Focuspilot.ai</h2>
          <p className="mt-4 text-gray-600">
            Daddy Samuel ist ein 20-jähriger, der sich in der Entwicklung von Software und Technologe befasst. 
          </p>
          <p className="mt-8 text-gray-600">
            Ich bin der Master, der absolute top G
          </p>
        </div>
      </section>

      {/* ------------- NEW ------------- */}
      <TestimonialsMarquee />
    </main>
  );
}

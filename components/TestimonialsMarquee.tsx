// components/TestimonialsMarquee.tsx
"use client";

import Image from "next/image";
import React from "react";

type Testimonial = {
  avatar: string;
  name: string;
  title: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "Alex MacCaw",
    title: "CEO, Reflect",
    quote: `FocusPilot ist das beste Produktivitäts-Tool, das ich in Jahren verwendet habe. Die KI-gestützte Analyse hat meine Arbeitsweise komplett revolutioniert.`,
  },
  {
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Wes Bos",
    title: "Developer & Educator",
    quote: "FocusPilot ist hands down meine größte Workflow-Verbesserung seit Jahren. Absolut genial!",
  },
  {
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "David Chen",
    title: "Product Manager, Vercel",
    quote: `Das nützlichste KI-Tool, für das ich momentan bezahle, ist eindeutig FocusPilot. Es ist schnell, intelligent und perfekt durchdacht.`,
  },
  {
    avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
    name: "Sarah Johnson",
    title: "Startup Founder",
    quote: "Mit FocusPilot habe ich meine Produktivität um 200% gesteigert. Die KI versteht einfach, wie ich arbeite.",
  },
  {
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    name: "Michael Rodriguez",
    title: "Designer",
    quote: "Unglaublich, wie FocusPilot meine Kreativphasen optimiert hat. Ich bin produktiver denn je!",
  },
  {
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    name: "Emma Williams", 
    title: "Content Creator",
    quote: "FocusPilot hat mir geholfen, endlich Work-Life-Balance zu finden. Einfach perfekt durchdacht.",
  },
];

const doubled = [...testimonials, ...testimonials];

export default function TestimonialsMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-20">
      
      {/* Gradient Overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-900 z-10"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent dark:from-slate-900 z-10"></div>

      <div className="flex gap-6">
        {/* Column 1 */}
        <ul className="flex flex-col gap-6 animate-scroll-slow">
          {doubled.map((t, i) => (
            <li
              key={`col1-${i}`}
              className="group w-80 backdrop-blur-xl bg-white/10 dark:bg-black/10 rounded-3xl border border-white/20 dark:border-white/10 p-6 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:scale-105"
            >
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={50}
                  height={50}
                  className="rounded-full ring-2 ring-white/20 shadow-lg"
                />
                <div>
                  <p className="font-semibold text-slate-800 dark:text-white">{t.name}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{t.title}</p>
                </div>
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed italic">
                "{t.quote}"
              </p>
              
              <div className="flex mt-4 text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </li>
          ))}
        </ul>

        {/* Column 2 */}
        <ul
          className="flex flex-col gap-6 animate-scroll-medium"
          style={{ animationDelay: "-10s" }}
        >
          {doubled.map((t, i) => (
            <li
              key={`col2-${i}`}
              className="group w-80 backdrop-blur-xl bg-white/10 dark:bg-black/10 rounded-3xl border border-white/20 dark:border-white/10 p-6 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:scale-105"
            >
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={50}
                  height={50}
                  className="rounded-full ring-2 ring-white/20 shadow-lg"
                />
                <div>
                  <p className="font-semibold text-slate-800 dark:text-white">{t.name}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{t.title}</p>
                </div>
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed italic">
                "{t.quote}"
              </p>
              
              <div className="flex mt-4 text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </li>
          ))}
        </ul>

        {/* Column 3 */}
        <ul
          className="flex flex-col gap-6 animate-scroll-fast"
          style={{ animationDelay: "-20s" }}
        >
          {doubled.map((t, i) => (
            <li
              key={`col3-${i}`}
              className="group w-80 backdrop-blur-xl bg-white/10 dark:bg-black/10 rounded-3xl border border-white/20 dark:border-white/10 p-6 shadow-2xl hover:shadow-green-500/10 transition-all duration-500 hover:scale-105"
            >
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={50}
                  height={50}
                  className="rounded-full ring-2 ring-white/20 shadow-lg"
                />
                <div>
                  <p className="font-semibold text-slate-800 dark:text-white">{t.name}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{t.title}</p>
                </div>
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed italic">
                "{t.quote}"
              </p>
              
              <div className="flex mt-4 text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

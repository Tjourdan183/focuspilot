// components/TestimonialsMarquee.tsx
"use client";

import Image from "next/image";
import React from "react";
import "../app/testimonials.css";

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

export default function TestimonialsMarquee() {
  // Create three different arrays with different starting positions
  const row1 = [...testimonials];
  const row2 = [...testimonials.slice(2), ...testimonials.slice(0, 2)];
  const row3 = [...testimonials.slice(4), ...testimonials.slice(0, 4)];

  return (
    <div className="relative w-full overflow-hidden py-20">
      <div className="flex flex-col gap-12">
        {/* Row 1 - Slowest */}
        <div className="flex scroll-row scroll-row-1">
          <div className="flex gap-6 pr-6">
            {[...row1, ...row1].map((testimonial, i) => (
              <div
                key={`row1-${i}`}
                className="w-[350px] flex-shrink-0 px-2"
              >
                <div className="glass rounded-3xl p-6 border border-white/20 dark:border-white/10 opacity-70 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full ring-2 ring-white/20 shadow-lg"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                  <div className="mb-4 text-gray-600">
                    <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
                  </div>
                  <div className="flex mt-4 text-yellow-400">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Medium Speed */}
        <div className="flex scroll-row scroll-row-2">
          <div className="flex gap-6 pr-6">
            {[...row2, ...row2].map((testimonial, i) => (
              <div
                key={`row2-${i}`}
                className="w-[350px] flex-shrink-0 px-2"
              >
                <div className="glass rounded-3xl p-6 border border-white/20 dark:border-white/10 opacity-70 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full ring-2 ring-white/20 shadow-lg"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                  <div className="mb-4 text-gray-600">
                    <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
                  </div>
                  <div className="flex mt-4 text-yellow-400">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3 - Fastest */}
        <div className="flex scroll-row scroll-row-3">
          <div className="flex gap-6 pr-6">
            {[...row3, ...row3].map((testimonial, i) => (
              <div
                key={`row3-${i}`}
                className="w-[350px] flex-shrink-0 px-2"
              >
                <div className="glass rounded-3xl p-6 border border-white/20 dark:border-white/10 opacity-70 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full ring-2 ring-white/20 shadow-lg"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                  <div className="mb-4 text-gray-600">
                    <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
                  </div>
                  <div className="flex mt-4 text-yellow-400">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// app/resources/page.tsx
"use client";

import Link from "next/link";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

export default function ResourcesPage() {
  const resources = [
    {
      title: "Blog",
      description: "Lies unsere neuesten Artikel zu Produktivitätstipps und Best Practices.",
      href: "#",
    },
    {
      title: "Tutorials",
      description: "Schritt-für-Schritt-Anleitungen, um das Beste aus FocusPilot.ai herauszuholen.",
      href: "#",
    },
    {
      title: "User Stories",
      description: "Erfahre, wie andere ihren Workflow mit FocusPilot.ai verbessert haben.",
      href: "#",
    },
  ];

  return (
    <div className="relative min-h-screen bg-background">
      <AnimatedBackground colorVariant="red" />
      
      <main className="flex flex-col bg-background text-foreground font-sans">
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 text-center mb-12">
            <h1 className="text-4xl font-bold">Resources</h1>
            <p className="mt-4 text-muted-foreground">Vertiefe dich in unsere Blogs, Tutorials und Success Stories.</p>
          </div>

          <div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((res, idx) => (
              <div
                key={idx}
                className="glass rounded-card p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-2 border-white/20 dark:border-white/10"
              >
                <h3 className="text-2xl font-semibold mb-3">{res.title}</h3>
                <p className="text-muted-foreground mb-6">{res.description}</p>
                <Link href={res.href} className="inline-flex items-center text-accent hover:gap-2 transition-all duration-300">
                  Mehr erfahren 
                  <svg className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

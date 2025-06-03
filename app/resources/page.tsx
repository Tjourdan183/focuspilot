// app/resources/page.tsx
"use client";

import Link from "next/link";

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
              className="bg-card rounded-card shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-2">{res.title}</h3>
              <p className="text-muted-foreground mb-4">{res.description}</p>
              <Link href={res.href} className="text-primary hover:underline">
                Mehr erfahren →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

// app/pricing/page.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      features: ["Basic Task Management", "Focus Timer", "✗ Analytics"],
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$9/mo",
      features: ["✓ All Free features", "✓ Advanced Analytics", "✓ Team Collaboration"],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["✓ Everything in Pro", "✓ Advanced Security", "✓ Dedicated Support"],
      highlighted: false,
    },
  ];

  return (
    <div className="relative min-h-screen bg-background">
      <AnimatedBackground colorVariant="blue" isHomePage={false} />
      <main className="flex flex-col bg-background text-foreground font-sans">
        {/* Blue blur accent for pricing page */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-[600px] h-[400px] bg-blue-500/20 blur-3xl rounded-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" style={{zIndex:0}} />
        </div>
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 text-center mb-12">
            <h1 className="text-4xl font-bold">Pricing</h1>
            <p className="mt-4 text-muted-foreground">Finde den Plan, der am besten zu dir passt.</p>
          </div>

          <div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`glass flex flex-col rounded-card p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative ${
                  plan.highlighted 
                  ? "border-2 border-primary shadow-[0_0_30px_-5px] shadow-primary/30 dark:shadow-primary/20 bg-gradient-to-b from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10" 
                  : "border-2 border-white/20 dark:border-white/10"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/5 rounded-card opacity-60 pointer-events-none" />
                )}
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                  <p className="text-3xl font-extrabold mb-6">
                    {plan.price}
                    {plan.name !== "Enterprise" && <span className="text-base font-normal text-muted-foreground">/mo</span>}
                  </p>
                  <ul className="flex-1 space-y-4 text-left text-muted-foreground">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className={f.startsWith('✓') ? 'text-emerald-500' : f.startsWith('✗') ? 'text-red-500' : 'text-muted-foreground'}>
                          {f.startsWith('✓') ? '✓' : f.startsWith('✗') ? '✗' : '•'}
                        </span>
                        {f.replace(/^[✓✗]\s/, '')}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 text-center">
                    {plan.highlighted ? (
                      <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                        Start free trial
                      </Button>
                    ) : (
                      <Button variant="outline" size="lg" className="w-full hover:border-accent/50 transition-all duration-300 hover:scale-[1.02]">
                        {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/">
              <Button variant="ghost">← Zurück zur Startseite</Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

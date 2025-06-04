// app/contact/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

export default function ContactPage() {
  // Formular-State (optional: echte Logik)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="relative min-h-screen bg-background">
      <AnimatedBackground colorVariant="orange" />
      
      <main className="flex flex-col bg-background text-foreground font-sans">
        <section className="py-20 bg-background">
          <div className="max-w-3xl mx-auto px-6">
            <h1 className="text-4xl font-bold text-center mb-6">Kontaktieren Sie uns</h1>
            <p className="text-muted-foreground text-center mb-12">
              Hast du Fragen, Feedback oder möchtest du Teil unserer Beta-User werden? Schreib uns!
            </p>

            <form className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Dein Name"
                  className="w-full border-border rounded-md px-4 py-2 focus:ring focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">E-Mail</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="deine@example.com"
                  className="w-full border-border rounded-md px-4 py-2 focus:ring focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">Nachricht</label>
                <textarea
                  id="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Deine Nachricht…"
                  className="w-full border-border rounded-md px-4 py-2 focus:ring focus:ring-primary focus:border-primary"
                />
              </div>
              <div className="text-center">
                <Button size="lg" onClick={() => { /* Sende-Logik */ }}>
                  Absenden
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

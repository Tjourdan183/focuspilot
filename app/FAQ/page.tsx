'use client';
import { useState } from 'react';
import AnimatedBackground from "@/components/ui/AnimatedBackground";

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group glass rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] mb-6 border border-transparent hover:border-accent/20">
      <button
        className="flex justify-between items-center w-full py-6 px-8 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">{question}</span>
        <span className={`transform transition-all duration-300 text-xl ${isOpen ? 'rotate-180 text-accent' : 'text-muted-foreground'}`}>
          ▼
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <div className="px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6"></div>
          <p className="text-muted-foreground leading-relaxed text-lg">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const faqs = [
    {
      question: "Was ist FocusPilot?",
      answer: "FocusPilot ist eine innovative KI-gestützte Produktivitätsplattform, die Ihnen hilft, maximalen Fokus zu erreichen und Ihre Effizienz während der Arbeitszeit zu steigern. Wir kombinieren künstliche Intelligenz mit wissenschaftlich fundierten Produktivitätstechniken."
    },
    {
      question: "Wie funktioniert der Fokus-Timer?",
      answer: "Unser intelligenter Timer basiert auf der bewährten Pomodoro-Technik, passt sich aber an Ihre persönlichen Produktivitätsmuster an. Die KI analysiert Ihr Arbeitsverhalten und optimiert automatisch die Fokus- und Pausenzeiten für maximale Effizienz."
    },
    {
      question: "Kann ich FocusPilot mit anderen Tools integrieren?",
      answer: "Ja! FocusPilot lässt sich nahtlos mit beliebten Produktivitätstools wie Notion, Trello, Asana und Google Calendar integrieren. So können Sie Ihren bestehenden Workflow beibehalten und gleichzeitig von unseren Focus-Features profitieren."
    },
    {
      question: "Gibt es eine kostenlose Testversion?",
      answer: "Absolut! Wir bieten eine 14-tägige kostenlose Testphase mit vollem Zugang zu allen Features. Keine Kreditkarte erforderlich. Nach der Testphase können Sie aus unseren flexiblen Preisplänen wählen."
    },
    {
      question: "Wie nutzt FocusPilot künstliche Intelligenz?",
      answer: "Unsere KI analysiert Ihre Arbeitsmuster, Aufgaben-Completion-Raten und Fokussitzungen, um personalisierte Empfehlungen zu geben. Sie hilft beim Optimieren Ihres Zeitplans, schlägt die besten Zeiten für Deep Work vor und passt sich an Ihre natürlichen Produktivitätsrhythmen an."
    },
    {
      question: "Funktioniert FocusPilot offline?",
      answer: "Ja! FocusPilot hat einen Offline-Modus, der es Ihnen ermöglicht, die wichtigsten Features auch ohne Internetverbindung zu nutzen. Ihre Daten werden automatisch synchronisiert, sobald Sie wieder online sind."
    },
    {
      question: "Was macht FocusPilot besonders?",
      answer: "FocusPilot zeichnet sich durch intelligente Anpassung an Ihren Arbeitsstil, nahtlose Integrationen und den Fokus auf wissenschaftliche Produktivitätsprinzipien aus. Im Gegensatz zu traditionellen Apps lernt FocusPilot von Ihrem Verhalten und erschafft ein personalisiertes Produktivitätssystem."
    }
  ];

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground colorVariant="teal" />
      
      {/* Main Content */}
      <main className="relative">
        <div className="relative z-10 max-w-4xl mx-auto py-32 px-4">
          
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-4 py-2 glass rounded-full mb-8">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-muted-foreground">
                Frequently Asked Questions
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
              <span className="text-foreground">FAQ</span>
              <br />
              <span className="text-gradient">Center</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Alles was Sie über FocusPilot wissen möchten - 
              <span className="font-semibold text-foreground">
                klar und verständlich erklärt.
              </span>
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4 mb-20">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          
          {/* Contact Support Section */}
          <div className="relative glass rounded-3xl p-12 shadow-2xl border border-accent/10">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-purple-500/5 rounded-3xl"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">
                <span className="text-gradient">
                  Noch Fragen?
                </span>
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8">
                Finden Sie nicht die Antwort, die Sie suchen? Unser Support-Team hilft Ihnen gerne weiter!
              </p>
              
              <a
                href="mailto:support@focuspilot.net"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-foreground hover:bg-foreground/90 text-background font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  📧 Support kontaktieren
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              
              <p className="text-sm text-muted-foreground mt-6">
                ⚡ Antwort in weniger als 24h · 🌍 Deutsch & English · 💬 Live Chat verfügbar
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 
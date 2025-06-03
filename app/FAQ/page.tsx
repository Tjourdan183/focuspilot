'use client';
import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 mb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const faqs = [
    {
      question: "What is FocusPilot?",
      answer: "FocusPilot is an innovative productivity tool designed to help you maintain focus and maximize your efficiency during work sessions. It combines AI-powered task management with scientifically-backed productivity techniques to help you achieve your goals."
    },
    {
      question: "How does the focus timer work?",
      answer: "Our focus timer is based on the proven Pomodoro Technique, but with smart adaptations. It typically consists of 25-minute focus sessions followed by 5-minute breaks. However, FocusPilot's AI can adjust these intervals based on your personal productivity patterns and the type of work you're doing."
    },
    {
      question: "Can I integrate FocusPilot with other tools?",
      answer: "Yes! FocusPilot seamlessly integrates with popular productivity tools like Notion, Trello, Asana, and Google Calendar. This allows you to maintain your existing workflow while benefiting from FocusPilot's focus-enhancing features."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card is required to start your trial. After the trial period, you can choose from our flexible pricing plans that suit your needs."
    },
    {
      question: "How does FocusPilot use AI?",
      answer: "FocusPilot's AI analyzes your work patterns, task completion rates, and focus sessions to provide personalized recommendations. It helps optimize your schedule, suggests the best times for deep work, and adapts to your natural productivity rhythms."
    },
    {
      question: "Can I use FocusPilot offline?",
      answer: "Yes, FocusPilot has an offline mode that allows you to continue using core features without an internet connection. Your data will automatically sync once you're back online."
    },
    {
      question: "What makes FocusPilot different from other productivity apps?",
      answer: "FocusPilot stands out through its intelligent adaptation to your work style, seamless integrations, and focus on scientific productivity principles. Unlike traditional productivity apps, FocusPilot learns from your behavior to create a personalized productivity system."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      
      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Still have questions?</h2>
        <p className="text-gray-600 mb-4">
          Can't find the answer you're looking for? Please reach out to our support team.
        </p>
        <a
          href="mailto:support@focuspilot.net"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
} 
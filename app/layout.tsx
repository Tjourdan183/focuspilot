// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'FocusPilot - AI-Powered Productivity Platform',
  description: 'Transform your productivity with AI-powered focus techniques and personalized coaching',
  keywords: 'productivity, AI, focus, time management, coaching, mental health',
  authors: [{ name: 'FocusPilot Team' }],
  creator: 'FocusPilot',
  publisher: 'FocusPilot',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'FocusPilot - AI-Powered Productivity Platform',
    description: 'Transform your productivity with AI-powered focus techniques and personalized coaching',
    url: 'https://focuspilot.com',
    siteName: 'FocusPilot',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FocusPilot - AI-Powered Productivity Platform',
    description: 'Transform your productivity with AI-powered focus techniques and personalized coaching',
    creator: '@focuspilot',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
    yahoo: 'your-yahoo-verification',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-white dark:bg-black text-foreground transition-colors duration-300">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

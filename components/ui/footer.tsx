// components/ui/Footer.tsx
"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer 
      className="relative w-full text-foreground dark:text-secondary-foreground text-sm py-12 px-6 overflow-hidden transition-colors duration-300" 
      style={{ 
        backgroundColor: 'white'
      }}
    >
      {/* Subtle blur/gradient at the top for smooth transition */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-24 w-[600px] h-40 bg-gradient-to-b from-purple-200/30 to-transparent blur-2xl pointer-events-none dark:from-purple-700/30" />
      <div className="absolute -right-32 bottom-0 w-80 h-40 bg-purple-200/10 blur-3xl rounded-full pointer-events-none dark:bg-purple-500/10" />
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between gap-10 relative z-10">
        {/* Linker Bereich */}
        <div className="flex flex-col space-y-4">
          <a
            href="mailto:support@focuspilot.net"
            className="hover:text-accent transition-colors"
          >
            support@focuspilot.net ↗
          </a>
          <div className="flex space-x-4">
            <Link href="https://www.instagram.com/focuspilot.ai/" target="_blank" className="hover:text-accent">Instagram</Link>
            <Link href="#" target="_blank" className="hover:text-accent">X</Link>
            <Link href="#" target="_blank" className="hover:text-accent">Discord</Link>
            <Link href="#" target="_blank" className="hover:text-accent">YouTube</Link>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">&copy; 2025 Made by Nexoventis AG</p>
        </div>

        {/* Mittlerer Bereich (Sitemap) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-12 gap-y-6">
          <div>
            <h5 className="font-semibold mb-2 text-foreground">Product</h5>
            <ul className="space-y-1 text-muted-foreground">
              <li><Link href="/pricing" className="hover:text-accent">Pricing</Link></li>
              <li><Link href="/features" className="hover:text-accent">Features</Link></li>
              <li><Link href="/enterprise" className="hover:text-accent">Enterprise</Link></li>
              <li><Link href="#" className="hover:text-accent">Downloads</Link></li>
              <li><Link href="#" className="hover:text-accent">Students</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2 text-foreground">Resources</h5>
            <ul className="space-y-1 text-muted-foreground">
              <li><Link href="/FAQ" className="hover:text-accent">FAQ</Link></li>
              <li><Link href="#" className="hover:text-accent">Docs</Link></li>
              <li><Link href="#" className="hover:text-accent">Blog</Link></li>
              <li><Link href="#" className="hover:text-accent">Forum</Link></li>
              <li><Link href="#" className="hover:text-accent">Changelog</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2 text-foreground">Company</h5>
            <ul className="space-y-1 text-muted-foreground">
              <li><Link href="#" className="hover:text-accent">Anysphere</Link></li>
              <li><Link href="#" className="hover:text-accent">Careers</Link></li>
              <li><Link href="#" className="hover:text-accent">Community</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2 text-foreground">Legal</h5>
            <ul className="space-y-1 text-muted-foreground">
              <li><Link href="/terms" className="hover:text-accent">Terms</Link></li>
              <li><Link href="#" className="hover:text-accent">Security</Link></li>
              <li><Link href="#" className="hover:text-accent">Privacy</Link></li>
            </ul>
          </div>
        </div>

        {/* Rechter Bereich */}
        <div className="flex flex-col space-y-4">
          <select className="border border-border rounded-md px-2 py-1 bg-background text-foreground focus:ring focus:ring-primary">
            <option>English</option>
            <option>Deutsch</option>
          </select>
          <div className="flex space-x-3">
            <button onClick={() => document.documentElement.classList.remove("dark")}
              className="bg-primary-foreground text-primary rounded-full w-8 h-8 flex items-center justify-center">🌞</button>
            <button onClick={() => document.documentElement.classList.add("dark")}
              className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center">🌜</button>
          </div>
          <span className="border border-border px-2 py-1 rounded-md text-xs text-muted-foreground text-center">
            SOC 2 Certified
          </span>
        </div>
      </div>
      
      {/* Dark mode style override */}
      <style jsx>{`
        footer {
          background-color: white !important;
        }
        :global(.dark) footer {
          background-color: black !important;
        }
        :global(html.dark) footer {
          background-color: black !important;
        }
      `}</style>
    </footer>
  );
}

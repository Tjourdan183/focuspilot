// app/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="relative min-h-screen bg-background">
      
      {/* Colorful animated background elements - LOUD and vibrant! */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Bright Purple Blur */}
        <div 
          className="absolute w-[40rem] h-[40rem] bg-purple-500/40 blur-3xl rounded-full animate-float"
          style={{ top: '5%', left: '-15%' }}
        />
        {/* Neon Pink Blur */}
        <div 
          className="absolute w-[35rem] h-[35rem] bg-pink-500/40 blur-3xl rounded-full animate-float-delayed"
          style={{ top: '50%', left: '0%' }}
        />
        {/* Electric Blue Blur */}
        <div 
          className="absolute w-[30rem] h-[30rem] bg-blue-500/40 blur-3xl rounded-full animate-float"
          style={{ top: '15%', right: '-12%' }}
        />
        {/* Vibrant Green Blur */}
        <div 
          className="absolute w-[32rem] h-[32rem] bg-emerald-500/40 blur-3xl rounded-full animate-float-delayed"
          style={{ top: '40%', right: '5%' }}
        />
        {/* Bright Orange Blur */}
        <div 
          className="absolute w-[28rem] h-[28rem] bg-orange-500/40 blur-3xl rounded-full animate-float"
          style={{ bottom: '-5%', left: '25%' }}
        />
        {/* Bright Yellow Blur */}
        <div 
          className="absolute w-[25rem] h-[25rem] bg-yellow-400/40 blur-3xl rounded-full animate-float-delayed"
          style={{ bottom: '10%', right: '15%' }}
        />
        {/* Cyan Blur */}
        <div 
          className="absolute w-[30rem] h-[30rem] bg-cyan-400/35 blur-3xl rounded-full animate-float"
          style={{ top: '70%', left: '60%' }}
        />
        {/* Red/Rose Blur */}
        <div 
          className="absolute w-[26rem] h-[26rem] bg-rose-500/35 blur-3xl rounded-full animate-float-delayed"
          style={{ top: '30%', left: '40%' }}
        />
      </div>

      {/* Floating animated icons - more colorful */}
      <div className="absolute top-24 left-16 animate-float opacity-90 z-10">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-xl flex items-center justify-center text-2xl animate-bounce-gentle text-white">
          🚀
        </div>
      </div>
      <div className="absolute top-1/2 right-24 animate-float-delayed opacity-90 z-10">
        <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-xl flex items-center justify-center text-xl animate-bounce-gentle text-white">
          💡
        </div>
      </div>
      <div className="absolute bottom-24 left-1/3 animate-float opacity-85 z-10">
        <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full shadow-xl flex items-center justify-center text-lg animate-bounce-gentle text-white">
          🎯
        </div>
      </div>
      <div className="absolute top-1/3 left-1/4 animate-float-delayed opacity-80 z-10">
        <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full shadow-lg flex items-center justify-center text-sm animate-bounce-gentle text-white">
          ⭐
        </div>
      </div>
      <div className="absolute bottom-1/3 right-1/3 animate-float opacity-85 z-10">
        <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl shadow-lg flex items-center justify-center text-lg animate-bounce-gentle text-white">
          ✨
        </div>
      </div>

      {/* Professional floating elements */}
      <div className="absolute top-20 left-10 animate-float opacity-60">
        <div className="w-12 h-12 glass rounded-xl shadow-lg flex items-center justify-center text-lg">
          ⚡
        </div>
      </div>
      
      <div className="absolute top-40 right-20 animate-float-delayed opacity-60">
        <div className="w-10 h-10 glass rounded-full shadow-lg flex items-center justify-center text-sm">
          🎯
        </div>
      </div>

      {/* Hero Section - Professional & Clean */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        
        <div className="relative z-10 text-center max-w-7xl mx-auto">
          
          {/* Professional hero content */}
          <div className="space-y-8">
            
            {/* Status badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 glass rounded-full">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-muted-foreground">
                Trusted by 10,000+ professionals worldwide
              </span>
            </div>

            {/* Main headline */}
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight">
                <span className="block text-foreground">FocusPilot</span>
                <span className="block text-gradient">.ai</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                The professional-grade AI productivity platform that transforms how ambitious teams and individuals achieve peak performance.
              </p>
            </div>

            {/* Professional CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button className="group relative px-8 py-4 bg-foreground hover:bg-foreground/90 text-background font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  Start Free Trial
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Button>
              
              <Button variant="outline" className="px-8 py-4 border-2 border-border glass rounded-xl transition-all duration-300 hover:border-accent">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Watch Demo
                </span>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 pt-8 opacity-70">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-background"></div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground font-medium">10,000+ users</span>
              </div>
              <div className="text-sm text-muted-foreground">⭐ 4.9/5 rating</div>
              <div className="text-sm text-muted-foreground">🔒 Enterprise-grade security</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Professional Cards */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Section header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
              <span className="text-sm font-medium text-muted-foreground">Features</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              <span className="text-foreground">Built for</span>
              <br />
              <span className="text-gradient">Excellence</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every feature engineered for professional productivity and measurable results.
            </p>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1 - AI Focus */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative glass rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] border border-transparent hover:border-accent/20">
                
                <div className="w-16 h-16 gradient-brand rounded-xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg">
                  🧠
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  AI-Powered Focus
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Advanced AI analyzes your work patterns and optimizes focus sessions for peak productivity.
                </p>
                
                <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all duration-300">
                  Learn more 
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Feature 2 - Smart Timer */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative glass rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] border border-transparent hover:border-accent/20">
                
                <div className="w-16 h-16 gradient-success rounded-xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg">
                  ⏰
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Smart Timer
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Intelligent Pomodoro timers that adapt to your workflow and maximize deep work sessions.
                </p>
                
                <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all duration-300">
                  Learn more 
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Feature 3 - Analytics */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative glass rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] border border-transparent hover:border-accent/20">
                
                <div className="w-16 h-16 gradient-purple rounded-xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg">
                  📊
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Real-time Analytics
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Beautiful dashboards that transform productivity data into actionable insights.
                </p>
                
                <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all duration-300">
                  Learn more 
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials with professional design */}
      <section className="relative py-32 bg-background">
        {/* Multiple subtle purple blur accents */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-80 h-80 bg-purple-400/20 blur-3xl rounded-full -top-24 -left-24" style={{zIndex:0}} />
          <div className="absolute w-64 h-64 bg-purple-300/15 blur-2xl rounded-full bottom-0 -right-32" style={{zIndex:0}} />
          <div className="absolute w-40 h-40 bg-pink-300/10 blur-2xl rounded-full top-1/2 left-0 -translate-y-1/2 -translate-x-1/2" style={{zIndex:0}} />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center mb-12 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <span className="text-sm font-medium text-muted-foreground">Testimonials</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            <span className="text-foreground">Trusted by</span>
            <br />
            <span className="text-gradient">Industry Leaders</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of professionals who've transformed their productivity.
          </p>
        </div>
        <div className="relative z-10">
          <TestimonialsMarquee />
        </div>
      </section>

      {/* Final CTA - Professional */}
      <section className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="relative glass rounded-3xl p-16 shadow-2xl border border-accent/10">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-purple-500/5 rounded-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                <span className="text-gradient">Ready to Excel?</span>
              </h2>
              
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Start your 14-day free trial and experience the future of professional productivity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="group relative px-12 py-6 bg-foreground hover:bg-foreground/90 text-background font-bold text-lg rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                  <span className="relative z-10 flex items-center gap-2">
                    Start Free Trial
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground mt-6">
                ✓ No credit card required • ✓ 14-day free trial • ✓ Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

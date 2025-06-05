"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lightbulb, TrendingUp, Target, Users, Award, Globe, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { useTranslations } from "@/lib/i18n-context";

// Data -----------------------------------------------------------------------
const getUSPs = (t: (key: string) => string) => [
  {
    icon: Target,
    title: t("AboutUs.features.items.mentor.title"),
    desc: t("AboutUs.features.items.mentor.description"),
    gradient: "from-blue-500 to-purple-600"
  },
  {
    icon: Lightbulb,
    title: t("AboutUs.features.items.ai.title"),
    desc: t("AboutUs.features.items.ai.description"),
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    icon: ShieldCheck,
    title: t("AboutUs.features.items.security.title"),
    desc: t("AboutUs.features.items.security.description"),
    gradient: "from-purple-500 to-pink-600"
  },
  {
    icon: TrendingUp,
    title: t("AboutUs.features.items.results.title"),
    desc: t("AboutUs.features.items.results.description"),
    gradient: "from-orange-500 to-red-600"
  },
];

const getValues = (t: (key: string) => string) => [
  { name: t("AboutUs.values.items.humanFirst"), icon: Heart },
  { name: t("AboutUs.values.items.clarity"), icon: Target },
  { name: t("AboutUs.values.items.quality"), icon: Award },
  { name: t("AboutUs.values.items.guardianship"), icon: ShieldCheck },
  { name: t("AboutUs.values.items.science"), icon: Globe },
];

const getTeam = (t: (key: string) => string) => [
  {
    name: t("AboutUs.team.members.thomas.name"),
    role: t("AboutUs.team.members.thomas.role"),
    quote: t("AboutUs.team.members.thomas.quote"),
    gradient: "from-blue-500 to-purple-600"
  },
  {
    name: t("AboutUs.team.members.samuel.name"),
    role: t("AboutUs.team.members.samuel.role"),
    quote: t("AboutUs.team.members.samuel.quote"),
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    name: t("AboutUs.team.members.orhan.name"),
    role: t("AboutUs.team.members.orhan.role"),
    quote: t("AboutUs.team.members.orhan.quote"),
    gradient: "from-purple-500 to-pink-600"
  },
  {
    name: t("AboutUs.team.members.vitoria.name"),
    role: t("AboutUs.team.members.vitoria.role"),
    quote: t("AboutUs.team.members.vitoria.quote"),
    gradient: "from-orange-500 to-red-600"
  },
  {
    name: t("AboutUs.team.members.ammar.name"),
    role: t("AboutUs.team.members.ammar.role"),
    quote: t("AboutUs.team.members.ammar.quote"),
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    name: t("AboutUs.team.members.markus.name"),
    role: t("AboutUs.team.members.markus.role"),
    quote: t("AboutUs.team.members.markus.quote"),
    gradient: "from-pink-500 to-rose-600"
  },
];

const getStats = (t: (key: string) => string) => [
  { number: "100M+", label: t("AboutUs.stats.users"), icon: Users },
  { number: "34%", label: t("AboutUs.stats.completion"), icon: TrendingUp },
  { number: "29%", label: t("AboutUs.stats.stress"), icon: Heart },
  { number: "4 weeks", label: t("AboutUs.stats.time"), icon: Target },
];

// Animation helpers -----------------------------------------------------------
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ 
    opacity: 1, 
    y: 0, 
    transition: { 
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    } 
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

// Components ------------------------------------------------------------------
const USPCard = ({ icon: Icon, title, desc, gradient, learnMore }: { 
  icon: React.ElementType; 
  title: string; 
  desc: string;
  gradient: string;
  learnMore: string;
}) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ scale: 1.02, y: -8 }}
    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    className="group relative h-full"
  >
    <div className={`absolute inset-0 bg-gradient-to-r ${gradient}/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
    <div className="relative glass rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-white/20 hover:border-accent/30 h-full flex flex-col">
      <div className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center text-white mb-6 shadow-lg`}>
        <Icon size={28} />
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed flex-grow">{desc}</p>
      <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all duration-300 mt-6">
        {learnMore}
        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  </motion.div>
);

const TeamCard = ({ name, role, quote, gradient }: { 
  name: string; 
  role: string; 
  quote: string;
  gradient: string;
}) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
    className="group relative"
  >
    <div className={`absolute inset-0 bg-gradient-to-r ${gradient}/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
    <div className="relative glass rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-white/20 hover:border-accent/30 h-full">
      <div className={`w-12 h-12 bg-gradient-to-r ${gradient} rounded-lg flex items-center justify-center text-white font-bold text-lg mb-4`}>
        {name.split(' ').map(n => n[0]).join('')}
      </div>
      <h4 className="text-xl font-bold text-foreground mb-2">{name}</h4>
      <p className="text-sm text-muted-foreground mb-4">{role}</p>
             <blockquote className="text-sm text-foreground/80 italic leading-relaxed">
         &ldquo;{quote}&rdquo;
       </blockquote>
    </div>
  </motion.div>
);

const StatCard = ({ number, label, icon: Icon }: {
  number: string;
  label: string;
  icon: React.ElementType;
}) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ scale: 1.05 }}
    className="glass rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
  >
    <Icon className="w-8 h-8 text-accent mx-auto mb-3" />
    <div className="text-3xl font-black text-foreground mb-2">{number}</div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </motion.div>
);

// Main ------------------------------------------------------------------------
export default function AboutUs() {
  const { t, isLoading } = useTranslations();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">{t("Common.loading")}</p>
        </div>
      </div>
    );
  }

  const usps = getUSPs(t);
  const values = getValues(t);
  const team = getTeam(t);
  const stats = getStats(t);
  return (
    <div className="relative min-h-screen bg-background">
      <AnimatedBackground isHomePage={false} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-32 space-y-32">
        
        {/* Hero Section */}
        <motion.section 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
          className="text-center space-y-8"
        >
                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-muted-foreground">{t("AboutUs.statusBadge")}</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight">
            <span className="block text-gradient">{t("AboutUs.hero.title")}</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="max-w-4xl mx-auto text-xl text-muted-foreground leading-relaxed">
            {t("AboutUs.hero.subtitle")}
          </motion.p>
        </motion.section>

        {/* Mission & Stats */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-16"
        >
          <div className="text-center">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
              <span className="text-sm font-medium text-muted-foreground">{t("AboutUs.mission.badge")}</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
              <span className="text-gradient">{t("AboutUs.mission.title")}</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("AboutUs.mission.description")}
            </motion.p>
          </div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, i) => (
              <StatCard key={i} {...stat} />
            ))}
          </motion.div>
        </motion.section>

        {/* Core Features */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-16"
        >
          <div className="text-center">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
              <span className="text-sm font-medium text-muted-foreground">{t("AboutUs.features.badge")}</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
              <span className="text-gradient">{t("AboutUs.features.title")}</span>
            </motion.h2>
          </div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
          >
                       {usps.map((usp, i) => (
             <USPCard key={i} {...usp} learnMore={t("AboutUs.features.learnMore")} />
           ))}
          </motion.div>
        </motion.section>

        {/* Values */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-16"
        >
          <div className="text-center">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
              <span className="text-sm font-medium text-muted-foreground">{t("AboutUs.values.badge")}</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
              <span className="text-gradient">{t("AboutUs.values.title")}</span>
            </motion.h2>
          </div>

          <motion.div 
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-4"
          >
                         {values.map((value) => (
               <motion.div
                 key={value.name}
                 variants={fadeInUp}
                 whileHover={{ scale: 1.05 }}
                 className="group glass rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-accent/30"
               >
                <div className="flex items-center gap-3">
                  <value.icon className="w-5 h-5 text-accent" />
                  <span className="font-semibold text-foreground">{value.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Team */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-16"
        >
          <div className="text-center">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
              <span className="text-sm font-medium text-muted-foreground">{t("AboutUs.team.badge")}</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
              <span className="text-gradient">{t("AboutUs.team.title")}</span>
            </motion.h2>
          </div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
                         {team.map((member) => (
               <TeamCard key={member.name} {...member} />
             ))}
          </motion.div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-purple-500/5 rounded-3xl blur-2xl"></div>
          <div className="relative glass rounded-3xl p-16 shadow-2xl border border-accent/20 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
              <span className="text-gradient">{t("AboutUs.cta.title")}</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              {t("AboutUs.cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="group relative px-12 py-6 bg-foreground hover:bg-foreground/90 text-background font-bold text-lg rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  {t("AboutUs.cta.getAccess")}
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Button>
              <Button variant="outline" className="px-12 py-6 glass border-2 border-accent/30 rounded-xl font-bold text-lg transition-all duration-300 hover:border-accent">
                {t("AboutUs.cta.watchDemo")}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-8">
              {t("AboutUs.cta.features")}
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

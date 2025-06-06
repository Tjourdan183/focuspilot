"use client";

import React from "react";
import { motion } from "framer-motion";
import { TeamCard } from "./TeamCard";
import { useTranslations } from "@/lib/i18n-context";

const TeamSection = () => {
  const { t } = useTranslations();
  const team = [
    {
      name: t("AboutUs.team.members.thomas.name"),
      role: "Founder & Trading-Experte",
      quote: t("AboutUs.team.members.thomas.quote"),
      gradient: "from-blue-500 to-purple-600"
    },
    {
      name: t("AboutUs.team.members.samuel.name"),
      role: "ETH Student Mathematik",
      quote: t("AboutUs.team.members.samuel.quote"),
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      name: t("AboutUs.team.members.orhan.name"),
      role: "Banker",
      quote: t("AboutUs.team.members.orhan.quote"),
      gradient: "from-purple-500 to-pink-600"
    },
    {
      name: t("AboutUs.team.members.vitoria.name"),
      role: "CMO | Global Speaker | AI Solutions Expert",
      quote: "Strategic business manager with 15+ years of global and EMEA experience in FMCG and Life Science. Innovative, pragmatic, team builder, consistently delivering on all targets and goals. Fluency in 5 languages.",
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
      role: "Spezialist Finanz- und Planungsprozessen",
      quote: t("AboutUs.team.members.markus.quote"),
      gradient: "from-pink-500 to-rose-600"
    },
  ];

  return (
    <motion.section 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-100px" }}
      className="space-y-16"
    >
      <div className="text-center">
        <motion.div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
          <span className="text-sm font-medium text-muted-foreground">{t("AboutUs.team.badge")}</span>
        </motion.div>
        <motion.h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
          <span className="text-gradient">{t("AboutUs.team.title")}</span>
        </motion.h2>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {team.map((member) => (
          <TeamCard key={member.name} {...member} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default TeamSection; 
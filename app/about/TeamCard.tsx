"use client";

import React from "react";
import { motion } from "framer-motion";

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

export const TeamCard = React.memo(({ name, role, quote, gradient }: { 
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
)); 
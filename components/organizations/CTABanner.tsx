"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="relative py-12 md:py-24 bg-[#0B1220] overflow-hidden font-sans">
      {/* Background Pattern - Faint Dotted Map Placeholder */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
        aria-hidden="true"
      />
      
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#C08A1E]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-24 h-24 rounded-full bg-[#101B33] border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] flex items-center justify-center mb-10"
        >
          <Building2 className="w-12 h-12 text-[#C08A1E]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 leading-tight tracking-tight font-display"
        >
          Transform the way your organization{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9A441] to-[#B8791A]">
            learns, hires and collaborates.
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold-gradient text-white shadow-[var(--shadow-gold-glow)] hover:scale-[1.03] font-bold transition-transform focus-visible:ring-2 focus-visible:ring-[#C08A1E]/50 outline-none text-lg"
          >
            Register Organization <ArrowRight className="w-5 h-5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-white/20 text-white font-bold hover:bg-white/5 transition-colors focus-visible:ring-2 focus-visible:ring-[#C08A1E]/50 outline-none text-lg"
          >
            Talk to Sales
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

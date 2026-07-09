"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Unlock,
  Users,
  ShieldCheck,
  Cpu,
  Heart,
} from "lucide-react";
import { useReducedMotion } from "./hooks/useReducedMotion";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const beliefs = [
  { icon: BookOpen, text: "Learning is a lifelong journey." },
  { icon: Unlock, text: "Opportunities should be accessible to everyone." },
  { icon: Users, text: "Collaboration creates innovation." },
  { icon: ShieldCheck, text: "Trust and integrity build lasting relationships." },
  { icon: Cpu, text: "Technology should empower human potential." },
  { icon: Heart, text: "Together, we can build a better future." },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Beliefs() {
  const reduced = useReducedMotion();

  return (
    <section className="bg-[#FDF9F2] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered heading with gold-flanked divider */}
        <motion.div
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduced ? { duration: 0 } : { duration: 0.5 }}
          className="mb-12 flex max-w-md mx-auto flex-col items-center gap-4"
        >
          <div className="flex w-full items-center gap-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C08A1E]/30" />
            <h2 className="text-xs font-bold tracking-[0.2em] text-[#C08A1E] uppercase whitespace-nowrap">
              What We Believe In
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C08A1E]/30" />
          </div>
        </motion.div>

        {/* Beliefs grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {beliefs.map((item, i) => (
            <motion.div
              key={item.text}
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={reduced ? { duration: 0 } : { delay: 0.06 * i, duration: 0.4 }}
              className="glass-card flex items-center gap-4 p-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#C08A1E]/10">
                <item.icon className="h-6 w-6 text-[#C08A1E]" />
              </div>
              <p className="text-sm font-medium text-[#1A1A1A] leading-[1.5]">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserCircle, Building2, Handshake, Eye, Zap } from "lucide-react";
import { useReducedMotion } from "./hooks/useReducedMotion";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const values = [
  {
    icon: UserCircle,
    title: "Empower Individuals",
    description: "Give every person the tools and opportunities to grow their skills and career.",
  },
  {
    icon: Building2,
    title: "Enable Organizations",
    description: "Help companies build talented teams through verified skills and real projects.",
  },
  {
    icon: Handshake,
    title: "Foster Collaboration",
    description: "Bring learners, mentors, and organizations together in one thriving ecosystem.",
  },
  {
    icon: Eye,
    title: "Promote Transparency",
    description: "Build trust through verified credentials, honest reviews, and open processes.",
  },
  {
    icon: Zap,
    title: "Drive Impact",
    description: "Measure success by real-world outcomes — careers launched, projects delivered.",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function CoreValues() {
  const reduced = useReducedMotion();

  return (
    <section className="bg-[#FDF9F2] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduced ? { duration: 0 } : { duration: 0.5 }}
          className="mb-10 flex items-center gap-4"
        >
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A]">
            Our Core Values
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[#C08A1E]/60 to-transparent" />
        </motion.div>

        {/* Values grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={reduced ? { duration: 0 } : { delay: 0.05 * i, duration: 0.4 }}
              className="glass-card group flex flex-col items-center gap-4 p-6 text-center"
            >
              {/* Icon badge */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#C08A1E]/10">
                <item.icon className="h-7 w-7 text-[#C08A1E]" />
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold text-[#1A1A1A]">{item.title}</h3>

              {/* Description */}
              <p className="text-xs leading-[1.5] text-[#6B6B6B]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

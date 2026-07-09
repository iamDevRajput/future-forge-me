"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Briefcase,
  FolderKanban,
  Users,
  HeartHandshake,
} from "lucide-react";
import { useReducedMotion } from "./hooks/useReducedMotion";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const impacts = [
  { icon: TrendingUp, label: "Skills Developed", description: "Over 2 million course completions across tech, design, and business domains." },
  { icon: Briefcase, label: "Careers Accelerated", description: "Thousands of members transitioned into new roles or earned promotions." },
  { icon: FolderKanban, label: "Projects Built", description: "Real-world portfolio projects that led to hiring and freelance opportunities." },
  { icon: Users, label: "Communities Strengthened", description: "Local and global communities connected through mentorship and collaboration." },
];

const teamMembers = [
  { initials: "AK", name: "Aisha Khan", role: "Co-Founder & CEO", color: "bg-[#C08A1E]/20 text-[#B8791A]" },
  { initials: "RM", name: "Raj Mehta", role: "Co-Founder & COO", color: "bg-[#1A1A1A]/10 text-[#1A1A1A]" },
  { initials: "SP", name: "Sofia Park", role: "CTO", color: "bg-[#C08A1E]/20 text-[#B8791A]" },
  { initials: "JO", name: "James Okonkwo", role: "Head of Product", color: "bg-[#1A1A1A]/10 text-[#1A1A1A]" },
  { initials: "LC", name: "Luna Chen", role: "Head of Community", color: "bg-[#C08A1E]/20 text-[#B8791A]" },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ImpactTeam() {
  const reduced = useReducedMotion();

  return (
    <section className="bg-[#FDF9F2] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          {/* LEFT — Illustration placeholder */}
          <motion.div
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: 24 }}
            whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={reduced ? { duration: 0 } : { duration: 0.5 }}
            className="relative lg:col-span-4"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#E0AC4F]/15 via-[#FDF9F2] to-[#C08A1E]/10 border border-[#C08A1E]/10">
              {/* Abstract illustration: geometric shapes representing collaboration */}
              <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <defs>
                  <linearGradient id="impactGrad1" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#D9A441" stopOpacity="0.15" />
                    <stop offset="1" stopColor="#B8791A" stopOpacity="0.08" />
                  </linearGradient>
                </defs>
                {/* Large circle — table */}
                <ellipse cx="200" cy="190" rx="120" ry="40" fill="url(#impactGrad1)" />
                {/* People silhouettes around table */}
                <g opacity="0.6">
                  {/* Person 1 */}
                  <circle cx="120" cy="140" r="12" fill="#C08A1E" fillOpacity="0.5" />
                  <path d="M120 152 L120 175" stroke="#C08A1E" strokeWidth="3" strokeLinecap="round" />
                  <path d="M105 165 L135 165" stroke="#C08A1E" strokeWidth="2" strokeLinecap="round" opacity="0.5" />

                  {/* Person 2 */}
                  <circle cx="200" cy="130" r="14" fill="#C08A1E" fillOpacity="0.6" />
                  <path d="M200 144 L200 170" stroke="#C08A1E" strokeWidth="3" strokeLinecap="round" />
                  <path d="M185 160 L215 160" stroke="#C08A1E" strokeWidth="2" strokeLinecap="round" opacity="0.5" />

                  {/* Person 3 */}
                  <circle cx="280" cy="140" r="12" fill="#C08A1E" fillOpacity="0.5" />
                  <path d="M280 152 L280 175" stroke="#C08A1E" strokeWidth="3" strokeLinecap="round" />
                  <path d="M265 165 L295 165" stroke="#C08A1E" strokeWidth="2" strokeLinecap="round" opacity="0.5" />

                  {/* Person 4 */}
                  <circle cx="160" cy="155" r="10" fill="#C08A1E" fillOpacity="0.4" />
                  <path d="M160 165 L160 185" stroke="#C08A1E" strokeWidth="2.5" strokeLinecap="round" />

                  {/* Person 5 */}
                  <circle cx="240" cy="155" r="10" fill="#C08A1E" fillOpacity="0.4" />
                  <path d="M240 165 L240 185" stroke="#C08A1E" strokeWidth="2.5" strokeLinecap="round" />
                </g>

                {/* Laptop on table */}
                <rect x="185" y="180" width="30" height="20" rx="2" fill="#0B1220" fillOpacity="0.2" stroke="#C08A1E" strokeOpacity="0.3" strokeWidth="1" />
                <rect x="183" y="198" width="34" height="3" rx="1" fill="#C08A1E" fillOpacity="0.2" />

                {/* Floating connection lines */}
                <g stroke="#C08A1E" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="3 3">
                  <line x1="132" y1="138" x2="188" y2="128" />
                  <line x1="212" y1="128" x2="268" y2="138" />
                  <line x1="120" y1="148" x2="150" y2="158" />
                  <line x1="250" y1="158" x2="280" y2="148" />
                </g>

                {/* Decorative circles */}
                <circle cx="50" cy="60" r="20" fill="#E0AC4F" fillOpacity="0.08" />
                <circle cx="350" cy="80" r="15" fill="#E0AC4F" fillOpacity="0.06" />
                <circle cx="80" cy="260" r="25" fill="#E0AC4F" fillOpacity="0.05" />
              </svg>

              {/* Overlaid glass caption card */}
              <div className="absolute bottom-4 left-4 rounded-xl border border-white/60 bg-white/60 p-3 shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <HeartHandshake className="h-4 w-4 text-[#C08A1E]" />
                  <div className="leading-tight">
                    <p className="text-[10px] font-bold text-[#1A1A1A]">Real People.</p>
                    <p className="text-[10px] font-bold text-[#1A1A1A]">Real Projects.</p>
                    <p className="text-[10px] font-bold text-[#1A1A1A]">Real Impact.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* MIDDLE — Our Impact */}
          <motion.div
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: 24 }}
            whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={reduced ? { duration: 0 } : { duration: 0.6 }}
            className="lg:col-span-4"
          >
            <h2 className="text-2xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-3xl mb-2">
              Our <span className="bg-gradient-to-r from-[#D9A441] to-[#B8791A] bg-clip-text text-transparent">Impact</span>
            </h2>
            <p className="text-sm text-[#6B6B6B] mb-8">
              Numbers that reflect real change in people&apos;s lives and careers.
            </p>

            <div className="space-y-6">
              {impacts.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={reduced ? { opacity: 1 } : { opacity: 0, x: -12 }}
                  whileInView={reduced ? { opacity: 1 } : { opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={reduced ? { duration: 0 } : { delay: 0.08 * i, duration: 0.4 }}
                  className="flex gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#C08A1E]/10">
                    <item.icon className="h-5 w-5 text-[#C08A1E]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#1A1A1A]">{item.label}</h3>
                    <p className="mt-0.5 text-xs leading-[1.5] text-[#6B6B6B]">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Meet the Team */}
          <motion.div
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: 24 }}
            whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={reduced ? { duration: 0 } : { duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4"
          >
            <h2 className="text-2xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-3xl mb-2">
              Meet the <span className="bg-gradient-to-r from-[#D9A441] to-[#B8791A] bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-sm text-[#6B6B6B] mb-8">
              The people behind FutureForge who share one mission.
            </p>

            {/* Avatar row */}
            <div className="flex flex-wrap gap-4 mb-6">
              {teamMembers.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={reduced ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
                  whileInView={reduced ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={reduced ? { duration: 0 } : { delay: 0.06 * i, duration: 0.3 }}
                  className="flex flex-col items-center gap-1.5"
                >
                  {/* Avatar circle with initials */}
                  <div className={`flex h-14 w-14 items-center justify-center rounded-full text-sm font-bold ${member.color}`}>
                    {member.initials}
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-semibold text-[#1A1A1A] leading-tight">{member.name}</p>
                    <p className="text-[10px] text-[#6B6B6B] leading-tight">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={reduced ? {} : { scale: 1.03 }}
              whileTap={reduced ? {} : { scale: 0.97 }}
              className="flex items-center gap-2 rounded-full border-2 border-[#C08A1E]/30 px-6 py-2.5 text-sm font-semibold text-[#C08A1E] transition-colors hover:border-[#C08A1E] hover:bg-[#C08A1E]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C08A1E]/50"
            >
              View All Team Members
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

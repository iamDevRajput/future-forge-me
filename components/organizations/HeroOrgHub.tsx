"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FolderKanban,
  GraduationCap,
  TrendingUp,
  UserPlus,
  UserCheck,
  ClipboardCheck,
  Users,
  BarChart3,
  PlayCircle
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const orbitalNodes = [
  { id: 1, label: "Projects",     desc: "Real-world tasks", icon: FolderKanban,   color: "text-[#C08A1E]" },
  { id: 2, label: "Courses",      desc: "Custom paths",     icon: GraduationCap,  color: "text-[#C08A1E]" },
  { id: 3, label: "Upskilling",   desc: "Drive growth",     icon: TrendingUp,     color: "text-[#C08A1E]" },
  { id: 4, label: "Hiring",       desc: "Top talent",       icon: UserPlus,       color: "text-[#C08A1E]" },
  { id: 5, label: "Mentorship",   desc: "Expert guides",    icon: UserCheck,      color: "text-[#C08A1E]" },
  { id: 6, label: "Assessments",  desc: "Verify skills",    icon: ClipboardCheck, color: "text-[#C08A1E]" },
  { id: 7, label: "Teams",        desc: "Build together",   icon: Users,          color: "text-[#C08A1E]" },
  { id: 8, label: "Analytics",    desc: "Track impact",     icon: BarChart3,      color: "text-[#C08A1E]" },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function HeroOrgHub() {
  return (
    <section className="relative overflow-hidden bg-[#FDF9F2] pt-32 pb-12 sm:pt-40 sm:pb-24">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30 mix-blend-multiply">
        <div className="absolute top-1/4 -left-64 h-96 w-96 rounded-full bg-[#E0AC4F]/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-64 h-96 w-96 rounded-full bg-[#E0AC4F]/20 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-8 items-center">
          
          {/* LEFT: Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="font-display text-sm font-bold tracking-[0.15em] text-[#C08A1E] uppercase">
                Organization Hub
              </span>
              <div className="h-px w-8 bg-[#C08A1E]/50"></div>
            </div>

            <h1 className="font-display text-[2.5rem] leading-[1.15] font-extrabold tracking-tight text-[#1A1A1A] sm:text-[3rem] md:text-[3.5rem] mb-6">
              Build Teams. <br className="hidden lg:block" />
              Train Talent. <br className="hidden lg:block" />
              <span className="text-gold-gradient">Drive Innovation.</span>
            </h1>

            <p className="font-sans text-base leading-[1.6] text-[#6B6B6B] mb-10 max-w-lg">
              FutureForge helps organizations discover skilled professionals,
              launch learning programs, collaborate on real-world projects,
              mentor future talent, and build high-performing teams—
              all from one unified platform.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto rounded-full bg-gold-gradient px-8 py-3.5 font-sans font-semibold text-white shadow-[var(--shadow-gold-glow)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C08A1E]/50"
              >
                Register Organization &rarr;
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto rounded-full border border-[#1A1A1A]/15 bg-white/50 px-6 py-3.5 font-sans font-semibold text-[#1A1A1A] flex items-center justify-center gap-2 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C08A1E]/50 transition-colors"
              >
                <PlayCircle className="w-5 h-5 text-[#C08A1E]" />
                Explore Organization Hub
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT: Orbital Graphic (The Signature Moment) */}
          <div className="relative h-[400px] w-full max-w-[500px] mx-auto lg:h-[600px] lg:max-w-none flex items-center justify-center">
            
            {/* Center Pedestal / Glowing Hub */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-20 flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-[var(--shadow-glass-hover)]"
            >
              <div className="absolute inset-0 rounded-full border-[6px] border-[#FDF9F2] shadow-inner"></div>
              <div className="absolute inset-0 rounded-full bg-gold-gradient opacity-10 animate-pulse"></div>
              {/* Stylized 'F' Logo mark */}
              <svg viewBox="0 0 40 40" fill="none" className="h-14 w-14 drop-shadow-md z-10" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 6h4v28H8V6z" fill="#C08A1E" />
                <path d="M8 6h18a6 6 0 012 4.5c0 3-2.5 5.5-5.5 5.5H8V6z" fill="#C08A1E" />
                <path d="M8 20h14a5 5 0 011.5 3.8c0 2.5-2 4.7-4.5 4.7H8V20z" fill="#C08A1E" />
              </svg>
            </motion.div>

            {/* Orbiting Nodes & Connections */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {orbitalNodes.map((node, i) => {
                const angle = (i / orbitalNodes.length) * Math.PI * 2;
                const radiusX = 220; // Elliptical radius X
                const radiusY = 220; // Elliptical radius Y
                
                return (
                  <React.Fragment key={node.id}>
                    {/* Animated SVG Dotted Line connecting to center */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                      <motion.line
                        x1="50%" y1="50%"
                        x2={`calc(50% + ${Math.cos(angle) * radiusX}px)`}
                        y2={`calc(50% + ${Math.sin(angle) * radiusY}px)`}
                        stroke="#C08A1E"
                        strokeWidth="1.5"
                        strokeDasharray="4 6"
                        strokeOpacity="0.3"
                        initial={{ strokeDashoffset: 0 }}
                        animate={{ strokeDashoffset: -20 }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
                      />
                    </svg>
                    
                    {/* Floating Node (Glass Card) */}
                    <motion.div
                      className="absolute pointer-events-auto"
                      style={{
                        x: Math.cos(angle) * radiusX,
                        y: Math.sin(angle) * radiusY,
                      }}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    >
                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ repeat: Infinity, duration: 3 + (i % 3), ease: "easeInOut", delay: i * 0.2 }}
                        className="group relative"
                      >
                        <div className="glass-card flex h-14 w-14 cursor-pointer items-center justify-center !rounded-2xl bg-white/70 hover:!bg-white">
                          <node.icon className={`h-6 w-6 ${node.color} transition-transform group-hover:scale-110`} />
                        </div>

                        {/* Label Tooltip */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 flex flex-col items-center opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none">
                          <div className="whitespace-nowrap rounded-lg bg-[#1A1A1A] px-3 py-1.5 text-center shadow-lg">
                            <p className="font-sans text-xs font-bold text-white">{node.label}</p>
                            <p className="font-sans text-[10px] text-white/70">{node.desc}</p>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Section Divider Below Hero */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mx-auto mt-24 flex max-w-6xl items-center gap-6 px-4 opacity-80 sm:mt-32"
      >
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C08A1E]/30"></div>
        <h2 className="font-display text-xs font-bold tracking-[0.2em] text-[#C08A1E] uppercase">
          Everything Your Organization Can Do
        </h2>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C08A1E]/30"></div>
      </motion.div>
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Users, GraduationCap, Building2, Globe } from "lucide-react";
import { useReducedMotion } from "./hooks/useReducedMotion";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const floatingChips = [
  { label: "Users", value: "250K+", position: "absolute top-[8%] left-[-2%]", delay: 0, amp: 8, Icon: Users },
  { label: "Courses", value: "2K+", position: "absolute top-[2%] right-[6%]", delay: 0.6, amp: 10, Icon: GraduationCap },
  { label: "Orgs", value: "1K+", position: "absolute bottom-[12%] right-[-3%]", delay: 1.2, amp: 7, Icon: Building2 },
  { label: "Countries", value: "150+", position: "absolute bottom-[20%] left-[4%]", delay: 0.3, amp: 9, Icon: Globe },
];

/* ------------------------------------------------------------------ */
/*  Floating chip animation variants                                    */
/* ------------------------------------------------------------------ */

const floatVariants = (delay: number, amplitude: number) => ({
  animate: {
    y: [0, -amplitude, 0, amplitude / 2, 0],
    transition: { duration: 4 + delay * 0.5, ease: "easeInOut" as const, repeat: Infinity, delay },
  },
});

/* ------------------------------------------------------------------ */
/*  Hero illustration — glowing "F" monument in isometric city scene   */
/* ------------------------------------------------------------------ */

function HeroIllustration() {
  const reduced = useReducedMotion();
  return (
    <div className="relative w-full aspect-square max-w-[520px] mx-auto lg:mx-0">
      {/* Soft radial glow behind monument */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[60%] h-[60%] rounded-full bg-[#E0AC4F]/10 blur-3xl" />
      </div>

      {/* Isometric city/workspace SVG */}
      <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg">
        {/* Sky background gradient */}
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E8F4FD" />
            <stop offset="100%" stopColor="#FDF9F2" />
          </linearGradient>
          <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#D9A441" />
            <stop offset="1" stopColor="#B8791A" />
          </linearGradient>
          <linearGradient id="goldGradV" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#D9A441" />
            <stop offset="1" stopColor="#B8791A" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Sky */}
        <rect width="500" height="500" rx="24" fill="url(#skyGrad)" />

        {/* Birds */}
        <g stroke="#C08A1E" strokeWidth="1.5" fill="none" opacity="0.5">
          <path d="M80 100 Q85 95 90 100 Q95 95 100 100" />
          <path d="M380 80 Q384 76 388 80 Q392 76 396 80" />
          <path d="M120 140 Q123 137 126 140 Q129 137 132 140" />
        </g>

        {/* Ground plane */}
        <path d="M50 380 L250 290 L450 380 Z" fill="#E0AC4F" fillOpacity="0.08" />
        <path d="M50 380 L250 290 L450 380 Z" stroke="#C08A1E" strokeOpacity="0.15" strokeWidth="1" />

        {/* Back buildings */}
        <g opacity="0.4">
          {/* Building 1 */}
          <path d="M100 280 L130 265 L130 370 L100 385 Z" fill="#B8791A" fillOpacity="0.15" stroke="#C08A1E" strokeOpacity="0.2" strokeWidth="0.5" />
          <path d="M130 265 L160 280 L160 385 L130 370 Z" fill="#D9A441" fillOpacity="0.1" stroke="#C08A1E" strokeOpacity="0.2" strokeWidth="0.5" />
          {/* Building 2 */}
          <path d="M340 270 L370 255 L370 365 L340 380 Z" fill="#B8791A" fillOpacity="0.15" stroke="#C08A1E" strokeOpacity="0.2" strokeWidth="0.5" />
          <path d="M370 255 L400 270 L400 380 L370 365 Z" fill="#D9A441" fillOpacity="0.1" stroke="#C08A1E" strokeOpacity="0.2" strokeWidth="0.5" />
          {/* Building 3 */}
          <path d="M60 320 L90 305 L90 380 L60 395 Z" fill="#B8791A" fillOpacity="0.12" stroke="#C08A1E" strokeOpacity="0.15" strokeWidth="0.5" />
          {/* Building 4 */}
          <path d="M400 310 L430 295 L430 380 L400 395 Z" fill="#B8791A" fillOpacity="0.12" stroke="#C08A1E" strokeOpacity="0.15" strokeWidth="0.5" />
        </g>

        {/* Mid buildings with windows */}
        <g opacity="0.55">
          {/* Mid-left building */}
          <path d="M140 300 L180 280 L180 385 L140 405 Z" fill="white" stroke="#C08A1E" strokeOpacity="0.3" strokeWidth="1" />
          <path d="M180 280 L220 300 L220 405 L180 385 Z" fill="#FDF9F2" stroke="#C08A1E" strokeOpacity="0.3" strokeWidth="1" />
          {/* Windows */}
          <rect x="150" y="310" width="8" height="8" rx="1" fill="#C08A1E" fillOpacity="0.4" />
          <rect x="165" y="310" width="8" height="8" rx="1" fill="#C08A1E" fillOpacity="0.3" />
          <rect x="150" y="325" width="8" height="8" rx="1" fill="#C08A1E" fillOpacity="0.3" />
          <rect x="165" y="325" width="8" height="8" rx="1" fill="#C08A1E" fillOpacity="0.5" />
          <rect x="190" y="315" width="8" height="8" rx="1" fill="#C08A1E" fillOpacity="0.4" />
          <rect x="205" y="315" width="8" height="8" rx="1" fill="#C08A1E" fillOpacity="0.3" />
          <rect x="190" y="330" width="8" height="8" rx="1" fill="#C08A1E" fillOpacity="0.5" />
          <rect x="205" y="330" width="8" height="8" rx="1" fill="#C08A1E" fillOpacity="0.4" />

          {/* Mid-right building */}
          <path d="M290 295 L330 275 L330 380 L290 400 Z" fill="white" stroke="#C08A1E" strokeOpacity="0.3" strokeWidth="1" />
          <path d="M330 275 L370 295 L370 400 L330 380 Z" fill="#FDF9F2" stroke="#C08A1E" strokeOpacity="0.3" strokeWidth="1" />
          {/* Windows */}
          <rect x="300" y="305" width="8" height="8" rx="1" fill="#C08A1E" fillOpacity="0.4" />
          <rect x="315" y="305" width="8" height="8" rx="1" fill="#C08A1E" fillOpacity="0.3" />
          <rect x="340" y="310" width="8" height="8" rx="1" fill="#C08A1E" fillOpacity="0.5" />
          <rect x="355" y="310" width="8" height="8" rx="1" fill="#C08A1E" fillOpacity="0.3" />
        </g>

        {/* Front desks / tables with people silhouettes */}
        <g opacity="0.6">
          {/* Desk left */}
          <rect x="155" y="395" width="50" height="4" rx="2" fill="#C08A1E" fillOpacity="0.5" />
          {/* Person at desk left */}
          <circle cx="175" cy="382" r="5" fill="#C08A1E" fillOpacity="0.6" />
          <path d="M175 387 L175 395" stroke="#C08A1E" strokeWidth="2" strokeLinecap="round" />

          {/* Screen on desk left */}
          <rect x="165" y="383" width="18" height="12" rx="1" fill="#0B1220" fillOpacity="0.2" stroke="#C08A1E" strokeOpacity="0.3" strokeWidth="0.5" />

          {/* Desk right */}
          <rect x="310" y="390" width="50" height="4" rx="2" fill="#C08A1E" fillOpacity="0.5" />
          {/* Person at desk right */}
          <circle cx="335" cy="377" r="5" fill="#C08A1E" fillOpacity="0.6" />
          <path d="M335 382 L335 390" stroke="#C08A1E" strokeWidth="2" strokeLinecap="round" />

          {/* Screen on desk right */}
          <rect x="325" y="378" width="18" height="12" rx="1" fill="#0B1220" fillOpacity="0.2" stroke="#C08A1E" strokeOpacity="0.3" strokeWidth="0.5" />

          {/* Small figures in middle */}
          <circle cx="240" cy="345" r="4" fill="#C08A1E" fillOpacity="0.4" />
          <path d="M240 349 L240 358" stroke="#C08A1E" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="255" cy="348" r="4" fill="#C08A1E" fillOpacity="0.35" />
          <path d="M255 352 L255 361" stroke="#C08A1E" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="228" cy="350" r="3.5" fill="#C08A1E" fillOpacity="0.3" />
          <path d="M228 353.5 L228 360" stroke="#C08A1E" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* ---- CENTRAL "F" MONUMENT ---- */}
        <g filter="url(#glow)">
          {/* Shadow / platform */}
          <ellipse cx="250" cy="395" rx="50" ry="12" fill="#C08A1E" fillOpacity="0.12" />
          {/* Monument base */}
          <path d="M225 385 L250 370 L275 385 L250 395 Z" fill="#B8791A" fillOpacity="0.6" />
          {/* "F" glyph — tall */}
          <path d="M238 200 L242 200 L242 360 L238 360 Z" fill="url(#goldGrad)" />
          {/* "F" top bar */}
          <path d="M238 200 L275 200 L275 208 C275 218 268 225 258 225 L238 225 Z" fill="url(#goldGrad)" />
          {/* "F" middle bar */}
          <path d="M238 255 L270 255 L270 263 C270 271 265 277 258 277 L238 277 Z" fill="url(#goldGrad)" />
        </g>

        {/* Connecting dotted lines from monument to desks */}
        <g stroke="#C08A1E" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="3 4">
          <line x1="230" y1="370" x2="195" y2="390" />
          <line x1="270" y1="370" x2="310" y2="388" />
          <line x1="250" y1="225" x2="250" y2="290" strokeDasharray="2 3" />
        </g>
      </svg>

      {/* Floating chips */}
      {!reduced &&
        floatingChips.map((chip) => (
          <motion.div
            key={chip.label}
            variants={floatVariants(chip.delay, chip.amp)}
            animate="animate"
            className={chip.position}
          >
            <div className="flex items-center gap-1.5 rounded-full border border-[#C08A1E]/25 bg-white/70 px-3 py-1.5 shadow-md backdrop-blur-sm">
              <chip.Icon className="h-3.5 w-3.5 text-[#C08A1E]" />
              <span className="text-xs font-bold text-[#1A1A1A]">{chip.value}</span>
              <span className="text-[10px] text-[#6B6B6B]">{chip.label}</span>
            </div>
          </motion.div>
        ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function HeroAbout() {
  const reduced = useReducedMotion();

  const fadeUp = {
    initial: reduced ? { opacity: 1 } : { opacity: 0, y: 30 },
    animate: reduced ? { opacity: 1 } : { opacity: 1, y: 0 },
    transition: reduced ? { duration: 0 } : { duration: 0.6, ease: "easeOut" as const },
  };

  return (
    <section className="relative overflow-hidden bg-[#FDF9F2] pt-32 pb-12 sm:pt-40 sm:pb-16">
      {/* Background ambient gradients */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30 mix-blend-multiply">
        <div className="absolute top-1/4 -left-64 h-96 w-96 rounded-full bg-[#E0AC4F]/20 blur-3xl" />
        <div className="absolute bottom-1/4 -right-64 h-96 w-96 rounded-full bg-[#E0AC4F]/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-8 items-center">
          {/* LEFT — Copy & CTAs */}
          <motion.div {...fadeUp} className="flex flex-col items-start max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="text-sm font-bold tracking-[0.15em] text-[#C08A1E] uppercase">
                About FutureForge
              </span>
              <div className="h-px w-8 bg-[#C08A1E]/50" />
              <span className="text-sm font-bold tracking-[0.15em] text-[#C08A1E]">—</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-[2.5rem] leading-[1.15] font-extrabold tracking-tight text-[#1A1A1A] sm:text-[3rem] md:text-[3.5rem] mb-6">
              Building Futures.{" "}
              <br className="hidden lg:block" />
              Together.{" "}
              <br className="hidden lg:block" />
              <span className="bg-gradient-to-r from-[#D9A441] to-[#B8791A] bg-clip-text text-transparent">
                For Everyone.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base leading-[1.6] text-[#6B6B6B] mb-10 max-w-lg">
              FutureForge is where ambition meets opportunity. We connect learners,
              mentors, and organizations on one platform — empowering people to grow
              their skills, build real projects, and launch meaningful careers.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <motion.button
                whileHover={reduced ? {} : { scale: 1.03 }}
                whileTap={reduced ? {} : { scale: 0.97 }}
                className="flex items-center gap-2 w-full sm:w-auto rounded-full bg-gradient-to-r from-[#D9A441] to-[#B8791A] px-8 py-3.5 font-semibold text-white shadow-[0_0_25px_rgba(200,141,30,0.35)] hover:shadow-[0_0_30px_rgba(200,141,30,0.45)] transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C08A1E]/50"
              >
                Our Mission
                <ArrowRight className="h-4 w-4" />
              </motion.button>

              <motion.button
                whileHover={reduced ? {} : { scale: 1.03 }}
                whileTap={reduced ? {} : { scale: 0.97 }}
                className="flex items-center gap-2 w-full sm:w-auto rounded-full border-2 border-[#1A1A1A]/30 px-8 py-3.5 text-sm font-semibold text-[#1A1A1A] transition-colors hover:border-[#1A1A1A]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C08A1E]/50"
              >
                <PlayCircle className="h-4 w-4" />
                Watch Our Story
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT — Illustration */}
          <motion.div
            initial={reduced ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
            animate={reduced ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
            transition={reduced ? { duration: 0 } : { duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <HeroIllustration />
          </motion.div>
        </div>

        {/* ---- MISSION DIVIDER ---- */}
        <motion.div
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduced ? { duration: 0 } : { duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-20 flex max-w-4xl flex-col items-center gap-4 px-4"
        >
          <div className="flex w-full items-center gap-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C08A1E]/30" />
            <h2 className="text-xs font-bold tracking-[0.2em] text-[#C08A1E] uppercase whitespace-nowrap">
              Our Mission
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C08A1E]/30" />
          </div>
          <p className="text-center text-base leading-[1.7] text-[#475569] max-w-2xl">
            To democratize access to learning, mentorship, and career opportunities —
            empowering every individual and organization to reach their full potential,
            regardless of background or location.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

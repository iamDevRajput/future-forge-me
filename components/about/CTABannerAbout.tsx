"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, ArrowRight } from "lucide-react";
import { useReducedMotion } from "./hooks/useReducedMotion";

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function CTABannerAbout() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#0B1220] py-20 sm:py-24">
      {/* Faint dotted/network background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotsAbout" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="16" cy="16" r="1.2" fill="#C08A1E" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotsAbout)" />
        </svg>
      </div>

      {/* Ambient gold glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-64 w-64 rounded-full bg-[#E0AC4F]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 24 }}
          whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduced ? { duration: 0 } : { duration: 0.6 }}
        >
          {/* Circular badge with city icon */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#C08A1E]/30 bg-[#0B1220] shadow-[0_0_30px_rgba(200,141,30,0.15)]">
            <Building2 className="h-9 w-9 text-[#D9A441]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Join Us in Building the Future
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-white/60">
            Whether you&apos;re a learner, mentor, organization, or partner,
            there&apos;s a place for you at FutureForge.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.button
              whileHover={reduced ? {} : { scale: 1.03 }}
              whileTap={reduced ? {} : { scale: 0.97 }}
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D9A441] to-[#B8791A] px-8 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(200,141,30,0.35)] hover:shadow-[0_0_30px_rgba(200,141,30,0.45)] transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C08A1E]/50"
            >
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </motion.button>

            <motion.button
              whileHover={reduced ? {} : { scale: 1.03 }}
              whileTap={reduced ? {} : { scale: 0.97 }}
              className="rounded-full border-2 border-white/20 px-8 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C08A1E]/50"
            >
              Explore Platform
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

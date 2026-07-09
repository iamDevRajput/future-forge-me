"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, ArrowRight } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-[#FDF9F2] py-20">
      {/* faint gold wave SVG shapes */}
      <div className="pointer-events-none absolute inset-0">
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 180c240-60 480-120 720-100s480 80 720 40v80H0v-20z"
            fill="#C08A1E"
            fillOpacity="0.08"
          />
          <path
            d="M0 140c300 50 600 20 900 0s540 60 540 60v100H0v-160z"
            fill="#D9A441"
            fillOpacity="0.06"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* rocket badge — circular with gold border */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#C08A1E]/30 bg-[#FDF9F2] shadow-[0_0_30px_rgba(200,141,30,0.15)]">
            <Rocket className="h-9 w-9 text-[#C08A1E]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-4xl">
            Ready to explore the right opportunities for you?
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-[#6B6B6B]">
            Join thousands of learners, professionals and organizations building
            the future together.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D9A441] to-[#B8791A] px-8 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(200,141,30,0.35)] hover:shadow-[0_0_30px_rgba(200,141,30,0.45)] transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C08A1E]/50"
            >
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border-2 border-[#1A1A1A]/30 px-8 py-3 text-sm font-semibold text-[#1A1A1A] transition-colors hover:border-[#1A1A1A]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C08A1E]/50"
            >
              Explore Platform
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { HelpCenterIllustration } from "@/components/mentorship/Illustrations";

export default function HelpCenterCard() {
  return (
    <div className="bg-white rounded-2xl border border-[#E9EAEE] shadow-[0_1px_3px_rgba(16,24,40,0.06)] p-5">
      <div className="flex flex-col items-center text-center gap-3 mb-4">
        <HelpCenterIllustration className="mb-1" />
        <div>
          <p className="text-sm font-bold text-[#1A1A2E]">Need Help?</p>
          <p className="text-xs text-[#6B7280] leading-relaxed mt-0.5">
            Visit our help center for mentorship guidelines and FAQs.
          </p>
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl border border-[#E9EAEE] text-xs font-semibold text-[#6B7280] hover:bg-[#F8F9FB] hover:text-[#1A1A2E] transition-colors focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/40 outline-none group"
      >
        Go to Help Center
        <ExternalLink size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </motion.button>
    </div>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function MentorProfileWidget() {
  const xp = 2150;
  const maxXp = 3000;
  const pct = Math.round((xp / maxXp) * 100);

  return (
    <div className="bg-white rounded-2xl border border-[#E9EAEE] shadow-[0_1px_3px_rgba(16,24,40,0.06)] p-5">
      {/* Level badge + info */}
      <div className="flex items-center gap-3 mb-4">
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="w-12 h-12 bg-[#EDE9FE] rounded-xl flex items-center justify-center">
            <Shield size={22} className="text-[#7C5CFF]" />
          </div>
          <span className="absolute text-xs font-black text-[#7C5CFF]">4</span>
        </div>
        <div>
          <p className="text-sm font-bold text-[#1A1A2E]">Level 4 Mentor</p>
          <p className="text-xs text-[#6B7280]">Senior Mentor</p>
        </div>
      </div>

      {/* XP bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs text-[#6B7280] font-medium">
            {xp.toLocaleString()} / {maxXp.toLocaleString()} XP
          </span>
          <span className="text-xs font-bold text-[#7C5CFF]">
            {pct}% to next level
          </span>
        </div>
        <div className="h-2 bg-[#EDE9FE] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#7C5CFF] to-[#A78BFA] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.4 }}
          />
        </div>
      </div>

      {/* CTA */}
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link
          href="/mentorship"
          className="block w-full text-center py-2 rounded-xl border-2 border-[#7C5CFF] text-[#7C5CFF] text-sm font-semibold hover:bg-[#EDE9FE] transition-colors focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/40 outline-none"
        >
          View Journey →
        </Link>
      </motion.div>
    </div>
  );
}

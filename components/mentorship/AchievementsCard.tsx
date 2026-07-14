"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { achievements } from "@/lib/mentorship-data";
import { AchievementBadgeIllustration } from "@/components/mentorship/Illustrations";

export default function AchievementsCard() {
  return (
    <div className="bg-white rounded-2xl border border-[#E9EAEE] shadow-[0_1px_3px_rgba(16,24,40,0.06)] p-5 flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-[#1A1A2E]">Achievements</h2>
        <Link
          href="#"
          className="text-xs font-semibold text-[#7C5CFF] hover:text-[#6B4DE6] transition-colors focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/40 outline-none rounded"
        >
          View All
        </Link>
      </div>

      <div className="flex-1 space-y-2">
        {achievements.map((ach, i) => {
          // Map ach.id to the correct badge type
          let type: "top10" | "reviews" | "outstanding" | "student" = "top10";
          if (ach.id === "ach2") type = "reviews";
          if (ach.id === "ach3") type = "outstanding";
          if (ach.id === "ach4") type = "student";

          return (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.24, delay: i * 0.07 }}
              whileHover={{ scale: 1.015, backgroundColor: "#F8F9FB" }}
              className="flex items-center gap-3 p-3 rounded-xl transition-all cursor-default"
            >
              <div className="flex-shrink-0">
                <AchievementBadgeIllustration type={type} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-[#1A1A2E] truncate">
                  {ach.title}
                </p>
                <p className="text-xs text-[#6B7280]">{ach.subtitle}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

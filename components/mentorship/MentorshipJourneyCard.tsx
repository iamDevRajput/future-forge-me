"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { journeyStats } from "@/lib/mentorship-data";
import { LevelShieldIllustration } from "@/components/mentorship/Illustrations";

export default function MentorshipJourneyCard() {
  const [expanded, setExpanded] = useState(false);
  const progress = 72;

  return (
    <div className="bg-white rounded-2xl border border-[#E9EAEE] shadow-[0_1px_3px_rgba(16,24,40,0.06)] p-6 col-span-1 lg:col-span-2">
      {/* Card header */}
      <div className="flex items-start justify-between mb-6">
        <h2 className="text-base font-bold text-[#1A1A2E]">
          Mentorship Journey
        </h2>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 px-3 py-1 bg-[#F8F9FB] text-xs font-semibold text-[#7C5CFF] rounded-lg hover:bg-[#EDE9FE] transition-colors focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/40 outline-none"
        >
          View
          <ChevronDown
            size={13}
            className={`transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Shield + Level */}
        <div className="flex flex-col items-center flex-shrink-0 md:w-[200px]">
          <div className="relative mb-3 flex items-center justify-center">
            <LevelShieldIllustration />
            <span className="absolute text-3xl font-black text-white drop-shadow-md">
              4
            </span>
          </div>
          <p className="text-sm font-bold text-[#7C5CFF]">Senior Mentor</p>
          <p className="text-xs text-[#6B7280] mt-1 text-center leading-relaxed">
            Consistent guide with<br/>proven impact
          </p>
        </div>

        {/* Progress & Stats */}
        <div className="flex-1 w-full flex flex-col justify-center">
          {/* Progress to next level */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-[#1A1A2E]">
                Next Level: Professional Mentor
              </span>
              <span className="text-sm font-bold text-[#1A1A2E]">{progress}%</span>
            </div>
            <div className="h-3 bg-[#F3F4F6] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#7C5CFF] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              />
            </div>
          </div>

          {/* 4-column inner stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {journeyStats.map((s) => (
              <div key={s.label}>
                <p className="text-[11px] text-[#6B7280] font-medium mb-1">
                  {s.label}
                </p>
                <p className="text-2xl font-black text-[#1A1A2E]">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

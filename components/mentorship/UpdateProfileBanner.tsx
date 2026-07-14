"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserCog } from "lucide-react";
import { ProfileGrowthIllustration } from "@/components/mentorship/Illustrations";

export default function UpdateProfileBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="w-full bg-[#EDE9FE] border border-[#7C5CFF]/20 rounded-2xl px-6 py-4"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#7C5CFF]/15 flex items-center justify-center">
            <ProfileGrowthIllustration className="w-5 h-5 scale-150" />
          </div>
          <p className="text-sm font-medium text-[#4C1D95] truncate">
            Keep your profile updated and stay available to get more mentorship opportunities.
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-5 py-2 rounded-xl bg-white text-sm font-semibold text-[#7C5CFF] border border-[#7C5CFF]/20 hover:bg-[#F8F9FB] transition-colors focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/40 outline-none flex-shrink-0 shadow-sm"
        >
          Update Profile
        </motion.button>
      </div>
    </motion.div>
  );
}

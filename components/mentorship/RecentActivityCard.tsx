"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Star,
  UserCheck,
  CalendarCheck,
  Trophy,
  MessageCircle,
  Bell,
} from "lucide-react";
import { recentActivity } from "@/lib/mentorship-data";

const iconMap: Record<string, React.ElementType> = {
  ClipboardCheck,
  Star,
  UserCheck,
  CalendarCheck,
  Trophy,
  MessageCircle,
  Bell,
};

const colorMap = {
  violet: { bg: "bg-[#EDE9FE]", icon: "text-[#7C5CFF]" },
  blue: { bg: "bg-[#EFF6FF]", icon: "text-[#3B82F6]" },
  amber: { bg: "bg-[#FFF7ED]", icon: "text-[#F59E0B]" },
  green: { bg: "bg-[#ECFDF5]", icon: "text-[#10B981]" },
  red: { bg: "bg-[#FEF2F2]", icon: "text-[#EF4444]" },
};

export default function RecentActivityCard() {
  return (
    <div className="bg-white rounded-2xl border border-[#E9EAEE] shadow-[0_1px_3px_rgba(16,24,40,0.06)] p-5 flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-[#1A1A2E]">
          Recent Activity
        </h2>
        <Link
          href="#"
          className="text-xs font-semibold text-[#7C5CFF] hover:text-[#6B4DE6] transition-colors focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/40 outline-none rounded"
        >
          View All →
        </Link>
      </div>

      <div className="flex-1 space-y-1">
        {recentActivity.map((item, i) => {
          const Icon = iconMap[item.icon] ?? Bell;
          const colors = colorMap[item.color];

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.24, delay: i * 0.07 }}
              className="flex items-start gap-3 py-2.5 border-b border-[#E9EAEE] last:border-0"
            >
              {/* Timeline dot + icon */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className={`w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center`}
                >
                  <Icon size={14} className={colors.icon} />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[#1A1A2E] leading-tight">
                  {item.title}
                </p>
                <p className="text-xs text-[#6B7280] mt-0.5 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <span className="text-[11px] text-[#6B7280] flex-shrink-0 font-medium">
                {item.timestamp}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FolderSearch,
  CalendarPlus,
  UserCog,
  BarChart3,
  ChevronRight,
} from "lucide-react";
import { quickActions } from "@/lib/mentorship-data";

const iconMap: Record<string, React.ElementType> = {
  FolderSearch,
  CalendarPlus,
  UserCog,
  BarChart3,
};

const colorMap = {
  violet: { bg: "bg-[#EDE9FE]", icon: "text-[#7C5CFF]" },
  blue: { bg: "bg-[#EFF6FF]", icon: "text-[#3B82F6]" },
  amber: { bg: "bg-[#FFF7ED]", icon: "text-[#F59E0B]" },
  green: { bg: "bg-[#ECFDF5]", icon: "text-[#10B981]" },
};

export default function QuickActionsCard() {
  return (
    <div className="bg-white rounded-2xl border border-[#E9EAEE] shadow-[0_1px_3px_rgba(16,24,40,0.06)] p-5">
      <h2 className="text-base font-bold text-[#1A1A2E] mb-4">Quick Actions</h2>

      <div className="space-y-1">
        {quickActions.map((action, i) => {
          const Icon = iconMap[action.icon] ?? FolderSearch;
          const colors = colorMap[action.color as keyof typeof colorMap];

          return (
            <motion.div key={action.id} whileHover={{ backgroundColor: "#F8F9FB" }} transition={{ duration: 0.15 }}>
              <Link
                href={action.href}
                className="flex items-center gap-3 px-3 py-3 rounded-xl transition-colors group focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/40 outline-none"
              >
                <div
                  className={`w-9 h-9 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0`}
                >
                  <Icon size={16} className={colors.icon} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[#1A1A2E]">
                    {action.title}
                  </p>
                  <p className="text-xs text-[#6B7280]">{action.subtitle}</p>
                </div>
                <ChevronRight
                  size={15}
                  className="text-[#E9EAEE] group-hover:text-[#6B7280] transition-colors"
                />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

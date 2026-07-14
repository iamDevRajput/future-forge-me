"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, ArrowUpRight, Calendar } from "lucide-react";
import type { ActiveMentorship } from "@/lib/mentorship-data";

const themeMap: Record<string, {
  iconBg: string;
  roleBg: string;
  roleText: string;
  btnText: string;
  btnBorder: string;
  btnHover: string;
  avatarBg: string;
}> = {
  violet: {
    iconBg: "bg-[#1A1A2E]",
    roleBg: "bg-[#EDE9FE]",
    roleText: "text-[#7C5CFF]",
    btnText: "text-[#7C5CFF]",
    btnBorder: "border-[#7C5CFF]",
    btnHover: "hover:bg-[#EDE9FE]",
    avatarBg: "bg-[#7C5CFF]",
  },
  green: {
    iconBg: "bg-[#064E3B]",
    roleBg: "bg-[#ECFDF5]",
    roleText: "text-[#10B981]",
    btnText: "text-[#10B981]",
    btnBorder: "border-[#10B981]",
    btnHover: "hover:bg-[#ECFDF5]",
    avatarBg: "bg-[#10B981]",
  },
  amber: {
    iconBg: "bg-[#7C2D12]",
    roleBg: "bg-[#FFF7ED]",
    roleText: "text-[#F59E0B]",
    btnText: "text-[#F59E0B]",
    btnBorder: "border-[#F59E0B]",
    btnHover: "hover:bg-[#FFF7ED]",
    avatarBg: "bg-[#F59E0B]",
  },
  blue: {
    iconBg: "bg-[#1E3A5F]",
    roleBg: "bg-[#EFF6FF]",
    roleText: "text-[#3B82F6]",
    btnText: "text-[#3B82F6]",
    btnBorder: "border-[#3B82F6]",
    btnHover: "hover:bg-[#EFF6FF]",
    avatarBg: "bg-[#3B82F6]",
  },
};

type ActiveMentorshipRowProps = {
  mentorship: ActiveMentorship;
  index?: number;
};

export default function ActiveMentorshipRow({
  mentorship,
  index = 0,
}: ActiveMentorshipRowProps) {
  const t = themeMap[mentorship.color];
  const isCompleted = mentorship.stage === "Completed";
  const iconLabel = mentorship.projectTitle.substring(0, 2).toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, delay: index * 0.06 }}
      whileHover={{ backgroundColor: "#F8F9FB" }}
      className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 rounded-xl border border-[#E9EAEE] bg-white transition-colors"
    >
      {/* Icon + Title */}
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <div
          className={`w-10 h-10 rounded-lg ${t.iconBg} flex items-center justify-center text-white text-xs font-black flex-shrink-0`}
        >
          {iconLabel}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-sm font-bold text-[#1A1A2E] truncate">
              {mentorship.projectTitle}
            </span>
          </div>
          <p className="text-[11px] font-medium text-[#6B7280] truncate">
            {mentorship.org}
          </p>
        </div>
      </div>

      {/* Role */}
      <div className="hidden sm:block w-32 flex-shrink-0">
        <span
          className={`inline-block px-2.5 py-1 rounded-md text-[10px] font-bold ${t.roleBg} ${t.roleText} uppercase tracking-wider whitespace-nowrap`}
        >
          {mentorship.needsRole}
        </span>
      </div>

      {/* Stage */}
      <div className="hidden md:block w-28 flex-shrink-0">
        <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wide mb-1">
          Current Stage
        </p>
        <span
          className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${
            isCompleted
              ? "bg-[#F3F4F6] text-[#6B7280]"
              : "bg-[#ECFDF5] text-[#10B981]"
          }`}
        >
          {isCompleted ? "Completed" : "Active"}
        </span>
      </div>

      {/* Team */}
      <div className="hidden md:block w-24 flex-shrink-0">
        <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wide mb-1 flex items-center gap-1">
          <Users size={10} /> Team
        </p>
        <div className="flex items-center gap-1">
          <span className="text-xs font-semibold text-[#1A1A2E]">
            {mentorship.teamSize} Members
          </span>
        </div>
      </div>

      {/* Avatar stack */}
      <div className="hidden lg:flex items-center gap-1 flex-shrink-0 w-24">
        <div className="flex -space-x-2">
          {mentorship.avatarInitials.map((initials, i) => {
            const avatarUrl = mentorship.avatarUrls?.[i];
            return (
              <div
                key={i}
                className={`w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold overflow-hidden ${
                  avatarUrl ? "bg-[#F8F9FB]" : `${t.avatarBg} text-white`
                }`}
              >
                {avatarUrl ? (
                  <img src={avatarUrl} alt={initials} className="w-full h-full object-cover" />
                ) : (
                  initials
                )}
              </div>
            );
          })}
          {mentorship.extraMembers > 0 && (
            <div className="w-7 h-7 rounded-full bg-[#E9EAEE] border-2 border-white flex items-center justify-center text-[#6B7280] text-[10px] font-bold">
              +{mentorship.extraMembers}
            </div>
          )}
        </div>
      </div>

      {/* Next Review & CTA */}
      <div className="flex items-center justify-between sm:justify-end gap-6 sm:w-48 flex-shrink-0">
        <div className="hidden sm:block">
          <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wide mb-1 flex items-center gap-1">
            <Calendar size={10} /> Next Review
          </p>
          <p className="text-xs font-semibold text-[#1A1A2E] whitespace-nowrap">
            {mentorship.nextReview}
          </p>
        </div>
        <Link href={`/mentorship/${mentorship.id}`}>
          <button
            className={`flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold transition-colors group ${t.btnBorder} ${t.btnText} ${t.btnHover} outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-[#7C5CFF]/40 bg-transparent`}
          >
            Open Mentorship
            <ArrowUpRight
              size={13}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </Link>
      </div>
    </motion.div>
  );
}

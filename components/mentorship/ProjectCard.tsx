"use client";

import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, Users, Layers, ArrowUpRight } from "lucide-react";
import type { AvailableProject } from "@/lib/mentorship-data";

const themeMap = {
  violet: {
    iconBg: "bg-[#1A1A2E]",
    tagBg: "bg-[#EDE9FE]",
    tagText: "text-[#7C5CFF]",
    btnBorder: "border-[#7C5CFF]",
    btnText: "text-[#7C5CFF]",
    btnHover: "hover:bg-[#EDE9FE]",
  },
  green: {
    iconBg: "bg-[#064E3B]",
    tagBg: "bg-[#ECFDF5]",
    tagText: "text-[#10B981]",
    btnBorder: "border-[#10B981]",
    btnText: "text-[#10B981]",
    btnHover: "hover:bg-[#ECFDF5]",
  },
  orange: {
    iconBg: "bg-[#7C2D12]",
    tagBg: "bg-[#FFF7ED]",
    tagText: "text-[#F59E0B]",
    btnBorder: "border-[#F59E0B]",
    btnText: "text-[#F59E0B]",
    btnHover: "hover:bg-[#FFF7ED]",
  },
};

type ProjectCardProps = {
  project: AvailableProject;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const t = themeMap[project.theme];

  return (
    <motion.div
      whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(16,24,40,0.08)" }}
      transition={{ duration: 0.18 }}
      className="bg-white rounded-2xl border border-[#E9EAEE] shadow-[0_1px_3px_rgba(16,24,40,0.06)] p-5 flex flex-col gap-4"
    >
      {/* Org row */}
      <div className="flex items-center gap-2">
        <div
          className={`w-9 h-9 rounded-lg ${t.iconBg} flex items-center justify-center text-white text-xs font-black flex-shrink-0`}
        >
          {project.iconLabel}
        </div>
        <div className="flex items-center gap-1 min-w-0">
          <span className="text-sm font-semibold text-[#1A1A2E] truncate">
            {project.org}
          </span>
          {project.verified && (
            <BadgeCheck size={14} className="text-[#3B82F6] flex-shrink-0" />
          )}
        </div>
      </div>

      {/* Title + tag */}
      <div>
        <h3 className="text-base font-bold text-[#1A1A2E] mb-2">
          {project.title}
        </h3>
        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${t.tagBg} ${t.tagText}`}
        >
          Needs: {project.needsRole} Mentor
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-[#6B7280] leading-relaxed line-clamp-2">
        {project.description}
      </p>

      {/* Meta */}
      <div className="flex items-center gap-4 text-xs text-[#6B7280]">
        <span className="flex items-center gap-1">
          <Users size={13} />
          {project.teamSize} Members
        </span>
        <span className="flex items-center gap-1">
          <Layers size={13} />
          {project.stage}
        </span>
      </div>

      {/* CTA */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`group flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl border-2 ${t.btnBorder} ${t.btnText} text-sm font-semibold ${t.btnHover} transition-colors focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/40 outline-none`}
      >
        Apply as Mentor
        <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </motion.button>
    </motion.div>
  );
}

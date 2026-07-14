"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  FolderKanban,
  CalendarClock,
  Star,
  ClipboardCheck,
  Users,
  Trophy,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Shield,
  FolderKanban,
  CalendarClock,
  Star,
  ClipboardCheck,
  Users,
  Trophy,
};

const colorMap = {
  violet: { bg: "bg-[#EDE9FE]", text: "text-[#7C5CFF]", border: "border-[#7C5CFF]" },
  blue: { bg: "bg-[#EFF6FF]", text: "text-[#3B82F6]", border: "border-[#3B82F6]" },
  amber: { bg: "bg-[#FFF7ED]", text: "text-[#F59E0B]", border: "border-[#F59E0B]" },
  green: { bg: "bg-[#ECFDF5]", text: "text-[#10B981]", border: "border-[#10B981]" },
  red: { bg: "bg-[#FEF2F2]", text: "text-[#EF4444]", border: "border-[#EF4444]" },
};

function AnimatedNumber({ value }: { value: number }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <span ref={ref}>
      {inView ? (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {value}
        </motion.span>
      ) : (
        "0"
      )}
    </span>
  );
}

export default function StatCardRow({
  stats,
}: {
  stats: {
    id: string;
    label: string;
    value: number;
    suffix?: string;
    subtitle: string;
    icon: string;
    color: "violet" | "blue" | "amber" | "green" | "red";
  }[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s, i) => {
        const Icon = iconMap[s.icon] ?? Shield;
        const colors = colorMap[s.color];

        return (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="bg-white rounded-2xl border border-[#E9EAEE] shadow-[0_1px_3px_rgba(16,24,40,0.06)] p-5 flex items-center gap-4"
          >
            <div
              className={`w-12 h-12 rounded-[14px] ${colors.bg} flex items-center justify-center flex-shrink-0 relative`}
            >
              <div className={`absolute inset-0 rounded-[14px] border ${colors.border} opacity-20`} />
              <Icon size={24} className={colors.text} strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#1A1A2E] mb-0.5">
                {s.label}
              </p>
              <div className="flex items-baseline gap-1">
                <p className="text-2xl font-black text-[#1A1A2E] tracking-tight">
                  <AnimatedNumber value={s.value} />
                </p>
                {s.suffix && (
                  <span className={`text-base font-bold ${colors.text}`}>
                    {s.suffix}
                  </span>
                )}
              </div>
              <p className="text-xs font-medium text-[#6B7280] mt-0.5">
                {s.subtitle}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

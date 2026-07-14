"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { upcomingSessions } from "@/lib/mentorship-data";
import type { Session } from "@/lib/mentorship-data";
import { EmptySessionsIllustration } from "@/components/mentorship/Illustrations";

function SessionEntry({ session }: { session: Session }) {
  return (
    <div className="flex items-start gap-3 py-3">
      <div className="w-10 h-10 rounded-xl bg-[#EDE9FE] flex items-center justify-center flex-shrink-0 mt-0.5">
        <Calendar size={16} className="text-[#7C5CFF]" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-bold text-[#1A1A2E] leading-tight">
          {session.time}
        </p>
        <p className="text-sm font-semibold text-[#1A1A2E] truncate">
          {session.title}
        </p>
        <p className="text-xs text-[#6B7280] mt-0.5">{session.type}</p>
      </div>
      <div className="flex-shrink-0">
        {session.action === "join" ? (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-3 py-1.5 text-xs font-semibold rounded-lg border-2 border-[#7C5CFF] text-[#7C5CFF] hover:bg-[#EDE9FE] transition-colors focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/40 outline-none"
          >
            Join
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-[#E9EAEE] text-[#6B7280] hover:bg-[#F8F9FB] transition-colors focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/40 outline-none"
          >
            Reschedule
          </motion.button>
        )}
      </div>
    </div>
  );
}

export default function UpcomingSessionsCard() {
  // Group sessions by day
  const grouped = upcomingSessions.reduce<Record<string, Session[]>>(
    (acc, s) => {
      if (!acc[s.day]) acc[s.day] = [];
      acc[s.day].push(s);
      return acc;
    },
    {}
  );

  const isEmpty = upcomingSessions.length === 0;

  return (
    <div className="bg-white rounded-2xl border border-[#E9EAEE] shadow-[0_1px_3px_rgba(16,24,40,0.06)] p-6 flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-[#1A1A2E]">
          Upcoming Sessions
        </h2>
        <Link
          href="#"
          className="text-xs font-semibold text-[#7C5CFF] hover:text-[#6B4DE6] transition-colors focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/40 outline-none rounded"
        >
          View Calendar
        </Link>
      </div>

      {isEmpty ? (
        <div className="flex-1 flex flex-col items-center justify-center py-8 text-center">
          <EmptySessionsIllustration className="mb-4" />
          <p className="text-sm font-semibold text-[#1A1A2E] mb-1">
            Your calendar is clear
          </p>
          <p className="text-xs text-[#6B7280] mb-5 max-w-[200px] leading-relaxed mx-auto">
            Open your availability to guide the next generation.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2 text-xs font-semibold rounded-xl border-2 border-[#7C5CFF] text-[#7C5CFF] hover:bg-[#EDE9FE] transition-colors focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/40 outline-none"
          >
            Schedule Session
          </motion.button>
        </div>
      ) : (
        <div className="flex-1 divide-y divide-[#E9EAEE]">
          {Object.entries(grouped).map(([day, sessions]) => (
            <div key={day}>
              <p className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wide pt-3 pb-1">
                {day}
              </p>
              {sessions.map((s) => (
                <SessionEntry key={s.id} session={s} />
              ))}
            </div>
          ))}
        </div>
      )}

      <div className="pt-4 border-t border-[#E9EAEE] mt-4">
        <Link
          href="#"
          className="text-sm font-semibold text-[#7C5CFF] hover:text-[#6B4DE6] transition-colors flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/40 outline-none rounded"
        >
          View All Sessions →
        </Link>
      </div>
    </div>
  );
}

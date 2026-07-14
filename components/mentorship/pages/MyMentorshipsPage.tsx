"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ActiveMentorshipRow from "@/components/mentorship/ActiveMentorshipRow";
import { activeMentorships } from "@/lib/mentorship-data";
import { EmptyProjectsIllustration } from "@/components/mentorship/Illustrations";

const TABS = ["Active", "Completed", "All"] as const;
type Tab = (typeof TABS)[number];

export default function MyMentorshipsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("Active");

  const filtered = useMemo(() => {
    if (activeTab === "Active")
      return activeMentorships.filter((m) => m.stage !== "Completed");
    if (activeTab === "Completed")
      return activeMentorships.filter((m) => m.stage === "Completed");
    return activeMentorships;
  }, [activeTab]);

  return (
    <div className="px-4 sm:px-6 py-6 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-black text-[#1A1A2E] tracking-tight">
          My Mentorships
        </h1>
        <p className="text-sm text-[#6B7280] mt-1">
          Track and manage all your active and past mentorships.
        </p>
      </div>

      {/* Status Tabs */}
      <div className="flex items-center gap-1 p-1 bg-[#F8F9FB] rounded-xl border border-[#E9EAEE] w-fit mb-6">
        {TABS.map((tab) => (
          <motion.button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/40 outline-none ${
              activeTab === tab
                ? "text-[#7C5CFF]"
                : "text-[#6B7280] hover:text-[#1A1A2E]"
            }`}
          >
            {activeTab === tab && (
              <motion.div
                layoutId="tab-bg"
                className="absolute inset-0 bg-white rounded-lg shadow-sm border border-[#E9EAEE]"
                transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
            <span
              className={`relative z-10 ml-1.5 text-xs font-bold px-1.5 py-0.5 rounded-full ${
                activeTab === tab
                  ? "bg-[#EDE9FE] text-[#7C5CFF]"
                  : "bg-[#E9EAEE] text-[#6B7280]"
              }`}
            >
              {tab === "Active"
                ? activeMentorships.filter((m) => m.stage !== "Completed").length
                : tab === "Completed"
                  ? activeMentorships.filter((m) => m.stage === "Completed").length
                  : activeMentorships.length}
            </span>
          </motion.button>
        ))}
      </div>

      {/* List */}
      <AnimatePresence mode="wait">
        {filtered.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl border border-[#E9EAEE] p-16 text-center flex flex-col items-center justify-center min-h-[400px]"
          >
            <EmptyProjectsIllustration className="mb-5" />
            <p className="text-lg font-bold text-[#1A1A2E] mb-2">
              No {activeTab.toLowerCase()} mentorships
            </p>
            <p className="text-sm text-[#6B7280] max-w-[300px] leading-relaxed mx-auto">
              {activeTab === "Active"
                ? "Browse available projects and apply as a mentor to guide a new team."
                : "Your completed mentorships and their outcomes will appear here."}
            </p>
          </motion.div>
        ) : (
          <motion.div
            key={activeTab}
            layout
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.22 }}
            className="space-y-2"
          >
            {filtered.map((m, i) => (
              <ActiveMentorshipRow key={m.id} mentorship={m} index={i} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

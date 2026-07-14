"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle2 } from "lucide-react";

const statusOptions = [
  {
    value: "available",
    label: "Available for Mentorship",
    dot: "bg-[#10B981]",
    pill: "bg-[#ECFDF5] text-[#065F46] border-[#10B981]/30",
  },
  {
    value: "limited",
    label: "Limited Availability",
    dot: "bg-[#F59E0B]",
    pill: "bg-[#FFF7ED] text-[#78350F] border-[#F59E0B]/30",
  },
  {
    value: "unavailable",
    label: "Not Available",
    dot: "bg-[#EF4444]",
    pill: "bg-[#FEF2F2] text-[#7F1D1D] border-[#EF4444]/30",
  },
];

export default function MentorshipHeader() {
  const [status, setStatus] = useState("available");
  const [open, setOpen] = useState(false);

  const current = statusOptions.find((s) => s.value === status)!;

  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
      {/* Title */}
      <div>
        <h1 className="text-2xl font-black text-[#1A1A2E] tracking-tight">
          Mentorship
        </h1>
        <p className="text-sm text-[#6B7280] mt-1">
          Guide learners. Review projects. Build your reputation.
        </p>
      </div>

      {/* Status pill dropdown */}
      <div className="relative flex-shrink-0">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setOpen((p) => !p)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border font-semibold text-sm ${current.pill} focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/40 outline-none`}
        >
          <span className={`w-2 h-2 rounded-full ${current.dot} flex-shrink-0`} />
          {current.label}
          <ChevronDown
            size={14}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </motion.button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.97 }}
              transition={{ duration: 0.18 }}
              className="absolute right-0 top-full mt-2 w-52 bg-white rounded-2xl border border-[#E9EAEE] shadow-lg z-30 overflow-hidden"
            >
              {statusOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => {
                    setStatus(opt.value);
                    setOpen(false);
                  }}
                  className="w-full flex items-center gap-2.5 px-4 py-3 text-sm font-medium text-[#1A1A2E] hover:bg-[#F8F9FB] transition-colors focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/40 outline-none"
                >
                  <span
                    className={`w-2 h-2 rounded-full ${opt.dot} flex-shrink-0`}
                  />
                  <span className="flex-1 text-left">{opt.label}</span>
                  {status === opt.value && (
                    <CheckCircle2 size={14} className="text-[#7C5CFF]" />
                  )}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

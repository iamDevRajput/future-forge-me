"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { feedbackItems } from "@/lib/mentorship-data";

export default function FeedbackCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = feedbackItems.length;

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + total) % total);
  };
  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % total);
  };

  const item = feedbackItems[current];

  return (
    <div className="bg-white rounded-2xl border border-[#E9EAEE] shadow-[0_1px_3px_rgba(16,24,40,0.06)] p-6 flex flex-col h-full">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-base font-bold text-[#1A1A2E]">Mentee Feedback</h2>
        <Link
          href="#"
          className="text-xs font-semibold text-[#7C5CFF] hover:text-[#6B4DE6] transition-colors focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/40 outline-none rounded"
        >
          View All
        </Link>
      </div>

      {/* Carousel viewport */}
      <div className="flex-1 overflow-hidden relative">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={item.id}
            custom={direction}
            variants={{
              enter: (d: number) => ({
                x: d > 0 ? 60 : -60,
                opacity: 0,
              }),
              center: { x: 0, opacity: 1 },
              exit: (d: number) => ({
                x: d > 0 ? -60 : 60,
                opacity: 0,
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex flex-col gap-4"
          >
            {/* Stars */}
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={
                    i < item.stars
                      ? "text-[#F59E0B] fill-[#F59E0B]"
                      : "text-[#E9EAEE]"
                  }
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-sm text-[#1A1A2E] italic leading-relaxed">
              &ldquo;{item.quote}&rdquo;
            </blockquote>

            {/* Project */}
            <p className="text-xs font-semibold text-[#7C5CFF]">
              {item.project}
            </p>

            {/* Reviewer */}
            <div className="flex items-center gap-3 pt-2 border-t border-[#E9EAEE]">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 border-2 border-white shadow-sm overflow-hidden"
                style={{
                  backgroundColor: item.avatarUrl ? "#F8F9FB" : item.reviewerColor,
                }}
              >
                {item.avatarUrl ? (
                  <img
                    src={item.avatarUrl}
                    alt={item.reviewerName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  item.reviewerInitials
                )}
              </div>
              <div>
                <p className="text-sm font-bold text-[#1A1A2E]">
                  {item.reviewerName}
                </p>
                <p className="text-xs font-medium text-[#6B7280]">
                  {item.reviewerRole}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between pt-4 border-t border-[#E9EAEE] mt-4">
        <div className="flex items-center gap-2">
          {feedbackItems.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`transition-all rounded-full focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/40 outline-none ${
                i === current
                  ? "w-4 h-2 bg-[#7C5CFF]"
                  : "w-2 h-2 bg-[#E9EAEE] hover:bg-[#7C5CFF]/40"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-1">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={prev}
            className="w-8 h-8 rounded-xl border border-[#E9EAEE] flex items-center justify-center text-[#6B7280] hover:bg-[#F8F9FB] hover:text-[#1A1A2E] transition-colors focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/40 outline-none"
          >
            <ChevronLeft size={16} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={next}
            className="w-8 h-8 rounded-xl border border-[#E9EAEE] flex items-center justify-center text-[#6B7280] hover:bg-[#F8F9FB] hover:text-[#1A1A2E] transition-colors focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/40 outline-none"
          >
            <ChevronRight size={16} />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

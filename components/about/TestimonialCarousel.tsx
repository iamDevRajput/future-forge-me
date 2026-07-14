"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useReducedMotion } from "./hooks/useReducedMotion";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface TestimonialItem {
  initials: string;
  name: string;
  role: string;
  quote: string;
  color: string;
}

const testimonials: TestimonialItem[] = [
  {
    initials: "AS",
    name: "Arjun Sharma",
    role: "Software Engineer, InnovSoft",
    quote: "FutureForge helped me go from a student to a software engineer. The projects and mentorship made all the difference in my career journey.",
    color: "bg-[#C08A1E]/20 text-[#B8791A]",
  },
  {
    initials: "PM",
    name: "Priya Menon",
    role: "HR Manager, Learnova",
    quote: "We found high-quality talent faster than ever before. The verified profiles and project portfolios save our team so much time in hiring.",
    color: "bg-[#1A1A1A]/10 text-[#1A1A1A]",
  },
  {
    initials: "RV",
    name: "Rohit Verma",
    role: "Senior Developer, CodeBridge",
    quote: "As a mentor, I love guiding learners and seeing them succeed. The platform makes it incredibly rewarding to give back to the community.",
    color: "bg-[#C08A1E]/20 text-[#B8791A]",
  },
  {
    initials: "NP",
    name: "Neha Patel",
    role: "Course Creator",
    quote: "The best platform that bridges the gap between learning and real-world impact. My courses have reached thousands of eager learners worldwide.",
    color: "bg-[#1A1A1A]/10 text-[#1A1A1A]",
  },
  {
    initials: "EM",
    name: "Elena Morales",
    role: "Product Lead, NexaTech",
    quote: "Our entire product team upskilled through FutureForge in under three months. The hands-on project approach is far more effective than passive courses.",
    color: "bg-[#C08A1E]/20 text-[#B8791A]",
  },
  {
    initials: "KT",
    name: "Kwame Tetteh",
    role: "Freelance Developer",
    quote: "From Accra to the world — FutureForge connected me with clients and mentors who helped me build a thriving freelance career in tech.",
    color: "bg-[#1A1A1A]/10 text-[#1A1A1A]",
  },
];

/* ------------------------------------------------------------------ */
/*  Single testimonial card                                            */
/* ------------------------------------------------------------------ */

function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <div className="glass-card flex h-full flex-col p-6 sm:p-8">
      {/* Quote icon */}
      <Quote className="h-8 w-8 text-[#D9A441] mb-4 shrink-0" />

      {/* Quote text */}
      <p className="text-sm leading-[1.7] text-[#475569] flex-1">
        &ldquo;{item.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="mt-6 flex items-center gap-3 pt-4 border-t border-[#C08A1E]/10 shrink-0">
        <div className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold ${item.color}`}>
          {item.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-[#1A1A1A]">{item.name}</p>
          <p className="text-xs text-[#6B6B6B]">{item.role}</p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function TestimonialCarousel() {
  const reduced = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const [cardStep, setCardStep] = useState(0); // px to move one slide over
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const totalSlides = testimonials.length;

  /* ---- Determine visible cards per breakpoint ---- */
  useEffect(() => {
    const computeVisible = () => {
      const w = window.innerWidth;
      if (w < 640) setVisibleCount(1);
      else if (w < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    computeVisible();
    window.addEventListener("resize", computeVisible);
    return () => window.removeEventListener("resize", computeVisible);
  }, []);

  /* ---- Measure one card width + gap from the live DOM ---- */
  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (track && track.children.length > 0) {
        const firstChild = track.children[0] as HTMLElement;
        const cs = window.getComputedStyle(track);
        const gap = parseFloat(cs.gap) || 0;
        setCardStep(firstChild.offsetWidth + gap);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    // Re-measure shortly after mount once fonts/images settle
    const t = setTimeout(measure, 50);
    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(t);
    };
  }, [visibleCount]);

  const maxIndex = Math.max(0, totalSlides - visibleCount);

  // Clamp active index when visible count changes
  useEffect(() => {
    setActiveIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => {
      const next = prev + 1;
      return next > maxIndex ? 0 : next;
    });
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => {
      const next = prev - 1;
      return next < 0 ? maxIndex : next;
    });
  }, [maxIndex]);

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(Math.max(0, Math.min(index, maxIndex)));
    },
    [maxIndex]
  );

  // Auto-advance
  useEffect(() => {
    if (isPaused || reduced) return;
    intervalRef.current = setInterval(goNext, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, goNext, reduced]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    },
    [goNext, goPrev]
  );

  const translateX = -(activeIndex * cardStep);

  return (
    <section className="bg-[#FDF9F2] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduced ? { duration: 0 } : { duration: 0.5 }}
          className="mb-10 flex max-w-md mx-auto flex-col items-center gap-4"
        >
          <div className="flex w-full items-center gap-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C08A1E]/30" />
            <h2 className="text-xs font-bold tracking-[0.2em] text-[#C08A1E] uppercase whitespace-nowrap">
              What Our Community Says
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C08A1E]/30" />
          </div>
        </motion.div>

        {/* Carousel */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          onKeyDown={handleKeyDown}
          className="relative"
          role="region"
          aria-label="Testimonial carousel"
          aria-roledescription="carousel"
          tabIndex={0}
        >
          {/* Viewport: hides overflow */}
          <div className="overflow-hidden py-1">
            {/* Track: all cards in a flex row; each card sized by flex-basis.
                Width is controlled ONLY by flex-basis + gap — no conflicting inline styles. */}
            <motion.div
              ref={trackRef}
              className="flex gap-5 md:gap-6"
              animate={{ x: translateX }}
              transition={reduced ? { duration: 0 } : { duration: 0.5, ease: "easeInOut" }}
            >
              {testimonials.map((item, idx) => (
                <div
                  key={idx}
                  className="shrink-0 grow-0 w-full sm:w-[calc(50%-10px)] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Testimonial ${idx + 1} of ${totalSlides}: ${item.name}`}
                >
                  <TestimonialCard item={item} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Left arrow */}
          <button
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/80 shadow-lg backdrop-blur-md transition-colors hover:bg-[#C08A1E]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C08A1E]/50"
          >
            <ChevronLeft className="h-5 w-5 text-[#C08A1E]" />
          </button>

          {/* Right arrow */}
          <button
            onClick={goNext}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/80 shadow-lg backdrop-blur-md transition-colors hover:bg-[#C08A1E]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C08A1E]/50"
          >
            <ChevronRight className="h-5 w-5 text-[#C08A1E]" />
          </button>
        </div>

        {/* Dot pagination */}
        <div className="mt-8 flex justify-center gap-2" role="tablist" aria-label="Testimonial navigation">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              role="tab"
              aria-selected={idx === activeIndex}
              aria-label={`Go to testimonial slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C08A1E]/50 ${
                idx === activeIndex
                  ? "w-6 bg-gradient-to-r from-[#D9A441] to-[#B8791A]"
                  : "w-2 bg-[#C08A1E]/20 hover:bg-[#C08A1E]/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

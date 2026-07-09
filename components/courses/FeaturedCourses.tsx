"use client";

import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CourseCard from "@/components/courses/CourseCard";
import { featuredCourses } from "@/lib/mock-data";

export default function FeaturedCourses() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -350 : 350;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">Featured Courses</h2>
                <div className="flex items-center gap-4">
                    <button className="text-sm font-bold text-[#2563EB] hover:text-blue-700 transition-colors hidden sm:block">
                        View All Courses
                    </button>
                    <div className="flex gap-2">
                        <button 
                            onClick={() => scroll('left')}
                            aria-label="Scroll left"
                            className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#2563EB] hover:border-[#2563EB] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                        >
                            <ArrowLeft size={16} strokeWidth={2.5} />
                        </button>
                        <button 
                            onClick={() => scroll('right')}
                            aria-label="Scroll right"
                            className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#2563EB] hover:border-[#2563EB] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                        >
                            <ArrowRight size={16} strokeWidth={2.5} />
                        </button>
                    </div>
                </div>
            </div>

            <div 
                ref={scrollRef}
                className="flex overflow-x-auto gap-6 pb-6 hide-scrollbar snap-x snap-mandatory"
            >
                {featuredCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
            
            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}

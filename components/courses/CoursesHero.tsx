"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, PlayCircle, BookOpen, Clock, Award, ShieldCheck } from "lucide-react";

const popularSearches = ["Python", "Data Science", "Web Development", "Cyber Security", "UI/UX Design", "AWS"];

const stats = [
    { label: "2K+ Expert Courses", icon: PlayCircle },
    { label: "Industry Relevant Skills", icon: BookOpen },
    { label: "Flexible Learn at your pace", icon: Clock },
    { label: "Certificates Showcase your skills", icon: Award },
    { label: "Lifetime Access Learn anytime, anywhere", icon: ShieldCheck },
];

export default function CoursesHero() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <section className="relative overflow-hidden bg-white pt-16 md:pt-20 lg:pt-24 xl:pt-28 pb-16 font-sans border-b border-slate-100">
            {/* Ambient Glows - Unified FutureForge style */}
            <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#2563EB]/10 blur-[120px] pointer-events-none z-0" />
            <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-amber-500/10 blur-[120px] pointer-events-none z-0" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    {/* Left Column */}
                    <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
                        <h1 className="text-4xl md:text-5xl xl:text-[3.25rem] font-black leading-[1.08] tracking-tight text-[#0F172A]">
                            Learn Skills. <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#2563EB] to-[#06B6D4]">Build Futures.</span>
                        </h1>
                        <p className="mt-6 text-sm leading-relaxed text-[#475569] max-w-xl font-medium">
                            Explore expert-led courses across in-demand skills. Learn at your pace and earn industry-recognized certificates.
                        </p>

                        {/* Premium Search Bar */}
                        <div className="mt-8 sm:mt-10 w-full max-w-2xl flex relative shadow-[0_8px_30px_rgba(37,99,235,0.08)] rounded-full">
                            <div className="absolute inset-y-0 left-0 pl-4 sm:pl-6 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 sm:h-6 sm:w-6 text-slate-400" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-12 pr-24 sm:pl-16 sm:pr-36 py-3.5 sm:py-5 border border-slate-200 rounded-full bg-white text-sm sm:text-base text-slate-800 font-medium focus:ring-4 focus:ring-[#2563EB]/15 focus:border-[#2563EB] outline-none transition-all placeholder:text-slate-400"
                                placeholder="Search courses, skills..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className="absolute right-1.5 sm:right-2 top-1.5 sm:top-2 bottom-1.5 sm:bottom-2 bg-[#2563EB] hover:bg-blue-700 text-white font-bold py-1.5 sm:py-2 px-4 sm:px-8 rounded-full transition-colors shadow-md shadow-blue-600/20 text-xs sm:text-sm uppercase tracking-wider">
                                Search
                            </button>
                        </div>

                        {/* Popular Searches */}
                        <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">Popular Searches:</span>
                            {popularSearches.map((term) => (
                                <button key={term} className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors">
                                    {term}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column (Illustration) */}
                    <div className="lg:col-span-5 relative h-96 lg:h-[450px] xl:h-[500px] w-full hidden md:block">
                        <Image 
                            src="/assets/home/heroBackground.png" 
                            alt="Courses Hero Illustration" 
                            fill 
                            className="object-contain" 
                            priority
                        />
                    </div>
                </div>

                {/* Stat/Benefit Strip */}
                <div className="mt-20 pt-8 border-t border-slate-100 flex flex-wrap justify-center lg:justify-between gap-8 md:gap-4 xl:gap-8">
                    {stats.map((stat, idx) => {
                        const Icon = stat.icon;
                        return (
                            <div key={idx} className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] shadow-sm">
                                    <Icon size={20} strokeWidth={2.5} />
                                </div>
                                <span className="text-xs sm:text-sm font-semibold text-slate-700 max-w-[120px] leading-tight">
                                    {stat.label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

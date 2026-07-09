"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const tabs = ["All Courses", "Most Popular", "Newest", "Highest Rated", "Trending"];

export default function CourseTabs() {
    const [activeTab, setActiveTab] = useState("All Courses");

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between border-b border-slate-200 mb-8 pb-4 sm:pb-0 gap-4">
            {/* Tabs */}
            <div className="flex overflow-x-auto w-full sm:w-auto hide-scrollbar gap-6 sm:gap-8 -mb-[1px]">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-4 text-sm font-bold whitespace-nowrap transition-colors relative ${
                            activeTab === tab 
                                ? "text-[#2563EB]" 
                                : "text-slate-500 hover:text-slate-800"
                        }`}
                    >
                        {tab}
                        {activeTab === tab && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563EB] rounded-t-full" />
                        )}
                    </button>
                ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 shrink-0 self-start sm:self-center">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Sort by:</span>
                <div className="relative">
                    <select className="appearance-none bg-white border border-slate-200 text-sm font-bold text-slate-800 py-2 pl-4 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent cursor-pointer shadow-sm">
                        <option>Most Popular</option>
                        <option>Newest</option>
                        <option>Highest Rated</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                </div>
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
        </div>
    );
}

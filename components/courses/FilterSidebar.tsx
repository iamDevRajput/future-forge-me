"use client";

import React, { useState } from "react";
import { Star, ChevronDown } from "lucide-react";

const categories = [
    { label: "Development", count: 425 },
    { label: "Data Science", count: 318 },
    { label: "IT & Software", count: 276 },
    { label: "Business", count: 215 },
    { label: "Design", count: 198 },
    { label: "Marketing", count: 142 },
    { label: "Personal Growth", count: 96 },
];

const levels = [
    { label: "Beginner", count: "1,245" },
    { label: "Intermediate", count: "2,134" },
    { label: "Advanced", count: "1,026" },
];

const courseTypes = [
    { label: "All", count: "2,980", defaultChecked: true },
    { label: "Free", count: "1,023" },
    { label: "Paid", count: "1,957" },
    { label: "Certificate", count: "1,734" },
    { label: "Specialization", count: "642" },
];

const ratings = [
    { stars: 5, count: "1,245" },
    { stars: 4, count: "1,856" },
    { stars: 3, count: "2,315" },
    { stars: 2, count: "2,685" },
];

export default function FilterSidebar() {
    const [showAllCategories, setShowAllCategories] = useState(false);
    const visibleCategories = showAllCategories ? categories : categories.slice(0, 5);

    // Mock state for range slider
    const [duration, setDuration] = useState(50);

    return (
        <aside className="w-full lg:w-72 shrink-0 bg-white border border-slate-200 rounded-3xl p-7 shadow-sm font-sans text-slate-800 self-start sticky top-28">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <h3 className="text-sm font-black tracking-wider uppercase">Filter Courses</h3>
                <button className="text-xs font-bold text-[#2563EB] hover:text-blue-700 transition-colors">
                    Clear All
                </button>
            </div>

            {/* Category Filter */}
            <div className="mb-6 pb-6 border-b border-slate-100">
                <h4 className="text-sm font-bold mb-3">Category</h4>
                <div className="space-y-2.5">
                    {visibleCategories.map((cat, idx) => (
                        <label key={idx} className="flex items-center justify-between cursor-pointer group">
                            <div className="flex items-center gap-2.5">
                                <input type="checkbox" className="w-4 h-4 rounded-sm border-slate-300 text-[#2563EB] focus:ring-[#2563EB]" />
                                <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">{cat.label}</span>
                            </div>
                            <span className="text-xs text-slate-400">({cat.count})</span>
                        </label>
                    ))}
                </div>
                <button 
                    onClick={() => setShowAllCategories(!showAllCategories)}
                    className="mt-3 text-xs font-bold text-[#2563EB] hover:text-blue-700 transition-colors flex items-center gap-1"
                >
                    {showAllCategories ? "- Show Less" : "+ Show More"}
                </button>
            </div>

            {/* Level Filter */}
            <div className="mb-6 pb-6 border-b border-slate-100">
                <h4 className="text-sm font-bold mb-3">Level</h4>
                <div className="space-y-2.5">
                    {levels.map((lvl, idx) => (
                        <label key={idx} className="flex items-center justify-between cursor-pointer group">
                            <div className="flex items-center gap-2.5">
                                <input type="checkbox" className="w-4 h-4 rounded-sm border-slate-300 text-[#2563EB] focus:ring-[#2563EB]" />
                                <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">{lvl.label}</span>
                            </div>
                            <span className="text-xs text-slate-400">({lvl.count})</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Course Type Filter */}
            <div className="mb-6 pb-6 border-b border-slate-100">
                <h4 className="text-sm font-bold mb-3">Course Type</h4>
                <div className="space-y-2.5">
                    {courseTypes.map((type, idx) => (
                        <label key={idx} className="flex items-center justify-between cursor-pointer group">
                            <div className="flex items-center gap-2.5">
                                <input type="checkbox" defaultChecked={type.defaultChecked} className="w-4 h-4 rounded-sm border-slate-300 text-[#2563EB] focus:ring-[#2563EB]" />
                                <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">{type.label}</span>
                            </div>
                            <span className="text-xs text-slate-400">({type.count})</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Duration Filter */}
            <div className="mb-6 pb-6 border-b border-slate-100">
                <h4 className="text-sm font-bold mb-3 flex justify-between">
                    Duration 
                    <span className="text-xs font-medium text-[#2563EB]">{duration} Hours</span>
                </h4>
                <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={duration} 
                    onChange={(e) => setDuration(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#2563EB]" 
                />
                <div className="flex justify-between text-xs text-slate-400 mt-2">
                    <span>0 Hours</span>
                    <span>100+ Hours</span>
                </div>
            </div>

            {/* Language Filter */}
            <div className="mb-6 pb-6 border-b border-slate-100">
                <h4 className="text-sm font-bold mb-3">Language</h4>
                <div className="relative">
                    <select className="w-full appearance-none bg-slate-50 border border-slate-200 text-sm text-slate-700 py-2.5 pl-3 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent">
                        <option>All Languages</option>
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                </div>
            </div>

            {/* Ratings Filter */}
            <div className="mb-6">
                <h4 className="text-sm font-bold mb-3">Rating</h4>
                <div className="space-y-2.5">
                    {ratings.map((rating, idx) => (
                        <label key={idx} className="flex items-center justify-between cursor-pointer group">
                            <div className="flex items-center gap-2.5">
                                <input type="checkbox" className="w-4 h-4 rounded-sm border-slate-300 text-[#2563EB] focus:ring-[#2563EB]" />
                                <div className="flex items-center text-amber-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} className={i < rating.stars ? "fill-current" : "text-slate-200"} />
                                    ))}
                                    <span className="text-sm text-slate-600 ml-2 group-hover:text-slate-900 transition-colors">& Up</span>
                                </div>
                            </div>
                            <span className="text-xs text-slate-400">({rating.count})</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Apply Button */}
            <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-sm text-sm uppercase tracking-wider">
                Apply Filters
            </button>
        </aside>
    );
}

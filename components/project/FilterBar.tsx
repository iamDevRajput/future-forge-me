"use client";

import React, { useState } from "react";
import { Filter, RotateCcw, ChevronDown } from "lucide-react";

interface FilterState {
  projectType: string;
  experienceLevel: string;
  duration: string;
  skills: string;
  difficulty: string;
  budget: string;
  availability: string;
}

const initialFilters: FilterState = {
  projectType: "",
  experienceLevel: "",
  duration: "",
  skills: "",
  difficulty: "",
  budget: "",
  availability: "",
};

export default function FilterBar({
  onApplyFilters,
}: {
  onApplyFilters?: (filters: FilterState) => void;
}) {
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const handleSelectChange = (
    name: keyof FilterState,
    value: string
  ) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearAll = () => {
    setFilters(initialFilters);
    if (onApplyFilters) {
      onApplyFilters(initialFilters);
    }
  };

  const handleApply = () => {
    if (onApplyFilters) {
      onApplyFilters(filters);
    }
  };

  return (
    <div className="w-full bg-white border border-slate-200/80 rounded-2xl md:rounded-3xl shadow-xs p-5 md:p-6 font-sans">
      {/* Title Header */}
      <div className="flex items-center gap-2 pb-4 mb-5 border-b border-slate-100 select-none">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#2563EB]">
          <Filter size={15} />
        </div>
        <div>
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
            Filter Projects
          </h3>
          <p className="text-[10px] text-slate-400 font-medium">
            Narrow down your search by specific attributes
          </p>
        </div>
      </div>

      {/* Grid Matrix of Dropdowns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Project Type */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
            Project Type
          </label>
          <div className="relative">
            <select
              value={filters.projectType}
              onChange={(e) => handleSelectChange("projectType", e.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 pr-10 text-xs font-semibold text-slate-700 outline-hidden hover:bg-slate-50 hover:border-slate-300 focus:border-blue-500 transition-all duration-200 cursor-pointer"
            >
              <option value="">All Types</option>
              <option value="startup">Startup Pitch</option>
              <option value="open-source">Open Source</option>
              <option value="corporate">Corporate Sponsored</option>
              <option value="academic">Academic Research</option>
            </select>
            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Experience Level */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
            Experience Level
          </label>
          <div className="relative">
            <select
              value={filters.experienceLevel}
              onChange={(e) => handleSelectChange("experienceLevel", e.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 pr-10 text-xs font-semibold text-slate-700 outline-hidden hover:bg-slate-50 hover:border-slate-300 focus:border-blue-500 transition-all duration-200 cursor-pointer"
            >
              <option value="">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Duration */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
            Duration
          </label>
          <div className="relative">
            <select
              value={filters.duration}
              onChange={(e) => handleSelectChange("duration", e.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 pr-10 text-xs font-semibold text-slate-700 outline-hidden hover:bg-slate-50 hover:border-slate-300 focus:border-blue-500 transition-all duration-200 cursor-pointer"
            >
              <option value="">All Durations</option>
              <option value="short">{"< 1 Month"}</option>
              <option value="medium">1 - 3 Months</option>
              <option value="long">3+ Months</option>
            </select>
            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
            Skills
          </label>
          <div className="relative">
            <select
              value={filters.skills}
              onChange={(e) => handleSelectChange("skills", e.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 pr-10 text-xs font-semibold text-slate-700 outline-hidden hover:bg-slate-50 hover:border-slate-300 focus:border-blue-500 transition-all duration-200 cursor-pointer"
            >
              <option value="">All Skills</option>
              <option value="react">React / Next.js</option>
              <option value="typescript">TypeScript</option>
              <option value="python">Python / AI</option>
              <option value="solidity">Solidity / Web3</option>
              <option value="uiux">UI/UX Design</option>
              <option value="cloud">AWS / Cloud</option>
            </select>
            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Difficulty */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
            Difficulty
          </label>
          <div className="relative">
            <select
              value={filters.difficulty}
              onChange={(e) => handleSelectChange("difficulty", e.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 pr-10 text-xs font-semibold text-slate-700 outline-hidden hover:bg-slate-50 hover:border-slate-300 focus:border-blue-500 transition-all duration-200 cursor-pointer"
            >
              <option value="">All Difficulties</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Budget */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
            Budget
          </label>
          <div className="relative">
            <select
              value={filters.budget}
              onChange={(e) => handleSelectChange("budget", e.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 pr-10 text-xs font-semibold text-slate-700 outline-hidden hover:bg-slate-50 hover:border-slate-300 focus:border-blue-500 transition-all duration-200 cursor-pointer"
            >
              <option value="">All Budgets</option>
              <option value="paid">Paid Gig</option>
              <option value="unpaid">Unpaid / Learning</option>
            </select>
            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Availability */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
            Availability
          </label>
          <div className="relative">
            <select
              value={filters.availability}
              onChange={(e) => handleSelectChange("availability", e.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 pr-10 text-xs font-semibold text-slate-700 outline-hidden hover:bg-slate-50 hover:border-slate-300 focus:border-blue-500 transition-all duration-200 cursor-pointer"
            >
              <option value="">All Availabilities</option>
              <option value="immediate">Immediate</option>
              <option value="flexible">Flexible</option>
            </select>
            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Action Buttons Panel */}
        <div className="flex items-end gap-3.5 sm:col-span-2 md:col-span-1 lg:col-span-1">
          <button
            onClick={handleClearAll}
            className="flex-1 flex items-center justify-center gap-1.5 h-[41px] rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-500 font-bold uppercase text-[10px] tracking-wider transition-all duration-200 cursor-pointer active:scale-97 select-none shadow-3xs"
          >
            <RotateCcw size={12} />
            Reset
          </button>
          <button
            onClick={handleApply}
            className="flex-1 flex items-center justify-center h-[41px] rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold uppercase text-[10px] tracking-wider transition-all duration-200 cursor-pointer active:scale-97 select-none shadow-sm shadow-blue-500/10"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

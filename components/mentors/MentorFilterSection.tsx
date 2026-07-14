"use client";

import { useState } from "react";
import { 
  SlidersHorizontal, 
  RotateCcw, 
  ChevronDown,
  Check,
  X
} from "lucide-react";

interface FilterOption {
  id: string;
  label: string;
  defaultText: string;
  options: string[];
}

const filterConfigs: FilterOption[] = [
  {
    id: "expertise",
    label: "Expertise",
    defaultText: "All Expertise",
    options: ["Web Development", "Data Science", "AI / ML", "UI/UX Design"],
  },
  {
    id: "experience",
    label: "Experience Level",
    defaultText: "All Levels",
    options: ["Beginner", "Intermediate", "Senior", "Lead"],
  },
  {
    id: "availability",
    label: "Availability",
    defaultText: "Anytime",
    options: ["Today", "This Week", "Weekends", "Evenings"],
  },
  {
    id: "sessionType",
    label: "Session Type",
    defaultText: "All Types",
    options: ["1:1 Mentorship", "Mock Interview", "Code Review", "Career Strategy"],
  },
  {
    id: "priceRange",
    label: "Price Range",
    defaultText: "Any Range",
    options: ["Free", "$10 - $30", "$30 - $60", "$60+"],
  },
  {
    id: "language",
    label: "Language",
    defaultText: "All Languages",
    options: ["English", "Hindi", "Spanish", "German"],
  },
];

export default function MentorFilterSection() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string>>({});
  const [isAvailableNow, setIsAvailableNow] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const handleSelectOption = (filterId: string, option: string) => {
    setSelectedFilters((prev) => ({ ...prev, [filterId]: option }));
    setActiveDropdown(null);
  };

  const handleClearAll = () => {
    setSelectedFilters({});
    setIsAvailableNow(false);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (id: string) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const activeFilterCount = Object.values(selectedFilters).filter(Boolean).length;

  return (
    <section className="bg-white py-4 md:py-6 font-sans text-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* COMPACT DASHBOARD CHASSIS */}
        <div className="w-full bg-white rounded-xl lg:rounded-2xl border border-blue-500/10 shadow-3xs p-3.5 sm:p-4 lg:p-5 relative">
          
          {/* Target Title Block Position */}
          <div className="text-left mb-4 select-none">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-none">
              Find the Right Mentor for You
            </h2>
          </div>
          
          {/* MOBILE & TABLET VIEW: Ultra-low profile row anchor bar (< lg) */}
          <div className="flex lg:hidden items-center justify-between gap-3 w-full select-none">
            <button
              onClick={() => setIsMobileDrawerOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-700 hover:border-blue-300 transition-all shadow-3xs active:scale-95 cursor-pointer relative"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#2563EB]" strokeWidth={2.5} />
              Filter Mentors
              {activeFilterCount > 0 && (
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-[9px] font-black text-white absolute -top-1.5 -right-1.5 ring-2 ring-white">
                  {activeFilterCount}
                </span>
              )}
            </button>

            <label className="inline-flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={isAvailableNow}
                onChange={(e) => setIsAvailableNow(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-4 h-4 rounded border border-slate-300 bg-white flex items-center justify-center peer-checked:bg-gradient-to-r peer-checked:from-[#2563EB] peer-checked:to-[#06B6D4] peer-checked:border-transparent group-hover:border-blue-400 transition-all shadow-3xs">
                {isAvailableNow && <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />}
              </div>
              <span className="text-xs font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
                Available Now
              </span>
            </label>
          </div>

          {/* UNIFIED LARGE & EXTRA LARGE MONITOR DESKTOP VIEW (lg & xl) */}
          <div className="hidden lg:flex flex-col gap-5 w-full">
            <div className="flex flex-row items-center justify-between gap-3 w-full relative z-30">
              {filterConfigs.map((filter) => {
                const currentSelection = selectedFilters[filter.id];
                const isOpen = activeDropdown === filter.id;

                return (
                  <div key={filter.id} className="flex-1 flex flex-col min-w-0 relative">
                    <span className="text-xs font-bold text-slate-900 tracking-tight mb-1.5 select-none">
                      {filter.label}
                    </span>

                    <button
                      onClick={() => handleDropdownToggle(filter.id)}
                      className={`flex items-center justify-between w-full px-3 py-2 text-left rounded-lg border text-xs font-medium transition-all cursor-pointer bg-white shadow-3xs
                        ${isOpen ? "border-blue-400 ring-2 ring-blue-50" : "border-slate-200 hover:border-blue-300"}`}
                    >
                      <span className={`truncate ${currentSelection ? "text-slate-900 font-semibold" : "text-slate-400"}`}>
                        {currentSelection || filter.defaultText}
                      </span>
                      <ChevronDown className={`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#2563EB]" : ""}`} />
                    </button>

                    {isOpen && (
                      <>
                        <div className="fixed inset-0 z-40" onClick={() => setActiveDropdown(null)} />
                        <div className="absolute top-[calc(100%+4px)] left-0 right-0 bg-white border border-slate-200 rounded-lg shadow-md py-1 z-50 max-h-48 overflow-y-auto">
                          <button
                            onClick={() => handleSelectOption(filter.id, "")}
                            className="w-full px-3 py-1.5 text-left text-xs text-slate-400 hover:bg-slate-50 cursor-pointer"
                          >
                            {filter.defaultText}
                          </button>
                          {filter.options.map((option) => (
                            <button
                              key={option}
                              onClick={() => handleSelectOption(filter.id, option)}
                              className={`flex items-center justify-between w-full px-3 py-1.5 text-left text-xs cursor-pointer transition-colors
                                ${currentSelection === option ? "bg-blue-50/50 text-[#2563EB] font-semibold" : "text-slate-600 hover:bg-slate-50"}`}
                            >
                              <span className="truncate">{option}</span>
                              {currentSelection === option && <Check className="w-3.5 h-3.5 text-[#2563EB]" />}
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Desktop Action Summary Control Bar */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between select-none">
              <label className="inline-flex items-center gap-2.5 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={isAvailableNow}
                  onChange={(e) => setIsAvailableNow(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-4 h-4 rounded border border-slate-300 bg-white flex items-center justify-center peer-checked:bg-gradient-to-r peer-checked:from-[#2563EB] peer-checked:to-[#06B6D4] peer-checked:border-transparent group-hover:border-blue-400 transition-all shadow-3xs">
                  {isAvailableNow && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                </div>
                <span className="text-xs font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">
                  Available for Booking Now
                </span>
              </label>

              <div className="flex items-center gap-4">
                <button onClick={handleClearAll} className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-[#2563EB] transition-colors cursor-pointer p-1 active:scale-95">
                  <RotateCcw className="w-3.5 h-3.5" strokeWidth={2.2} />
                  Clear All
                </button>
                <button className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white text-xs font-bold shadow-xs hover:opacity-95 active:scale-95 transition-all cursor-pointer min-w-[110px]">
                  Apply Filters
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* MOBILE/TABLET SLIDE-OUT PANEL DRAWER */}
      {isMobileDrawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setIsMobileDrawerOpen(false)}
          />

          <div className="absolute bottom-0 left-0 right-0 max-h-[85vh] bg-white rounded-t-2xl shadow-xl flex flex-col overflow-hidden">
            
            <div className="px-4 py-3.5 border-b border-slate-100 flex items-center justify-between shrink-0 bg-slate-50/50">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-slate-900">Filter Dashboard</h3>
                {activeFilterCount > 0 && (
                  <span className="bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full text-[10px] font-bold text-[#2563EB]">
                    {activeFilterCount} Active
                  </span>
                )}
              </div>
              <button 
                onClick={() => setIsMobileDrawerOpen(false)}
                className="p-1 rounded-lg border border-slate-200 bg-white text-slate-400 hover:text-slate-900 shadow-3xs cursor-pointer active:scale-95"
              >
                <X className="w-4 h-4" strokeWidth={2.5} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {filterConfigs.map((filter) => {
                const currentSelection = selectedFilters[filter.id];
                const isOpen = activeDropdown === filter.id;

                return (
                  <div key={filter.id} className="flex flex-col relative w-full">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 select-none">
                      {filter.label}
                    </span>
                    
                    <button
                      onClick={() => handleDropdownToggle(filter.id)}
                      className={`flex items-center justify-between w-full px-3 py-2.5 text-left rounded-xl border text-xs font-semibold bg-white shadow-3xs transition-all
                        ${isOpen ? "border-blue-400 ring-2 ring-blue-50" : "border-slate-200"}`}
                    >
                      <span className={currentSelection ? "text-[#2563EB]" : "text-slate-700"}>
                        {currentSelection || filter.defaultText}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? "rotate-180 text-[#2563EB]" : ""}`} />
                    </button>

                    {isOpen && (
                      <div className="mt-1 border border-slate-100 rounded-xl bg-slate-50/50 p-1 space-y-0.5">
                        <button
                          onClick={() => handleSelectOption(filter.id, "")}
                          className="w-full px-3 py-2 text-left text-xs text-slate-400 font-medium hover:bg-white rounded-lg"
                        >
                          {filter.defaultText}
                        </button>
                        {filter.options.map((option) => (
                          <button
                            key={option}
                            onClick={() => handleSelectOption(filter.id, option)}
                            className={`flex items-center justify-between w-full px-3 py-2 text-left text-xs font-medium rounded-lg transition-colors
                              ${currentSelection === option ? "bg-white border border-blue-100 text-[#2563EB] shadow-3xs" : "text-slate-600 hover:bg-white"}`}
                          >
                            <span>{option}</span>
                            {currentSelection === option && <Check className="w-3.5 h-3.5 text-[#2563EB]" strokeWidth={2.5} />}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="p-4 border-t border-slate-100 bg-white flex items-center justify-between gap-4 shrink-0">
              <button 
                onClick={() => { handleClearAll(); setIsMobileDrawerOpen(false); }}
                className="inline-flex items-center gap-1 px-3 py-2 text-xs font-bold text-slate-400 hover:text-slate-600 active:scale-95"
              >
                <RotateCcw className="w-3.5 h-3.5" strokeWidth={2.5} />
                Reset
              </button>
              
              <button 
                onClick={() => setIsMobileDrawerOpen(false)}
                className="flex-1 inline-flex items-center justify-center py-2.5 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white text-xs font-bold shadow-sm active:scale-98 cursor-pointer"
              >
                Show Results
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
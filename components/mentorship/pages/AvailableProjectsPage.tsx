"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, X } from "lucide-react";
import ProjectCard from "@/components/mentorship/ProjectCard";
import { availableProjects } from "@/lib/mentorship-data";
import { EmptyProjectsIllustration } from "@/components/mentorship/Illustrations";

const ROLES = ["All Roles", "AI/ML", "Backend", "UI/UX"];
const STAGES = ["All Stages", "Design", "MVP", "Alpha", "Beta"];
const TEAM_SIZES = ["Any Size", "1–3", "4–5", "6+"];

export default function AvailableProjectsPage() {
  const [roleFilter, setRoleFilter] = useState("All Roles");
  const [stageFilter, setStageFilter] = useState("All Stages");
  const [teamFilter, setTeamFilter] = useState("Any Size");
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  const filtered = useMemo(() => {
    return availableProjects.filter((p) => {
      const matchRole =
        roleFilter === "All Roles" || p.needsRole === roleFilter;
      const matchStage = stageFilter === "All Stages" || p.stage === stageFilter;
      const matchTeam =
        teamFilter === "Any Size" ||
        (teamFilter === "1–3" && p.teamSize <= 3) ||
        (teamFilter === "4–5" && p.teamSize >= 4 && p.teamSize <= 5) ||
        (teamFilter === "6+" && p.teamSize >= 6);
      const matchSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.org.toLowerCase().includes(search.toLowerCase());

      return matchRole && matchStage && matchTeam && matchSearch;
    });
  }, [roleFilter, stageFilter, teamFilter, search]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const activeFilterCount = [
    roleFilter !== "All Roles",
    stageFilter !== "All Stages",
    teamFilter !== "Any Size",
    !!search,
  ].filter(Boolean).length;

  const clearAll = () => {
    setRoleFilter("All Roles");
    setStageFilter("All Stages");
    setTeamFilter("Any Size");
    setSearch("");
  };

  return (
    <div className="px-4 sm:px-6 py-6 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
        <div>
          <h1 className="text-2xl font-black text-[#1A1A2E] tracking-tight">
            Available Projects
          </h1>
          <p className="text-sm text-[#6B7280] mt-1">
            Browse and apply to projects that match your expertise.
          </p>
        </div>
        <span className="text-sm text-[#6B7280] font-medium self-center">
          {filtered.length} project{filtered.length !== 1 ? "s" : ""} found
        </span>
      </div>

      {/* Filter Bar */}
      <div className="bg-white rounded-2xl border border-[#E9EAEE] shadow-[0_1px_3px_rgba(16,24,40,0.06)] p-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="relative flex-1">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]"
            />
            <input
              type="text"
              placeholder="Search projects or organizations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-[#E9EAEE] bg-[#F8F9FB] text-[#1A1A2E] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#7C5CFF]/40 focus:border-[#7C5CFF]/60"
            />
          </div>

          {/* Toggle filters on mobile */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="sm:hidden flex items-center gap-2 px-3 py-2.5 rounded-xl border border-[#E9EAEE] text-sm font-medium text-[#6B7280] hover:bg-[#F8F9FB]"
          >
            <SlidersHorizontal size={15} />
            Filters{activeFilterCount > 0 && ` (${activeFilterCount})`}
          </button>

          {/* Desktop filter selects */}
          <div className={`flex flex-col sm:flex-row gap-2 ${showFilters ? "flex" : "hidden sm:flex"}`}>
            {[
              { value: roleFilter, setter: setRoleFilter, options: ROLES },
              { value: stageFilter, setter: setStageFilter, options: STAGES },
              { value: teamFilter, setter: setTeamFilter, options: TEAM_SIZES },
            ].map(({ value, setter, options }) => (
              <select
                key={options[0]}
                value={value}
                onChange={(e) => setter(e.target.value)}
                className="px-3 py-2.5 text-sm rounded-xl border border-[#E9EAEE] bg-[#F8F9FB] text-[#1A1A2E] focus:outline-none focus:ring-2 focus:ring-[#7C5CFF]/40 cursor-pointer"
              >
                {options.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            ))}
          </div>

          {activeFilterCount > 0 && (
            <button
              onClick={clearAll}
              className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-sm font-medium text-[#EF4444] hover:bg-[#FEF2F2] border border-[#EF4444]/20 transition-colors"
            >
              <X size={14} />
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl border border-[#E9EAEE] p-16 text-center flex flex-col items-center justify-center min-h-[400px]"
        >
          <EmptyProjectsIllustration className="mb-6" />
          <p className="text-lg font-bold text-[#1A1A2E] mb-2">
            No projects found
          </p>
          <p className="text-sm text-[#6B7280] mb-6 max-w-[300px] leading-relaxed">
            We couldn&apos;t find any projects matching your current filters. Try adjusting your search or clearing filters to see more options.
          </p>
          <button
            onClick={clearAll}
            className="px-5 py-2.5 rounded-xl border-2 border-[#7C5CFF] text-[#7C5CFF] text-sm font-semibold hover:bg-[#EDE9FE] transition-colors focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/40 outline-none"
          >
            Clear all filters
          </button>
        </motion.div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {visible.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </div>

          {hasMore && (
            <div className="flex justify-center mt-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setVisibleCount((c) => c + 6)}
                className="px-6 py-3 rounded-xl border-2 border-[#7C5CFF] text-[#7C5CFF] text-sm font-semibold hover:bg-[#EDE9FE] transition-colors focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/40 outline-none"
              >
                Load More Projects
              </motion.button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

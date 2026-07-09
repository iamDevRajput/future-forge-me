"use client";

import React from "react";
import { Clock, BarChart2, DollarSign, ArrowUpRight } from "lucide-react";

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  image: string;
  skills: string[];
  budget: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  isFeatured?: boolean;
}

interface ProjectCardProps {
  project: ProjectData;
  onApply?: (id: string) => void;
}

export default function ProjectCard({ project, onApply }: ProjectCardProps) {
  const handleApplyClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onApply) {
      onApply(project.id);
    }
  };

  const difficultyColors = {
    Beginner: "bg-emerald-50 text-emerald-700 border-emerald-100",
    Intermediate: "bg-blue-50 text-blue-700 border-blue-100",
    Advanced: "bg-violet-50 text-violet-700 border-violet-100",
  };

  return (
    <div className="group flex flex-col rounded-2xl border border-slate-200/80 bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/20 hover:shadow-lg h-full">
      {/* Visual Image Header */}
      <div className="relative h-44 w-full bg-slate-100 overflow-hidden shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Transparent dark gradient overlay for image protection */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />

        {/* Featured Badge Overlay */}
        {project.isFeatured && (
          <span className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/90 text-[9px] font-bold text-white uppercase tracking-wider shadow-xs backdrop-blur-xs select-none">
            Featured
          </span>
        )}

        {/* Difficulty Badge Overlay */}
        <span
          className={`absolute bottom-3.5 left-3.5 px-2.5 py-0.5 rounded-md border text-[9px] font-bold uppercase tracking-wider select-none ${
            difficultyColors[project.difficulty]
          }`}
        >
          {project.difficulty}
        </span>
      </div>

      {/* Card Details Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Card Title */}
          <h3 className="text-sm sm:text-base font-bold text-[#0F172A] tracking-tight leading-snug group-hover:text-[#2563EB] transition-colors line-clamp-1">
            {project.title}
          </h3>

          {/* Description */}
          <p className="mt-2 text-xs leading-relaxed text-[#475569] font-medium line-clamp-2">
            {project.description}
          </p>

          {/* Skills Row */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="text-[9px] font-bold bg-slate-50 border border-slate-100 rounded-md px-2 py-0.5 text-slate-500 uppercase tracking-wide select-none"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Metrics and Action Details */}
        <div className="mt-5 pt-4 border-t border-slate-100">
          <div className="grid grid-cols-3 gap-2 text-left mb-4 select-none">
            {/* Budget */}
            <div className="space-y-0.5">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                Budget
              </span>
              <div className="flex items-center text-xs font-bold text-slate-700 font-mono">
                <DollarSign size={11} className="text-[#2563EB] mr-0.5" />
                {project.budget}
              </div>
            </div>

            {/* Duration */}
            <div className="space-y-0.5 border-l border-slate-100 pl-2">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                Duration
              </span>
              <div className="flex items-center text-xs font-bold text-slate-700">
                <Clock size={11} className="text-[#06B6D4] mr-1" />
                {project.duration}
              </div>
            </div>

            {/* Platform Trust */}
            <div className="space-y-0.5 border-l border-slate-100 pl-2">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                Access
              </span>
              <div className="flex items-center text-xs font-bold text-slate-700">
                <BarChart2 size={11} className="text-indigo-400 mr-1" />
                Verified
              </div>
            </div>
          </div>

          {/* Action Trigger Button */}
          <button
            onClick={handleApplyClick}
            className="flex items-center justify-center gap-1.5 w-full rounded-xl bg-slate-50 hover:bg-[#2563EB] text-[#475569] hover:text-white border border-slate-200/80 hover:border-transparent py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-3xs hover:shadow-md hover:shadow-blue-500/10 active:scale-97 select-none"
          >
            Apply for Project
            <ArrowUpRight size={13} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

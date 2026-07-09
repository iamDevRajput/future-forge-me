"use client";

import React from "react";
import { Building2, Globe2 } from "lucide-react";

interface OrgItem {
  name: string;
  industry: string;
  activeProjects: string;
  monogram: string;
  color: string;
}

const organizations: OrgItem[] = [
  {
    name: "Microsoft",
    industry: "Enterprise Software & Cloud",
    activeProjects: "14 Active Projects",
    monogram: "MS",
    color: "from-blue-600 to-[#00A4EF]",
  },
  {
    name: "Google",
    industry: "AI, Search & Cloud Infrastructure",
    activeProjects: "18 Active Projects",
    monogram: "GG",
    color: "from-red-500 via-yellow-500 to-green-500",
  },
  {
    name: "Amazon",
    industry: "E-Commerce & AWS Cloud",
    activeProjects: "9 Active Projects",
    monogram: "AZ",
    color: "from-[#FF9900] to-slate-800",
  },
  {
    name: "TCS",
    industry: "IT Services & Consultancy",
    activeProjects: "24 Active Projects",
    monogram: "TC",
    color: "from-indigo-600 to-indigo-800",
  },
  {
    name: "Infosys",
    industry: "Global Digital Services",
    activeProjects: "15 Active Projects",
    monogram: "IF",
    color: "from-sky-600 to-sky-800",
  },
  {
    name: "Deloitte",
    industry: "Strategy, Tech & Consulting",
    activeProjects: "11 Active Projects",
    monogram: "DL",
    color: "from-emerald-500 to-[#86BC25]",
  },
];

export default function OrganizationSection() {
  return (
    <section className="bg-slate-50/50 py-12 md:py-16 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-10 select-none">
          <span className="inline-flex rounded-full bg-[#2563EB]/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
            Top Organizations
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight">
            Work with Leading Companies
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 font-medium">
            Get your skills noticed by hiring managers from global startups, consulting firms, and Fortune 500 tech leaders.
          </p>
        </div>

        {/* Organizations Runway Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {organizations.map((org) => (
            <div
              key={org.name}
              className="group flex flex-col items-center justify-between text-center p-5 bg-white border border-slate-200/80 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/20 hover:shadow-lg cursor-pointer"
            >
              {/* Circular Emblem Monogram */}
              <div className={`relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr ${org.color} text-white font-bold text-base shadow-xs select-none group-hover:scale-105 transition-transform duration-300`}>
                <span className="tracking-wider">{org.monogram}</span>
                {/* Visual indicator dot */}
                <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 bg-emerald-400 border border-white rounded-full" />
              </div>

              {/* Organization Metadata */}
              <div className="mt-4 flex-1 flex flex-col justify-center">
                <h3 className="text-xs font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors leading-none">
                  {org.name}
                </h3>
                <p className="text-[9px] text-slate-400 font-semibold mt-1.5 leading-snug line-clamp-1">
                  {org.industry}
                </p>
              </div>

              {/* Action/Indicator Line */}
              <div className="mt-4 pt-3 border-t border-slate-100 w-full flex items-center justify-center gap-1 text-[9px] font-bold text-[#2563EB]">
                <Building2 size={10} className="opacity-75" />
                <span>{org.activeProjects}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

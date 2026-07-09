"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Code, Brain, Coins, ShieldCheck, Heart } from "lucide-react";
import SearchBar from "./SearchBar";

const popularTags = [
  "Web Development",
  "AI",
  "Machine Learning",
  "Blockchain",
  "Mobile Apps",
  "Cloud",
];

export default function Hero() {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  return (
    <section className="relative overflow-hidden bg-white pt-10 md:pt-16 lg:pt-20 pb-16 font-sans">
      {/* Light-Blue Ambient Glows */}
      <div className="absolute left-0 top-0 h-96 w-96 md:h-110 md:w-110 xl:h-125 xl:w-125 rounded-full bg-[#2563EB]/15 blur-[100px] pointer-events-none z-0" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#06B6D4]/10 blur-[100px] pointer-events-none z-0" />

      {/* Main Layout Grid Content */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:gap-16 px-4 sm:px-6 relative z-10 lg:grid-cols-12">
        {/* LEFT COLUMN: Badge, Headings, Paragraph, Search & Tags */}
        <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-100 bg-blue-50/50 text-[10px] font-bold tracking-widest text-[#2563EB] w-fit uppercase mb-6">
            <Sparkles size={11} className="text-[#06B6D4] animate-pulse" />
            Real Projects. Real Impact.
          </div>

          <h1 className="text-4xl md:text-5xl xl:text-[3.25rem] font-black leading-[1.1] tracking-tight text-[#0F172A]">
            Find Projects. <br />
            Build Experience. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">
              Create Impact.
            </span>
          </h1>

          <p className="mt-5 text-sm md:text-base leading-relaxed text-[#475569] max-w-md font-medium">
            Explore real-world projects from startups, organizations and
            professionals. Build your portfolio while learning.
          </p>

          {/* Large Search Bar Wrapper */}
          <div className="mt-8 w-full max-w-xl">
            <SearchBar onSearch={handleSearch} />
          </div>

          {/* Popular Tags */}
          <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 max-w-xl">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1">
              Popular:
            </span>
            {popularTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleSearch(tag)}
                className="text-[11px] font-semibold text-[#475569] bg-slate-50 hover:bg-[#2563EB] hover:text-white border border-slate-200/80 hover:border-transparent px-3 py-1.5 rounded-full transition-all duration-300 shadow-3xs cursor-pointer active:scale-95"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Visual Dashboard Illustration */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative w-full h-[360px] md:h-[450px] lg:h-[480px]">
          {/* Base Ecosystem Background Watermark */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
            <Image
              src="/assets/home/heroBackground.png"
              alt="Ecosystem Background"
              fill
              priority
              className="object-contain object-center"
            />
          </div>

          {/* Radial SVG Ambient Ring */}
          <svg className="absolute inset-0 h-full w-full opacity-60 pointer-events-none hidden sm:block" viewBox="0 0 500 500" fill="none">
            <circle cx="250" cy="250" r="180" stroke="#2563EB" strokeWidth="1" strokeDasharray="3 5" className="opacity-20" />
            <circle cx="250" cy="250" r="110" stroke="#E2E8F0" strokeWidth="1.5" className="opacity-50" />
          </svg>

          {/* Premium Floating Cards */}
          <div className="relative w-full h-full flex items-center justify-center">
            
            {/* Card 1: Web App Builder Mock */}
            <div
              className="absolute left-6 md:left-12 top-[10%] z-20 w-64 md:w-72 bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-2xl p-4 shadow-xl transition-all hover:scale-103 duration-300"
              style={{ animation: "floatCard 6s ease-in-out infinite" }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-100 text-[9px] font-bold text-emerald-600 uppercase">
                  Featured
                </span>
                <span className="text-[10px] font-bold text-slate-400 font-mono">$1,800</span>
              </div>
              <h3 className="text-xs font-bold text-[#0F172A] mb-1">
                AI Chat Application Platform
              </h3>
              <p className="text-[10px] text-slate-500 line-clamp-2 leading-relaxed mb-3">
                Integrate LLM APIs with Next.js to provide custom document chat services.
              </p>
              <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                <div className="flex gap-1">
                  <span className="text-[8px] font-bold bg-slate-50 border border-slate-100 rounded-sm px-1.5 py-0.5 text-slate-600">NextJS</span>
                  <span className="text-[8px] font-bold bg-slate-50 border border-slate-100 rounded-sm px-1.5 py-0.5 text-slate-600">API</span>
                </div>
                <button className="text-[9px] font-extrabold uppercase text-[#2563EB] tracking-wide hover:text-[#06B6D4] transition-colors">
                  Apply Now &rarr;
                </button>
              </div>
            </div>

            {/* Card 2: Web3 Project Mock */}
            <div
              className="absolute right-6 md:right-12 bottom-[15%] z-20 w-60 md:w-64 bg-white/90 backdrop-blur-md border border-[#2563EB]/10 rounded-2xl p-4 shadow-xl transition-all hover:scale-103 duration-300"
              style={{ animation: "floatCard 6s ease-in-out 3s infinite" }}
            >
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB]">
                  <Coins size={14} />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-slate-900 leading-none">DeFi Payment Gateway</h4>
                  <span className="text-[8px] text-slate-400 font-medium">Solidity, Web3</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-[9px] font-bold text-slate-500 border-t border-slate-100 pt-2.5">
                <span className="text-[#2563EB]">Intermediate</span>
                <span className="font-mono">Est: 4 weeks</span>
              </div>
            </div>

            {/* Floating Mini Tech Nodes */}
            <div
              className="absolute right-[20%] top-[15%] z-10 w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-md text-[#2563EB]"
              style={{ animation: "floatMini 4s ease-in-out infinite" }}
            >
              <Code size={16} />
            </div>

            <div
              className="absolute left-[20%] bottom-[20%] z-10 w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-md text-[#06B6D4]"
              style={{ animation: "floatMini 4s ease-in-out 2s infinite" }}
            >
              <Brain size={16} />
            </div>
            
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes floatMini {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-5px) scale(1.05); }
        }
      `}</style>
    </section>
  );
}

import React, { useState } from "react";
import {
    ArrowRight,
    Sparkles,
    GraduationCap,
    FolderKanban,
    BadgeCheck,
    Briefcase,
    Users,
    Star,
    Layers,
    ArrowUpRight,
    TrendingUp
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const cycleNodes = [
    { title: "LEARN", desc: "Access quality courses and resources", icon: GraduationCap, pos: "xl:top-[-6%] xl:left-1/2 xl:-translate-x-1/2 lg:top-[-4%] lg:left-1/2 lg:-translate-x-1/2" },
    { title: "VERIFY", desc: "Assess skills and earn recognized certificates", icon: BadgeCheck, pos: "xl:top-[14%] xl:-right-[10%] lg:top-[16%] lg:-right-[5%]" },
    { title: "BUILD", desc: "Work on real-world projects", icon: FolderKanban, pos: "xl:top-[49%] xl:-right-[12%] lg:top-[49%] lg:-right-[6%]" },
    { title: "COLLABORATE", desc: "Connect with mentors, peers, and experts", icon: Users, pos: "xl:bottom-[11%] xl:right-[0%] lg:bottom-[11%] lg:right-[4%]" },
    { title: "GET REVIEWED", desc: "Receive professional feedback and reviews", icon: Star, pos: "xl:bottom-[11%] xl:-left-[0%] lg:bottom-[11%] lg:-left-[4%]" },
    { title: "GET HIRED", desc: "Discover opportunities and grow your career", icon: Briefcase, pos: "xl:top-[49%] xl:-left-[10%] lg:top-[49%] lg:-left-[5%]" },
    { title: "GROW", desc: "Build reputation and unlock new possibilities", icon: TrendingUp, pos: "xl:top-[14%] xl:-left-[5%] lg:top-[16%] lg:-left-[2%]" },
];

const stats = [
    { value: "250K+", label: "Active Users" },
    { value: "15K+", label: "Projects Posted" },
    { value: "2K+", label: "Courses" },
    { value: "1K+", label: "Organizations" },
];

export default function FullyResponsiveHero() {
    const [hoveredNode, setHoveredNode] = useState<number | null>(null);

    return (
        <section className="relative overflow-hidden bg-white pt-12 md:pt-16 lg:pt-20 xl:pt-24 font-sans">

            {/* 1. MOBILE & TABLET FIXED BACKGROUND WRAPPER (Sharp asset backdrop up to lg break-point) */}
            <div 
                className="absolute inset-0 z-0 lg:hidden pointer-events-none opacity-15"
                style={{ clipPath: "inset(0px)" }}
            >
                <div className="absolute inset-0 w-full h-full flex items-center justify-center p-4">
                    <div className="relative w-full h-[70vh] max-w-md md:max-w-lg">
                        <Image 
                            src="/assets/home/heroBackground.png" 
                            alt="Ecosystem Fixed Background Watermark" 
                            fill 
                            priority 
                            className="object-contain object-center" 
                        />
                    </div>
                </div>
            </div>

            {/* Clean Light-Blue Ambient Glow Bases */}
            <div className="absolute left-0 top-0 h-96 w-96 md:h-110 md:w-110 xl:h-125 xl:w-125 rounded-full bg-[#2563EB]/20 blur-[100px] xl:blur-[120px] pointer-events-none z-0" />

            {/* Smooth Bottom Mask Layer for Flawless Page Blending */}
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-10" />

            {/* Main Layout Grid Content Shell */}
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:gap-16 px-6 relative z-20 lg:grid-cols-12">

                {/* LEFT COLUMN: Headings, Paragraph, Buttons & Statistics */}
                <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-100 bg-blue-50/50 text-[10px] font-bold tracking-widest text-[#2563EB] w-fit uppercase mb-6">
                        <Sparkles size={11} className="text-[#06B6D4] animate-pulse" />
                        Learn. Build. Verify. Grow.
                    </div>

                    <h1 className="text-4xl md:text-5xl xl:text-[3.25rem] font-black leading-[1.08] tracking-tight text-[#0F172A]">
                        From Learning <br />
                        to Leadership, <br />
                        We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">Forge Futures.</span>
                    </h1>

                    <p className="mt-6 text-sm leading-relaxed text-[#1E293B] lg:text-[#475569] max-w-md font-semibold lg:font-medium drop-shadow-[0_2px_10px_rgba(255,255,255,0.85)] lg:drop-shadow-none">
                        FutureForge is an all-in-one platform that empowers learners, professionals, and organizations to learn, collaborate on real-world projects, get verified, and build a future that matters.
                    </p>

                    {/* Action Layout Elements */}
                    <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 w-full sm:w-auto">
                        <Link href="/register" className="group flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-md shadow-indigo-600/10">
                            Get Started
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 text-indigo-200" />
                        </Link>
                        <button className="flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl border border-slate-200 bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#475569] transition-all shadow-sm hover:bg-slate-50">
                            Explore Platform
                            <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
                        </button>
                    </div>

                    {/* Grid Statistics Row */}
                    <div className="mt-12 xl:mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4 border-t border-slate-100 pt-6 w-full">
                        {stats.map((item) => (
                            <div key={item.label} className="text-center lg:text-left">
                                <h3 className="text-2xl md:text-3xl xl:text-2xl font-black text-[#0F172A] tracking-tight drop-shadow-[0_2px_8px_rgba(255,255,255,0.8)] lg:drop-shadow-none">
                                    {item.value}
                                </h3>
                                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 xl:text-slate-400 mt-0.5 drop-shadow-[0_2px_8px_rgba(255,255,255,0.8)] lg:drop-shadow-none">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT COLUMN: Desktop & Medium Frame Loop System (Activates on lg screens up) */}
                <div className="lg:col-span-7 flex flex-col lg:relative items-center justify-center lg:pl-6 xl:pl-10 mt-2 lg:mt-0 w-full">
                    
                    {/* Main Visual Display Frame Container */}
                    <div className="relative lg:h-120 lg:w-120 xl:h-140 xl:w-full xl:max-w-140 shrink-0 hidden lg:block">
                        
                        {/* Ambient Graphics Layout Vectors */}
                        <svg className="absolute inset-0 h-full w-full opacity-100 pointer-events-none" viewBox="0 0 560 560" fill="none">
                            <circle cx="280" cy="280" r="200" stroke="#0F172A" strokeWidth="1.5" strokeDasharray="4 6" className="opacity-[0.12]" />
                            <circle cx="280" cy="280" r="130" stroke="#E2E8F0" strokeWidth="2" className="opacity-70" />
                        </svg>

                        {/* Mid-to-Large Screen Centered Engine Core */}
                        <div className="absolute left-1/2 top-1/2 flex lg:h-120 lg:w-100 xl:h-140 xl:w-120 -translate-x-1/2 -translate-y-3/5 z-10">
                            <Image src="/assets/home/heroBackground.png" alt="Desktop Hero Background" fill className="object-contain" />
                        </div>

                        {/* Absolute Position Nodes Array Mapper */}
                        <div className="absolute inset-0">
                            {cycleNodes.map((node, idx) => {
                                const Icon = node.icon;
                                const isHovered = hoveredNode === idx;
                                const isLeftSide = !node.pos.includes("left");
                                const isTop = node.pos.includes("top");

                                return (
                                    <div
                                        key={`desktop-${node.title}`}
                                        className={`absolute ${node.pos} z-20 group flex items-center gap-3`}
                                        style={{
                                            animation: `float 6s ease-in-out ${idx * 0.4}s infinite`,
                                            flexDirection: isTop ? "column" : isLeftSide ? "row" : "row-reverse"
                                        }}
                                        onMouseEnter={() => setHoveredNode(idx)}
                                        onMouseLeave={() => setHoveredNode(null)}
                                    >
                                        <div className={`w-10 h-10 xl:w-12 xl:h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center shadow-md cursor-pointer transition-all duration-300 shrink-0 relative z-10 hover:border-[#2563EB]/50 hover:shadow-lg hover:-translate-y-0.5 ${isHovered ? "border-[#2563EB] shadow-lg scale-105" : ""} `}>
                                            <Icon size={16} className="text-[#475569] group-hover:text-[#2563EB] transition-colors" strokeWidth={2.5} />
                                        </div>

                                        <div className={`flex flex-col justify-center items-center bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-xl border border-slate-100 shadow-sm transition-all duration-300 pointer-events-none whitespace-nowrap text-center ${isHovered ? "border-slate-200 bg-white translate-x-0.5" : ""} `}>
                                            <span className="text-[9px] xl:text-[10px] font-black tracking-wider text-[#0F172A] uppercase leading-tight">
                                                {node.title}
                                            </span>
                                            <p className="text-[8px] xl:text-[9px] text-slate-400 font-medium mt-0.5 max-w-24 xl:max-w-30 text-wrap">
                                                {node.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-5px); }
                }
            `}</style>
        </section>
    );
}
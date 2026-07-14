"use client";

import { useState } from "react";
import { 
  Star, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  TrendingUp, 
  Network, 
  Award, 
  ShieldCheck,
  LucideIcon
} from "lucide-react";

interface Mentor {
  id: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  reviews: number;
  sessions: number;
  price: number;
  tags: string[];
  badge: "Top Mentor" | "Popular" | "New";
}

interface FeatureItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const mentors: Mentor[] = [
  {
    id: "1",
    name: "Dr. Ananya Sharma",
    role: "AI Research Scientist at Google",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    rating: 4.9,
    reviews: 320,
    sessions: 1200,
    price: 2000,
    tags: ["AI / ML", "Data Science", "Python"],
    badge: "Top Mentor"
  },
  {
    id: "2",
    name: "Rohit Verma",
    role: "Senior Software Engineer at Microsoft",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
    rating: 4.8,
    reviews: 280,
    sessions: 980,
    price: 1500,
    tags: ["Web Dev", "System Design", "AWS"],
    badge: "Popular"
  },
  {
    id: "3",
    name: "Priya Menon",
    role: "Product Manager at Amazon",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    rating: 4.9,
    reviews: 210,
    sessions: 750,
    price: 2000,
    tags: ["Product Mgmt", "Leadership", "Strategy"],
    badge: "Top Mentor"
  },
  {
    id: "4",
    name: "Arjun Patel",
    role: "Data Scientist at Netflix",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    rating: 4.8,
    reviews: 190,
    sessions: 620,
    price: 1800,
    tags: ["Data Science", "Machine Learning", "SQL"],
    badge: "Popular"
  },
  {
    id: "5",
    name: "Karan Malhotra",
    role: "Cyber Security Expert",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
    reviews: 120,
    sessions: 410,
    price: 1300,
    tags: ["Cyber Security", "Ethical Hacking", "Network"],
    badge: "New"
  },
  {
    id: "6",
    name: "Neha Iyer",
    role: "UI/UX Design Lead at Adobe",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    rating: 4.9,
    reviews: 160,
    sessions: 540,
    price: 1600,
    tags: ["UI/UX Design", "Figma", "User Research"],
    badge: "Top Mentor"
  },
  {
    id: "7",
    name: "Vikram Joshi",
    role: "Entrepreneur & Startup Mentor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
    rating: 4.8,
    reviews: 150,
    sessions: 480,
    price: 2000,
    tags: ["Startups", "Business Strategy", "Funding"],
    badge: "Popular"
  },
  {
    id: "8",
    name: "Sneha Reddy",
    role: "Cloud Architect at AWS",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    rating: 4.7,
    reviews: 110,
    sessions: 390,
    price: 1700,
    tags: ["Cloud Computing", "DevOps", "AWS"],
    badge: "New"
  }
];

const whyLearnItems: FeatureItem[] = [
  { icon: ShieldCheck, title: "Personalized Guidance", desc: "Get tailored advice for your goals" },
  { icon: Sparkles, title: "Real-world Insights", desc: "Learn from industry experiences" },
  { icon: TrendingUp, title: "Career Acceleration", desc: "Fast-track your professional growth" },
  { icon: Network, title: "Network Building", desc: "Connect with industry experts" },
  { icon: Award, title: "Skill Enhancement", desc: "Develop in-demand skills" }
];

const expertiseList = [
  { name: "Web Development", count: "1,250+" },
  { name: "Data Science", count: "980+" },
  { name: "AI / Machine Learning", count: "850+" },
  { name: "UI/UX Design", count: "720+" },
  { name: "Cyber Security", count: "620+" },
  { name: "Cloud Computing", count: "590+" },
  { name: "Product Management", count: "540+" },
  { name: "Business & Strategy", count: "480+" }
];

const availabilityList = [
  { name: "Available Now", count: "320+", color: "bg-emerald-500" },
  { name: "This Week", count: "1,120+", color: "bg-blue-500" },
  { name: "This Month", count: "2,340+", color: "bg-amber-500" },
  { name: "Custom Schedule", count: "1,850+", color: "bg-purple-500" }
];

export default function FeaturedMentorsDashboard() {
  return (
    <section className="bg-slate-50/50 py-8 md:py-12 font-sans text-slate-800 antialiased">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* MAIN RESPONSIVE CORE HUB */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_340px] gap-8 items-start w-full">
          
          {/* ========================================================== */}
          {/* LEFT CONTENT SECTOR: FEATURED MENTOR WORKSPACE            */}
          {/* ========================================================== */}
          <div className="w-full flex flex-col gap-6">
            
            {/* Header Platform Bar */}
            <div className="flex items-center justify-between w-full select-none border-b border-slate-100 pb-3">
              <h2 className="text-lg md:text-xl font-black text-slate-900 tracking-tight">
                Featured Mentors
              </h2>
              <button className="group inline-flex items-center gap-1 text-xs font-bold text-[#2563EB] hover:text-[#06B6D4] transition-colors cursor-pointer">
                View All Mentors
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2.5} />
              </button>
            </div>

            {/* Dynamic Mentor Fluid Card Deck */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 w-full">
              {mentors.map((mentor) => (
                <div 
                  key={mentor.id} 
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-3xs flex flex-col justify-between overflow-hidden group transition-all duration-300 hover:shadow-xs hover:border-blue-500/10"
                >
                  
                  {/* Portrait Box Frame */}
                  <div className="w-full aspect-13/10 bg-slate-100 relative overflow-hidden select-none">
                    <img 
                      src={mentor.image} 
                      alt={mentor.name} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                      loading="lazy"
                    />
                    
                    {/* Floating Accent Tag Badges */}
                    <span className={`absolute top-2.5 left-2.5 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md shadow-2xs backdrop-blur-xs text-white
                      ${mentor.badge === "Top Mentor" ? "bg-gradient-to-r from-amber-500 to-orange-500" : ""}
                      ${mentor.badge === "Popular" ? "bg-gradient-to-r from-blue-500 to-cyan-500" : ""}
                      ${mentor.badge === "New" ? "bg-gradient-to-r from-emerald-500 to-teal-500" : ""}
                    `}>
                      {mentor.badge}
                    </span>
                  </div>

                  {/* Metadata Workspace Card Body */}
                  <div className="p-4 flex flex-col justify-between flex-1 min-w-0">
                    
                    <div>
                      {/* Name Strings */}
                      <div className="flex items-center gap-1">
                        <h3 className="text-sm font-bold text-slate-900 truncate tracking-tight group-hover:text-[#2563EB] transition-colors">
                          {mentor.name}
                        </h3>
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 fill-blue-50" strokeWidth={2.5} />
                      </div>

                      {/* Professional Role Profile */}
                      <p className="text-[11px] font-medium text-slate-400 mt-0.5 line-clamp-1 leading-snug">
                        {mentor.role}
                      </p>

                      {/* Dynamic Stat Subline Metrics */}
                      <div className="flex items-center gap-3 mt-2.5 text-[10px] sm:text-[11px] font-semibold text-slate-500 border-b border-slate-100 pb-2.5">
                        <div className="flex items-center gap-0.5 text-amber-500">
                          <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" strokeWidth={2.5} />
                          <span>{mentor.rating}</span>
                          <span className="text-slate-400 font-medium">({mentor.reviews})</span>
                        </div>
                        <div className="h-2.5 w-px bg-slate-200" />
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <span>{mentor.sessions} <span className="text-slate-400 font-medium">Sessions</span></span>
                        </div>
                      </div>

                      {/* Custom Tags Track Panel */}
                      <div className="flex flex-wrap gap-1 mt-3 select-none">
                        {mentor.tags.map((tag) => (
                          <span key={tag} className="text-[9px] font-bold text-slate-500 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Lower Pricing & Interactive Call Actions */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                      <div className="leading-none">
                        <span className="text-sm font-black text-slate-900">₹{mentor.price.toLocaleString("en-IN")}</span>
                        <span className="text-[10px] font-medium text-slate-400"> / session</span>
                      </div>

                      <button className="px-3.5 py-1.5 rounded-lg border border-slate-200 hover:border-blue-300 bg-white text-xs font-bold text-slate-700 hover:text-[#2563EB] transition-all cursor-pointer shadow-3xs active:scale-95 whitespace-nowrap">
                        View Profile
                      </button>
                    </div>

                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* ========================================================== */}
          {/* RIGHT SIDEBAR SECTOR: FILTERS & VALUE MODULES             */}
          {/* ========================================================== */}
          <div className="w-full flex flex-col md:grid md:grid-cols-3 lg:flex lg:flex-col gap-6 select-none">
            
            {/* 1. WHY LEARN FROM MENTORS PROMO PANEL */}
            <div className="w-full bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-3xs flex flex-col gap-4">
              <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Why Learn from Mentors?
              </h3>
              <div className="flex flex-col gap-3.5">
                {whyLearnItems.map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={idx} className="flex gap-3 items-start group">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#2563EB] group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-3xs">
                        <ItemIcon className="w-3.5 h-3.5" strokeWidth={2.5} />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-slate-800 leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-[10px] sm:text-[11px] font-medium text-slate-400 mt-0.5 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. POPULAR EXPERTISE DIRECTORY PANEL */}
            <div className="w-full bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-3xs flex flex-col justify-between">
              <div>
                <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2 mb-3">
                  Popular Expertise
                </h3>
                <div className="flex flex-col divide-y divide-slate-100">
                  {expertiseList.map((item) => (
                    <button key={item.name} className="flex items-center justify-between w-full py-2.5 text-left group cursor-pointer transition-colors hover:bg-slate-50/50 rounded-md px-1.5 -mx-1.5">
                      <span className="text-xs font-semibold text-slate-600 group-hover:text-[#2563EB] transition-colors truncate">
                        {item.name}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-md min-w-[45px] text-center shrink-0">
                        {item.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <button className="group mt-4 inline-flex items-center justify-center gap-1 text-xs font-bold text-[#2563EB] hover:text-[#06B6D4] transition-colors cursor-pointer w-full pt-2 border-t border-slate-100">
                View All Expertise
                <ChevronRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2.5} />
              </button>
            </div>

            {/* 3. AVAILABILITY REAL-TIME METRIC FILTER PANEL */}
            <div className="w-full bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-3xs flex flex-col justify-between">
              <div>
                <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2 mb-3">
                  Availability
                </h3>
                <div className="flex flex-col gap-1">
                  {availabilityList.map((item) => (
                    <button key={item.name} className="flex items-center justify-between w-full py-2 text-left group cursor-pointer transition-colors hover:bg-slate-50/50 rounded-md px-1.5 -mx-1.5">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className={`h-2 w-2 rounded-full ${item.color} shrink-0 shadow-3xs animate-pulse`} />
                        <span className="text-xs font-semibold text-slate-600 group-hover:text-[#2563EB] transition-colors truncate">
                          {item.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-semibold text-slate-400">
                        {item.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <button className="group mt-4 inline-flex items-center justify-center gap-1 text-xs font-bold text-[#2563EB] hover:text-[#06B6D4] transition-colors cursor-pointer w-full pt-2 border-t border-slate-100">
                View All
                <ChevronRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2.5} />
              </button>
            </div>

          </div>

        </div>
        
      </div>
    </section>
  );
}
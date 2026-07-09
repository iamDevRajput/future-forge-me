"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Rocket, GraduationCap, Presentation, FlaskConical, Landmark, HeartHandshake, Users, CheckCircle2, Play, Pause, ArrowRight } from "lucide-react";

const TABS = [
  {
    id: "companies",
    title: "Companies",
    icon: Building2,
    desc: "Scale your workforce capabilities with enterprise-grade learning and hiring solutions.",
    features: [
      "Create custom onboarding curriculums",
      "Post exclusive internal or external projects",
      "Access pre-vetted talent pools",
      "Track employee upskilling with advanced analytics",
      "Manage cross-functional teams seamlessly"
    ],
    color: "text-[#C08A1E]"
  },
  {
    id: "startups",
    title: "Startups",
    icon: Rocket,
    desc: "Accelerate growth by hiring top talent quickly and building agile product teams.",
    features: [
      "Hire top 1% talent on a flexible basis",
      "Post bounties and hackathons for rapid prototyping",
      "Access mentorship from industry veterans",
      "Streamline technical assessments",
      "Build remote teams effortlessly"
    ],
    color: "text-[#C08A1E]"
  },
  {
    id: "universities",
    title: "Universities",
    icon: GraduationCap,
    desc: "Bridge the gap between academia and industry with real-world projects and courses.",
    features: [
      "Offer industry-certified courses to students",
      "Connect students with corporate internships",
      "Host university-wide hackathons",
      "Track student employment outcomes",
      "Facilitate alumni mentorship programs"
    ],
    color: "text-[#C08A1E]"
  },
  {
    id: "training",
    title: "Training Institutes",
    icon: Presentation,
    desc: "Deliver premium educational content and certify learners at scale.",
    features: [
      "Build and monetize comprehensive curriculums",
      "Automate grading and skill assessments",
      "Issue verifiable digital credentials",
      "Manage large cohorts of learners",
      "Access platform-wide learner demand"
    ],
    color: "text-[#C08A1E]"
  },
  {
    id: "research",
    title: "Research Labs",
    icon: FlaskConical,
    desc: "Collaborate on cutting-edge research projects and source specialized researchers.",
    features: [
      "Publish open innovation challenges",
      "Source domain experts and PhDs",
      "Manage collaborative research workspaces",
      "Secure intellectual property sharing",
      "Access computational resources and datasets"
    ],
    color: "text-[#C08A1E]"
  },
  {
    id: "government",
    title: "Government",
    icon: Landmark,
    desc: "Drive national digital literacy and upskill citizens for the future economy.",
    features: [
      "Deploy large-scale citizen upskilling programs",
      "Monitor regional talent capabilities",
      "Host public service innovation challenges",
      "Partner with private sector for job placement",
      "Ensure compliance and data sovereignty"
    ],
    color: "text-[#C08A1E]"
  },
  {
    id: "ngos",
    title: "NGOs",
    icon: HeartHandshake,
    desc: "Empower underserved communities through accessible education and employment.",
    features: [
      "Distribute free educational resources",
      "Connect beneficiaries with volunteer mentors",
      "Track social impact metrics",
      "Organize community-driven projects",
      "Fundraise through transparent tracking"
    ],
    color: "text-[#C08A1E]"
  },
  {
    id: "communities",
    title: "Communities",
    icon: Users,
    desc: "Foster engagement and collaborative learning within your professional network.",
    features: [
      "Create private learning spaces",
      "Host community-exclusive events and workshops",
      "Facilitate peer-to-peer code reviews",
      "Build community project portfolios",
      "Reward top contributors with badges"
    ],
    color: "text-[#C08A1E]"
  }
];

const TabAnimation = ({ id, isPlaying }: { id: string; isPlaying: boolean }) => {
  switch(id) {
    case 'companies':
      return (
        <>
          <motion.div animate={isPlaying ? { x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.2, 1] } : {}} transition={{ duration: 8, repeat: Infinity }} className="absolute -top-20 -left-20 w-64 h-64 bg-[#C08A1E]/20 rounded-full blur-[60px]" />
          <div className="absolute inset-0 p-8 flex flex-col justify-end gap-3 opacity-80 z-10">
            <div className="w-full flex items-end gap-2 h-32 border-b border-white/20 pb-1">
              {[30, 50, 40, 80, 60, 95].map((h, i) => (
                <motion.div key={i} animate={isPlaying ? { height: [`${h}%`, `${h*0.5}%`, `${h}%`] } : { height: `${h}%` }} transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: "easeInOut" }} className="flex-1 bg-gradient-to-t from-[#C08A1E] to-[#C08A1E]/30 rounded-t-sm" />
              ))}
            </div>
          </div>
        </>
      );
    case 'startups':
      return (
        <div className="relative flex items-center justify-center h-full w-full">
           <motion.div animate={isPlaying ? { y: [0, -20, 0], scale: [1, 1.1, 1] } : {}} transition={{ duration: 1.5, repeat: Infinity }} className="z-10 relative bg-gradient-to-b from-white/20 to-white/5 p-6 rounded-full border border-white/30 backdrop-blur-md">
             <Rocket className="w-10 h-10 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
           </motion.div>
           <AnimatePresence>
             {isPlaying && (
               <motion.div initial={{ y: -10, opacity: 1, scaleY: 1 }} animate={{ y: 60, opacity: 0, scaleY: 2 }} transition={{ duration: 0.8, repeat: Infinity }} className="absolute top-[50%] w-6 h-20 bg-gradient-to-b from-orange-500 to-transparent rounded-full blur-md" />
             )}
           </AnimatePresence>
        </div>
      );
    case 'universities':
      return (
        <>
          <motion.div animate={isPlaying ? { width: "100px", opacity: 0.8 } : { width: "160px", opacity: 0.1 }} transition={{ duration: 1.5, ease: "easeInOut" }} className="absolute h-1.5 bg-gradient-to-r from-[#C08A1E] to-blue-500 rounded-full blur-[2px]" />
          <AnimatePresence>
            {isPlaying && (
              <>
                <motion.div initial={{ x: -30, opacity: 0, scale: 0.5 }} animate={{ x: 30, opacity: [0, 1, 1, 0], scale: 1 }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0 }} className="absolute w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_15px_white] z-20" />
                <motion.div initial={{ x: -30, opacity: 0, scale: 0.5 }} animate={{ x: 30, opacity: [0, 1, 1, 0], scale: 1 }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.75 }} className="absolute w-2 h-2 bg-[#C08A1E] rounded-full shadow-[0_0_15px_#C08A1E] z-20" />
              </>
            )}
          </AnimatePresence>
          <motion.div animate={isPlaying ? { x: -40, scale: [1, 1.05, 1] } : { x: -70, scale: 1 }} transition={{ duration: 1.5, scale: { duration: 3, repeat: Infinity, ease: "easeInOut" } }} className="absolute z-10 w-20 h-20 flex items-center justify-center">
            <div className="absolute inset-0 bg-[#C08A1E]/40 rounded-full blur-[25px]" />
            <div className="relative w-16 h-16 bg-gradient-to-br from-[#D9A441] to-[#B8791A] rounded-full shadow-[0_0_30px_rgba(200,141,30,0.6)] border-2 border-white/30 flex items-center justify-center z-10">
              <GraduationCap className="w-8 h-8 text-white drop-shadow-md" />
            </div>
          </motion.div>
          <motion.div animate={isPlaying ? { x: 40, scale: [1, 1.1, 1] } : { x: 70, scale: 1 }} transition={{ duration: 1.5, scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }} className="absolute z-10 w-16 h-16 flex items-center justify-center">
            <div className="absolute inset-0 bg-blue-500/40 rounded-full blur-[25px]" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.6)] border-2 border-white/30 flex items-center justify-center z-10">
              <Users className="w-6 h-6 text-white drop-shadow-md" />
            </div>
          </motion.div>
        </>
      );
    case 'training':
      return (
        <div className="relative flex items-center justify-center h-full w-full">
          <motion.div animate={isPlaying ? { rotate: 360 } : {}} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 rounded-full border border-dashed border-[#C08A1E]/60 opacity-50" />
          </motion.div>
          <motion.div animate={isPlaying ? { scale: [1, 1.1, 1] } : {}} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="z-10 bg-white/10 p-5 rounded-2xl border border-[#C08A1E]/40 backdrop-blur-md shadow-[0_0_40px_rgba(192,138,30,0.4)]">
            <Presentation className="w-12 h-12 text-white" />
          </motion.div>
        </div>
      );
    case 'research':
      return (
        <div className="relative flex items-center justify-center w-full h-full">
           <motion.div animate={isPlaying ? { rotate: -360 } : {}} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0 flex items-center justify-center">
             <div className="w-48 h-48 rounded-full border border-blue-500/20 flex items-center justify-between">
               <div className="w-5 h-5 bg-blue-400 rounded-full shadow-[0_0_15px_blue] -ml-2.5" />
               <div className="w-5 h-5 bg-purple-400 rounded-full shadow-[0_0_15px_purple] -mr-2.5" />
             </div>
           </motion.div>
           <motion.div animate={isPlaying ? { scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] } : {}} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="z-10">
             <FlaskConical className="w-14 h-14 text-cyan-400 drop-shadow-[0_0_20px_cyan]" />
           </motion.div>
        </div>
      );
    case 'government':
      return (
        <div className="relative grid grid-cols-5 gap-3 p-8 w-full h-full opacity-60">
          {Array.from({ length: 25 }).map((_, i) => (
             <motion.div key={i} animate={isPlaying ? { opacity: [0.1, 0.8, 0.1], scale: [1, 1.1, 1] } : { opacity: 0.1 }} transition={{ duration: 2.5, repeat: Infinity, delay: (i % 5) * 0.2 + (Math.floor(i / 5) * 0.2) }} className="w-full h-full bg-[#C08A1E] rounded-sm" />
          ))}
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/30 backdrop-blur-[2px]">
             <Landmark className="w-16 h-16 text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.8)]" />
          </div>
        </div>
      );
    case 'ngos':
      return (
        <div className="relative flex items-center justify-center h-full w-full">
          {isPlaying && (
            <>
              <motion.div initial={{ scale: 0.5, opacity: 0.8 }} animate={{ scale: 3, opacity: 0 }} transition={{ duration: 2, repeat: Infinity }} className="absolute w-24 h-24 bg-pink-500 rounded-full blur-md" />
              <motion.div initial={{ scale: 0.5, opacity: 0.8 }} animate={{ scale: 3, opacity: 0 }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} className="absolute w-24 h-24 bg-pink-500 rounded-full blur-md" />
            </>
          )}
          <motion.div animate={isPlaying ? { scale: [1, 1.15, 1] } : {}} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }} className="z-10 bg-gradient-to-br from-pink-400 to-pink-600 p-6 rounded-full shadow-[0_0_40px_rgba(236,72,153,0.7)] border-2 border-white/40">
            <HeartHandshake className="w-10 h-10 text-white" />
          </motion.div>
        </div>
      );
    case 'communities':
      return (
        <div className="relative flex items-center justify-center w-full h-full">
           <div className="absolute w-40 h-40 border border-[#C08A1E]/30 rounded-full" />
           <motion.div animate={isPlaying ? { rotate: 360 } : {}} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute w-40 h-40 rounded-full">
             <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white/10 backdrop-blur-md rounded-full shadow-[0_0_15px_white] border border-white/40 flex items-center justify-center"><Users className="w-4 h-4 text-white" /></div>
             <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white/10 backdrop-blur-md rounded-full shadow-[0_0_15px_white] border border-white/40 flex items-center justify-center"><Users className="w-4 h-4 text-white" /></div>
             <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-8 h-8 bg-white/10 backdrop-blur-md rounded-full shadow-[0_0_15px_white] border border-white/40 flex items-center justify-center"><Users className="w-4 h-4 text-white" /></div>
             <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-8 bg-white/10 backdrop-blur-md rounded-full shadow-[0_0_15px_white] border border-white/40 flex items-center justify-center"><Users className="w-4 h-4 text-white" /></div>
           </motion.div>
           <motion.div animate={isPlaying ? { scale: [1, 1.2, 1] } : {}} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="z-10 bg-[#C08A1E] p-5 rounded-full shadow-[0_0_30px_rgba(192,138,30,0.8)] border border-white/20">
             <Users className="w-10 h-10 text-white" />
           </motion.div>
        </div>
      );
    default:
      return null;
  }
};


export default function SolutionsTabs() {
  const [activeTabId, setActiveTabId] = useState(TABS[0].id);
  const [isPlaying, setIsPlaying] = useState(false);

  const activeTab = TABS.find((t) => t.id === activeTabId) || TABS[0];
  const otherTabs = TABS.filter((t) => t.id !== activeTabId).slice(0, 4);

  return (
    <section className="py-12 lg:py-24 bg-[#FDF9F2] overflow-hidden relative font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display tracking-tight font-bold text-[#1A1A1A] mb-4">
            SOLUTIONS TAILORED FOR EVERY ORGANIZATION
          </h2>
          <p className="text-[#6B6B6B] max-w-2xl mx-auto">
            Discover how FutureForge can transform your specific organizational needs, from enterprise teams to academic institutions.
          </p>
        </div>

        {/* Pill Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {TABS.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTabId(tab.id);
                  setIsPlaying(false);
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 focus-visible:ring-2 ring-[#C08A1E]/50 cursor-pointer ${
                  isActive
                    ? "bg-gold-gradient text-white shadow-[var(--shadow-gold-glow)]"
                    : "bg-white/40 border border-[#1A1A1A]/10 text-[#6B6B6B] hover:bg-[#1A1A1A]/5 backdrop-blur-sm"
                }`}
              >
                <tab.icon className={`w-4 h-4 ${isActive ? "text-white" : ""}`} />
                {tab.title}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start min-h-[500px]">
          
          <AnimatePresence mode="wait">
            {/* Left Col: Video */}
            <motion.div
              key={`video-${activeTab.id}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-4 w-full"
            >
              <div 
                className="relative aspect-[4/5] lg:aspect-[3/4] rounded-3xl overflow-hidden bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 shadow-lg group flex items-center justify-center cursor-pointer"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {/* Tab-Specific Unique Animation Component */}
                <div className="absolute inset-0 bg-[#0B1220] overflow-hidden flex items-center justify-center">
                  <TabAnimation id={activeTab.id} isPlaying={isPlaying} />
                </div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none"></div>
                
                <div className={`relative z-10 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 shadow-lg ${isPlaying ? 'bg-[#C08A1E]/80 border-[#C08A1E] text-white' : 'hover:bg-white/20'}`}>
                  {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
                </div>

                <div className="absolute bottom-6 left-6 right-6 z-10 text-white pointer-events-none">
                  <p className="font-semibold mb-2 text-sm opacity-90">{isPlaying ? "Now Playing" : "Preview"}: {activeTab.title} Workspace</p>
                  <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden relative">
                    {isPlaying ? (
                      <motion.div 
                        initial={{ x: "-100%" }}
                        animate={{ x: "300%" }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-y-0 left-0 w-1/3 bg-[#C08A1E] rounded-full"
                      />
                    ) : (
                      <div className="w-1/4 bg-white/50 h-full rounded-full transition-all duration-500"></div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {/* Middle Col: Content */}
            <motion.div
              key={`content-${activeTab.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-5 flex flex-col justify-center h-full"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-[#1A1A1A]/10 text-sm font-semibold mb-6 w-fit text-[#C08A1E]">
                <activeTab.icon className="w-4 h-4" />
                For {activeTab.title}
              </div>
              
              <h3 className="text-3xl font-display tracking-tight font-bold text-[#1A1A1A] mb-4">
                Empower your {activeTab.title.toLowerCase()} with FutureForge
              </h3>
              
              <p className="text-[#6B6B6B] text-lg mb-8 leading-relaxed">
                {activeTab.desc}
              </p>
              
              <ul className="flex flex-col gap-4 mb-10">
                {activeTab.features.map((feature, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#C08A1E] shrink-0 mt-0.5" />
                    <span className="text-[#1A1A1A] font-medium">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-fit bg-gold-gradient text-white rounded-full px-8 py-3.5 shadow-[0_0_25px_rgba(200,141,30,0.35)] focus-visible:ring-2 ring-[#C08A1E]/50 flex items-center gap-2 font-medium transition-shadow cursor-pointer"
              >
                Explore for {activeTab.title}
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </AnimatePresence>

          {/* Right Col: Other Solutions */}
          <div className="lg:col-span-3 h-full">
            <div className="glass-card rounded-3xl p-6 h-full flex flex-col">
              <h4 className="text-sm font-display tracking-tight font-bold text-[#1A1A1A] uppercase mb-6 pb-4 border-b border-[#1A1A1A]/5">
                Other Solutions
              </h4>
              
              <div className="flex-1 flex flex-col gap-4">
                <AnimatePresence mode="wait">
                  {otherTabs.map((tab, idx) => (
                    <motion.button
                      key={`other-${tab.id}-${activeTabId}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      onClick={() => {
                        setActiveTabId(tab.id);
                        setIsPlaying(false);
                      }}
                      className="group flex items-start gap-4 p-3 rounded-xl hover:bg-white/60 transition-colors text-left cursor-pointer focus-visible:ring-2 ring-[#C08A1E]/50 outline-none"
                    >
                      <div className={`w-10 h-10 rounded-lg bg-white shadow-sm border border-[#1A1A1A]/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform ${tab.color}`}>
                        <tab.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-[#1A1A1A] text-sm group-hover:text-[#C08A1E] transition-colors">{tab.title}</p>
                        <p className="text-xs text-[#6B6B6B] line-clamp-1 mt-0.5">{tab.desc}</p>
                      </div>
                    </motion.button>
                  ))}
                </AnimatePresence>
              </div>

              <button className="mt-6 pt-4 border-t border-[#1A1A1A]/5 w-full flex items-center justify-center gap-2 text-sm font-bold text-[#C08A1E] hover:text-[#B8791A] transition-colors cursor-pointer group focus-visible:ring-2 ring-[#C08A1E]/50 rounded-lg p-2 outline-none">
                View All Solutions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

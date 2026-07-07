import { useState } from "react";
import {
  GraduationCap,
  Building2,
  Users,
  ClipboardCheck,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  BookOpen,
  School,
  Briefcase,
} from "lucide-react";

const stakeholders = [
  {
    id: "students",
    title: "Students",
    subtitle: "Learn • Build • Get Hired",
    icon: GraduationCap,
    description:
      "Transform academic learning into real-world experience through industry courses, projects, mentorship, professional reviews, and verified portfolios.",
    features: [
      "Industry-led courses",
      "Real-world projects",
      "Skill assessments",
      "Verified certifications",
      "1-on-1 mentorship",
      "Professional reviews",
      "Portfolio builder",
      "Career opportunities",
    ],
  },
  {
    id: "companies",
    title: "Companies",
    subtitle: "Upskill • Innovate • Hire",
    icon: Building2,
    description:
      "Upskill employees, launch internal learning programs, outsource projects, and recruit verified professionals from one unified ecosystem.",
    features: [
      "Create company courses",
      "Employee training",
      "Post industry projects",
      "Hire verified talent",
      "Manage organization teams",
      "Track employee progress",
      "Brand visibility",
      "Talent pipeline",
    ],
  },
  {
    id: "mentors",
    title: "Mentors",
    subtitle: "Guide • Review • Earn",
    icon: Users,
    description:
      "Help learners grow by mentoring, reviewing projects, sharing expertise, and building your professional reputation while earning through mentoring.",
    features: [
      "Personal mentoring",
      "Project guidance",
      "Career counseling",
      "Review submissions",
      "Conduct live sessions",
      "Build mentor profile",
      "Flexible earnings",
      "Community recognition",
    ],
  },
  {
    id: "course-creators",
    title: "Course Creators",
    subtitle: "Teach • Publish • Inspire",
    icon: BookOpen,
    description:
      "Create engaging learning experiences, publish premium or free courses, reach thousands of learners, and generate recurring income.",
    features: [
      "Create video courses",
      "Upload learning resources",
      "Manage assessments",
      "Issue certificates",
      "Student analytics",
      "Monetize courses",
      "Community discussions",
      "Build your audience",
    ],
  },
  {
    id: "institutions",
    title: "Educational Institutions",
    subtitle: "Educate • Monitor • Collaborate",
    icon: School,
    description:
      "Digitize learning, monitor student growth, collaborate with industry partners, and improve placement outcomes through FutureForge.",
    features: [
      "Manage students",
      "Track performance",
      "Institution dashboard",
      "Industry collaborations",
      "Placement support",
      "Course management",
      "Performance analytics",
      "Institution branding",
    ],
  },
  {
    id: "recruiters",
    title: "Recruiters",
    subtitle: "Discover • Evaluate • Hire",
    icon: Briefcase,
    description:
      "Recruit professionals based on verified skills, project experience, mentor reviews, and trusted portfolios instead of resumes alone.",
    features: [
      "Access verified talent",
      "Advanced candidate search",
      "Portfolio-first hiring",
      "Project history",
      "Skill verification",
      "Interview management",
      "Hiring analytics",
      "Direct recruitment",
    ],
  },
];

export default function StakeholderRadialSection() {
  const [active, setActive] = useState(0);

  const current = stakeholders[active];
  const MainIcon = current.icon;

  const totalNodes = stakeholders.length;
  // Radius of the circle arrangement in pixels
  const radius = 150; 

  return (
    <section className="relative overflow-hidden bg-white py-16 font-sans text-slate-800">
      
      {/* Background Ambience Soft Overlays */}
      <div className="absolute right-1/4 top-1/4 h-96 w-96 rounded-full bg-[#06B6D4]/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-1/4 bottom-1/4 h-96 w-96 rounded-full bg-[#2563EB]/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT COLUMN: Mathematics-Driven 360° Dial System Control Matrix */}
          <div className="lg:col-span-5 flex items-center justify-center relative min-h-[400px] sm:min-h-[440px]">
            
            {/* Structural Background Orbit Track Frame */}
            <div className="relative w-80 h-80 sm:w-90 sm:h-90 rounded-full border border-slate-200/60 bg-slate-50/30 flex items-center justify-center">
              <div className="absolute inset-6 rounded-full border border-dashed border-slate-200/80" />
              
              {/* Central Active Floating Dashboard Display Block */}
              <div className="w-24 h-24 rounded-2xl bg-slate-900 border-2 border-slate-800 shadow-2xl flex flex-col items-center justify-center text-white relative z-10 transition-all duration-300">
                <MainIcon size={28} className="text-cyan-400 animate-pulse" strokeWidth={2} />
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 mt-2">
                  Active
                </span>
              </div>

              {/* Mathematically Scaled Node Mapping (Even distribution for all 6 items) */}
              {stakeholders.map((item, index) => {
                const TabIcon = item.icon;
                const isActive = active === index;

                // Calculate positions around the 360-degree loop dynamically
                const angle = (index * 2 * Math.PI) / totalNodes - Math.PI / 2;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActive(index)}
                    className="absolute z-20 flex flex-col items-center gap-1 group origin-center transition-all duration-300"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                  >
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shadow-md transition-all duration-300 ${
                      isActive
                        ? "border-[#2563EB] bg-[#2563EB] text-white scale-110 shadow-lg shadow-blue-600/20"
                        : "border-slate-200/80 bg-white text-slate-500 hover:border-slate-400 hover:bg-slate-50"
                    }`}>
                      <TabIcon size={16} strokeWidth={isActive ? 2.5 : 2} />
                    </div>
                    
                    <span className={`text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md shadow-2xs transition-all ${
                      isActive 
                        ? "bg-slate-900 text-white" 
                        : "text-slate-400 group-hover:text-slate-700 bg-white/95"
                    }`}>
                      {item.title.split(" ")[0]} {/* Keeps the bubble text labels micro and compact */}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: Ultra-Clean Dynamic Content Canvas Display Panel */}
          <div className="lg:col-span-7 flex flex-col justify-center lg:pl-6">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-slate-200 bg-slate-50 text-[10px] font-extrabold tracking-widest text-slate-400 w-fit uppercase mb-4 shadow-3xs">
              <Sparkles size={10} className="text-[#2563EB]" />
              Interconnected Workspace Map
            </div>

            <div className="transition-all duration-300">
              <span className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4] font-extrabold uppercase tracking-widest block">
                {current.subtitle}
              </span>

              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 leading-none mt-1">
                The {current.title} Ecosystem
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-slate-600 font-medium max-w-xl">
                {current.description}
              </p>

              {/* Optimized High-Density Feature Output Matrix */}
              <div className="mt-6 grid gap-2.5 sm:grid-cols-2 max-w-xl">
                {current.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2.5 p-2 bg-slate-50/50 border border-slate-100/60 rounded-xl shadow-3xs hover:bg-slate-50 transition-colors">
                    <div className="p-1 rounded-md bg-blue-50 text-[#2563EB] shrink-0">
                      <CheckCircle2 size={13} strokeWidth={3} />
                    </div>
                    <span className="text-xs font-bold text-slate-700 truncate">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100 flex items-center gap-4">
              <button className="group flex items-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-md">
                Get Started
                <ArrowRight size={14} className="text-cyan-400 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
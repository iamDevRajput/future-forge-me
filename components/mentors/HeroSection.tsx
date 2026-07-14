import {
  Search,
  BookOpen,
  Users,
  TrendingUp,
  Target,
  Lightbulb,
} from "lucide-react";

const highlights = [
  {
    title: "Learn",
    description: "Gain knowledge and new perspectives",
    icon: BookOpen,
    position: "top-4 left-4 sm:top-16 sm:left-12 lg:left-8",
  },
  {
    title: "Get Guidance",
    description: "Receive expert advice and mentorship",
    icon: Lightbulb,
    position: "top-12 right-4 sm:right-16 lg:top-16 lg:right-12",
  },
  {
    title: "Connect",
    description: "Build meaningful relationships",
    icon: Users,
    position: "bottom-32 left-0 sm:left-8 lg:bottom-28 lg:left-4",
  },
  {
    title: "Achieve",
    description: "Reach your goals with confidence",
    icon: Target,
    position: "bottom-28 right-0 sm:right-12 lg:bottom-24 lg:right-8",
  },
  {
    title: "Grow",
    description: "Enhance skills and accelerate growth",
    icon: TrendingUp,
    position: "bottom-4 left-1/2 -translate-x-1/2 lg:bottom-2",
  },
];

const categories = [
  "Web Development",
  "Data Science",
  "AI / ML",
  "Career Guidance",
  "UI/UX Design",
  "Business",
  "Cyber Security",
];

export default function MentorHero() {
  return (
    <section className="relative overflow-hidden bg-white pb-5 md:pb-10 font-sans text-slate-800 min-h-[580px] sm:min-h-[640px] lg:min-h-0 flex items-center">
      
      {/* Theme-Aligned Ambient Background Glow */}
      <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-gradient-to-l from-cyan-500/5 to-transparent blur-[100px] pointer-events-none" />
      <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 px-4 sm:px-6 w-full max-w-7xl">
        
        {/* Left Content Side - Re-engineered for Center Alignment on Mobile/Tablet */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start relative z-20 max-w-xl lg:max-w-none mx-auto lg:mx-0 pt-12 sm:pt-16 lg:pt-0">
          <span className="inline-flex rounded-full bg-blue-50 border border-blue-100 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#2563EB]">
            Learn. Grow. Succeed.
          </span>

          <h1 className="mt-4 sm:mt-5 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-slate-900 lg:leading-[1.15]">
            Learn from Experts.
            <br />
            Get Guidance.
            <br />
            Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4] font-extrabold">Future.</span>
          </h1>

          <div className="mt-4 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed text-slate-500 font-medium space-y-2">
            <p>
              Connect with verified mentors who are industry experts,
              professionals, and thought leaders.
            </p>
            <p>Get personalized guidance and accelerate your growth.</p>
          </div>

          {/* Theme-Aligned Search Bar */}
          <div className="mt-6 sm:mt-8 flex overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs w-full max-w-xl focus-within:border-blue-300 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
            <div className="flex flex-1 items-center gap-3 px-4">
              <Search className="text-slate-400" size={16} />
              <input
                type="text"
                placeholder="Search mentors by name, skills, or expertise..."
                className="w-full bg-transparent py-3.5 text-xs sm:text-sm text-slate-800 outline-none placeholder:text-slate-400"
              />
            </div>
            <button className="flex items-center justify-center bg-gradient-to-r from-[#2563EB] to-[#06B6D4] px-5 text-white transition-opacity hover:opacity-95 cursor-pointer">
              <Search size={16} strokeWidth={2.5} />
            </button>
          </div>

          {/* Popular Searches */}
          <div className="mt-6 sm:mt-8 select-none w-full">
            <p className="mb-3 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
              Popular Searches:
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {categories.map((item) => (
                <button
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600 transition hover:border-blue-300 hover:text-[#2563EB] cursor-pointer active:scale-95"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Graphic Side */}
        <div className="absolute inset-0 lg:relative lg:flex h-full lg:h-[550px] xl:h-[600px] w-full items-center justify-center select-none opacity-10 md:opacity-15 lg:opacity-100 z-0 lg:z-10 pointer-events-none lg:pointer-events-auto overflow-hidden">
          
          {/* Main Central Platform Graphic Container */}
          <div className="relative flex h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-80 lg:w-80 xl:h-96 xl:w-96 items-center justify-center top-1/2 -translate-y-1/2 lg:top-0 lg:translate-y-0 mx-auto">
            <img
              src="/assets/home/heroBackground.png" 
              alt="FutureForge Platform Overview"
              className="object-contain w-full h-full transform scale-95 sm:scale-100 lg:scale-105 xl:scale-110"
              loading="eager"
            />
          </div>

          {/* Floating Info Nodes */}
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`absolute ${item.position} flex w-24 sm:w-32 lg:w-28 xl:w-36 flex-col items-center text-center group`}
              >
                {/* Theme Circle Container */}
                <div className="flex h-8 w-8 sm:h-11 sm:w-11 lg:h-10 lg:w-10 xl:h-12 xl:w-12 items-center justify-center rounded-full bg-white text-[#2563EB] shadow-md border border-slate-100 transition-all duration-300 group-hover:scale-105 group-hover:text-[#06B6D4] group-hover:border-cyan-100">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" strokeWidth={2} />
                </div>
                
                <h4 className="mt-2 text-[9px] sm:text-xs md:text-sm font-semibold text-slate-900 tracking-tight leading-none">
                  {item.title}
                </h4>
                
                <p className="mt-1 text-[7.5px] sm:text-[9px] md:text-[10px] leading-normal text-slate-400 font-medium max-w-[80px] sm:max-w-[110px] lg:max-w-[100px] xl:max-w-[120px]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
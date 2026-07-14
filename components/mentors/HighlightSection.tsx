import {
  Users,
  Globe,
  CalendarCheck,
  Star,
  Layers,
  ArrowRight,
  LucideIcon
} from "lucide-react";

interface StatItem {
  icon: LucideIcon;
  value: string;
  label: string;
}

const stats: StatItem[] = [
  {
    icon: Users,
    value: "5K+",
    label: "Expert Mentors",
  },
  {
    icon: Globe,
    value: "120+",
    label: "Countries",
  },
  {
    icon: CalendarCheck,
    value: "50K+",
    label: "Sessions Completed",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Average Rating",
  },
  {
    icon: Layers,
    value: "25+",
    label: "Domains",
  },
];

export default function MentorStatsSection() {
  return (
    <section className="bg-white pb-6 md:pb-10 font-sans text-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* OUTBOARD RESPONSIVE CONTAINER CHASSIS */}
        <div className="w-full rounded-2xl md:rounded-3xl border border-blue-500/10 bg-linear-to-b from-white to-slate-50/30 p-4 sm:p-5 xl:p-6 shadow-xs relative overflow-hidden">
          
          {/* Theme Radial Ambient Overlays */}
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-cyan-500/5 blur-2xl pointer-events-none" />
          <div className="absolute left-0 bottom-0 h-48 w-48 rounded-full bg-blue-500/5 blur-2xl pointer-events-none" />

          {/* 
            DYNAMIC ADAPTIVE FLEX/GRID ENGINE
            Mobile: Stacked Panels
            Laptop (lg): Stacked Rows (Stats top, CTA bottom to maximize breathing room)
            Desktop (xl): Single Row Inline Layout
          */}
          <div className="flex flex-col xl:flex-row xl:items-stretch xl:justify-between gap-5 xl:gap-4 w-full relative z-10">
            
            {/* 1. STATS VIEWPORT TRACK */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:flex xl:flex-row xl:items-center xl:justify-between gap-3 sm:gap-4 xl:gap-2 flex-1 w-full">
              {stats.map((item, index) => {
                const Icon = item.icon;
                const isLast = index === stats.length - 1;

                return (
                  <div 
                    key={index} 
                    className={`flex flex-row items-center justify-between group h-full
                      ${index === 4 ? "col-span-2 md:col-span-1 lg:col-span-1" : "col-span-1"}`}
                  >
                    {/* Stat Element Block */}
                    <div className="flex items-center gap-3 w-full xl:w-auto p-3 xl:p-2 rounded-xl bg-white border border-slate-100 shadow-3xs xl:bg-transparent xl:border-transparent xl:shadow-none transition-all duration-300 hover:border-blue-500/10 xl:hover:bg-transparent pl-3 h-full">
                      
                      {/* Circle Icon Container */}
                      <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-slate-50 text-[#2563EB] border border-slate-100 transition-all duration-300 group-hover:bg-blue-50/50 group-hover:text-[#06B6D4] group-hover:border-cyan-100 shadow-3xs">
                        <Icon className="w-4 h-4" strokeWidth={2.2} />
                      </div>

                      {/* Content Strings */}
                      <div className="min-w-0">
                        <h3 className="text-sm sm:text-base xl:text-base font-bold text-slate-900 tracking-tight leading-none group-hover:text-[#2563EB] transition-colors duration-200">
                          {item.value}
                        </h3>
                        <p className="mt-1 text-[10px] sm:text-[11px] xl:text-[11px] font-medium text-slate-400 tracking-tight leading-none truncate">
                          {item.label}
                        </p>
                      </div>
                    </div>

                    {/* Intermediate Divider Lines (Only rendered on high-res desktop views) */}
                    {!isLast && (
                      <div className="hidden xl:block h-8 w-px bg-slate-200/70 shrink-0 mx-auto pointer-events-none self-center ml-2" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Desktop Center Structural Divider */}
            <div className="hidden xl:block h-10 w-px bg-slate-200 self-center mx-2 pointer-events-none" />

            {/* 2. BECOME A MENTOR ACTION BLOCK:
                Adapts fluidly between mobile cards, broad laptop banners, and inline desktop items
            */}
            <div className="flex flex-col sm:flex-row lg:flex-row xl:flex-row justify-between items-start sm:items-center gap-4 p-4 lg:p-5 xl:p-0 rounded-xl bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-white border border-blue-200/30 xl:bg-none xl:border-none w-full xl:w-auto xl:min-w-[270px] shrink-0">
              <div className="min-w-0 pr-2">
                <h4 className="text-xs sm:text-sm xl:text-sm font-bold text-slate-900 tracking-tight leading-none whitespace-nowrap">
                  Become a Mentor
                </h4>
                <p className="mt-1.5 text-[10px] sm:text-[11px] xl:text-[11px] font-medium text-slate-400 tracking-tight leading-none whitespace-nowrap">
                  Share your knowledge & impact lives
                </p>
              </div>

              <button className="group inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white text-xs font-semibold shadow-xs hover:opacity-95 active:scale-95 transition-all duration-200 cursor-pointer w-full sm:w-auto shrink-0">
                Apply Now
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2.5} />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
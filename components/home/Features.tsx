import { 
  GraduationCap, 
  BadgeCheck, 
  FolderKanban, 
  Users, 
  Star, 
  Award, 
  Building2,
  Briefcase
} from "lucide-react";

const features = [
  {
    title: "Courses",
    description: "Learn anytime, anywhere with targeted expert paths.",
    icon: GraduationCap,
  },
  {
    title: "Skill Assessments",
    description: "Test. Verify. Get Certified with trust indicators.",
    icon: BadgeCheck,
  },
  {
    title: "Project Marketplace",
    description: "Find or post real-world team projects.",
    icon: FolderKanban,
  },
  {
    title: "Mentorship",
    description: "Connect. Learn. Grow together with global elites.",
    icon: Users,
  },
  {
    title: "Reviews & Feedback",
    description: "Get reviewed. Improve workflows. Grow rapidly.",
    icon: Star,
  },
  {
    title: "Certificates",
    description: "Earn and showcase verified credentials instantly.",
    icon: Award,
  },
  {
    title: "Community",
    description: "Collaborate and build lasting peer networks.",
    icon: Users,
  },
  {
    title: "Organizations",
    description: "Manage teams, deploy tracking, and maximize growth.",
    icon: Building2,
  },
];

export default function PlatformFeaturesPipeline() {
  const duplicatedFeatures = [...features, ...features];

  return (
    <section className="relative overflow-hidden bg-slate-50/60 py-10 md:py-20 font-sans text-slate-800">
      
      {/* Background Ambient Glows */}
      <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">

        {/* --- BALANCED COMPACT HEADING --- */}
        <div className="flex flex-col items-center text-center pb-4 mb-6 select-none">
          <div className="flex items-center justify-center gap-3 sm:gap-4 w-full">
            <div className="h-px bg-cyan-700/60 w-8 sm:w-20" />
            <h2 className="text-sm sm:text-lg md:text-2xl font-semibold tracking-wider text-slate-800 uppercase whitespace-nowrap">
              What You Can Do On Futureforge
            </h2>
            <div className="h-px bg-cyan-700/60 w-8 sm:w-20" />
          </div>
        </div>

        {/* MARQUEE ENGINE */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes continuousScroll {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          .animate-marquee-steady {
            display: flex;
            width: max-content;
            animation: continuousScroll 60s linear infinite;
            backface-visibility: hidden;
            perspective: 1000px;
          }
          .animate-marquee-steady:hover {
            animation-play-state: paused;
          }
        `}} />

        {/* INFINITE MARQUEE CHASSIS */}
        <div className="relative w-full overflow-hidden">
          
          {/* Edge blur fades */}
          <div className="absolute inset-y-0 left-0 w-8 bg-linear-to-r from-slate-50/60 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-8 bg-linear-to-l from-slate-50/60 to-transparent z-20 pointer-events-none" />

          <div className="animate-marquee-steady select-none pb-2">
            {duplicatedFeatures.map((item, idx) => {
              const TrackIcon = item.icon;
              const isLast = idx === duplicatedFeatures.length - 1;

              return (
                <div 
                  key={idx} 
                  className="flex flex-row items-start shrink-0 group/node"
                >
                  {/* RESPONSIVE FLUID CARD NODE (Optimized for small-screen text flow) */}
                  <div className="flex flex-col items-center text-center w-36 sm:w-48 px-3 transition-transform duration-300 group-hover/node:-translate-y-0.5">
                    
                    {/* Downscaled Circle Node Ring */}
                    <div className="h-10 w-10 sm:h-14 sm:w-14 rounded-full bg-white border border-slate-200/80 text-[#2563EB] group-hover/node:text-white group-hover/node:bg-linear-to-r group-hover/node:from-[#2563EB] group-hover/node:to-[#06B6D4] group-hover/node:border-transparent flex items-center justify-center shadow-xs group-hover/node:shadow-sm transition-all duration-300 relative z-10">
                      <TrackIcon className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
                    </div>

                    {/* Downscaled, Highly Legible Typography Block */}
                    <div className="mt-3 space-y-1 w-full">
                      <h3 className="text-xs sm:text-sm tracking-tight text-slate-800 group-hover/node:text-[#2563EB] transition-colors duration-200 leading-tight font-semibold">
                        {item.title}
                      </h3>
                      <p className="text-[10px] sm:text-[11px] leading-normal text-slate-500 font-medium max-w-full text-balance">
                        {item.description}
                      </p>
                    </div>

                  </div>

                  {/* Clean Divider Link Accent */}
                  {!isLast && (
                    <div className="h-8 sm:h-10 w-px bg-slate-200 mt-1 sm:mt-2 shrink-0 self-start pointer-events-none mx-0.5" />
                  )}

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
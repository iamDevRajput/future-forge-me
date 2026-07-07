import {
  GraduationCap,
  FolderKanban,
  BadgeCheck,
  Star,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const journey = [
  {
    step: "01",
    title: "Learn",
    desc: "Master industry skills with structured courses, live sessions, and hands-on learning.",
    icon: GraduationCap,
  },
  {
    step: "02",
    title: "Assess & Verify",
    desc: "Validate your knowledge through skill assessments and earn verified credentials.",
    icon: BadgeCheck,
  },
  {
    step: "03",
    title: "Build Portfolio",
    desc: "Apply your knowledge on real-world projects and showcase practical experience.",
    icon: FolderKanban,
  },
  {
    step: "04",
    title: "Professional Review",
    desc: "Receive detailed feedback from industry professionals and mentors.",
    icon: Star,
  },
  {
    step: "05",
    title: "Career Opportunities",
    desc: "Build credibility and connect with organizations hiring verified talent.",
    icon: Briefcase,
  },
];

export default function JourneySection() {
  return (
    <section className="relative overflow-hidden bg-white py-12 font-sans">
      {/* Background Elements & Gradient Blends */}
      <div className="absolute right-0 top-15 h-125 w-125 rounded-full bg-[#2563EB]/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 h-125 w-125 rounded-full bg-[#06B6D4]/10 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex rounded-full bg-[#2563EB]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#2563EB]">
            How It Works
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
            One Journey.
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]"> Endless Possibilities.</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            FutureForge transforms traditional learning into professional growth
            by connecting education, practical experience, expert guidance, and
            career opportunities within one seamless ecosystem.
          </p>
        </div>

        {/* Desktop Layout with CSS SVG Connected Arrow Tracks */}
        <div className="relative mt-12 hidden lg:block">
          {/* Dynamic Arrow Vector connecting paths directly between cards */}
          <div className="absolute left-0 right-0 top-14 h-0.5 pointer-events-none z-0">
            <svg className="w-full h-4 overflow-visible opacity-60" fill="none">
              <path 
                d="M 50 8 H 1000" 
                stroke="#2563EB" 
                strokeWidth="2" 
                strokeDasharray="6 6" 
              />
              {[200, 415, 630, 845].map((xPos, i) => (
                <path 
                  key={i}
                  d={`M ${xPos} 3 L ${xPos + 6} 8 L ${xPos} 13`} 
                  stroke="#2563EB" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              ))}
            </svg>
          </div>

          <div className="grid grid-cols-5 gap-6 relative z-10">
            {journey.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#2563EB]/40 hover:shadow-xl"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300 border border-blue-100 shadow-inner">
                    <Icon size={28} strokeWidth={2} />
                  </div>
                  <div className="mt-6 text-center">
                    <span className="text-xs font-bold tracking-widest text-[#2563EB]">
                      {item.step}
                    </span>
                    <h3 className="mt-2 text-xl font-semibold text-slate-900 group-hover:text-[#2563EB] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile and Tablet Responsive Cards Layout Stack */}
        <div className="mt-10 space-y-4 lg:hidden">
          {journey.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-xs"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB] border border-blue-100">
                  <Icon size={24} strokeWidth={2} />
                </div>
                <div>
                  <span className="text-xs font-bold tracking-widest text-[#2563EB]">
                    {item.step}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
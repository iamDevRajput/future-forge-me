import { 
  GraduationCap, 
  FolderKanban, 
  Building2, 
  Users, 
  HeartHandshake,
  LucideIcon
} from "lucide-react";

interface PartnerItem {
  name: string;
  logoUrl: string;
}

interface StatItem {
  icon: LucideIcon;
  value: string;
  label: string;
}

const partners: PartnerItem[] = [
  { 
    name: "TechNova", 
    logoUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&auto=format&fit=crop" 
  },
  { 
    name: "InnoSoft", 
    logoUrl: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=200&auto=format&fit=crop" 
  },
  { 
    name: "NextGen Labs", 
    logoUrl: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=200&auto=format&fit=crop" 
  },
  { 
    name: "ByteWorks", 
    logoUrl: "https://images.unsplash.com/photo-1618005198143-e5283b519a7f?q=80&w=200&auto=format&fit=crop" 
  },
  { 
    name: "CloudScale", 
    logoUrl: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=200&auto=format&fit=crop" 
  },
];

const stats: StatItem[] = [
  {
    icon: Users,
    value: "250K+",
    label: "Active Users",
  },
  {
    icon: FolderKanban,
    value: "15K+",
    label: "Projects Posted",
  },
  {
    icon: GraduationCap,
    value: "2K+",
    label: "Courses",
  },
  {
    icon: Building2,
    value: "1K+",
    label: "Organizations",
  },
  {
    icon: Users,
    value: "5K+",
    label: "Mentors",
  },
  {
    icon: HeartHandshake,
    value: "98%",
    label: "Satisfaction Rate",
  },
];

export default function TrustedSection() {
  return (
    <section className="bg-white py-10 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* OUTBOARD CONTAINER CHASSIS */}
        <div className="w-full rounded-2xl md:rounded-3xl border border-blue-500/10 bg-white shadow-xs overflow-hidden">
          
          {/* ========================================================================= */}
          {/* TOP TIER: HIGH-VISIBILITY LOGO HEADER ROW                                 */}
          {/* ========================================================================= */}
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-[250px_1fr] items-center gap-6">
            
            {/* Left Header Group */}
            <div className="flex items-center gap-3 select-none">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-b from-[#2563EB]/10 to-transparent border border-[#2563EB]/10">
                <span className="font-bold text-base text-[#2563EB] tracking-tighter">FF</span>
              </div>
              <div>
                <h2 className="text-xs font-black uppercase tracking-[0.18em] text-slate-900 leading-none">
                  TRUSTED BY LEADING
                </h2>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-900 leading-none mt-1">
                  ORGANIZATIONS
                </p>
              </div>
            </div>

            {/* Right Brands Runway - Scaled way up for clear readability */}
            <div className="flex flex-wrap items-center justify-start md:justify-around gap-6 md:gap-4">
              {partners.map((company, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2.5 select-none group"
                >
                  {/* Large, clearly visible logo image framework */}
                  <img 
                    src={company.logoUrl} 
                    alt={`${company.name} logotype`}
                    className="h-10 w-auto max-w-[120px] object-contain rounded-md grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-200"
                    loading="lazy"
                  />
                  
                  <span className="text-xs font-bold tracking-tight text-slate-800 group-hover:text-[#2563EB] transition-colors">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================================= */}
          {/* BOTTOM TIER: COMPACT STAT TRACK DISPLAY ROW                               */}
          {/* ========================================================================= */}
          <div className="border-t border-slate-100 bg-slate-50/40 p-6 md:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:items-center lg:justify-between gap-y-6 gap-x-2 w-full relative">
              
              {stats.map((item, index) => {
                const Icon = item.icon;
                const isLast = index === stats.length - 1;

                return (
                  <div key={index} className="flex flex-row items-center flex-1 justify-between w-full">
                    
                    {/* Individual Metrics Element */}
                    <div className="flex flex-col items-center text-center mx-auto shrink-0 group">
                      
                      {/* Floating Theme circle node bubble */}
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white border border-slate-100 shadow-3xs text-[#2563EB] group-hover:text-[#06B6D4] group-hover:border-cyan-200 transition-all duration-300 relative z-10">
                        <Icon size={16} strokeWidth={2.2} />
                      </div>

                      {/* Numeric value output */}
                      <h3 className="mt-2.5 text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-none">
                        {item.value}
                      </h3>

                      {/* Explicit text label */}
                      <p className="mt-1.5 text-[10px] font-medium text-slate-500 tracking-tight leading-none">
                        {item.label}
                      </p>
                    </div>

                    {/* Thin vertical segment lines */}
                    {!isLast && (
                      <div className="hidden lg:block h-10 w-px bg-slate-200/80 shrink-0 mx-auto pointer-events-none self-center" />
                    )}

                  </div>
                );
              })}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
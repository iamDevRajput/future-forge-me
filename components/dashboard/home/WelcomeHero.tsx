import React from "react";
import { ArrowRight } from "lucide-react";
import DashboardCard from "@/components/dashboard/shared/DashboardCard";
import { StreakBadge } from "@/components/dashboard/shared/Badges";
import type { User } from "@/types/dashboard";

function getGreeting() {
    const h = new Date().getHours();
    if (h < 12) return "Good Morning";
    if (h < 17) return "Good Afternoon";
    return "Good Evening";
}

export default function WelcomeHero({ user }: { user: User }) {
    return (
        <DashboardCard className="relative overflow-hidden p-6 col-span-full lg:col-span-6 bg-[#0B1220]">
            {/* Background glow */}
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#D9A441]/10 blur-3xl pointer-events-none" />
            <div className="absolute -left-8 -bottom-8 h-32 w-32 rounded-full bg-[#B8791A]/15 blur-2xl pointer-events-none" />

            {/* Climbing figure illustration (CSS-drawn) */}
            <div className="absolute right-6 bottom-0 h-28 w-24 opacity-20 hidden sm:block pointer-events-none">
                <svg viewBox="0 0 96 112" fill="none" className="h-full w-full">
                    <ellipse cx="48" cy="100" rx="28" ry="8" fill="#D9A441" opacity="0.4" />
                    <rect x="38" y="40" width="20" height="55" rx="4" fill="#D9A441" />
                    <circle cx="48" cy="28" r="14" fill="#D9A441" />
                    <rect x="44" y="12" width="8" height="18" rx="3" fill="#B8791A" />
                    <path d="M52 15 L70 4" stroke="#D9A441" strokeWidth="3" strokeLinecap="round" />
                    <rect x="66" y="0" width="4" height="20" rx="2" fill="#B8791A" />
                    <rect x="62" y="6" width="12" height="8" rx="1" fill="#D9A441" opacity="0.7" />
                </svg>
            </div>

            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                    <StreakBadge days={user.streak} active={user.streak > 0} />
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                    {getGreeting()}, {user.name} 👋
                </h1>
                <p className="mt-2 text-sm text-white/60 font-medium max-w-[280px]">
                    You&apos;re {user.xp > 0 ? "78%" : "just starting"} closer to your career goal.
                </p>
                <a
                    href="/dashboard/courses"
                    className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D9A441] to-[#B8791A] text-white text-sm font-bold shadow-[0_0_24px_rgba(200,141,30,0.35)] hover:shadow-[0_0_32px_rgba(200,141,30,0.45)] transition-shadow"
                >
                    Continue Your Journey
                    <ArrowRight size={15} strokeWidth={2.5} />
                </a>
            </div>
        </DashboardCard>
    );
}

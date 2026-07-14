import React from "react";
import { Flame, Zap } from "lucide-react";

export function XPBadge({ amount, size = "md" }: { amount: number; size?: "sm" | "md" | "lg" }) {
    const sizes = { sm: "text-[10px] px-1.5 py-0.5", md: "text-xs px-2 py-1", lg: "text-sm px-3 py-1.5" };
    return (
        <span className={`inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#D9A441] to-[#B8791A] text-white font-bold ${sizes[size]}`}>
            <Zap size={size === "lg" ? 14 : 11} className="fill-white text-white" />
            +{amount} XP
        </span>
    );
}

export function StreakBadge({ days, active = true }: { days: number; active?: boolean }) {
    return (
        <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold ${active ? "bg-amber-50 text-amber-600 border border-amber-200" : "bg-slate-100 text-slate-400"}`}>
            <Flame size={13} className={active ? "text-amber-500 fill-amber-400" : "text-slate-400"} />
            {days} day streak
        </span>
    );
}

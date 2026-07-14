import React from "react";
import Link from "next/link";

interface EmptyStateProps {
    title: string;
    description: string;
    actionLabel?: string;
    actionHref?: string;
    icon?: React.ReactNode;
    size?: "sm" | "md";
}

export default function EmptyState({ title, description, actionLabel, actionHref, icon, size = "md" }: EmptyStateProps) {
    return (
        <div className={`flex flex-col items-center justify-center text-center ${size === "sm" ? "py-6 px-4" : "py-10 px-6"}`}>
            {icon && (
                <div className="mb-3 h-12 w-12 rounded-full bg-[#FDF9F2] border border-[rgba(192,138,30,0.2)] flex items-center justify-center text-[#C08A1E]">
                    {icon}
                </div>
            )}
            <p className={`font-bold text-[#1A1A1A] ${size === "sm" ? "text-sm" : "text-base"}`}>{title}</p>
            <p className={`mt-1 text-[#6B6B6B] ${size === "sm" ? "text-xs" : "text-sm"} max-w-[220px]`}>{description}</p>
            {actionLabel && actionHref && (
                <Link
                    href={actionHref}
                    className="mt-4 px-4 py-2 rounded-full bg-gradient-to-r from-[#D9A441] to-[#B8791A] text-white text-xs font-bold shadow-[0_0_16px_rgba(200,141,30,0.25)] hover:shadow-[0_0_24px_rgba(200,141,30,0.35)] transition-shadow"
                >
                    {actionLabel}
                </Link>
            )}
        </div>
    );
}

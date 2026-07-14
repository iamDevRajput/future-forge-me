import React from "react";

interface DashboardCardProps {
    children: React.ReactNode;
    className?: string;
    glass?: boolean;
}

/** Base card wrapper used by every dashboard widget */
export default function DashboardCard({ children, className = "", glass = false }: DashboardCardProps) {
    return (
        <div
            className={`rounded-2xl border ${
                glass
                    ? "bg-white/55 backdrop-blur-md border-white/60 shadow-[0_4px_24px_rgba(11,18,32,0.06)]"
                    : "bg-white border-[rgba(192,138,30,0.15)] shadow-sm"
            } ${className}`}
        >
            {children}
        </div>
    );
}

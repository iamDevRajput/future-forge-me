import React from "react";

interface ProgressBarProps {
    value: number; // 0-100
    label?: string;
    showPercent?: boolean;
    height?: "slim" | "standard" | "thick";
    color?: string;
    className?: string;
}

const heights = { slim: "h-1", standard: "h-2", thick: "h-3" };

export default function ProgressBar({
    value,
    label,
    showPercent = false,
    height = "standard",
    color = "bg-gradient-to-r from-[#D9A441] to-[#B8791A]",
    className = "",
}: ProgressBarProps) {
    const pct = Math.min(Math.max(value, 0), 100);
    return (
        <div className={className}>
            {(label || showPercent) && (
                <div className="flex justify-between items-center mb-1">
                    {label && <span className="text-xs text-[#6B6B6B] font-medium">{label}</span>}
                    {showPercent && <span className="text-xs font-bold text-[#C08A1E]">{pct}%</span>}
                </div>
            )}
            <div className={`w-full bg-[#F5EDD8] rounded-full ${heights[height]}`}>
                <div
                    className={`${heights[height]} ${color} rounded-full transition-all duration-700 ease-in-out`}
                    style={{ width: `${pct}%` }}
                />
            </div>
        </div>
    );
}

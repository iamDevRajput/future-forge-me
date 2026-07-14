"use client";

import React from "react";

interface ProgressRingProps {
    value: number; // 0-100
    size?: number;
    strokeWidth?: number;
    label?: string;
    sublabel?: string;
    color?: string;
    trackColor?: string;
}

/** SVG circular progress indicator — Aurum Gold themed */
export default function ProgressRing({
    value,
    size = 120,
    strokeWidth = 10,
    label,
    sublabel,
    color = "url(#goldGradRing)",
    trackColor = "#F5EDD8",
}: ProgressRingProps) {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (Math.min(Math.max(value, 0), 100) / 100) * circumference;

    return (
        <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
                <defs>
                    <linearGradient id="goldGradRing" x1="0" y1="0" x2="1" y2="1">
                        <stop stopColor="#D9A441" />
                        <stop offset="1" stopColor="#B8791A" />
                    </linearGradient>
                </defs>
                {/* Track */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke={trackColor}
                    strokeWidth={strokeWidth}
                />
                {/* Fill */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    style={{ transition: "stroke-dashoffset 0.8s ease-in-out" }}
                />
            </svg>
            {/* Center label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                {label && (
                    <span className="font-black text-[#1A1A1A] leading-none" style={{ fontSize: size * 0.2 }}>
                        {label}
                    </span>
                )}
                {sublabel && (
                    <span className="text-[#6B6B6B] font-medium leading-none mt-0.5" style={{ fontSize: size * 0.1 }}>
                        {sublabel}
                    </span>
                )}
            </div>
        </div>
    );
}

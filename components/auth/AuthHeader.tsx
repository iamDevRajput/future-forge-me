import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

interface AuthHeaderProps {
    title: string;
    description: string;
}

export default function AuthHeader({ title, description }: AuthHeaderProps) {
    return (
        <div className="mb-8 text-center sm:text-left">
            {/* Mobile Branding (Only visible on small screens) */}
            <Link href="/" className="lg:hidden inline-flex items-center gap-2 mb-8">
                <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8 shrink-0">
                    <defs>
                        <linearGradient id="goldGradMobile" x1="0" y1="0" x2="1" y2="1">
                            <stop stopColor="#D9A441" /><stop offset="1" stopColor="#B8791A" />
                        </linearGradient>
                    </defs>
                    <path d="M8 6h4v28H8V6z" fill="url(#goldGradMobile)" />
                    <path d="M8 6h18a6 6 0 012 4.5c0 3-2.5 5.5-5.5 5.5H8V6z" fill="url(#goldGradMobile)" />
                    <path d="M8 20h14a5 5 0 011.5 3.8c0 2.5-2 4.7-4.5 4.7H8V20z" fill="url(#goldGradMobile)" />
                </svg>
                <span className="text-xl font-extrabold tracking-tight leading-none text-[#1A1A1A]">
                    FUTURE<span className="text-[#C08A1E]">FORGE</span>
                </span>
            </Link>

            <h2 className="text-2xl sm:text-3xl font-black text-[#1A1A1A] tracking-tight">{title}</h2>
            <p className="mt-2 text-sm text-[#6B6B6B] font-medium">{description}</p>
        </div>
    );
}

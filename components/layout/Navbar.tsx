"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Menu, X } from "lucide-react";

export default function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Courses", href: "/courses" },
        { name: "Projects", href: "/project" },
        { name: "Mentors", href: "#" },
        { name: "Organizations", href: "#" },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Brand Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="h-8 w-8 rounded-xl bg-linear-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                                <Sparkles size={16} className="text-white" strokeWidth={2.5} />
                            </div>
                            <span className="text-xl font-black tracking-tight text-[#0F172A]">
                                FutureForge
                                <span className="text-[#06B6D4]">.</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.name} 
                                href={link.href} 
                                className={`text-sm font-bold transition-colors relative group py-2 ${
                                    isActive(link.href) ? "text-[#2563EB]" : "text-slate-500 hover:text-[#0F172A]"
                                }`}
                            >
                                {link.name}
                                {/* Active Indicator / Hover Effect */}
                                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#2563EB] transition-all duration-300 ${
                                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                                }`} />
                            </Link>
                        ))}
                    </div>

                    {/* Auth Actions */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link 
                            href="#" 
                            className="text-sm font-bold text-slate-500 hover:text-[#0F172A] transition-colors px-4 py-2"
                        >
                            Log in
                        </Link>
                        <Link 
                            href="#" 
                            className="px-5 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white text-sm font-bold transition-all shadow-md shadow-slate-900/10 active:scale-95"
                        >
                            Sign up
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden flex items-center">
                        <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-xl py-4 px-4 flex flex-col gap-2">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`px-4 py-3 rounded-xl text-sm font-bold ${
                                isActive(link.href) 
                                    ? "bg-blue-50 text-[#2563EB]" 
                                    : "text-slate-600 hover:bg-slate-50 hover:text-[#0F172A]"
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="border-t border-slate-100 my-2 pt-4 px-4 flex flex-col gap-3">
                        <Link 
                            href="#"
                            className="w-full text-center py-3 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 border border-slate-200"
                        >
                            Log in
                        </Link>
                        <Link 
                            href="#"
                            className="w-full text-center py-3 rounded-xl bg-[#0F172A] text-white text-sm font-bold shadow-md"
                        >
                            Sign up
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
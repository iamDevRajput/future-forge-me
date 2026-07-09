"use client";

import React from "react";
import { Globe, MessageCircle, Video, Camera, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-300 font-sans border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
                    
                    {/* Brand Column */}
                    <div className="lg:col-span-3 xl:col-span-4">
                        <Link href="/" className="inline-block mb-4">
                            <span className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
                                FutureForge
                                <span className="h-2 w-2 rounded-full bg-[#06B6D4]" />
                            </span>
                        </Link>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-900/50 bg-blue-950/30 text-[10px] font-bold tracking-widest text-blue-400 w-fit uppercase mb-6">
                            <Sparkles size={10} className="text-[#06B6D4]" />
                            Learn. Build. Verify. Grow.
                        </div>
                        <p className="text-sm text-slate-400 mb-8 max-w-sm">
                            Empowering learners, professionals, and organizations to collaborate on real-world projects and build a future that matters.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="h-10 w-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#06B6D4] hover:border-[#06B6D4]/50 transition-colors">
                                <Globe size={18} strokeWidth={2} />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#06B6D4] hover:border-[#06B6D4]/50 transition-colors">
                                <MessageCircle size={18} strokeWidth={2} />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#06B6D4] hover:border-[#06B6D4]/50 transition-colors">
                                <Video size={18} strokeWidth={2} />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#06B6D4] hover:border-[#06B6D4]/50 transition-colors">
                                <Camera size={18} strokeWidth={2} />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-6 xl:col-span-5 grid grid-cols-2 sm:grid-cols-4 gap-8">
                        <div>
                            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5">Platform</h4>
                            <ul className="space-y-3">
                                <li><Link href="/courses" className="text-sm text-slate-400 hover:text-white transition-colors">Courses</Link></li>
                                <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Projects</Link></li>
                                <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Assessments</Link></li>
                                <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Marketplace</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5">Community</h4>
                            <ul className="space-y-3">
                                <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Mentors</Link></li>
                                <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Discussions</Link></li>
                                <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Reviews</Link></li>
                                <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Events</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5">Company</h4>
                            <ul className="space-y-3">
                                <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">About Us</Link></li>
                                <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Careers</Link></li>
                                <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Blog</Link></li>
                                <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5">Support</h4>
                            <ul className="space-y-3">
                                <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Help Center</Link></li>
                                <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Terms of Use</Link></li>
                                <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                                <li><Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Refund Policy</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter Column */}
                    <div className="lg:col-span-3 xl:col-span-3 bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 h-32 w-32 bg-[#2563EB]/10 blur-[40px] rounded-full pointer-events-none" />
                        
                        <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-2 relative z-10">Stay Updated</h4>
                        <p className="text-xs text-slate-400 mb-5 relative z-10">
                            Get the latest updates on courses, projects, and platform features.
                        </p>
                        
                        <form className="relative z-10 flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                            <input 
                                type="email" 
                                placeholder="Enter your email address..." 
                                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors"
                            />
                            <button 
                                type="submit" 
                                className="w-full bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-colors flex items-center justify-center gap-2 group"
                            >
                                Subscribe
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-900 py-6">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-slate-500 font-medium">
                        &copy; {new Date().getFullYear()} FutureForge. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <span className="text-xs text-slate-500 hover:text-slate-400 cursor-pointer transition-colors">English (US)</span>
                        <span className="text-xs text-slate-500 hover:text-slate-400 cursor-pointer transition-colors">INR (₹)</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

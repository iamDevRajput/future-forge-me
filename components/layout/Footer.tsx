"use client";

import React from "react";
import { Globe, Heart, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-100 py-10 md:py-12 font-sans select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        
        {/* Upper Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-100">
          
          {/* Brand/Monogram Details */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-b from-[#2563EB]/10 to-transparent border border-[#2563EB]/10">
                <span className="font-black text-sm text-[#2563EB] tracking-tighter">FF</span>
              </div>
              <span className="font-extrabold text-sm uppercase tracking-widest text-slate-800">
                FutureForge
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-500 font-medium max-w-sm">
              FutureForge transforms traditional learning into professional growth by connecting education, practical experience, expert guidance, and career opportunities.
            </p>
          </div>

          {/* Column 2: Platform Links */}
          <div className="md:col-span-2.5 text-left space-y-3">
            <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">
              Platform
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-500">
              <li>
                <a href="#" className="hover:text-[#2563EB] transition-colors">
                  Project Marketplace
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2563EB] transition-colors">
                  Skill Assessments
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2563EB] transition-colors">
                  Expert Mentorship
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2563EB] transition-colors">
                  Platform Courses
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div className="md:col-span-2.5 text-left space-y-3">
            <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">
              Company
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-500">
              <li>
                <a href="#" className="hover:text-[#2563EB] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2563EB] transition-colors">
                  Careers & Gigs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2563EB] transition-colors">
                  Enterprise Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2563EB] transition-colors">
                  Press & Media
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Help */}
          <div className="md:col-span-2 text-left space-y-3">
            <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">
              Support
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-500">
              <li>
                <a href="#" className="hover:text-[#2563EB] transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2563EB] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2563EB] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2563EB] transition-colors">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower Row Copyright details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
          <div className="flex items-center gap-1.5">
            <span>&copy; {new Date().getFullYear()} FutureForge Inc.</span>
            <span className="h-1 w-1 bg-slate-300 rounded-full" />
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#2563EB] transition-colors flex items-center gap-1">
              <Globe size={11} /> Global
            </a>
            <a href="#" className="hover:text-[#2563EB] transition-colors flex items-center gap-1">
              <Shield size={11} /> Secure
            </a>
            <div className="flex items-center gap-1 text-slate-400">
              Made with <Heart size={10} className="text-rose-500 fill-rose-500" /> for Developers
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

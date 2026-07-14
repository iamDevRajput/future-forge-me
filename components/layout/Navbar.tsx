"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Home,
  Compass,
  GraduationCap,
  FolderKanban,
  Users,
  Building2,
  Info,
  BookOpen,
  Settings,
  HelpCircle,
  Bell,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const navLinks = [
  { label: "Home", icon: Home, href: "/" },
  { label: "Explore", icon: Compass, href: "/explore" },
  { label: "Courses", icon: GraduationCap, href: "/courses" },
  { label: "Projects", icon: FolderKanban, href: "/projects" },
  { label: "Mentors", icon: Users, href: "/mentors" },
  { label: "For Organizations", icon: Building2, href: "/organizations" },
  { label: "About Us", icon: Info, href: "/about" },
];

const moreLinks = [
  { label: "Community", icon: BookOpen, href: "#" },
  { label: "Notifications", icon: Bell, href: "#" },
  { label: "Settings", icon: Settings, href: "#" },
  { label: "Help Center", icon: HelpCircle, href: "#" },
];

/* ------------------------------------------------------------------ */
/*  Wing-shaped "F" logo (inline SVG)                                  */
/* ------------------------------------------------------------------ */

function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className ?? "h-9 w-9"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#D9A441" />
          <stop offset="1" stopColor="#B8791A" />
        </linearGradient>
      </defs>
      {/* F-stem */}
      <path d="M8 6h4v28H8V6z" fill="url(#goldGrad)" />
      {/* F-top bar with wing curve */}
      <path
        d="M8 6h18a6 6 0 012 4.5c0 3-2.5 5.5-5.5 5.5H8V6z"
        fill="url(#goldGrad)"
      />
      {/* F-middle bar with wing curve */}
      <path
        d="M8 20h14a5 5 0 011.5 3.8c0 2.5-2 4.7-4.5 4.7H8V20z"
        fill="url(#goldGrad)"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Active underline indicator                                          */
/* ------------------------------------------------------------------ */

function ActiveIndicator() {
  return (
    <motion.span
      layoutId="activeNav"
      className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-[#D9A441] to-[#B8791A]"
      transition={{ type: "spring", stiffness: 380, damping: 30 }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Desktop "More ▾" dropdown                                          */
/* ------------------------------------------------------------------ */

function MoreDropdown({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* invisible backdrop so clicking outside closes */}
          <motion.div
            className="fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            key="more-dropdown"
            className="absolute right-0 top-full mt-2 w-52 backdrop-blur-md bg-white/80 border border-white/60 shadow-xl rounded-xl z-50 overflow-hidden"
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {moreLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => onClose()}
                className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#1A1A1A] hover:bg-[#C08A1E]/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C08A1E]/50"
              >
                <link.icon className="h-4 w-4 text-[#C08A1E]" />
                {link.label}
              </a>
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile fullscreen overlay                                           */
/* ------------------------------------------------------------------ */

function MobileMenu({
  open,
  onClose,
  active,
  onLinkClick,
}: {
  open: boolean;
  onClose: () => void;
  active: string;
  onLinkClick: (label: string) => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu"
          className="fixed inset-0 z-[100] backdrop-blur-xl bg-[#FDF9F2]/95 flex flex-col items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* close */}
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="absolute top-5 right-6 p-2 rounded-full hover:bg-[#C08A1E]/10 transition-colors focus-visible:ring-2 focus-visible:ring-[#C08A1E]/50"
          >
            <X className="h-7 w-7 text-[#1A1A1A]" />
          </button>

          {/* links */}
          {[...navLinks, ...moreLinks].map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => {
                onLinkClick(link.label);
                onClose();
              }}
              className={`flex items-center gap-3 text-2xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C08A1E]/50 rounded-lg px-4 py-2 ${
                active === link.label
                  ? "text-[#C08A1E]"
                  : "text-[#1A1A1A] hover:text-[#C08A1E]"
              }`}
            >
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.3 }}
                className="flex items-center gap-3 w-full"
              >
                <link.icon className="h-6 w-6" />
                {link.label}
              </motion.div>
            </Link>
          ))}

          {/* buttons */}
          <motion.div
            className="flex gap-3 mt-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <Link href="/login" onClick={onClose} className="px-6 py-2.5 rounded-full border-2 border-[#C08A1E] text-[#C08A1E] font-semibold hover:bg-[#C08A1E]/10 transition-colors focus-visible:ring-2 focus-visible:ring-[#C08A1E]/50">
              Log In
            </Link>
            <Link href="/register" onClick={onClose} className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#D9A441] to-[#B8791A] text-white font-semibold shadow-[0_0_25px_rgba(200,141,30,0.35)] focus-visible:ring-2 focus-visible:ring-[#C08A1E]/50">
              Get Started
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Navbar                                                        */
/* ------------------------------------------------------------------ */

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Explore");
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* scroll listener */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* close mobile menu on resize */
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  /* lock body scroll when mobile menu is open */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-lg bg-white/80 shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
            : "bg-[#FDF9F2]"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* ---- Logo ---- */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <LogoMark />
            <span className="text-lg font-extrabold tracking-tight leading-none">
              <span className="text-[#1A1A1A]">FUTURE</span>
              <span className="bg-gradient-to-r from-[#D9A441] to-[#B8791A] bg-clip-text text-transparent">
                FORGE
              </span>
            </span>
          </Link>

          {/* ---- Center nav (desktop) ---- */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setActive(link.label)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C08A1E]/50 ${
                  active === link.label
                    ? "text-[#C08A1E]"
                    : "text-[#1A1A1A]/70 hover:text-[#C08A1E]"
                }`}
              >
                {link.label}
                {active === link.label && <ActiveIndicator />}
              </Link>
            ))}

            {/* More dropdown */}
            <div className="relative">
              <button
                onClick={() => setMoreOpen((v) => !v)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#1A1A1A]/70 hover:text-[#C08A1E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C08A1E]/50"
              >
                More
                <motion.span
                  animate={{ rotate: moreOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-3.5 w-3.5" />
                </motion.span>
              </button>
              <MoreDropdown open={moreOpen} onClose={() => setMoreOpen(false)} />
            </div>
          </div>

          {/* ---- Right side ---- */}
          <div className="flex items-center gap-3">
            {/* Log In — outline button (visible on sm+) */}
            <Link href="/login" className="hidden sm:flex px-5 py-2 rounded-full border-2 border-[#C08A1E]/40 text-[#1A1A1A] text-sm font-semibold hover:border-[#C08A1E] hover:text-[#C08A1E] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C08A1E]/50">
              Log In
            </Link>

            {/* Get Started — filled gold */}
            <Link href="/register" className="hidden sm:flex">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-[#D9A441] to-[#B8791A] text-white text-sm font-semibold shadow-[0_0_25px_rgba(200,141,30,0.35)] hover:shadow-[0_0_30px_rgba(200,141,30,0.45)] transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C08A1E]/50"
                >
                  Get Started
                </motion.div>
            </Link>

            {/* Hamburger (mobile) */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="lg:hidden p-2 rounded-full hover:bg-[#C08A1E]/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C08A1E]/50"
            >
              <Menu className="h-6 w-6 text-[#1A1A1A]" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        active={active}
        onLinkClick={setActive}
      />
    </>
  );
}
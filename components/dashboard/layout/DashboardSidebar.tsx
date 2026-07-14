"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard, BookOpen, Map, ClipboardList, Award,
    FolderKanban, Bot, GraduationCap, Briefcase, Globe,
    FileText, Bookmark, Settings, ChevronDown, ChevronRight,
} from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";
import ProgressBar from "@/components/dashboard/shared/ProgressBar";
import type { User } from "@/types/dashboard";

/* ─── Icon Map ──────────────────────────────────────────────────────────────── */
const iconMap: Record<string, React.ElementType> = {
    LayoutDashboard, BookOpen, Map, ClipboardList, Award,
    FolderKanban, Bot, GraduationCap, Briefcase, Globe,
    FileText, Bookmark, Settings,
};

/* ─── Nav Config (Phase 1) ──────────────────────────────────────────────────── */
const navGroups = [
    {
        id: "main",
        items: [
            { label: "Dashboard", href: "/dashboard", icon: "LayoutDashboard" },
        ],
    },
    {
        id: "learning",
        label: "My Learning",
        collapsible: true,
        defaultOpen: true,
        items: [
            { label: "My Courses", href: "/dashboard/courses", icon: "BookOpen" },
            { label: "Roadmaps", href: "/dashboard/roadmaps", icon: "Map" },
            { label: "Assessments", href: "/dashboard/assessments", icon: "ClipboardList" },
            { label: "Certificates", href: "/dashboard/certificates", icon: "Award" },
        ],
    },
    {
        id: "projects",
        items: [
            { label: "Projects", href: "/dashboard/projects", icon: "FolderKanban" },
            { label: "AI Mentor", href: "/dashboard/ai-mentor", icon: "Bot" },
            { label: "Mentorship", href: "/dashboard/mentor", icon: "GraduationCap" },
            { label: "Opportunities", href: "/dashboard/opportunities", icon: "Briefcase" },
            { label: "Community", href: "/dashboard/community", icon: "Globe" },
        ],
    },
    {
        id: "secondary",
        items: [
            { label: "Portfolio", href: "/dashboard/portfolio", icon: "FileText" },
            { label: "Bookmarks", href: "/dashboard/bookmarks", icon: "Bookmark" },
        ],
    },
];

/* ─── Logo ──────────────────────────────────────────────────────────────────── */
function SidebarLogo({ isCollapsed }: { isCollapsed: boolean }) {
    return (
        <Link href="/" className={`flex items-center py-5 shrink-0 transition-all ${isCollapsed ? "justify-center px-0" : "gap-2.5 px-5"}`}>
            <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8">
                <defs>
                    <linearGradient id="goldGradSidebar" x1="0" y1="0" x2="1" y2="1">
                        <stop stopColor="#D9A441" /><stop offset="1" stopColor="#B8791A" />
                    </linearGradient>
                </defs>
                <path d="M8 6h4v28H8V6z" fill="url(#goldGradSidebar)" />
                <path d="M8 6h18a6 6 0 012 4.5c0 3-2.5 5.5-5.5 5.5H8V6z" fill="url(#goldGradSidebar)" />
                <path d="M8 20h14a5 5 0 011.5 3.8c0 2.5-2 4.7-4.5 4.7H8V20z" fill="url(#goldGradSidebar)" />
            </svg>
            {!isCollapsed && (
                <span className="text-base font-extrabold tracking-tight leading-none">
                    <span className="text-white">FUTURE</span>
                    <span className="bg-gradient-to-r from-[#D9A441] to-[#B8791A] bg-clip-text text-transparent">FORGE</span>
                </span>
            )}
        </Link>
    );
}

/* ─── Nav Item ──────────────────────────────────────────────────────────────── */
function NavItem({ label, href, icon, isCollapsed }: {
    label: string; href: string; icon: string; isCollapsed: boolean;
}) {
    const pathname = usePathname();
    const isActive = pathname === href || (href !== "/dashboard" && pathname.startsWith(href));
    const Icon = iconMap[icon] ?? LayoutDashboard;

    return (
        <Link
            href={href}
            className={`flex items-center gap-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 group relative ${
                isActive
                    ? "bg-[rgba(192,138,30,0.18)] text-[#D9A441]"
                    : "text-white/60 hover:bg-white/8 hover:text-white"
            } ${isCollapsed ? "justify-center px-0 mx-2" : "px-4 mx-0"}`}
        >
            <Icon size={18} className={`shrink-0 ${isActive ? "text-[#D9A441]" : "text-white/50 group-hover:text-white"}`} />
            {!isCollapsed && <span className="truncate">{label}</span>}
            {isActive && <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-[#D9A441] rounded-r-full" />}
            
            {/* Custom Hover Tooltip for collapsed state */}
            {isCollapsed && (
                <div className="absolute left-full ml-3 px-2.5 py-1.5 bg-[#101B33] text-white text-xs font-bold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50 border border-white/10 shadow-lg pointer-events-none">
                    {label}
                </div>
            )}
        </Link>
    );
}

/* ─── Nav Group ─────────────────────────────────────────────────────────────── */
function NavGroup({ group, isCollapsed }: { group: typeof navGroups[0]; isCollapsed: boolean }) {
    const [isOpen, setIsOpen] = useState((group as { defaultOpen?: boolean }).defaultOpen ?? true);
    const hasLabel = "label" in group && group.label;
    const isCollapsible = "collapsible" in group && group.collapsible;

    return (
        <div className="mb-1">
            {hasLabel && !isCollapsed && (
                <button
                    onClick={() => isCollapsible && setIsOpen((v) => !v)}
                    className={`w-full flex items-center justify-between px-4 py-1.5 mb-0.5 ${isCollapsible ? "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C08A1E] rounded-md" : "cursor-default"}`}
                    aria-expanded={isCollapsible ? isOpen : undefined}
                    aria-label={isCollapsible ? `Toggle ${(group as { label: string }).label} group` : undefined}
                >
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/35">
                        {(group as { label: string }).label}
                    </span>
                    {isCollapsible && (
                        isOpen
                            ? <ChevronDown size={12} className="text-white/30" />
                            : <ChevronRight size={12} className="text-white/30" />
                    )}
                </button>
            )}
            {(!isCollapsible || isOpen || isCollapsed) && (
                <div className={`space-y-0.5 ${isCollapsed ? "px-0" : "px-2"}`}>
                    {group.items.map((item) => (
                        <NavItem key={item.href} {...item} isCollapsed={isCollapsed} />
                    ))}
                </div>
            )}
        </div>
    );
}

/* ─── User Card ─────────────────────────────────────────────────────────────── */
function UserCard({ user, isCollapsed }: { user: User; isCollapsed: boolean }) {
    const initials = user.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
    const xpPercent = Math.round((user.xp / user.xpToNextLevel) * 100);

    return (
        <div className={`mt-auto border-t border-white/10 pt-3 pb-4 ${isCollapsed ? "px-2" : "px-3"}`}>
            <div className={`flex items-center gap-3 py-2 rounded-xl ${isCollapsed ? "justify-center px-0" : "px-2"}`}>
                <div className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-br from-[#D9A441] to-[#B8791A] flex items-center justify-center text-white font-black text-sm shadow-md">
                    {initials}
                </div>
                {!isCollapsed && (
                    <div className="min-w-0 flex-1">
                        <p className="text-sm font-bold text-white truncate">{user.name}</p>
                        <p className="text-[10px] text-white/40 truncate">Level {user.level} · {user.levelLabel}</p>
                    </div>
                )}
            </div>
            {!isCollapsed && (
                <div className="mt-2 px-2">
                    <ProgressBar
                        value={xpPercent}
                        label={`${user.xp.toLocaleString()} XP`}
                        showPercent={false}
                        height="slim"
                        color="bg-gradient-to-r from-[#D9A441] to-[#B8791A]"
                        className="[&_.bg-\[\#F5EDD8\]]:bg-white/15"
                    />
                    <p className="text-[10px] text-white/30 mt-1 text-right">{user.xpToNextLevel.toLocaleString()} XP to next level</p>
                </div>
            )}
        </div>
    );
}

/* ─── Main Sidebar ──────────────────────────────────────────────────────────── */
export default function DashboardSidebar({ user }: { user: User }) {
    const { isExpanded, isMobileOpen, closeMobile } = useSidebar();
    const isCollapsed = !isExpanded;

    return (
        <>
            {/* Mobile Backdrop */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                    onClick={closeMobile}
                    aria-hidden="true"
                />
            )}

            {/* Sidebar Panel */}
            <aside
                className={`
                    fixed top-0 left-0 h-screen z-50 flex flex-col
                    bg-[#0B1220] border-r border-white/8
                    transition-[width,transform] duration-300 ease-in-out
                    ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
                    ${isCollapsed ? "w-[64px]" : "w-[240px]"}
                `}
                aria-label="Dashboard navigation"
            >
                <SidebarLogo isCollapsed={isCollapsed} />

                {/* Nav Items */}
                <nav className="flex-1 overflow-y-auto overflow-x-hidden py-2 scrollbar-hide">
                    {navGroups.map((group) => (
                        <NavGroup key={group.id} group={group} isCollapsed={isCollapsed} />
                    ))}

                    {/* Settings — always at bottom of nav */}
                    <div className="px-2 mt-2 pt-2 border-t border-white/10">
                        <NavItem label="Settings" href="/dashboard/settings" icon="Settings" isCollapsed={isCollapsed} />
                    </div>
                </nav>

                <UserCard user={user} isCollapsed={isCollapsed} />
            </aside>
        </>
    );
}

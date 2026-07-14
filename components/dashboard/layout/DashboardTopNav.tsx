"use client";

import React, { useState, useCallback } from "react";
import { Search, Bell, Zap, Menu, X } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";
import type { Notification } from "@/types/dashboard";
import { useAuth } from "@/contexts/AuthContext";

const categoryColors: Record<string, string> = {
    learning: "text-blue-600 bg-blue-50",
    projects: "text-purple-600 bg-purple-50",
    mentorship: "text-green-600 bg-green-50",
    community: "text-indigo-600 bg-indigo-50",
    opportunities: "text-amber-600 bg-amber-50",
    system: "text-slate-600 bg-slate-100",
};

function NotificationPanel({ notifications, onClose }: { notifications: Notification[]; onClose: () => void }) {
    const [activeCategory, setActiveCategory] = useState<string>("all");
    const categories = ["all", "learning", "projects", "mentorship", "community", "opportunities", "system"];
    const unreadCount = notifications.filter((n) => !n.isRead).length;

    const filtered = activeCategory === "all"
        ? notifications
        : notifications.filter((n) => n.category === activeCategory);

    return (
        <>
            <div className="fixed inset-0 z-40" onClick={onClose} aria-hidden="true" />
            <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 z-50 bg-white rounded-2xl border border-[rgba(192,138,30,0.15)] shadow-[0_12px_40px_rgba(11,18,32,0.12)] overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-[#1A1A1A] text-sm">Notifications</span>
                        {unreadCount > 0 && (
                            <span className="h-5 w-5 rounded-full bg-[#C08A1E] text-white text-[10px] font-black flex items-center justify-center">
                                {unreadCount}
                            </span>
                        )}
                    </div>
                    <button className="text-xs text-[#C08A1E] font-bold hover:text-[#A6740F]">Mark all ✓</button>
                </div>

                {/* Category pills */}
                <div className="flex gap-1 px-3 py-2 overflow-x-auto scrollbar-hide border-b border-slate-100">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`shrink-0 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide transition-colors ${
                                activeCategory === cat
                                    ? "bg-[#C08A1E] text-white"
                                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Items */}
                <div className="max-h-80 overflow-y-auto">
                    {filtered.length === 0 ? (
                        <p className="text-center text-sm text-slate-400 py-8">No notifications</p>
                    ) : (
                        filtered.map((n) => (
                            <div
                                key={n.id}
                                className={`px-4 py-3 border-b border-slate-50 hover:bg-slate-50 transition-colors ${!n.isRead ? "border-l-2 border-l-[#C08A1E]" : ""}`}
                            >
                                <div className="flex items-start gap-2">
                                    <span className={`shrink-0 mt-0.5 text-[10px] font-bold px-1.5 py-0.5 rounded capitalize ${categoryColors[n.category]}`}>
                                        {n.category}
                                    </span>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs font-bold text-[#1A1A1A] leading-tight">{n.title}</p>
                                        <p className="text-xs text-[#6B6B6B] mt-0.5 leading-snug">{n.body}</p>
                                        <p className="text-[10px] text-slate-400 mt-1">{n.timestamp}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="px-4 py-3 text-center border-t border-slate-100">
                    <a href="/dashboard/notifications" className="text-xs font-bold text-[#C08A1E] hover:text-[#A6740F]">
                        View All Notifications →
                    </a>
                </div>
            </div>
        </>
    );
}

export default function DashboardTopNav({
    notifications,
}: {
    notifications: Notification[];
}) {
    const { currentUser } = useAuth();
    const { toggle, openMobile, isExpanded } = useSidebar();
    const [notifOpen, setNotifOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const unreadCount = notifications.filter((n) => !n.isRead).length;

    const handleNotifToggle = useCallback(() => setNotifOpen((v) => !v), []);
    
    // Safely fallback if currentUser is somehow missing
    const initials = currentUser?.fullName?.slice(0, 2).toUpperCase() || "FF";

    return (
        <header className="h-16 flex items-center justify-between px-4 sm:px-6 bg-[#FDF9F2] border-b border-[rgba(192,138,30,0.12)] sticky top-0 z-30">
            {/* Left: hamburger (mobile) + sidebar toggle (desktop) */}
            <div className="flex items-center gap-3">
                <button
                    onClick={openMobile}
                    className="lg:hidden p-2 rounded-xl text-[#6B6B6B] hover:bg-[rgba(192,138,30,0.08)] transition-colors"
                    aria-label="Open sidebar"
                >
                    <Menu size={20} />
                </button>
                <button
                    onClick={toggle}
                    className="hidden lg:flex p-2 rounded-xl text-[#6B6B6B] hover:bg-[rgba(192,138,30,0.08)] transition-colors"
                    aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
                >
                    <Menu size={20} />
                </button>

                {/* Search bar — desktop */}
                <div className="hidden md:flex items-center gap-2 bg-white border border-[rgba(192,138,30,0.2)] rounded-full px-4 py-2 w-72 lg:w-96 hover:border-[#C08A1E] transition-colors cursor-text">
                    <Search size={15} className="text-[#6B6B6B] shrink-0" />
                    <span className="text-sm text-[#6B6B6B] font-medium flex-1">Search courses, projects, mentors...</span>
                    <kbd className="hidden lg:flex items-center gap-0.5 text-[10px] font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                        ⌘K
                    </kbd>
                </div>
            </div>

            {/* Right: icons + avatar */}
            <div className="flex items-center gap-1 sm:gap-2">
                {/* Mobile search */}
                <button
                    className="md:hidden p-2 rounded-xl text-[#6B6B6B] hover:bg-[rgba(192,138,30,0.08)] transition-colors"
                    aria-label="Search"
                >
                    <Search size={20} />
                </button>

                {/* XP flash */}
                <div className="hidden sm:flex items-center gap-1 bg-gradient-to-r from-[#D9A441] to-[#B8791A] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    <Zap size={12} className="fill-white" />
                    {currentUser?.xp?.toLocaleString() || 0} XP
                </div>

                {/* Notifications */}
                <div className="relative">
                    <button
                        onClick={handleNotifToggle}
                        className="relative p-2 rounded-xl text-[#6B6B6B] hover:bg-[rgba(192,138,30,0.08)] transition-colors"
                        aria-label={`Notifications — ${unreadCount} unread`}
                        aria-expanded={notifOpen}
                        aria-haspopup="true"
                    >
                        <Bell size={20} />
                        {unreadCount > 0 && (
                            <span className="absolute top-1 right-1 h-4 w-4 bg-[#C08A1E] text-white text-[9px] font-black rounded-full flex items-center justify-center leading-none">
                                {unreadCount}
                            </span>
                        )}
                    </button>
                    {notifOpen && (
                        <NotificationPanel notifications={notifications} onClose={() => setNotifOpen(false)} />
                    )}
                </div>

                {/* Avatar */}
                <button 
                    className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full hover:bg-[rgba(192,138,30,0.08)] transition-colors"
                    aria-label="User profile menu"
                >
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#D9A441] to-[#B8791A] flex items-center justify-center text-white font-black text-xs shadow-md">
                        {initials}
                    </div>
                    <div className="hidden sm:block text-left">
                        <p className="text-xs font-bold text-[#1A1A1A] leading-none">{currentUser?.fullName || "User"}</p>
                        <p className="text-[10px] text-[#6B6B6B] leading-none mt-0.5 capitalize">{currentUser?.role || "student"}</p>
                    </div>
                </button>
            </div>
        </header>
    );
}

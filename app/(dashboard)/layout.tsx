"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sparkles,
  LayoutDashboard,
  Users,
  FolderKanban,
  BookOpen,
  BarChart3,
  Settings,
  Bell,
  ChevronDown,
  Menu,
  X,
  Shield,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type NavLeaf = { label: string; href: string; icon: LucideIcon };
type NavGroup = { label: string; icon: LucideIcon; children: { label: string; href: string }[] };
type NavItem = NavLeaf | NavGroup;

const sidebarNav: NavItem[] = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  {
    label: "Mentorship",
    icon: Shield,
    children: [
      { label: "Overview", href: "/mentorship" },
      { label: "Available Projects", href: "/mentorship/available-projects" },
      { label: "My Mentorships", href: "/mentorship/my-mentorships" },
      { label: "Invitations", href: "/mentorship/invitations" },
    ],
  },
  { label: "Learners", href: "/learners", icon: Users },
  { label: "Projects", href: "/projects", icon: FolderKanban },
  { label: "Courses", href: "/courses", icon: BookOpen },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
  { label: "Settings", href: "/settings", icon: Settings },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mentorshipOpen, setMentorshipOpen] = useState(true);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const Sidebar = () => (
    <aside className="flex flex-col h-full bg-white border-r border-[#E9EAEE] w-[260px] flex-shrink-0">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-5 py-5 border-b border-[#E9EAEE]">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center shadow-sm">
            <Sparkles size={15} className="text-white" strokeWidth={2.5} />
          </div>
          <span className="text-[15px] font-black tracking-tight text-[#1A1A2E]">
            FutureForge
            <span className="text-[#F59E0B]">.</span>
          </span>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-0.5">
        {sidebarNav.map((item) => {
          if ("children" in item) {
            const groupActive = item.children.some((c) => isActive(c.href));
            return (
              <div key={item.label}>
                <button
                  onClick={() => setMentorshipOpen((p) => !p)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                    groupActive
                      ? "bg-[#EDE9FE] text-[#7C5CFF]"
                      : "text-[#6B7280] hover:bg-[#F8F9FB] hover:text-[#1A1A2E]"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <item.icon size={17} />
                    {item.label}
                  </div>
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${mentorshipOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mentorshipOpen && (
                  <div className="mt-0.5 ml-7 space-y-0.5">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                          isActive(child.href)
                            ? "bg-[#EDE9FE] text-[#7C5CFF] font-semibold"
                            : "text-[#6B7280] hover:bg-[#F8F9FB] hover:text-[#1A1A2E]"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                isActive(item.href)
                  ? "bg-[#EDE9FE] text-[#7C5CFF]"
                  : "text-[#6B7280] hover:bg-[#F8F9FB] hover:text-[#1A1A2E]"
              }`}
            >
              <Icon size={17} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Mini profile */}
      <div className="border-t border-[#E9EAEE] px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#7C5CFF] flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
            RK
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-[#1A1A2E] truncate">
              Rahul Kumar
            </p>
            <p className="text-xs text-[#6B7280] truncate">Senior Mentor</p>
          </div>
          <Settings
            size={15}
            className="ml-auto text-[#6B7280] hover:text-[#1A1A2E] cursor-pointer flex-shrink-0"
          />
        </div>
      </div>
    </aside>
  );

  return (
    <div className="flex h-screen bg-[#F8F9FB] overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-col">
        <Sidebar />
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="relative z-10 flex flex-col w-[260px]">
            <Sidebar />
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white text-[#1A1A2E] shadow"
          >
            <X size={18} />
          </button>
        </div>
      )}

      {/* Main Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Bar */}
        <header className="flex-shrink-0 flex items-center justify-between h-16 px-4 sm:px-6 bg-white border-b border-[#E9EAEE]">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden p-2 rounded-lg text-[#6B7280] hover:bg-[#F8F9FB]"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={20} />
            </button>
            {/* Breadcrumb */}
            <nav className="hidden sm:flex items-center gap-1.5 text-sm text-[#6B7280]">
              <span>Dashboard</span>
              <span>/</span>
              <span className="text-[#1A1A2E] font-semibold">Mentorship</span>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <button className="relative p-2 rounded-xl text-[#6B7280] hover:bg-[#F8F9FB] hover:text-[#1A1A2E] transition-colors focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/40 outline-none">
              <Bell size={19} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#EF4444] rounded-full" />
            </button>
            <div className="flex items-center gap-2 pl-2 border-l border-[#E9EAEE]">
              <div className="w-8 h-8 rounded-full bg-[#7C5CFF] flex items-center justify-center text-white text-sm font-bold">
                RK
              </div>
              <span className="hidden sm:block text-sm font-semibold text-[#1A1A2E]">
                Rahul Kumar
              </span>
              <ChevronDown size={14} className="text-[#6B7280]" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}

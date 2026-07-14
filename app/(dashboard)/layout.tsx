import React from "react";
import { SidebarProvider } from "@/context/SidebarContext";
import DashboardSidebar from "@/components/dashboard/layout/DashboardSidebar";
import DashboardTopNav from "@/components/dashboard/layout/DashboardTopNav";
import BottomNav from "@/components/dashboard/layout/BottomNav";
import AImentorFAB from "@/components/dashboard/layout/AImentorFAB";
import DashboardMainWrapper from "@/components/dashboard/layout/DashboardMainWrapper";
import { mockUser, mockNotifications } from "@/lib/dashboard-mock-data";

export const metadata = {
    title: { default: "Dashboard | FutureForge", template: "%s | FutureForge" },
    description: "Your personal learning command center — FutureForge Dashboard",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <div className="min-h-screen bg-[#F5F0E8] font-sans">
                {/* Sidebar */}
                <DashboardSidebar user={mockUser} />

                {/* Main column */}
                <DashboardMainWrapper>
                    {/* Top nav */}
                    <DashboardTopNav user={mockUser} notifications={mockNotifications} />

                    {/* Page content */}
                    <main
                        id="dashboard-main"
                        role="main"
                        className="px-4 sm:px-6 py-6 pb-24 lg:pb-8 max-w-[1400px] mx-auto"
                    >
                        {children}
                    </main>
                </DashboardMainWrapper>

                {/* Mobile bottom navigation */}
                <BottomNav />

                {/* AI Mentor FAB — available on every dashboard page */}
                <AImentorFAB />
            </div>
        </SidebarProvider>
    );
}

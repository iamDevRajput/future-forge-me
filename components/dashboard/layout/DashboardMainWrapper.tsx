"use client";

import React from "react";
import { useSidebar } from "@/context/SidebarContext";

export default function DashboardMainWrapper({ children }: { children: React.ReactNode }) {
    const { isExpanded } = useSidebar();
    
    return (
        <div className={`transition-[margin] duration-300 ease-in-out ${isExpanded ? "lg:ml-[240px]" : "lg:ml-[64px]"}`}>
            {children}
        </div>
    );
}

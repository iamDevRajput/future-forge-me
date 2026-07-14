"use client";

import React, { createContext, useContext, useState, useCallback, useMemo } from "react";

interface SidebarContextValue {
    isExpanded: boolean;
    isMobileOpen: boolean;
    toggle: () => void;
    openMobile: () => void;
    closeMobile: () => void;
}

const SidebarContext = createContext<SidebarContextValue | null>(null);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
    const [isExpanded, setIsExpanded] = useState(true);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const toggle = useCallback(() => setIsExpanded((v) => !v), []);
    const openMobile = useCallback(() => setIsMobileOpen(true), []);
    const closeMobile = useCallback(() => setIsMobileOpen(false), []);

    const value = useMemo(
        () => ({ isExpanded, isMobileOpen, toggle, openMobile, closeMobile }),
        [isExpanded, isMobileOpen, toggle, openMobile, closeMobile]
    );

    return (
        <SidebarContext.Provider value={value}>
            {children}
        </SidebarContext.Provider>
    );
}

export function useSidebar() {
    const ctx = useContext(SidebarContext);
    if (!ctx) throw new Error("useSidebar must be used inside SidebarProvider");
    return ctx;
}

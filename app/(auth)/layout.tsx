import React from "react";
import AuthSidePanel from "@/components/auth/AuthSidePanel";

export const metadata = {
    title: { default: "Authentication | FutureForge", template: "%s | FutureForge" },
    description: "Join FutureForge to accelerate your career.",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-[#FDF9F2] flex font-sans">
            {/* Left Side: Trust & Value Panel (Hidden on mobile/tablet) */}
            <div className="hidden lg:block lg:w-1/2 xl:w-5/12 h-screen sticky top-0">
                <AuthSidePanel />
            </div>

            {/* Right Side: Dynamic Form Area */}
            <div className="w-full lg:w-1/2 xl:w-7/12 flex items-center justify-center p-6 sm:p-12 relative overflow-y-auto">
                <div className="w-full max-w-[420px]">
                    {children}
                </div>
            </div>
        </div>
    );
}

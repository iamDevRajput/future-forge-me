"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, CheckCircle2 } from "lucide-react";

export default function VerifyEmailPage() {
    const router = useRouter();
    const [status, setStatus] = useState<"loading" | "success">("loading");

    useEffect(() => {
        // Mock verification delay
        const timer1 = setTimeout(() => setStatus("success"), 2500);
        
        // Auto redirect to success screen after verification
        const timer2 = setTimeout(() => {
            router.push("/auth-success");
        }, 4000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [router]);

    return (
        <div className="w-full flex flex-col items-center justify-center text-center py-8">
            <div className="relative mb-8">
                {/* Background pulse effect */}
                <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-[#C08A1E] rounded-full blur-xl"
                />
                
                <div className="relative w-20 h-20 bg-white shadow-xl rounded-full flex items-center justify-center border border-slate-100 z-10 overflow-hidden">
                    {status === "loading" ? (
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            className="text-[#C08A1E]"
                        >
                            <Mail size={32} />
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="text-green-500 bg-green-50 w-full h-full flex items-center justify-center"
                        >
                            <CheckCircle2 size={40} />
                        </motion.div>
                    )}
                </div>
            </div>

            <motion.h2 
                key={status}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-black text-[#1A1A1A] tracking-tight mb-3"
            >
                {status === "loading" ? "Verifying your email..." : "Email verified!"}
            </motion.h2>
            
            <p className="text-sm text-[#6B6B6B] font-medium leading-relaxed max-w-[280px]">
                {status === "loading" 
                    ? "Please wait while we confirm your email address. This should only take a moment."
                    : "Your account is now ready. Redirecting you to the dashboard..."}
            </p>

            {status === "loading" && (
                <div className="mt-8 flex gap-1.5">
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} className="w-2 h-2 rounded-full bg-[#C08A1E]" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} className="w-2 h-2 rounded-full bg-[#C08A1E]" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} className="w-2 h-2 rounded-full bg-[#C08A1E]" />
                </div>
            )}
        </div>
    );
}

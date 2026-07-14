"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import AuthButton from "@/components/auth/AuthButton";
import confetti from "canvas-confetti";

export default function AuthSuccessPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Fire confetti on mount
        const duration = 2500;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: any = setInterval(function() {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({
                ...defaults, particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                colors: ["#D9A441", "#B8791A", "#0F172A", "#ffffff"]
            });
            confetti({
                ...defaults, particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                colors: ["#D9A441", "#B8791A", "#0F172A", "#ffffff"]
            });
        }, 250);

        return () => clearInterval(interval);
    }, []);

    const handleContinue = () => {
        setIsLoading(true);
        setTimeout(() => {
            router.push("/dashboard");
        }, 800);
    };

    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-full flex flex-col items-center text-center"
        >
            <div className="w-20 h-20 bg-gradient-to-br from-[#D9A441] to-[#B8791A] rounded-2xl flex items-center justify-center shadow-[0_8px_30px_rgba(217,164,65,0.4)] mb-8 transform rotate-3">
                <Sparkles size={36} className="text-white" />
            </div>

            <h2 className="text-3xl font-black text-[#1A1A1A] tracking-tight mb-3">
                Welcome to FutureForge
            </h2>
            
            <p className="text-base text-[#6B6B6B] font-medium leading-relaxed max-w-sm mb-10">
                Your account has been successfully created and verified. You are now ready to explore your personalized dashboard.
            </p>

            <AuthButton onClick={handleContinue} isLoading={isLoading}>
                Enter Dashboard <ArrowRight size={18} />
            </AuthButton>
        </motion.div>
    );
}

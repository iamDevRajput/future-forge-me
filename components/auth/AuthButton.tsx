"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { Loader2 } from "lucide-react";

interface AuthButtonProps extends HTMLMotionProps<"button"> {
    isLoading?: boolean;
    children: React.ReactNode;
}

export default function AuthButton({ isLoading, children, className = "", ...props }: AuthButtonProps) {
    return (
        <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            disabled={isLoading || props.disabled}
            className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D9A441] to-[#B8791A] text-white font-bold tracking-wide shadow-[0_4px_20px_rgba(200,141,30,0.25)] hover:shadow-[0_8px_28px_rgba(200,141,30,0.4)] transition-all disabled:opacity-70 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#C08A1E]/30 ${className}`}
            {...props}
        >
            {isLoading ? <Loader2 size={18} className="animate-spin" /> : children}
        </motion.button>
    );
}

"use client";

import React, { useState, useEffect, useId } from "react";
import { AlertCircle, CheckCircle2, Eye, EyeOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    success?: boolean;
    isPassword?: boolean;
}

export default function AuthInput({ label, error, success, isPassword, className = "", ...props }: AuthInputProps) {
    const [showPassword, setShowPassword] = useState(false);
    const [capsLockActive, setCapsLockActive] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const generatedId = useId();
    const inputId = props.id || generatedId;

    const inputType = isPassword ? (showPassword ? "text" : "password") : props.type || "text";

    useEffect(() => {
        if (!isPassword) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.getModifierState) {
                setCapsLockActive(e.getModifierState("CapsLock"));
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyDown);
        };
    }, [isPassword]);

    return (
        <div className={`flex flex-col gap-1.5 ${className}`}>
            <label htmlFor={inputId} className="text-xs font-bold text-[#1A1A1A] ml-1">{label}</label>
            <div className="relative group">
                <input
                    id={inputId}
                    {...props}
                    type={inputType}
                    onFocus={(e) => {
                        setIsFocused(true);
                        props.onFocus?.(e);
                    }}
                    onBlur={(e) => {
                        setIsFocused(false);
                        props.onBlur?.(e);
                    }}
                    className={`w-full px-4 py-3 bg-white border rounded-xl text-sm font-medium text-[#1A1A1A] placeholder:text-[#94A3B8] transition-all outline-none shadow-sm ${
                        error
                            ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                            : success
                            ? "border-green-300 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                            : "border-slate-200 focus:border-[#C08A1E] focus:ring-4 focus:ring-[#C08A1E]/15 hover:border-slate-300"
                    } ${isPassword ? "pr-12" : (error || success) ? "pr-10" : ""}`}
                />
                
                {/* Right side icons */}
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    {isPassword && (
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="text-slate-400 hover:text-[#1A1A1A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C08A1E] rounded-md p-1"
                            aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                    )}
                    
                    {!isPassword && error && <AlertCircle size={16} className="text-red-500" />}
                    {!isPassword && success && !error && <CheckCircle2 size={16} className="text-green-500" />}
                </div>
            </div>

            {/* Error Message & Caps Lock Warning */}
            <AnimatePresence mode="wait">
                {error && (
                    <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        className="text-xs font-semibold text-red-500 flex items-center gap-1 ml-1"
                    >
                        <AlertCircle size={12} /> {error}
                    </motion.p>
                )}
                {isPassword && capsLockActive && isFocused && !error && (
                    <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        className="text-xs font-semibold text-amber-600 flex items-center gap-1 ml-1"
                    >
                        <AlertCircle size={12} /> Caps Lock is ON
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
}

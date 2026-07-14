import React from "react";
import { Check, X } from "lucide-react";

interface PasswordStrengthProps {
    password?: string;
}

export default function PasswordStrength({ password = "" }: PasswordStrengthProps) {
    const minLength = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const conditions = [
        { label: "8+ characters", met: minLength },
        { label: "Uppercase", met: hasUpper },
        { label: "Lowercase", met: hasLower },
        { label: "Number", met: hasNumber },
        { label: "Special character", met: hasSpecial },
    ];

    const score = conditions.filter((c) => c.met).length;

    let strengthLabel = "Weak";
    let strengthColor = "bg-slate-200";
    if (score === 5) {
        strengthLabel = "Strong";
        strengthColor = "bg-green-500";
    } else if (score >= 3) {
        strengthLabel = "Fair";
        strengthColor = "bg-[#C08A1E]";
    } else if (score > 0) {
        strengthColor = "bg-red-400";
    }

    if (password.length === 0) return null;

    return (
        <div className="mt-2 space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-[#6B6B6B]">Password Strength:</span>
                <span className={
                    score === 5 ? "text-green-600" : score >= 3 ? "text-[#C08A1E]" : "text-red-500"
                }>{strengthLabel}</span>
            </div>
            <div className="flex gap-1 h-1.5 w-full">
                {[1, 2, 3, 4, 5].map((level) => (
                    <div
                        key={level}
                        className={`flex-1 rounded-full transition-colors duration-300 ${
                            level <= score ? strengthColor : "bg-slate-100"
                        }`}
                    />
                ))}
            </div>
            
            <div className="grid grid-cols-2 gap-1 pt-1">
                {conditions.map((c) => (
                    <div key={c.label} className="flex items-center gap-1.5 text-[10px] font-medium text-slate-500">
                        {c.met ? (
                            <Check size={10} className="text-green-500 shrink-0" />
                        ) : (
                            <X size={10} className="text-slate-300 shrink-0" />
                        )}
                        <span className={c.met ? "text-slate-700" : ""}>{c.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

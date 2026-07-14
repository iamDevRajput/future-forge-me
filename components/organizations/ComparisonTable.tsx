"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const features = [
    { name: 'Learning', traditional: true, futureforge: true },
    { name: 'Projects', traditional: false, futureforge: true },
    { name: 'Hiring', traditional: false, futureforge: true },
    { name: 'Assessments', traditional: true, futureforge: true },
    { name: 'Mentorship', traditional: false, futureforge: true },
    { name: 'Analytics', traditional: 'Limited', futureforge: 'Advanced' },
    { name: 'Certificates', traditional: true, futureforge: true },
    { name: 'Community', traditional: false, futureforge: true },
    { name: 'End-to-End Solution', traditional: false, futureforge: true },
];

export default function ComparisonTable() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full glass-card rounded-2xl overflow-hidden flex flex-col relative"
        >
            <div className="bg-[#101B33] px-6 py-6 md:py-8 text-center text-white relative z-10">
                <h3 className="text-xl md:text-2xl font-bold font-display tracking-wide">
                    WHY ORGANIZATIONS CHOOSE <span className="text-transparent bg-clip-text text-gold-gradient">FUTUREFORGE</span>
                </h3>
            </div>
            
            <div className="p-4 md:p-8 overflow-x-auto relative z-10">
                <table className="w-full min-w-[500px] border-collapse">
                    <thead>
                        <tr className="border-b-2 border-slate-200">
                            <th className="py-4 px-4 text-left text-[#6B6B6B] font-sans font-medium w-1/3">Feature</th>
                            <th className="py-4 px-4 text-center text-[#6B6B6B] font-sans font-medium w-1/3">Traditional Platforms</th>
                            <th className="py-4 px-4 text-center text-[#1A1A1A] font-sans font-bold text-lg w-1/3 bg-[#FDF9F2]/60 rounded-t-xl">FutureForge</th>
                        </tr>
                    </thead>
                    <tbody>
                        {features.map((feature, idx) => (
                            <motion.tr 
                                key={feature.name}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="border-b border-slate-100 last:border-0 hover:bg-white/50 transition-colors"
                            >
                                <td className="py-4 px-4 text-[#1A1A1A] font-sans font-medium">
                                    {feature.name}
                                </td>
                                <td className="py-4 px-4 text-center">
                                    {typeof feature.traditional === 'boolean' ? (
                                        feature.traditional ? (
                                            <Check className="w-6 h-6 text-slate-400 mx-auto" />
                                        ) : (
                                            <X className="w-6 h-6 text-red-400 mx-auto" />
                                        )
                                    ) : (
                                        <span className="text-slate-500 font-sans text-sm font-medium">{feature.traditional}</span>
                                    )}
                                </td>
                                <td className={`py-4 px-4 text-center bg-[#FDF9F2]/60 ${idx === features.length - 1 ? 'rounded-b-xl' : ''}`}>
                                    {typeof feature.futureforge === 'boolean' ? (
                                        feature.futureforge ? (
                                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mx-auto shadow-sm">
                                                <Check className="w-5 h-5 text-green-600" />
                                            </div>
                                        ) : (
                                            <X className="w-6 h-6 text-red-500 mx-auto" />
                                        )
                                    ) : (
                                        <span className="text-[#C08A1E] font-sans font-semibold">{feature.futureforge}</span>
                                    )}
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <div className="absolute inset-0 pointer-events-none rounded-2xl shadow-[inset_0_0_20px_rgba(200,141,30,0.05)] z-0"></div>
        </motion.div>
    );
}

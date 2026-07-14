"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
    LayoutDashboard, Users, BookOpen, FolderKanban, 
    FileSpreadsheet, Target, FileBarChart, PieChart as PieChartIcon, 
    Award, Settings, ChevronDown, ArrowUpRight, ArrowRight
} from 'lucide-react';
import { 
    LineChart, Line, XAxis, Tooltip, ResponsiveContainer, 
    PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';

const menuItems = [
    { icon: LayoutDashboard, label: 'Overview' },
    { icon: Users, label: 'Employees' },
    { icon: BookOpen, label: 'Courses' },
    { icon: FolderKanban, label: 'Projects' },
    { icon: FileSpreadsheet, label: 'Assessments' },
    { icon: Target, label: 'Talent' },
    { icon: FileBarChart, label: 'Reports' },
    { icon: PieChartIcon, label: 'Analytics' },
    { icon: Award, label: 'Certificates' },
    { icon: Settings, label: 'Settings' },
];

const statCards = [
    { title: 'Employees', value: 1248, increase: '12%', data: [10, 20, 15, 25, 22, 30] },
    { title: 'Courses', value: 45, increase: '8%', data: [5, 12, 10, 18, 15, 22] },
    { title: 'Projects', value: 86, increase: '24%', data: [12, 18, 25, 20, 30, 35] },
    { title: 'Assessments', value: 3420, increase: '18%', data: [20, 35, 25, 45, 40, 50] },
];

const learningData = [
    { name: 'Jan', val: 30 },
    { name: 'Feb', val: 45 },
    { name: 'Mar', val: 55 },
    { name: 'Apr', val: 50 },
    { name: 'May', val: 65 },
    { name: 'Jun', val: 72 },
];

const projectData = [
    { name: 'Active', value: 40, color: '#C08A1E' },
    { name: 'In Progress', value: 30, color: '#101B33' },
    { name: 'Completed', value: 16, color: '#E5E7EB' },
];

function CountUp({ end, duration = 2 }: { end: number, duration?: number }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / (duration * 1000), 1);
            
            setCount(Math.floor(end * percentage));

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return <span>{count.toLocaleString()}</span>;
}

export default function DashboardPreview() {
    const [activeMenu, setActiveMenu] = useState('Overview');

    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full flex flex-col glass-card rounded-2xl overflow-hidden"
        >
            {/* Header */}
            <div className="bg-[#101B33] px-6 py-4 flex justify-between items-center text-white">
                <h3 className="font-semibold font-display tracking-wide text-sm md:text-base">ENTERPRISE DASHBOARD PREVIEW</h3>
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
            </div>

            <div className="flex flex-1 flex-col md:flex-row overflow-hidden bg-white/30 min-h-[600px]">
                {/* Mini Sidebar */}
                <div className="w-full md:w-20 lg:w-48 flex md:flex-col gap-1 p-3 border-r border-white/40 overflow-x-auto md:overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeMenu === item.label;
                        return (
                            <button
                                key={item.label}
                                onClick={() => setActiveMenu(item.label)}
                                className={`flex items-center gap-3 p-3 rounded-xl transition-all flex-shrink-0 focus-visible:ring-2 ring-[#C08A1E]/50 outline-none ${
                                    isActive 
                                    ? 'bg-[#C08A1E]/10 border-l-2 border-[#C08A1E] text-[#1A1A1A]' 
                                    : 'text-[#6B6B6B] hover:bg-white/50 hover:text-[#1A1A1A] border-l-2 border-transparent'
                                }`}
                                aria-label={item.label}
                            >
                                <Icon className={`w-5 h-5 ${isActive ? 'text-[#C08A1E]' : ''}`} />
                                <span className={`text-sm font-medium font-sans hidden lg:block ${isActive ? 'text-[#1A1A1A]' : ''}`}>
                                    {item.label}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6 flex flex-col gap-6 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {/* Top Bar */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <h2 className="text-2xl font-bold font-display text-[#1A1A1A]">Welcome back, TechNova Solutions 👋</h2>
                        <motion.button 
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-slate-100 text-[#1A1A1A] font-sans hover:bg-slate-50 focus-visible:ring-2 ring-[#C08A1E]/50 transition-colors"
                        >
                            <span className="text-sm font-medium">This Month</span>
                            <ChevronDown className="w-4 h-4 text-[#6B6B6B]" />
                        </motion.button>
                    </div>

                    {/* Stat Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {statCards.map((stat, i) => (
                            <div key={i} className="bg-white/80 p-5 rounded-xl border border-white shadow-sm flex flex-col gap-3">
                                <h4 className="text-sm text-[#6B6B6B] font-medium font-sans">{stat.title}</h4>
                                <div className="flex items-end justify-between">
                                    <span className="text-2xl font-bold font-sans tabular-nums text-[#1A1A1A]">
                                        <CountUp end={stat.value} />
                                    </span>
                                    <div className="flex items-center text-green-600 text-xs font-semibold font-sans tabular-nums bg-green-50 px-2 py-1 rounded-md">
                                        <ArrowUpRight className="w-3 h-3 mr-1" />
                                        {stat.increase}
                                    </div>
                                </div>
                                <div className="h-8 mt-2 w-full opacity-60">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={stat.data.map((v, idx) => ({ val: v, name: idx }))}>
                                            <defs>
                                                <linearGradient id={`color${i}`} x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#C08A1E" stopOpacity={0.3}/>
                                                    <stop offset="95%" stopColor="#C08A1E" stopOpacity={0}/>
                                                </linearGradient>
                                            </defs>
                                            <Area type="monotone" dataKey="val" stroke="#C08A1E" fillOpacity={1} fill={`url(#color${i})`} strokeWidth={2} />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 3 Card Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-2">
                        {/* Learning Progress */}
                        <div className="bg-white/80 p-5 rounded-xl border border-white shadow-sm flex flex-col">
                            <div className="flex justify-between items-center mb-4">
                                <h4 className="font-semibold font-display text-[#1A1A1A]">Learning Progress</h4>
                                <span className="text-[#C08A1E] font-bold font-sans tabular-nums">72%</span>
                            </div>
                            <div className="h-48 w-full mt-auto">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={learningData} margin={{ top: 5, right: 5, bottom: 5, left: -20 }}>
                                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#6B6B6B'}} />
                                        <Tooltip 
                                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                            labelStyle={{ color: '#6B6B6B', fontSize: '12px' }}
                                        />
                                        <Line type="monotone" dataKey="val" stroke="#C08A1E" strokeWidth={3} dot={{r: 4, fill: '#101B33', strokeWidth: 0}} activeDot={{r: 6}} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Projects Overview */}
                        <div className="bg-white/80 p-5 rounded-xl border border-white shadow-sm flex flex-col items-center relative">
                            <h4 className="font-semibold font-display text-[#1A1A1A] w-full mb-2">Projects Overview</h4>
                            <div className="h-40 w-full relative flex items-center justify-center">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={projectData}
                                            innerRadius={50}
                                            outerRadius={70}
                                            paddingAngle={2}
                                            dataKey="value"
                                            stroke="none"
                                        >
                                            {projectData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>
                                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-2">
                                    <span className="text-xl font-bold font-sans tabular-nums text-[#1A1A1A]">86</span>
                                    <span className="text-[10px] text-[#6B6B6B] font-medium font-sans uppercase tracking-wider text-center leading-tight">Total<br/>Projects</span>
                                </div>
                            </div>
                            <div className="flex justify-center gap-4 mt-auto pt-4 w-full flex-wrap">
                                {projectData.map((item, i) => (
                                    <div key={i} className="flex items-center gap-1.5 text-xs">
                                        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                                        <span className="text-[#6B6B6B] font-sans whitespace-nowrap">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Talent Pipeline */}
                        <div className="bg-white/80 p-5 rounded-xl border border-white shadow-sm flex flex-col">
                            <h4 className="font-semibold font-display text-[#1A1A1A] mb-6">Talent Pipeline</h4>
                            <div className="flex flex-col gap-6 mt-auto">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-[#C08A1E]/10 flex items-center justify-center text-[#C08A1E]">
                                            <Users className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium font-sans text-[#1A1A1A]">Applications</p>
                                            <p className="text-xs font-sans text-[#6B6B6B]">Last 30 days</p>
                                        </div>
                                    </div>
                                    <span className="font-bold font-sans tabular-nums text-[#1A1A1A]">428</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-[#101B33]/10 flex items-center justify-center text-[#101B33]">
                                            <Target className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium font-sans text-[#1A1A1A]">Shortlisted</p>
                                            <p className="text-xs font-sans text-[#6B6B6B]">Interviews scheduled</p>
                                        </div>
                                    </div>
                                    <span className="font-bold font-sans tabular-nums text-[#1A1A1A]">64</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                                            <Award className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium font-sans text-[#1A1A1A]">Hired</p>
                                            <p className="text-xs font-sans text-[#6B6B6B]">Offers accepted</p>
                                        </div>
                                    </div>
                                    <span className="font-bold font-sans tabular-nums text-[#1A1A1A]">12</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 flex justify-end">
                        <motion.button 
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex items-center gap-2 font-semibold font-sans transition-all focus-visible:ring-2 ring-[#C08A1E]/50 rounded-lg px-2 py-1 outline-none text-transparent bg-clip-text text-gold-gradient"
                        >
                            View Full Dashboard <ArrowRight className="w-4 h-4 text-[#C08A1E]" />
                        </motion.button>
                    </div>
                </div>
            </div>

        </motion.div>
    );
}

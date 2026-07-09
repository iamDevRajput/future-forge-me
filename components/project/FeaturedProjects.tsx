"use client";

import React from "react";
import ProjectCard, { ProjectData } from "./ProjectCard";

const mockProjects: ProjectData[] = [
  {
    id: "1",
    title: "Startup CRM Analytics Dashboard",
    description:
      "Build a customer relationships dashboard using Next.js, ChartJS, and Prisma. Learn data aggregation.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop",
    skills: ["Next.js", "ChartJS", "Prisma", "Tailwind"],
    budget: "1,200",
    duration: "4 Weeks",
    difficulty: "Intermediate",
    isFeatured: true,
  },
  {
    id: "2",
    title: "AI-Powered PDF Summarizer",
    description:
      "Develop a file summarizer utilizing OpenAI API and langchain. Implement drag-and-drop file upload.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop",
    skills: ["React", "OpenAI", "Langchain", "NodeJS"],
    budget: "2,000",
    duration: "6 Weeks",
    difficulty: "Advanced",
    isFeatured: true,
  },
  {
    id: "3",
    title: "Web3 Micro-Donation Protocol",
    description:
      "Write Ethereum smart contracts to support automatic content creator tipping on the Arbitrum chain.",
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=400&auto=format&fit=crop",
    skills: ["Solidity", "Hardhat", "EthersJS"],
    budget: "1,500",
    duration: "3 Weeks",
    difficulty: "Advanced",
    isFeatured: true,
  },
  {
    id: "4",
    title: "E-Commerce Recommendation System",
    description:
      "Implement collaborative filtering and content-based recommendation logic for product catalogs.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop",
    skills: ["Python", "Pandas", "Scikit-Learn"],
    budget: "800",
    duration: "2 Weeks",
    difficulty: "Intermediate",
    isFeatured: false,
  },
  {
    id: "5",
    title: "Collaborative Markdown Editor",
    description:
      "Create a rich text workspace using CRDTs (Yjs) and Socket.io for synchronous workspace editing.",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=400&auto=format&fit=crop",
    skills: ["React", "Socket.io", "Yjs", "WebRTC"],
    budget: "1,600",
    duration: "5 Weeks",
    difficulty: "Intermediate",
    isFeatured: false,
  },
  {
    id: "6",
    title: "Minimalist Portfolio Builder",
    description:
      "Design and build a clean, static portfolio generator for creatives featuring instant Vercel deployments.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=400&auto=format&fit=crop",
    skills: ["TypeScript", "TailwindCSS", "Vite"],
    budget: "500",
    duration: "1 Week",
    difficulty: "Beginner",
    isFeatured: false,
  },
];

export default function FeaturedProjects() {
  const handleApply = (id: string) => {
    console.log("Applying to project ID:", id);
  };

  return (
    <section className="relative bg-white py-12 md:py-16 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 select-none">
          <div className="max-w-xl text-left">
            <span className="inline-flex rounded-full bg-[#2563EB]/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
              Featured Projects
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight">
              Explore Live Opportunities
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-500 font-medium">
              Work with active teams, receive expert mentorship, build production experience, and earn verified resume achievements.
            </p>
          </div>
          
          <button className="mt-4 md:mt-0 inline-flex items-center justify-center rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-97 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-sm shadow-blue-500/10 cursor-pointer">
            View All Projects
          </button>
        </div>

        {/* Project Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onApply={handleApply}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

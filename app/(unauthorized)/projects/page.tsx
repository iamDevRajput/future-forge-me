"use client";

import React from "react";
import Hero from "@/components/project/Hero";
import CategorySection from "@/components/project/CategorySection";
import FilterBar from "@/components/project/FilterBar";
import FeaturedProjects from "@/components/project/FeaturedProjects";
import OrganizationSection from "@/components/project/OrganizationSection";
import Benefits from "@/components/project/Benefits";
import HowItWorks from "@/components/project/HowItWorks";
import Stats from "@/components/project/Stats";
import CTA from "@/components/project/CTA";

export default function ProjectDiscoveryPage() {
  const handleApplyFilters = (filters: any) => {
    console.log("Applying filters:", filters);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans antialiased text-[#475569]">
      {/* SECTION 1 — HERO */}
      <Hero />

      {/* SECTION 2 — PROJECT CATEGORIES */}
      <CategorySection />

      {/* SECTION 3 & 4 — FILTER BAR & FEATURED PROJECTS */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-8">
          <FilterBar onApplyFilters={handleApplyFilters} />
          <FeaturedProjects />
        </div>
      </section>

      {/* SECTION 5 — TOP ORGANIZATIONS */}
      <OrganizationSection />

      {/* SECTION 6 — BENEFITS */}
      <Benefits />

      {/* SECTION 7 — HOW IT WORKS */}
      <HowItWorks />

      {/* SECTION 8 — STATS */}
      <Stats />

      {/* SECTION 9 — CTA */}
      <CTA />
    </div>
  );
}

"use client";

import React from "react";
import HeroOrgHub from "@/components/organizations/HeroOrgHub";
import CapabilityRow from "@/components/organizations/CapabilityRow";
import SolutionsTabs from "@/components/organizations/SolutionsTabs";
import OrgJourneyStepper from "@/components/organizations/OrgJourneyStepper";
import DashboardPreview from "@/components/organizations/DashboardPreview";
import ComparisonTable from "@/components/organizations/ComparisonTable";
import CaseStudiesRow from "@/components/organizations/CaseStudiesRow";
import TrustedByImpact from "@/components/organizations/TrustedByImpact";
import EnterpriseFeaturesGrid from "@/components/organizations/EnterpriseFeaturesGrid";
import CTABanner from "@/components/organizations/CTABanner";
import Footer from "@/components/explore/Footer"; // Reusing explore footer

export default function OrganizationsPage() {
  return (
    <div className="min-h-screen bg-[#FDF9F2] font-sans antialiased text-[#475569]">
      <HeroOrgHub />
      <CapabilityRow />
      <SolutionsTabs />
      <OrgJourneyStepper />
      
      {/* Dashboard & Comparison - Split into two columns if needed, or full-width depending on the components' internals */}
      <section className="bg-[#FDF9F2] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7 xl:col-span-8">
              <DashboardPreview />
            </div>
            <div className="lg:col-span-5 xl:col-span-4">
              <ComparisonTable />
            </div>
          </div>
        </div>
      </section>

      <CaseStudiesRow />
      <TrustedByImpact />
      <EnterpriseFeaturesGrid />
      <CTABanner />
      <Footer />
    </div>
  );
}

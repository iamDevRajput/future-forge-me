import React from "react";
import Footer from "@/components/explore/Footer";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#FDF9F2] font-sans antialiased flex flex-col">
      <main className="flex-1 flex items-center justify-center py-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-[#1A1A1A] tracking-tight mb-4">Projects</h1>
          <p className="text-lg text-[#6B6B6B]">Build real-world projects to validate your skills. Coming soon.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

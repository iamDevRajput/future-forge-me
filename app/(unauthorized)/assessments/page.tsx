import React from "react";
import Footer from "@/components/explore/Footer";

export default function AssessmentsPage() {
  return (
    <div className="min-h-screen bg-[#FDF9F2] font-sans antialiased flex flex-col">
      <main className="flex-1 flex items-center justify-center py-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-[#1A1A1A] tracking-tight mb-4">Assessments</h1>
          <p className="text-lg text-[#6B6B6B]">Test your knowledge with rigorous assessments. Coming soon.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

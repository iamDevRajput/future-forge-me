"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, Users, BarChart3, BookOpen, 
  Briefcase, CheckSquare, Search, Webhook, 
  Award, HeadphonesIcon 
} from "lucide-react";

const features = [
  { id: 1, icon: ShieldCheck, title: "Private Workspace", desc: "Secure environments tailored to your organization." },
  { id: 2, icon: Users, title: "Role Management", desc: "Granular access control and custom user roles." },
  { id: 3, icon: BarChart3, title: "Organization Analytics", desc: "Deep insights into learning and performance metrics." },
  { id: 4, icon: BookOpen, title: "Internal Courses", desc: "Host and distribute proprietary training materials." },
  { id: 5, icon: Briefcase, title: "Project Management", desc: "Track progress and collaborate on internal initiatives." },
  { id: 6, icon: CheckSquare, title: "Employee Assessments", desc: "Evaluate skills and track growth effectively." },
  { id: 7, icon: Search, title: "Recruitment Suite", desc: "Source and assess top talent directly." },
  { id: 8, icon: Webhook, title: "API Integration", desc: "Connect seamlessly with your existing HR tools." },
  { id: 9, icon: Award, title: "Certificates", desc: "Issue branded credentials for completed paths." },
  { id: 10, icon: HeadphonesIcon, title: "Support & Success", desc: "Dedicated account managers and priority support." },
];

export default function EnterpriseFeaturesGrid() {
  return (
    <section className="py-12 md:py-24 bg-[#FDF9F2] font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-[#C08A1E] uppercase mb-3 font-display">
            Scale with Confidence
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] font-display">
            Powerful Enterprise Features
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-card rounded-2xl p-6 flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#D9A441]/10 to-[#B8791A]/10 flex items-center justify-center text-[#C08A1E] mb-5 group-hover:scale-110 group-hover:bg-[#C08A1E]/10 transition-all duration-300">
                <feature.icon className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-[#1A1A1A] mb-2 font-display">{feature.title}</h4>
              <p className="text-sm text-[#6B6B6B] leading-relaxed font-sans">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

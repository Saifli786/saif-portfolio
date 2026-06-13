"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import SectionTitle from "@/components/ui/SectionTitle";
import { Brain, Eye, BarChart3, Globe } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain size={28} />,
  Eye: <Eye size={28} />,
  BarChart3: <BarChart3 size={28} />,
  Globe: <Globe size={28} />,
};

export default function Services() {
  return (
    <section id="services" className="section" style={{ background: "var(--bg-void)" }}>
      <div className="container">
        <SectionTitle
          eyebrow="Services"
          title="What I Offer"
          subtitle="From research to deployment — end-to-end AI/ML development"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6 relative overflow-hidden group cursor-default"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-crimson-800/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 rounded-xl bg-crimson-950/50 border border-crimson-900/30 flex items-center justify-center text-crimson-500 mb-5 group-hover:shadow-crimson transition-all">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-[15px] font-bold text-white/90 mb-2">{service.title}</h3>
              <p className="text-xs text-white/35 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

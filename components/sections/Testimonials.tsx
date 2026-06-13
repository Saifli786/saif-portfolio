"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section" style={{ background: "linear-gradient(180deg, var(--bg-void) 0%, var(--bg-surface) 100%)" }}>
      <div className="container">
        <SectionTitle
          eyebrow="Testimonials"
          title="What People Say"
          subtitle="Feedback from mentors, professors, and collaborators"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className={`glass rounded-2xl p-6 relative overflow-hidden ${t.highlight ? "border-crimson-900/40" : ""}`}
              style={t.highlight ? { boxShadow: "0 0 40px rgba(220,38,38,0.08)" } : {}}
            >
              {t.highlight && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-crimson-600 to-transparent" />
              )}
              <Quote size={24} className="text-crimson-700/60 mb-4" />
              <p className="text-[13px] text-white/50 leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-crimson-900/30">
                  <Image src={t.image} alt={t.name} width={40} height={40} className="object-cover" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white/80">{t.name}</div>
                  <div className="text-[11px] text-white/30">{t.position}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

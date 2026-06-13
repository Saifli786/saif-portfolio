"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import SectionTitle from "@/components/ui/SectionTitle";
import { useRef, useEffect, useState } from "react";

function SkillBar({ name, percentage, detail, delay }: {
  name: string; percentage: number; detail: string; delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setFilled(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-white/80">{name}</span>
        <span className="text-xs font-mono text-crimson-500 font-bold">{percentage}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{ width: filled ? `${percentage}%` : "0%", transitionDelay: `${delay}s` }}
        />
      </div>
      <div className="mt-1.5 text-[11px] text-white/25 overflow-hidden max-h-0 group-hover:max-h-8 transition-all duration-300">
        {detail}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="section"
      style={{ background: "linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-void) 100%)" }}
    >
      <div className="container">
        <SectionTitle
          eyebrow="Technical Skills"
          title="My Expertise"
          subtitle="A curated overview of the technologies I work with daily"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
              className="glass rounded-2xl p-8 relative overflow-hidden"
            >
              {/* Card accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-crimson-700 to-transparent" />

              <h3 className="text-[11px] text-crimson-500 uppercase tracking-widest font-bold mb-6">{cat.title}</h3>

              <div className="space-y-5">
                {cat.skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                    detail={skill.detail}
                    delay={catIndex * 0.1 + i * 0.07}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 glass rounded-2xl p-6"
        >
          <div className="text-[11px] text-white/30 uppercase tracking-widest mb-4 text-center">Also familiar with</div>
          <div className="flex flex-wrap gap-2 justify-center">
            {["Git", "GitHub", "VS Code", "Jupyter", "Google Colab", "SQL", "Linux", "REST APIs", "JSON", "XML", "HTML/CSS"].map(tech => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-medium rounded-full border border-white/6 text-white/40 hover:border-crimson-800/40 hover:text-white/70 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

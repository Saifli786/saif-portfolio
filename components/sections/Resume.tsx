"use client";

import { motion } from "framer-motion";
import { resumeData, personalInfo } from "@/lib/data";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import { Briefcase, GraduationCap, Award, Download, MapPin, Mail, Phone } from "lucide-react";

function TimelineItem({ title, subtitle, period, items, icon, delay }: {
  title: string; subtitle?: string; period: string;
  items?: string[]; icon: React.ReactNode; delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
      className="relative pl-6 pb-8 last:pb-0 border-l border-white/6 hover:border-crimson-900/60 transition-colors group"
    >
      {/* Dot */}
      <div
        className="absolute left-0 top-1 w-3 h-3 rounded-full -translate-x-1/2 border-2 border-crimson-700 group-hover:border-crimson-500 transition-colors"
        style={{ background: "var(--bg-void)", boxShadow: "0 0 12px rgba(220,38,38,0.2)" }}
      />

      <div className="flex items-center gap-2 mb-1">
        <span className="text-crimson-600">{icon}</span>
        <span className="text-[11px] text-crimson-600 font-mono uppercase tracking-wider font-semibold">{period}</span>
      </div>
      <h4 className="text-[15px] font-bold text-white/90 mb-0.5">{title}</h4>
      {subtitle && <p className="text-sm text-white/40 mb-2">{subtitle}</p>}
      {items && (
        <ul className="space-y-1">
          {items.map((item, i) => (
            <li key={i} className="flex gap-2 text-[13px] text-white/35">
              <span className="text-crimson-700 mt-0.5 flex-shrink-0">›</span>
              {item}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

export default function Resume() {
  return (
    <section
      id="resume"
      className="section"
      style={{ background: "linear-gradient(180deg, var(--bg-void) 0%, var(--bg-surface) 100%)" }}
    >
      <div className="container">
        <SectionTitle
          eyebrow="Resume"
          title="My Journey"
          subtitle="Education, experience, and certifications that shaped my path"
        />

        <div className="grid grid-cols-1 xl:grid-cols-[300px_1fr] gap-8 mt-16">

          {/* Sidebar Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass rounded-2xl p-6 relative overflow-hidden h-fit"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-crimson-600 to-transparent" />

            {/* Profile */}
            <div className="text-center mb-6">
              <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-crimson-800/50"
                style={{ boxShadow: "0 0 30px rgba(220,38,38,0.15)" }}>
                <Image src="/assets/img/profile-img.jpg" alt={personalInfo.name} width={96} height={96} className="object-cover" />
              </div>
              <div className="text-sm font-bold text-white/90">{personalInfo.name}</div>
              <div className="text-[11px] text-crimson-500 mt-0.5">{personalInfo.title}</div>
            </div>

            {/* Summary */}
            <div className="mb-5">
              <div className="text-[10px] text-crimson-600 uppercase tracking-widest font-bold mb-2">Summary</div>
              <p className="text-xs text-white/40 leading-relaxed">{resumeData.summary}</p>
            </div>

            {/* Contact */}
            <div className="mb-5">
              <div className="text-[10px] text-crimson-600 uppercase tracking-widest font-bold mb-2">Contact</div>
              <div className="space-y-2">
                {[
                  { icon: <MapPin size={12} />, text: personalInfo.location },
                  { icon: <Mail size={12} />, text: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { icon: <Phone size={12} />, text: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-white/35">
                    <span className="text-crimson-700 flex-shrink-0 mt-0.5">{item.icon}</span>
                    {item.href
                      ? <a href={item.href} className="hover:text-crimson-400 transition-colors break-all">{item.text}</a>
                      : <span>{item.text}</span>
                    }
                  </div>
                ))}
              </div>
            </div>

            {/* Tech skills */}
            <div className="mb-6">
              <div className="text-[10px] text-crimson-600 uppercase tracking-widest font-bold mb-2">Technologies</div>
              <div className="flex flex-wrap gap-1.5">
                {resumeData.technicalSkills.map(s => (
                  <span key={s} className="px-2 py-0.5 text-[10px] rounded-full border border-white/6 text-white/40 hover:border-crimson-800/40 hover:text-white/60 transition-all">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-xs font-semibold text-white transition-all"
              style={{ background: "linear-gradient(135deg, #dc2626, #991b1b)", boxShadow: "0 0 20px rgba(220,38,38,0.2)" }}
            >
              <Download size={13} />
              Download Resume
            </a>
          </motion.div>

          {/* Timeline */}
          <div className="space-y-10">
            {/* Experience */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Briefcase size={16} className="text-crimson-500" />
                <h3 className="text-sm font-bold text-white/70 uppercase tracking-wider">Experience</h3>
              </div>
              {resumeData.experience.map((exp, i) => (
                <TimelineItem
                  key={i}
                  title={exp.role}
                  subtitle={`${exp.company} · ${exp.location}`}
                  period={exp.period}
                  items={exp.points}
                  icon={<Briefcase size={12} />}
                  delay={i * 0.1}
                />
              ))}
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap size={16} className="text-crimson-500" />
                <h3 className="text-sm font-bold text-white/70 uppercase tracking-wider">Education</h3>
              </div>
              {resumeData.education.map((edu, i) => (
                <TimelineItem
                  key={i}
                  title={edu.degree}
                  subtitle={`${edu.institution} · ${edu.detail}`}
                  period={edu.period}
                  icon={<GraduationCap size={12} />}
                  delay={i * 0.1}
                />
              ))}
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Award size={16} className="text-crimson-500" />
                <h3 className="text-sm font-bold text-white/70 uppercase tracking-wider">Certifications</h3>
              </div>
              {resumeData.certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-xl p-4 mb-3 flex items-center gap-4 hover:border-crimson-900/40 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-crimson-950/50 border border-crimson-900/30 flex items-center justify-center flex-shrink-0">
                    <Award size={18} className="text-crimson-500" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white/85 leading-snug">{cert.name}</div>
                    <div className="text-xs text-white/35 mt-0.5">{cert.issuer} · {cert.year}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Mail, Phone, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { personalInfo, socialLinks } from "@/lib/data";
import SectionTitle from "@/components/ui/SectionTitle";

const socialIconMap: Record<string, React.ReactNode> = {
  Github:   <GithubIcon size={16} />,
  Linkedin: <LinkedinIcon size={16} />,
};

function StatCard({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="text-center"
    >
      <div className="text-3xl font-black text-crimson-500 font-mono tracking-tight">{value}</div>
      <div className="text-[11px] text-white/30 uppercase tracking-widest mt-1">{label}</div>
    </motion.div>
  );
}

export default function About() {

  return (
    <section id="about" className="section" style={{ background: "linear-gradient(180deg, var(--bg-void) 0%, var(--bg-surface) 100%)" }}>
      <div className="container">
        <SectionTitle
          eyebrow="About Me"
          title="Building the future with AI"
          subtitle="A passionate AI/ML engineer turning data into intelligent solutions"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 mt-16">

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="glass rounded-2xl p-6 text-center relative overflow-hidden">
              {/* Top crimson line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-crimson-600 to-transparent" />

              {/* Profile image */}
              <div className="w-32 h-32 mx-auto mb-5 relative">
                <div className="absolute inset-0 rounded-full"
                  style={{ background: "conic-gradient(from 0deg, #dc2626, #450a0a, #dc2626)", padding: "2px" }}>
                  <div className="w-full h-full rounded-full overflow-hidden bg-black">
                    <Image
                      src="/assets/img/profile-img.jpg"
                      alt={personalInfo.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white/90 mb-0.5">{personalInfo.name}</h3>
              <p className="text-sm text-crimson-500 font-medium mb-5">{personalInfo.title}</p>

              {/* Contact items */}
              <div className="space-y-2.5 text-left">
                {[
                  { icon: <MapPin size={14} />, label: personalInfo.location },
                  { icon: <Mail size={14} />, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { icon: <Phone size={14} />, label: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-white/40 hover:text-white/70 transition-colors">
                    <span className="text-crimson-600 flex-shrink-0">{item.icon}</span>
                    {item.href ? (
                      <a href={item.href} className="hover:text-crimson-400 transition-colors truncate">{item.label}</a>
                    ) : (
                      <span className="truncate">{item.label}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="flex justify-center gap-2 mt-5">
                {socialLinks.map(link => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/[0.04] border border-white/6 text-white/40 hover:text-crimson-400 hover:border-crimson-800/40 transition-all"
                  >
                    {link.image
                      ? <Image src={link.image} alt={link.name} width={16} height={16} className="opacity-60" />
                      : socialIconMap[link.icon]
                    }
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Bio */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white/90 mb-4">
                AI/ML Engineer & Researcher
              </h2>
              {personalInfo.bio.map((para, i) => (
                <p key={i} className="text-white/50 leading-relaxed mb-3 text-[15px]">{para}</p>
              ))}
            </div>

            {/* Stats */}
            <div className="glass rounded-xl p-6 mb-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {personalInfo.stats.map((stat, i) => (
                  <StatCard key={i} value={stat.value} label={stat.label} delay={i * 0.1} />
                ))}
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {personalInfo.details.map((item, i) => (
                <div key={i} className="glass rounded-lg p-4">
                  <div className="text-[10px] text-crimson-600 uppercase tracking-widest font-semibold mb-1">
                    {item.label}
                  </div>
                  <div className="text-sm text-white/80 font-medium leading-snug">{item.value}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #dc2626, #991b1b)",
                  boxShadow: "0 0 24px rgba(220,38,38,0.2)"
                }}
              >
                <Download size={14} />
                Download Resume
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white/60 glass hover:text-white hover:border-crimson-800/40 transition-all duration-300"
              >
                Let&apos;s Talk
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

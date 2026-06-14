"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Award, FileText, Download, ExternalLink, ArrowRight } from "lucide-react";
import { achievements } from "@/lib/data";
import SectionTitle from "@/components/ui/SectionTitle";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section"
      style={{ background: "linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-void) 100%)" }}
    >
      <div className="container">
        <SectionTitle
          eyebrow="Achievements"
          title="Certifications & Documents"
          subtitle="Official credentials and academic records validating my technical expertise"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-16"
        >
          {achievements.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="glass rounded-2xl overflow-hidden group hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              {/* Certificate preview */}
              {item.image ? (
                <div className="relative h-[200px] bg-black/50 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              ) : (
                <div className="h-[200px] bg-crimson-950/30 border-b border-crimson-900/20 flex items-center justify-center">
                  <FileText size={44} className="text-crimson-700/40" />
                </div>
              )}

              {/* Card body */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] text-crimson-500 uppercase tracking-widest font-bold">
                    {item.issuer}
                  </span>
                  <span className="text-[10px] text-white/20">·</span>
                  <span className="text-[10px] text-white/20">{item.year}</span>
                </div>
                <h3 className="text-sm font-semibold text-white/85 leading-snug mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-xs text-white/30 leading-relaxed mb-4 flex-1">
                  {item.description}
                </p>

                <div className="flex gap-2 mt-auto">
                  {item.file && (
                    <a
                      href={item.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-white transition-all"
                      style={{
                        background: "linear-gradient(135deg, #dc2626, #991b1b)",
                        boxShadow: "0 4px 12px rgba(220,38,38,0.2)",
                      }}
                    >
                      <Download size={12} />
                      Download
                    </a>
                  )}
                  {item.image && (
                    <a
                      href={item.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-white/50 glass hover:text-white transition-all"
                    >
                      <ExternalLink size={12} />
                      View
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View full page button */}
        <div className="flex justify-center mt-12">
          <Link
            href="/achievements"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white/70 glass hover:text-white hover:border-crimson-800/40 transition-all duration-300"
          >
            Open Dedicated Achievements Page
            <ArrowRight size={14} className="text-crimson-500" />
          </Link>
        </div>
      </div>
    </section>
  );
}

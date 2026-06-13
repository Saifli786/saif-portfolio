import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { achievements } from "@/lib/data";
import { ArrowLeft, FileText, Download, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Achievements & Certifications — Md Saif Ali",
  description: "Professional certifications and achievement documents of Md Saif Ali — AI/ML Engineer. Oracle Cloud, NIELIT, academic records and more.",
};

export default function AchievementsPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-void)" }}>
      {/* Header */}
      <header
        className="border-b border-white/5 sticky top-0 z-50"
        style={{ background: "rgba(8,8,8,0.9)", backdropFilter: "blur(20px)" }}
      >
        <div className="container flex items-center justify-between h-14">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
          <div className="text-sm font-mono text-white/30">
            Saif<span className="text-crimson-600">.</span>dev / achievements
          </div>
        </div>
      </header>

      {/* Page title */}
      <div className="container pt-16 pb-8">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-4 h-px bg-crimson-600" />
          <span className="text-[11px] text-crimson-500 uppercase tracking-[0.2em] font-bold">Documents</span>
          <span className="w-4 h-px bg-crimson-600" />
        </div>
        <h1 className="text-[clamp(32px,5vw,56px)] font-black tracking-[-0.03em] text-white/90 mb-3">
          Achievements & Certifications
        </h1>
        <p className="text-sm text-white/35 max-w-lg">
          Official certificates, academic records, and professional certifications. All documents are downloadable.
        </p>
      </div>

      {/* Grid */}
      <div className="container pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {achievements.map((item, i) => (
            <div
              key={item.id}
              className="glass rounded-2xl overflow-hidden group hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {/* Certificate preview */}
              {item.image ? (
                <div className="relative h-[220px] bg-black/50 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              ) : (
                <div className="h-[220px] bg-crimson-950/30 border-b border-crimson-900/20 flex items-center justify-center">
                  <FileText size={48} className="text-crimson-700/40" />
                </div>
              )}

              {/* Card body */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] text-crimson-500 uppercase tracking-widest font-bold">{item.issuer}</span>
                  <span className="text-[10px] text-white/20">·</span>
                  <span className="text-[10px] text-white/20">{item.year}</span>
                </div>
                <h3 className="text-sm font-semibold text-white/85 leading-snug mb-2">{item.title}</h3>
                <p className="text-xs text-white/30 leading-relaxed mb-4">{item.description}</p>

                <div className="flex gap-2">
                  {item.file && (
                    <a
                      href={item.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white transition-all"
                      style={{
                        background: "linear-gradient(135deg, #dc2626, #991b1b)",
                        boxShadow: "0 4px 12px rgba(220,38,38,0.2)"
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
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white/50 glass hover:text-white transition-all"
                    >
                      <ExternalLink size={12} />
                      View
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

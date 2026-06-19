"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Image from "next/image";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { projects, portfolioFilters } from "@/lib/data";
import SectionTitle from "@/components/ui/SectionTitle";

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="glass rounded-2xl overflow-hidden relative group"
      style={{
        boxShadow: hovered
          ? `0 24px 60px rgba(0,0,0,0.5), 0 0 40px ${project.color}15`
          : "var(--shadow-glass)",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        transition: "box-shadow 0.4s ease, transform 0.4s ease"
      }}
    >
      {/* Top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
      />

      {/* Project image */}
      <div className="relative h-[260px] overflow-hidden bg-black/40">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        {/* Overlay content - always visible on mobile/tablet, hover-animated on desktop */}
        <div
          className="absolute inset-0 flex items-end p-5 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-all duration-300 opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0"
        >
          <div className="w-full">
            {/* Tech badges */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.techStack.map(tech => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-[10px] font-bold rounded-full uppercase tracking-wider"
                  style={{
                    background: `${project.color}18`,
                    border: `1px solid ${project.color}30`,
                    color: project.color
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
            {/* Action buttons */}
            <div className="flex gap-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white transition-all hover:bg-white/10"
                style={{ background: "rgba(0,0,0,0.7)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(10px)" }}
              >
                <GithubIcon size={13} /> GitHub
              </a>
              {"demo" in project && project.demo ? (
                <>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white transition-all hover:opacity-90"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)`,
                      boxShadow: `0 4px 16px ${project.color}30`
                    }}
                  >
                    <ExternalLink size={13} /> Demo
                  </a>
                  {project.docs && (
                    <a
                      href={project.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white transition-all hover:bg-white/10"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        backdropFilter: "blur(10px)"
                      }}
                    >
                      Docs
                    </a>
                  )}
                </>
              ) : (
                project.docs && (
                  <a
                    href={project.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white transition-all hover:opacity-90"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)`,
                      boxShadow: `0 4px 16px ${project.color}30`
                    }}
                  >
                    <ExternalLink size={13} /> Docs
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <div className="text-[10px] uppercase tracking-widest font-bold mb-1" style={{ color: project.color }}>
              {project.category[0].replace("-", " ")}
            </div>
            <h3 className="text-[15px] font-bold text-white/90 leading-snug">{project.title}</h3>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-white/[0.04] border border-white/6 text-white/30 hover:text-white hover:border-crimson-800/40 transition-all"
          >
            <ArrowUpRight size={14} />
          </a>
        </div>
        <p className="text-xs text-white/35 leading-relaxed line-clamp-2">{project.description}</p>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = projects.filter(p =>
    activeFilter === "all" || p.category.includes(activeFilter)
  );

  return (
    <section
      id="portfolio"
      className="section"
      style={{ background: "linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-void) 100%)" }}
    >
      <div className="container">
        <SectionTitle
          eyebrow="Project"
          title="Featured Projects"
          subtitle="AI and ML projects that demonstrate real-world problem solving"
        />

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 justify-center mt-12 mb-10"
        >
          {portfolioFilters.map(filter => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`filter-tab ${activeFilter === filter.value ? "active" : ""}`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <LayoutGroup>
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-white/30 text-sm">
            No projects in this category yet.
          </div>
        )}
      </div>
    </section>
  );
}

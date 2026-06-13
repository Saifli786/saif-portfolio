"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionTitle({ eyebrow, title, subtitle, align = "center", className }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "",
        className
      )}
    >
      <div className="inline-flex items-center gap-2 mb-4">
        <span className="w-4 h-px bg-crimson-600" />
        <span className="text-[11px] text-crimson-500 uppercase tracking-[0.2em] font-bold">{eyebrow}</span>
        <span className="w-4 h-px bg-crimson-600" />
      </div>
      <h2 className="text-[clamp(28px,4vw,44px)] font-black tracking-[-0.03em] text-white/90 leading-tight mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm text-white/35 leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}

"use client";

import { Suspense, lazy } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ArrowDown, MessageCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { personalInfo, socialLinks, typedRoles } from "@/lib/data";
import { useEffect, useState } from "react";

// Dynamically import Three.js scene to avoid SSR issues
const HeroScene = lazy(() => import("@/components/three/HeroScene"));

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

const socialIconMap: Record<string, React.ReactNode> = {
  Github:   <GithubIcon size={18} />,
  Linkedin: <LinkedinIcon size={18} />,
};

function TypedText({ items }: { items: string[] }) {
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [display, setDisplay] = useState("");

  useEffect(() => {
    const current = items[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (charIndex < current.length) {
        timeout = setTimeout(() => {
          setDisplay(current.slice(0, charIndex + 1));
          setCharIndex(c => c + 1);
        }, 75);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplay(current.slice(0, charIndex - 1));
          setCharIndex(c => c - 1);
        }, 40);
      } else {
        timeout = setTimeout(() => {
          setDeleting(false);
          setIndex(i => (i + 1) % items.length);
        }, 300);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index, items]);

  return (
    <span className="text-crimson-500 font-semibold">
      {display}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function Hero() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsClient(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 70% 40%, rgba(220,38,38,0.05) 0%, transparent 60%), var(--bg-void)" }}
    >
      {/* Three.js Background */}
      <div className="absolute inset-0 z-0 three-canvas">
        {isClient && (
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        )}
      </div>

      {/* Ambient gradient overlays */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #dc2626 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, #991b1b 0%, transparent 70%)" }}
        />
      </div>

      <div className="container relative z-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-center">

          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-crimson-800/40 bg-crimson-950/30 text-crimson-400">
                <span className="w-1.5 h-1.5 rounded-full bg-crimson-500 animate-pulse" />
                Available for Opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="font-playfair text-[clamp(48px,8vw,88px)] tracking-tight leading-none mb-4 select-none"
            >
              <span 
                className="inline-serif text-white/90 font-light italic mr-4" 
                data-text="Md"
                style={{ 
                  "--outline-color": "var(--inline-serif-outer-light)", 
                  "--inline-color": "var(--inline-serif-inner)" 
                } as React.CSSProperties}
              >
                Md
              </span>
              <span 
                className="inline-serif text-gradient-crimson font-bold italic" 
                data-text="Saif"
                style={{ 
                  "--outline-color": "var(--crimson)", 
                  "--inline-color": "var(--inline-serif-inner)" 
                } as React.CSSProperties}
              >
                Saif
              </span>
              <br />
              <span 
                className="inline-serif text-white/60 font-semibold text-[0.8em]" 
                data-text="Ali"
                style={{ 
                  "--outline-color": "var(--inline-serif-outer-muted)", 
                  "--inline-color": "var(--inline-serif-inner)" 
                } as React.CSSProperties}
              >
                Ali
              </span>
            </motion.h1>

            {/* Typed subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-[clamp(18px,2.5vw,24px)] text-white/50 mb-6 font-light tracking-wide"
            >
              I&apos;m a{" "}
              <TypedText items={typedRoles} />
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base text-white/40 leading-relaxed mb-10 max-w-lg"
            >
              {personalInfo.bio[0]}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
              <a
                href="#portfolio"
                className="group flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #dc2626, #991b1b)",
                  boxShadow: "0 0 30px rgba(220,38,38,0.25)"
                }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 50px rgba(220,38,38,0.4)")}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 0 30px rgba(220,38,38,0.25)")}
              >
                View My Work
                <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white/70 glass hover:text-white hover:border-crimson-800/50 transition-all duration-300"
              >
                <MessageCircle size={15} />
                Get In Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-3">
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.name}
                  className="w-11 h-11 flex items-center justify-center rounded-xl glass text-white/40 hover:text-white hover:border-crimson-800/50 transition-all duration-200"
                >
                  {link.image ? (
                    <Image src={link.image} alt={link.name} width={18} height={18} className="opacity-50 hover:opacity-80" />
                  ) : (
                    socialIconMap[link.icon]
                  )}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="flex justify-center mt-12 lg:mt-0"
          >
            <div className="relative w-[280px] h-[330px] sm:w-[340px] sm:h-[400px]">
              {/* Rotating crimson border */}
              <div
                className="absolute -inset-3 rounded-[36px] opacity-50"
                style={{
                  background: "conic-gradient(from 0deg, #dc2626, #450a0a, #dc2626)",
                  animation: "spin 12s linear infinite"
                }}
              />
              <div className="absolute -inset-2 rounded-[32px]" style={{ background: "var(--bg-void)" }} />

              {/* Profile image */}
              <div className="relative w-full h-full rounded-[28px] overflow-hidden border border-crimson-900/30"
                style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.8), 0 0 60px rgba(220,38,38,0.1)" }}>
                <Image
                  src="/assets/img/profile-img.jpg"
                  alt="Saif Ansari — AI/ML Engineer"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 640px) 280px, 340px"
                />
                {/* Glass overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xs text-white/40 font-mono uppercase tracking-widest mb-0.5">AI/ML Engineer</div>
                  <div className="text-sm font-semibold text-white/80">MM(DU) — CSE (AI&ML)</div>
                </div>
              </div>

              {/* Floating stat badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-12 top-1/4 glass rounded-xl px-3 py-2 text-center hidden sm:block"
              >
                <div className="text-xl font-black text-crimson-500">10+</div>
                <div className="text-[10px] text-white/40 uppercase tracking-wider">Projects</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-12 bottom-1/3 glass rounded-xl px-3 py-2 text-center hidden sm:block"
              >
                <div className="text-xl font-black text-crimson-500">93%</div>
                <div className="text-[10px] text-white/40 uppercase tracking-wider">Accuracy</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="text-[11px] text-white/20 uppercase tracking-widest font-mono">Scroll</div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} className="text-white/20" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

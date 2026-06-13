"use client";

import Link from "next/link";
import Image from "next/image";
import { personalInfo, socialLinks, navItems } from "@/lib/data";
import { Heart, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

const socialIconMap: Record<string, React.ReactNode> = {
  Github:   <GithubIcon size={18} />,
  Linkedin: <LinkedinIcon size={18} />,
};

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer
      className="relative overflow-hidden border-t border-white/5"
      style={{ background: "linear-gradient(180deg, var(--bg-void) 0%, #050505 100%)" }}
    >
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson-700/40 to-transparent" />

      {/* Ambient background */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #dc2626 0%, transparent 70%)" }}
      />

      <div className="container py-16 relative">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="text-2xl font-black tracking-[-0.04em] text-white/90 font-mono mb-3">
              Saif<span className="text-crimson-600">.</span>dev
            </div>
            <p className="text-sm text-white/30 leading-relaxed mb-5 max-w-[240px]">
              {personalInfo.tagline}
            </p>
            <div className="flex gap-2">
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.name}
                  className="w-10 h-10 flex items-center justify-center rounded-xl glass text-white/35 hover:text-white hover:border-crimson-800/40 transition-all duration-200"
                >
                  {link.image
                    ? <Image src={link.image} alt={link.name} width={18} height={18} className="opacity-50" />
                    : socialIconMap[link.icon]
                  }
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-[10px] text-crimson-600 uppercase tracking-widest font-bold mb-4">Quick Links</div>
            <ul className="space-y-2.5">
              {navItems.map(item => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/30 hover:text-white/70 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-crimson-600 transition-all duration-200 inline-block" />
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/achievements"
                  className="text-sm text-white/30 hover:text-white/70 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-3 h-px bg-crimson-600 transition-all duration-200 inline-block" />
                  Achievements
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div className="text-[10px] text-crimson-600 uppercase tracking-widest font-bold mb-4">Contact</div>
            <div className="space-y-2.5">
              <div className="text-sm text-white/30">{personalInfo.location}</div>
              <a href={`mailto:${personalInfo.email}`} className="text-sm text-white/30 hover:text-crimson-400 transition-colors block break-all">
                {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone}`} className="text-sm text-white/30 hover:text-white/60 transition-colors block">
                {personalInfo.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20 flex items-center gap-1">
            © {new Date().getFullYear()} {personalInfo.name} · Built with{" "}
            <Heart size={10} className="text-crimson-600 inline mx-0.5" />
            using Next.js & Three.js
          </p>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 glass rounded-xl flex items-center justify-center text-white/30 hover:text-white hover:border-crimson-800/40 transition-all"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

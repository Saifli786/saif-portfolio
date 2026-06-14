"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

// Official LeetCode SVG path
const LeetCodeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M16.102 17.93l-2.697 2.607c-.466.451-1.211.451-1.677 0l-2.697-2.607c-.466-.45-.466-1.18 0-1.63l2.697-2.607c.466-.45 1.211-.45 1.677 0l2.697 2.607c.466.45.466 1.18 0 1.63zm3.898-3.575c0-.742-.604-1.346-1.346-1.346H10.615c-.742 0-1.346.604-1.346 1.346s.604 1.346 1.346 1.346h7.538c.742 0 1.346-.604 1.346-1.346zm-6.797-4.96c0-.741-.605-1.346-1.347-1.346H5.347c-.742 0-1.346.605-1.346 1.346s.604 1.346 1.346 1.346h6.509c.742 0 1.347-.605 1.347-1.346zm-1.102-5.465L9.406 6.537c-.466.451-1.211.451-1.677 0L5.032 3.93c-.466-.45-.466-1.18 0-1.63L7.729.307c.466-.45 1.211-.45 1.677 0l2.697 2.607c.466.45.466 1.18 0 1.63z" />
  </svg>
);

// Standard HackerRank SVG path
const HackerRankIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M7.6 6v12h3.2v-4.4h2.4V18h3.2V6h-3.2v4.4h-2.4V6H7.6z" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-white dark:bg-black text-neutral-900 dark:text-white border-t border-neutral-200 dark:border-neutral-900 transition-colors duration-300">
      {/* Accent gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent" />

      {/* Decorative luxury gradient background (ambient red glow) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-[0.03] dark:opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #dc2626 0%, transparent 70%)" }}
      />

      <div className="container pt-24 pb-12 relative z-10">
        {/* Main 3-Column Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 xl:gap-24 mb-20"
        >
          {/* COLUMN 1 — BRAND */}
          <div className="flex flex-col justify-start">
            <span className="text-xs font-bold tracking-widest text-red-600 dark:text-red-500 uppercase block">
              AI/ML Developer &bull; Researcher &bull; Builder
            </span>
            <p className="mt-5 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-sm">
              Building intelligent systems through Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, and Modern Software Engineering.
            </p>

            {/* Circular Glassmorphism Social Buttons */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                {
                  name: "GitHub",
                  url: "https://github.com/Saifli786",
                  icon: <GithubIcon size={20} />,
                },
                {
                  name: "LinkedIn",
                  url: "https://www.linkedin.com/in/md-saif-ali-a1697b322/",
                  icon: <LinkedinIcon size={20} />,
                },
                {
                  name: "LeetCode",
                  url: "https://leetcode.com/u/saifali_786/",
                  icon: <LeetCodeIcon className="w-5 h-5" />,
                },
                {
                  name: "HackerRank",
                  url: "https://www.hackerrank.com/profile/saifali_dev786",
                  icon: <HackerRankIcon className="w-5 h-5" />,
                },
                {
                  name: "Email",
                  url: "mailto:saifansarik7@gmail.com",
                  icon: <Mail className="w-5 h-5" />,
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-11 h-11 rounded-full flex items-center justify-center bg-neutral-100/80 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-600 dark:text-neutral-400 hover:text-red-600 dark:hover:text-red-500 social-glow cursor-pointer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2 — QUICK LINKS */}
          <div className="flex flex-col justify-start md:pl-8 xl:pl-16">
            <h4 className="font-playfair text-lg font-bold tracking-wider text-neutral-900 dark:text-white mb-6">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-4">
              {[
                { label: "Hero", href: "#hero" },
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Resume", href: "#resume" },
                { label: "Projects", href: "#portfolio" },
                { label: "Achievements", href: "/achievements", isExternal: true },
                { label: "Contact", href: "#contact" },
              ].map((link) => {
                if (link.isExternal) {
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="link-underline text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-red-600 dark:hover:text-red-500 w-fit cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  );
                }
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="link-underline text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-red-600 dark:hover:text-red-500 w-fit cursor-pointer"
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* COLUMN 3 — CONTACT */}
          <div className="flex flex-col justify-start">
            <h4 className="font-playfair text-lg font-bold tracking-wider text-neutral-900 dark:text-white mb-6">
              Contact
            </h4>
            <div className="space-y-6 text-sm">
              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] font-bold text-red-600 dark:text-red-500 mb-1">
                  Location
                </span>
                <p className="text-neutral-800 dark:text-neutral-300 font-medium">
                  Bihar, India
                </p>
              </div>

              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] font-bold text-red-600 dark:text-red-500 mb-1">
                  Email
                </span>
                <a
                  href="mailto:saifansarik7@gmail.com"
                  className="link-underline text-neutral-800 dark:text-neutral-300 hover:text-red-600 dark:hover:text-red-500 font-medium cursor-pointer"
                >
                  saifansarik7@gmail.com
                </a>
              </div>

              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] font-bold text-red-600 dark:text-red-500 mb-1">
                  Availability
                </span>
                <p className="text-neutral-800 dark:text-neutral-300 font-medium leading-relaxed">
                  Open for Internships, Research and Collaboration
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM BAR */}
        <div className="border-t border-neutral-200 dark:border-neutral-900 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-500 dark:text-neutral-400">
          <div>
            &copy; 2026 Saif Ansari. All Rights Reserved.
          </div>

          <div className="font-medium tracking-wide">
            Designed &amp; Developed by <span className="text-neutral-800 dark:text-white font-semibold">Saif Ansari</span>
          </div>

          <div>
            <button
              onClick={scrollToTop}
              aria-label="Back to Top"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-neutral-100/80 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-600 dark:text-neutral-400 hover:text-red-600 dark:hover:text-red-500 hover:scale-110 active:scale-95 hover:shadow-[0_0_15px_rgba(220,38,38,0.4)] transition-all duration-300 cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

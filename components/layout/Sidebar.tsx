"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, Home, User, Zap, FileText, Layers, Settings, MessageSquare, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import Image from "next/image";
import { navItems, socialLinks, personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home size={16} />,
  User: <User size={16} />,
  Zap:  <Zap size={16} />,
  FileText: <FileText size={16} />,
  Layers: <Layers size={16} />,
  Settings: <Settings size={16} />,
  MessageSquare: <MessageSquare size={16} />,
  Mail: <Mail size={16} />,
};

const socialIconMap: Record<string, React.ReactNode> = {
  Github:   <GithubIcon size={18} />,
  Linkedin: <LinkedinIcon size={18} />,
};

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  // Scrollspy
  useEffect(() => {
    const sections = navItems.map(item => item.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const renderNavContent = () => (
    <>
      {/* Brand */}
      <div className="px-2 py-4 mb-2 border-b border-black/5 dark:border-white/5">
        <div className="text-center">
          <div className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white/90 font-mono">
            {personalInfo.shortName}
            <span className="text-crimson-600">.</span>dev
          </div>
          <div className="text-[11px] text-zinc-500 dark:text-white/30 mt-0.5 uppercase tracking-widest">Portfolio</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-2">
        <ul className="space-y-0.5">
          {navItems.map(item => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 relative group",
                    isActive
                      ? "text-zinc-900 dark:text-white bg-black/[0.06] dark:bg-white/5"
                      : "text-zinc-500 dark:text-white/40 hover:text-zinc-900 dark:hover:text-white/80 hover:bg-black/[0.04] dark:hover:bg-white/[0.03]"
                  )}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-gradient-to-b from-crimson-500 to-crimson-700 rounded-r"
                    />
                  )}
                  <span className={cn("transition-colors", isActive ? "text-crimson-500" : "text-zinc-400 dark:text-white/30 group-hover:text-zinc-700 dark:group-hover:text-white/60")}>
                    {iconMap[item.icon]}
                  </span>
                  <span className="text-[13px] font-medium">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Social Links */}
      <div className="pt-4 border-t border-white/5">
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {socialLinks.map(link => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              title={link.name}
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/[0.04] border border-white/6 text-white/40 hover:text-white hover:bg-white/8 hover:border-crimson-800/60 transition-all duration-200"
            >
              {link.image ? (
                <Image src={link.image} alt={link.name} width={18} height={18} className="opacity-60" />
              ) : (
                socialIconMap[link.icon]
              )}
            </a>
          ))}
        </div>

        {/* Theme Toggle */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-full flex items-center justify-center gap-2 py-2 text-xs text-zinc-400 dark:text-white/30 hover:text-zinc-800 dark:hover:text-white/60 transition-colors rounded-lg hover:bg-black/[0.04] dark:hover:bg-white/[0.03]"
          >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
          </button>
        )}
      </div>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden xl:flex fixed top-0 left-0 bottom-0 w-[260px] z-50 p-3">
        <div className="glass rounded-2xl w-full flex flex-col p-3 h-full">
          {renderNavContent()}
        </div>
      </aside>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="xl:hidden fixed top-4 right-4 z-50 w-11 h-11 glass rounded-xl flex items-center justify-center text-zinc-600 dark:text-white/70 hover:text-zinc-900 dark:hover:text-white transition-colors"
      >
        <Menu size={20} />
      </button>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="xl:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              className="xl:hidden fixed top-0 left-0 bottom-0 w-[260px] z-50 p-3"
            >
              <div className="glass rounded-2xl w-full flex flex-col p-3 h-full">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="absolute top-5 right-5 text-white/40 hover:text-white"
                >
                  <X size={18} />
                </button>
                {renderNavContent()}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Scroll Progress */}
      <div id="scroll-progress" />
    </>
  );
}

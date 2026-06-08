"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/navigation";
import { useTransition } from "react";
import { Menu, X, Github, Linkedin, Mail, Cpu, Terminal } from "lucide-react";

interface HeaderProps {
  activeSection: string;
}
interface NavItem {
  label: string;
  id: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const t = useTranslations('Navbar');
   const navItems = t.raw('navItems') as NavItem[];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    const nextLocale = locale === "en" ? "id" : "en";

    // Menggunakan startTransition agar UX perpindahan halaman lebih mulus
    startTransition(() => {
      // router.replace akan mengubah /en menjadi /id (atau sebaliknya)
      // dengan tetap mempertahankan halaman aktif saat ini
      router.replace(pathname, { locale: nextLocale });
    });
  };

  

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      id="main-nav-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-bg-dark/65 backdrop-blur-md border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "py-5 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between ">
        {/* Desktop Navigation */}
        <nav className="hidden w-full md:flex items-center justify-between ">
          <ul className="flex items-center gap-1.5 glass-light px-3 py-1.5 rounded-full border border-white/5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
                      isActive
                        ? "text-white"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] border border-white/10 rounded-full"
                        style={{ originY: "0px" }}
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="h-4 w-[1px] bg-white/10" />

          {/* Social Icons & Status indicator */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full glass-light hover:border-glow text-slate-400 hover:text-accent-blue transition-all"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full glass-light hover:border-glow text-slate-400 hover:text-accent-blue transition-all"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Availability Widget */}
            <div className="relative group/badge">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-emerald-500/10 hover:border-emerald-500/30 transition-all cursor-pointer">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-bold text-emerald-400 tracking-wider uppercase">
                  Open Work
                </span>
              </div>

              {/* Mini detail tooltip */}
              <div className="absolute right-0 top-12 w-48 p-3 rounded-lg glass border border-emerald-500/20 shadow-xl opacity-0 translate-y-2 pointer-events-none group-hover/badge:opacity-100 group-hover/badge:translate-y-0 group-hover/badge:pointer-events-auto transition-all duration-300 z-50 text-left">
                <p className="text-[10px] text-slate-400 mb-1">
                  Status Saat Ini
                </p>
                <p className="text-xs font-semibold text-white">
                  Tersedia untuk proyek Web & Cloud Full-Stack.
                </p>
              </div>
            </div>
            <button
              onClick={handleToggle}
              disabled={isPending}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide border transition-all duration-200 bg-slate-900/40 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 disabled:opacity-50"
              aria-label="Toggle Language"
            >
              <span className="opacity-80">
                {locale === "en" ? "🇺🇸" : "🇮🇩"}
              </span>
              <span className="uppercase font-semibold">
                {locale === "en" ? "EN" : "ID"}
              </span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Availability Badge */}
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full glass border border-emerald-500/15">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span className="text-[9px] font-bold text-emerald-400 tracking-wider">
              ACTIVE
            </span>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg glass text-slate-300 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-b border-white/5 bg-[#08080a]"
          >
            <div className="px-4 py-6 flex flex-col gap-5">
              <ul className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left py-2 px-3 rounded-lg transition-colors text-sm font-medium ${
                        activeSection === item.id
                          ? "bg-white/5 text-accent-blue border-l-2 border-accent-blue pl-4"
                          : "text-slate-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="h-[1px] bg-white/5" />
              <div className="flex items-center justify-between px-3">
                <span className="text-xs text-slate-400">
                  Hubungkan via media sosial:
                </span>
                <div className="flex gap-3">
                  <a
                    href="https://github.com"
                    className="p-2 rounded-lg glass text-slate-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    className="p-2 rounded-lg glass text-slate-400 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

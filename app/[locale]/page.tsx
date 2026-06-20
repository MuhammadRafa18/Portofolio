"use client";

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useTranslations } from 'next-intl';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import { Terminal, Cpu, ArrowUp, Sparkles, ExternalLink, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Page() {
  const t = useTranslations('HomePage');
  const [activeSection, setActiveSection] = useState('about');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showServicesDrawer, setShowServicesDrawer] = useState(false);

  useEffect(() => {
    // 1. Setup IntersectionObserver to track scroll location and update header links
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // focused view area
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = ['about', 'tech', 'projects', 'experience', 'contact'];
    
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // 2. Track back-to-top visibility
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative min-h-screen bg-[#121212] text-slate-100 overflow-x-hidden selection:bg-accent-blue/30 selection:text-white">
      {/* Decorative ambient glowing grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      {/* Primary Sticky Header */}
      <Header activeSection={activeSection} />

      {/* Main Single Page Column */}
      <main className="relative z-10">
        
        {/* Section 1: Hero view (includes profile & greeting text + active terminal block) */}
        <Hero />


        {/* Section 3: Professional Tech Skill modular board */}
        <TechStack />

        {/* Section 4: Projects Showcase cards with specialized deep previews */}
        <Projects />

        {/* Section 5: Experience career pipeline */}
        <Experience />

        {/* Section 6: Quick contact coordinates and interactive direct message inbox */}
        <Contact />

      </main>

      <footer className="relative bg-[#020203] border-t border-white/5 py-12 px-4 md:px-8 z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-[11px] text-slate-500 font-medium tracking-wide">
            &copy; {new Date().getFullYear()} Rafa Almaqdis. All rights reserved. Crafted with React, Tailwind, and Motion.
          </p>

          <div className="flex items-center gap-6 text-xs text-slate-400">
            <a 
              href="mailto:rafaalmaqdis53@gmail.com" 
              className="hover:text-accent-blue hover:underline transition-all"
            >
              Email
            </a>
            <span className="text-slate-700">|</span>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-accent-blue hover:underline transition-all"
            >
              GitHub
            </a>
            <span className="text-slate-700">|</span>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-accent-blue hover:underline transition-all"
            >
              LinkedIn
            </a>
          </div>

        </div>
      </footer>

      {/* Services deep-dive drawer drawer details */}
      <AnimatePresence>
        {showServicesDrawer && (
          <div className="fixed inset-0 z-50 flex items-center justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowServicesDrawer(false)}
              className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 220 }}
              className="relative w-full max-w-lg h-full glass border-l border-white/10 p-6 md:p-8 flex flex-col justify-between overflow-y-auto z-10 shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4.5 h-4.5 text-accent-cyan" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">Layanan & Spesialisasi</span>
                  </div>
                  <button 
                    onClick={() => setShowServicesDrawer(false)}
                    className="p-1 px-2.5 rounded-md glass-light text-slate-400 hover:text-white transition-colors text-xs cursor-pointer"
                  >
                    Tutup ✕
                  </button>
                </div>

                <h3 className="font-display font-black text-2xl text-white mb-6">
                  Teknik Komputasi & Solusi Desain
                </h3>

                <div className="space-y-6">
                  {[
                    {
                      title: 'Frontend Rekayasa Visual',
                      desc: 'Membangun aplikasi web single-page (RSC / Next.js) dengan kerangka performa render kritis, layout fluida, optimisasi SEO taktis, serta integrasi Framer Motion untuk gerakan fluid.',
                      tech: ['React 19', 'Next.js 15', 'Tailwind', 'GLSL Canvas']
                    },
                    {
                      title: 'Arsitektur API & Microservices',
                      desc: 'Mendesain backend berkebutuhan beban tinggi menggunakan Golang atau Rust. Mengoptimasi pooling database PostgreSQL, caching memori Redis, serta sinkronisasi microservices via gRPC.',
                      tech: ['Go / Rust', 'Node.js', 'PostgreSQL', 'Redis']
                    },
                    {
                      title: 'Orkestrasi Server & Cloud Native',
                      desc: 'Penyusunan pipeline rilis otomatis berbasis GitHub Actions, integrasi aman container multi-stage Docker ke Google Cloud Run, setup CDN Cloudflare, dan pemantauan latensi log real-time.',
                      tech: ['Docker', 'AWS / GCP', 'K8s', 'GitHub Actions']
                    }
                  ].map((service, sI) => (
                    <div key={service.title} className="p-4 rounded-xl bg-white/2 border border-white/5 hover:border-glow transition-all">
                      <span className="text-[10px] text-slate-500 font-mono font-bold">0{sI + 1} //</span>
                      <h4 className="font-display font-extrabold text-sm text-white mt-1 mb-2">{service.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed font-normal mb-3">{service.desc}</p>
                      
                      <div className="flex flex-wrap gap-1">
                        {service.tech.map((t) => (
                          <span key={t} className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-white/5 text-slate-300">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 mt-8 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setShowServicesDrawer(false);
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full flex items-center justify-center gap-2 h-11 bg-accent-blue hover:bg-blue-600 rounded-lg text-white font-semibold text-xs cursor-pointer transition-colors"
                >
                  <span>Mulai Diskusi Proyek Sekarang</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating back-to-top button element */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-accent-blue hover:bg-blue-600 text-white shadow-lg shadow-accent-blue/20 hover:shadow-accent-blue/30 cursor-pointer hover:scale-105 active:scale-95 transition-all z-40"
            title="Kembali ke atas"
          >
            <ArrowUp className="w-4.5 h-4.5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}

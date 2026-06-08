"use client";
import React, { useState } from 'react';
import { motion, type Variants } from "motion/react";
import { Terminal as TerminalIcon, Sparkles, ArrowRight, Eye, Cpu,  Layers } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface HeroProps {
  onLearnMoreClick: () => void;
}

const TAB_CODES = {
  server: `// server.ts - Fast High-Throughput Routing
import { getDB } from './db';
import { rateLimiter } from './services';

export async function handleRequest(req, res) {
  const accountId = req.headers['x-account-id'];
  
  // High-performance payload stream
  await rateLimiter.check(accountId);
  const data = await getDB().query(
    "SELECT * FROM ledger WHERE status = $1", 
    ['active']
  );
  
  return res.json({
    status: 'success',
    latency: '4.2ms',
    payload: data.rows
  });
}`,
  react: `// App.tsx - Optimized Component Architecture
import { motion } from 'motion/react';
import { useState, useMemo } from 'react';

export default function GlassDashboard() {
  const [activeTab, setActive] = useState('server');
  const dataset = useMemo(() => fetchFeed(), []);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass border-glow p-6"
    >
      <MetricGauge value={dataset.load} />
    </motion.div>
  );
}`,
  docker: `# Dockerfile - Multi-Stage Safe Build
FROM node:19-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --quiet
COPY . .
RUN npm run build

FROM gcr.io/distroless/nodejs20-debian11
WORKDIR /app
COPY --from=builder /app/dist ./dist
ENV NODE_ENV=production
EXPOSE 3000
CMD ["dist/server.cjs"]`
};

export default function Hero({ onLearnMoreClick }: HeroProps) {
  const [activeTab, setActiveTab] = useState<'server' | 'react' | 'docker'>('server');
  const [systemActive, setSystemActive] = useState(true);
  const t = useTranslations('Hero');

 
  const  containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 18,
      },
    },
  };

  return (
    <section 
      id="about" 
      className="relative min-h-screen pt-28 pb-16 px-4 md:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden"
    >
      {/* Absolute Ambient Background Lights (electric blue & blurred violet) */}
      <div className="absolute inset-x-0 top-1/4 -z-10 flex justify-between pointer-events-none opacity-45">
        <div className="w-[30%] h-[30%] rounded-full bg-gradient-to-tr from-accent-blue/20 to-accent-cyan/10 blur-[90px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="w-[35%] h-[40%] rounded-full bg-gradient-to-tr from-accent-purple/20 to-accent-pink/15 blur-[120px] animate-pulse" style={{ animationDuration: '12s' }} />
      </div>

      {/* Grid background mask */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] -z-20 pointer-events-none" />

      {/* Left side Content Column */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="w-full lg:w-[55%] flex flex-col gap-6"
      >
        {/* Decorative Badge */}
        <motion.div variants={itemVariants} className="self-start">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/5 hover:border-accent-blue/25 transition-all text-xs font-semibold text-slate-300">
            <span className="flex h-1.5 w-1.5 rounded-full bg-accent-blue animate-pulse" />
            <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
            <span>{t('badge')}</span>
          </div>
        </motion.div>

        {/* Primary Header Title */}
        <motion.h1
          variants={itemVariants}
          className="font-display font-black text-4xl sm:text-5xl xl:text-6xl tracking-tight leading-[1.08] text-white"
        >
          {t('title_part1')} <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(59,130,246,0.3)] animate-gradient inline-block">
            {t('title_highlight')}
          </span>
        </motion.h1>

        {/* Subtitle / Paragraph */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed"
        >
         {t('subtitle')}
        </motion.p>

        {/* CTA Button Grid Row */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-3"
        >
          <button
            onClick={() => {
              const el = document.getElementById('projects');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="group relative cursor-pointer flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-accent-blue font-semibold text-sm text-white shadow-[0_4px_20px_rgba(59,130,246,0.4)] hover:shadow-[0_4px_25px_rgba(59,130,246,0.6)] hover:bg-blue-600 active:scale-98 transition-all"
          >
            <Eye className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            <span>{t('cta_primary')}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            
            {/* Gloss light effect border overlay */}
            <div className="absolute inset-0 rounded-xl border border-white/20 pointer-events-none" />
          </button>

          <button
            onClick={onLearnMoreClick}
            className="group relative cursor-pointer flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl glass hover:bg-white/10 text-slate-200 hover:text-white border border-white/5 hover:border-glow transition-all active:scale-98"
          >
            <span className="text-sm font-semibold">{t('cta_secondary')}</span>
          </button>
        </motion.div>

      
      </motion.div>

      {/* Right side Interactive Glow Dev Terminal */}
      <motion.div
        initial={{ opacity: 0, x: 40, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ type: 'spring', stiffness: 70, damping: 15, delay: 0.3 }}
        className="w-full lg:w-[42%] flex flex-col"
      >
        {/* Terminal frame with dynamic neon shadow based on focus */}
        <div 
          className={`relative rounded-2xl glass transition-all duration-500 overflow-hidden ${
            activeTab === 'server' ? 'shadow-[0_0_40px_rgba(168,85,247,0.2)] border-purple-500/20' :
            activeTab === 'react' ? 'shadow-[0_0_40px_rgba(6,182,212,0.2)] border-cyan-500/20' :
            'shadow-[0_0_40px_rgba(59,130,246,0.2)] border-blue-500/20'
          }`}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-black/45 border-b border-white/5">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <div className="flex items-center gap-2 ml-4">
                <TerminalIcon className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-mono text-[10px] text-slate-400">sandbox@ide-developer: ~</span>
              </div>
            </div>

            {/* Simulated Live indicator */}
            <div 
              onClick={() => setSystemActive(!systemActive)}
              className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/5 border border-white/5 cursor-pointer hover:border-white/10 active:scale-95"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${systemActive ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`} />
              <span className="font-mono text-[9px] text-slate-300 uppercase select-none tracking-wide">
                {systemActive ? 'online' : 'offline'}
              </span>
            </div>
          </div>

          {/* Interactive IDE Selector tabs */}
          <div className="flex bg-[#070709] border-b border-white/5 px-2">
            {[
              { id: 'server', label: 'server.ts', color: 'border-b-purple-500 text-purple-400' },
              { id: 'react', label: 'App.tsx', color: 'border-b-cyan-500 text-cyan-400' },
              { id: 'docker', label: 'Dockerfile', color: 'border-b-blue-500 text-blue-400' },
            ].map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3 py-2 text-xs font-mono border-b-2 transition-all cursor-pointer ${
                    isSelected 
                      ? `${tab.color} bg-white/3 font-semibold text-white` 
                      : 'border-b-transparent text-slate-500 hover:text-slate-300 hover:bg-white/1'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Source Code Renderer Container */}
          <div className="p-5 bg-black/55 h-80 overflow-y-auto font-mono text-[11px] leading-relaxed relative scrollbar-thin scrollbar-thumb-zinc-800">
            <pre className="text-slate-200">
              <code>{TAB_CODES[activeTab]}</code>
            </pre>

            {/* Glowing accents reflecting tab types */}
            <div className="absolute bottom-4 right-4 pointer-events-none opacity-20">
              {activeTab === 'server' && <Cpu className="w-10 h-10 text-purple-400 animate-pulse" />}
              {activeTab === 'react' && <Sparkles className="w-10 h-10 text-cyan-400 animate-pulse" />}
              {activeTab === 'docker' && <Layers className="w-10 h-10 text-blue-400 animate-pulse" />}
            </div>
          </div>

          {/* Status footer with active load simulator metrics */}
          <div className="px-4 py-2 bg-black/40 border-t border-white/5 flex justify-between items-center text-[10px] text-slate-400 font-mono">
            <div className="flex items-center gap-1">
              <span className="text-slate-500">LF</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-500">UTF-8</span>
              <span className="text-slate-500">|</span>
              <span className="text-semibold text-slate-300">{activeTab}.ts</span>
            </div>
            <div>
              <span>Build status: </span>
              <span className="text-emerald-400 font-semibold uppercase">✓ compilable</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

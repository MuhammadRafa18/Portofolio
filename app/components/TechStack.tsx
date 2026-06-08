"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILLS } from '../data';
import { Skill } from '../types';
import * as Icons from 'lucide-react';

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Languages', 'Frontend', 'Backend', 'DevOps & Tools'];

  const filteredSkills = selectedCategory === 'Semua'
    ? SKILLS
    : SKILLS.filter(skill => skill.category === selectedCategory);

  // Helper dynamically fetches icon from Lucide-react
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-5 h-5" />;
    }
    return <Icons.Code className="w-5 h-5" />;
  };

  return (
    <section 
      id="tech" 
      className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative overflow-hidden"
    >
      {/* Background glow orb */}
      <div className="absolute right-0 top-1/3 -z-10 w-96 h-96 rounded-full bg-gradient-to-tr from-accent-purple/10 to-accent-pink/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-10 bottom-10 -z-10 w-80 h-80 rounded-full bg-gradient-to-tr from-accent-blue/10 to-accent-cyan/5 blur-[100px] pointer-events-none" />

      {/* Header text with animation */}
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass border border-white/5 text-xs font-semibold text-accent-cyan tracking-wider uppercase mb-3"
        >
          <Icons.Cpu className="w-3.5 h-3.5" />
          <span>Keahlian & Core Engine</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-white mb-4"
        >
          Teknologi Yang Saya{' '}
          <span className="bg-gradient-to-r from-accent-purple via-accent-pink to-accent-blue bg-clip-text text-transparent">
            Gunakan & Kuasai
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-400 max-w-2xl text-sm sm:text-base"
        >
          Menggunakan toolkit modern yang berorientasi pada kecepatan, skalabilitas ekstrem, dan kepatuhan terhadap clean code practices.
        </motion.p>
      </div>

      {/* Category selector pill tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat, idx) => {
          const isSelected = selectedCategory === cat;
          return (
            <motion.button
              key={cat}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setSelectedCategory(cat)}
              className={`relative px-4 py-2 rounded-full font-display text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                isSelected 
                  ? 'text-white' 
                  : 'text-slate-400 hover:text-slate-200 glass border border-white/5'
              }`}
            >
              {isSelected && (
                <motion.div
                  layoutId="activeCategoryIndicator"
                  className="absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full -z-10 shadow-[0_3px_15px_rgba(168,85,247,0.4)]"
                  transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                />
              )}
              {cat}
            </motion.button>
          );
        })}
      </div>

      {/* Interactive Staggered Grid Content */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              key={skill.name}
              className="group relative rounded-xl glass p-5 border border-white/5 hover:border-white/15 hover:shadow-[0_0_30px_rgba(168,85,247,0.06)] overflow-hidden flex flex-col justify-between"
            >
              {/* Dynamic light hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div>
                {/* Header card node details */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-lg bg-white/2 border border-white/5 ${skill.color}`}>
                    {renderIcon(skill.iconName)}
                  </div>
                  {/* Skill level node circle indicator */}
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                    <span>Lvl {skill.level}%</span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-slate-100 text-sm group-hover:text-white mb-2 transition-colors">
                  {skill.name}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed font-normal mb-5">
                  {skill.description}
                </p>
              </div>

              {/* Progress bar scale container */}
              <div className="w-full">
                <div className="flex justify-between items-center text-[9px] font-semibold text-slate-500 mb-1.5">
                  <span>CAPABILITY RATIO</span>
                  <span className="text-slate-400">{skill.level}%</span>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

"use client";
import { motion } from 'motion/react';
import { WorkExperience } from '../types';
import { Briefcase, Calendar, CheckSquare, Layers } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Experience() {
   const t = useTranslations("data");
  const EXPERIENCES = t.raw("experiences") as WorkExperience[];
  
  return (
    <section 
      id="experience" 
      className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative"
    >
      {/* Background glow orbs */}
      <div className="absolute right-0 top-1/4 -z-10 w-96 h-96 rounded-full bg-gradient-to-tr from-accent-blue/5 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute left-1/3 bottom-10 -z-10 w-72 h-72 rounded-full bg-gradient-to-tr from-accent-purple/5 to-transparent blur-[100px] pointer-events-none" />

      {/* Header and section titles */}
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass border border-white/5 text-xs font-semibold text-accent-cyan tracking-wider uppercase mb-3"
        >
          <Briefcase className="w-3.5 h-3.5" />
          <span>{t('experience_headline')}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-white mb-4"
        >
          {t('experience_title_normal')}{' '}
          <span className="bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple bg-clip-text text-transparent">
            {t('experience_title_gradient')}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-400 max-w-2xl text-sm sm:text-base"
        >
          {t('experience_subtitle')}
        </motion.p>
      </div>

      {/* Chronological Timeline Layout */}
      <div className="relative max-w-3xl mx-auto pl-6 sm:pl-0">
        {/* Continuous decorative gradient vertical track line */}
        <div className="absolute left-2 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-accent-purple to-zinc-900 -translate-x-1/2 opacity-25" />

        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div 
                key={exp.id} 
                className={`relative flex flex-col sm:flex-row items-start sm:justify-between ${
                  isLeft ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline node icon button anchor */}
                <div className="absolute left-2 sm:left-1/2 top-1 w-6 h-6 rounded-full bg-[#08080a] border-2 border-accent-blue hover:scale-110 transition-transform -translate-x-1/2 z-10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                </div>

                {/* Main Content card */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -30 : 30, y: 10 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ type: 'spring', stiffness: 100, damping: 18 }}
                  className={`w-full sm:w-[46%] p-6 rounded-2xl glass border border-white/5 hover:border-white/10 ${
                    exp.glowAccent ? `border-l-4 ${exp.glowAccent}` : 'border-l-4 border-l-blue-500'
                  }`}
                >
                  {/* Company & Calendar Title */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="font-display font-extrabold text-white text-lg">
                      {exp.role}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  <p className="text-xs font-semibold text-accent-cyan mb-5 uppercase tracking-wider">
                    {exp.company}
                  </p>

                  {/* Bullet description notes */}
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex gap-2 items-start text-xs text-slate-300 leading-relaxed">
                        <CheckSquare className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags footer row */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                    {exp.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/2 border border-white/4 text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Empty spacer spacer matching opposite grid node on widescreen */}
                <div className="hidden sm:block w-[46%]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

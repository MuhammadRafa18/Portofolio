"use client";
import React, { useState } from "react";
import { motion, type Variants } from "motion/react";
import {
  Terminal as TerminalIcon,
  Sparkles,
  ArrowRight,
  Eye,
} from "lucide-react";
import { useTranslations } from "next-intl";



export default function Hero() {
  const t = useTranslations("Hero");

  const containerVariants: Variants = {
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
        type: "spring",
        stiffness: 100,
        damping: 18,
      },
    },
  };

  return (
    <section
      id="about"
      className="relative min-h-screen pt-28 pb-16 px-4 md:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center  gap-12 overflow-hidden"
    >
  
      {/* Left side Content Column */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full lg:w-[65%] flex flex-col gap-6"
      >
        {/* Decorative Badge */}
        <motion.div variants={itemVariants} className="self-start">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/5 hover:border-accent-blue/25 transition-all text-xs font-semibold text-slate-300">
            <span className="flex h-1.5 w-1.5 rounded-full bg-accent-blue animate-pulse" />
            <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
            <span>{t("badge")}</span>
          </div>
        </motion.div>

        {/* Primary Header Title */}
        <motion.h1
          variants={itemVariants}
          className="font-display font-black text-4xl sm:text-5xl xl:text-6xl tracking-tight leading-[1.08] text-white"
        >
          {t("title_part1")} <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(59,130,246,0.3)] animate-gradient inline-block">
            {t("title_highlight")}
          </span>
        </motion.h1>

        {/* Subtitle / Paragraph */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-slate-400 max-w-2xl font-normal leading-relaxed"
        >
          {t("subtitle")}
        </motion.p>

        {/* CTA Button Grid Row */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-3"
        >
          <button
            onClick={() => {
              const el = document.getElementById("projects");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="group relative cursor-pointer flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-accent-blue font-semibold text-sm text-white shadow-[0_4px_20px_rgba(59,130,246,0.4)] hover:shadow-[0_4px_25px_rgba(59,130,246,0.6)] hover:bg-blue-600 active:scale-98 transition-all"
          >
            <Eye className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            <span>{t("cta_primary")}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />

            {/* Gloss light effect border overlay */}
            <div className="absolute inset-0 rounded-xl border border-white/20 pointer-events-none" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

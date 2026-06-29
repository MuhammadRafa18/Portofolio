"use client";
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../types";
import {
  Github,
  ExternalLink,
  Rocket,
  X,
  CheckCircle,
  Code,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { useTranslations } from "next-intl";
import MockupSlideshow from "./MockupSlideshow";

export default function Projects() {
  const t = useTranslations("data");
  const PROJECTS = useMemo(() => t.raw("projects") as Project[], [t]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = ["All", "Full-Stack", "Frontend", "Backend"];
  const [showAll, setShowAll] = useState(false);
  const INITIAL_COUNT = 4;

  const filteredProjects = useMemo(() => {
    return selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory, PROJECTS]);

  const [activeTab, setActiveTab] = useState<"detail" | "mockup">("detail");

  const getGlowStyle = (color: string) => {
    switch (color) {
      case "purple":
        return "hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.18)]";
      case "cyan":
        return "hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.18)]";
      case "blue":
        return "hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.18)]";
      case "pink":
        return "hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.18)]";
      default:
        return "hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.18)]";
    }
  };

  const getBadgeStyle = (color: string) => {
    switch (color) {
      case "purple":
        return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      case "cyan":
        return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";
      case "blue":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "pink":
        return "bg-pink-500/10 text-pink-400 border-pink-500/20";
      default:
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
    }
  };
  const visibleProjects = useMemo(() => {
    return showAll
      ? filteredProjects
      : filteredProjects.slice(0, INITIAL_COUNT);
  }, [filteredProjects, showAll]);

  return (
    <section
      id="projects"
      className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative"
    >
      {/* Background decoration blur glow */}
      <div className="absolute left-1/4 top-1/2 -z-10 w-96 h-96 rounded-full bg-gradient-to-tr from-accent-blue/10 to-transparent blur-[120px] pointer-events-none" />

      {/* Header section with text animations */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass border border-white/5 text-xs font-semibold text-accent-purple tracking-wider uppercase mb-3"
          >
            <Rocket className="w-3.5 h-3.5" />
            <span>{t("project_headline")}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-white"
          >
            {t("project_title")} <br />
            <span className="bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple bg-clip-text text-transparent">
              {t("project_subtitle")}
            </span>
          </motion.h2>
        </div>

        {/* Project category filter menus */}
        <div className="flex flex-wrap items-center gap-2 self-start md:self-end">
          {categories.map((cat, i) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {setSelectedCategory(cat); setShowAll(false);}}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide cursor-pointer transition-all ${
                  isSelected
                    ? "bg-white/10 text-white border border-white/15"
                    : "text-slate-400 hover:text-slate-200 border border-transparent"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid containing project cards */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              key={project.id}
              className={`group flex flex-col justify-between rounded-2xl p-6 md:p-8 glass transition-all duration-300 border border-white/5 ${getGlowStyle(
                project.glowColor,
              )}`}
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <span
                    className={`px-2.5 py-1 rounded-md text-[10px] font-mono border uppercase tracking-wider ${getBadgeStyle(project.glowColor)}`}
                  >
                    {project.category}
                  </span>

                  {project.metrics && (
                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-400">
                      <span>{project.metrics.label}:</span>
                      <span className="text-white font-semibold">
                        {project.metrics.value}
                      </span>
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl text-slate-100 group-hover:text-white transition-colors mb-3">
                  {project.title}
                </h3>

                {/* Short Paragraph Description */}
                <p className="text-sm text-slate-400 leading-relaxed font-normal mb-6">
                  {project.description}
                </p>

                {/* Project Stack Tags */}
                <div className="flex flex-wrap items-center gap-1.5 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/2 border border-white/4 text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions Row */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      setActiveTab("detail");
                    }}
                    className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white font-semibold transition-colors cursor-pointer"
                  >
                    <Code className="w-3.5 h-3.5" />
                    <span>Detail Sistem</span>
                  </button>
                </div>

                <div className="flex items-center gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4.5 h-4.5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-slate-400 hover:text-accent-blue font-semibold text-xs transition-colors"
                    >
                      <span>Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length > INITIAL_COUNT && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mt-10"
        >
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-white/10 text-sm font-semibold text-slate-400 hover:text-white hover:border-white/20 transition-all cursor-pointer"
          >
            {showAll ? (
              <>
                <ChevronUp className="w-4 h-4" />
                <span>Tampilkan Lebih Sedikit</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                <span>
                  Tampilkan Semua ({filteredProjects.length - INITIAL_COUNT}{" "}
                  lainnya)
                </span>
              </>
            )}
          </button>
        </motion.div>
      )}

      {/* Floating Panel overlay (Custom modal for detailed project briefs) */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Absolute overlay backing */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Body Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="relative w-full max-w-2xl rounded-2xl glass p-6 md:p-8 border border-white/10 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button element */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-lg glass-light text-slate-400 hover:text-white transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Tag / Category details */}
              <div className="flex items-center gap-3 mb-4 mt-2">
                <span
                  className={`px-2.5 py-1 rounded-md text-[10px] font-mono border uppercase tracking-wider ${getBadgeStyle(selectedProject.glowColor)}`}
                >
                  {selectedProject.category}
                </span>

                {selectedProject.metrics && (
                  <div className="flex items-center gap-1 font-mono text-[10px] text-slate-400 bg-white/3 border border-white/5 py-1 px-2.5 rounded-md">
                    <span className="text-slate-500">
                      {selectedProject.metrics.label}:
                    </span>
                    <span className="text-white font-medium">
                      {selectedProject.metrics.value}
                    </span>
                  </div>
                )}
              </div>

              {/* Title & long Description */}
              <h3 className="font-display font-black text-2xl md:text-3xl text-white mb-4">
                {selectedProject.title}
              </h3>

              {selectedProject.mockupImages &&
                selectedProject.mockupImages.length > 0 && (
                  <div className="flex gap-1 p-1 rounded-lg bg-white/4 mb-6">
                    {(["detail", "mockup"] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                          activeTab === tab
                            ? "bg-white/10 text-white border border-white/10"
                            : "text-slate-500 hover:text-slate-300"
                        }`}
                      >
                        {tab === "detail" ? "Detail Sistem" : "Mockup"}
                      </button>
                    ))}
                  </div>
                )}

              {activeTab === "detail" && (
                <div>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                    {selectedProject.longDescription}
                  </p>

                  {/* Technical Specifications checklist section  */}
                  <div className="space-y-3.5 mb-8">
                    <h4 className="font-display text-xs font-semibold tracking-wider text-slate-400 uppercase">
                      Arsitektur & Fitur Utama
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedProject.achievements.map((feat) => (
                        <div
                          key={feat}
                          className="flex gap-2 items-start text-xs text-slate-400"
                        >
                          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Code Sandbox Tags */}
                  <div className="mb-8">
                    <h4 className="font-display text-xs font-semibold tracking-wider text-slate-400 uppercase mb-3">
                      Penyusun Sistem (Core Modules)
                    </h4>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded text-xs font-mono bg-white/4 border border-white/5 text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "mockup" && selectedProject.mockupImages && (
                <MockupSlideshow images={selectedProject.mockupImages} />
              )}

              {/* Project footer control buttons */}
              <div className="flex items-center justify-between pt-5 border-t border-white/5">
                <div className="flex items-center gap-3">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-2 px-4 py-2 rounded-lg glass-light hover:bg-white/10 text-slate-200 hover:text-white transition-all text-xs"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-accent-blue hover:bg-blue-600 rounded-lg text-white font-semibold transition-all text-xs"
                    >
                      <span>Lihat Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

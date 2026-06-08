"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Clock, 
  Terminal, 
  Coffee, 
  Settings, 
  Activity, 
  ShieldCheck, 
  Compass, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

export default function BentoShowcase() {
  const [time, setTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);

  const timer = setInterval(() => {
    setTime(new Date());
  }, 1000);

  return () => clearInterval(timer);
}, []);

  // Format Jakarta Local time or user target time
  const formatTime = (date: Date) => {
    // Jakarta is UTC+7
    const utc = date.getTime() + date.getTimezoneOffset() * 60000;
    const jakartaOffset = 7;
    const jakartaTime = new Date(utc + 3600000 * jakartaOffset);
    
    return jakartaTime.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  };

  const getJakartaDate = () => {
    const utc = time.getTime() + time.getTimezoneOffset() * 60000;
    const jakartaTime = new Date(utc + 3600000 * 7);
    return jakartaTime.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div id="bento-profile-showcase" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Decorative text intro */}
      <div className="flex flex-col items-start mb-8">
        <span className="text-[10px] uppercase font-bold tracking-widest text-accent-cyan flex items-center gap-1.5 bg-accent-cyan/5 px-2.5 py-1 rounded-full border border-accent-cyan/15">
          <Activity className="w-3 h-3 text-cyan-400" />
          <span>Sistem Status & Telemetri</span>
        </span>
      </div>

      {/* Bento Grid Structural columns */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Card 1: Creative Bio (Span 7 col on wider screens) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-7 rounded-2xl glass p-6 border border-white/5 hover:border-white/10 hover:shadow-[0_0_25px_rgba(59,130,246,0.04)] transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex justify-between items-center mb-5">
              <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-widest">PROFIL RINGKAS //</span>
              <Terminal className="w-4 h-4 text-accent-blue" />
            </div>
            
            <h3 className="font-display font-black text-2xl text-white tracking-tight mb-4">
              Membangun Solusi Web Berkecepatan Tinggi dengan Estetika{' '}
              <span className="bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent">Premium</span>
            </h3>
            
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Fokus saya tertuju pada optimisasi performance, integrasi cloud platform, dan interaksi visual yang halus. Percaya bahwa performa adalah elemen desain paling krusial di dunia web modern. Senang merekayasa teknologi open-source yang tangguh dan mempertemukan kompleksitas logika dengan kenyamanan visual.
            </p>
          </div>

          <div className="flex items-center gap-4 mt-6 pt-5 border-t border-white/5 text-[10px] text-slate-500 font-mono">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-accent-blue rounded-full" />
              <span>Full-Stack Web</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-accent-purple rounded-full" />
              <span>Docker Cloud</span>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Interactive Live Clock (Span 5 col) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:col-span-5 rounded-2xl p-6 glass border border-white/5 hover:border-accent-purple/30 hover:shadow-[0_0_25px_rgba(168,85,247,0.06)] transition-all flex flex-col justify-between overflow-hidden relative"
        >
          {/* Subtle glowing purple light behind time */}
          <div className="absolute right-0 bottom-0 pointer-events-none w-32 h-32 bg-accent-purple/10 blur-xl rounded-full" />

          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent-purple" />
              <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">JAKARTA, INDONESIA</span>
            </div>
            <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-accent-purple/10 text-accent-purple border border-accent-purple/20">GMT+7</span>
          </div>

          <div className="my-2">
            <span className="block font-mono text-4xl sm:text-5xl font-black text-white tracking-widest leading-none text-glow-purple drop-shadow-[0_0_12px_rgba(168,85,247,0.4)]">
              {mounted ? formatTime(time) : "--:--:--"}
            </span>
            <span className="block text-xs font-semibold text-slate-400 mt-2.5">
              {mounted ? getJakartaDate() : "Loading..."}
            </span>
          </div>

          <p className="text-[10px] text-slate-400 leading-normal pt-4 border-t border-white/5 mt-4">
            Selalu online untuk sinkronisasi proyek global dan tanggapan kilat.
          </p>
        </motion.div>

        {/* Card 3: Metrics & Telemetry Stats (Span 5 col) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="md:col-span-5 rounded-2xl glass p-6 border border-white/5 hover:border-white/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.03)] transition-all flex flex-col justify-between"
        >
          <div className="flex justify-between items-center mb-6">
            <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-widest">AKTIVITAS SISTEM //</span>
            <span className="text-[9px] font-bold bg-white/5 border border-white/5 px-2 py-0.5 rounded text-emerald-400 font-mono">STABLE SYSTEM</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 rounded-xl bg-white/2 border border-white/4">
              <div className="flex items-center gap-1.5 text-[9px] text-slate-500 uppercase font-semibold">
                <Coffee className="w-3.5 h-3.5 text-amber-500" />
                <span>COMMITS / YR</span>
              </div>
              <p className="font-display font-black text-lg text-white mt-1.5">1400+</p>
            </div>
            
            <div className="p-3 rounded-xl bg-white/2 border border-white/4">
              <div className="flex items-center gap-1.5 text-[9px] text-slate-500 uppercase font-semibold">
                <Settings className="w-3.5 h-3.5 text-accent-blue animate-spin" style={{ animationDuration: '6s' }} />
                <span>DEPLOYED VPS</span>
              </div>
              <p className="font-display font-black text-lg text-white mt-1.5">8 ACTIVE</p>
            </div>
          </div>

          {/* Quick SLA info */}
          <div className="flex items-center gap-2 mt-5 text-[10px] text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Kualitas produk: Unit coverage 92% minimum guaranteed.</span>
          </div>
        </motion.div>

        {/* Card 4: Focus Pursuits (Span 7 col) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-7 rounded-2xl p-6 glass border border-white/5 hover:border-accent-cyan/30 hover:shadow-[0_0_25px_rgba(6,182,212,0.06)] transition-all flex flex-col justify-between overflow-hidden relative"
        >
          {/* Blurred cyan decor orb */}
          <div className="absolute left-0 bottom-0 pointer-events-none w-32 h-32 bg-accent-cyan/5 blur-xl rounded-full" />

          <div>
            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-accent-cyan" />
                <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">FOKUS & EKSPLORASI</span>
              </div>
              <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
            </div>

            <h3 className="font-display font-extrabold text-white text-base mb-4">
              Topik Penelitian & Eksplorasi Aktif
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { title: 'Serverless Edge Architecture', desc: 'Sistem komputasi latensi ultra-rendah terdistribusi.' },
                { title: 'WebGPU Render Engine', desc: 'Grafik interaktif murni 3D berkinerja tinggi murni di browser.' },
                { title: 'Distributed Microservice Go', desc: 'Protokol sinkronisasi konsensus gRPC dan Raft.' },
                { title: 'Declarative UI Physics', desc: 'Simulasi gerak partikel berbasis mekanika fisika murni.' },
              ].map((topic) => (
                <div key={topic.title} className="p-3 rounded-xl bg-[#09090b]/80 border border-white/5 hover:border-accent-cyan/20 hover:bg-[#0c0c0e] transition-colors">
                  <p className="text-xs font-bold text-white mb-0.5">{topic.title}</p>
                  <p className="text-[10px] text-slate-500 leading-normal">{topic.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-[10px] text-slate-500 mt-5 pt-3 border-t border-white/5">
            Berkomitmen untuk terus memperluas keahlian demi kualitas arsitektur modern.
          </p>
        </motion.div>

      </div>
    </div>
  );
}

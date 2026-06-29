"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Send,
  Mail,
  MapPin,
  CheckCircle,
  User,
  FileText,
  MessageSquare,
  AlertCircle,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");
  const options = t.raw("subject_options") as string[];
  const defaultSubject = options?.[0] || 'Proyek Kolaborasi';
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: defaultSubject,
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const ErroMessage = ({message}: {message?: string}) => {
    if(!message) return null;
    return (
      <p className="text-[10px] text-red-400 flex items-center gap-1 pl-1 mt-1">
        <AlertCircle className="w-3 h-3 shrink-0" />
        <span>{message}</span>
      </p>
    )
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Nama lengkap wajib diisi.";
    if (!form.email.trim()) {
      newErrors.email = "Alamat email wajib diisi.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Format email tidak valid.";
    }
    if (!form.message.trim()) {
      newErrors.message = "Isi pesan tidak boleh kosong.";
    } else if (form.message.length < 10) {
      newErrors.message = "Pesan minimal terdiri atas 10 karakter.";
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try{
      const respose = await fetch('/api/contact',{
        method: 'POST',
        headers: {'Content-Type': 'applixation/json'},
        body: JSON.stringify(form)
      });
      if(respose.ok){
        setSentSuccess(true);
        setForm({
        name: "",
        email: "",
        subject: defaultSubject,
        message: "",
      });
      
      setTimeout(() => setSentSuccess(false), 5600);
      }else{
        const resData = await respose.json();
        alert(resData || 'Terjadi kesalahan saat mengirim pesan.');
      }
    }catch(error){
      alert('Gagal terhubung ke server.');
    }finally{
      setIsSubmitting(false);
    } 

 
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative"
    >
      {/* Background glow orb decoration */}
      <div className="absolute left-1/3 bottom-0 -z-10 w-96 h-96 rounded-full bg-gradient-to-tr from-accent-purple/5 to-transparent blur-[120px] pointer-events-none" />

      {/* Grid container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        {/* Left Column - Contact Coordinates */}
        <div className="lg:col-span-5 flex flex-col justify-between py-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass border border-white/5 text-xs font-semibold text-accent-blue tracking-wider uppercase mb-3"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{t("badge")}</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-white mb-6 leading-[1.1]"
            >
              {t("title_part1")} <br />
              <span className="bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple bg-clip-text text-transparent">
                {t("title_highlight")}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-400 text-sm sm:text-base leading-relaxed mb-10 max-w-md"
            >
              {t("subtitle")}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6 pt-6 border-t border-white/5"
          >
            {/* Coordination: Email */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/2 rounded-xl border border-white/5 text-accent-blue">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                  {t("email_label")}
                </p>
                <a
                  href="mailto:rafaalmaqdis53@gmail.com"
                  className="text-white hover:text-accent-blue font-semibold text-sm transition-colors mt-0.5 inline-block"
                >
                  rafaalmaqdis53@gmail.com
                </a>
              </div>
            </div>

            {/* Coordination: Location */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/2 rounded-xl border border-white/5 text-accent-purple">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                  {t("location_label")}
                </p>
                <p className="text-white font-semibold text-sm mt-0.5">
                  Jakarta, Indonesia (GMT+7)
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Glassmorphic Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, x: 20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="lg:col-span-7"
        >
          <div className="rounded-2xl glass p-6 sm:p-8 border border-white/5 shadow-2xl relative overflow-hidden">
            <h3 className="font-display font-bold text-white text-lg mb-6">
              {t("form_title")}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5 pl-0.5"
                  >
                    <User className="w-3 h-3 text-slate-500" />
                    <span>{t("field_name")}</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t("field_name_placeholder")}
                    className={`w-full px-4 h-11 rounded-xl bg-black/45 border border-white/10 text-xs text-white placeholder-slate-500 transition-all focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/30`}
                  />
                  {errors.name && (
                    <p className="text-[10px] text-red-400 flex items-center gap-1 pl-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5 pl-0.5"
                  >
                    <Mail className="w-3 h-3 text-slate-500" />
                    <span>{t("field_email")}</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t("field_email_placeholder")}
                    className={`w-full px-4 h-11 rounded-xl bg-black/45 border border-white/10 text-xs text-white placeholder-slate-500 transition-all focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/30`}
                  />
                  {errors.email && (
                    <p className="text-[10px] text-red-400 flex items-center gap-1 pl-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Input: Select Subject Area */}
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5 pl-0.5"
                >
                  <FileText className="w-3 h-3 text-slate-500" />
                  <span>{t("field_subject")}</span>
                </label>
                <div className="relative">
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-4 h-11 rounded-xl bg-black/45 border border-white/10 text-xs text-white placeholder-slate-500 transition-all focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/30 appearance-none cursor-pointer"
                  >
                    {Array.isArray(options) &&
                      options.map((option: string, index: number) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                  </select>
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-[10px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="24"
                      viewBox="0 0 12 24"
                      className="rotate-90 transition-transform"
                    >
                      <path d="M0 0h12v24H0z" fill="none" />
                      <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Input: Message TextArea */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5 pl-0.5"
                >
                  <MessageSquare className="w-3 h-3 text-slate-500" />
                  <span>{t("field_message")}</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t("field_message_placeholder")}
                  className={`w-full p-4 rounded-xl bg-black/45 border border-white/10 text-xs text-white placeholder-slate-500 transition-all focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/30 resize-none`}
                />
                <div className="flex justify-between items-center px-1 text-[10px]">
                  {errors.message ? (
                    <p className="text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  ) : (
                    <span />
                  )}
                  <span className="text-slate-500 font-mono">
                    {form.message.length} chars
                  </span>
                </div>
              </div>

              {/* Action Button Row */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full relative flex items-center justify-center gap-2.5 h-12 bg-gradient-to-r from-accent-blue to-accent-purple rounded-xl font-semibold text-sm text-white shadow-[0_4px_15px_rgba(59,130,246,0.3)] hover:shadow-[0_4px_22px_rgba(59,130,246,0.5)] active:scale-98 disabled:opacity-55 cursor-pointer disabled:pointer-events-none transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>{t("btn_sending")}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{t("btn_send")}</span>
                  </>
                )}

                {/* Thin overlay border inside */}
                <div className="absolute inset-0 rounded-xl border border-white/10 pointer-events-none" />
              </button>
            </form>

            {/* Victory Alert Success Backdrop Alert badge */}
            <AnimatePresence>
              {sentSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="absolute inset-6 bg-[#060608]/95 backdrop-blur-md rounded-xl border border-emerald-500/35 p-6 flex flex-col items-center justify-center text-center z-20 space-y-3"
                >
                  <div className="p-3 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-extrabold text-white text-base">
                    {t("success_title")}
                  </h4>
                  <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
                    {t("success_desc")}
                  </p>
                  <button
                    onClick={() => setSentSuccess(false)}
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white rounded-lg border border-white/10 text-xs transition-colors cursor-pointer"
                  >
                    {t("success_close")}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

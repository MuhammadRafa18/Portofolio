import { useTranslations } from "next-intl";
import { Project, Skill, WorkExperience } from "./types";





export const EXPERIENCES: WorkExperience[] = [
  {
    id: "exp-1",
    role: "Backend / Web Developer Intern",
    company: "PT Inspirasi Solusi Kreatif",
    duration: "Desember 2025 - Februari 2026",
    description: [
      "Mengembangkan RESTful API menggunakan Laravel untuk mendukung sistem website dengan admin panel.",
      "Merancang struktur database relasional dan alur data untuk pengelolaan konten dinamis.",
      "Menerapkan autentikasi dan role-based access control menggunakan middleware Laravel.",
      "Mengelola validasi, error handling, serta melakukan pengujian API dan integrasi dengan tim frontend.",
    ],
    tags: ["Laravel", "PHP", "MySQL", "RESTful API", "RBAC"],
    glowAccent: "border-l-violet-500 shadow-violet-500/10",
  },
  {
    id: "exp-2",
    role: "Web Developer Intern (PKL)",
    company: "PT Len Telekomunikasi Indonesia",
    duration: "Januari 2023 - Maret 2023",
    description: [
      "Mengembangkan website company profile menggunakan Laravel dan MySQL.",
      "Membangun sistem pengelolaan konten berbasis backend untuk kebutuhan admin.",
      "Mendesain prototype UI menggunakan Figma sebagai dasar implementasi frontend.",
    ],
    tags: ["Laravel", "MySQL", "Figma", "HTML", "CSS"],
    glowAccent: "border-l-blue-500 shadow-blue-500/10",
  },
];

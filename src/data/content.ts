// Semua isi website ada di file ini. Edit teks, link, proyek, dan pengalaman di sini saja.
// Bagian bertanda TODO perlu kamu isi / cek ulang.

export const profile = {
  name: "Dzaki Yushiibanaa",
  brand: "Dzaki Yushiibanaa",
  shortName: "Dzaki Y.",
  logo: "/logo.jpg",
  avatar: "/avatar.jpg",
  status: "👋 Open for Internships & Cool Projects!",
  chip: "Informatics Engineering Graduate • Universitas Pancasila",
  bio: "Informatics Engineering graduate focused on UI/UX design and full-stack web development, creating interfaces that are simple, consistent, and easy to use.",
  email: "dzakiyushibanaa@gmail.com",
  linkedin: "https://www.linkedin.com/in/dzaki-yushiibanaa",
  github: "https://github.com/DzakiYushiibanaa",
  cv: "/Dzaki-Yushiibanaa-CV.pdf",
  location: "Depok, Indonesia",
};

export const marquee = [
  "⚡ UI/UX DESIGN",
  "🚀 WEB-BASED INFORMATION SYSTEMS",
  "🎨 PLAYFUL INTERACTIVE EXPERIENCES",
  "☕ POWERED BY CODE & MATCHA LATTE",
  "⚡ LARAVEL • FILAMENT • REACT • TYPESCRIPT",
  "🧩 MYSQL • TAILWIND CSS",
];

export const about = {
  desc: "Bridging the analytical power of Computer Science with high-fidelity, delightful digital interfaces.",
  title: "Designing Interfaces, Building the Systems Behind Them ✨",
  paragraphs: [
    "Informatics Engineering graduate of Universitas Pancasila with a GPA of 3.64. Experienced as a UI/UX Designer: designing website interfaces, mapping user flows and page layouts, and building wireframes and interactive prototypes in Figma.",
    "During my internship, I designed the interface for paketcgratis.com, focusing on a look that is informative, simple, and easy to use. I can also turn designs into responsive websites with HTML, CSS, JavaScript, and Tailwind CSS, and build web-based information systems with Laravel and MySQL.",
    "I understand user research, solution ideation, and design validation, work well both in a team and independently, and always aim for interfaces that are clear, consistent, and easy to use.",
  ],
  pills: ["User Research", "Figma Prototyping", "Responsive Web"],
  facts: [
    { tone: 0, badge: "ACADEMIC 🎓", icon: "school", title: "Informatics Engineering (S.Kom)", text: "Universitas Pancasila • GPA 3.64 • Thesis on a web-based beauty clinic management information system." },
    { tone: 1, badge: "BASE & MOBILITY 📍", icon: "distance", title: "Depok & Jakarta, Indonesia 🇮🇩", text: "Comfortably available for hybrid and on-site internships across Greater Jakarta (Jabodetabek), and open to remote teams." },
    { tone: 2, badge: "CORE DOMAIN ⚡", icon: "memory", title: "UI/UX & Full-Stack Web", text: "Information systems with Laravel and Filament, interfaces designed in Figma and built with React, TypeScript, and Tailwind CSS." },
  ],
  stats: [
    { value: "2", label: "Internships", color: "text-primary", hover: "hover:rotate-1" },
    { value: "3", label: "Featured Projects", color: "text-secondary", hover: "hover:-rotate-1" },
    { value: "1", label: "Thesis Project", color: "text-tertiary", hover: "hover:rotate-1" },
    { value: "100%", label: "Curiosity & Drive", color: "text-on-primary-container", hover: "hover:-rotate-1" },
  ],
};

// TODO: cek ulang teks pengalaman ini, lalu tambah atau ubah sesuai kebutuhan.
export const experiences = [
  {
    role: "UI/UX Designer",
    type: "INTERNSHIP",
    company: "Kampus Gratis",
    period: "Feb 2025 – Jul 2025",
    points: ["Designed the UI and interactive Figma prototype for the Paket C Gratis website, from wireframes, layouts, and user flows to implementation-ready visuals."],
    tech: ["Figma", "UI/UX", "Prototyping"],
  },
  {
    role: "Junior Web Dev UI/UX",
    type: "INTERNSHIP",
    company: "PT. Vinix Seven Aurum",
    period: "Aug 2025 – Nov 2025",
    points: ["Worked on a web-based clinic information system, handling UI/UX design and landing page development."],
    tech: ["Figma", "UI/UX", "HTML", "CSS", "JavaScript"],
  },
];

export type Project = {
  path: string; category: string; label: string; meta: string; title: string; description: string;
  stack: string[]; demo?: { label: string; icon: string; href: string }; source?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    path: "web/clinic-management", category: "Full-Stack ⚡", label: "HEALTHCARE & THESIS", meta: "Thesis",
    title: "Beauty Clinic Management System",
    description: "Web-based management information system for Klinik Aishi Beauty that brings schedules, treatment records, and transactions into one dashboard. Built as my undergraduate thesis.",
    stack: ["Laravel 12", "Filament 4", "Tailwind CSS", "MySQL"],
    image: "/projects/clinic.png",
    // demo: { label: "Case Study", icon: "article", href: "https://..." },
    source: "https://github.com/DzakiYushiibanaa/Klinik-Aishi-Beauty-By-Dr.Els.git",
  },
  {
    path: "web/paket-c-website", category: "UI/UX 🎨", label: "WEB DESIGN", meta: "Internship",
    title: "Paket C Website Design",
    description: "Informative, easy-to-use website design for the Paket C Gratis platform, from user flows and wireframes to an interactive Figma prototype.",
    stack: ["UI/UX", "Website", "Figma", "Prototyping"],
    image: "/projects/paket-c.png",
    demo: { label: "Website", icon: "link", href: "https://paketcgratis.com/" },
  },
  {
    path: "web/renzati-shop", category: "Full-Stack ⚡", label: "E-COMMERCE & TEAM PROJECT", meta: "Group Project",
    title: "Renzati Shop E-Commerce",
    description: "Full-stack e-commerce website built as a group assignment, featuring product search, product recommendations, user accounts, and a shopping cart. I worked on both the front-end interface and the back-end logic.",
    stack: ["Laravel", "Tailwind CSS", "MySQL"],
    image: "/projects/ecommerce.png",
    // demo: { label: "Case Study", icon: "article", href: "https://..." },
    source: "https://github.com/DzakiYushiibanaa/E-COMMERCE_KEL-4_PBW_A.git",
  },
];

export const skills = [
  {
    num: "01", tone: 0, title: "Design & Research", foot: "Research-driven, user-centered design", items: [
      ["Figma", "Design Tool"], ["Wireframing & Prototyping", "UX Flow"], ["User Research", "Interviews"], ["Usability Testing", "Validation"], ["Landing Pages", "UI Build"]]
  },
  {
    num: "02", tone: 1, title: "Frameworks & Web", foot: "Component systems & clean architectures", items: [
      ["Laravel", "Primary Backend"], ["Filament", "Admin Panels"], ["React & TypeScript", "Front-end"], ["Tailwind CSS", "Responsive UI"]]
  },
  {
    num: "03", tone: 2, title: "Backend & Tools", foot: "Reliable APIs & clean data models", items: [
      ["MySQL", "Database"], ["Git & GitHub", "Version Control"], ["Vercel", "Deployment"]]
  },
] as const;

export const softSkills = [
  { emoji: "🧩", label: "Problem Solving", cls: "bg-primary-fixed text-on-primary-fixed hover:-rotate-2" },
  { emoji: "🤝", label: "Teamwork", cls: "bg-secondary-fixed text-on-secondary-fixed hover:rotate-2" },
  { emoji: "📢", label: "Communication", cls: "bg-tertiary-fixed text-on-tertiary-fixed hover:-rotate-1" },
  { emoji: "⏱️", label: "Time Management", cls: "bg-primary-fixed-dim text-on-primary-fixed hover:rotate-1" },
  { emoji: "🔄", label: "Adaptability", cls: "bg-secondary-fixed-dim text-on-secondary-fixed hover:-rotate-2" },
  { emoji: "🔍", label: "Attention to Detail", cls: "bg-tertiary-fixed-dim text-on-tertiary-fixed hover:rotate-2" },
];

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  status?: "Active" | "Expired" | "Lifetime" | string;
  validUntil?: string; // opsional: contoh "2028"
  link?: string;
}

// TODO: isi dengan sertifikat asli kamu. "link" opsional (URL kredensial).
// "status" opsional: "Active" (Aktif 🟢), "Expired" (Kadaluarsa 🔴), "Lifetime" (Seumur Hidup ♾️), atau teks bebas lainnya.
export const certifications: Certification[] = [
  {
    title: "Uji Kompetensi - SYSTEM ANALYST",
    issuer: "BNSP LIA UP",
    year: "2026",
    status: "Active",
  },
  {
    title: "LIA Online Test for EPT - Score 587",
    issuer: "LIA",
    year: "2026",
    status: "Active",
  },
  {
    title: "UI/UX Training MOOC",
    issuer: "Kementerian Investasi dan Hilirisasi/BKPM",
    year: "2026",
    status: "Active",
  },
  {
    title: "Junior Web Dev UI/UX MSIB Batch 3",
    issuer: "PT VINIX SEVEN AURUM",
    year: "2025",
    status: "Active",
  },
  {
    title: "Web Design Lab Assistant",
    issuer: "Universitas Pancasila",
    year: "2026",
    status: "Active",
  },
  {
    title: "Computer Networks Laboratory Assistant",
    issuer: "Universitas Pancasila",
    year: "2025",
    status: "Active",
  },
];

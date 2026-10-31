import { useEffect, useState } from "react";
import { profile } from "../data/content";
import Icon from "./Icon";

const links = [
  { id: "home", label: "Home", hover: "hover:bg-secondary-fixed hover:text-on-secondary-fixed" },
  { id: "about", label: "About", hover: "hover:bg-secondary-fixed hover:text-on-secondary-fixed" },
  { id: "experience", label: "Experience", hover: "hover:bg-tertiary-fixed hover:text-on-tertiary-fixed" },
  { id: "projects", label: "Projects", hover: "hover:bg-primary-fixed-dim hover:text-on-primary-fixed" },
  { id: "skills", label: "Skills", hover: "hover:bg-secondary-fixed-dim hover:text-on-secondary-fixed" },
  { id: "certifications", label: "Certs", hover: "hover:bg-primary-fixed hover:text-on-primary-fixed" },
  { id: "contact", label: "Contact", hover: "hover:bg-tertiary-fixed-dim hover:text-on-tertiary-fixed" },
];
const activeCls = "bg-secondary-fixed text-on-secondary-fixed border-on-surface shadow-[2px_2px_0px_#1b1b1e] font-bold";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach((l) => { const el = document.getElementById(l.id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-gutter-mobile pt-space-sm lg:px-margin">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between rounded-full border-[2.5px] border-on-surface bg-surface-container-lowest px-space-md shadow-[4px_4px_0px_#1b1b1e] lg:px-space-lg">
        <a href="#home" className="flex items-center gap-space-xs transition-transform hover:-rotate-2">
          <img src={profile.logo} alt="Logo" className="h-9 w-9 rounded-full border-[2px] border-on-surface object-cover object-top shadow-[2px_2px_0px_#1b1b1e]" />
          <span className="flex items-center gap-1.5 font-headline-sm text-headline-sm tracking-tight">{profile.brand} <span className="text-body-lg text-primary">🚀</span></span>
        </a>
        <nav aria-label="Main" className="hidden items-center gap-1 rounded-full border-[2px] border-on-surface bg-surface-container-low p-1 lg:flex">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} aria-current={active === l.id ? "page" : undefined}
              className={`rounded-full border-[2px] px-2.5 py-1.5 font-label-badge text-label-badge transition-transform active:translate-y-0.5 ${active === l.id ? activeCls : `border-transparent text-on-surface-variant ${l.hover}`}`}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-space-sm">
          <a href={profile.cv} download="CV_DzakiYushiibanaa.pdf" target="_blank" rel="noopener noreferrer" className="hidden items-center gap-1.5 rounded-lg border-[2.5px] border-on-surface bg-primary-container px-3.5 py-1.5 font-label-code text-label-code text-on-primary-container shadow-[3px_3px_0px_#1b1b1e] transition-all hover:-rotate-1 hover:shadow-[5px_5px_0px_#1b1b1e] active:translate-x-1 active:translate-y-1 active:shadow-none xl:inline-flex">
            <span>Download CV</span><Icon name="download" className="text-body-md" />
          </a>
          <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-lg border-[2.5px] border-on-surface bg-primary-container shadow-[2px_2px_0px_#1b1b1e] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none lg:hidden">
            <Icon name={open ? "close" : "menu"} />
          </button>
          <div className="rounded-full border-[2.5px] border-on-surface bg-surface-container-lowest p-0.5 shadow-[2px_2px_0px_#1b1b1e] transition-transform hover:rotate-6">
            <img src={profile.avatar} alt="Profile" className="h-8 w-8 rounded-full object-cover object-top" />
          </div>
        </div>
      </div>
      {open && (
        <nav aria-label="Mobile" className="mx-auto mt-3 flex max-w-[1280px] flex-col gap-2 rounded-2xl border-[2.5px] border-on-surface bg-surface-container-lowest p-3 shadow-[4px_4px_0px_#1b1b1e] lg:hidden">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)} className={`rounded-xl border-[2px] border-on-surface px-4 py-2 font-label-code text-label-code ${active === l.id ? activeCls : "bg-surface-container-low"}`}>{l.label}</a>
          ))}
          <a href={profile.cv} download="CV_DzakiYushiibanaa.pdf" target="_blank" rel="noopener noreferrer" className="rounded-xl border-[2px] border-on-surface bg-primary-container px-4 py-2 font-label-code text-label-code text-on-primary-container">Download CV</a>
        </nav>
      )}
    </header>
  );
}

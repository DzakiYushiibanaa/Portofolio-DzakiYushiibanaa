import { profile } from "../data/content";
import Icon from "./Icon";

const pills = [
  "bg-primary-fixed text-on-primary-fixed",
  "bg-secondary-fixed text-on-secondary-fixed",
  "bg-tertiary-fixed text-on-tertiary-fixed",
];
const links = [
  { label: "GitHub", icon: "code", href: profile.github, cls: "hover:bg-secondary-fixed hover:text-on-secondary-fixed" },
  { label: "LinkedIn", icon: "business_center", href: profile.linkedin, cls: "hover:bg-primary-fixed hover:text-on-primary-fixed" },
  { label: "Email", icon: "alternate_email", href: `mailto:${profile.email}`, cls: "hover:bg-tertiary-fixed hover:text-on-tertiary-fixed" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t-[3px] border-on-surface bg-surface-container-low">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-space-md px-gutter-mobile py-space-lg text-center lg:px-margin">
        <div className="flex flex-wrap items-center justify-center gap-space-xs">
          {["UI/UX & Web Dev ⚡", "Always Learning 🛠️"].map((p, i) => (
            <span key={p} className={`rounded-full border-[2px] border-on-surface px-3 py-1 font-label-badge text-label-badge shadow-[2px_2px_0px_#1b1b1e] transition-transform hover:-translate-y-0.5 ${pills[i]}`}>{p}</span>
          ))}
        </div>
        <div className="flex items-center justify-center gap-space-sm">
          {links.map((l) => (
            <a key={l.label} aria-label={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
              className={`flex h-10 w-10 items-center justify-center rounded-xl border-[2px] border-on-surface bg-surface-container-lowest shadow-[3px_3px_0px_#1b1b1e] transition-all hover:-translate-y-1 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none ${l.cls}`}>
              <Icon name={l.icon} />
            </a>
          ))}
        </div>
        <div className="flex flex-col items-center gap-1.5 font-label-code text-label-code text-on-surface-variant md:flex-row">
          <span>© 2026 {profile.name}</span><span className="hidden md:inline">•</span><span>Crafted with Code & Matcha Latte ☕✨</span>
        </div>
      </div>
    </footer>
  );
}

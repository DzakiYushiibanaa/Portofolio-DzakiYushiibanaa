import { profile } from "../data/content";
import Icon from "./Icon";
import Dots from "./Dots";

const socials = [
  { label: "GitHub", icon: "terminal", href: profile.github, cls: "hover:bg-primary-fixed hover:-rotate-3" },
  { label: "LinkedIn", icon: "business_center", href: profile.linkedin, cls: "hover:bg-secondary-fixed hover:rotate-3" },
  { label: "Email", icon: "mail", href: `mailto:${profile.email}`, cls: "hover:bg-tertiary-fixed hover:-rotate-2" },
  { label: "CV", icon: "download", href: profile.cv, cls: "hover:bg-primary-fixed-dim hover:rotate-2" },
];

export default function Hero() {
  return (
    <section id="home" className="relative mx-auto w-full max-w-[1280px] px-gutter-mobile py-space-lg lg:px-margin lg:py-space-xl">
      <div className="pointer-events-none absolute -left-10 -top-6 -z-10 h-48 w-48 rounded-full bg-primary-fixed/40 blur-2xl" />
      <div className="pointer-events-none absolute -right-12 top-1/2 -z-10 h-64 w-64 rounded-full bg-secondary-fixed/50 blur-3xl" />
      <div className="grid grid-cols-1 items-center gap-space-lg lg:grid-cols-12 lg:gap-space-xl">
        <div className="flex flex-col items-start gap-space-md lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border-[2.5px] border-on-surface bg-surface-container-lowest px-4 py-1.5 shadow-[3px_3px_0px_#1b1b1e] transition-transform hover:-rotate-1">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-container opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-primary-container" />
            </span>
            <span className="font-label-badge text-label-badge tracking-wide">{profile.status}</span>
          </div>
          <div>
            <h1 className="font-headline-lg text-headline-lg leading-tight tracking-tight lg:font-display-hero lg:text-display-hero">
              Hi, I'm <span className="underline decoration-primary-container decoration-wavy decoration-4">{profile.name}</span>{" "}
              <span className="inline-block cursor-pointer transition-transform hover:scale-125">👨‍💻✨</span>
            </h1>
            <div className="mt-2 inline-flex items-center gap-2 rounded-lg border-[2px] border-on-surface bg-secondary-fixed px-3 py-1 font-label-code text-label-code text-on-secondary-fixed shadow-[2px_2px_0px_#1b1b1e]">
              <Icon name="school" className="text-body-md" />
              <span>{profile.chip}</span>
            </div>
          </div>
          <p className="max-w-xl font-body-lg text-body-lg leading-relaxed text-on-surface-variant">{profile.bio}</p>
          <div className="flex flex-wrap items-center gap-space-sm pt-2">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-xl border-[3px] border-on-surface bg-primary-container px-6 py-3.5 font-headline-sm text-headline-sm text-on-primary-container shadow-[4px_4px_0px_#1b1b1e] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#1b1b1e] active:translate-x-1 active:translate-y-1 active:shadow-none">
              <span>Explore Projects</span><Icon name="rocket_launch" className="font-bold" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border-[3px] border-on-surface bg-surface-container-lowest px-6 py-3.5 font-headline-sm text-headline-sm shadow-[4px_4px_0px_#1b1b1e] transition-all hover:-translate-y-0.5 hover:bg-secondary-fixed hover:text-on-secondary-fixed hover:shadow-[6px_6px_0px_#1b1b1e] active:translate-x-1 active:translate-y-1 active:shadow-none">
              <span>Let's Talk</span><Icon name="chat_bubble" />
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <span className="mr-1 font-label-code text-label-code text-on-surface-variant">Find me on:</span>
            {socials.map((s) => (
              <a key={s.label} href={s.href} target={s.href.startsWith("http") || s.href.endsWith(".pdf") ? "_blank" : undefined} rel="noopener noreferrer" download={s.href.endsWith(".pdf") ? "Dzaki-Yushiibanaa-CV.pdf" : undefined}
                className={`flex items-center gap-1.5 rounded-lg border-[2px] border-on-surface bg-surface-container-lowest px-3 py-1.5 font-label-badge text-label-badge shadow-[3px_3px_0px_#1b1b1e] transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none ${s.cls}`}>
                <Icon name={s.icon} className="text-body-sm" /><span>{s.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center lg:col-span-5">
          <div className="absolute -right-4 -top-4 z-20 rotate-6 rounded-lg border-[2.5px] border-on-surface bg-secondary-fixed px-3.5 py-1.5 font-label-code text-label-code text-on-secondary-fixed shadow-[4px_4px_0px_#1b1b1e] transition-transform hover:rotate-0">
            {'const vibe = "100%"; ✨'}
          </div>
          <div className="absolute -bottom-4 -left-4 z-20 flex -rotate-6 items-center gap-1 rounded-full border-[2.5px] border-on-surface bg-primary-fixed px-3 py-1.5 font-label-badge text-label-badge text-on-primary-fixed shadow-[4px_4px_0px_#1b1b1e] transition-transform hover:rotate-0">
            ☕ Fuel: Matcha Latte
          </div>
          <div className="relative flex w-full max-w-[380px] flex-col items-center rounded-2xl border-[3.5px] border-on-surface bg-surface-container-lowest p-4 pb-6 shadow-[8px_8px_0px_#1b1b1e] transition-transform duration-300 hover:-rotate-1">
            <div className="absolute -top-3 h-6 w-28 rotate-2 rounded-sm border-[2px] border-on-surface bg-primary-fixed/80 shadow-sm" />
            <div className="mb-3 flex w-full items-center justify-between border-b-[2.5px] border-on-surface pb-3">
              <Dots size="w-3.5 h-3.5" />
              <span className="font-label-code text-xs text-on-surface-variant">dzaki-photo.jpg</span>
            </div>
            <div className="group relative aspect-square w-full overflow-hidden rounded-xl border-[2.5px] border-on-surface bg-surface-container-high">
              <img src={profile.avatar} alt="Dzaki Yushiibanaa" className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute bottom-2 right-2 rounded-md bg-on-surface px-2.5 py-0.5 font-label-code text-xs text-surface">status: compiling ⚡</div>
            </div>
            <div className="mt-4 flex w-full items-center justify-between">
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm">{profile.shortName}</span>
                <span className="font-label-code text-xs text-on-surface-variant">Teknik Informatika • Universitas Pancasila</span>
              </div>
              <span className="text-2xl">🇮🇩</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

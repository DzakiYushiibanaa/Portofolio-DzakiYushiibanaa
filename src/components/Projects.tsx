import { useState } from "react";
import { projects } from "../data/content";
import { tones } from "../data/theme";
import Reveal from "./Reveal";
import Icon from "./Icon";
import Dots from "./Dots";
import SectionHeader from "./SectionHeader";

const filterHover = ["hover:bg-primary-fixed", "hover:bg-secondary-fixed", "hover:bg-tertiary-fixed", "hover:bg-primary-fixed-dim"];

function ProjectImage({ p }: { p: (typeof projects)[number] }) {
  const [error, setError] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden border-b-[2.5px] border-on-surface bg-surface-container-high">
      {p.image && !error ? (
        <img
          src={p.image}
          alt={`${p.title} preview`}
          loading="lazy"
          onError={() => setError(true)}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-1 text-on-surface-variant">
          <Icon name="image" className="text-4xl" />
          <span className="font-label-code text-xs">preview coming soon</span>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const cats = Array.from(new Set(projects.map((p) => p.category)));
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? projects : projects.filter((p) => p.category === cat);
  const btn = "cursor-pointer rounded-full border-[2px] border-on-surface px-4 py-1.5 font-label-badge text-label-badge shadow-[2px_2px_0px_#1b1b1e] transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none";

  return (
    <section id="projects" className="mx-auto w-full max-w-[1280px] px-gutter-mobile py-space-xl lg:px-margin">
      <SectionHeader badge="03 // SELECTED PORTFOLIO" tone={2} title="FEATURED CREATIONS" emoji="🛠️" emojiClass="rotate-12" desc="A hand-picked selection of production systems, academic capstones, and creative prototypes." />
      <div className="mb-space-lg flex flex-wrap items-center justify-center gap-2">
        {["All", ...cats].map((c, i) => (
          <button key={c} type="button" onClick={() => setCat(c)} aria-pressed={cat === c}
            className={`${btn} ${cat === c ? "bg-on-surface text-surface" : `bg-surface-container-lowest text-on-surface ${filterHover[i % 4]}`}`}>
            {c === "All" ? `All Projects (${projects.length})` : c}
          </button>
        ))}
      </div>
      <div className={`grid grid-cols-1 gap-space-md md:grid-cols-2 lg:gap-space-lg ${list.length > 2 ? "lg:grid-cols-3" : ""}`}>
        {list.map((p, i) => {
          const t = tones[i % 3];
          return (
            <Reveal key={p.title} delay={i * 100} className="h-full">
              <article className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border-[3px] border-on-surface bg-surface-container-lowest shadow-[5px_5px_0px_#1b1b1e] transition-all hover:-translate-y-1 hover:shadow-[7px_7px_0px_#1b1b1e]">
                <div>
                  <div className={`flex items-center justify-between border-b-[2.5px] border-on-surface px-4 py-2.5 ${t.card}`}>
                    <Dots />
                    <span className={`font-label-code text-xs font-bold ${t.title}`}>{p.path}</span>
                  </div>
                  <ProjectImage p={p} />
                  <div className="p-space-md">
                    <div className="mb-2 flex items-center justify-between">
                      <span className={`rounded-full border border-on-surface px-2.5 py-0.5 font-label-badge text-xs font-bold ${tones[(i + 1) % 3].fixed}`}>{p.label}</span>
                      <span className="font-label-code text-xs font-bold text-on-surface-variant">{p.meta}</span>
                    </div>
                    <h3 className="mb-2 font-headline-sm text-headline-sm">{p.title}</h3>
                    <p className="mb-4 font-body-sm text-body-sm leading-relaxed text-on-surface-variant">{p.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.map((s) => <span key={s} className="rounded border border-on-surface bg-surface-container-high px-2 py-0.5 font-label-code text-xs transition-transform hover:-translate-y-0.5">{s}</span>)}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2 border-t-[2px] border-on-surface px-space-md pb-space-md pt-3">
                  {p.demo && (
                    <a href={p.demo.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-lg border-[2px] border-on-surface bg-primary-container px-3 py-1.5 font-label-code text-xs font-bold text-on-primary-container shadow-[2px_2px_0px_#1b1b1e] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none">
                      <span>{p.demo.label}</span><Icon name={p.demo.icon} className="text-xs" />
                    </a>
                  )}
                  {p.source && (
                    <a href={p.source} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-lg border-[2px] border-on-surface bg-surface-container-lowest px-3 py-1.5 font-label-code text-xs font-bold shadow-[2px_2px_0px_#1b1b1e] transition-all hover:bg-surface-container-high">
                      <Icon name="code" className="text-xs" /><span>Source</span>
                    </a>
                  )}
                  {!p.demo && !p.source && <span className="font-label-code text-xs text-on-surface-variant">Case study coming soon ✨</span>}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

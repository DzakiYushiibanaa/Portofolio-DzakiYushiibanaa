import { skills, softSkills } from "../data/content";
import { tones } from "../data/theme";
import Reveal from "./Reveal";
import Icon from "./Icon";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="w-full border-y-[3px] border-on-surface bg-surface-container-low py-space-xl">
      <div className="mx-auto max-w-[1280px] px-gutter-mobile lg:px-margin">
        <SectionHeader badge="04 // TOOLKIT & ARSENAL" tone={0} title="SUPERPOWERS & SKILLS" emoji="⚡" emojiClass="" desc="The technologies, tools, and soft skills I use to turn ideas into reliable software." />
        <div className="mb-space-lg grid grid-cols-1 gap-space-md lg:grid-cols-3">
          {skills.map((c, i) => {
            const t = tones[c.tone];
            return (
              <Reveal key={c.title} delay={i * 100} className="h-full">
                <div className="flex h-full flex-col justify-between rounded-2xl border-[3px] border-on-surface bg-surface-container-lowest p-space-md shadow-[5px_5px_0px_#1b1b1e]">
                  <div>
                    <div className="mb-4 flex items-center gap-2">
                      <span className={`flex h-8 w-8 items-center justify-center rounded-lg border-[2px] border-on-surface font-bold ${t.fixed}`}>{c.num}</span>
                      <h3 className="font-headline-sm text-headline-sm">{c.title}</h3>
                    </div>
                    <div className="flex flex-col gap-2.5">
                      {c.items.map(([name, note]) => (
                        <div key={name} className={`flex items-center justify-between rounded-xl border-[2px] border-on-surface p-2.5 transition-all hover:translate-x-1 hover:shadow-[3px_3px_0px_#1b1b1e] ${t.soft}`}>
                          <span className="font-label-code text-label-code font-bold">{name}</span>
                          <span className="rounded border border-on-surface bg-surface-container-lowest px-2 py-0.5 font-label-badge text-xs">{note}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-1 pt-2 font-label-code text-xs text-on-surface-variant">
                    <Icon name="verified" className={`text-sm ${t.accent}`} />{c.foot}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal>
          <div className="rounded-2xl border-[3px] border-on-surface bg-surface-container-lowest p-space-md shadow-[4px_4px_0px_#1b1b1e]">
            <div className="mb-4 flex items-center justify-between border-b-[2px] border-on-surface pb-3">
              <span className="font-headline-sm text-headline-sm">Developer Superpowers & Soft Skills 🌟</span>
              <span className="hidden font-label-code text-xs text-on-surface-variant sm:inline">human_traits.json</span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {softSkills.map((s) => (
                <div key={s.label} className={`inline-flex cursor-default items-center gap-2 rounded-xl border-[2px] border-on-surface px-4 py-2 shadow-[3px_3px_0px_#1b1b1e] transition-transform ${s.cls}`}>
                  <span className="text-xl">{s.emoji}</span><span className="font-headline-sm text-sm">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

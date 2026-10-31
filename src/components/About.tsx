import { about } from "../data/content";
import { tones } from "../data/theme";
import Reveal from "./Reveal";
import Icon from "./Icon";
import Dots from "./Dots";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-[1280px] px-gutter-mobile py-space-xl lg:px-margin">
      <SectionHeader badge="01 // DOSSIER" tone={0} title="ABOUT ME" emoji="📖" emojiClass="rotate-6" desc={about.desc} />
      <div className="mb-space-lg grid grid-cols-1 gap-space-md lg:grid-cols-12 lg:gap-space-lg">
        <Reveal className="lg:col-span-6">
          <div className="flex h-full flex-col justify-between rounded-2xl border-[3px] border-on-surface bg-surface-container-lowest p-space-md shadow-[5px_5px_0px_#1b1b1e] lg:p-space-lg">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Dots />
                <span className="ml-2 font-label-code text-label-code text-on-surface-variant">terminal://bio-story.txt</span>
              </div>
              <h3 className="mb-3 font-headline-md text-headline-md">{about.title}</h3>
              {about.paragraphs.map((p) => <p key={p} className="mb-4 font-body-md text-body-md leading-relaxed text-on-surface-variant">{p}</p>)}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-2 border-t-[2px] border-on-surface pt-4">
              {about.pills.map((p, i) => (
                <span key={p} className={`rounded-md border-[1.5px] border-on-surface px-3 py-1 font-label-badge text-label-badge shadow-[2px_2px_0px_#1b1b1e] transition-transform hover:-translate-y-0.5 ${tones[i % 3].fixed}`}>{p}</span>
              ))}
            </div>
          </div>
        </Reveal>
        <div className="flex flex-col justify-between gap-space-sm lg:col-span-6">
          {about.facts.map((f, i) => {
            const t = tones[f.tone];
            return (
              <Reveal key={f.title} delay={i * 100}>
                <div className={`flex items-start gap-4 rounded-2xl border-[3px] border-on-surface p-space-md shadow-[4px_4px_0px_#1b1b1e] transition-transform hover:-translate-y-1 ${t.card}`}>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-[2px] border-on-surface bg-surface-container-lowest shadow-[2px_2px_0px_#1b1b1e]">
                    <Icon name={f.icon} className={`text-2xl font-bold ${t.accent}`} />
                  </div>
                  <div>
                    <div className="mb-1 inline-block rounded border border-on-surface bg-surface-container-lowest px-2 py-0.5 font-label-badge text-xs">{f.badge}</div>
                    <h4 className={`font-headline-sm text-headline-sm ${t.title}`}>{f.title}</h4>
                    <p className={`mt-0.5 font-body-sm text-body-sm ${t.body}`}>{f.text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-space-sm md:grid-cols-4">
        {about.stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <div className={`rounded-xl border-[2.5px] border-on-surface bg-surface-container-lowest p-4 text-center shadow-[3px_3px_0px_#1b1b1e] transition-transform ${s.hover}`}>
              <span className={`block font-headline-lg text-headline-lg font-extrabold ${s.color}`}>{s.value}</span>
              <span className="font-label-code text-xs font-bold uppercase">{s.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

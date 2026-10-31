import { experiences } from "../data/content";
import { tones } from "../data/theme";
import Reveal from "./Reveal";
import Icon from "./Icon";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="w-full border-y-[3px] border-on-surface bg-surface-container-low py-space-xl">
      <div className="mx-auto max-w-[1280px] px-gutter-mobile lg:px-margin">
        <SectionHeader badge="02 // TRACK RECORD" tone={1} title="CAREER & JOURNEY" emoji="💼" emojiClass="-rotate-6" desc="Real-world roles and impactful engineering contributions." />
        <div className="mx-auto flex max-w-4xl flex-col gap-space-md">
          {experiences.map((e, i) => {
            const t = tones[i % 3];
            return (
              <Reveal key={e.company} delay={i * 100}>
                <article className="rounded-2xl border-[3px] border-on-surface bg-surface-container-lowest p-space-md shadow-[5px_5px_0px_#1b1b1e] transition-all hover:-translate-y-1 hover:shadow-[7px_7px_0px_#1b1b1e] lg:p-space-lg">
                  <div className="mb-4 flex flex-col justify-between gap-2 border-b-[2px] border-on-surface pb-3 md:flex-row md:items-center">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-headline-md text-headline-md">{e.role}</h3>
                        <span className={`rounded-full border-[1.5px] border-on-surface px-2.5 py-0.5 font-label-badge text-label-badge ${t.fixed}`}>{e.type}</span>
                      </div>
                      <p className={`font-body-md font-bold ${t.accent}`}>{e.company}</p>
                    </div>
                    <div className="flex w-fit items-center gap-1 rounded-lg border-[1.5px] border-on-surface bg-surface-container-low px-3 py-1.5 font-label-code text-label-code">
                      <Icon name="calendar_month" className="text-body-sm" /><span>{e.period}</span>
                    </div>
                  </div>
                  <ul className="list-disc space-y-2.5 pl-5 font-body-md text-body-md text-on-surface-variant">
                    {e.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2 border-t-[2px] border-on-surface pt-3">
                    {e.tech.map((x, j) => (
                      <span key={x} className={`rounded border border-on-surface px-2.5 py-1 font-label-code text-xs font-bold transition-transform hover:-translate-y-0.5 ${tones[(i + j) % 3].fixed}`}>{x}</span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

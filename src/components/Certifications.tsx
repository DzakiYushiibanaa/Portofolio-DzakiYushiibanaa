import { certifications } from "../data/content";
import { tones } from "../data/theme";
import Reveal from "./Reveal";
import Icon from "./Icon";
import SectionHeader from "./SectionHeader";

type CertificationItem = (typeof certifications)[number] & {
  status?: string;
  isActive?: boolean;
  validUntil?: string;
};

function StatusBadge({ cert }: { cert: CertificationItem }) {
  const rawStatus =
    cert.status ??
    (cert.isActive === true ? "Active" : cert.isActive === false ? "Expired" : "Active");

  if (!rawStatus) return null;

  const normalized = rawStatus.toLowerCase().trim();
  if (normalized === "none" || normalized === "hide") return null;

  let dotClass = "bg-emerald-500 animate-pulse";
  let textClass = "text-emerald-950";
  let label = rawStatus;

  if (normalized === "active" || normalized === "aktif") {
    dotClass = "bg-emerald-500 animate-pulse";
    textClass = "text-emerald-950";
    label = cert.validUntil ? `Active • ${cert.validUntil}` : "Active";
  } else if (normalized === "expired" || normalized === "kadaluarsa" || normalized === "tidak aktif") {
    dotClass = "bg-rose-500";
    textClass = "text-rose-950";
    label = "Expired";
  } else if (normalized === "lifetime" || normalized === "seumur hidup") {
    dotClass = "bg-sky-500";
    textClass = "text-sky-950";
    label = "Lifetime";
  } else {
    dotClass = "bg-amber-500";
    textClass = "text-amber-950";
  }

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-on-surface bg-surface-container-lowest px-2.5 py-0.5 font-label-code text-[11px] font-bold shadow-[2px_2px_0px_#1b1b1e] ${textClass}`}>
      <span className={`h-2 w-2 shrink-0 rounded-full ${dotClass}`} />
      <span>{label}</span>
    </span>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto w-full max-w-[1280px] px-gutter-mobile py-space-xl lg:px-margin">
      <SectionHeader badge="05 // CREDENTIALS" tone={1} title="CERTIFICATIONS" emoji="🏅" emojiClass="-rotate-6" desc="Proof of the learning I do beyond the classroom." />
      <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => {
          const t = tones[i % 3];
          return (
            <Reveal key={i} delay={i * 100} className="h-full">
              <article className={`group flex h-full flex-col justify-between rounded-2xl border-[3px] border-on-surface p-space-md shadow-[4px_4px_0px_#1b1b1e] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_#1b1b1e] ${t.card}`}>
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-[2px] border-on-surface bg-surface-container-lowest shadow-[2px_2px_0px_#1b1b1e] transition-transform group-hover:-rotate-6 group-hover:scale-110">
                      <Icon name="workspace_premium" className={`text-2xl ${t.accent}`} />
                    </div>
                    <StatusBadge cert={c} />
                  </div>
                  <div className="mt-3.5">
                    <h3 className={`font-headline-sm text-headline-sm leading-snug ${t.title}`}>{c.title}</h3>
                    <p className={`mt-1 font-body-sm text-body-sm font-medium ${t.body}`}>{c.issuer}</p>
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between gap-2 border-t-[1.5px] border-on-surface/20 pt-3">
                  <span className="rounded-md border-[1.5px] border-on-surface bg-surface-container-lowest px-2.5 py-0.5 font-label-code text-xs font-bold shadow-[1px_1px_0px_#1b1b1e]">{c.year}</span>
                  {c.link && (
                    <a href={c.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-lg border-[2px] border-on-surface bg-surface-container-lowest px-3 py-1.5 font-label-code text-xs font-bold shadow-[2px_2px_0px_#1b1b1e] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none">
                      <span>View</span><Icon name="open_in_new" className="text-xs" />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

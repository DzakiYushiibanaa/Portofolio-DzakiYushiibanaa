import { marquee } from "../data/content";

export default function Marquee() {
  const row = (k: string) => (
    <div key={k} className="flex shrink-0 items-center gap-8 pr-8" aria-hidden={k === "b" ? true : undefined}>
      {marquee.map((m) => (
        <span key={m} className="flex items-center gap-8"><span>{m}</span><span>•</span></span>
      ))}
    </div>
  );
  return (
    <div className="w-full overflow-hidden whitespace-nowrap border-y-[3px] border-on-surface bg-primary-container py-2.5 shadow-[0px_4px_0px_#1b1b1e]">
      <div className="flex w-max animate-marquee font-label-code text-label-code font-extrabold uppercase tracking-wider text-on-primary-container hover:[animation-play-state:paused]">
        {row("a")}{row("b")}
      </div>
    </div>
  );
}

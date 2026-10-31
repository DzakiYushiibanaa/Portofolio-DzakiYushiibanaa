import { tones } from "../data/theme";
import Reveal from "./Reveal";

type Props = { badge: string; tone: number; title: string; emoji: string; emojiClass: string; desc: string };

export default function SectionHeader({ badge, tone, title, emoji, emojiClass, desc }: Props) {
  return (
    <Reveal>
      <div className="mb-space-lg flex flex-col items-center gap-space-xs text-center">
        <div className={`inline-flex items-center gap-2 rounded-full border-[2.5px] border-on-surface px-4 py-1.5 shadow-[3px_3px_0px_#1b1b1e] ${tones[tone].fixed}`}>
          <span className="font-label-code text-label-code">{badge}</span>
        </div>
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          {title} <span className={`inline-block transition-transform hover:scale-125 ${emojiClass}`}>{emoji}</span>
        </h2>
        <p className="max-w-xl font-body-md text-body-md text-on-surface-variant">{desc}</p>
      </div>
    </Reveal>
  );
}

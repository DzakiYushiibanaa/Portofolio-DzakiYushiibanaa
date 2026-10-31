export default function Dots({ size = "w-3 h-3" }: { size?: string }) {
  return (
    <span className="flex items-center gap-1.5" aria-hidden="true">
      <span className={`${size} rounded-full border-[1.5px] border-on-surface bg-tertiary`} />
      <span className={`${size} rounded-full border-[1.5px] border-on-surface bg-primary-container`} />
      <span className={`${size} rounded-full border-[1.5px] border-on-surface bg-secondary`} />
    </span>
  );
}

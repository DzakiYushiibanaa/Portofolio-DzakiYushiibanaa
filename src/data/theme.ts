// Tiga warna tema neo-brutalist yang dipakai bergantian di kartu dan badge.
export const tones = [
  { fixed: "bg-primary-fixed text-on-primary-fixed", soft: "bg-primary-fixed/40", card: "bg-primary-fixed", title: "text-on-primary-fixed", body: "text-on-primary-fixed-variant", accent: "text-primary" },
  { fixed: "bg-secondary-fixed text-on-secondary-fixed", soft: "bg-secondary-fixed/40", card: "bg-secondary-fixed", title: "text-on-secondary-fixed", body: "text-on-secondary-fixed-variant", accent: "text-secondary" },
  { fixed: "bg-tertiary-fixed text-on-tertiary-fixed", soft: "bg-tertiary-fixed/40", card: "bg-tertiary-fixed", title: "text-on-tertiary-fixed", body: "text-on-tertiary-fixed-variant", accent: "text-tertiary" },
] as const;

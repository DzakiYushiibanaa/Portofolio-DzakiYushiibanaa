# Portofolio Dzaki

React + TypeScript + Tailwind CSS + Vite (desain neo-brutalist).

## Jalankan lokal
    npm install
    npm run dev

## Ganti isi
Semua teks, link, proyek, pengalaman, dan sertifikasi ada di `src/data/content.ts`.
Yang bertanda `TODO`: link GitHub, file CV (`public/cv.pdf`), pengalaman, dan sertifikasi.
Gambar logo dan avatar masih memakai link dari desain; unduh lalu taruh di `public/` dan ganti URL-nya supaya tidak hilang.

## Deploy ke Vercel
1. Push folder ini ke repo GitHub.
2. Di vercel.com pilih Add New > Project, lalu import repo itu.
3. Framework Preset otomatis "Vite" (build `npm run build`, output `dist`). Klik Deploy.

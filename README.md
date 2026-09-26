# Portofolio Pribadi - Muhammad Iqbal Firdaus (Kyudyoz)

Website portofolio modern minimalis yang menampilkan proyek-proyek dan repositori GitHub milik **Muhammad Iqbal Firdaus** ([@Kyudyoz](https://github.com/Kyudyoz)).

Dibuat menggunakan **React + Vite + Tailwind CSS**, dilengkapi fitur *Dark/Light Mode Switch*, pencarian proyek interaktif, filter kategori, dan desain responsif.

---

## 🚀 Fitur Utama

- ⚡ **React 18 + Vite:** Performa cepat, bundling kilat, dan arsitektur komponen modern.
- 🎨 **Tailwind CSS (Modern Minimalist):** Tipografi bersih (*Inter font*), efek blur halus, batas subtle, dan aksen warna emerald.
- 🌓 **Dark / Light Mode Switch:** Beralih tema secara mulus, tersimpan otomatis di `localStorage`.
- 📱 **Sepenuhnya Responsif:** Tampilan optimal di perangkat smartphone, tablet, hingga desktop (dilengkapi mobile drawer menu).
- 📂 **Showcase Repositori & Proyek:**
  - **Pawon3D (Skripsi):** Sistem Manajemen Toko & POS (Laravel + Livewire + Tailwind CSS).
  - **POS Kafe:** Point of Sales dengan Livewire & Tailwind (Live di Vercel: [poskafe.vercel.app](https://poskafe.vercel.app)).
  - **Restaurant-App:** Capstone Fullstack Kelompok 5 (Kitchen & Dining management).
  - **Sisaku (Saku):** Aplikasi Mobile Personal Finance berbasis Flutter.
  - **ULAH (UNJA Lapor Hilang):** Sistem Informasi Lost & Found Universitas Jambi.
  - **Mini-Project:** Katalog Busana & Konveksi (GitHub Pages: [kyudyoz.github.io/Mini-Project](https://kyudyoz.github.io/Mini-Project/)).
  - **Surat Pengantar & Project-Surat:** Tata kelola administrasi surat mahasiswa (MPSI).
  - **Riset Operasi & Simplex:** Optimasi Linear Programming (Metode Grafik, Aljabar, dan Matriks Simplex Python/Laravel).
  - **Qwords Slicing:** Kolaborasi Rakamin x Qwords landing page.
  - **Fraxinus:** Proyek MVC Laravel Pemrograman Web 2.
- 🔍 **Filter & Pencarian Instan:** Temukan proyek berdasarkan kata kunci atau kategori.
- 💬 **Interaktif Modal:** Menampilkan detail spesifikasi, fitur sorotan, dan tautan repositori/demo.

---

## 🛠️ Menjalankan Proyek Secara Lokal

1. **Buka terminal di folder proyek:**
   ```bash
   cd C:\Users\IQBAL\.gemini\antigravity\scratch\kyudyoz-portfolio
   ```

2. **Jalankan Development Server:**
   ```bash
   npm run dev
   ```
   Akses di browser Anda: `http://localhost:5173`

3. **Build untuk Produksi:**
   ```bash
   npm run build
   ```
   File hasil build akan berada di folder `dist/`.

---

## 🌐 Panduan Deployment

### Opsi A: Deploy ke Vercel (Sangat Direkomendasikan)
1. Buat repositori baru di GitHub dengan nama `portfolio` atau `kyudyoz-portfolio`.
2. Push kode di direktori ini ke repositori tersebut:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Modern Minimalist Portfolio"
   git branch -M main
   git remote add origin https://github.com/Kyudyoz/kyudyoz-portfolio.git
   git push -u origin main
   ```
3. Buka [Vercel](https://vercel.com), import repositori tersebut, lalu klik **Deploy**.

### Opsi B: Deploy ke GitHub Pages
1. Install plugin gh-pages:
   ```bash
   npm install -D gh-pages
   ```
2. Tambahkan `base: '/kyudyoz-portfolio/'` di `vite.config.js`.
3. Tambahkan script `"deploy": "gh-pages -d dist"` di `package.json`, lalu jalankan:
   ```bash
   npm run build
   npm run deploy
   ```

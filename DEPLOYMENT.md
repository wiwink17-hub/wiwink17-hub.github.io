# GitHub Pages Deployment Guide

Proyek ini dikonfigurasi untuk deployment ke GitHub Pages di **https://wiwink17-hub.github.io/** pada direktori root `/`.

## Konfigurasi Yang Sudah Diterapkan

### ✅ Vite Configuration (`vite.config.ts`)
- `base: "/"` - Aplikasi berjalan di root directory
- `build.outDir: "dist"` - Output build ke folder dist
- `build.assetsDir: "assets"` - Asset files di folder assets
- `host: "0.0.0.0"` & `port: 5000` - Server development

### ✅ React Router Fix untuk GitHub Pages
- File `public/404.html` - Redirect untuk SPA routing
- Script redirect di `index.html` - Handle navigasi client-side
- File `public/.nojekyll` - Bypass Jekyll processing

### ✅ GitHub Actions Workflow (`.github/workflows/deploy.yml`)
Otomatis build dan deploy saat push ke branch `main`

## Langkah-Langkah Deployment

### 1. Pastikan Repository Name Benar
Repository harus bernama: **`wiwink17-hub.github.io`**

Jika nama repository berbeda, ubah dengan cara:
1. Buka Settings repository di GitHub
2. Scroll ke "Repository name"
3. Ubah menjadi `wiwink17-hub.github.io`
4. Klik "Rename"

### 2. Aktifkan GitHub Pages
1. Buka repository di GitHub: `https://github.com/wiwink17-hub/wiwink17-hub.github.io`
2. Klik **Settings** → **Pages**
3. Pada **Source**, pilih **GitHub Actions**
4. Save perubahan

### 3. Push Code ke GitHub
```bash
# Add semua file
git add .

# Commit dengan message
git commit -m "Setup untuk GitHub Pages deployment"

# Push ke branch main
git push origin main
```

### 4. Tunggu Deployment Selesai
1. Buka tab **Actions** di repository GitHub
2. Lihat progress workflow "Deploy to GitHub Pages"
3. Tunggu hingga status berubah menjadi ✅ (hijau)
4. Website akan tersedia di: **https://wiwink17-hub.github.io/**

## Development Lokal

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
Aplikasi akan berjalan di: `http://localhost:5000`

### Build untuk Production
```bash
npm run build
```
Hasil build ada di folder `dist/`

### Preview Production Build
```bash
npm run preview
```

## Troubleshooting

### Jika Halaman Tidak Muncul
1. **Cek Actions Tab** - Pastikan workflow berhasil (hijau ✅)
2. **Cek Settings → Pages** - Pastikan source adalah "GitHub Actions"
3. **Tunggu 2-5 menit** - GitHub Pages butuh waktu untuk propagate
4. **Hard Refresh Browser** - Tekan `Ctrl + Shift + R` (Windows/Linux) atau `Cmd + Shift + R` (Mac)

### Jika Routing Tidak Bekerja (404 Error)
- ✅ Sudah diperbaiki dengan script redirect di `index.html` dan `404.html`
- Halaman seperti `/shop`, `/about`, `/contact` akan bekerja dengan baik

### Jika Asset Tidak Load
- ✅ Sudah dikonfigurasi dengan `base: "/"` di vite.config.ts
- Semua asset akan load dari root path

## File-File Penting

- ✅ `vite.config.ts` - Konfigurasi Vite untuk GitHub Pages
- ✅ `.github/workflows/deploy.yml` - Workflow otomatis deployment
- ✅ `public/.nojekyll` - Bypass Jekyll
- ✅ `public/404.html` - SPA redirect untuk routing
- ✅ `index.html` - Script redirect untuk React Router

## URL Website

Setelah deployment berhasil, website dapat diakses di:
**https://wiwink17-hub.github.io/**

## Catatan Penting

1. **Branch**: Deployment otomatis dari branch `main`
2. **Auto Deploy**: Setiap push ke `main` akan trigger deployment baru
3. **React Router**: Semua route (`/`, `/shop`, `/about`, dll) akan bekerja dengan baik
4. **Assets**: Semua gambar, CSS, JS akan load dari root path `/`

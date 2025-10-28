# 🚀 Cara Deploy ke GitHub Pages - Step by Step

## Status: ✅ Siap Deploy!

Template sudah dikonfigurasi dengan sempurna untuk GitHub Pages.

---

## 📋 Langkah-Langkah Deploy

### Step 1: Pastikan Git Repository Sudah Connected

Cek apakah sudah connected:
```bash
git remote -v
```

Harusnya muncul:
```
origin  https://github.com/wiwink17-hub/wiwink17-hub.github.io (fetch)
origin  https://github.com/wiwink17-hub/wiwink17-hub.github.io (push)
```

✅ Sudah connected? Lanjut ke Step 2.
❌ Belum? Setup dulu dengan:
```bash
git remote add origin https://github.com/wiwink17-hub/wiwink17-hub.github.io.git
```

### Step 2: Add, Commit, dan Push ke GitHub

```bash
# Add semua file yang sudah diubah
git add .

# Commit dengan message
git commit -m "Fix blank screen issue - Add loading indicator"

# Push ke GitHub
git push origin main
```

**Catatan:** Jika diminta username/password, gunakan Personal Access Token (bukan password biasa).

### Step 3: Aktifkan GitHub Pages (Jika Belum)

1. Buka repository di GitHub: https://github.com/wiwink17-hub/wiwink17-hub.github.io
2. Klik **Settings** (⚙️ icon)
3. Scroll ke menu **Pages** di sidebar kiri
4. Di bagian **Source**:
   - Pilih **"GitHub Actions"**
   - Klik **Save**

### Step 4: Tunggu Deployment Selesai

1. Klik tab **Actions** di repository GitHub
2. Lihat workflow "Deploy to GitHub Pages"
3. Status akan berubah:
   - 🟡 Kuning (sedang proses) → Tunggu...
   - ✅ Hijau (berhasil) → Selesai!
   - ❌ Merah (gagal) → Ada error, cek log

**Waktu proses:** Biasanya 2-5 menit

### Step 5: Buka Website Anda

Setelah deployment ✅ selesai:

1. Tunggu 1-2 menit tambahan (untuk propagation)
2. Buka: **https://wiwink17-hub.github.io/**
3. **PENTING:** Hard refresh browser:
   - Windows: `Ctrl + Shift + R`
   - Mac: `Cmd + Shift + R`

---

## ✅ Verifikasi Website Berhasil

Website berhasil jika Anda melihat:
- ✅ "MODEVA" logo di navbar
- ✅ Hero image dengan text "Timeless Elegance"
- ✅ Produk-produk fashion (Classic Black Dress, dll)
- ✅ Navigation menu: Home, Shop, About, Contact

## 🔄 Update Website di Masa Depan

Setiap kali Anda ingin update:

```bash
# Edit file yang ingin diubah
# ...

# Add dan commit perubahan
git add .
git commit -m "Deskripsi perubahan"

# Push ke GitHub
git push origin main
```

GitHub Actions akan otomatis re-deploy website! 🎉

---

## 🆘 Troubleshooting

### Blank Screen?
➡️ Lihat file **TROUBLESHOOTING.md** untuk solusi lengkap

### Deployment Gagal (❌ Merah)?
1. Klik workflow yang gagal di tab Actions
2. Lihat log error
3. Biasanya masalah di build process
4. Fix error, commit, dan push lagi

### 404 Error di Sub-pages?
✅ Sudah diperbaiki dengan redirect script

### Images Tidak Load?
✅ Sudah dikonfigurasi dengan base path yang benar

---

## 📁 File Penting untuk Deployment

| File | Fungsi | Status |
|------|--------|--------|
| `.github/workflows/deploy.yml` | GitHub Actions config | ✅ |
| `vite.config.ts` | Vite build config | ✅ |
| `public/.nojekyll` | Bypass Jekyll | ✅ |
| `public/404.html` | SPA routing fix | ✅ |
| `index.html` | Main HTML + redirects | ✅ |

**Jangan edit file-file di atas kecuali tahu apa yang dilakukan!**

---

## 🎯 Quick Commands

```bash
# Development
npm run dev          # Run local server

# Build
npm run build        # Build untuk production
npm run preview      # Preview build

# Deploy
git add .
git commit -m "Update"
git push origin main
```

---

## 📖 Dokumentasi Lengkap

- **DEPLOYMENT.md** - Panduan deployment detail (Bahasa Indonesia)
- **TROUBLESHOOTING.md** - Solusi masalah blank screen & lainnya
- **README-GITHUB-PAGES.md** - Quick reference guide

---

**URL Website:** https://wiwink17-hub.github.io/

**Selamat! Website Anda sudah online! 🎉**

# ⏱️ Pencatat Waktu Kejadian (Cloud Version)

Aplikasi pencatat waktu kejadian dengan **Supabase** sebagai database cloud.
Data tersinkron — bisa diakses dari HP manapun setelah login.

## 🎯 Fitur

- ☁️ **Cloud sync** — data tersimpan di Supabase
- 🔐 **Multi-user** — setiap user punya data sendiri (terpisah)
- ⏱️ Rekam waktu **tepat saat tombol ditekan**
- ⏳ Hitung otomatis **jeda antar kejadian**
- 📊 Statistik: total, hari ini, rata-rata jeda
- 📱 Responsif — bisa di-install ke Home Screen HP

## 🚀 Setup (5 menit)

### 1. Buat Project Supabase

1. Buka [supabase.com](https://supabase.com) → Sign up (gratis)
2. Klik **New Project**
3. Isi nama project, password database, region (pilih **Southeast Asia (Singapore)** untuk latency rendah)
4. Tunggu ~2 menit sampai project ready

### 2. Jalankan SQL

1. Di dashboard Supabase, klik **SQL Editor** (ikon `</>`)
2. Klik **New Query**
3. Copy-paste isi file `supabase-setup.sql`
4. Klik **Run** (atau tekan Ctrl+Enter)
5. Harus muncul: `Success. No rows returned`

### 3. (Opsional) Matikan Verifikasi Email

Supabase default minta user verifikasi email. Kalau mau user langsung bisa login:

1. Buka **Authentication** → **Providers** → **Email**
2. Matikan toggle **Confirm email**
3. Save

### 4. Ambil URL & Key

1. Buka **Project Settings** (ikon gear ⚙️) → **API**
2. Copy:
   - **Project URL** (contoh: `https://abcxyz.supabase.co`)
   - **anon public key** (panjang, mulai dengan `eyJ...`)

### 5. Edit `config.js`

Buka file `config.js`, paste URL dan key tadi:

```javascript
const SUPABASE_URL = 'https://abcxyz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGc...';
```

### 6. Push ke GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/pencatat-waktu.git
git push -u origin main
```

### 7. Deploy ke Vercel

1. Buka [vercel.com/new](https://vercel.com/new)
2. Import repository `pencatat-waktu`
3. Framework Preset: **Other**
4. Klik **Deploy**
5. Selesai! Buka URL yang diberikan

## 🔒 Keamanan

- **Anon key memang public** — ini by design dari Supabase
- Keamanan asli ada di **RLS (Row Level Security)** yang sudah di-setup di SQL
- Tiap user **hanya bisa akses data miliknya sendiri**
- Tidak ada cara user A baca data user B

## 🧪 Testing

1. Buka URL Vercel
2. Klik tab **Daftar** → isi email & password → Daftar
3. Login → coba tekan ➕ beberapa kali
4. Logout → login lagi → data masih ada ✅
5. Buka di HP lain → login akun sama → data muncul juga ✅

## 🛠️ Teknologi

- HTML + CSS + Vanilla JavaScript
- Supabase (PostgreSQL + Auth + RLS)
- Deploy: Vercel

## 📝 Lisensi

MIT
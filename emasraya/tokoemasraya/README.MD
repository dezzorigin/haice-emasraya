# Product Requirements Document (PRD) & README
## Web Catalog & Live Gold Price Engine — Toko Emas Mulia Raya Banda Aceh

---

### 1. Project Overview
Repository ini berisi kode sumber untuk landing page eksklusif dan katalog digital milik **Toko Emas Mulia Raya Banda Aceh** (Jl. Tgk. Chik Pante Kulu No. 58, Pasar Aceh). 
Web ini dirancang untuk menggantikan tautan Linktree biasa menjadi *showroom* digital kelas atas bernuansa *Luxury Maroon & Royal Gold*, dilengkapi fitur otomatisasi update harga emas lokal (Mayam & Antam) serta optimasi SEO Local Google.

---

### 2. Objectives & Key Results (OKR)
#### Target Utama (Objectives):
1. **Meningkatkan Credibility & Conversion:** Mengubah audiens dari Instagram (@muliaraya.emas) agar melihat katalog perhiasan dan lokasi fisik toko secara lebih profesional.
2. **Dominasi Keyword Google (Local SEO):** Menguasai peringkat #1 Google di wilayah Aceh untuk kata kunci pencarian:
   - "Harga emas Banda Aceh hari ini"
   - "Harga emas per mayam Aceh"
   - "Toko emas terpercaya Pasar Aceh"
3. **Kemudahan Akses Transaksi:** Mengintegrasikan setiap tombol katalog produk langsung ke WhatsApp Admin dengan format pesan otomatis.

#### Indikator Keberhasilan (Key Results):
- Peningkatan jumlah klik / pesan WhatsApp dari website sebesar 20-30%.
- Halaman masuk di Page 1 Google untuk keyword lokal target dalam 1-3 bulan setelah rilis.
- Waktu muat halaman (*Page Load Time*) di bawah 3 detik (dioptimalkan untuk pengguna Mobile).

---

### 3. Target Audience (User Personas)
1. **Calon Pengantin (Lokal Aceh):** Mencari referensi harga emas per mayam untuk keperluan mahar nikah dan perhiasan *custom*.
2. **Investor & Penabung Logam Mulia:** Masyarakat yang ingin berinvestasi atau mengecek pergerakan harga emas Antam untuk *Buyback* dan Beli baru.
3. **Orang Tua / Keluarga:** Mencari layanan tindik telinga yang aman untuk bayi/anak, atau sekadar mencari hadiah perhiasan.

---

### 4. Functional Requirements (Features) & Architecture

Landing page dirancang tunggal (*Single Page Application / SPA*) yang responsif dan sangat kencang saat diakses via ponsel (*mobile-first*).

#### 4.1. Header / Navigation Bar (Sticky)
- **Brand Logo:** Toko Emas Mulia Raya (Lambang Emas & Burgundy Maroon).
- **Navigasi Cepat (Anchor Links):** Katalog, Harga Emas, Layanan, Lokasi Toko.
- **Primary CTA:** Tombol emas "Chat Admin WA" (Langsung terhubung ke nomor `0812-7993-9946`).

#### 4.2. Hero Section (Luxury Banner)
- **Headline Utama:** "Pusat Perhiasan Emas 99% & Logam Mulia Terpercaya di Banda Aceh"
- **Sub-headline:** "Melayani Jual Beli Emas, Logam Mulia Antam, Mahar Nikah Khas Aceh, dan Layanan Tindik Telinga Steril di Pasar Aceh."
- **Visual Display:** Slider atau Grid Foto High-Resolution yang menampilkan koleksi perhiasan emas eksklusif.
- **Trust Badges (Nilai Jual):**
  - 🥇 Jamin Mutu Emas Asli
  - 📍 Lokasi Presisi Pasar Aceh
  - ⚡ Respon WA Cepat

#### 4.3. Live Gold Price Engine (Fitur Unggulan / Magnet SEO)
- **Auto-Fetch Calculation:** Sistem otomatis menarik data pergerakan harga emas harian melalui API pihak ketiga (misal: Metalprice API/GoldAPI) dan mengonversinya ke satuan khas Aceh (**1 Mayam = ±3.33 Gram**).
- **Tampilan Live Card:**
  - 🪙 Perhiasan Emas 99% / 24K: Rp `[HARGA_AUTO]` / Mayam
  - 🧱 Logam Mulia Antam (CertiCard): Rp `[HARGA_AUTO]` / Gram
  - 💍 Estimasi Ongkos Pembuatan: Mulai Rp 150.000 / Mayam
- **SEO Callout Box:** Memberikan tanda waktu update terakhir, contoh: *"Update Harga Emas Hari Ini di Banda Aceh - Otomatis Terbarui"*

#### 4.4. Katalog Produk Interaktif
- **Navigasi filter kategori interaktif:**
  - Cincin Kawin & Tunangan (Model Klasik, Solitaire, & Custom Mahar)
  - Gelang & Rantai Tangan (Emas Solid & Kombinasi Mutiara)
  - Kalung & Liontin (Desain Mewah Khas Aceh)
  - Anting & Tindik Anak/Dewasa
  - Logam Mulia Antam (0.5 gr – 100 gr)
- **WhatsApp Checkout Integration:** Setiap item produk dilengkapi tombol "Tanyakan Stok via WA" yang otomatis mengisi teks pesan via WhatsApp Link: 
  > *"Halo Admin Toko Emas Mulia Raya, saya berminat dengan produk [NAMA_PRODUK]. Apakah stoknya masih tersedia?"*

#### 4.5. Layanan Tambahan (Value Proposition)
Grid kartu penjelas layanan utama toko:
- 👂 **Layanan Tindik Telinga Steril:** Layanan tindik aman dan higienis untuk bayi, anak-anak, hingga dewasa.
- 🔄 **Jual Beli & Buyback Transparan:** Penimbangan akurat di depan pembeli dan potongan harga jual kembali (*buyback*) yang transparan sesuai harga pasar.
- 🎨 **Custom Mahar Nikah & Perhiasan:** Melayani pembuatan perhiasan *custom* sesuai *request* desain dan ukuran mayam.

#### 4.6. Peta Lokasi & Info Toko (Local Business)
- **Google Maps Embed Presisi:** Peta interaktif langsung menuju titik toko di Jl. Tgk. Chik Pante Kulu No.58, Baiturrahman, Banda Aceh.
- **Jam Operasional:** Senin – Minggu (09:00 s/d 17:30 WIB).
- **Panduan Arah:** "Berada di kawasan pusat perdagangan Pasar Aceh, sangat dekat dengan Masjid Raya Baiturrahman."

#### 4.7. Footer
- Ringkasan informasi kontak toko (Telepon & WhatsApp).
- Tautan media sosial Instagram resmi (@muliaraya.emas).
- Link menuju kebijakan privasi atau *terms & conditions* (jika ada).
- Metadata Copyright & Tag untuk mendukung *Local SEO*.

---

### 5. Non-Functional Requirements (UI/UX, SEO, & Tech)

#### 5.1. Design & Aesthetics (UI/UX)
- **Dominan Background:** `#1A0507` (Deep Burgundy Maroon / Merah Marun Mewah) yang melambangkan keanggunan.
- **Warna Aksen Utama:** `#D4AF37` (Royal Metallic Gold) untuk tombol dan teks penekanan.
- **Warna Teks Utama:** `#FEF08A` (Champagne Gold / Cream Soft) & `#FFFFFF` (White).
- **Typography:**
  - **Font Header:** *Cinzel* atau *Playfair Display* (Memberikan kesan elegan, klasik, & *timeless*).
  - **Font Body:** *Plus Jakarta Sans* atau *Inter* (Moderen, bersih, dan sangat mudah dibaca di layar HP).

#### 5.2. SEO & Performance Requirements
- Wajib menerapkan **JSON-LD Schema Markup** untuk tipe data `JewelryStore` dan `LocalBusiness` agar mudah dibaca oleh Google crawler.
- **OpenGraph Meta Tags** untuk menampilkan *preview banner* toko dan deskripsi yang cantik ketika tautan web dibagikan ke WhatsApp, Instagram, atau Facebook.
- Optimasi aset gambar (format WebP) agar *Loading Speed* tetap kencang (Target Skor Google PageSpeed Insights: 90+).

#### 5.3. Tech Stack (Arsitektur & Teknologi)
- **Frontend Framework:** React.js / Next.js / Vite + HTML5
- **Styling:** Tailwind CSS (untuk styling responsif dan *utility-first*)
- **Icons:** FontAwesome 6 / Lucide-React
- **API Integration:** Open Gold Price API (atau API serupa) dengan mekanisme *Client-Side Fetch* / Serverless Function yang di-cache harian untuk menghindari *rate limit*.
- **Hosting/Deployment:** Vercel atau Netlify untuk mendukung CI/CD (*Continuous Integration / Continuous Deployment*).

---

### 6. Development & Deployment Guide

**1. Clone Repository:**
```bash
git clone https://github.com/username/mulia-raya-emas.git
cd mulia-raya-emas
```

**2. Install Dependencies:**
```bash
npm install
# atau menggunakan yarn / pnpm
yarn install
```

**3. Setup Environment Variables:**
Buat file `.env` di direktori *root* proyek untuk menyimpan konfigurasi API (contoh):
```env
VITE_GOLD_API_KEY=masukkan_api_key_disini
```

**4. Jalankan Mode Development:**
```bash
npm run dev
# Buka http://localhost:5173 atau port yang ditentukan di browser
```

**5. Deploy ke Vercel:**
Jika sudah dihubungkan ke Vercel, cukup *push* perubahan ke *branch* `main`. Vercel akan otomatis melakukan *build* dan pembaharuan (*auto-deploy*).
```bash
git add .
git commit -m "Update fitur katalog"
git push origin main
```

---

### 7. Hak Cipta & Lisensi
Aplikasi dan aset ini dikembangkan secara khusus untuk **Toko Emas Mulia Raya Banda Aceh**. Hak cipta desain, merek, dan integrasi sistem sepenuhnya dimiliki oleh pemilik toko dan tim pengembang terkait. Penggandaan atau penggunaan ulang tanpa izin tertulis dilarang.
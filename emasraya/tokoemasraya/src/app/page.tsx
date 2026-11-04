"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  MessageCircle,
  Crown,
  Sparkles,
  Scale,
  Heart,
  ShieldCheck,
  ChevronDown,
  Star,
  Calculator,
  TrendingUp,
  Award,
  Menu,
  X,
  Clock,
  CheckCircle,
  Users,
} from "lucide-react";
import { CATALOG_DATA } from "@/data/catalog";

// ─── Constants ────────────────────────────────────────────────────────────────

const WA_NUMBER = "6281279939946";
const MAYAM_PER_GRAM = 3.33;

const GOLD_PRICES = [
  { kadar: "Emas 24K / 99%", hargaGram: 1950000, highlight: true },
  { kadar: "Emas 23K", hargaGram: 1890000, highlight: false },
  { kadar: "Emas 22K", hargaGram: 1810000, highlight: false },
  { kadar: "Emas 21K", hargaGram: 1740000, highlight: false },
  { kadar: "LM Antam 999.9", hargaGram: 1980000, highlight: false },
];

const TESTIMONIALS = [
  {
    name: "Rahmi Saputri",
    location: "Banda Aceh",
    rating: 5,
    text: "Emas aslinya terjamin, timbangan tepat di depan kita. Mahar nikah 7 mayam selesai sesuai desain yang saya inginkan. Sangat puas dan akan kembali lagi!",
    via: "Google",
  },
  {
    name: "Budi Hakim",
    location: "Aceh Besar",
    rating: 5,
    text: "Beli Antam 10 gram di sini, prosesnya cepat, harganya transparan, dan adminnya sangat ramah. Sudah jadi langganan sejak 2020, tidak pernah kecewa.",
    via: "WhatsApp",
  },
  {
    name: "Fajri Maulana",
    location: "Lhokseumawe",
    rating: 5,
    text: "Tindik telinga anak di sini, tempatnya bersih dan steril. Staf terlatih, anak tidak trauma sama sekali. Sangat direkomendasikan untuk semua orang!",
    via: "Google",
  },
];

const FAQS = [
  {
    q: "Bagaimana cara memastikan keaslian emas yang dijual?",
    a: "Semua emas yang kami jual telah diuji kadar menggunakan mesin uji emas modern dan dilakukan di depan pembeli secara langsung. Kami menjamin keaslian setiap gram emas yang Anda beli.",
  },
  {
    q: "Apakah ada layanan jual kembali (buyback) emas?",
    a: "Ya! Kami menerima buyback semua jenis emas — perhiasan, emas tanpa surat, maupun logam mulia Antam. Harga buyback mengikuti harga pasar hari ini dan prosesnya transparan.",
  },
  {
    q: "Bisakah saya pesan perhiasan mahar nikah custom?",
    a: "Tentu! Kami melayani pembuatan perhiasan custom sesuai desain dan ukuran Mayam yang Anda inginkan. Waktu pengerjaan 3–7 hari kerja tergantung kompleksitas desain.",
  },
  {
    q: "Apakah harga bisa didiskusikan untuk pembelian dalam jumlah besar?",
    a: "Harga mengikuti harga pasar nasional yang diperbarui setiap hari. Untuk pembelian di atas 5 Mayam, silakan hubungi admin kami via WhatsApp untuk diskusi lebih lanjut.",
  },
  {
    q: "Bagaimana cara menghubungi toko untuk konsultasi?",
    a: "Hubungi kami via WhatsApp di 0812-7993-9946, Senin–Minggu pukul 09.00–17.30 WIB. Atau datang langsung ke toko kami di Jl. Tgk. Chik Pante Kulu, Banda Aceh.",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const formatRupiah = (num: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(num);

const openWA = (msg: string) =>
  window.open(
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`,
    "_blank"
  );

// Category accent colors
const CAT_COLOR: Record<string, string> = {
  Gelang: "#B8860B",
  Cincin: "#8B1A1A",
  Kalung: "#2A6041",
  Anting: "#1A4A7A",
  Antam: "#5C4000",
};

// ─── Header ───────────────────────────────────────────────────────────────────

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = [
    { label: "Harga Emas", href: "#hargaemas" },
    { label: "Katalog", href: "#katalog" },
    { label: "Tentang Kami", href: "#tentangkami" },
    { label: "Kontak", href: "#kontak" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF5F0]/95 backdrop-blur-sm border-b border-[#E8D5B0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <Crown className="w-6 h-6 text-[#C47F00]" />
          <div>
            <p className="font-playfair font-bold text-[#3B1A00] text-base leading-tight">
              Mulia Raya
            </p>
            <p className="text-[10px] text-[#8B5033] tracking-[0.14em] uppercase font-medium">
              Toko Emas · Banda Aceh
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm text-[#6B4433] hover:text-[#8B1A1A] font-medium transition-colors duration-150"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Instagram icon */}
          <a
            id="header-ig-btn"
            href="https://instagram.com/muliaraya.emas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Mulia Raya"
            className="w-9 h-9 rounded-full border border-[#E8D5B0] flex items-center justify-center text-[#6B4433] hover:text-[#8B1A1A] hover:border-[#8B1A1A] transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          {/* Hamburger (mobile) */}
          <button
            className="md:hidden text-[#3B1A00] p-1 ml-1"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-[#FAF5F0] border-t border-[#E8D5B0]"
          >
            <nav className="flex flex-col px-4 py-3">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 border-b border-[#E8D5B0] text-[#3B1A00] font-medium text-sm last:border-0 hover:text-[#8B1A1A] transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="pt-16 bg-[#FAF5F0] relative overflow-hidden">
      {/* Subtle ornamental pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Ccircle cx='40' cy='40' r='30' fill='none' stroke='%23C47F00' stroke-width='1'/%3E%3Ccircle cx='40' cy='40' r='15' fill='none' stroke='%23C47F00' stroke-width='0.5'/%3E%3Cline x1='10' y1='40' x2='70' y2='40' stroke='%23C47F00' stroke-width='0.4'/%3E%3Cline x1='40' y1='10' x2='40' y2='70' stroke='%23C47F00' stroke-width='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-24 relative">
        <div className="text-center">
          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 border border-[#C47F00]/30 text-[#C47F00] bg-[#C47F00]/8 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
          >
            <MapPin className="w-3 h-3" />
            Jl. Tgk. Chik Pante Kulu · Banda Aceh
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-playfair text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#2C0A0A] leading-[1.15] mb-5"
          >
            Pusat Perhiasan Emas
            <br />
            <span className="text-[#C47F00]">&amp; Logam Mulia Terpercaya</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-[#6B4433] text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Melayani jual beli emas murni, logam mulia Antam, perhiasan mahar
            nikah custom, dan tindik telinga steril — dengan transparansi penuh
            di setiap transaksi.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-14"
          >
            <button
              id="hero-catalog-btn"
              onClick={() =>
                document
                  .getElementById("katalog")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-[#2C0A0A] text-[#FAF5F0] px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-[#8B1A1A] transition-all duration-200 shadow-md"
            >
              Lihat Katalog →
            </button>
            <button
              id="hero-price-btn"
              onClick={() =>
                document
                  .getElementById("hargaemas")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border-2 border-[#C47F00] text-[#C47F00] px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-[#C47F00]/10 transition-all duration-200"
            >
              Cek Harga Emas →
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-[#E8D5B0] pt-10"
          >
            {[
              { val: "15+", label: "Tahun Berpengalaman" },
              { val: "99%", label: "Kemurnian Emas" },
              { val: "1.000+", label: "Pelanggan Puas" },
              { val: "09–17.30", label: "Buka Setiap Hari" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-playfair text-2xl sm:text-3xl font-bold text-[#8B1A1A]">
                  {s.val}
                </p>
                <p className="text-xs sm:text-sm text-[#6B4433] mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Harga Emas ───────────────────────────────────────────────────────────────

function HargaEmas() {
  const [calcKadar, setCalcKadar] = useState(GOLD_PRICES[0].kadar);
  const [calcMayam, setCalcMayam] = useState("");
  const [timestamp, setTimestamp] = useState("");

  // Fix hydration: only compute time on client
  React.useEffect(() => {
    setTimestamp(
      new Date().toLocaleString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    );
  }, []);

  const pricePerGram =
    GOLD_PRICES.find((p) => p.kadar === calcKadar)?.hargaGram ?? 0;
  const mayamVal = parseFloat(calcMayam) || 0;
  const gramVal = mayamVal * MAYAM_PER_GRAM;
  const totalPrice = gramVal * pricePerGram;


  return (
    <section id="hargaemas" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="inline-block bg-[#C47F00]/12 text-[#C47F00] text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Harga Terkini
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#2C0A0A] mb-2">
            Harga Emas Hari Ini
          </h2>
          <p className="text-[#6B4433] text-sm flex items-center justify-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            Update: {timestamp} WIB
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tabel Harga */}
          <div className="rounded-2xl border border-[#E8D5B0] overflow-hidden shadow-sm">
            <div className="bg-[#2C0A0A] px-6 py-4 flex items-center justify-between">
              <h3 className="text-[#E8C66A] font-bold text-sm">
                Daftar Harga Emas
              </h3>
              <span className="text-[#C8A87A] text-[11px]">
                1 Mayam ≈ 3.33 gram
              </span>
            </div>
            <table className="w-full">
              <thead>
                <tr className="bg-[#FAF5F0] border-b border-[#E8D5B0]">
                  <th className="text-left px-5 py-3 text-[11px] text-[#6B4433] font-bold uppercase tracking-wide">
                    Kadar
                  </th>
                  <th className="text-right px-3 py-3 text-[11px] text-[#6B4433] font-bold uppercase tracking-wide">
                    / Gram
                  </th>
                  <th className="text-right px-5 py-3 text-[11px] text-[#6B4433] font-bold uppercase tracking-wide">
                    / Mayam
                  </th>
                </tr>
              </thead>
              <tbody>
                {GOLD_PRICES.map((p) => (
                  <tr
                    key={p.kadar}
                    className={`border-b border-[#E8D5B0] last:border-0 transition-colors ${
                      p.highlight ? "bg-[#FFF8EC]" : "bg-white hover:bg-[#FAF5F0]"
                    }`}
                  >
                    <td className="px-5 py-4">
                      <span className="font-semibold text-[#2C0A0A] text-sm">
                        {p.kadar}
                      </span>
                      {p.highlight && (
                        <span className="ml-2 text-[10px] bg-[#8B1A1A] text-white px-2 py-0.5 rounded-full">
                          Paling Murni
                        </span>
                      )}
                    </td>
                    <td className="text-right px-3 py-4 text-sm text-[#6B4433]">
                      {formatRupiah(p.hargaGram)}
                    </td>
                    <td className="text-right px-5 py-4 font-bold text-[#C47F00] text-sm">
                      {formatRupiah(Math.round(p.hargaGram * MAYAM_PER_GRAM))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[11px] text-[#8B5033] px-5 py-3 bg-[#FAF5F0] border-t border-[#E8D5B0]">
              *Harga estimasi. Hubungi admin untuk harga transaksi aktual.
            </p>
          </div>

          {/* Kalkulator */}
          <div className="rounded-2xl border border-[#E8D5B0] bg-[#FAF5F0] p-6 flex flex-col shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <Calculator className="w-5 h-5 text-[#C47F00]" />
              <h3 className="font-bold text-[#2C0A0A] text-lg">
                Kalkulator Estimasi
              </h3>
            </div>

            <div className="space-y-4 flex-grow">
              <div>
                <label className="block text-[11px] font-bold text-[#6B4433] uppercase tracking-wider mb-1.5">
                  Pilih Kadar Emas
                </label>
                <select
                  id="calc-kadar-select"
                  value={calcKadar}
                  onChange={(e) => setCalcKadar(e.target.value)}
                  className="w-full border border-[#E8D5B0] bg-white rounded-xl px-4 py-3 text-[#2C0A0A] text-sm focus:outline-none focus:ring-2 focus:ring-[#C47F00]/30"
                >
                  {GOLD_PRICES.map((p) => (
                    <option key={p.kadar} value={p.kadar}>
                      {p.kadar}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#6B4433] uppercase tracking-wider mb-1.5">
                  Berat (Mayam)
                </label>
                <input
                  id="calc-mayam-input"
                  type="number"
                  min="0"
                  step="0.5"
                  value={calcMayam}
                  onChange={(e) => setCalcMayam(e.target.value)}
                  placeholder="Contoh: 3  (1 Mayam ≈ 3.33 gram)"
                  className="w-full border border-[#E8D5B0] bg-white rounded-xl px-4 py-3 text-[#2C0A0A] text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C47F00]/30"
                />
              </div>
            </div>

            {/* Result */}
            <div
              className={`mt-6 rounded-xl p-5 border transition-colors duration-300 ${
                totalPrice > 0
                  ? "bg-[#2C0A0A] border-[#2C0A0A]"
                  : "bg-white border-[#E8D5B0]"
              }`}
            >
              <p
                className={`text-[11px] font-bold uppercase tracking-wider mb-1 ${
                  totalPrice > 0 ? "text-[#E8C66A]" : "text-[#6B4433]"
                }`}
              >
                Estimasi Total
              </p>
              <p
                className={`font-playfair text-3xl font-bold ${
                  totalPrice > 0 ? "text-[#E8C66A]" : "text-[#2C0A0A]"
                }`}
              >
                {totalPrice > 0 ? formatRupiah(totalPrice) : "Rp 0"}
              </p>
              {gramVal > 0 && (
                <p className="text-[11px] mt-1 text-[#C8A870]/70">
                  ({gramVal.toFixed(2)} gram · {mayamVal} Mayam)
                </p>
              )}
            </div>

            <button
              id="calc-wa-btn"
              onClick={() =>
                openWA(
                  `Halo Admin Mulia Raya, saya ingin konfirmasi harga ${calcKadar} seberat ${calcMayam || "..."} Mayam. Mohon informasinya.`
                )
              }
              className="mt-4 w-full bg-[#8B1A1A] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#6B1010] transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Konfirmasi via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Katalog ──────────────────────────────────────────────────────────────────

function Katalog() {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const filters = ["Semua", "Gelang", "Cincin", "Kalung", "Anting", "Antam"];
  const filtered =
    activeFilter === "Semua"
      ? CATALOG_DATA
      : CATALOG_DATA.filter((c) => c.category === activeFilter);

  const handleImgError = (id: string) =>
    setImgErrors((prev) => ({ ...prev, [id]: true }));

  return (
    <section id="katalog" className="py-16 bg-[#F5EBE0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5 mb-8">
          <div>
            <span className="inline-block bg-[#8B1A1A]/12 text-[#8B1A1A] text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2">
              Koleksi Kami
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#2C0A0A]">
              Katalog Perhiasan
            </h2>
            <p className="text-[#6B4433] text-sm mt-1">
              Klik produk untuk tanyakan ketersediaan via WhatsApp.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
                  activeFilter === f
                    ? "bg-[#8B1A1A] text-white border-[#8B1A1A]"
                    : "bg-white text-[#6B4433] border-[#E8D5B0] hover:border-[#8B1A1A]/50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.22, delay: idx * 0.04 }}
              className="bg-white rounded-2xl overflow-hidden border border-[#E8D5B0] flex flex-col group hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              onClick={() =>
                openWA(
                  `Halo Admin Toko Emas Mulia Raya, saya berminat dengan produk *${item.name}*. Apakah stoknya tersedia?`
                )
              }
            >
              {/* Image */}
              <div
                className="relative h-44 overflow-hidden bg-[#F5EBE0]"
              >
                {item.image && !imgErrors[item.id] ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.image}
                    alt={item.name}
                    onError={() => handleImgError(item.id)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div
                    className="w-full h-full flex flex-col items-center justify-center gap-2"
                    style={{ background: CAT_COLOR[item.category] + "15" }}
                  >
                    <Crown
                      className="w-10 h-10"
                      style={{ color: CAT_COLOR[item.category] }}
                    />
                    <span
                      className="text-[11px] font-semibold uppercase tracking-wide"
                      style={{ color: CAT_COLOR[item.category] }}
                    >
                      {item.category}
                    </span>
                  </div>
                )}
                {/* Tag */}
                <span className="absolute top-2 left-2 bg-[#8B1A1A] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {item.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">
                <p
                  className="text-[10px] uppercase tracking-wider font-bold mb-1"
                  style={{ color: CAT_COLOR[item.category] }}
                >
                  {item.category}
                </p>
                <h3 className="font-semibold text-[#2C0A0A] text-sm leading-snug mb-3 flex-grow line-clamp-2">
                  {item.name}
                </h3>
                <div className="space-y-0.5 mb-3">
                  <p className="text-[11px] text-[#6B4433]">
                    Kadar:{" "}
                    <span className="font-medium text-[#2C0A0A]">
                      {item.kadar}
                    </span>
                  </p>
                  <p className="text-[11px] text-[#6B4433]">
                    Berat:{" "}
                    <span className="font-medium text-[#2C0A0A]">
                      {item.weight}
                    </span>
                  </p>
                </div>
                <div className="w-full py-2 rounded-lg bg-[#2C0A0A] text-[#FAF5F0] text-xs font-semibold flex items-center justify-center gap-1.5 group-hover:bg-[#8B1A1A] transition-colors">
                  <MessageCircle className="w-3.5 h-3.5" />
                  Tanya Stok
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Tentang Kami ─────────────────────────────────────────────────────────────

function TentangKami() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Kejujuran",
      desc: "Setiap proses — dari pengecekan kadar hingga penimbangan — dilakukan secara terbuka di hadapan Anda.",
    },
    {
      icon: Users,
      title: "Kepercayaan",
      desc: "Lebih dari 15 tahun dipercaya ribuan pelanggan. Kepercayaan Anda adalah aset terbesar kami.",
    },
    {
      icon: Sparkles,
      title: "Kualitas",
      desc: "Kami hanya menjual emas dengan kadar yang telah diuji dan dijamin, bukan sekadar klaim.",
    },
  ];

  return (
    <section id="tentangkami" className="py-16 bg-[#3D1010]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: Story */}
          <div>
            <span className="inline-block bg-[#C47F00]/20 text-[#E8C66A] text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
              Tentang Kami
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-5 leading-snug">
              Dibangun di Atas
              <br />
              <span className="text-[#E8C66A]">Kepercayaan &amp; Kejujuran</span>
            </h2>
            <p className="text-[#C8A87A] leading-relaxed mb-5 text-sm sm:text-base">
              Toko Emas Mulia Raya berdiri sebagai tujuan utama masyarakat Banda
              Aceh dan sekitarnya dalam memenuhi kebutuhan perhiasan emas
              berkualitas tinggi. Selama lebih dari 15 tahun, kami membangun
              kepercayaan satu transaksi dalam satu waktu.
            </p>
            <p className="text-[#C8A87A] leading-relaxed mb-8 text-sm sm:text-base">
              Kami percaya bahwa setiap pembelian emas — baik untuk mahar nikah,
              investasi, maupun hadiah — adalah momen penting. Oleh karena itu,
              setiap transaksi kami lakukan dengan teliti, jujur, dan terbuka
              sepenuhnya di hadapan Anda.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { val: "15+", label: "Tahun Berdiri" },
                { val: "1rb+", label: "Pelanggan Puas" },
                { val: "100%", label: "Emas Asli" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white/8 rounded-xl p-4 border border-white/10 text-center"
                >
                  <p className="font-playfair text-2xl font-bold text-[#E8C66A]">
                    {s.val}
                  </p>
                  <p className="text-[11px] text-[#C8A87A] mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Values */}
          <div className="space-y-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-4 bg-white/6 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#C47F00]/20 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#E8C66A]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base mb-1">
                      {v.title}
                    </h3>
                    <p className="text-[#C8A87A] text-sm leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            <div className="pt-2">
              <button
                onClick={() =>
                  openWA(
                    "Halo Admin Toko Emas Mulia Raya, saya ingin mengetahui lebih lanjut tentang toko dan layanan Anda."
                  )
                }
                className="bg-[#C47F00] text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-[#A06800] transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Konsultasi Gratis
              </button>
            </div>
          </div>
        </div>

        {/* ── Social Links (Linktree replacement) ── */}
        <div className="mt-14 border-t border-white/10 pt-10">
          <p className="text-center text-[#C8A87A] text-[11px] uppercase tracking-widest font-bold mb-6">
            Temukan Kami Di
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                ),
                label: "WhatsApp",
                sub: "0812-7993-9946",
                color: "#25D366",
                action: () => openWA("Halo Admin Toko Emas Mulia Raya!"),
                isBtn: true,
              },
              {
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                ),
                label: "Instagram",
                sub: "@muliaraya.emas",
                color: "#E1306C",
                action: () => window.open("https://instagram.com/muliaraya.emas", "_blank"),
                isBtn: true,
              },
              {
                icon: <MapPin className="w-5 h-5" />,
                label: "Lokasi Toko",
                sub: "Baiturrahman, Banda Aceh",
                color: "#C47F00",
                action: () => window.open("https://maps.google.com/?q=Masjid+Raya+Baiturrahman+Banda+Aceh", "_blank"),
                isBtn: true,
              },
              {
                icon: <Clock className="w-5 h-5" />,
                label: "Jam Buka",
                sub: "Senin – Minggu, 09.00–17.30",
                color: "#8B1A1A",
                action: () => {},
                isBtn: false,
              },
            ].map((link, i) => (
              <div
                key={i}
                onClick={link.isBtn ? link.action : undefined}
                className={`flex items-center gap-4 bg-white/6 border border-white/10 rounded-2xl px-5 py-4 transition-all ${
                  link.isBtn
                    ? "cursor-pointer hover:bg-white/12 hover:border-white/20"
                    : ""
                }`}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-white"
                  style={{ background: link.color }}
                >
                  {link.icon}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{link.label}</p>
                  <p className="text-[#C8A87A] text-xs mt-0.5">{link.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Keunggulan ───────────────────────────────────────────────────────────────

function Keunggulan() {
  const items = [
    {
      icon: ShieldCheck,
      color: "#8B1A1A",
      title: "Emas Asli Terjamin",
      desc: "Seluruh emas diuji kadar keasliannya menggunakan mesin uji modern, dilakukan terbuka di hadapan Anda.",
    },
    {
      icon: Scale,
      color: "#C47F00",
      title: "Timbangan Transparan",
      desc: "Timbangan digital bersertifikat, proses terbuka — tidak ada yang disembunyikan dalam setiap transaksi.",
    },
    {
      icon: TrendingUp,
      color: "#8B1A1A",
      title: "Buyback Kompetitif",
      desc: "Jual kembali emas Anda kapan saja dengan harga pasar terkini. Perhiasan, tanpa surat, atau Antam.",
    },
    {
      icon: Award,
      color: "#C47F00",
      title: "Mahar Nikah Custom",
      desc: "Perhiasan mahar sesuai desain dan ukuran Mayam pilihan Anda, dikerjakan oleh pengrajin berpengalaman.",
    },
    {
      icon: Heart,
      color: "#8B1A1A",
      title: "Tindik Telinga Steril",
      desc: "Layanan tindik aman untuk bayi hingga dewasa, menggunakan jarum steril sekali pakai.",
    },
    {
      icon: Sparkles,
      color: "#C47F00",
      title: "Konsultasi Gratis",
      desc: "Tidak yakin pilih kadar atau jenis emas? Tim kami siap membantu kapan saja via WhatsApp.",
    },
  ];

  return (
    <section id="layanan" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#C47F00]/12 text-[#C47F00] text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Layanan Kami
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#2C0A0A] mb-3">
            Kenapa Pilih Mulia Raya?
          </h2>
          <p className="text-[#6B4433] text-sm max-w-md mx-auto leading-relaxed">
            Setiap layanan dirancang untuk memberikan pengalaman belanja emas
            yang aman, jujur, dan memuaskan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="bg-[#FAF5F0] rounded-2xl p-6 border border-[#E8D5B0] hover:border-[#C47F00]/40 hover:shadow-sm transition-all"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: item.color + "15" }}
                >
                  <Icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <h3 className="font-bold text-[#2C0A0A] text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-[#6B4433] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Testimoni ────────────────────────────────────────────────────────────────

function Testimoni() {
  return (
    <section id="testimoni" className="py-16 bg-[#F5EBE0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#8B1A1A]/12 text-[#8B1A1A] text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Testimoni
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#2C0A0A] mb-2">
            Kata Pelanggan Kami
          </h2>
          <p className="text-[#6B4433] text-sm">
            Sudah dipercaya ribuan pelanggan dari seluruh Aceh dan sekitarnya.
          </p>
        </div>

        {/* Rating summary */}
        <div className="flex justify-center mb-8">
          <div className="bg-white border border-[#E8D5B0] rounded-2xl px-8 py-4 flex items-center gap-5 shadow-sm">
            <div className="text-center">
              <p className="font-playfair text-4xl font-bold text-[#2C0A0A]">
                5.0
              </p>
              <div className="flex gap-0.5 mt-1">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#C47F00] text-[#C47F00]"
                    />
                  ))}
              </div>
            </div>
            <div className="w-px h-12 bg-[#E8D5B0]" />
            <div>
              <p className="font-semibold text-[#2C0A0A] text-sm">
                Rata-rata dari 200+ Ulasan
              </p>
              <p className="text-xs text-[#6B4433] mt-0.5">
                Google &amp; WhatsApp
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-[#E8D5B0] shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#8B1A1A] flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-semibold text-[#2C0A0A] text-sm">
                    {t.name}
                  </p>
                  <p className="text-[11px] text-[#6B4433]">{t.location}</p>
                </div>
                <div className="ml-auto flex gap-0.5 shrink-0">
                  {Array(t.rating)
                    .fill(0)
                    .map((_, si) => (
                      <Star
                        key={si}
                        className="w-3.5 h-3.5 fill-[#C47F00] text-[#C47F00]"
                      />
                    ))}
                </div>
              </div>
              <p className="text-[#6B4433] text-sm leading-relaxed">
                "{t.text}"
              </p>
              <p className="text-[11px] text-[#C47F00] font-medium mt-3">
                via {t.via}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="inline-block bg-[#C47F00]/12 text-[#C47F00] text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            FAQ
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#2C0A0A]">
            Pertanyaan Umum
          </h2>
          <p className="text-[#6B4433] text-sm mt-2">
            Jawaban cepat untuk pertanyaan yang sering kami terima.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="border border-[#E8D5B0] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-[#FAF5F0] transition-colors"
              >
                <span className="font-medium text-[#2C0A0A] text-sm pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#8B1A1A] shrink-0 transition-transform duration-200 ${
                    openIdx === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIdx === i && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 py-4 text-[#6B4433] text-sm leading-relaxed border-t border-[#E8D5B0] bg-[#FAF5F0]/50">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Kontak Kami ──────────────────────────────────────────────────────────────

function KontakKami() {
  type ContactCard = {
    icon: React.ElementType;
    label: string;
    value: string;
    sub: string;
    action: () => void;
    bg: string;
  };

  const cards: ContactCard[] = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "0812-7993-9946",
      sub: "Respon cepat · Setiap hari",
      action: () =>
        openWA(
          "Halo Admin Toko Emas Mulia Raya, saya ingin konsultasi mengenai produk/layanan Anda."
        ),
      bg: "#8B1A1A",
    },
    {
      icon: MapPin,
      label: "Lokasi Toko",
      value: "Jl. Tgk. Chik Pante Kulu",
      sub: "Baiturrahman, Banda Aceh",
      action: () =>
        window.open(
          "https://maps.google.com/?q=Masjid+Raya+Baiturrahman+Banda+Aceh",
          "_blank"
        ),
      bg: "#C47F00",
    },
    {
      icon: Clock,
      label: "Jam Operasional",
      value: "Senin – Minggu",
      sub: "09.00 – 17.30 WIB",
      action: () => {},
      bg: "#2C0A0A",
    },
  ];

  return (
    <section id="kontak" className="py-16 bg-[#2C0A0A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#C47F00]/20 text-[#E8C66A] text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Kontak Kami
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-3">
            Siap Melayani Anda
          </h2>
          <p className="text-[#C8A87A] text-sm max-w-md mx-auto">
            Ada pertanyaan soal harga, produk, atau layanan kami? Jangan ragu
            untuk menghubungi kami — kami siap membantu Anda.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {cards.map((card) => {
            const Icon = card.icon;
            const isClickable = card.label !== "Jam Operasional";
            return (
              <div
                key={card.label}
                onClick={card.action}
                className={`bg-white/6 border border-white/10 rounded-2xl p-6 text-center transition-all ${
                  isClickable
                    ? "cursor-pointer hover:bg-white/12 hover:border-white/20"
                    : ""
                }`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: card.bg }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-[#C8A87A] text-[11px] font-bold uppercase tracking-wider mb-2">
                  {card.label}
                </p>
                <p className="text-white font-semibold text-base">{card.value}</p>
                <p className="text-[#C8A87A] text-sm mt-0.5">{card.sub}</p>
              </div>
            );
          })}
        </div>

        {/* Map + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          {/* Map */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden h-72 border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.987!2d95.31657!3d5.5534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304011c0a0e1a04f%3A0x0!2zNcKwMzMnMTIuMiJOIDk1wrAxOScwMC4xIkU!5e0!3m2!1sen!2sid!4v1620000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title="Lokasi Toko Emas Mulia Raya"
            />
          </div>

          {/* CTA card */}
          <div className="lg:col-span-2 bg-[#8B1A1A] rounded-2xl p-7 flex flex-col h-72 justify-between">
            <div>
              <h3 className="font-playfair text-2xl font-bold text-white mb-3">
                Hubungi Kami Sekarang
              </h3>
              <p className="text-[#F5C5C5] text-sm leading-relaxed">
                Konsultasi harga emas, tanya stok produk, atau buat janji
                kunjungan — semua bisa lewat WhatsApp. Gratis, tanpa syarat.
              </p>
            </div>
            <div className="space-y-3">
              <button
                id="kontak-wa-btn"
                onClick={() =>
                  openWA(
                    "Halo Admin Toko Emas Mulia Raya, saya ingin konsultasi mengenai produk/layanan Anda."
                  )
                }
                className="w-full bg-white text-[#8B1A1A] py-3 rounded-xl font-bold text-sm hover:bg-[#FAF5F0] transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Chat WhatsApp Sekarang
              </button>
              <div className="flex items-center gap-2 justify-center">
                <CheckCircle className="w-4 h-4 text-[#F5C5C5]" />
                <span className="text-[#F5C5C5] text-xs">Respon dalam 5 menit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const footerLinks = [
    { label: "Harga Emas", href: "#hargaemas" },
    { label: "Katalog", href: "#katalog" },
    { label: "Tentang Kami", href: "#tentangkami" },
    { label: "Kontak", href: "#kontak" },
  ];

  return (
    <footer className="bg-[#1A0505] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pb-8 border-b border-white/8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Crown className="w-5 h-5 text-[#C47F00]" />
              <span className="font-playfair font-bold text-white text-base">
                Mulia Raya
              </span>
            </div>
            <p className="text-[#8B5033] text-sm leading-relaxed">
              Toko emas terpercaya di Banda Aceh. Menjual perhiasan emas murni,
              logam mulia Antam, dan layanan perhiasan custom.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-[#C47F00] text-[11px] font-bold uppercase tracking-widest mb-4">
              Menu
            </p>
            <ul className="space-y-2">
              {footerLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[#8B5033] hover:text-[#C47F00] text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[#C47F00] text-[11px] font-bold uppercase tracking-widest mb-4">
              Kontak
            </p>
            <ul className="space-y-2 text-sm text-[#8B5033]">
              <li>0812-7993-9946</li>
              <li>Jl. Tgk. Chik Pante Kulu</li>
              <li>Baiturrahman, Banda Aceh</li>
              <li>Senin–Minggu: 09.00–17.30</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#4A2020] text-xs">
            &copy; {new Date().getFullYear()} Toko Emas Mulia Raya. Semua hak
            cipta dilindungi.
          </p>
          <div className="flex items-center gap-1.5 text-[#4A2020] text-xs">
            <CheckCircle className="w-3.5 h-3.5 text-[#C47F00]" />
            Emas Asli · Harga Transparan · Terpercaya
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Floating WhatsApp Button ────────────────────────────────────────────────

function FloatingWA() {
  const [show, setShow] = useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setShow(true), 1200);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-5 z-50 flex items-center gap-3 group">
      {/* Tooltip label */}
      <motion.span
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden group-hover:flex items-center bg-[#2C0A0A] text-white text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap shadow-lg"
      >
        💬 Beli Emas Sekarang
      </motion.span>

      {/* Circle button */}
      <button
        id="floating-wa-btn"
        onClick={() =>
          openWA("Halo Admin Toko Emas Mulia Raya, saya ingin beli emas. Boleh minta info produk dan harga terkini?")
        }
        aria-label="Chat WhatsApp — Beli Emas Sekarang"
        className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-transform duration-200"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        {/* WA icon */}
        <svg className="w-7 h-7 text-white relative z-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </button>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HargaEmas />
        <Katalog />
        <TentangKami />
        <Keunggulan />
        <Testimoni />
        <FAQ />
        <KontakKami />
      </main>
      <Footer />
      <FloatingWA />
    </div>
  );
}

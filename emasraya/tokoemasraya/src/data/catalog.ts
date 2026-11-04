export type CatalogItem = {
  id: string;
  category: string;
  name: string;
  kadar: string;
  weight: string;
  tag: string;
  image: string | null;
};

export const CATALOG_DATA: CatalogItem[] = [
  // ── Gelang ──────────────────────────────────────────────
  {
    id: "g1",
    category: "Gelang",
    name: "Gelang Rantai Bunga Emas 23K",
    kadar: "Emas 23K / 99%",
    weight: "1 – 5 Mayam",
    tag: "Terlaris",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80&fit=crop",
  },
  {
    id: "g2",
    category: "Gelang",
    name: "Gelang Pandora Tali Hitam Kombi Emas",
    kadar: "Emas Murni 99%",
    weight: "1 – 2 Mayam",
    tag: "Trendi",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80&fit=crop",
  },
  {
    id: "g3",
    category: "Gelang",
    name: "Gelang Lilit Emas Murni 24K",
    kadar: "Emas 24K / 99%",
    weight: "1 – 3 Mayam",
    tag: "Klasik",
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80&fit=crop",
  },
  {
    id: "g4",
    category: "Gelang",
    name: "Gelang Kaki Emas Anak",
    kadar: "Emas 22K",
    weight: "0.5 – 1 Mayam",
    tag: "Hadiah",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bef0a7?w=400&q=80&fit=crop",
  },

  // ── Cincin ──────────────────────────────────────────────
  {
    id: "c1",
    category: "Cincin",
    name: "Cincin Kawin Solitaire 99%",
    kadar: "Emas 24K / 99%",
    weight: "1 – 3 Mayam",
    tag: "Custom Mahar",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80&fit=crop",
  },
  {
    id: "c2",
    category: "Cincin",
    name: "Cincin Wanita Model Bunga",
    kadar: "Emas 23K",
    weight: "0.5 – 1.5 Mayam",
    tag: "Elegan",
    image: "https://images.unsplash.com/photo-1535562079860-c41c6e48ee1b?w=400&q=80&fit=crop",
  },
  {
    id: "c3",
    category: "Cincin",
    name: "Cincin Pria Solid Emas",
    kadar: "Emas 22K",
    weight: "1 – 3 Mayam",
    tag: "Pria",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&q=80&fit=crop",
  },
  {
    id: "c4",
    category: "Cincin",
    name: "Cincin Pasangan Ukir",
    kadar: "Emas 23K / 99%",
    weight: "1 – 4 Mayam",
    tag: "Sepasang",
    image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400&q=80&fit=crop",
  },

  // ── Kalung ──────────────────────────────────────────────
  {
    id: "k1",
    category: "Kalung",
    name: "Kalung Rantai Padi Emas",
    kadar: "Emas 23K / 99%",
    weight: "2 – 8 Mayam",
    tag: "Tradisional",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80&fit=crop",
  },
  {
    id: "k2",
    category: "Kalung",
    name: "Liontin Bulan Bintang + Rantai",
    kadar: "Emas 24K / 99%",
    weight: "1 – 3 Mayam",
    tag: "Islami",
    image: "https://images.unsplash.com/photo-1608042314453-ae338d682c93?w=400&q=80&fit=crop",
  },
  {
    id: "k3",
    category: "Kalung",
    name: "Liontin Bunga Emas Ukir",
    kadar: "Emas 23K",
    weight: "0.5 – 2 Mayam",
    tag: "Custom",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80&fit=crop",
  },
  {
    id: "k4",
    category: "Kalung",
    name: "Kalung Rantai Singapur 24K",
    kadar: "Emas 24K / 99%",
    weight: "1 – 5 Mayam",
    tag: "Premium",
    image: "https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=400&q=80&fit=crop",
  },

  // ── Anting ──────────────────────────────────────────────
  {
    id: "a1",
    category: "Anting",
    name: "Anting Jurai Love Emas Murni",
    kadar: "Emas 99%",
    weight: "0.5 – 1.5 Mayam",
    tag: "Elegan",
    image: "https://images.unsplash.com/photo-1590548784585-643d2b9f2925?w=400&q=80&fit=crop",
  },
  {
    id: "a2",
    category: "Anting",
    name: "Anting Padi Emas",
    kadar: "Emas 23K",
    weight: "0.5 – 1 Mayam",
    tag: "Tradisional",
    image: "https://images.unsplash.com/photo-1612543781797-7c6b2c4d4bfb?w=400&q=80&fit=crop",
  },
  {
    id: "a3",
    category: "Anting",
    name: "Anting Tindik Bayi & Anak",
    kadar: "Emas 22K",
    weight: "< 0.5 Mayam",
    tag: "Tindik Gratis",
    image: "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=400&q=80&fit=crop",
  },

  // ── Antam ────────────────────────────────────────────────
  {
    id: "lm1",
    category: "Antam",
    name: "Logam Mulia Antam 0.5g – 5g",
    kadar: "Fine Gold 999.9",
    weight: "0.5g – 5g",
    tag: "Investasi Awal",
    image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400&q=80&fit=crop",
  },
  {
    id: "lm2",
    category: "Antam",
    name: "Logam Mulia Antam 10g – 50g",
    kadar: "Fine Gold 999.9",
    weight: "10g – 50g",
    tag: "Investasi Resmi",
    image: "https://images.unsplash.com/photo-1573408301828-b544ba56c54a?w=400&q=80&fit=crop",
  },
  {
    id: "lm3",
    category: "Antam",
    name: "Logam Mulia Antam 100g",
    kadar: "Fine Gold 999.9",
    weight: "100g",
    tag: "LBMA Bersertifikat",
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=400&q=80&fit=crop",
  },
];

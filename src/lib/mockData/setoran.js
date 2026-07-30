// Harga base per kg diturunkan dari angka yang ada di mockup sendiri:
// Tuna Sirip Kuning 124kg Grade A -> Rp5.580.000 = Rp45.000/kg (A = 1.0x)
// Tongkol 85kg Grade B -> Rp1.806.250 = Rp21.250/kg efektif = Rp25.000/kg base x 0.85
// Cakalang 210kg Grade A -> Rp7.350.000 = Rp35.000/kg
// Grade C belum ada contoh datanya di mockup - pengali 0.7x adalah asumsi
// mengikuti pola penurunan yang sama (A=1.0, B=0.85, C=0.7).
export const GRADE_MULTIPLIER = { A: 1.0, B: 0.85, C: 0.7 };

export const komoditasSetoranOptions = [
  { value: "tuna_sirip_kuning", label: "Tuna Sirip Kuning", hargaPerKg: 45000 },
  { value: "tongkol", label: "Tongkol", hargaPerKg: 25000 },
  { value: "cakalang", label: "Cakalang", hargaPerKg: 35000 },
  { value: "kerapu", label: "Kerapu", hargaPerKg: 60000 },
  { value: "cumi_cumi", label: "Cumi-Cumi", hargaPerKg: 55000 },
  { value: "udang_windu", label: "Udang Windu", hargaPerKg: 90000 },
];

export const totalEntriHariIniMock = 158;

export const riwayatSetoranMock = [
  {
    id: "#TRX-88210",
    nelayan: "Pak Slamet Riyadi",
    komoditas: "Tuna Sirip Kuning",
    beratKg: 124,
    grade: "A",
    total: 5580000,
    status: "aktif",
  },
  {
    id: "#TRX-88209",
    nelayan: "KM Jaya Bahari",
    komoditas: "Tongkol",
    beratKg: 85,
    grade: "B",
    total: 1806250,
    status: "aktif",
  },
  {
    id: "#TRX-88208",
    nelayan: "H. Mahmud",
    komoditas: "Cakalang",
    beratKg: 210,
    grade: "A",
    total: 7350000,
    status: "aktif",
  },
  {
    id: "#TRX-88207",
    nelayan: "KLP Sinar Laut",
    komoditas: "Kerapu",
    beratKg: 40,
    grade: "A",
    total: 2400000,
    status: "dibatalkan",
    alasanPembatalan: "Input ganda oleh admin",
  },
];

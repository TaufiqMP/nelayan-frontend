// Mock data untuk halaman Info Pendukung (src/app/info-pendukung).
// Beda dari lib/mockData/beranda.js: ini versi lebih lengkap/detail
// (kondisi laut, harga per komoditas, stok pelabuhan, order masuk),
// sedangkan yang di beranda.js cuma ringkasan satu komoditas untuk kartu
// "Harga Referensi Hari Ini" di Beranda.

export const kondisiLautMock = {
  label: "Sangat Tenang",
  suhuCelsius: 28,
  anginKnot: 5,
};

export const hargaReferensiPelabuhanMock = {
  updateTerakhir: "14 Okt, 08:00",
  daftar: [
    { id: "harga-tuna", komoditas: "Tuna", icon: "⛵", hargaPerKg: 85000, perubahanPersen: 2.4 },
    { id: "harga-tongkol", komoditas: "Tongkol", icon: "🐟", hargaPerKg: 22500, perubahanPersen: -1.2 },
    { id: "harga-cumi", komoditas: "Cumi-Cumi", icon: "🦑", hargaPerKg: 68000, perubahanPersen: 0.5 },
  ],
};

export const stokPelabuhanMock = [
  { komoditas: "Tuna", beratKg: 1240, kapasitasMaksKg: 1450, warna: "bg-blue-600" },
  { komoditas: "Tongkol", beratKg: 3120, kapasitasMaksKg: 4800, warna: "bg-amber-500" },
  { komoditas: "Cumi", beratKg: 890, kapasitasMaksKg: 2200, warna: "bg-teal-700" },
];

export const orderMasukMock = [
  {
    id: "order-001",
    namaPembeli: "Resto Bahari",
    tipe: "resto",
    status: "pending",
    komoditas: "Tuna",
    beratKg: 20,
    tanggalPickup: "14 Okt",
  },
  {
    id: "order-002",
    namaPembeli: "Pasar Ikan Jaya",
    tipe: "pasar",
    status: "confirmed",
    komoditas: "Tongkol",
    beratKg: 150,
    tanggalPickup: "15 Okt",
  },
];

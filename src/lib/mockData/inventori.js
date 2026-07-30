export const ringkasanInventoriMock = {
  totalStokKg: 1248.5,
  perubahanPersen: 12.4,
  sisaMuatanKg: 351.5,
  kapasitasKeterangan: "Kapasitas tersedia",
  stokMenipisJumlah: 2,
  stokMenipisKeterangan: "Perlu pengisian stok",
};

// NOTE: mockup cuma nunjukin 4 baris (semua status "Optimal") tapi kartu
// ringkasan bilang ada "02 Item" stok menipis. Aku tambahin 2 baris lagi
// di bawah dengan status "menipis" biar konsisten sama angka itu - nggak
// ada di mockup asli, jadi sesuaikan kalau datanya beda.
export const rincianKomoditasMock = [
  { komoditas: "Tuna Sirip Kuning", grade: "A", beratKg: 452, status: "optimal" },
  { komoditas: "Ikan Kembung", grade: "A", beratKg: 80, status: "optimal" },
  { komoditas: "Udang Windu", grade: "A", beratKg: 219, status: "optimal" },
  { komoditas: "Cumi-cumi", grade: "A", beratKg: 422, status: "optimal" },
  { komoditas: "Tongkol", grade: "B", beratKg: 12, status: "menipis" },
  { komoditas: "Lemuru", grade: "B", beratKg: 8, status: "menipis" },
];

export const utilitasStokMock = [
  { komoditas: "Tuna (Grade A)", persen: 88, warna: "biru" },
  { komoditas: "Kembung", persen: 96, warna: "merah" },
  { komoditas: "Udang", persen: 42, warna: "biru" },
];

export const aktivitasStokMock = [
  {
    id: "akt-001",
    judul: "Stok Ditambah: Tuna (A)",
    keterangan: '+25,4 Ton • Dari Tangkapan "Dewi Fortuna"',
    waktu: "10:45 Hari Ini",
    warna: "hijau",
  },
  {
    id: "akt-002",
    judul: "Pesanan Dipenuhi: Kembung",
    keterangan: "-5,0 Ton • Pesanan #TRX-9921",
    waktu: "09:12 Hari Ini",
    warna: "merah",
  },
  {
    id: "akt-003",
    judul: "Relokasi: Cumi (C)",
    keterangan: "Penyimpanan A-01 → Penyimpanan A-02",
    waktu: "Kemarin, 16:30",
    warna: "biru",
  },
];

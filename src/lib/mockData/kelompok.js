// Mock data untuk fitur Manajemen Kelompok.
// Ganti dengan pemanggilan API asli (lihat src/lib/api/kelompok.js) saat backend siap.

export const ALAT_TANGKAP_OPTIONS = [
  { value: "pancing", label: "Pancing" },
  { value: "jaring_insang", label: "Jaring Insang" },
  { value: "bubu", label: "Bubu / Perangkap" },
  { value: "pukat", label: "Pukat" },
  { value: "trawl", label: "Trawl" },
];

export const KEPEMILIKAN_KAPAL_OPTIONS = [
  { value: "punya_kapal", label: "Saya memiliki kapal sendiri" },
  { value: "tidak_punya_kapal", label: "Saya tidak memiliki kapal" },
];

// Daftar kelompok yang tersedia untuk diikuti (dipakai di form Gabung Kelompok)
export const kelompokTersediaMock = [
  {
    id: "klp-001",
    nama: "Samudera Jaya",
    ketua: "Pak Slamet",
    komoditas: ["Kerapu", "Kakap"],
    jumlahAnggota: 10,
    kapasitasMaksimal: 12,
  },
  {
    id: "klp-002",
    nama: "Bahari Makmur",
    ketua: "Haji Mulyono",
    komoditas: ["Lobster", "Udang"],
    jumlahAnggota: 15,
    kapasitasMaksimal: 20,
  },
  {
    id: "klp-003",
    nama: "Mina Sejahtera",
    ketua: "Pak Dodi",
    komoditas: [],
    jumlahAnggota: 12,
    kapasitasMaksimal: 12,
  },
];

// Permohonan bergabung yang menunggu persetujuan Ketua
export const permohonanBergabungMock = [
  {
    id: "req-001",
    nelayanId: "usr-101",
    nama: "Dani Ramadhan",
    pengalamanTahun: 3,
    pesan:
      "Saya ingin bergabung untuk belajar teknik memancing modern dan berkontribusi pada koperasi nelayan ini.",
    fotoProfil: null,
    status: "pending",
  },
  {
    id: "req-002",
    nelayanId: "usr-102",
    nama: "Rizky Pratama",
    pengalamanTahun: 1,
    pesan: "",
    fotoProfil: null,
    status: "pending",
  },
];

// Anggota aktif kelompok
export const anggotaAktifMock = [
  { id: "usr-001", nama: "Yusuf Hadi", role: "ketua", fotoProfil: null },
  { id: "usr-002", nama: "Asep Kurniawan", role: "anggota", fotoProfil: null },
  { id: "usr-003", nama: "Ahmad Hidayat", role: "anggota", fotoProfil: null },
];

// Info kelompok milik nelayan yang sedang login (status "aktif")
export const groupInfoMock = {
  id: "klp-mock",
  nama: "Bahari Jaya",
  komoditasUtama: "Ikan Tuna",
  kapasitas: 4,
  status: "aktif",
  ketua: "Yusuf Hadi",
  jumlahAnggota: anggotaAktifMock.length,
};

export const PERIODE_OPTIONS = [
  { value: "hari_ini", label: "Hari Ini" },
  { value: "minggu_ini", label: "Minggu Ini" },
  { value: "bulan_ini", label: "Bulan Ini" },
  { value: "rentang_tanggal", label: "Rentang Tanggal" },
];

// Ringkasan hasil tangkapan per periode (lihat workflow "Melihat Ringkasan
// Hasil Tangkapan" & "Memfilter Hasil Tangkapan Berdasarkan Rentang Waktu").
export const catchSummaryMock = {
  hari_ini: { totalBeratKg: 45, totalPendapatan: 2925000, jenisTangkapan: ["Tuna"] },
  minggu_ini: { totalBeratKg: 165, totalPendapatan: 10725000, jenisTangkapan: ["Tuna", "Tongkol"] },
  bulan_ini: { totalBeratKg: 120, totalPendapatan: 7800000, jenisTangkapan: ["Tuna", "Tongkol"] },
  rentang_tanggal: { totalBeratKg: 0, totalPendapatan: 0, jenisTangkapan: [] },
};

// Riwayat transaksi hasil tangkapan (view-only bagi nelayan, lihat workflow
// "Melihat Riwayat Transaksi Hasil Tangkapan").
export const catchHistoryMock = {
  hari_ini: [
    { id: "tx-001", tanggal: "12 Okt", komoditas: "Tuna", grade: "A", beratKg: 45, bayaran: 2925000, status: "Selesai" },
  ],
  minggu_ini: [
    { id: "tx-001", tanggal: "12 Okt", komoditas: "Tuna", grade: "A", beratKg: 45, bayaran: 2925000, status: "Selesai" },
    { id: "tx-002", tanggal: "10 Okt", komoditas: "Tongkol", grade: "B", beratKg: 75, bayaran: 4875000, status: "Selesai" },
  ],
  bulan_ini: [
    { id: "tx-001", tanggal: "12 Okt", komoditas: "Tuna", grade: "A", beratKg: 45, bayaran: 2925000, status: "Selesai" },
    { id: "tx-002", tanggal: "10 Okt", komoditas: "Tongkol", grade: "B", beratKg: 75, bayaran: 4875000, status: "Selesai" },
  ],
  rentang_tanggal: [],
};

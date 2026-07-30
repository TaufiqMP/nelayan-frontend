export const ringkasanNelayanMock = {
  lapakTerisi: 42,
  lapakTotal: 50,
  produktivitasGrade: "A+",
  produktivitasLabel: "Sangat Tinggi",
  produktivitasPerubahanPersen: 12.5,
  totalNelayan: 1240,
  totalKelompokTerdaftar: 84,
};

// Preview 2 kelompok teratas (list lengkapnya ada di halaman
// /admin/nelayan/produktivitas, dituju dari link "Lihat Semua Laporan").
export const produktivitasKelompokTopMock = [
  {
    rank: 1,
    nama: "Kelompok Bahari Perkasa",
    jumlahAnggota: 6,
    setoranPerBulan: 24,
    skorPersen: 98.4,
    tier: "ELITE",
  },
  {
    rank: 2,
    nama: "Kelompok Arjuna Samudra",
    jumlahAnggota: 8,
    setoranPerBulan: 20,
    skorPersen: 85.1,
    tier: "STABLE",
  },
];

export const verifikasiRegistrasiMock = [
  { id: "reg-001", nama: "Agus Santoso", idNelayan: "MN-2023-0892", terdaftarKeterangan: "2 jam yang lalu", fotoProfil: null },
  { id: "reg-002", nama: "Ridwan Mahesa", idNelayan: "MN-2023-0881", terdaftarKeterangan: "Kemarin, 14:20", fotoProfil: null },
];

// NOTE: tab "Kelompok Baru" tidak ada di mockup, ini dibuat mengikuti pola
// yang sama dengan "Verifikasi Registrasi" + workflow "Verifikasi Registrasi
// Nelayan" (versi kelompok) di dokumen kamu.
export const kelompokBaruMock = [
  { id: "klp-baru-001", nama: "Kelompok Tunas Bahari", ketua: "Bambang Wijaya", jumlahAnggota: 5, terdaftarKeterangan: "1 hari yang lalu" },
  { id: "klp-baru-002", nama: "Kelompok Nelayan Jaya", ketua: "Hendra Saputra", jumlahAnggota: 7, terdaftarKeterangan: "3 hari yang lalu" },
];

// NOTE: tab "Keluhan & Mediasi" juga tidak ada di mockup - ini diasumsikan
// berisi laporan yang dikirim nelayan lewat fitur "Laporkan Masalah" di
// sisi Nelayan, yang perlu ditinjau/dimediasi admin.
export const keluhanMediasiMock = [
  { id: "kel-001", nelayan: "Yusuf Hadi", kategori: "Lapangan", keterangan: "Perselisihan pembagian hasil tangkapan dengan anggota lain.", waktu: "5 jam yang lalu" },
  { id: "kel-002", nelayan: "Dani Ramadhan", kategori: "Sistem", keterangan: "Data setoran minggu lalu tidak muncul di riwayat.", waktu: "1 hari yang lalu" },
];

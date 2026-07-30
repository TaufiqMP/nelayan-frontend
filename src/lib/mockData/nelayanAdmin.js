export const ringkasanNelayanMock = {
  lapakTersedia: 42,
  lapakTotal: 50,
  produktivitasGrade: "A+",
  produktivitasLabel: "Sangat Tinggi",
  produktivitasPerubahanPersen: 12.5,
  totalNelayan: 1240,
  totalKelompokTerdaftar: 84,
};

// Preview 2 teratas di halaman utama (lihat gambar 1)
export const produktivitasPreviewMock = [
  {
    peringkat: 1,
    nama: "Kelompok Bahari Perkasa",
    jumlahAnggota: 6,
    setoranPerBulan: 24,
    skorPersen: 98.4,
    statusLabel: "ELITE",
    statusWarna: "biru",
  },
  {
    peringkat: 2,
    nama: "Kelompok Arjuna Samudra",
    jumlahAnggota: 8,
    setoranPerBulan: 20,
    skorPersen: 85.1,
    statusLabel: "STABLE",
    statusWarna: "amber",
  },
];

// Tabel lengkap di halaman /admin/nelayan/produktivitas (lihat gambar 2)
export const produktivitasLengkapMock = [
  { nama: "Kelompok Bahari Perkasa", jumlahAnggota: 12, tipeKapal: "Pukat Cincin", totalSetoranJt: 124, volumeKg: 342 },
  { nama: "Kelompok Arjuna Samudra", jumlahAnggota: 5, tipeKapal: "Kapal Slerek", totalSetoranJt: 89, volumeKg: 228 },
  { nama: "Kelompok Mina Sejahtera", jumlahAnggota: 8, tipeKapal: "Kapal Motor", totalSetoranJt: 65, volumeKg: 185 },
  { nama: "Kelompok Bintang Laut", jumlahAnggota: 4, tipeKapal: "Perahu Sekoci", totalSetoranJt: 42, volumeKg: 121 },
];

// Lihat workflow "Verifikasi Registrasi Nelayan" (individu)
export const verifikasiRegistrasiMock = [
  { id: "MN-2023-0892", nama: "Agus Santoso", terdaftar: "2 jam yang lalu", fotoProfil: null },
  { id: "MN-2023-0881", nama: "Ridwan Mahesa", terdaftar: "Kemarin, 14:20", fotoProfil: null },
];

// Lihat workflow "Verifikasi Registrasi Nelayan" (kelompok baru - precondition "Terdapat kelompok baru")
export const kelompokBaruMock = [
  { id: "KLP-2023-0045", namaKelompok: "Kelompok Nelayan Sejahtera", ketua: "Budi Hartono", jumlahAnggota: 5, terdaftar: "5 jam yang lalu" },
];

// Belum ada spesifikasi workflow untuk tab ini - placeholder kosong
export const keluhanMediasiMock = [];

export const URGENSI_OPTIONS = [
  { value: "informasi", label: "Informasi" },
  { value: "peringatan", label: "Peringatan" },
  { value: "teguran", label: "Teguran" },
];

export const riwayatTeguranMock = [
  {
    id: "tgr-001",
    kelompok: "Gelombang Biru",
    judul: "Gelombang Biru",
    keterangan: "Teguran keras terkait kebersihan palka dan standarisasi penyimpanan dingin di Dermaga 3.",
    waktu: "2 Jam Lalu",
    urgensi: "teguran",
  },
  {
    id: "tgr-002",
    kelompok: "Arus Deras",
    judul: "Arus Deras",
    keterangan: "Informasi administrasi: Melengkapi berkas pendaftaran anggota baru untuk asuransi BPJS.",
    waktu: "5 Jam Lalu",
    urgensi: "informasi",
  },
  {
    id: "tgr-003",
    kelompok: "Bintang Laut",
    judul: "Bintang Laut",
    keterangan: "Peringatan: Keterlambatan setoran harian selama 3 hari berturut-turut.",
    waktu: "Kemarin",
    urgensi: "peringatan",
  },
];

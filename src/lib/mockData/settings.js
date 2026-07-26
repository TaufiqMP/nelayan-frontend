export const profilSayaMock = {
  nama: "Supardi Sudirman",
  idNelayan: "NL-882910",
  fotoProfil: null,
  noHp: "081234567890",
  alamat: "",
};

export const appInfoMock = {
  versi: "2.4.1-Stable",
  copyright: "© 2024 Koperasi Nelayan Mandiri",
};

// Per workflow "Melaporkan Masalah": kategori Sistem atau Lapangan.
export const kategoriMasalahOptions = [
  { value: "sistem", label: "Sistem" },
  { value: "lapangan", label: "Lapangan" },
];

// Tidak ada di dokumen workflow secara eksplisit - opsi ini asumsi wajar,
// sesuaikan kalau ternyata daftar alasan resminya beda.
export const alasanCutiOptions = [
  { value: "sakit", label: "Sakit" },
  { value: "keperluan_keluarga", label: "Keperluan Keluarga" },
  { value: "cuaca_ekstrem", label: "Cuaca Ekstrem" },
  { value: "lainnya", label: "Lainnya" },
];

export const alasanHapusAkunOptions = [
  { value: "pensiun", label: "Pensiun" },
  { value: "pindah_profesi", label: "Pindah Profesi" },
  { value: "tidak_puas_layanan", label: "Tidak Puas dengan Layanan" },
  { value: "lainnya", label: "Lainnya" },
];

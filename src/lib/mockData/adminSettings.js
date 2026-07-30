export const staffProfileMock = {
  namaLengkap: "Sarah Wijaya",
  idKaryawan: "MP-2024-001",
  emailResmi: "sarah.w@muncarport.go.id",
  departemen: "operasional",
  jabatan: "Admin Kantor Cabang Pelabuhan Muara Baru, Jakarta Utara",
  fotoProfil: null,
  statusVerifikasi: "Personel Terverifikasi",
  levelAdmin: "Admin Level 1",
};

export const DEPARTEMEN_OPTIONS = [
  { value: "operasional", label: "Operasional" },
  { value: "keuangan", label: "Keuangan" },
  { value: "logistik", label: "Logistik" },
  { value: "customer_service", label: "Customer Service" },
];

// NOTE: fitur "Intervensi Super Admin" ini tidak ada di dokumen workflow
// yang dikirim sebelumnya - dibangun murni mengikuti mockup ini.
export const KATEGORI_ESKALASI_OPTIONS = [
  { value: "kegagalan_sistem_teknis", label: "Kegagalan Sistem Teknis" },
  { value: "sengketa_pembayaran", label: "Sengketa Pembayaran" },
  { value: "override_harga", label: "Override Harga" },
  { value: "lainnya", label: "Lainnya" },
];

export const permintaanEskalasiMock = [
  {
    id: "esc-001",
    judul: "Server Lambat di Dermaga 3",
    keterangan: "Keterlambatan sinkronisasi data...",
    status: "dalam_peninjauan",
    tanggal: "24 Okt 2023",
  },
  {
    id: "esc-002",
    judul: "Override Harga Manual",
    keterangan: "Disetujui untuk penanganan surplus...",
    status: "selesai",
    tanggal: "20 Okt 2023",
  },
  {
    id: "esc-003",
    judul: "Permintaan Pembebasan Biaya",
    keterangan: "Permintaan pembebasan biaya untuk grup",
    status: "ditolak",
    tanggal: "15 Okt 2023",
  },
];

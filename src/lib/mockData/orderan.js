export const ringkasanOrderanMock = {
  totalOrderanAktif: 1284,
  perubahanPersen: 12,
  menungguPembayaran: 42,
  dalamProses: 156,
  siapDikirim: 89,
};

export const STATUS_ORDERAN_OPTIONS = [
  { value: "semua", label: "Semua Status" },
  { value: "menunggu", label: "Menunggu" },
  { value: "diproses", label: "Diproses" },
  { value: "dikirim", label: "Dikirim" },
  { value: "selesai", label: "Selesai" },
];

export const PERIODE_ORDERAN_OPTIONS = [
  { value: "7_hari", label: "7 Hari Terakhir" },
  { value: "30_hari", label: "30 Hari Terakhir" },
  { value: "bulan_ini", label: "Bulan Ini" },
  { value: "semua", label: "Semua Waktu" },
];

// Data dasar untuk disimulasikan sebagai 1.284 order (lihat catatan di
// lib/api/orderan.js soal bagaimana ini "didaur ulang" jadi banyak halaman).
export const orderanBaseMock = [
  { id: "ORD-8821", tanggal: "24 Okt 2023", pembeli: "PT. Tirta Segara", komoditas: "Tuna A", beratKg: 200, total: 12400000, status: "diproses" },
  { id: "ORD-8822", tanggal: "24 Okt 2023", pembeli: "Rumah Makan Sudirman", komoditas: "Cakalang", beratKg: 450, total: 22150000, status: "menunggu" },
  { id: "ORD-8823", tanggal: "23 Okt 2023", pembeli: "CV. Jaya Bahari", komoditas: "Udang Windu", beratKg: 80, total: 8900000, status: "dikirim" },
  { id: "ORD-8824", tanggal: "23 Okt 2023", pembeli: "Agen Muncar Sejati", komoditas: "Kerapu", beratKg: 120, total: 15600000, status: "selesai" },
  { id: "ORD-8825", tanggal: "22 Okt 2023", pembeli: "PT. Maju Bahari", komoditas: "Tongkol", beratKg: 200, total: 12000000, status: "diproses" },
  { id: "ORD-8826", tanggal: "22 Okt 2023", pembeli: "UD. Sumber Laut", komoditas: "Lemuru", beratKg: 500, total: 19500000, status: "selesai" },
  { id: "ORD-8827", tanggal: "21 Okt 2023", pembeli: "Resto Samudra", komoditas: "Cumi-Cumi", beratKg: 50, total: 4200000, status: "menunggu" },
  { id: "ORD-8828", tanggal: "21 Okt 2023", pembeli: "Pasar Ikan Jaya", komoditas: "Tongkol", beratKg: 150, total: 9000000, status: "dikirim" },
];

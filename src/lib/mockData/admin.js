export const kantorCabangSayaMock = {
  nama: "Kantor Cabang",
  namaPelabuhan: "Pelabuhan Muara Baru",
  namaLengkap: "Kantor Cabang Pelabuhan",
  lokasi: "Muara Baru, Jakarta Utara",
};

export const adminSayaMock = {
  nama: "Admin Pelabuhan",
  id: "4429381",
  fotoProfil: null,
};

export const NAV_ITEMS_ADMIN = [
  { key: "dashboard", label: "Dashboard", icon: "▦", href: "/admin" },
  { key: "orderan", label: "Manajemen Orderan", icon: "🛒", href: "/admin/orderan" },
  { key: "inventori", label: "Manajemen Inventori", icon: "🗄️", href: "/admin/inventori" },
  { key: "setoran", label: "Setoran Tangkapan", icon: "🚚", href: "/admin/setoran" },
  { key: "nelayan", label: "Manajemen Nelayan", icon: "👥", href: "/admin/nelayan" },
  { key: "pengaturan", label: "Pengaturan", icon: "⚙️", href: "/admin/pengaturan" },
];

// Ringkasan dashboard harian - lihat workflow "Dashboard Ringkasan Harian"
export const ringkasanDashboardMock = {
  setoranHariIniKg: 1240,
  perubahanSetoranPersen: 12,
  jumlahTransaksiNelayan: 42,
  orderanMasuk: 18,
  orderanPerluDiprosesSegera: 3,
  stokKritisJenis: 2,
  stokKritisKeterangan: "Tongkol & Lemuru hampir habis",
  menungguPersetujuanTugas: 5,
  menungguPersetujuanKeterangan: "Registrasi Baru",
};

export const orderanTerbaruMock = [
  { id: "ORD-8821", pembeli: "PT. Maju Bahari", komoditas: "Tongkol (200kg)", total: 42000000, status: "diproses" },
  { id: "ORD-8820", pembeli: "UD. Sumber Laut", komoditas: "Lemuru (500kg)", total: 68000000, status: "menunggu_bayar" },
  { id: "ORD-8819", pembeli: "Resto Samudra", komoditas: "Cumi (50kg)", total: 27000000, status: "siap_diambil" },
  { id: "ORD-8818", pembeli: "Agen Segar", komoditas: "Kerapu (15kg)", total: 3400000, status: "pre_order" },
];

export const peringatanStokMock = [
  { komoditas: "Ikan Tongkol", sisaKg: 45, kapasitasMaksKg: 300, status: "refill_segera" },
  { komoditas: "Ikan Lemuru", sisaKg: 120, kapasitasMaksKg: 600, status: "refill_segera" },
  { komoditas: "Cumi-cumi", sisaKg: 850, kapasitasMaksKg: 1000, status: "aman" },
];

export const kondisiLautAdminMock = {
  suhuCelsius: 28,
  anginKnot: 5,
  keterangan: "Kondisi sangat baik untuk penangkapan malam ini.",
};

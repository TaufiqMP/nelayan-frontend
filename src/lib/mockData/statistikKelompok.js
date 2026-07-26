// Mock data untuk halaman Statistik Kelompok (src/app/kelompok/dashboard).

export const statistikKomoditasMock = [
  { komoditas: "Tuna", persen: 45, warna: "bg-blue-600", warnaTeks: "text-blue-700" },
  { komoditas: "Tongkol", persen: 30, warna: "bg-amber-700", warnaTeks: "text-amber-800" },
  { komoditas: "Cakalang", persen: 25, warna: "bg-teal-800", warnaTeks: "text-teal-800" },
];

export const trenPendapatanMock = {
  perubahanPersen: 12,
  mingguan: [
    { label: "Minggu 4", pendapatanJuta: 3.8, terbaru: true },
    { label: "Minggu 3", pendapatanJuta: 3.1, terbaru: true },
    { label: "Minggu 2", pendapatanJuta: 2.9, terbaru: false },
    { label: "Minggu 1", pendapatanJuta: 2.5, terbaru: false },
  ],
};

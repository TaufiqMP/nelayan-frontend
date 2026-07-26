// Mock data untuk halaman Beranda. Ganti dengan panggilan API asli
// (lihat src/lib/api/beranda.js) begitu backend siap.

export const nelayanSayaMock = {
  nama: "Pak Budi",
};

export const cuacaMock = {
  suhuCelsius: 28,
  anginKnot: 5,
  kondisi: "Cerah",
};

export const hargaReferensiMock = {
  komoditas: "Tuna",
  hargaPerKg: 65000,
  perubahanPersen: 2.4, // positif = naik dibanding kemarin
};

export const permintaanPasarMock = {
  judul: "Pesanan Ikan Kembung menurun Minggu Ini",
  keterangan: "Berdasarkan data permintaan pasar",
};

// Performa nelayan per periode (dipakai kartu "Performa Nelayan")
export const performaNelayanMock = {
  hari_ini: { totalBeratKg: 45, jumlahTangkapan: 1, komoditasUtama: "Tuna" },
  minggu_ini: { totalBeratKg: 165, jumlahTangkapan: 4, komoditasUtama: "Tuna" },
  bulan_ini: { totalBeratKg: 120, jumlahTangkapan: 15, komoditasUtama: "Tuna" },
  rentang_tanggal: { totalBeratKg: 0, jumlahTangkapan: 0, komoditasUtama: "-" },
};

export const ringkasanStatusMock = {
  statusKelompok: "Aktif", // atau "Belum Punya Kelompok"
  jumlahPesanBaru: 2,
};

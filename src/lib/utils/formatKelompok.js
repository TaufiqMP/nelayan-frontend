// Helper format angka untuk fitur Monitor Hasil Tangkapan.

/** 7800000 -> "Rp 7.800k" (dipakai di kartu ringkasan) */
export function formatRupiahRingkas(angka) {
  const ribuan = Math.round(angka / 1000);
  return `Rp ${ribuan.toLocaleString("id-ID")}k`;
}

/** 2925000 -> "Rp 2.925.000" (dipakai di baris riwayat transaksi) */
export function formatRupiah(angka) {
  return `Rp ${angka.toLocaleString("id-ID")}`;
}

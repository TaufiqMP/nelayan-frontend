// Lapisan API untuk halaman Beranda. Pola sama seperti lib/api/kelompok.js:
// USE_MOCK true -> data mock, false -> panggil backend beneran lewat apiFetch.
// Komponen tidak perlu tahu bedanya.

import { apiFetch } from "@/lib/api/client";
import {
  nelayanSayaMock,
  cuacaMock,
  hargaReferensiMock,
  permintaanPasarMock,
  performaNelayanMock,
  ringkasanStatusMock,
} from "@/lib/mockData/beranda";

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK !== "false";

const simulateDelay = (data, ms = 500) =>
  new Promise((resolve) => setTimeout(() => resolve(data), ms));

/** Nama nelayan yang sedang login (untuk sapaan "Halo, ..."). */
export async function getNelayanSaya() {
  if (USE_MOCK) return simulateDelay(nelayanSayaMock);
  // TODO: GET /api/nelayan/saya
  return apiFetch("/nelayan/saya");
}

/** Info cuaca berdasarkan lokasi pelabuhan nelayan. */
export async function getCuaca() {
  if (USE_MOCK) return simulateDelay(cuacaMock);
  // TODO: GET /api/cuaca?pelabuhan_id=...
  return apiFetch("/cuaca");
}

/** Harga referensi harian berdasarkan kantor cabang/pelabuhan nelayan. */
export async function getHargaReferensi() {
  if (USE_MOCK) return simulateDelay(hargaReferensiMock);
  // TODO: GET /api/harga-referensi?pelabuhan_id=...
  return apiFetch("/harga-referensi");
}

/** Info permintaan pasar (komoditas naik/turun) hasil analisis order kantor cabang. */
export async function getPermintaanPasar() {
  if (USE_MOCK) return simulateDelay(permintaanPasarMock);
  // TODO: GET /api/permintaan-pasar?cabang_id=...
  return apiFetch("/permintaan-pasar");
}

/** Ringkasan performa nelayan (total berat, jumlah tangkapan, komoditas utama) per periode. */
export async function getPerformaNelayan(periode = "bulan_ini") {
  if (USE_MOCK) {
    return simulateDelay(
      performaNelayanMock[periode] || { totalBeratKg: 0, jumlahTangkapan: 0, komoditasUtama: "-" }
    );
  }
  // TODO: GET /api/nelayan/saya/performa?periode=...
  return apiFetch(`/nelayan/saya/performa?periode=${periode}`);
}

/** Ringkasan status cepat: status kelompok + jumlah pesan/notifikasi baru. */
export async function getRingkasanStatus() {
  if (USE_MOCK) return simulateDelay(ringkasanStatusMock);
  // TODO: GET /api/nelayan/saya/ringkasan
  return apiFetch("/nelayan/saya/ringkasan");
}

import { apiFetch } from "@/lib/api/client";
import {
  komoditasSetoranOptions,
  riwayatSetoranMock,
  totalEntriHariIniMock,
  GRADE_MULTIPLIER,
} from "@/lib/mockData/setoran";

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK !== "false";

const simulateDelay = (data, ms = 400) =>
  new Promise((resolve) => setTimeout(() => resolve(data), ms));

export async function getKomoditasSetoranOptions() {
  if (USE_MOCK) return simulateDelay(komoditasSetoranOptions);
  // TODO: GET /api/komoditas?dengan_harga=true
  return apiFetch("/komoditas?dengan_harga=true");
}

export async function getRiwayatSetoran() {
  if (USE_MOCK) {
    return simulateDelay({ items: riwayatSetoranMock, totalEntriHariIni: totalEntriHariIniMock });
  }
  // TODO: GET /api/admin/setoran?periode=hari_ini
  return apiFetch("/admin/setoran?periode=hari_ini");
}

/**
 * payload: { namaNelayanKelompok, komoditasValue, beratKg, grade }
 * Lihat workflow "Membuat Laporan Penyetoran": sistem ambil harga beli
 * sesuai grade, hitung total otomatis, buat laporan, tambah stok inventori,
 * update histori transaksi nelayan.
 */
export async function simpanSetoran(payload) {
  if (USE_MOCK) {
    const komoditas = komoditasSetoranOptions.find((k) => k.value === payload.komoditasValue);
    const hargaEfektif = (komoditas?.hargaPerKg || 0) * (GRADE_MULTIPLIER[payload.grade] || 1);
    const total = Math.round(hargaEfektif * payload.beratKg);
    return simulateDelay({ success: true, id: `#TRX-${Math.floor(Math.random() * 90000 + 10000)}`, total });
  }
  // TODO: POST /api/admin/setoran
  return apiFetch("/admin/setoran", { method: "POST", body: payload });
}

/** Lihat workflow "Membatalkan Laporan Penyetoran": alasan wajib, status jadi Cancelled, inventori dikurangi lagi. */
export async function batalkanSetoran(id, alasan) {
  if (USE_MOCK) return simulateDelay({ success: true, id, alasan });
  // TODO: PATCH /api/admin/setoran/:id/batalkan
  return apiFetch(`/admin/setoran/${id}/batalkan`, { method: "PATCH", body: { alasan } });
}

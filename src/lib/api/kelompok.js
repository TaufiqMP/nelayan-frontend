// Lapisan API untuk fitur Manajemen Kelompok.
import { apiFetch } from "@/lib/api/client";
import {
  kelompokTersediaMock,
  permohonanBergabungMock,
  anggotaAktifMock,
  groupInfoMock,
  catchSummaryMock,
  catchHistoryMock,
  monitorTangkapanRingkasanMock,
  riwayatTripMock,
} from "@/lib/mockData/kelompok";
import { statistikKomoditasMock, trenPendapatanMock } from "@/lib/mockData/statistikKelompok";

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK !== "false";

const simulateDelay = (data, ms = 500) =>
  new Promise((resolve) => setTimeout(() => resolve(data), ms));

const STATUS_KEY = "mock_status_kelompok_saya";

function bacaStatusMock() {
  if (typeof window === "undefined") return { status: "belum_punya" };
  try {
    return JSON.parse(localStorage.getItem(STATUS_KEY)) || { status: "belum_punya" };
  } catch {
    return { status: "belum_punya" };
  }
}

function tulisStatusMock(status) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STATUS_KEY, JSON.stringify(status));
}

export async function getStatusKelompokSaya() {
  if (USE_MOCK) {
    const status = bacaStatusMock();
    return simulateDelay(status);
  }
  return apiFetch("/kelompok/saya");
}

export async function getKelompokTersedia() {
  if (USE_MOCK) return simulateDelay(kelompokTersediaMock);
  return apiFetch("/kelompok");
}

export async function ajukanGabungKelompok(payload) {
  if (USE_MOCK) {
    tulisStatusMock({ status: "menunggu_persetujuan", tipe: "gabung" });
    return simulateDelay({ success: true, requestId: "req-mock", ...payload });
  }
  return apiFetch(`/kelompok/${payload.kelompokId}/join-requests`, {
    method: "POST",
    body: payload,
  });
}

export async function ajukanKelompokBaru(payload) {
  if (USE_MOCK) {
    tulisStatusMock({ status: "menunggu_persetujuan", tipe: "buat_baru" });
    return simulateDelay({ success: true, kelompokId: "klp-mock", ...payload });
  }
  return apiFetch("/kelompok", { method: "POST", body: payload });
}

export async function getDaftarAnggota() {
  if (USE_MOCK) {
    return simulateDelay({
      permohonan: permohonanBergabungMock,
      anggotaAktif: anggotaAktifMock,
    });
  }
  return apiFetch("/kelompok/anggota");
}

export async function responPermohonanGabung(requestId, keputusan) {
  if (USE_MOCK) return simulateDelay({ success: true, requestId, keputusan });
  return apiFetch(`/kelompok/join-requests/${requestId}`, {
    method: "PATCH",
    body: { status: keputusan },
  });
}

export async function hapusAnggota(anggotaId, alasan) {
  if (USE_MOCK) return simulateDelay({ success: true, anggotaId, alasan });
  return apiFetch(`/kelompok/anggota/${anggotaId}`, {
    method: "DELETE",
    body: { alasan },
  });
}

/** Ringkasan untuk halaman "Monitor Hasil Tangkapan" (Total Berat, komoditas utama, pendapatan). */
export async function getMonitorTangkapanRingkasan() {
  if (USE_MOCK) return simulateDelay(monitorTangkapanRingkasanMock);
  // TODO: GET /api/kelompok/saya/tangkapan/ringkasan-monitor
  return apiFetch("/kelompok/saya/tangkapan/ringkasan-monitor");
}

/** Riwayat per trip melaut (bukan per transaksi penjualan) untuk halaman Monitor Hasil Tangkapan. */
export async function getRiwayatTrip() {
  if (USE_MOCK) return simulateDelay(riwayatTripMock);
  // TODO: GET /api/kelompok/saya/tangkapan/trip
  return apiFetch("/kelompok/saya/tangkapan/trip");
}
export async function getGroupInfo() {
  if (USE_MOCK) return simulateDelay(groupInfoMock);
  // TODO: GET /api/kelompok/saya/info
  return apiFetch("/kelompok/saya/info");
}

/**
 * Ringkasan hasil tangkapan kelompok untuk satu periode.
 * periode: "hari_ini" | "minggu_ini" | "bulan_ini" | "rentang_tanggal"
 * Untuk "rentang_tanggal", sertakan { dari, sampai } di parameter kedua.
 */
export async function getCatchSummary(periode = "bulan_ini", rentang = null) {
  if (USE_MOCK) {
    return simulateDelay(
      catchSummaryMock[periode] || { totalBeratKg: 0, totalPendapatan: 0, jenisTangkapan: [] }
    );
  }
  // TODO: GET /api/kelompok/saya/tangkapan/ringkasan?periode=...&dari=...&sampai=...
  const query = new URLSearchParams({ periode, ...(rentang || {}) });
  return apiFetch(`/kelompok/saya/tangkapan/ringkasan?${query}`);
}

/** Riwayat transaksi hasil tangkapan (view-only) untuk satu periode. */
export async function getCatchHistory(periode = "bulan_ini", rentang = null) {
  if (USE_MOCK) return simulateDelay(catchHistoryMock[periode] || []);
  // TODO: GET /api/kelompok/saya/tangkapan/riwayat?periode=...&dari=...&sampai=...
  const query = new URLSearchParams({ periode, ...(rentang || {}) });
  return apiFetch(`/kelompok/saya/tangkapan/riwayat?${query}`);
}

/** Statistik komposisi komoditas kelompok (persentase per jenis ikan). */
export async function getStatistikKomoditas() {
  if (USE_MOCK) return simulateDelay(statistikKomoditasMock);
  // TODO: GET /api/kelompok/saya/statistik/komoditas
  return apiFetch("/kelompok/saya/statistik/komoditas");
}

/** Tren pendapatan mingguan kelompok. */
export async function getTrenPendapatan() {
  if (USE_MOCK) return simulateDelay(trenPendapatanMock);
  // TODO: GET /api/kelompok/saya/statistik/tren-pendapatan
  return apiFetch("/kelompok/saya/statistik/tren-pendapatan");
}

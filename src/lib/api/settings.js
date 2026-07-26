import { apiFetch } from "@/lib/api/client";
import { profilSayaMock, appInfoMock } from "@/lib/mockData/settings";

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK !== "false";

const simulateDelay = (data, ms = 500) =>
  new Promise((resolve) => setTimeout(() => resolve(data), ms));

export async function getProfilSaya() {
  if (USE_MOCK) return simulateDelay(profilSayaMock);
  // TODO: GET /api/nelayan/saya/profil
  return apiFetch("/nelayan/saya/profil");
}

export async function getAppInfo() {
  if (USE_MOCK) return simulateDelay(appInfoMock);
  // TODO: GET /api/app-info (atau hardcode dari package.json/env kalau lebih simpel)
  return apiFetch("/app-info");
}

/** payload: { nama, noHp, alamat, fotoProfil } - lihat workflow "Memperbarui Data Pribadi" */
export async function updateProfilSaya(payload) {
  if (USE_MOCK) return simulateDelay({ success: true, ...payload });
  // TODO: PATCH /api/nelayan/saya/profil
  return apiFetch("/nelayan/saya/profil", { method: "PATCH", body: payload });
}

/** payload: { kategori, keterangan } - lihat workflow "Melaporkan Masalah" */
export async function kirimLaporanMasalah(payload) {
  if (USE_MOCK) return simulateDelay({ success: true, ...payload });
  // TODO: POST /api/laporan-masalah
  return apiFetch("/laporan-masalah", { method: "POST", body: payload });
}

/** payload: { alasan, tanggalMulai, tanggalSelesai, catatan } - lihat workflow "Mengajukan Cuti / Nonaktif Sementara" */
export async function ajukanCutiNonaktif(payload) {
  if (USE_MOCK) return simulateDelay({ success: true, ...payload });
  // TODO: POST /api/nelayan/saya/cuti
  return apiFetch("/nelayan/saya/cuti", { method: "POST", body: payload });
}

/** payload: { alasan, keterangan } - lihat workflow "Mengajukan Hapus Akun / Pensiun" */
export async function ajukanHapusAkun(payload) {
  if (USE_MOCK) return simulateDelay({ success: true, ...payload });
  // TODO: POST /api/nelayan/saya/hapus-akun
  return apiFetch("/nelayan/saya/hapus-akun", { method: "POST", body: payload });
}

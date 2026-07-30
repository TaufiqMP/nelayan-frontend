import { apiFetch } from "@/lib/api/client";
import { staffProfileMock, permintaanEskalasiMock } from "@/lib/mockData/adminSettings";

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK !== "false";

const simulateDelay = (data, ms = 400) =>
  new Promise((resolve) => setTimeout(() => resolve(data), ms));

export async function getStaffProfile() {
  if (USE_MOCK) return simulateDelay(staffProfileMock);
  // TODO: GET /api/admin/saya/profil-staf
  return apiFetch("/admin/saya/profil-staf");
}

/** payload: { namaLengkap, idKaryawan, emailResmi, departemen } */
export async function updateStaffProfile(payload) {
  if (USE_MOCK) return simulateDelay({ success: true, ...payload });
  // TODO: PATCH /api/admin/saya/profil-staf
  return apiFetch("/admin/saya/profil-staf", { method: "PATCH", body: payload });
}

export async function getPermintaanEskalasi() {
  if (USE_MOCK) return simulateDelay(permintaanEskalasiMock);
  // TODO: GET /api/admin/eskalasi?limit=3
  return apiFetch("/admin/eskalasi?limit=3");
}

/** payload: { kategori, deskripsi } */
export async function kirimEskalasi(payload) {
  if (USE_MOCK) return simulateDelay({ success: true, id: `esc-${Date.now()}`, ...payload });
  // TODO: POST /api/admin/eskalasi
  return apiFetch("/admin/eskalasi", { method: "POST", body: payload });
}

import { apiFetch } from "@/lib/api/client";
import {
  kantorCabangSayaMock,
  adminSayaMock,
  ringkasanDashboardMock,
  orderanTerbaruMock,
  peringatanStokMock,
  kondisiLautAdminMock,
} from "@/lib/mockData/admin";

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK !== "false";

const simulateDelay = (data, ms = 500) =>
  new Promise((resolve) => setTimeout(() => resolve(data), ms));

export async function getKantorCabangSaya() {
  if (USE_MOCK) return simulateDelay(kantorCabangSayaMock);
  // TODO: GET /api/admin/saya/kantor-cabang
  return apiFetch("/admin/saya/kantor-cabang");
}

export async function getAdminSaya() {
  if (USE_MOCK) return simulateDelay(adminSayaMock);
  // TODO: GET /api/admin/saya
  return apiFetch("/admin/saya");
}

/** Lihat workflow "Dashboard Ringkasan Harian". */
export async function getRingkasanDashboard() {
  if (USE_MOCK) return simulateDelay(ringkasanDashboardMock);
  // TODO: GET /api/admin/dashboard/ringkasan?kantor_cabang_id=...
  return apiFetch("/admin/dashboard/ringkasan");
}

export async function getOrderanTerbaru() {
  if (USE_MOCK) return simulateDelay(orderanTerbaruMock);
  // TODO: GET /api/admin/order?limit=4&sort=terbaru
  return apiFetch("/admin/order?limit=4&sort=terbaru");
}

export async function getPeringatanStok() {
  if (USE_MOCK) return simulateDelay(peringatanStokMock);
  // TODO: GET /api/admin/inventori/peringatan
  return apiFetch("/admin/inventori/peringatan");
}

export async function getKondisiLautAdmin() {
  if (USE_MOCK) return simulateDelay(kondisiLautAdminMock);
  // TODO: GET /api/cuaca/kondisi-laut?pelabuhan_id=...
  return apiFetch("/cuaca/kondisi-laut");
}

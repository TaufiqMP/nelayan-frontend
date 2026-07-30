import { apiFetch } from "@/lib/api/client";
import {
  ringkasanInventoriMock,
  rincianKomoditasMock,
  utilitasStokMock,
  aktivitasStokMock,
} from "@/lib/mockData/inventori";

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK !== "false";

const simulateDelay = (data, ms = 400) =>
  new Promise((resolve) => setTimeout(() => resolve(data), ms));

/** Lihat workflow "Melihat Inventori Cabang". */
export async function getRingkasanInventori() {
  if (USE_MOCK) return simulateDelay(ringkasanInventoriMock);
  // TODO: GET /api/admin/inventori/ringkasan?kantor_cabang_id=...
  return apiFetch("/admin/inventori/ringkasan");
}

export async function getRincianKomoditas() {
  if (USE_MOCK) return simulateDelay(rincianKomoditasMock);
  // TODO: GET /api/admin/inventori
  return apiFetch("/admin/inventori");
}

export async function getUtilitasStok() {
  if (USE_MOCK) return simulateDelay(utilitasStokMock);
  // TODO: GET /api/admin/inventori/utilitas
  return apiFetch("/admin/inventori/utilitas");
}

export async function getAktivitasStokTerbaru() {
  if (USE_MOCK) return simulateDelay(aktivitasStokMock);
  // TODO: GET /api/admin/inventori/aktivitas?limit=3
  return apiFetch("/admin/inventori/aktivitas?limit=3");
}

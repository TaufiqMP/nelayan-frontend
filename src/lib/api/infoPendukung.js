import { apiFetch } from "@/lib/api/client";
import {
  kondisiLautMock,
  hargaReferensiPelabuhanMock,
  stokPelabuhanMock,
  orderMasukMock,
} from "@/lib/mockData/infoPendukung";

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK !== "false";

const simulateDelay = (data, ms = 500) =>
  new Promise((resolve) => setTimeout(() => resolve(data), ms));

export async function getKondisiLaut() {
  if (USE_MOCK) return simulateDelay(kondisiLautMock);
  // TODO: GET /api/cuaca/kondisi-laut?pelabuhan_id=...
  return apiFetch("/cuaca/kondisi-laut");
}

export async function getHargaReferensiPelabuhan() {
  if (USE_MOCK) return simulateDelay(hargaReferensiPelabuhanMock);
  // TODO: GET /api/harga-referensi/pelabuhan?pelabuhan_id=...
  return apiFetch("/harga-referensi/pelabuhan");
}

export async function getStokPelabuhan() {
  if (USE_MOCK) return simulateDelay(stokPelabuhanMock);
  // TODO: GET /api/inventori/pelabuhan?pelabuhan_id=...
  // (lihat workflow "Melihat Inventori Cabang")
  return apiFetch("/inventori/pelabuhan");
}

export async function getOrderMasuk() {
  if (USE_MOCK) return simulateDelay(orderMasukMock);
  // TODO: GET /api/order?pelabuhan_id=...&status=pending,confirmed
  // (lihat workflow "Melihat Riwayat Order Pelabuhan")
  return apiFetch("/order");
}

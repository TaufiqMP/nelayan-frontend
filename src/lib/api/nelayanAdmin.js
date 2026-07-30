import { apiFetch } from "@/lib/api/client";
import {
  ringkasanNelayanMock,
  produktivitasPreviewMock,
  produktivitasLengkapMock,
  verifikasiRegistrasiMock,
  kelompokBaruMock,
  keluhanMediasiMock,
  riwayatTeguranMock,
} from "@/lib/mockData/nelayanAdmin";

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK !== "false";

const simulateDelay = (data, ms = 400) =>
  new Promise((resolve) => setTimeout(() => resolve(data), ms));

export async function getRingkasanNelayan() {
  if (USE_MOCK) return simulateDelay(ringkasanNelayanMock);
  // TODO: GET /api/admin/nelayan/ringkasan?kantor_cabang_id=...
  return apiFetch("/admin/nelayan/ringkasan");
}

export async function getProduktivitasPreview() {
  if (USE_MOCK) return simulateDelay(produktivitasPreviewMock);
  // TODO: GET /api/admin/kelompok/produktivitas?limit=2
  return apiFetch("/admin/kelompok/produktivitas?limit=2");
}

export async function getProduktivitasLengkap() {
  if (USE_MOCK) return simulateDelay(produktivitasLengkapMock);
  // TODO: GET /api/admin/kelompok/produktivitas
  return apiFetch("/admin/kelompok/produktivitas");
}

/** Lihat workflow "Verifikasi Registrasi Nelayan" (individu). */
export async function getVerifikasiRegistrasi() {
  if (USE_MOCK) return simulateDelay(verifikasiRegistrasiMock);
  return apiFetch("/admin/nelayan/registrasi-pending");
}

export async function setujuiRegistrasiNelayan(id) {
  if (USE_MOCK) return simulateDelay({ success: true, id });
  return apiFetch(`/admin/nelayan/registrasi/${id}/setujui`, { method: "PATCH" });
}

export async function tolakRegistrasiNelayan(id) {
  if (USE_MOCK) return simulateDelay({ success: true, id });
  return apiFetch(`/admin/nelayan/registrasi/${id}/tolak`, { method: "PATCH" });
}

/** Lihat workflow "Verifikasi Registrasi Nelayan" (kelompok baru). */
export async function getKelompokBaru() {
  if (USE_MOCK) return simulateDelay(kelompokBaruMock);
  return apiFetch("/admin/kelompok/pending");
}

export async function setujuiKelompokBaru(id) {
  if (USE_MOCK) return simulateDelay({ success: true, id });
  return apiFetch(`/admin/kelompok/${id}/setujui`, { method: "PATCH" });
}

export async function tolakKelompokBaru(id) {
  if (USE_MOCK) return simulateDelay({ success: true, id });
  return apiFetch(`/admin/kelompok/${id}/tolak`, { method: "PATCH" });
}

export async function getKeluhanMediasi() {
  if (USE_MOCK) return simulateDelay(keluhanMediasiMock);
  // TODO: belum ada endpoint - tab ini belum ada spesifikasi workflow-nya
  return apiFetch("/admin/keluhan-mediasi");
}

export async function getRiwayatTeguran() {
  if (USE_MOCK) return simulateDelay(riwayatTeguranMock);
  return apiFetch("/admin/kelompok/riwayat-teguran");
}

/** payload: { kelompokId, urgensi, keterangan } */
export async function kirimCatatanTeguran(payload) {
  if (USE_MOCK) return simulateDelay({ success: true, ...payload });
  return apiFetch("/admin/kelompok/catatan-teguran", { method: "POST", body: payload });
}

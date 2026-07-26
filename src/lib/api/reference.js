// Lapisan API untuk data referensi (dropdown Komoditas & Kantor Cabang).
import { apiFetch } from "@/lib/api/client";

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK !== "false";

const simulateDelay = (data, ms = 300) =>
  new Promise((resolve) => setTimeout(() => resolve(data), ms));

const komoditasMock = [
  { id: "mock-komoditas-1", nama: "Tuna", satuan: "kg" },
  { id: "mock-komoditas-2", nama: "Cakalang", satuan: "kg" },
  { id: "mock-komoditas-3", nama: "Udang", satuan: "kg" },
];

const kantorCabangMock = [
  { id: "mock-cabang-1", nama: "Cabang Bekasi", alamat: "Jl. Contoh No. 1" },
  { id: "mock-cabang-2", nama: "Cabang Muara Baru", alamat: "Jl. Contoh No. 2" },
];

export async function getKomoditasList() {
  if (USE_MOCK) return simulateDelay(komoditasMock);
  const res = await apiFetch("/komoditas");
  return res.data; // [{ id, nama, satuan }]
}

export async function getKantorCabangList() {
  if (USE_MOCK) return simulateDelay(kantorCabangMock);
  const res = await apiFetch("/kantor-cabang");
  return res.data; // [{ id, nama, alamat }]
}
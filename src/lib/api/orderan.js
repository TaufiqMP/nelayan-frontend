import { apiFetch } from "@/lib/api/client";
import { ringkasanOrderanMock, orderanBaseMock } from "@/lib/mockData/orderan";

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK !== "false";
const UKURAN_HALAMAN = 4;

const simulateDelay = (data, ms = 400) =>
  new Promise((resolve) => setTimeout(() => resolve(data), ms));

export async function getRingkasanOrderan() {
  if (USE_MOCK) return simulateDelay(ringkasanOrderanMock);
  // TODO: GET /api/admin/order/ringkasan?kantor_cabang_id=...
  return apiFetch("/admin/order/ringkasan");
}

/**
 * payload: { page, cariKataKunci, status, periode }
 * NOTE mock: total order dikunci di 1.284 (sesuai mockup) tapi data
 * asli cuma ada 8 baris di orderanBaseMock - halaman berikutnya "daur
 * ulang" 8 baris itu (offset berbeda) supaya paginasi kelihatan jalan.
 * Ini murni buat demo UI, ganti total dari backend beneran nanti.
 */
export async function getDaftarOrderan({ page = 1, cariKataKunci = "", status = "semua" } = {}) {
  if (USE_MOCK) {
    let data = orderanBaseMock;
    if (status !== "semua") {
      data = data.filter((o) => o.status === status);
    }
    if (cariKataKunci.trim()) {
      const kw = cariKataKunci.toLowerCase();
      data = data.filter(
        (o) => o.id.toLowerCase().includes(kw) || o.pembeli.toLowerCase().includes(kw)
      );
    }

    const totalOrderan = status === "semua" && !cariKataKunci ? 1284 : data.length;
    const totalHalaman = Math.max(1, Math.ceil(totalOrderan / UKURAN_HALAMAN));

    // "Daur ulang" data dasar biar tiap halaman kelihatan beda posisi.
    const offset = ((page - 1) * UKURAN_HALAMAN) % data.length;
    const items = data.length
      ? Array.from({ length: Math.min(UKURAN_HALAMAN, totalOrderan) }, (_, i) => data[(offset + i) % data.length])
      : [];

    return simulateDelay({
      items,
      page,
      ukuranHalaman: UKURAN_HALAMAN,
      totalOrderan,
      totalHalaman,
    });
  }

  // TODO: GET /api/admin/order?page=...&q=...&status=...&periode=...
  const query = new URLSearchParams({ page, q: cariKataKunci, status });
  return apiFetch(`/admin/order?${query}`);
}

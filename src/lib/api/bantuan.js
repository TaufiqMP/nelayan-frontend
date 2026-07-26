import { apiFetch } from "@/lib/api/client";
import {
  tipsKeselamatanMock,
  quickLinksMock,
  panduanPenggunaMock,
  faqMock,
  kontakDukunganMock,
} from "@/lib/mockData/bantuan";

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK !== "false";

const simulateDelay = (data, ms = 400) =>
  new Promise((resolve) => setTimeout(() => resolve(data), ms));

export async function getBantuanData() {
  if (USE_MOCK) {
    return simulateDelay({
      tips: tipsKeselamatanMock,
      quickLinks: quickLinksMock,
      panduan: panduanPenggunaMock,
      faq: faqMock,
      kontak: kontakDukunganMock,
    });
  }
  // TODO: GET /api/bantuan — sesuaikan kalau backend memecah ini jadi
  // beberapa endpoint terpisah (mis. /api/faq, /api/panduan, dst).
  return apiFetch("/bantuan");
}

/** Cari artikel bantuan/tutorial berdasarkan kata kunci. */
export async function cariBantuan(kataKunci) {
  if (USE_MOCK) {
    const semuaPanduan = panduanPenggunaMock.filter((p) =>
      p.judul.toLowerCase().includes(kataKunci.toLowerCase())
    );
    return simulateDelay(semuaPanduan);
  }
  // TODO: GET /api/bantuan/cari?q=...
  return apiFetch(`/bantuan/cari?q=${encodeURIComponent(kataKunci)}`);
}

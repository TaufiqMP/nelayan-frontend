// Lapisan API untuk fitur Manajemen Kelompok.
import { apiFetch } from "@/lib/api/client";
import {
  kelompokTersediaMock,
  permohonanBergabungMock,
  anggotaAktifMock,
  groupInfoMock,
  catchSummaryMock,
  catchHistoryMock,
} from "@/lib/mockData/kelompok";

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
  const res = await apiFetch("/kelompok/me");
  // Backend gak punya konsep "menunggu_persetujuan" buat create kelompok —
  // begitu POST /kelompok sukses, langsung aktif. Cuma ada 2 kemungkinan:
  // punya kelompok aktif, atau enggak sama sekali.
  if (!res.data) {
    return { status: "belum_punya" };
  }
  return {
    status: "aktif",
    kelompokId: res.data.kelompok_id,
    nama: res.data.nama,
    roleInKelompok: res.data.role_in_kelompok,
    joinedAt: res.data.joined_at,
  };
}

export async function getKelompokTersedia() {
  if (USE_MOCK) return simulateDelay(kelompokTersediaMock);
  const res = await apiFetch("/kelompok");
  return res.data;
}

export async function ajukanGabungKelompok(payload) {
  if (USE_MOCK) {
    tulisStatusMock({ status: "menunggu_persetujuan", tipe: "gabung" });
    return simulateDelay({ success: true, requestId: "req-mock", ...payload });
  }
  // backend cuma butuh kelompokId di URL, body-nya diabaikan (sesuai API contract)
  const res = await apiFetch(`/kelompok/${payload.kelompokId}/join-requests`, {
    method: "POST",
    body: payload,
  });
  return res.data;
}

export async function ajukanKelompokBaru(payload) {
  if (USE_MOCK) {
    tulisStatusMock({ status: "menunggu_persetujuan", tipe: "buat_baru" });
    return simulateDelay({ success: true, kelompokId: "klp-mock", ...payload });
  }

  // form (camelCase) -> body yang backend expect (snake_case)
  const body = {
    nama: payload.namaKelompok,
    komoditas_utama_id: payload.komoditasUtamaId,
    kantor_cabang_id: payload.kantorCabangId,
    no_registrasi_kapal: payload.noRegistrasiKapal,
    nama_kapal: payload.namaKapal || undefined,
    kapasitas: payload.kapasitas ? Number(payload.kapasitas) : undefined,
    mesin: payload.mesin || undefined,
    alat_tangkap: payload.alatTangkap || undefined,
  };

  const res = await apiFetch("/kelompok", { method: "POST", body });
  return res.data;
}

export async function getDaftarAnggota() {
  if (USE_MOCK) {
    return simulateDelay({
      permohonan: permohonanBergabungMock,
      anggotaAktif: anggotaAktifMock,
    });
  }
  // FIXED: backend punya 2 endpoint terpisah (bukan 1 gabungan kayak mock),
  // jadi digabung di sini pake Promise.all biar interface function-nya
  // tetep sama kayak mock (gak perlu ubah kode yang manggil function ini).
  const [permohonanRes, anggotaRes] = await Promise.all([
    apiFetch("/kelompok/join-requests?status=pending"),
    apiFetch("/kelompok/members"),
  ]);
  return {
    permohonan: permohonanRes.data,
    anggotaAktif: anggotaRes.data,
  };
}

export async function responPermohonanGabung(requestId, keputusan) {
  if (USE_MOCK) return simulateDelay({ success: true, requestId, keputusan });
  // FIXED: backend expect key "decision", bukan "status"
  const res = await apiFetch(`/kelompok/join-requests/${requestId}`, {
    method: "PATCH",
    body: { decision: keputusan }, // keputusan harus "approved" | "rejected"
  });
  return res.data;
}

export async function hapusAnggota(anggotaId, alasan) {
  if (USE_MOCK) return simulateDelay({ success: true, anggotaId, alasan });
  // FIXED: path backend-nya /kelompok/members/:id, bukan /kelompok/anggota/:id
  const res = await apiFetch(`/kelompok/members/${anggotaId}`, {
    method: "DELETE",
    body: { alasan },
  });
  return res.data;
}

/** Anggota ajukan keluar dari kelompok — belum ada UI-nya, baru API layer. */
export async function ajukanKeluarKelompok() {
  if (USE_MOCK) {
    tulisStatusMock({ status: "belum_punya" }); // simplifikasi mock, langsung anggap keluar
    return simulateDelay({ success: true });
  }
  const res = await apiFetch("/kelompok/leave-requests", { method: "POST" });
  return res.data;
}

/** Ketua approve/reject permintaan keluar anggota. */
export async function responPermintaanKeluar(requestId, keputusan) {
  if (USE_MOCK) return simulateDelay({ success: true, requestId, keputusan });
  const res = await apiFetch(`/kelompok/leave-requests/${requestId}`, {
    method: "PATCH",
    body: { decision: keputusan }, // "approved" | "rejected"
  });
  return res.data;
}

/** Info kelompok (nama, komoditas, kapasitas, ketua, jumlah anggota) untuk dashboard. */
export async function getGroupInfo() {
  if (USE_MOCK) return simulateDelay(groupInfoMock);
  const res = await apiFetch("/kelompok/me");
  if (!res.data) return null;
  return {
    nama: res.data.nama,
    status: res.data.status === 'active' ? 'aktif' : res.data.status,
    komoditasUtama: res.data.komoditas_utama,
    kapasitas: res.data.kapasitas,
    ketua: res.data.ketua_nama,
    jumlahAnggota: Number(res.data.jumlah_anggota),
  };
}

export async function getCatchSummary(periode = "bulan_ini", rentang = null) {
  if (USE_MOCK) {
    return simulateDelay(
      catchSummaryMock[periode] || { totalBeratKg: 0, totalPendapatan: 0, jenisTangkapan: [] }
    );
  }

  const params = { periode };
  if (periode === "custom" && rentang) {
    params.tanggal_mulai = rentang.dari;
    params.tanggal_selesai = rentang.sampai;
  }
  const query = new URLSearchParams(params);

  const res = await apiFetch(`/setoran/ringkasan?${query}`);
  return {
    totalBeratKg: res.data.total_tangkapan_kg,
    totalPendapatan: res.data.total_hasil_transaksi,
    jenisTangkapan: res.data.jenis_tangkapan.map((j) => ({
      komoditasId: j.komoditas_id,
      nama: j.nama,
      beratKg: j.berat_kg,
    })),
  };
}

/** Riwayat transaksi hasil tangkapan (view-only) untuk satu periode. */
export async function getCatchHistory(periode = "bulan_ini", rentang = null) {
  if (USE_MOCK) return simulateDelay(catchHistoryMock[periode] || []);

  const params = { periode };
  if (periode === "custom" && rentang) {
    params.tanggal_mulai = rentang.dari;
    params.tanggal_selesai = rentang.sampai;
  }
  const query = new URLSearchParams(params);

  const res = await apiFetch(`/setoran?${query}`);
  // Mock-nya balikin array polos (gak ada pagination) — samain interface-nya
  // biar komponen yang manggil gak perlu berubah. Info pagination ada di
  // res.data.pagination kalo nanti mau dipake buat infinite-scroll dll.
  return res.data.items.map((item) => ({
    id: item.id,
    tanggal: item.tanggal,
    komoditas: item.komoditas,
    beratKg: item.berat_kg,
    bayaran: item.bayaran,
  }));
}
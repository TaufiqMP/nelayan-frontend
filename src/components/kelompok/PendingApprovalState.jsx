"use client";

import { useRouter } from "next/navigation";

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK !== "false";
const STATUS_KEY = "mock_status_kelompok_saya";

export default function PendingApprovalState({ tipe }) {
  const router = useRouter();

  const judul =
    tipe === "buat_baru"
      ? "Pengajuan Kelompok Sedang Diverifikasi"
      : "Menunggu Persetujuan Ketua Kelompok";

  const deskripsi =
    tipe === "buat_baru"
      ? "Data kelompok dan kapal yang kamu ajukan sedang diverifikasi oleh admin. Kamu akan mendapat notifikasi begitu kelompok aktif."
      : "Permohonan bergabungmu sudah dikirim. Kamu akan mendapat notifikasi setelah Ketua Kelompok menerima atau menolak permohonan ini.";

  function simulasikanDisetujui() {
    localStorage.setItem(STATUS_KEY, JSON.stringify({ status: "aktif" }));
    router.refresh();
    window.location.reload(); // pastikan getStatusKelompokSaya() di-fetch ulang dari awal
  }

  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-24">
      <span aria-hidden className="text-4xl mb-4">⏳</span>
      <h2 className="text-xl font-bold text-gray-900 mb-2">{judul}</h2>
      <p className="text-gray-500 max-w-xs">{deskripsi}</p>

      {/* DEV ONLY: tombol ini otomatis hilang begitu NEXT_PUBLIC_USE_MOCK=false
          (artinya backend beneran sudah dipakai). Ini cuma buat mempercepat
          testing UI dashboard tanpa nunggu alur approve dari Ketua beneran. */}
      {USE_MOCK && (
        <button
          onClick={simulasikanDisetujui}
          className="mt-8 text-sm text-blue-600 underline underline-offset-2"
        >
          [DEV] Simulasikan disetujui → lihat dashboard
        </button>
      )}
    </div>
  );
}

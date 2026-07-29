"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import JoinRequestCard from "@/components/kelompok/JoinRequestCard";
import MemberList from "@/components/kelompok/MemberList";
import RemoveMemberModal from "@/components/kelompok/RemoveMemberModal";
import {
  getDaftarAnggota,
  responPermohonanGabung,
  hapusAnggota,
} from "@/lib/api/kelompok";

// TODO: ganti `true` dengan pengecekan role user sesungguhnya (mis. dari auth context),
// karena hanya Ketua Kelompok yang boleh approve/reject & menghapus anggota.
const isKetuaView = true;

export default function DaftarAnggotaPage() {
  const router = useRouter();
  const [permohonan, setPermohonan] = useState([]);
  const [anggotaAktif, setAnggotaAktif] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoadingId, setActionLoadingId] = useState(null);
  const [anggotaAkanDihapus, setAnggotaAkanDihapus] = useState(null);

  useEffect(() => {
    muatData();
  }, []);

  function muatData() {
    setLoading(true);
    getDaftarAnggota()
      .then(({ permohonan, anggotaAktif }) => {
        setPermohonan(permohonan);
        setAnggotaAktif(anggotaAktif);
      })
      .finally(() => setLoading(false));
  }

  async function handleKeputusan(requestId, keputusan) {
    setActionLoadingId(requestId);
    try {
      await responPermohonanGabung(requestId, keputusan);
      setPermohonan((prev) => prev.filter((p) => p.id !== requestId));
      // Jika disetujui, idealnya backend mengembalikan data anggota baru
      // untuk langsung ditambahkan ke daftar `anggotaAktif` di sini.
    } finally {
      setActionLoadingId(null);
    }
  }

  async function handleHapusAnggota(anggotaId, alasan) {
    await hapusAnggota(anggotaId, alasan);
    setAnggotaAktif((prev) => prev.filter((a) => a.id !== anggotaId));
    setAnggotaAkanDihapus(null);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex items-center justify-between border-b border-gray-200 bg-white px-5 py-4">
        <div className="flex items-center gap-4">
          <button onClick={() => router.back()} aria-label="Kembali" className="text-blue-600 text-xl">
            ←
          </button>
          <h1 className="text-xl font-bold text-blue-700">Daftar Anggota</h1>
        </div>
        <span aria-hidden className="text-xl text-blue-600">🔔</span>
      </header>

      <main className="px-5 py-6 max-w-lg mx-auto space-y-8">
        {loading && <p className="text-center text-gray-400 py-12">Memuat...</p>}

        {!loading && isKetuaView && (
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">
              Permohonan Bergabung
            </h2>
            {permohonan.length === 0 ? (
              <p className="text-sm text-gray-400">
                Tidak ada permohonan bergabung saat ini.
              </p>
            ) : (
              <div className="space-y-3">
                {permohonan.map((p) => (
                  <JoinRequestCard
                    key={p.id}
                    permohonan={p}
                    loading={actionLoadingId === p.id}
                    onApprove={(id) => handleKeputusan(id, "approve")}
                    onReject={(id) => handleKeputusan(id, "reject")}
                  />
                ))}
              </div>
            )}
          </section>
        )}

        {!loading && (
          <MemberList
            anggota={anggotaAktif}
            showMenu={isKetuaView}
            onRemove={setAnggotaAkanDihapus}
          />
        )}
      </main>

      {anggotaAkanDihapus && (
        <RemoveMemberModal
          anggota={anggotaAkanDihapus}
          onConfirm={handleHapusAnggota}
          onClose={() => setAnggotaAkanDihapus(null)}
        />
      )}
    </div>
  );
}

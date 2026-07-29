"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TotalWeightBanner from "@/components/kelompok/TotalWeightBanner";
import CatchQuickStats from "@/components/kelompok/CatchQuickStats";
import CatchRecordCard from "@/components/kelompok/CatchRecordCard";
import { getMonitorTangkapanRingkasan, getRiwayatTrip } from "@/lib/api/kelompok";

const JUMLAH_AWAL_DITAMPILKAN = 3;

export default function MonitorTangkapanPage() {
  const router = useRouter();
  const [ringkasan, setRingkasan] = useState(null);
  const [riwayat, setRiwayat] = useState([]);
  const [tampilkanSemua, setTampilkanSemua] = useState(false);

  useEffect(() => {
    getMonitorTangkapanRingkasan().then(setRingkasan);
    getRiwayatTrip().then(setRiwayat);
  }, []);

  const ditampilkan = tampilkanSemua ? riwayat : riwayat.slice(0, JUMLAH_AWAL_DITAMPILKAN);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="flex items-center gap-4 border-b border-gray-200 bg-white px-5 py-4">
        <button onClick={() => router.back()} aria-label="Kembali" className="text-blue-600 text-xl">
          ←
        </button>
      </header>

      <main className="px-5 py-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-blue-700">Monitor Hasil Tangkapan</h1>
          <p className="text-gray-500">Laporan harian aktivitas melayan Anda.</p>
        </div>

        {!ringkasan ? (
          <p className="text-sm text-gray-400 py-4">Memuat...</p>
        ) : (
          <>
            <TotalWeightBanner totalBeratKg={ringkasan.totalBeratKg} />
            <CatchQuickStats ringkasan={ringkasan} />
          </>
        )}

        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-900">Riwayat Tangkapan</h2>
            {!tampilkanSemua && riwayat.length > JUMLAH_AWAL_DITAMPILKAN && (
              <button
                onClick={() => setTampilkanSemua(true)}
                className="text-sm font-medium text-blue-600"
              >
                Lihat Semua
              </button>
            )}
          </div>

          <div className="space-y-3">
            {ditampilkan.map((trip) => (
              <CatchRecordCard key={trip.id} trip={trip} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

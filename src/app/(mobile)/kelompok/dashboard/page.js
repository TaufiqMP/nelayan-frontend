"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CommodityStatsCard from "@/components/kelompok/CommodityStatsCard";
import IncomeTrendCard from "@/components/kelompok/IncomeTrendCard";
import { getStatistikKomoditas, getTrenPendapatan } from "@/lib/api/kelompok";

export default function StatistikKelompokPage() {
  const router = useRouter();
  const [statistik, setStatistik] = useState(null);
  const [tren, setTren] = useState(null);

  useEffect(() => {
    getStatistikKomoditas().then(setStatistik);
    getTrenPendapatan().then(setTren);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="flex items-center justify-between border-b border-gray-200 bg-white px-5 py-4">
        <div className="flex items-center gap-4">
          <button onClick={() => router.back()} aria-label="Kembali" className="text-blue-600 text-xl">
            ←
          </button>
          <h1 className="text-xl font-bold text-blue-700">Statistik Kelompok</h1>
        </div>
        {/* TODO: arahkan ke halaman pengaturan kelompok kalau sudah ada */}
        <button aria-label="Pengaturan" className="text-blue-600 text-xl">
          ⚙️
        </button>
      </header>

      <main className="px-5 py-6 space-y-6">
        {statistik ? (
          <CommodityStatsCard statistik={statistik} />
        ) : (
          <p className="text-center text-gray-400 py-8">Memuat...</p>
        )}

        {tren && <IncomeTrendCard tren={tren} />}
      </main>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import BottomNav from "@/components/kelompok/BottomNav";
import WeatherCards from "@/components/beranda/WeatherCards";
import PriceReferenceCard from "@/components/beranda/PriceReferenceCard";
import MarketDemandInfo from "@/components/beranda/MarketDemandInfo";
import PerformanceCard from "@/components/beranda/PerformanceCard";
import StatusSummaryCards from "@/components/beranda/StatusSummaryCards";
import ServiceMenuGrid from "@/components/beranda/ServiceMenuGrid";
import {
  getNelayanSaya,
  getCuaca,
  getHargaReferensi,
  getPermintaanPasar,
  getRingkasanStatus,
} from "@/lib/api/beranda";

export default function BerandaPage() {
  const [nelayan, setNelayan] = useState(null);
  const [cuaca, setCuaca] = useState(null);
  const [harga, setHarga] = useState(null);
  const [permintaan, setPermintaan] = useState(null);
  const [ringkasan, setRingkasan] = useState(null);

  useEffect(() => {
    getNelayanSaya().then(setNelayan);
    getCuaca().then(setCuaca);
    getHargaReferensi().then(setHarga);
    getPermintaanPasar().then(setPermintaan);
    getRingkasanStatus().then(setRingkasan);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <header className="flex items-center justify-between border-b border-gray-200 bg-white px-5 py-4">
        <h1 className="flex items-center gap-2 text-xl font-bold text-blue-700">
          <span aria-hidden>⚓</span> Pasar Bahari
        </h1>
        <span aria-hidden className="relative text-xl">
          🔔
          <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-red-500" />
        </span>
      </header>

      <main className="px-5 py-6 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Halo, {nelayan ? nelayan.nama : "..."}!
          </h2>
          <p className="text-gray-500">
            Selamat pagi, semoga hasil tangkapan melimpah hari ini.
          </p>
        </div>

        {cuaca && <WeatherCards cuaca={cuaca} />}

        {harga && <PriceReferenceCard harga={harga} />}

        {permintaan && <MarketDemandInfo info={permintaan} />}

        <PerformanceCard />

        {ringkasan && <StatusSummaryCards ringkasan={ringkasan} />}

        <ServiceMenuGrid />
      </main>

      <BottomNav />
    </div>
  );
}

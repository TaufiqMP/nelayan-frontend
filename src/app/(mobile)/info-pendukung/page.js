"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import KondisiLautCard from "@/components/info-pendukung/KondisiLautCard";
import HargaReferensiPelabuhanList from "@/components/info-pendukung/HargaReferensiPelabuhanList";
import StokPelabuhanList from "@/components/info-pendukung/StokPelabuhanList";
import OrderMasukList from "@/components/info-pendukung/OrderMasukList";
import {
  getKondisiLaut,
  getHargaReferensiPelabuhan,
  getStokPelabuhan,
  getOrderMasuk,
} from "@/lib/api/infoPendukung";

export default function InfoPendukungPage() {
  const router = useRouter();
  const [kondisiLaut, setKondisiLaut] = useState(null);
  const [harga, setHarga] = useState(null);
  const [stok, setStok] = useState(null);
  const [order, setOrder] = useState(null);

  useEffect(() => {
    getKondisiLaut().then(setKondisiLaut);
    getHargaReferensiPelabuhan().then(setHarga);
    getStokPelabuhan().then(setStok);
    getOrderMasuk().then(setOrder);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="flex items-center justify-between border-b border-gray-200 bg-white px-5 py-4">
        <div className="flex items-center gap-4">
          <button onClick={() => router.back()} aria-label="Kembali" className="text-blue-600 text-xl">
            ←
          </button>
          <h1 className="text-xl font-bold text-blue-700">Info Pendukung</h1>
        </div>
        <span aria-hidden className="text-xl text-blue-600">🔔</span>
      </header>

      <main className="px-5 py-6 space-y-8">
        {kondisiLaut ? (
          <KondisiLautCard kondisi={kondisiLaut} />
        ) : (
          <p className="text-center text-gray-400 py-4">Memuat...</p>
        )}

        {harga && <HargaReferensiPelabuhanList harga={harga} />}
        {stok && <StokPelabuhanList stok={stok} />}
        {order && <OrderMasukList order={order} />}
      </main>
    </div>
  );
}

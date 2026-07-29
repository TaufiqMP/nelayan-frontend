"use client";

import { useEffect, useState } from "react";
import OrderanPageHeader from "@/components/admin/OrderanPageHeader";
import OrderStatCard from "@/components/admin/OrderStatCard";
import OrderanFilterBar from "@/components/admin/OrderanFilterBar";
import OrderanTable from "@/components/admin/OrderanTable";
import Pagination from "@/components/admin/Pagination";
import { getRingkasanOrderan, getDaftarOrderan } from "@/lib/api/orderan";

export default function ManajemenOrderanPage() {
  const [ringkasan, setRingkasan] = useState(null);
  const [daftar, setDaftar] = useState(null);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [cariKataKunci, setCariKataKunci] = useState("");
  const [status, setStatus] = useState("semua");
  const [periode, setPeriode] = useState("7_hari");

  useEffect(() => {
    getRingkasanOrderan().then(setRingkasan);
  }, []);

  useEffect(() => {
    setLoading(true);
    getDaftarOrderan({ page, cariKataKunci, status, periode })
      .then(setDaftar)
      .finally(() => setLoading(false));
  }, [page, cariKataKunci, status, periode]);

  function updateCari(v) {
    setCariKataKunci(v);
    setPage(1);
  }
  function updateStatus(v) {
    setStatus(v);
    setPage(1);
  }

  return (
    <div className="px-8 py-6 space-y-6">
      <OrderanPageHeader />

      {ringkasan && (
        <div className="grid grid-cols-4 gap-4">
          <OrderStatCard
            icon="📊"
            iconWarna="biru"
            badge={`+${ringkasan.perubahanPersen}%`}
            label="Total Orderan Aktif"
            value={ringkasan.totalOrderanAktif.toLocaleString("id-ID")}
          />
          <OrderStatCard
            icon="💳"
            iconWarna="oranye"
            label="Menunggu Pembayaran"
            value={ringkasan.menungguPembayaran}
          />
          <OrderStatCard
            icon="📦"
            iconWarna="kuning"
            label="Dalam Proses"
            value={ringkasan.dalamProses}
          />
          <OrderStatCard
            icon="🗺️"
            iconWarna="biru"
            label="Siap Dikirim"
            value={ringkasan.siapDikirim}
          />
        </div>
      )}

      <section className="rounded-2xl bg-white border border-gray-200">
        <OrderanFilterBar
          cariKataKunci={cariKataKunci}
          onCariChange={updateCari}
          status={status}
          onStatusChange={updateStatus}
          periode={periode}
          onPeriodeChange={setPeriode}
        />

        {loading && <p className="text-center text-gray-400 py-12">Memuat...</p>}

        {!loading && daftar && (
          <>
            {daftar.items.length === 0 ? (
              <p className="text-center text-gray-400 py-12">Tidak ada order yang cocok.</p>
            ) : (
              <OrderanTable orderan={daftar.items} onLihatDetail={() => {}} />
            )}

            <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
              <p className="text-sm text-gray-500">
                Menampilkan {(daftar.page - 1) * daftar.ukuranHalaman + 1}-
                {Math.min(daftar.page * daftar.ukuranHalaman, daftar.totalOrderan)} dari{" "}
                {daftar.totalOrderan.toLocaleString("id-ID")} orderan
              </p>
              <Pagination page={daftar.page} totalHalaman={daftar.totalHalaman} onChange={setPage} />
            </div>
          </>
        )}
      </section>
    </div>
  );
}

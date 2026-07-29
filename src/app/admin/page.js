"use client";

import { useEffect, useState } from "react";
import StatCard from "@/components/admin/StatCard";
import QuickAccessGrid from "@/components/admin/QuickAccessGrid";
import RecentOrdersTable from "@/components/admin/RecentOrdersTable";
import StockAlertCard from "@/components/admin/StockAlertCard";
import SeaConditionCard from "@/components/admin/SeaConditionCard";
import {
  getRingkasanDashboard,
  getOrderanTerbaru,
  getPeringatanStok,
  getKondisiLautAdmin,
} from "@/lib/api/admin";

export default function AdminDashboardPage() {
  const [ringkasan, setRingkasan] = useState(null);
  const [orderan, setOrderan] = useState(null);
  const [stok, setStok] = useState(null);
  const [kondisiLaut, setKondisiLaut] = useState(null);

  useEffect(() => {
    getRingkasanDashboard().then(setRingkasan);
    getOrderanTerbaru().then(setOrderan);
    getPeringatanStok().then(setStok);
    getKondisiLautAdmin().then(setKondisiLaut);
  }, []);

  return (
    <div className="px-8 py-6 space-y-6">
      {ringkasan && (
        <div className="grid grid-cols-4 gap-4">
          <StatCard
            icon="🗄️"
            iconWarna="biru"
            badgeLabel={`+${ringkasan.perubahanSetoranPersen}% vs Kemarin`}
            badgeWarna="netral"
            label="Setoran Hari Ini"
            value={ringkasan.setoranHariIniKg.toLocaleString("id-ID")}
            unit="Kg"
            subtitle={`Dari ${ringkasan.jumlahTransaksiNelayan} transaksi nelayan`}
          />
          <StatCard
            icon="🛍️"
            iconWarna="oranye"
            badgeLabel="Aktif"
            badgeWarna="aktif"
            label="Orderan Masuk"
            value={ringkasan.orderanMasuk}
            unit="Order"
            subtitle={`${ringkasan.orderanPerluDiprosesSegera} Perlu diproses segera`}
          />
          <StatCard
            icon="⚠️"
            iconWarna="merah"
            badgeLabel="Kritis"
            badgeWarna="kritis"
            label="Stok Kritis"
            value={ringkasan.stokKritisJenis}
            unit="Jenis"
            subtitle={ringkasan.stokKritisKeterangan}
          />
          <StatCard
            icon="🛡️"
            iconWarna="hijau"
            badgeLabel="Urgen"
            badgeWarna="urgen"
            label="Menunggu Persetujuan"
            value={ringkasan.menungguPersetujuanTugas}
            unit="Tugas"
            subtitle={ringkasan.menungguPersetujuanKeterangan}
          />
        </div>
      )}

      <QuickAccessGrid />

      <div className="grid grid-cols-3 gap-6 items-start">
        <div className="col-span-2">
          {orderan && <RecentOrdersTable orderan={orderan} />}
        </div>

        <div className="space-y-6">
          {stok && <StockAlertCard stok={stok} />}
          {kondisiLaut && <SeaConditionCard kondisi={kondisiLaut} />}
        </div>
      </div>
    </div>
  );
}

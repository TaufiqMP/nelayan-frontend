"use client";

import { useEffect, useState } from "react";
import EmptyGroupState from "@/components/kelompok/EmptyGroupState";
import PendingApprovalState from "@/components/kelompok/PendingApprovalState";
import GroupInfoCard from "@/components/kelompok/GroupInfoCard";
import MemberList from "@/components/kelompok/MemberList";
import CatchHistorySection from "@/components/kelompok/CatchHistorySection";
import DashboardButton from "@/components/kelompok/DashboardButton";
import BottomNav from "@/components/kelompok/BottomNav";
import { getStatusKelompokSaya, getGroupInfo, getDaftarAnggota } from "@/lib/api/kelompok";

// TODO: import AppHeader yang sudah ada di project kalau mau reuse:
// import AppHeader from "@/components/kelompok/AppHeader";

export default function KelompokPage() {
  const [status, setStatus] = useState(null); // null = loading
  const [error, setError] = useState(null);

  useEffect(() => {
    getStatusKelompokSaya()
      .then(setStatus)
      .catch((err) => setError(err.message || "Gagal memuat status kelompok"));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* <AppHeader /> */}
      <header className="flex items-center justify-between border-b border-gray-200 bg-white px-5 py-4">
        <h1 className="flex items-center gap-2 text-xl font-bold text-blue-700">
          <span aria-hidden>⚓</span> Pasar Bahari
        </h1>
        <span aria-hidden className="relative text-xl">
          🔔
          <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-red-500" />
        </span>
      </header>

      <main>
        {error && (
          <p className="text-center text-red-500 py-24">{error}</p>
        )}

        {!error && status === null && (
          <p className="text-center text-gray-400 py-24">Memuat...</p>
        )}

        {status?.status === "belum_punya" && <EmptyGroupState />}

        {status?.status === "menunggu_persetujuan" && (
          <PendingApprovalState tipe={status.tipe} />
        )}

        {status?.status === "aktif" && <GroupDashboard />}
      </main>

      <BottomNav />
    </div>
  );
}

function GroupDashboard() {
  const [groupInfo, setGroupInfo] = useState(null);
  const [anggota, setAnggota] = useState([]);

  useEffect(() => {
    getGroupInfo().then(setGroupInfo);
    getDaftarAnggota().then(({ anggotaAktif }) => setAnggota(anggotaAktif));
  }, []);

  if (!groupInfo) {
    return <p className="text-center text-gray-400 py-24">Memuat...</p>;
  }

  return (
    <div className="px-5 py-6 space-y-8">
      <GroupInfoCard groupInfo={groupInfo} />
      <MemberList anggota={anggota} limit={2} />
      <CatchHistorySection />
      <DashboardButton />
    </div>
  );
}

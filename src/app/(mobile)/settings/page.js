"use client";

import { useEffect, useState } from "react";
import BottomNav from "@/components/kelompok/BottomNav";
import AccountCard from "@/components/settings/AccountCard";
import HelpServiceList from "@/components/settings/HelpServiceList";
import DeleteAccountRow from "@/components/settings/DeleteAccountRow";
import AppVersionFooter from "@/components/settings/AppVersionFooter";
import LogoutButton from "@/components/settings/LogoutButton";
import UpdateDataModal from "@/components/settings/UpdateDataModal";
import ReportIssueModal from "@/components/settings/ReportIssueModal";
import LeaveRequestModal from "@/components/settings/LeaveRequestModal";
import DeleteAccountModal from "@/components/settings/DeleteAccountModal";
import { getProfilSaya, getAppInfo } from "@/lib/api/settings";

export default function SettingsPage() {
  const [profil, setProfil] = useState(null);
  const [appInfo, setAppInfo] = useState(null);
  const [modalAktif, setModalAktif] = useState(null); // null | "update-data" | "laporkan-masalah" | "ajukan-cuti" | "hapus-akun"
  const [notifikasi, setNotifikasi] = useState("");

  useEffect(() => {
    getProfilSaya().then(setProfil);
    getAppInfo().then(setAppInfo);
  }, []);

  function tutupModalDenganNotifikasi(pesan) {
    setModalAktif(null);
    setNotifikasi(pesan);
    setTimeout(() => setNotifikasi(""), 4000);
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <header className="flex items-center justify-between border-b border-gray-200 bg-white px-5 py-4">
        <h1 className="flex items-center gap-2 text-xl font-bold text-blue-700">
          <span aria-hidden>⚓</span> Pengaturan & Bantuan
        </h1>
        <span aria-hidden className="text-xl text-gray-400">🔔</span>
      </header>

      {notifikasi && (
        <div className="mx-5 mt-4 rounded-lg bg-emerald-50 border border-emerald-200 px-4 py-3 text-sm text-emerald-700">
          {notifikasi}
        </div>
      )}

      <main className="px-5 py-6 space-y-8">
        {profil ? (
          <AccountCard profil={profil} onUpdateData={() => setModalAktif("update-data")} />
        ) : (
          <p className="text-center text-gray-400 py-4">Memuat...</p>
        )}

        <HelpServiceList
          onLaporkanMasalah={() => setModalAktif("laporkan-masalah")}
          onAjukanCuti={() => setModalAktif("ajukan-cuti")}
        />

        <DeleteAccountRow onClick={() => setModalAktif("hapus-akun")} />

        {appInfo && <AppVersionFooter appInfo={appInfo} />}

        <LogoutButton />
      </main>

      <BottomNav />

      {modalAktif === "update-data" && (
        <UpdateDataModal
          profil={profil}
          onClose={() => setModalAktif(null)}
          onSuccess={(dataBaru) => {
            setProfil((prev) => ({ ...prev, ...dataBaru }));
            tutupModalDenganNotifikasi("Data berhasil diperbarui.");
          }}
        />
      )}

      {modalAktif === "laporkan-masalah" && (
        <ReportIssueModal
          onClose={() => setModalAktif(null)}
          onSuccess={() => tutupModalDenganNotifikasi("Laporan berhasil dikirim.")}
        />
      )}

      {modalAktif === "ajukan-cuti" && (
        <LeaveRequestModal
          onClose={() => setModalAktif(null)}
          onSuccess={() => tutupModalDenganNotifikasi("Pengajuan cuti berhasil dikirim.")}
        />
      )}

      {modalAktif === "hapus-akun" && (
        <DeleteAccountModal
          onClose={() => setModalAktif(null)}
          onSuccess={() => tutupModalDenganNotifikasi("Pengajuan hapus akun berhasil dikirim.")}
        />
      )}
    </div>
  );
}

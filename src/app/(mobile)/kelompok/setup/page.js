"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import OwnershipStatusForm from "@/components/kelompok/OwnershipStatusForm";
import CreateGroupForm from "@/components/kelompok/CreateGroupForm";
import JoinGroupForm from "@/components/kelompok/JoinGroupForm";

// TODO: sesuaikan import ini dengan lokasi asli AppHeader di project Anda,
// mis. "@/components/kelompok/AppHeader" jika komponennya generik/reusable.

export default function SetupKelompokPage() {
  const router = useRouter();
  const [statusKepemilikan, setStatusKepemilikan] = useState("");

  function handleSuccess() {
    // Setelah pengajuan (buat atau gabung kelompok) terkirim, arahkan
    // kembali ke halaman utama Manajemen Kelompok yang akan menampilkan
    // status "menunggu persetujuan/verifikasi".
    router.push("/kelompok");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex items-center gap-4 border-b border-gray-200 bg-white px-5 py-4">
        <button onClick={() => router.back()} aria-label="Kembali" className="text-blue-600 text-xl">
          ←
        </button>
        <h1 className="text-xl font-bold text-blue-700">Manajemen Kelompok</h1>
      </header>

      <main className="px-5 py-6 max-w-lg mx-auto">
        <OwnershipStatusForm
          value={statusKepemilikan}
          onChange={setStatusKepemilikan}
        />

        {statusKepemilikan === "punya_kapal" && (
          <div className="mt-8">
            <CreateGroupForm onSuccess={handleSuccess} />
          </div>
        )}

        {statusKepemilikan === "tidak_punya_kapal" && (
          <div className="mt-8">
            <JoinGroupForm onSuccess={handleSuccess} />
          </div>
        )}
      </main>
    </div>
  );
}

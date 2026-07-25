"use client";

import BottomNav from "@/components/kelompok/BottomNav";

// TODO: halaman ini masih placeholder. Sesuai dokumen workflow "Settings and
// Help" kamu, nanti isinya: Laporkan Masalah, Ajukan Cuti/Nonaktif,
// Update Data Pribadi, Hapus Akun/Pensiun. Kirim mockup-nya kalau mau aku
// buatkan seperti fitur Manajemen Kelompok.

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="flex items-center justify-between border-b border-gray-200 bg-white px-5 py-4">
        <h1 className="flex items-center gap-2 text-xl font-bold text-blue-700">
          <span aria-hidden>⚓</span> Pasar Bahari
        </h1>
      </header>

      <main className="px-5 py-24 text-center text-gray-400">
        Halaman Settings & Help — belum dibuat.
      </main>

      <BottomNav />
    </div>
  );
}

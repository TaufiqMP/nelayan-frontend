"use client";

import Link from "next/link";

export default function StatusSummaryCards({ ringkasan }) {
  const kelompokAktif = ringkasan.statusKelompok === "Aktif";

  return (
    <div className="grid grid-cols-2 gap-3">
      <Link
        href="/kelompok"
        className="flex items-center gap-3 rounded-xl bg-white border border-gray-200 p-4"
      >
        <span
          aria-hidden
          className={`flex h-10 w-10 items-center justify-center rounded-full text-lg ${
            kelompokAktif ? "bg-emerald-100" : "bg-gray-100"
          }`}
        >
          🛡️
        </span>
        <div>
          <p className="text-sm text-gray-500">Kelompok</p>
          <p className={`font-bold ${kelompokAktif ? "text-emerald-700" : "text-gray-700"}`}>
            {ringkasan.statusKelompok}
          </p>
        </div>
      </Link>

      <Link
        href="/pesan"
        className="flex items-center gap-3 rounded-xl bg-white border border-gray-200 p-4"
      >
        <span aria-hidden className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-lg">
          ✉️
        </span>
        <div>
          <p className="text-sm text-gray-500">Pesan Baru</p>
          <p className="font-bold text-blue-700">{ringkasan.jumlahPesanBaru} Pesan</p>
        </div>
      </Link>
    </div>
  );
}

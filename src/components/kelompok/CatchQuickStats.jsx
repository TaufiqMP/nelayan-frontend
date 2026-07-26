"use client";

import { formatRupiahRingkas } from "@/lib/utils/formatKelompok";

export default function CatchQuickStats({ ringkasan }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="rounded-xl border border-gray-200 p-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-lg">
          <span aria-hidden>🐟</span>
        </span>
        <p className="mt-2 text-gray-500">Utama</p>
        <p className="text-lg font-semibold text-gray-900">{ringkasan.komoditasUtama}</p>
        <p className="text-sm font-medium text-emerald-700">{ringkasan.labelKualitas}</p>
      </div>

      <div className="rounded-xl border border-gray-200 p-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-lg">
          <span aria-hidden>💰</span>
        </span>
        <p className="mt-2 text-gray-500">Pendapatan</p>
        <p className="text-lg font-semibold text-gray-900">
          {formatRupiahRingkasJuta(ringkasan.totalPendapatan)}
        </p>
        <p className="text-sm font-medium text-amber-800">{ringkasan.labelPeriode}</p>
      </div>
    </div>
  );
}

// 150000000 -> "Rp 150 jt" (dipakai khusus di kartu ini karena mockup pakai
// satuan juta, beda dari formatRupiahRingkas yang pakai satuan ribu "k").
function formatRupiahRingkasJuta(angka) {
  const juta = Math.round(angka / 1_000_000);
  return `Rp ${juta} jt`;
}

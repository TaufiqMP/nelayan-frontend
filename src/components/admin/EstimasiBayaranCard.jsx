"use client";

import { formatRupiah } from "@/lib/utils/formatKelompok";

export default function EstimasiBayaranCard({ hargaPerKgBase, pengaliGrade, total }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-blue-700 p-6 text-white h-full">
      <span aria-hidden className="absolute -right-6 -bottom-6 text-9xl font-bold opacity-10">
        Rp
      </span>

      <p className="relative text-xs font-semibold uppercase tracking-widest text-blue-200">
        Total Estimasi Bayaran
      </p>
      <p className="relative mt-2 text-4xl font-bold">{formatRupiah(total)}</p>

      <div className="relative mt-8 flex items-end justify-between border-t border-blue-500 pt-4">
        <div>
          <p className="text-xs text-blue-200">Harga Per Kg (Base)</p>
          <p className="font-semibold">{formatRupiah(hargaPerKgBase)}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-blue-200">Pengali Grade</p>
          <p className="font-semibold">{pengaliGrade.toFixed(1)}x</p>
        </div>
      </div>
    </div>
  );
}

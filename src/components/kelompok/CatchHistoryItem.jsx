"use client";

import { formatRupiah } from "@/lib/utils/formatKelompok";

const GRADE_STYLE = {
  A: "bg-emerald-100 text-emerald-700",
  B: "bg-amber-100 text-amber-800",
  C: "bg-gray-100 text-gray-600",
};

export default function CatchHistoryItem({ transaksi }) {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-white border border-gray-200 p-4">
      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-2xl text-blue-600">
        <span aria-hidden>⛵</span>
      </div>

      <div className="flex-1">
        <p className="text-sm text-gray-500">
          {transaksi.tanggal} <span className="font-semibold text-gray-900">{transaksi.komoditas}</span>
        </p>
        <span
          className={`inline-block mt-1 rounded-md px-2 py-0.5 text-xs font-medium ${
            GRADE_STYLE[transaksi.grade] || GRADE_STYLE.C
          }`}
        >
          GRADE {transaksi.grade}
        </span>
        <p className="mt-1 flex items-center gap-1 text-gray-700">
          <span aria-hidden>⚖️</span> {transaksi.beratKg}kg
        </p>
      </div>

      <div className="text-right">
        <p className="font-bold text-blue-700">{formatRupiah(transaksi.bayaran)}</p>
        <p className="text-sm text-gray-400">{transaksi.status}</p>
      </div>
    </div>
  );
}

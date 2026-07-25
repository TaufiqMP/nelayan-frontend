"use client";

import { formatRupiahRingkas } from "@/lib/utils/formatKelompok";

export default function CatchSummaryCards({ summary }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="rounded-xl bg-white border border-gray-200 border-l-4 border-l-blue-600 p-4">
        <p className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-gray-500">
          <span aria-hidden>⚖️</span> Total Berat
        </p>
        <p className="mt-1 text-2xl font-bold text-blue-700">{summary.totalBeratKg}kg</p>
      </div>

      <div className="rounded-xl bg-white border border-gray-200 border-l-4 border-l-amber-500 p-4">
        <p className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-gray-500">
          <span aria-hidden>💵</span> Pendapatan
        </p>
        <p className="mt-1 text-2xl font-bold text-amber-800">
          {formatRupiahRingkas(summary.totalPendapatan)}
        </p>
      </div>
    </div>
  );
}

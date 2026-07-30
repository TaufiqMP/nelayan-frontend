"use client";

import { formatRupiah } from "@/lib/utils/formatKelompok";

const GRADE_BADGE = {
  A: "bg-amber-100 text-amber-800",
  B: "bg-gray-200 text-gray-700",
  C: "bg-gray-100 text-gray-500",
};

export default function RiwayatSetoranTable({ riwayat, onBatalkan }) {
  return (
    <table className="w-full text-left">
      <thead>
        <tr className="border-b border-gray-100 bg-gray-50 text-xs font-semibold uppercase tracking-wide text-gray-500">
          <th className="px-6 py-3">ID Setoran</th>
          <th className="px-6 py-3">Nelayan</th>
          <th className="px-6 py-3">Komoditas</th>
          <th className="px-6 py-3">Berat</th>
          <th className="px-6 py-3">Grade</th>
          <th className="px-6 py-3 text-right">Total Bayaran</th>
          <th className="px-6 py-3">Aksi</th>
        </tr>
      </thead>
      <tbody>
        {riwayat.map((trx) => {
          const dibatalkan = trx.status === "dibatalkan";
          const warnaTeks = dibatalkan ? "text-red-400" : "text-gray-900";
          return (
            <tr key={trx.id} className="border-b border-gray-50 last:border-0">
              <td className={`px-6 py-4 font-semibold ${warnaTeks}`}>{trx.id}</td>
              <td className={`px-6 py-4 font-semibold ${dibatalkan ? "text-red-400" : "text-gray-900"}`}>
                {trx.nelayan}
              </td>
              <td className={`px-6 py-4 ${dibatalkan ? "text-red-400" : "text-gray-700"}`}>
                {trx.komoditas}
              </td>
              <td className={`px-6 py-4 ${dibatalkan ? "text-red-400" : "text-gray-700"}`}>
                {trx.beratKg} Kg
              </td>
              <td className="px-6 py-4">
                {dibatalkan ? (
                  <span className="rounded-md bg-red-100 px-2.5 py-1 text-xs font-bold text-red-600">
                    DIBATALKAN
                  </span>
                ) : (
                  <span className={`rounded-md px-2.5 py-1 text-xs font-bold ${GRADE_BADGE[trx.grade]}`}>
                    GRADE {trx.grade}
                  </span>
                )}
              </td>
              <td className={`px-6 py-4 text-right font-bold ${warnaTeks}`}>{formatRupiah(trx.total)}</td>
              <td className="px-6 py-4">
                {dibatalkan ? (
                  <span className="text-red-300">Dibatalkan</span>
                ) : (
                  <button
                    onClick={() => onBatalkan(trx)}
                    className="flex items-center gap-1 font-medium text-red-600"
                  >
                    <span aria-hidden>⊗</span> Batalkan
                  </button>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

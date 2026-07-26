"use client";

import { formatRupiah } from "@/lib/utils/formatKelompok";

export default function HargaReferensiPelabuhanList({ harga }) {
  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-bold text-gray-900">Harga Referensi Pelabuhan</h2>
        <p className="text-sm text-gray-400">Update: {harga.updateTerakhir}</p>
      </div>

      <div className="rounded-xl bg-white border border-gray-200 divide-y divide-gray-100">
        {harga.daftar.map((item) => {
          const naik = item.perubahanPersen >= 0;
          return (
            <div key={item.id} className="flex items-center gap-3 p-4">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-lg">
                <span aria-hidden>{item.icon}</span>
              </span>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">{item.komoditas}</p>
                <p className="text-sm text-gray-400">Per Kilogram</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900">{formatRupiah(item.hargaPerKg)}</p>
                <p className={`text-sm font-semibold ${naik ? "text-emerald-600" : "text-red-600"}`}>
                  {naik ? "↑" : "↓"}
                  {Math.abs(item.perubahanPersen)}%
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

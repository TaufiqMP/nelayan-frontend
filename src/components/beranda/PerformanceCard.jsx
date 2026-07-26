"use client";

import { useEffect, useState } from "react";
import PeriodDropdown from "@/components/kelompok/PeriodDropdown";
import { getPerformaNelayan } from "@/lib/api/beranda";

export default function PerformanceCard() {
  const [periode, setPeriode] = useState("bulan_ini");
  const [performa, setPerforma] = useState(null);

  useEffect(() => {
    getPerformaNelayan(periode).then(setPerforma);
  }, [periode]);

  return (
    <div className="rounded-2xl bg-white border border-gray-200 p-5">
      <div className="flex items-center justify-between mb-4">
        <p className="flex items-center gap-2 font-bold text-gray-900">
          <span aria-hidden className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-600 text-sm text-white">
            📊
          </span>
          Performa Nelayan
        </p>
        <PeriodDropdown value={periode} onChange={setPeriode} />
      </div>

      {!performa ? (
        <p className="text-sm text-gray-400 py-2">Memuat...</p>
      ) : (
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-gray-100 p-3 text-center">
            <p className="text-sm text-gray-500">Total Berat</p>
            <p className="font-bold text-gray-900">{performa.totalBeratKg}kg</p>
          </div>
          <div className="rounded-xl bg-gray-100 p-3 text-center">
            <p className="text-sm text-gray-500">Tangkapan</p>
            <p className="font-bold text-gray-900">{performa.jumlahTangkapan} Kali</p>
          </div>
          <div className="rounded-xl bg-gray-100 p-3 text-center">
            <p className="text-sm text-gray-500">Komoditas</p>
            <p className="font-bold text-blue-700">{performa.komoditasUtama}</p>
          </div>
        </div>
      )}
    </div>
  );
}

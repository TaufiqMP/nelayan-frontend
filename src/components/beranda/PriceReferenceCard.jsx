"use client";

import { formatRupiah } from "@/lib/utils/formatKelompok";

export default function PriceReferenceCard({ harga }) {
  const naik = harga.perubahanPersen >= 0;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-amber-500 p-5">
      <span aria-hidden className="absolute -right-4 -bottom-4 text-8xl opacity-20">
        ⛵
      </span>

      <p className="relative flex items-center gap-1.5 font-medium text-amber-950">
        <span aria-hidden>📈</span> Harga Referensi Hari Ini
      </p>
      <h3 className="relative mt-2 text-3xl font-bold text-amber-950">{harga.komoditas}</h3>
      <p className="relative text-2xl font-bold text-amber-950">
        {formatRupiah(harga.hargaPerKg)}
        <span className="text-base font-normal">/kg</span>
      </p>

      <span className="relative mt-3 inline-block rounded-full bg-amber-400/60 px-3 py-1 text-sm font-medium text-amber-950">
        {naik ? "+" : ""}
        {harga.perubahanPersen}% vs kemarin
      </span>
    </div>
  );
}

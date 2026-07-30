"use client";

export function TotalStokCard({ totalKg, perubahanPersen }) {
  return (
    <div className="rounded-2xl bg-white border border-gray-200 p-5">
      <div className="flex items-start justify-between">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Total Stok</p>
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
          <span aria-hidden>🏬</span>
        </span>
      </div>
      <p className="mt-2 text-3xl font-bold text-blue-700">
        {totalKg.toLocaleString("id-ID")} <span className="text-lg font-normal text-gray-500">Kg</span>
      </p>
      <p className="mt-1 flex items-center gap-1 text-sm font-medium text-emerald-600">
        <span aria-hidden>↗</span> +{perubahanPersen}% dari minggu lalu
      </p>
    </div>
  );
}

export function SisaMuatanCard({ sisaKg, keterangan }) {
  return (
    <div className="rounded-2xl bg-white border border-gray-200 p-5">
      <div className="flex items-start justify-between">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Sisa Muatan Inventory</p>
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-100 text-red-500">
          <span aria-hidden>!</span>
        </span>
      </div>
      <p className="mt-2 text-3xl font-bold text-red-600">
        {sisaKg.toLocaleString("id-ID")} <span className="text-lg font-normal text-gray-500">Kg</span>
      </p>
      <p className="mt-1 flex items-center gap-1 text-sm text-gray-500">
        <span aria-hidden>ⓘ</span> {keterangan}
      </p>
    </div>
  );
}

export function StokMenipisCard({ jumlahItem, keterangan }) {
  return (
    <div className="rounded-2xl bg-white border border-gray-200 p-5">
      <div className="flex items-start justify-between">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
          Komoditas Dengan Stok Menipis
        </p>
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
          <span aria-hidden>🔔</span>
        </span>
      </div>
      <p className="mt-2 text-3xl font-bold text-gray-900">
        {String(jumlahItem).padStart(2, "0")} <span className="text-lg font-normal text-gray-500">Item</span>
      </p>
      <p className="mt-1 flex items-center gap-1 text-sm font-medium text-red-600">
        <span aria-hidden>⚠️</span> {keterangan}
      </p>
    </div>
  );
}

"use client";

export function LapakParkirCard({ tersedia, total }) {
  const persen = Math.round((tersedia / total) * 100);
  return (
    <div className="rounded-2xl bg-white border border-gray-200 p-5">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600 text-base">
          <span aria-hidden>⛵</span>
        </span>
        Ketersediaan Lapak Parkir Kapal
      </div>
      <div className="mt-3 flex items-baseline justify-between">
        <p className="text-3xl font-bold text-gray-900">
          {tersedia} <span className="text-lg font-normal text-gray-400">/ {total}</span>
        </p>
        <span className="text-sm font-semibold text-blue-600">Tersedia</span>
      </div>
      <div className="mt-3 h-2 rounded-full bg-gray-100 overflow-hidden">
        <div className="h-full rounded-full bg-blue-600" style={{ width: `${persen}%` }} />
      </div>
    </div>
  );
}

export function ProduktivitasGradeCard({ grade, label, perubahanPersen }) {
  return (
    <div className="rounded-2xl bg-white border border-gray-200 p-5">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-100 text-amber-600 text-base">
          <span aria-hidden>📈</span>
        </span>
        Produktivitas Kelompok
      </div>
      <div className="mt-3 flex items-center gap-3">
        <p className="text-3xl font-bold text-gray-900">{grade}</p>
        <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700">
          {label}
        </span>
      </div>
      <p className="mt-2 text-sm text-gray-400">+{perubahanPersen}% dari rata-rata bulan lalu</p>
    </div>
  );
}

export function TotalNelayanCard({ total, totalKelompok }) {
  return (
    <div className="rounded-2xl bg-white border border-gray-200 p-5">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-100 text-red-500 text-base">
          <span aria-hidden>👥</span>
        </span>
        Total Nelayan Keseluruhan
      </div>
      <p className="mt-3 text-3xl font-bold text-gray-900">
        {total.toLocaleString("id-ID")} <span className="text-lg font-normal text-gray-400">Nelayan</span>
      </p>
      <p className="mt-2 text-sm text-gray-400">{totalKelompok} Kelompok Terdaftar</p>
    </div>
  );
}

"use client";

export default function KondisiLautCard({ kondisi }) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-white border border-gray-200 border-l-4 border-l-blue-600 p-5">
      <span aria-hidden className="absolute right-4 top-4 text-3xl opacity-70">
        🌊
      </span>

      <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
        Kondisi Laut
      </p>
      <p className="text-2xl font-bold text-blue-700">{kondisi.label}</p>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-gray-100 p-3">
          <p className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-gray-500">
            <span aria-hidden>🌡️</span> Suhu
          </p>
          <p className="font-bold text-gray-900">{kondisi.suhuCelsius}°C</p>
        </div>
        <div className="rounded-xl bg-gray-100 p-3">
          <p className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-gray-500">
            <span aria-hidden>💨</span> Angin
          </p>
          <p className="font-bold text-gray-900">{kondisi.anginKnot} knot</p>
        </div>
      </div>
    </div>
  );
}

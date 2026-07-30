"use client";

export default function SeaConditionCard({ kondisi }) {
  return (
    <div className="rounded-2xl bg-blue-600 p-5 text-white">
      <p className="flex items-center gap-2 text-sm font-semibold text-blue-100">
        <span aria-hidden>🌊</span> KONDISI LAUT
      </p>

      <div className="mt-3 flex items-center gap-2">
        <span aria-hidden className="text-2xl">☀️</span>
        <p className="text-3xl font-bold">{kondisi.suhuCelsius}°C</p>
      </div>
      <p className="text-blue-100 text-sm">Laju Angin: {kondisi.anginKnot} Knot</p>

      <p className="mt-4 text-sm text-blue-50">{kondisi.keterangan}</p>
    </div>
  );
}

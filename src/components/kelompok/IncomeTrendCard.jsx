"use client";

export default function IncomeTrendCard({ tren }) {
  return (
    <div className="rounded-2xl bg-white border border-gray-200 p-5">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-xl">
            <span aria-hidden>📈</span>
          </span>
          <h2 className="text-lg font-bold text-gray-900">Tren Pendapatan</h2>
        </div>
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
          ↑ +{tren.perubahanPersen}%
        </span>
      </div>

      <div className="space-y-3">
        {tren.mingguan.map((minggu) => (
          <div
            key={minggu.label}
            className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3.5"
          >
            <p className={minggu.terbaru ? "text-gray-700" : "text-gray-400"}>{minggu.label}</p>
            <p className={`font-bold ${minggu.terbaru ? "text-gray-900" : "text-gray-400"}`}>
              Rp {minggu.pendapatanJuta}jt
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

export default function CommodityStatsCard({ statistik }) {
  return (
    <div className="rounded-2xl bg-white border border-gray-200 p-5">
      <div className="flex items-center gap-3 mb-5">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl">
          <span aria-hidden>⛵</span>
        </span>
        <h2 className="text-lg font-bold text-gray-900">Statistik Komoditas</h2>
      </div>

      <div className="space-y-5">
        {statistik.map((item) => (
          <div key={item.komoditas}>
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-700">{item.komoditas}</p>
              <p className={`font-bold ${item.warnaTeks}`}>{item.persen}%</p>
            </div>
            <div className="h-2.5 rounded-full bg-gray-100 overflow-hidden">
              <div
                className={`h-full rounded-full ${item.warna}`}
                style={{ width: `${item.persen}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

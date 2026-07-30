"use client";

const WARNA_BAR = {
  biru: "bg-blue-600",
  merah: "bg-red-600",
};

export default function UtilitasStokCard({ data }) {
  return (
    <div className="rounded-2xl bg-white border border-gray-200 p-5">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Utilitas Stok</h2>

      <div className="space-y-4">
        {data.map((item) => (
          <div key={item.komoditas}>
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-gray-700">{item.komoditas}</p>
              <p className="text-sm font-semibold text-gray-500">{item.persen}% Terpakai</p>
            </div>
            <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
              <div
                className={`h-full rounded-full ${WARNA_BAR[item.warna] || WARNA_BAR.biru}`}
                style={{ width: `${item.persen}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

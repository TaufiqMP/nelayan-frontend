"use client";

const URGENSI_STYLE = {
  teguran: "border-l-red-600 bg-red-50 text-red-700",
  peringatan: "border-l-orange-500 bg-orange-50 text-orange-700",
  informasi: "border-l-amber-600 bg-amber-50 text-amber-800",
};

export default function RiwayatTeguranList({ riwayat }) {
  return (
    <div className="rounded-2xl bg-white border border-gray-200 p-5">
      <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-4">
        Riwayat Teguran Terbaru
      </p>

      <div className="space-y-3">
        {riwayat.map((item) => (
          <div
            key={item.id}
            className={`rounded-lg border-l-4 p-4 ${URGENSI_STYLE[item.urgensi] || URGENSI_STYLE.informasi}`}
          >
            <div className="flex items-center justify-between">
              <p className="font-bold">{item.judul}</p>
              <span className="text-xs text-gray-400">{item.waktu}</span>
            </div>
            <p className="mt-1 text-sm text-gray-600">{item.keterangan}</p>
          </div>
        ))}
      </div>

      <a href="#" className="mt-4 block text-center text-sm font-medium text-blue-600">
        Lihat Semua Riwayat
      </a>
    </div>
  );
}

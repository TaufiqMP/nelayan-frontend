"use client";

const WARNA_BORDER = {
  hijau: "border-l-emerald-500",
  merah: "border-l-red-500",
  biru: "border-l-blue-500",
};

export default function AktivitasStokList({ data }) {
  return (
    <div className="rounded-2xl bg-white border border-gray-200 p-5">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Aktivitas Stok Terbaru</h2>

      <div className="space-y-4">
        {data.map((item) => (
          <div key={item.id} className={`border-l-4 pl-4 ${WARNA_BORDER[item.warna] || WARNA_BORDER.biru}`}>
            <p className="font-bold text-gray-900">{item.judul}</p>
            <p className="text-sm text-gray-600">{item.keterangan}</p>
            <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-gray-400">{item.waktu}</p>
          </div>
        ))}
      </div>

      <a href="#" className="mt-5 block text-center text-sm font-medium text-blue-600">
        Lihat Semua Riwayat Audit
      </a>
    </div>
  );
}

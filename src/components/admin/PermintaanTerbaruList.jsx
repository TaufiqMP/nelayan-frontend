"use client";

const STATUS_STYLE = {
  dalam_peninjauan: { label: "DALAM PENINJAUAN", className: "bg-amber-100 text-amber-700" },
  selesai: { label: "SELESAI", className: "bg-emerald-100 text-emerald-700" },
  ditolak: { label: "DITOLAK", className: "bg-red-100 text-red-600" },
};

export default function PermintaanTerbaruList({ data }) {
  return (
    <div>
      <h3 className="font-bold text-gray-900 mb-4">Permintaan Terbaru</h3>

      <div className="space-y-3">
        {data.map((item) => {
          const status = STATUS_STYLE[item.status] || STATUS_STYLE.dalam_peninjauan;
          return (
            <div key={item.id} className="rounded-xl border border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <span className={`rounded-md px-2.5 py-1 text-xs font-bold ${status.className}`}>
                  {status.label}
                </span>
                <span className="text-sm text-gray-400">{item.tanggal}</span>
              </div>
              <p className="mt-2 font-bold text-gray-900">{item.judul}</p>
              <p className="text-sm text-gray-500">{item.keterangan}</p>
            </div>
          );
        })}
      </div>

      <a href="#" className="mt-4 block text-center text-sm font-medium text-blue-600">
        Lihat Semua Permintaan
      </a>
    </div>
  );
}

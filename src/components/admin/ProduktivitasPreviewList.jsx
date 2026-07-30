"use client";

const STATUS_STYLE = {
  biru: { badge: "text-blue-600", bar: "bg-blue-600" },
  amber: { badge: "text-amber-700", bar: "bg-amber-700" },
};

export default function ProduktivitasPreviewList({ preview }) {
  return (
    <section className="rounded-2xl bg-white border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900">Produktivitas Kelompok Nelayan</h2>
        <a href="/admin/nelayan/produktivitas" className="text-sm font-medium text-blue-600">
          Lihat Semua Laporan
        </a>
      </div>

      <div className="space-y-3">
        {preview.map((k) => {
          const style = STATUS_STYLE[k.statusWarna] || STATUS_STYLE.biru;
          return (
            <div
              key={k.peringkat}
              className="flex items-center gap-4 rounded-xl border border-gray-100 p-4"
            >
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-blue-600 font-bold text-white">
                {k.peringkat}
              </span>

              <div className="flex-1">
                <p className="font-bold text-gray-900">{k.nama}</p>
                <p className="text-sm text-gray-400">{k.jumlahAnggota} Anggota</p>
              </div>

              <div className="text-center">
                <p className="font-bold text-blue-600">{k.setoranPerBulan} Setoran/Bulan</p>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                  Frekuensi Pengiriman
                </p>
              </div>

              <div className="w-48">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-gray-500">Skor: {k.skorPersen}%</span>
                  <span className={`font-bold ${style.badge}`}>{k.statusLabel}</span>
                </div>
                <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                  <div className={`h-full rounded-full ${style.bar}`} style={{ width: `${k.skorPersen}%` }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

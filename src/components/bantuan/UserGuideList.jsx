"use client";

// TODO: tiap item di sini idealnya navigasi ke halaman detail tutorial
// (mis. /bantuan/panduan/cara-buat-kelompok), tapi halaman detailnya belum
// dibuat. Sementara tombolnya belum ngapa-ngapain.
export default function UserGuideList({ panduan }) {
  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-bold text-gray-900">Panduan Pengguna</h2>
        <a href="#" className="text-sm font-medium text-blue-600">
          Lihat Semua
        </a>
      </div>

      <div className="space-y-3">
        {panduan.map((item) => (
          <button
            key={item.id}
            className="w-full flex items-center gap-3 rounded-xl bg-white border border-gray-200 p-4 text-left"
          >
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100 text-lg">
              <span aria-hidden>{item.icon}</span>
            </span>
            <p className="flex-1 font-medium text-gray-900">{item.judul}</p>
            <span aria-hidden className="text-gray-400">
              ›
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

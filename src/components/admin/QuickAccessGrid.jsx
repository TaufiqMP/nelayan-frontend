"use client";

// TODO: 3 aksi ini belum punya halaman tujuan (Catat Setoran -> lihat
// workflow "Membuat Laporan Penyetoran", Verifikasi Order -> "Konfirmasi
// Order", Verifikasi Nelayan -> "Verifikasi Registrasi Nelayan"). Kirim
// mockup kalau mau dibuatkan halamannya.
const AKSES_CEPAT = [
  { key: "catat-setoran", label: "Catat Setoran", icon: "📋", href: "/admin/setoran/catat" },
  { key: "verifikasi-order", label: "Verifikasi Order", icon: "✅", href: "/admin/orderan" },
  { key: "verifikasi-nelayan", label: "Verifikasi Nelayan", icon: "👤➕", href: "/admin/nelayan" },
];

export default function QuickAccessGrid() {
  return (
    <section>
      <h2 className="text-lg font-bold text-gray-900 mb-3">Akses Cepat</h2>
      <div className="grid grid-cols-3 gap-4">
        {AKSES_CEPAT.map((item) => (
          <a
            key={item.key}
            href={item.href}
            className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-white border border-gray-200 py-8 hover:border-blue-300 transition"
          >
            <span aria-hidden className="text-2xl text-blue-600">{item.icon}</span>
            <p className="font-semibold text-gray-900">{item.label}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

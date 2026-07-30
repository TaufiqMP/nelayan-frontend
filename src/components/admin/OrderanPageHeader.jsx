"use client";

export default function OrderanPageHeader() {
  return (
    <div className="flex items-start justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Manajemen Orderan</h1>
        <p className="text-gray-500 mt-1">
          Kelola dan pantau seluruh transaksi penjualan hasil tangkapan di Pelabuhan Muncar secara
          real-time.
        </p>
      </div>
      {/* TODO: belum ada mockup untuk form "Buat Order Manual" - tombol ini belum ngapa-ngapain */}
      <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 flex-shrink-0">
        <span aria-hidden>+</span> Buat Order Manual
      </button>
    </div>
  );
}

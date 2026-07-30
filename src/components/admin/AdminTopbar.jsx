"use client";

export default function AdminTopbar({ kantorCabang }) {
  return (
    <header className="flex items-center gap-6 border-b border-gray-200 bg-white px-8 py-4">
      <div className="relative flex-1 max-w-xl">
        <span aria-hidden className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          🔍
        </span>
        <input
          type="text"
          placeholder="Cari data order, atau nelayan..."
          className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex items-center gap-4 text-xl text-gray-500">
        <span aria-hidden>🔔</span>
        <span aria-hidden>❓</span>
      </div>

      <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
        <div className="text-right">
          <p className="font-bold text-blue-700">{kantorCabang?.namaLengkap}</p>
          <p className="text-xs text-gray-400 uppercase tracking-wide">{kantorCabang?.lokasi}</p>
        </div>
      </div>
    </header>
  );
}

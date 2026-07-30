"use client";

export default function GroupApprovalCard({ data, onSetujui, onTolak, loading }) {
  return (
    <div className="flex items-center gap-4 border-b border-gray-100 px-6 py-5 last:border-0">
      <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-xl">
        <span aria-hidden>⛵</span>
      </span>

      <div className="flex-1">
        <p className="font-bold text-gray-900">{data.namaKelompok}</p>
        <p className="text-sm text-gray-400">
          Ketua: {data.ketua} • {data.jumlahAnggota} Anggota • Terdaftar: {data.terdaftar}
        </p>
      </div>

      <button
        onClick={() => onTolak(data)}
        disabled={loading}
        className="rounded-lg border border-red-300 px-5 py-2 font-medium text-red-600 hover:bg-red-50 disabled:opacity-50"
      >
        Tolak
      </button>
      <button
        onClick={() => onSetujui(data)}
        disabled={loading}
        className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700 disabled:opacity-50"
      >
        Setujui
      </button>
    </div>
  );
}

"use client";

export default function RegistrationApprovalCard({ data, onSetujui, onTolak, loading }) {
  return (
    <div className="flex items-center gap-4 border-b border-gray-100 px-6 py-5 last:border-0">
      <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
        {data.fotoProfil && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={data.fotoProfil} alt={data.nama} className="h-full w-full object-cover" />
        )}
      </div>

      <div className="flex-1">
        <p className="font-bold text-gray-900">{data.nama}</p>
        <p className="text-sm text-gray-400">
          <span aria-hidden>🪪</span> ID: {data.id} • Terdaftar: {data.terdaftar}
        </p>
      </div>

      <button className="flex flex-col items-center gap-1 text-xs font-medium text-blue-600">
        <span aria-hidden className="text-lg">📄</span> KTP
      </button>

      <div className="h-8 w-px bg-gray-200" />

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

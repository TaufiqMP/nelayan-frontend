"use client";

export default function JoinRequestCard({ permohonan, onApprove, onReject, loading }) {
  return (
    <div className="rounded-xl bg-white border border-gray-200 p-4">
      <div className="flex items-center gap-3">
        <div className="h-11 w-11 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
          {permohonan.fotoProfil && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={permohonan.fotoProfil}
              alt={permohonan.nama}
              className="h-full w-full object-cover"
            />
          )}
        </div>
        <div>
          <p className="font-semibold text-gray-900">{permohonan.nama}</p>
          <p className="text-sm text-blue-600 flex items-center gap-1">
            <span aria-hidden>⛵</span> Pengalaman: {permohonan.pengalamanTahun} Tahun
          </p>
        </div>
      </div>

      {permohonan.pesan && (
        <p className="mt-3 rounded-lg bg-gray-50 p-3 text-sm italic text-gray-600">
          &quot;{permohonan.pesan}&quot;
        </p>
      )}

      <div className="mt-4 flex gap-3">
        <button
          onClick={() => onReject(permohonan.id)}
          disabled={loading}
          className="flex-1 rounded-lg border border-gray-300 py-2.5 font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
        >
          Tolak
        </button>
        <button
          onClick={() => onApprove(permohonan.id)}
          disabled={loading}
          className="flex-1 rounded-lg bg-amber-800 py-2.5 font-medium text-white hover:bg-amber-900 disabled:opacity-50"
        >
          Terima
        </button>
      </div>
    </div>
  );
}

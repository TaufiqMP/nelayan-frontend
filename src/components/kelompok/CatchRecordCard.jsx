"use client";

const STATUS_STYLE = {
  success: "bg-emerald-100 text-emerald-700",
  pending: "bg-amber-100 text-amber-800",
  gagal: "bg-red-100 text-red-700",
};

const STATUS_LABEL = {
  success: "SUCCESS",
  pending: "PENDING",
  gagal: "GAGAL",
};

export default function CatchRecordCard({ trip }) {
  return (
    <div className="rounded-xl border border-gray-200 p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100 text-xl text-blue-600">
          <span aria-hidden>⛵</span>
        </div>
        <div className="flex-1">
          <p className="font-semibold text-gray-900">{trip.namaKapal}</p>
          <p className="text-sm text-gray-400">
            {trip.tanggal} • {trip.waktu}
          </p>
        </div>
        <span
          className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
            STATUS_STYLE[trip.status] || STATUS_STYLE.pending
          }`}
        >
          <span aria-hidden>✓</span> {STATUS_LABEL[trip.status] || trip.status}
        </span>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3 border-t border-gray-100 pt-3">
        <div>
          <p className="text-sm text-gray-500">Ikan Utama</p>
          <p className="font-semibold text-gray-900">{trip.ikanUtama}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Total Berat</p>
          <p className="font-semibold text-gray-900">{trip.totalBeratKg} Kg</p>
        </div>
      </div>
    </div>
  );
}

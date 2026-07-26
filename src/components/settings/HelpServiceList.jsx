"use client";

export default function HelpServiceList({ onLaporkanMasalah, onAjukanCuti }) {
  return (
    <section>
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-3">
        Bantuan &amp; Layanan
      </p>
      <div className="rounded-xl bg-white border border-gray-200 divide-y divide-gray-100">
        <button
          onClick={onLaporkanMasalah}
          className="w-full flex items-center gap-3 p-4 text-left"
        >
          <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-amber-100 text-lg">
            <span aria-hidden>⚠️</span>
          </span>
          <p className="flex-1 font-medium text-gray-900">Laporkan Masalah</p>
          <span aria-hidden className="text-gray-400">›</span>
        </button>

        <button onClick={onAjukanCuti} className="w-full flex items-center gap-3 p-4 text-left">
          <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-teal-100 text-lg">
            <span aria-hidden>🗓️</span>
          </span>
          <p className="flex-1 font-medium text-gray-900">Ajukan Cuti / Nonaktif</p>
          <span aria-hidden className="text-gray-400">›</span>
        </button>
      </div>
    </section>
  );
}

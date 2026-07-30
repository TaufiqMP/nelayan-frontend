"use client";

import GradeToggle from "@/components/admin/GradeToggle";

export default function SetoranForm({ form, onChange, komoditasOptions, onSubmit, onReset, submitting }) {
  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-white border border-gray-200 p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <p className="flex items-center gap-2 text-lg font-bold text-gray-900">
          <span aria-hidden className="text-blue-600">⊕</span> Input Setoran Baru
        </p>
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
          FORM AKTIF
        </span>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5">
            Nama Nelayan / Kelompok
          </label>
          <div className="relative">
            <span aria-hidden className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">👤</span>
            <input
              type="text"
              value={form.namaNelayanKelompok}
              onChange={(e) => onChange("namaNelayanKelompok", e.target.value)}
              placeholder="Contoh: Mina Sejahtera"
              className="w-full rounded-lg border border-gray-300 py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5">
            Komoditas
          </label>
          <div className="relative">
            <span aria-hidden className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🪝</span>
            <select
              value={form.komoditasValue}
              onChange={(e) => onChange("komoditasValue", e.target.value)}
              className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Pilih komoditas...</option>
              {komoditasOptions.map((k) => (
                <option key={k.value} value={k.value}>{k.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5">
            Berat (Kg)
          </label>
          <div className="relative">
            <span aria-hidden className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">⚖️</span>
            <input
              type="number"
              min="0"
              value={form.beratKg}
              onChange={(e) => onChange("beratKg", e.target.value)}
              className="w-full rounded-lg border border-gray-300 py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5">
            Grade Kualitas
          </label>
          <GradeToggle value={form.grade} onChange={(g) => onChange("grade", g)} />
        </div>
      </div>

      <div className="mt-auto pt-6 flex gap-3">
        <button
          type="submit"
          disabled={submitting}
          className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
        >
          <span aria-hidden>💾</span> {submitting ? "Menyimpan..." : "Simpan Setoran"}
        </button>
        <button
          type="button"
          onClick={onReset}
          aria-label="Reset form"
          className="flex h-[50px] w-[50px] items-center justify-center rounded-xl border border-gray-300 text-gray-500"
        >
          <span aria-hidden>↻</span>
        </button>
      </div>
    </form>
  );
}

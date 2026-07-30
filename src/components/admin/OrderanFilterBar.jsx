"use client";

import { STATUS_ORDERAN_OPTIONS, PERIODE_ORDERAN_OPTIONS } from "@/lib/mockData/orderan";

export default function OrderanFilterBar({ cariKataKunci, onCariChange, status, onStatusChange, periode, onPeriodeChange }) {
  return (
    <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100">
      <div className="relative flex-1">
        <span aria-hidden className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          🔍
        </span>
        <input
          type="text"
          value={cariKataKunci}
          onChange={(e) => onCariChange(e.target.value)}
          placeholder="Filter berdasarkan ID atau Pembeli..."
          className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <select
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
        className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {STATUS_ORDERAN_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>

      <select
        value={periode}
        onChange={(e) => onPeriodeChange(e.target.value)}
        className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {PERIODE_ORDERAN_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>

      {/* TODO: filter lanjutan & export belum ada fungsinya */}
      <button className="rounded-xl border border-gray-200 bg-gray-50 p-2.5 text-gray-500" aria-label="Filter lanjutan">
        <span aria-hidden>⚙️</span>
      </button>
      <button className="rounded-xl border border-gray-200 bg-gray-50 p-2.5 text-gray-500" aria-label="Unduh data">
        <span aria-hidden>⬇️</span>
      </button>
    </div>
  );
}

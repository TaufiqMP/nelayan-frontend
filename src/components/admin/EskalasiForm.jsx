"use client";

import { useState } from "react";
import { KATEGORI_ESKALASI_OPTIONS } from "@/lib/mockData/adminSettings";
import { kirimEskalasi } from "@/lib/api/adminSettings";

export default function EskalasiForm({ onSuccess }) {
  const [kategori, setKategori] = useState("kegagalan_sistem_teknis");
  const [deskripsi, setDeskripsi] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!deskripsi.trim()) {
      setError("Deskripsi & alasan wajib diisi.");
      return;
    }
    setError("");
    setSubmitting(true);
    try {
      await kirimEskalasi({ kategori, deskripsi: deskripsi.trim() });
      setDeskripsi("");
      onSuccess?.();
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="font-bold text-gray-900 mb-4">Permintaan Intervensi Baru</h3>

      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Kategori Masalah</label>
        <select
          value={kategori}
          onChange={(e) => setKategori(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {KATEGORI_ESKALASI_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Deskripsi &amp; Alasan</label>
        <textarea
          value={deskripsi}
          onChange={(e) => setDeskripsi(e.target.value)}
          placeholder="Jelaskan masalah kritis dan mengapa intervensi super admin diperlukan..."
          className="w-full min-h-[120px] rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full flex items-center justify-center gap-2 rounded-xl bg-red-800 py-3.5 font-semibold text-white hover:bg-red-900 disabled:opacity-60"
      >
        <span aria-hidden>➤</span> {submitting ? "Mengirim..." : "Kirim Eskalasi"}
      </button>
    </form>
  );
}

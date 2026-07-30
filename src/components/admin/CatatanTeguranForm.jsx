"use client";

import { useState } from "react";
import { URGENSI_OPTIONS } from "@/lib/mockData/nelayanAdmin";
import { kirimCatatanTeguran } from "@/lib/api/nelayanAdmin";

export default function CatatanTeguranForm({ daftarKelompok, onSuccess }) {
  const [kelompokId, setKelompokId] = useState("");
  const [urgensi, setUrgensi] = useState("informasi");
  const [keterangan, setKeterangan] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function reset() {
    setKelompokId("");
    setUrgensi("informasi");
    setKeterangan("");
    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!kelompokId) {
      setError("Pilih kelompok nelayan terlebih dahulu.");
      return;
    }
    if (!keterangan.trim()) {
      setError("Detail catatan wajib diisi.");
      return;
    }
    setError("");
    setSubmitting(true);
    try {
      await kirimCatatanTeguran({ kelompokId, urgensi, keterangan: keterangan.trim() });
      reset();
      onSuccess?.();
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-white border border-gray-200 p-6">
      <p className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-6">
        <span aria-hidden className="text-blue-600">📝</span> Catatan &amp; Teguran Administratif
      </p>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5">
            Pilih Kelompok
          </label>
          <select
            value={kelompokId}
            onChange={(e) => setKelompokId(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Pilih Kelompok Nelayan...</option>
            {daftarKelompok.map((k) => (
              <option key={k.nama} value={k.nama}>{k.nama}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5">
            Tingkat Urgensi
          </label>
          <div className="flex items-center gap-6 h-[50px]">
            {URGENSI_OPTIONS.map((opt) => (
              <label key={opt.value} className="flex items-center gap-2 text-gray-700">
                <input
                  type="radio"
                  name="urgensi"
                  value={opt.value}
                  checked={urgensi === opt.value}
                  onChange={(e) => setUrgensi(e.target.value)}
                  className="accent-blue-600"
                />
                {opt.label}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5">
        <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5">
          Detail Catatan / Alasan Teguran
        </label>
        <textarea
          value={keterangan}
          onChange={(e) => setKeterangan(e.target.value)}
          placeholder="Tuliskan detail catatan operasional atau alasan pemberian teguran administratif di sini..."
          className="w-full min-h-[120px] rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
      </div>

      <div className="mt-5 flex justify-end gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded-xl border border-gray-300 px-6 py-2.5 font-medium text-gray-700 hover:bg-gray-50"
        >
          Batalkan
        </button>
        <button
          type="submit"
          disabled={submitting}
          className="rounded-xl bg-blue-600 px-6 py-2.5 font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
        >
          {submitting ? "Mengirim..." : "Kirim Catatan"}
        </button>
      </div>
    </form>
  );
}

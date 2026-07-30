"use client";

import { useState } from "react";

export default function CancelSetoranModal({ trx, onClose, onConfirm }) {
  const [alasan, setAlasan] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleConfirm() {
    if (!alasan.trim()) {
      setError("Alasan pembatalan wajib diisi.");
      return;
    }
    setSubmitting(true);
    try {
      await onConfirm(trx.id, alasan.trim());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6">
        <h3 className="text-lg font-bold text-gray-900">Batalkan Setoran {trx.id}?</h3>
        <p className="mt-1 text-sm text-gray-500">
          Stok inventori yang sudah ditambahkan dari setoran ini akan dikurangi kembali.
        </p>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-800 mb-1.5">Alasan Pembatalan</label>
          <textarea
            value={alasan}
            onChange={(e) => setAlasan(e.target.value)}
            placeholder="Jelaskan alasan pembatalan..."
            className="w-full rounded-lg border border-gray-300 px-4 py-3 min-h-[90px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
        </div>

        <div className="mt-5 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 rounded-lg border border-gray-300 py-2.5 font-medium text-gray-700 hover:bg-gray-50"
          >
            Batal
          </button>
          <button
            onClick={handleConfirm}
            disabled={submitting}
            className="flex-1 rounded-lg bg-red-600 py-2.5 font-medium text-white hover:bg-red-700 disabled:opacity-60"
          >
            {submitting ? "Memproses..." : "Ya, Batalkan"}
          </button>
        </div>
      </div>
    </div>
  );
}

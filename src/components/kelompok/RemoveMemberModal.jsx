"use client";

import { useState } from "react";
import { TextArea, PrimaryButton, FieldError } from "@/components/kelompok/FormElements";

export default function RemoveMemberModal({ anggota, onConfirm, onClose }) {
  const [alasan, setAlasan] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleConfirm() {
    if (!alasan.trim()) {
      setError("Alasan penghapusan wajib diisi.");
      return;
    }
    setSubmitting(true);
    try {
      await onConfirm(anggota.id, alasan.trim());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-5">
        <h3 className="text-lg font-bold text-gray-900">
          Hapus {anggota.nama}?
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Anggota akan menerima notifikasi bahwa mereka dikeluarkan dari
          kelompok.
        </p>

        <div className="mt-4">
          <TextArea
            label="Alasan Penghapusan"
            placeholder="Jelaskan alasan mengeluarkan anggota ini..."
            value={alasan}
            onChange={(e) => setAlasan(e.target.value)}
            error={error}
          />
        </div>

        <div className="mt-5 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 rounded-lg border border-gray-300 py-2.5 font-medium text-gray-700 hover:bg-gray-50"
          >
            Batal
          </button>
          <div className="flex-1">
            <PrimaryButton
              onClick={handleConfirm}
              loading={submitting}
              className="bg-red-600 hover:bg-red-700"
            >
              Hapus
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}

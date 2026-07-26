"use client";

import { useState } from "react";
import BottomSheet from "@/components/settings/BottomSheet";
import { SelectInput, TextArea, FieldError } from "@/components/kelompok/FormElements";
import { alasanHapusAkunOptions } from "@/lib/mockData/settings";
import { ajukanHapusAkun } from "@/lib/api/settings";

export default function DeleteAccountModal({ onClose, onSuccess }) {
  const [alasan, setAlasan] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function handleConfirm() {
    setSubmitError("");
    const validationErrors = {};
    if (!alasan) validationErrors.alasan = "Pilih alasan.";
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    try {
      await ajukanHapusAkun({ alasan, keterangan });
      onSuccess?.();
    } catch {
      setSubmitError("Gagal mengirim pengajuan. Silakan coba lagi.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <BottomSheet onClose={onClose}>
      <div className="flex flex-col items-center text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-2xl text-red-600">
          <span aria-hidden>⚠️</span>
        </span>
        <h2 className="mt-4 text-xl font-bold text-gray-900">Hapus Akun atau Pensiun</h2>
      </div>

      <div className="mt-4 rounded-lg bg-red-50 p-4 text-center text-sm text-red-700">
        Tindakan ini tidak dapat dibatalkan. Semua data tangkapan dan keanggotaan kelompok akan
        dihapus selamanya dari sistem.
      </div>

      <div className="mt-5 space-y-5">
        <SelectInput
          label="Alasan"
          placeholder="Pilih alasan..."
          value={alasan}
          onChange={(e) => setAlasan(e.target.value)}
          options={alasanHapusAkunOptions}
          error={errors.alasan}
        />

        <TextArea
          label="Keterangan (Opsional)"
          placeholder="Berikan detail tambahan jika ada..."
          value={keterangan}
          onChange={(e) => setKeterangan(e.target.value)}
        />

        <FieldError message={submitError} />

        <button
          onClick={handleConfirm}
          disabled={submitting}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-red-700 py-3.5 font-semibold text-white hover:bg-red-800 disabled:opacity-60"
        >
          <span aria-hidden>🗑️</span> {submitting ? "Memproses..." : "Konfirmasi Hapus Akun"}
        </button>

        <button
          onClick={onClose}
          className="w-full rounded-xl border border-blue-600 py-3.5 font-semibold text-blue-600"
        >
          Batalkan
        </button>
      </div>
    </BottomSheet>
  );
}

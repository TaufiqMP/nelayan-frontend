"use client";

import { useState } from "react";
import BottomSheet from "@/components/settings/BottomSheet";
import { SelectInput, TextInput, TextArea, PrimaryButton, FieldError } from "@/components/kelompok/FormElements";
import { alasanCutiOptions } from "@/lib/mockData/settings";
import { ajukanCutiNonaktif } from "@/lib/api/settings";

const FORM_AWAL = { alasan: "", tanggalMulai: "", tanggalSelesai: "", catatan: "" };

export default function LeaveRequestModal({ onClose, onSuccess }) {
  const [form, setForm] = useState(FORM_AWAL);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitError("");

    const validationErrors = {};
    if (!form.alasan) validationErrors.alasan = "Pilih alasan cuti.";
    if (!form.tanggalMulai) validationErrors.tanggalMulai = "Tanggal mulai wajib diisi.";
    if (!form.tanggalSelesai) validationErrors.tanggalSelesai = "Tanggal selesai wajib diisi.";
    if (
      form.tanggalMulai &&
      form.tanggalSelesai &&
      new Date(form.tanggalSelesai) < new Date(form.tanggalMulai)
    ) {
      validationErrors.tanggalSelesai = "Tanggal selesai tidak boleh sebelum tanggal mulai.";
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    try {
      await ajukanCutiNonaktif(form);
      onSuccess?.();
    } catch {
      setSubmitError("Gagal mengirim pengajuan. Silakan coba lagi.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <BottomSheet onClose={onClose}>
      <h2 className="text-xl font-bold text-blue-700">Ajukan Cuti</h2>
      <p className="text-gray-500 mb-5">Silakan lengkapi detail permohonan cuti Anda.</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <SelectInput
          label="Alasan Cuti"
          placeholder="Pilih alasan..."
          value={form.alasan}
          onChange={(e) => updateField("alasan", e.target.value)}
          options={alasanCutiOptions}
          error={errors.alasan}
        />

        <div className="grid grid-cols-2 gap-3">
          <TextInput
            label="Tanggal Mulai"
            type="date"
            value={form.tanggalMulai}
            onChange={(e) => updateField("tanggalMulai", e.target.value)}
            error={errors.tanggalMulai}
          />
          <TextInput
            label="Tanggal Selesai"
            type="date"
            value={form.tanggalSelesai}
            onChange={(e) => updateField("tanggalSelesai", e.target.value)}
            error={errors.tanggalSelesai}
          />
        </div>

        <TextArea
          label="Catatan Tambahan (Opsional)"
          placeholder="Tuliskan alasan mendetail di sini..."
          value={form.catatan}
          onChange={(e) => updateField("catatan", e.target.value)}
        />

        <div className="flex gap-3 rounded-lg border-l-4 border-amber-500 bg-gray-50 p-4">
          <span aria-hidden className="text-amber-600">ⓘ</span>
          <p className="text-sm text-gray-600">
            Permohonan cuti akan ditinjau oleh administrator pelabuhan dalam waktu 1×24 jam.
            Pastikan stok tangkapan telah terdata.
          </p>
        </div>

        <FieldError message={submitError} />

        <PrimaryButton type="submit" icon="➤" loading={submitting}>
          Ajukan Sekarang
        </PrimaryButton>

        <button type="button" onClick={onClose} className="w-full text-center text-gray-500">
          Batal
        </button>
      </form>
    </BottomSheet>
  );
}

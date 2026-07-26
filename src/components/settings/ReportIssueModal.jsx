"use client";

import { useState } from "react";
import BottomSheet from "@/components/settings/BottomSheet";
import { SelectInput, TextArea, PrimaryButton, FieldError } from "@/components/kelompok/FormElements";
import { kategoriMasalahOptions } from "@/lib/mockData/settings";
import { kirimLaporanMasalah } from "@/lib/api/settings";

export default function ReportIssueModal({ onClose, onSuccess }) {
  const [kategori, setKategori] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitError("");

    const validationErrors = {};
    if (!kategori) validationErrors.kategori = "Pilih jenis masalah.";
    if (!keterangan.trim()) validationErrors.keterangan = "Keterangan wajib diisi.";
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    try {
      await kirimLaporanMasalah({ kategori, keterangan });
      onSuccess?.();
    } catch {
      setSubmitError("Gagal mengirim laporan. Silakan coba lagi.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <BottomSheet onClose={onClose} showCloseButton>
      <h2 className="text-xl font-bold text-gray-900 mb-5">Laporkan Masalah</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <SelectInput
          label="Pilih Jenis Masalah"
          placeholder="Pilih kategori..."
          value={kategori}
          onChange={(e) => setKategori(e.target.value)}
          options={kategoriMasalahOptions}
          error={errors.kategori}
        />

        <TextArea
          label="Keterangan"
          placeholder="Jelaskan detail masalah yang Anda alami..."
          value={keterangan}
          onChange={(e) => setKeterangan(e.target.value)}
          error={errors.keterangan}
        />

        <FieldError message={submitError} />

        <PrimaryButton type="submit" icon="➤" loading={submitting}>
          Kirim Laporan
        </PrimaryButton>

        <p className="text-center text-sm text-gray-500">
          Admin akan meninjau laporan Anda dalam waktu maksimal 1×24 jam. Terima kasih atas
          bantuannya!
        </p>
      </form>
    </BottomSheet>
  );
}

"use client";

import { useState } from "react";
import BottomSheet from "@/components/settings/BottomSheet";
import { TextInput, TextArea, PrimaryButton, FieldError } from "@/components/kelompok/FormElements";
import { updateProfilSaya } from "@/lib/api/settings";

// NOTE: tidak ada mockup untuk modal ini. Field di bawah (Nama, No.HP,
// Alamat) adalah asumsi wajar berdasarkan workflow "Memperbarui Data
// Pribadi" - sesuaikan kalau ada mockup/field resminya.
export default function UpdateDataModal({ profil, onClose, onSuccess }) {
  const [form, setForm] = useState({
    nama: profil?.nama || "",
    noHp: profil?.noHp || "",
    alamat: profil?.alamat || "",
  });
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
    if (!form.nama.trim()) validationErrors.nama = "Nama wajib diisi.";
    if (!form.noHp.trim()) validationErrors.noHp = "No. HP wajib diisi.";
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    try {
      await updateProfilSaya(form);
      onSuccess?.(form);
    } catch {
      setSubmitError("Gagal menyimpan data. Silakan coba lagi.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <BottomSheet onClose={onClose} showCloseButton>
      <h2 className="text-xl font-bold text-gray-900 mb-5">Update Data</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <TextInput
          label="Nama Lengkap"
          value={form.nama}
          onChange={(e) => updateField("nama", e.target.value)}
          error={errors.nama}
        />
        <TextInput
          label="No. HP"
          value={form.noHp}
          onChange={(e) => updateField("noHp", e.target.value)}
          error={errors.noHp}
        />
        <TextArea
          label="Alamat"
          value={form.alamat}
          onChange={(e) => updateField("alamat", e.target.value)}
        />

        <FieldError message={submitError} />

        <PrimaryButton type="submit" loading={submitting}>
          Simpan Perubahan
        </PrimaryButton>
      </form>
    </BottomSheet>
  );
}

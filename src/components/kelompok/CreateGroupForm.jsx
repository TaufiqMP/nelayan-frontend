"use client";

import { useState } from "react";
import {
  TextInput,
  SelectInput,
  PrimaryButton,
  FieldError,
} from "@/components/kelompok/FormElements";
import { ALAT_TANGKAP_OPTIONS } from "@/lib/mockData/kelompok";
import { validasiFormKelompokBaru } from "@/lib/utils/validasiKelompok";
import { ajukanKelompokBaru } from "@/lib/api/kelompok";

const FORM_AWAL = {
  namaKelompok: "",
  namaKapal: "",
  kapasitas: "",
  mesin: "",
  alatTangkap: "",
  komoditasUtama: "",
  fotoKapal: null,
};

export default function CreateGroupForm({ onSuccess }) {
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

    const { valid, errors: validationErrors } = validasiFormKelompokBaru(form);
    setErrors(validationErrors);
    if (!valid) return;

    setSubmitting(true);
    try {
      const result = await ajukanKelompokBaru(form);
      onSuccess?.(result);
    } catch (err) {
      setSubmitError("Gagal mengirim pengajuan. Silakan coba lagi.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <p className="text-gray-600">
        Silakan lengkapi data kapal Anda untuk membentuk kelompok nelayan
        baru.
      </p>

      <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 text-sm text-blue-900">
        Dengan memiliki kapal, Anda akan otomatis terdaftar sebagai{" "}
        <span className="font-semibold">Ketua Kelompok</span>.
      </div>

      <div className="rounded-xl bg-white border border-gray-200 p-5 space-y-5">
        <TextInput
          label="Nama Kelompok"
          placeholder="Contoh: Baruna Jaya"
          value={form.namaKelompok}
          onChange={(e) => updateField("namaKelompok", e.target.value)}
          error={errors.namaKelompok}
        />

        <TextInput
          label="Nama Kapal"
          placeholder="Nama fisik yang tertera di kapal"
          value={form.namaKapal}
          onChange={(e) => updateField("namaKapal", e.target.value)}
          error={errors.namaKapal}
        />

        <div className="grid grid-cols-2 gap-4">
          <TextInput
            label="Kapasitas (Orang)"
            type="number"
            min="0"
            placeholder="0"
            value={form.kapasitas}
            onChange={(e) => updateField("kapasitas", e.target.value)}
            error={errors.kapasitas}
          />
          <TextInput
            label="Mesin"
            placeholder="Contoh: 15 PK"
            value={form.mesin}
            onChange={(e) => updateField("mesin", e.target.value)}
            error={errors.mesin}
          />
        </div>

        <SelectInput
          label="Alat Tangkap yang Dimiliki"
          placeholder="Pilih alat tangkap"
          value={form.alatTangkap}
          onChange={(e) => updateField("alatTangkap", e.target.value)}
          options={ALAT_TANGKAP_OPTIONS}
          error={errors.alatTangkap}
        />

        <TextInput
          label="Komoditas Utama"
          placeholder="Contoh: Tongkol, Cakalang, Udang"
          value={form.komoditasUtama}
          onChange={(e) => updateField("komoditasUtama", e.target.value)}
          error={errors.komoditasUtama}
        />

        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1.5">
            Foto Kapal
          </label>
          <label
            htmlFor="foto-kapal"
            className="flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-300 py-10 cursor-pointer hover:border-blue-400 transition"
          >
            <span aria-hidden className="text-2xl">⬆️</span>
            <span className="text-blue-600 font-medium">
              {form.fotoKapal ? form.fotoKapal.name : "Ketuk untuk unggah file"}
            </span>
            <span className="text-xs text-gray-400">Maks. 10 MB</span>
            <input
              id="foto-kapal"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => updateField("fotoKapal", e.target.files?.[0] || null)}
            />
          </label>
          <FieldError message={errors.fotoKapal} />
        </div>
      </div>

      <p className="text-sm text-gray-500">
        Seluruh data yang telah dimasukkan akan diverifikasi oleh admin.
      </p>

      <FieldError message={submitError} />

      <PrimaryButton type="submit" icon="➤" loading={submitting}>
        Ajukan Kelompok Baru
      </PrimaryButton>
    </form>
  );
}

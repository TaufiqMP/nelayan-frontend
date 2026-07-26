"use client";

import { useEffect, useState } from "react";
import {
  TextInput,
  SelectInput,
  PrimaryButton,
  FieldError,
} from "@/components/kelompok/FormElements";
import { ALAT_TANGKAP_OPTIONS } from "@/lib/mockData/kelompok";
import { validasiFormKelompokBaru } from "@/lib/utils/validasiKelompok";
import { ajukanKelompokBaru } from "@/lib/api/kelompok";
import { getKomoditasList, getKantorCabangList } from "@/lib/api/reference";

const FORM_AWAL = {
  namaKelompok: "",
  komoditasUtamaId: "",
  kantorCabangId: "",
  noRegistrasiKapal: "",
  namaKapal: "",
  kapasitas: "",
  mesin: "",
  alatTangkap: "",
};

export default function CreateGroupForm({ onSuccess }) {
  const [form, setForm] = useState(FORM_AWAL);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const [komoditasOptions, setKomoditasOptions] = useState([]);
  const [kantorCabangOptions, setKantorCabangOptions] = useState([]);
  const [loadingReference, setLoadingReference] = useState(true);
  const [referenceError, setReferenceError] = useState("");

  useEffect(() => {
    async function loadReference() {
      setLoadingReference(true);
      setReferenceError("");
      try {
        const [komoditas, kantorCabang] = await Promise.all([
          getKomoditasList(),
          getKantorCabangList(),
        ]);
        setKomoditasOptions(
          komoditas.map((k) => ({ value: k.id, label: `${k.nama} (${k.satuan})` }))
        );
        setKantorCabangOptions(
          kantorCabang.map((k) => ({ value: k.id, label: k.nama }))
        );
      } catch (err) {
        setReferenceError("Gagal memuat data komoditas/kantor cabang. Coba muat ulang halaman.");
      } finally {
        setLoadingReference(false);
      }
    }
    loadReference();
  }, []);

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
      setSubmitError(err.message || "Gagal mengirim pengajuan. Silakan coba lagi.");
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
        Dengan membuat kelompok, Anda akan otomatis terdaftar sebagai{" "}
        <span className="font-semibold">Ketua Kelompok</span>.
      </div>

      <FieldError message={referenceError} />

      <div className="rounded-xl bg-white border border-gray-200 p-5 space-y-5">
        <TextInput
          label="Nama Kelompok"
          placeholder="Contoh: Baruna Jaya"
          value={form.namaKelompok}
          onChange={(e) => updateField("namaKelompok", e.target.value)}
          error={errors.namaKelompok}
        />

        <SelectInput
          label="Komoditas Utama"
          placeholder={loadingReference ? "Memuat..." : "Pilih komoditas"}
          value={form.komoditasUtamaId}
          onChange={(e) => updateField("komoditasUtamaId", e.target.value)}
          options={komoditasOptions}
          error={errors.komoditasUtamaId}
          disabled={loadingReference}
        />

        <SelectInput
          label="Kantor Cabang"
          placeholder={loadingReference ? "Memuat..." : "Pilih kantor cabang"}
          value={form.kantorCabangId}
          onChange={(e) => updateField("kantorCabangId", e.target.value)}
          options={kantorCabangOptions}
          error={errors.kantorCabangId}
          disabled={loadingReference}
        />

        <TextInput
          label="No. Registrasi Kapal"
          placeholder="Contoh: KP-2026-00123"
          value={form.noRegistrasiKapal}
          onChange={(e) => updateField("noRegistrasiKapal", e.target.value)}
          error={errors.noRegistrasiKapal}
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
      </div>

      <p className="text-sm text-gray-500">
        Seluruh data yang telah dimasukkan akan diverifikasi oleh admin.
      </p>

      <FieldError message={submitError} />

      <PrimaryButton type="submit" icon="➤" loading={submitting || loadingReference}>
        Ajukan Kelompok Baru
      </PrimaryButton>
    </form>
  );
}

"use client";

import { useEffect, useState } from "react";
import {
  TextInput,
  SelectInput,
  TextArea,
  PrimaryButton,
  SectionLabel,
  FieldError,
} from "@/components/kelompok/FormElements";
import GroupOptionCard from "@/components/kelompok/GroupOptionCard";
import { ALAT_TANGKAP_OPTIONS } from "@/lib/mockData/kelompok";
import { validasiFormGabungKelompok } from "@/lib/utils/validasiKelompok";
import { getKelompokTersedia, ajukanGabungKelompok } from "@/lib/api/kelompok";

const FORM_AWAL = {
  alatTangkap: "",
  pengalamanTahun: "",
  kelompokId: "",
  catatan: "",
};

export default function JoinGroupForm({ onSuccess }) {
  const [daftarKelompok, setDaftarKelompok] = useState([]);
  const [loadingKelompok, setLoadingKelompok] = useState(true);
  const [form, setForm] = useState(FORM_AWAL);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    getKelompokTersedia()
      .then(setDaftarKelompok)
      .finally(() => setLoadingKelompok(false));
  }, []);

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("[DEBUG] handleSubmit dipanggil, form:", form); // TODO: hapus setelah debug
    setSubmitError("");

    const { valid, errors: validationErrors } = validasiFormGabungKelompok(form);
    console.log("[DEBUG] hasil validasi:", { valid, validationErrors }); // TODO: hapus setelah debug
    setErrors(validationErrors);
    if (!valid) return;

    setSubmitting(true);
    try {
      const result = await ajukanGabungKelompok(form);
      console.log("[DEBUG] ajukanGabungKelompok berhasil, result:", result); // TODO: hapus setelah debug
      onSuccess?.(result);
    } catch (err) {
      console.error("[DEBUG] ajukanGabungKelompok error:", err); // TODO: hapus setelah debug
      setSubmitError("Gagal mengirim pengajuan. Silakan coba lagi.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <p className="text-gray-600">
        Lengkapi data diri Anda sebagai nelayan non-pemilik kapal untuk
        bergabung dengan kelompok nelayan terdekat.
      </p>

      <div>
        <SectionLabel>Informasi Pengalaman</SectionLabel>
        <div className="rounded-xl bg-white border border-gray-200 p-5 space-y-5">
          <SelectInput
            label="Alat Tangkap yang Dimiliki"
            placeholder="Pilih Alat Tangkap"
            value={form.alatTangkap}
            onChange={(e) => updateField("alatTangkap", e.target.value)}
            options={ALAT_TANGKAP_OPTIONS}
            hint="* Kosongkan jika tidak memiliki alat tangkap pribadi."
          />
          <TextInput
            label="Pengalaman Melaut"
            type="number"
            min="0"
            placeholder="0"
            value={form.pengalamanTahun}
            onChange={(e) => updateField("pengalamanTahun", e.target.value)}
            error={errors.pengalamanTahun}
          />
        </div>
      </div>

      <div>
        <SectionLabel badge={`${daftarKelompok.length} Tersedia`}>
          Pilih Kelompok
        </SectionLabel>

        {loadingKelompok ? (
          <p className="text-sm text-gray-400">Memuat daftar kelompok...</p>
        ) : (
          <div className="space-y-3">
            {daftarKelompok.map((kelompok) => (
              <GroupOptionCard
                key={kelompok.id}
                kelompok={kelompok}
                selected={form.kelompokId === kelompok.id}
                onSelect={(id) => updateField("kelompokId", id)}
              />
            ))}
          </div>
        )}
        <FieldError message={errors.kelompokId} />
      </div>

      <div>
        <SectionLabel>Pesan Persetujuan</SectionLabel>
        <div className="rounded-xl bg-white border border-gray-200 p-5">
          <TextArea
            label="Catatan Opsional"
            placeholder="Pesan untuk Ketua Kelompok agar disetujui..."
            value={form.catatan}
            onChange={(e) => updateField("catatan", e.target.value)}
          />
        </div>
      </div>

      <FieldError message={submitError} />

      <PrimaryButton type="submit" icon="➤" loading={submitting}>
        Ajukan Bergabung
      </PrimaryButton>
    </form>
  );
}

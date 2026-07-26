"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TextInput, SelectInput, PrimaryButton, FieldError, FieldLabel } from "@/components/kelompok/FormElements";
import { validasiFormRegister } from "@/lib/utils/validasiAuth";
import { register } from "@/lib/api/auth";
import { ROLE_OPTIONS, REDIRECT_PER_ROLE } from "@/lib/mockData/auth";

const FORM_AWAL = {
  role: "",
  nik: "",
  fotoKtp: null,
  namaLengkap: "",
  noHp: "",
  email: "",
  kataSandi: "",
  konfirmasiKataSandi: "",
};

export default function RegisterForm({ onSwitchToMasuk }) {
  const router = useRouter();
  const [form, setForm] = useState(FORM_AWAL);
  const [errors, setErrors] = useState({});
  const [tampilkanSandi, setTampilkanSandi] = useState(false);
  const [tampilkanKonfirmasi, setTampilkanKonfirmasi] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function pilihRole(role) {
    // Ganti role -> reset field yang khusus role lama biar nggak nyangkut
    // (mis. pindah dari Nelayan ke Customer, NIK/Foto KTP direset).
    setForm((prev) => ({ ...FORM_AWAL, role }));
    setErrors({});
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitError("");

    const { valid, errors: validationErrors } = validasiFormRegister(form);
    setErrors(validationErrors);
    if (!valid) return;

    setSubmitting(true);
    try {
      const result = await register(form);
      const tujuan = REDIRECT_PER_ROLE[result.user?.role] || "/";
      router.push(tujuan);
    } catch (err) {
      setSubmitError("Gagal mendaftar. Silakan coba lagi.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 pt-6">
      <SelectInput
        label="Daftar Sebagai"
        placeholder="Pilih Role Anda"
        value={form.role}
        onChange={(e) => pilihRole(e.target.value)}
        options={ROLE_OPTIONS}
        error={errors.role}
      />

      {form.role === "nelayan" && (
        <>
          <TextInput
            label="NIK"
            placeholder="Masukkan NIK Anda"
            inputMode="numeric"
            value={form.nik}
            onChange={(e) => updateField("nik", e.target.value)}
            error={errors.nik}
          />

          <div>
            <FieldLabel>Foto KTP</FieldLabel>
            <label
              htmlFor="foto-ktp"
              className="flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-300 py-10 cursor-pointer hover:border-blue-400 transition"
            >
              <span aria-hidden className="text-2xl">⬆️</span>
              <span className="text-blue-600 font-medium">
                {form.fotoKtp ? form.fotoKtp.name : "Ketuk untuk unggah file"}
              </span>
              <span className="text-xs text-gray-400">Maks. 10 MB</span>
              <input
                id="foto-ktp"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => updateField("fotoKtp", e.target.files?.[0] || null)}
              />
            </label>
            <FieldError message={errors.fotoKtp} />
          </div>
        </>
      )}

      {/* Field identitas dasar ini muncul untuk KEDUA role (Nelayan & Customer) */}
      {(form.role === "nelayan" || form.role === "customer") && (
        <>
          <TextInput
            label="Nama Lengkap"
            placeholder="Masukkan Nama Anda"
            value={form.namaLengkap}
            onChange={(e) => updateField("namaLengkap", e.target.value)}
            error={errors.namaLengkap}
          />

          <TextInput
            label="No.Hp"
            placeholder="Masukkan Nomor Hp Anda"
            value={form.noHp}
            onChange={(e) => updateField("noHp", e.target.value)}
            error={errors.noHp}
          />

          <TextInput
            label="Email"
            type="email"
            placeholder="Masukkan Email Anda"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            error={errors.email}
          />

          <div className="relative">
            <TextInput
              label="Kata Sandi"
              type={tampilkanSandi ? "text" : "password"}
              placeholder="••••••••"
              value={form.kataSandi}
              onChange={(e) => updateField("kataSandi", e.target.value)}
              error={errors.kataSandi}
              className="pr-12"
            />
            <button
              type="button"
              onClick={() => setTampilkanSandi((v) => !v)}
              className="absolute right-4 top-[42px] text-gray-400"
              aria-label={tampilkanSandi ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"}
            >
              <span aria-hidden>{tampilkanSandi ? "🙈" : "👁️"}</span>
            </button>
          </div>

          <div className="relative">
            <TextInput
              label="Konfirmasi Kata Sandi"
              type={tampilkanKonfirmasi ? "text" : "password"}
              placeholder="••••••••"
              value={form.konfirmasiKataSandi}
              onChange={(e) => updateField("konfirmasiKataSandi", e.target.value)}
              error={errors.konfirmasiKataSandi}
              className="pr-12"
            />
            <button
              type="button"
              onClick={() => setTampilkanKonfirmasi((v) => !v)}
              className="absolute right-4 top-[42px] text-gray-400"
              aria-label={tampilkanKonfirmasi ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"}
            >
              <span aria-hidden>{tampilkanKonfirmasi ? "🙈" : "👁️"}</span>
            </button>
          </div>
        </>
      )}

      <FieldError message={submitError} />

      <PrimaryButton
        type="submit"
        loading={submitting}
        className="bg-amber-500 hover:bg-amber-600"
      >
        Daftar Akun
      </PrimaryButton>

      <p className="text-center text-sm text-gray-500">
        Sudah ada Akun?{" "}
        <button type="button" onClick={onSwitchToMasuk} className="font-semibold text-blue-600">
          Masuk Sekarang
        </button>
      </p>
    </form>
  );
}

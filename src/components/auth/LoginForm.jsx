"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TextInput, PrimaryButton, FieldError } from "@/components/kelompok/FormElements";
import { validasiFormLogin } from "@/lib/utils/validasiAuth";
import { login } from "@/lib/api/auth";
import { REDIRECT_PER_ROLE } from "@/lib/mockData/auth";

const FORM_AWAL = { identifier: "", password: "" };

export default function LoginForm({ onSwitchToDaftar }) {
  const router = useRouter();
  const [form, setForm] = useState(FORM_AWAL);
  const [errors, setErrors] = useState({});
  const [tampilkanPassword, setTampilkanPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitError("");

    const { valid, errors: validationErrors } = validasiFormLogin(form);
    setErrors(validationErrors);
    if (!valid) return;

    setSubmitting(true);
    try {
      const result = await login(form);
      const tujuan = REDIRECT_PER_ROLE[result.user?.role] || "/";
      router.push(tujuan);
    } catch (err) {
      setSubmitError("Email/No. HP atau password salah.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 pt-6">
      <TextInput
        label="Email / No. HP"
        placeholder="Contoh: 08123456789"
        value={form.identifier}
        onChange={(e) => updateField("identifier", e.target.value)}
        error={errors.identifier}
      />

      <div>
        <div className="relative">
          <TextInput
            label="Password"
            type={tampilkanPassword ? "text" : "password"}
            placeholder="••••••••"
            value={form.password}
            onChange={(e) => updateField("password", e.target.value)}
            error={errors.password}
            className="pr-12"
          />
          <button
            type="button"
            onClick={() => setTampilkanPassword((v) => !v)}
            className="absolute right-4 top-[42px] text-gray-400"
            aria-label={tampilkanPassword ? "Sembunyikan password" : "Tampilkan password"}
          >
            <span aria-hidden>{tampilkanPassword ? "🙈" : "👁️"}</span>
          </button>
        </div>
        <div className="mt-2 text-right">
          {/* TODO: halaman lupa password belum dibuat */}
          <a href="#" className="text-sm font-medium text-blue-600">
            Lupa Password?
          </a>
        </div>
      </div>

      <FieldError message={submitError} />

      <PrimaryButton
        type="submit"
        loading={submitting}
        className="bg-amber-500 hover:bg-amber-600"
      >
        Masuk Ke Akun
      </PrimaryButton>

      <p className="text-center text-sm text-gray-500">
        Belum punya akun?{" "}
        <button type="button" onClick={onSwitchToDaftar} className="font-semibold text-blue-600">
          Daftar Sekarang
        </button>
      </p>
    </form>
  );
}

"use client";

import { useState } from "react";
import { DEPARTEMEN_OPTIONS } from "@/lib/mockData/adminSettings";
import { updateStaffProfile } from "@/lib/api/adminSettings";

export default function StaffDetailForm({ profil }) {
  const [form, setForm] = useState({
    namaLengkap: profil.namaLengkap,
    idKaryawan: profil.idKaryawan,
    emailResmi: profil.emailResmi,
    departemen: profil.departemen,
  });
  const [submitting, setSubmitting] = useState(false);
  const [tersimpan, setTersimpan] = useState(false);

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setTersimpan(false);
  }

  async function handleSimpan() {
    setSubmitting(true);
    try {
      await updateStaffProfile(form);
      setTersimpan(true);
      setTimeout(() => setTersimpan(false), 3000);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="rounded-2xl bg-white border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Detail Data Staf</h2>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Nama Lengkap</label>
          <input
            type="text"
            value={form.namaLengkap}
            onChange={(e) => updateField("namaLengkap", e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">ID Karyawan</label>
          <input
            type="text"
            value={form.idKaryawan}
            readOnly
            className="w-full rounded-lg border border-gray-300 bg-blue-50 px-4 py-3 text-gray-500 cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Resmi</label>
          <input
            type="email"
            value={form.emailResmi}
            onChange={(e) => updateField("emailResmi", e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Departemen</label>
          <select
            value={form.departemen}
            onChange={(e) => updateField("departemen", e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {DEPARTEMEN_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3 justify-end">
        {tersimpan && <span className="text-sm font-medium text-emerald-600">Tersimpan.</span>}
        <button
          onClick={handleSimpan}
          disabled={submitting}
          className="rounded-xl bg-blue-600 px-6 py-2.5 font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
        >
          {submitting ? "Menyimpan..." : "Simpan Perubahan"}
        </button>
      </div>
    </div>
  );
}

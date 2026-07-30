"use client";

const TABS = [
  { key: "registrasi", label: "Verifikasi Registrasi" },
  { key: "kelompok-baru", label: "Kelompok Baru" },
  { key: "keluhan", label: "Keluhan & Mediasi" },
];

export default function VerifikasiTabs({ tab, onChange }) {
  return (
    <div className="flex gap-8 border-b border-gray-200 px-6">
      {TABS.map((t) => (
        <button
          key={t.key}
          onClick={() => onChange(t.key)}
          className={`py-4 text-sm font-bold uppercase tracking-wide border-b-2 -mb-px transition ${
            tab === t.key ? "border-blue-600 text-blue-600" : "border-transparent text-gray-400"
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

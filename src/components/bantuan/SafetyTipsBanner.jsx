"use client";

export default function SafetyTipsBanner({ tips }) {
  return (
    <button className="w-full text-left rounded-2xl bg-blue-600 p-5 hover:bg-blue-700 transition">
      <span aria-hidden className="text-2xl">🛡️</span>
      <p className="mt-6 text-lg font-semibold text-white">{tips.judul}</p>
      <p className="text-blue-100">{tips.subjudul}</p>
    </button>
  );
}

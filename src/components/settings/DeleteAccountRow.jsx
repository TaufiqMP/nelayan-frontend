"use client";

export default function DeleteAccountRow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 rounded-xl border border-red-200 bg-white p-4 text-left"
    >
      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-red-100 text-lg">
        <span aria-hidden>🚫</span>
      </span>
      <p className="flex-1 font-semibold text-red-600">Hapus Akun / Pensiun</p>
      <span aria-hidden className="text-red-500">⚠️</span>
    </button>
  );
}

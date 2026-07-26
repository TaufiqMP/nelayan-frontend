"use client";

export default function AuthTabs({ tab, onChange }) {
  return (
    <div className="flex rounded-xl bg-gray-100 p-1">
      <button
        onClick={() => onChange("masuk")}
        className={`flex-1 rounded-lg py-2.5 font-medium transition ${
          tab === "masuk" ? "bg-white text-blue-700 shadow-sm" : "text-gray-500"
        }`}
      >
        Masuk
      </button>
      <button
        onClick={() => onChange("daftar")}
        className={`flex-1 rounded-lg py-2.5 font-medium transition ${
          tab === "daftar" ? "bg-white text-blue-700 shadow-sm" : "text-gray-500"
        }`}
      >
        Daftar
      </button>
    </div>
  );
}

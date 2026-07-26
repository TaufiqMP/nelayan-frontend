"use client";

export default function HelpSearchBar({ value, onChange }) {
  return (
    <div className="relative">
      <span aria-hidden className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        🔍
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Cari solusi atau tutorial..."
        className="w-full rounded-xl border border-gray-300 bg-white py-3.5 pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

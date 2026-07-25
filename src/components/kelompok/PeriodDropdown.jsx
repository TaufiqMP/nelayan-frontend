"use client";

import { useState } from "react";
import { PERIODE_OPTIONS } from "@/lib/mockData/kelompok";

export default function PeriodDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const selected = PERIODE_OPTIONS.find((o) => o.value === value) || PERIODE_OPTIONS[2];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-full bg-gray-200 px-4 py-2 text-sm font-medium text-gray-800"
      >
        {selected.label}
        <span aria-hidden>▾</span>
      </button>

      {open && (
        <div className="absolute right-0 z-10 mt-2 w-44 rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
          {PERIODE_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={`block w-full px-4 py-2.5 text-left text-sm hover:bg-gray-50 ${
                opt.value === value ? "font-semibold text-blue-700" : "text-gray-700"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

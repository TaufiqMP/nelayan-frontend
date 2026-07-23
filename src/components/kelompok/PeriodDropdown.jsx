"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "./icons";
import { CATCH_PERIOD_OPTIONS } from "@/lib/mockData/kelompok";

export default function PeriodDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const selected = CATCH_PERIOD_OPTIONS.find((opt) => opt.value === value) || CATCH_PERIOD_OPTIONS[2];

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 bg-slate-200 hover:bg-slate-300 transition-colors rounded-full px-4 py-2 text-sm font-semibold text-slate-800"
      >
        {selected.label}
        <ChevronDownIcon />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden z-10">
          {CATCH_PERIOD_OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 ${
                option.value === value ? "text-blue-700 font-semibold" : "text-slate-700"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

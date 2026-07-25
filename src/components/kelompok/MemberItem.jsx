"use client";

import { useState } from "react";

export default function MemberItem({ anggota, showMenu = false, onRemove }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between rounded-xl bg-white border border-gray-200 p-4">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
          {anggota.fotoProfil && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={anggota.fotoProfil}
              alt={anggota.nama}
              className="h-full w-full object-cover"
            />
          )}
        </div>
        <div>
          <p className="font-semibold text-gray-900">{anggota.nama}</p>
          <p className="text-sm text-gray-500">
            {anggota.role === "ketua" ? "Ketua" : "Anggota"}
          </p>
        </div>
      </div>

      {showMenu && anggota.role !== "ketua" && (
        <div className="relative">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu anggota"
            className="text-gray-400 text-xl px-2"
          >
            ⋮
          </button>
          {menuOpen && (
            <div className="absolute right-0 z-10 mt-1 w-40 rounded-lg border border-gray-200 bg-white shadow-lg">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onRemove?.(anggota);
                }}
                className="w-full px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
              >
                Hapus Anggota
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

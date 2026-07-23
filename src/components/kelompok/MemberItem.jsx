"use client";

import { useEffect, useRef, useState } from "react";
import { DotsVerticalIcon } from "./icons";

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function MemberItem({ member, isLeader = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // TODO(backend): wire these up once "Kelola Anggota" endpoints exist.
  function handleLihatProfil() {
    setMenuOpen(false);
    alert(`Lihat profil ${member.name} (belum terhubung ke backend)`);
  }

  function handleHapusAnggota() {
    setMenuOpen(false);
    alert(`Hapus ${member.name} (belum terhubung ke backend — perlu alasan penghapusan)`);
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 flex items-center justify-between">
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-12 h-12 shrink-0 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center overflow-hidden">
          {member.avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={member.avatarUrl} alt={member.name} className="w-full h-full object-cover" />
          ) : (
            <span>{initials(member.name)}</span>
          )}
        </div>
        <div className="min-w-0">
          <p className="font-bold text-slate-900 truncate">{member.name}</p>
          <p className="text-slate-400 text-sm">{member.role}</p>
        </div>
      </div>

      <div className="relative" ref={menuRef}>
        <button
          type="button"
          aria-label={`Opsi untuk ${member.name}`}
          onClick={() => setMenuOpen((open) => !open)}
          className="p-2 text-slate-400 hover:text-slate-700 transition-colors"
        >
          <DotsVerticalIcon />
        </button>

        {menuOpen && (
          <div className="absolute right-0 top-full mt-1 w-44 bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden z-10">
            <button
              type="button"
              onClick={handleLihatProfil}
              className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50"
            >
              Lihat Profil
            </button>
            {!isLeader && (
              <button
                type="button"
                onClick={handleHapusAnggota}
                className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50"
              >
                Hapus Anggota
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

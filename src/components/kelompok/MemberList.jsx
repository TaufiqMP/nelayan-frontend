"use client";

import Link from "next/link";
import MemberItem from "@/components/kelompok/MemberItem";

/**
 * @param {object[]} anggota - daftar anggota
 * @param {number} [limit] - kalau diisi, hanya tampilkan N anggota pertama + link "Lihat Semua"
 * @param {boolean} [showMenu] - tampilkan menu ⋮ (hapus anggota) per baris, hanya untuk Ketua
 * @param {function} [onRemove]
 */
export default function MemberList({ anggota, limit, showMenu = false, onRemove }) {
  const ditampilkan = limit ? anggota.slice(0, limit) : anggota;
  const adaLebihBanyak = limit && anggota.length > limit;

  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-bold text-gray-900">Daftar Anggota</h2>
        {adaLebihBanyak && (
          <Link
            href="/kelompok/anggota"
            className="text-sm font-medium text-blue-600 flex items-center gap-1"
          >
            Lihat Semua <span aria-hidden>›</span>
          </Link>
        )}
      </div>

      <div className="space-y-3">
        {ditampilkan.map((a) => (
          <MemberItem key={a.id} anggota={a} showMenu={showMenu} onRemove={onRemove} />
        ))}
      </div>
    </section>
  );
}

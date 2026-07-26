"use client";

import Link from "next/link";

// TODO: "Info Pendukung" masih placeholder sementara, belum ada mockup
// khususnya (beda dari cuaca/harga di Beranda). Kirim mockup kalau mau
// dibuatkan.
const LAYANAN = [
  { key: "kelompok", label: "Manajemen Kelompok", icon: "👥", href: "/kelompok" },
  { key: "tangkapan", label: "Hasil Tangkapan", icon: "⛵", href: "/kelompok/tangkapan" },
  { key: "info", label: "Info Pendukung", icon: "ℹ️", href: "/info-pendukung" },
  { key: "bantuan", label: "Bantuan", icon: "❓", href: "/bantuan" },
];

export default function ServiceMenuGrid() {
  return (
    <section>
      <h2 className="text-lg font-bold text-gray-900 mb-3">Layanan Utama</h2>
      <div className="grid grid-cols-2 gap-3">
        {LAYANAN.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className="rounded-xl bg-white border border-gray-200 p-4"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-100 text-xl">
              <span aria-hidden>{item.icon}</span>
            </span>
            <p className="mt-3 font-semibold text-gray-900">{item.label}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

"use client";

import { useRouter } from "next/navigation";

export default function DashboardButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/kelompok/dashboard")}
      className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-semibold text-white hover:bg-blue-700"
    >
      <span aria-hidden>▦</span> Lihat Dashboard Kelompok
    </button>
  );
}

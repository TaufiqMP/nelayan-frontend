"use client";

import { useRouter } from "next/navigation";
// TODO: ganti emoji "👥+" di bawah dengan icon dari "@/components/kelompok/icons"
// (mis. <UserPlusIcon />) supaya konsisten dengan icon set yang sudah ada.

export default function EmptyGroupState() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-24">
      <h2 className="text-2xl font-bold text-gray-900 mb-3">
        Anda belum memiliki Kelompok
      </h2>
      <p className="text-gray-500 mb-8 max-w-xs">
        Bergabunglah dengan kelompok nelayan untuk mulai mengelola tangkapan
        dan berkolaborasi bersama rekan lainnya.
      </p>
      <button
        onClick={() => router.push("/kelompok/setup")}
        className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 px-6 font-semibold text-white transition hover:bg-blue-700"
      >
        <span aria-hidden>👥+</span>
        Buat atau Gabung Kelompok
      </button>
    </div>
  );
}

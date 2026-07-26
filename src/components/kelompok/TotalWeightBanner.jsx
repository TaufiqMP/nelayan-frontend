"use client";

export default function TotalWeightBanner({ totalBeratKg }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-blue-600 p-6">
      <p className="text-blue-100">Total Berat</p>
      <p className="mt-1 text-3xl font-bold text-white">{totalBeratKg} Kg</p>

      <span className="absolute right-5 top-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-2xl text-white">
        <span aria-hidden>⚖️</span>
      </span>
    </div>
  );
}

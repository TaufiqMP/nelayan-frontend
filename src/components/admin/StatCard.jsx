"use client";

const BADGE_STYLE = {
  netral: "bg-blue-100 text-blue-700",
  positif: "bg-emerald-100 text-emerald-700",
  aktif: "bg-blue-100 text-blue-700",
  kritis: "bg-red-100 text-red-700",
  urgen: "bg-amber-100 text-amber-700",
};

const ICON_BG = {
  biru: "bg-blue-100 text-blue-600",
  oranye: "bg-orange-100 text-orange-600",
  merah: "bg-red-100 text-red-600",
  hijau: "bg-emerald-100 text-emerald-600",
};

export default function StatCard({ icon, iconWarna, badgeLabel, badgeWarna, label, value, unit, subtitle }) {
  return (
    <div className="rounded-2xl bg-white border border-gray-200 p-5">
      <div className="flex items-center justify-between">
        <span className={`flex h-10 w-10 items-center justify-center rounded-lg text-lg ${ICON_BG[iconWarna] || ICON_BG.biru}`}>
          <span aria-hidden>{icon}</span>
        </span>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${BADGE_STYLE[badgeWarna] || BADGE_STYLE.netral}`}>
          {badgeLabel}
        </span>
      </div>

      <p className="mt-4 text-gray-500">{label}</p>
      <p className="text-2xl font-bold text-gray-900">
        {value} <span className="text-base font-normal text-gray-500">{unit}</span>
      </p>
      <p className="mt-1 text-sm text-gray-400">{subtitle}</p>
    </div>
  );
}

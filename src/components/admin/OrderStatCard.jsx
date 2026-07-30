"use client";

const ICON_BG = {
  biru: "bg-blue-100 text-blue-600",
  oranye: "bg-orange-100 text-orange-600",
  kuning: "bg-amber-100 text-amber-600",
  netral: "bg-gray-100 text-gray-600",
};

export default function OrderStatCard({ icon, iconWarna, label, value, badge }) {
  return (
    <div className="rounded-2xl bg-white border border-gray-200 p-5">
      <div className="flex items-center justify-between">
        <span className={`flex h-10 w-10 items-center justify-center rounded-lg text-lg ${ICON_BG[iconWarna] || ICON_BG.netral}`}>
          <span aria-hidden>{icon}</span>
        </span>
        {badge && (
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            {badge}
          </span>
        )}
      </div>

      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-gray-400">{label}</p>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
  );
}

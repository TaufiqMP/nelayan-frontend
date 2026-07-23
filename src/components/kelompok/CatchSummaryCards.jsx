import { ScaleIcon, BanknoteIcon } from "./icons";
import { formatWeight, formatRupiahShort } from "@/lib/utils/format";

export default function CatchSummaryCards({ totalWeight, totalRevenue }) {
  return (
    <div className="grid grid-cols-2 gap-3 mt-4">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 border-l-4 border-l-blue-600 p-4">
        <div className="flex items-center gap-1.5 text-slate-400 text-xs font-semibold uppercase tracking-wide">
          <ScaleIcon className="w-4 h-4" />
          Total Berat
        </div>
        <p className="text-2xl font-extrabold text-blue-700 mt-1">{formatWeight(totalWeight)}</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 border-l-4 border-l-amber-500 p-4">
        <div className="flex items-center gap-1.5 text-slate-400 text-xs font-semibold uppercase tracking-wide">
          <BanknoteIcon className="w-4 h-4" />
          Pendapatan
        </div>
        <p className="text-2xl font-extrabold text-amber-600 mt-1">{formatRupiahShort(totalRevenue)}</p>
      </div>
    </div>
  );
}

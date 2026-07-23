import { SailboatIcon } from "./icons";
import { formatDateShort, formatWeight, formatRupiahFull } from "@/lib/utils/format";

const GRADE_STYLES = {
  A: "bg-emerald-100 text-emerald-700",
  B: "bg-amber-100 text-amber-700",
  C: "bg-slate-200 text-slate-600",
};

export default function CatchHistoryItem({ transaction }) {
  const gradeClass = GRADE_STYLES[transaction.grade] || GRADE_STYLES.C;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 flex items-center justify-between gap-3">
      <div className="w-14 h-14 shrink-0 rounded-xl bg-blue-50 flex items-center justify-center">
        <SailboatIcon className="w-7 h-7 text-blue-600" />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-slate-400 text-sm">
          {formatDateShort(transaction.date)}{" "}
          <span className="text-slate-900 font-bold">{transaction.commodity}</span>
        </p>
        <span className={`inline-block mt-1 px-2.5 py-0.5 rounded-md text-xs font-semibold ${gradeClass}`}>
          GRADE {transaction.grade}
        </span>
        <div className="flex items-center gap-1 text-slate-700 font-bold mt-1.5">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-slate-400">
            <path d="M12 3v18M6 7h12M3 7l3-4 3 4-3 3-3-3ZM15 7l3-4 3 4-3 3-3-3ZM8 20h8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {formatWeight(transaction.weightKg)}
        </div>
      </div>

      <div className="text-right shrink-0">
        <p className="font-extrabold text-blue-700">{formatRupiahFull(transaction.amount)}</p>
        <p className="text-slate-400 text-sm mt-1">{transaction.status}</p>
      </div>
    </div>
  );
}

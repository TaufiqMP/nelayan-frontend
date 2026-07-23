"use client";

import { useEffect, useState } from "react";
import PeriodDropdown from "./PeriodDropdown";
import CatchSummaryCards from "./CatchSummaryCards";
import CatchHistoryItem from "./CatchHistoryItem";
import { fetchCatchHistory } from "@/lib/api/kelompok";

export default function CatchHistorySection({ initialData }) {
  const [period, setPeriod] = useState(initialData?.period || "bulan-ini");
  const [data, setData] = useState(initialData || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const result = await fetchCatchHistory(period);
        if (!cancelled) setData(result);
      } catch (err) {
        if (!cancelled) setError(err.message || "Terjadi kesalahan");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [period]);

  return (
    <section className="px-5 pt-8">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-2xl font-extrabold text-slate-900">Riwayat Tangkapan</h2>
        <PeriodDropdown value={period} onChange={setPeriod} />
      </div>

      {error && (
        <p className="text-red-600 text-sm mt-3">
          {error}. Coba pilih ulang periode.
        </p>
      )}

      {data && (
        <>
          <CatchSummaryCards totalWeight={data.totalWeight} totalRevenue={data.totalRevenue} />

          <div className={`flex flex-col gap-3 mt-4 transition-opacity ${loading ? "opacity-50" : "opacity-100"}`}>
            {data.transactions.length === 0 ? (
              <p className="text-slate-400 text-sm text-center py-6">
                Belum ada tangkapan yang disetorkan pada periode ini.
              </p>
            ) : (
              data.transactions.map((trx) => <CatchHistoryItem key={trx.id} transaction={trx} />)
            )}
          </div>
        </>
      )}
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import PeriodDropdown from "@/components/kelompok/PeriodDropdown";
import CatchSummaryCards from "@/components/kelompok/CatchSummaryCards";
import CatchHistoryItem from "@/components/kelompok/CatchHistoryItem";
import { getCatchSummary, getCatchHistory } from "@/lib/api/kelompok";

export default function CatchHistorySection() {
  const [periode, setPeriode] = useState("bulan_ini");
  const [summary, setSummary] = useState(null);
  const [riwayat, setRiwayat] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all([getCatchSummary(periode), getCatchHistory(periode)])
      .then(([summaryData, riwayatData]) => {
        setSummary(summaryData);
        setRiwayat(riwayatData);
      })
      .finally(() => setLoading(false));
  }, [periode]);

  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-bold text-gray-900">Riwayat Tangkapan</h2>
        <PeriodDropdown value={periode} onChange={setPeriode} />
      </div>

      {loading && <p className="text-sm text-gray-400 py-4">Memuat...</p>}

      {!loading && summary && (
        <div className="space-y-3">
          <CatchSummaryCards summary={summary} />

          {riwayat.length === 0 ? (
            <p className="text-sm text-gray-400 py-4 text-center">
              Belum ada transaksi pada periode ini.
            </p>
          ) : (
            riwayat.map((tx) => <CatchHistoryItem key={tx.id} transaksi={tx} />)
          )}
        </div>
      )}
    </section>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";
import SetoranForm from "@/components/admin/SetoranForm";
import EstimasiBayaranCard from "@/components/admin/EstimasiBayaranCard";
import RiwayatSetoranTable from "@/components/admin/RiwayatSetoranTable";
import CancelSetoranModal from "@/components/admin/CancelSetoranModal";
import {
  getKomoditasSetoranOptions,
  getRiwayatSetoran,
  simpanSetoran,
  batalkanSetoran,
} from "@/lib/api/setoran";
import { GRADE_MULTIPLIER } from "@/lib/mockData/setoran";

const FORM_AWAL = { namaNelayanKelompok: "", komoditasValue: "", beratKg: "0", grade: "A" };

export default function SetoranTangkapanPage() {
  const [komoditasOptions, setKomoditasOptions] = useState([]);
  const [riwayat, setRiwayat] = useState(null);
  const [totalEntriHariIni, setTotalEntriHariIni] = useState(0);
  const [form, setForm] = useState(FORM_AWAL);
  const [submitting, setSubmitting] = useState(false);
  const [trxAkanDibatalkan, setTrxAkanDibatalkan] = useState(null);

  useEffect(() => {
    getKomoditasSetoranOptions().then(setKomoditasOptions);
    muatRiwayat();
  }, []);

  function muatRiwayat() {
    getRiwayatSetoran().then(({ items, totalEntriHariIni }) => {
      setRiwayat(items);
      setTotalEntriHariIni(totalEntriHariIni);
    });
  }

  const komoditasTerpilih = komoditasOptions.find((k) => k.value === form.komoditasValue);
  const hargaPerKgBase = komoditasTerpilih?.hargaPerKg || 0;
  const pengaliGrade = GRADE_MULTIPLIER[form.grade] || 1;
  const totalEstimasi = useMemo(() => {
    const berat = Number(form.beratKg) || 0;
    return Math.round(hargaPerKgBase * pengaliGrade * berat);
  }, [hargaPerKgBase, pengaliGrade, form.beratKg]);

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    try {
      await simpanSetoran(form);
      setForm(FORM_AWAL);
      muatRiwayat();
    } finally {
      setSubmitting(false);
    }
  }

  async function handleKonfirmasiBatalkan(id, alasan) {
    await batalkanSetoran(id, alasan);
    setTrxAkanDibatalkan(null);
    muatRiwayat();
  }

  return (
    <div className="px-8 py-6 space-y-6">
      <div className="grid grid-cols-3 gap-6 items-stretch">
        <div className="col-span-2">
          <SetoranForm
            form={form}
            onChange={updateField}
            komoditasOptions={komoditasOptions}
            onSubmit={handleSubmit}
            onReset={() => setForm(FORM_AWAL)}
            submitting={submitting}
          />
        </div>
        <EstimasiBayaranCard
          hargaPerKgBase={hargaPerKgBase}
          pengaliGrade={pengaliGrade}
          total={totalEstimasi}
        />
      </div>

      <section className="rounded-2xl bg-white border border-gray-200">
        <div className="flex items-center justify-between px-6 py-5">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Riwayat Setoran</h2>
            <p className="text-sm text-gray-500">Memantau transaksi masuk harian pelabuhan</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-600">
              <span aria-hidden>📅</span> 7 Hari Terakhir
            </button>
            <button className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-600">
              <span aria-hidden>⚙️</span> Filter
            </button>
          </div>
        </div>

        {riwayat ? (
          <RiwayatSetoranTable riwayat={riwayat} onBatalkan={setTrxAkanDibatalkan} />
        ) : (
          <p className="text-center text-gray-400 py-12">Memuat...</p>
        )}

        {riwayat && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              Menampilkan {riwayat.length} dari {totalEntriHariIni} entri hari ini
            </p>
            <div className="flex gap-2">
              <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-400" disabled>
                ‹
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600">
                ›
              </button>
            </div>
          </div>
        )}
      </section>

      {trxAkanDibatalkan && (
        <CancelSetoranModal
          trx={trxAkanDibatalkan}
          onClose={() => setTrxAkanDibatalkan(null)}
          onConfirm={handleKonfirmasiBatalkan}
        />
      )}
    </div>
  );
}

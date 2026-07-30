"use client";

import { useEffect, useState } from "react";
import { TotalStokCard, SisaMuatanCard, StokMenipisCard } from "@/components/admin/InventoriStatCards";
import RincianKomoditasTable from "@/components/admin/RincianKomoditasTable";
import UtilitasStokCard from "@/components/admin/UtilitasStokCard";
import AktivitasStokList from "@/components/admin/AktivitasStokList";
import {
  getRingkasanInventori,
  getRincianKomoditas,
  getUtilitasStok,
  getAktivitasStokTerbaru,
} from "@/lib/api/inventori";

export default function ManajemenInventoriPage() {
  const [ringkasan, setRingkasan] = useState(null);
  const [rincian, setRincian] = useState(null);
  const [utilitas, setUtilitas] = useState(null);
  const [aktivitas, setAktivitas] = useState(null);

  useEffect(() => {
    getRingkasanInventori().then(setRingkasan);
    getRincianKomoditas().then(setRincian);
    getUtilitasStok().then(setUtilitas);
    getAktivitasStokTerbaru().then(setAktivitas);
  }, []);

  return (
    <div className="px-8 py-6 space-y-6">
      {ringkasan && (
        <div className="grid grid-cols-3 gap-4">
          <TotalStokCard totalKg={ringkasan.totalStokKg} perubahanPersen={ringkasan.perubahanPersen} />
          <SisaMuatanCard sisaKg={ringkasan.sisaMuatanKg} keterangan={ringkasan.kapasitasKeterangan} />
          <StokMenipisCard jumlahItem={ringkasan.stokMenipisJumlah} keterangan={ringkasan.stokMenipisKeterangan} />
        </div>
      )}

      <div className="grid grid-cols-3 gap-6 items-start">
        <div className="col-span-2">
          {rincian ? (
            <RincianKomoditasTable data={rincian} />
          ) : (
            <p className="text-center text-gray-400 py-12">Memuat...</p>
          )}
        </div>

        <div className="space-y-6">
          {utilitas && <UtilitasStokCard data={utilitas} />}
          {aktivitas && <AktivitasStokList data={aktivitas} />}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import ProduktivitasTable from "@/components/admin/ProduktivitasTable";
import CatatanTeguranForm from "@/components/admin/CatatanTeguranForm";
import RiwayatTeguranList from "@/components/admin/RiwayatTeguranList";
import { getProduktivitasLengkap, getRiwayatTeguran } from "@/lib/api/nelayanAdmin";

export default function ProduktivitasKelompokPage() {
  const [data, setData] = useState(null);
  const [riwayat, setRiwayat] = useState(null);

  useEffect(() => {
    muatSemua();
  }, []);

  function muatSemua() {
    getProduktivitasLengkap().then(setData);
    getRiwayatTeguran().then(setRiwayat);
  }

  return (
    <div className="px-8 py-6 space-y-6">
      {data ? (
        <ProduktivitasTable data={data} updateTerakhir="Hari ini, 08:45 WIB" />
      ) : (
        <p className="text-center text-gray-400 py-12">Memuat...</p>
      )}

      <div className="grid grid-cols-3 gap-6 items-start">
        <div className="col-span-2">
          {data && (
            <CatatanTeguranForm
              daftarKelompok={data}
              onSuccess={muatSemua}
            />
          )}
        </div>
        {riwayat && <RiwayatTeguranList riwayat={riwayat} />}
      </div>
    </div>
  );
}

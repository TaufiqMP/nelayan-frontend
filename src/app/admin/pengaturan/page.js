"use client";

import { useEffect, useState } from "react";
import StaffProfileCard from "@/components/admin/StaffProfileCard";
import StaffDetailForm from "@/components/admin/StaffDetailForm";
import EskalasiForm from "@/components/admin/EskalasiForm";
import PermintaanTerbaruList from "@/components/admin/PermintaanTerbaruList";
import { getStaffProfile, getPermintaanEskalasi } from "@/lib/api/adminSettings";

export default function AdminSettingsPage() {
  const [profil, setProfil] = useState(null);
  const [permintaan, setPermintaan] = useState(null);

  useEffect(() => {
    getStaffProfile().then(setProfil);
    muatPermintaan();
  }, []);

  function muatPermintaan() {
    getPermintaanEskalasi().then(setPermintaan);
  }

  return (
    <div className="px-8 py-6 space-y-6">
      <div className="grid grid-cols-3 gap-6 items-start">
        <div>{profil && <StaffProfileCard profil={profil} />}</div>
        <div className="col-span-2">{profil && <StaffDetailForm profil={profil} />}</div>
      </div>

      <section className="rounded-2xl bg-white border border-gray-200 overflow-hidden">
        <div className="flex items-center gap-3 bg-orange-50 px-6 py-4">
          <span aria-hidden className="text-orange-600 text-xl">🛠️</span>
          <h2 className="text-lg font-bold text-orange-800">Intervensi Super Admin</h2>
        </div>

        <div className="px-6 py-6">
          <p className="text-gray-600 max-w-2xl">
            Gunakan formulir ini untuk meminta eskalasi atau bantuan khusus dari Kantor Pusat jika
            terdapat kendala operasional yang tidak dapat diselesaikan di tingkat cabang.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-10">
            <EskalasiForm onSuccess={muatPermintaan} />
            {permintaan && <PermintaanTerbaruList data={permintaan} />}
          </div>
        </div>
      </section>
    </div>
  );
}

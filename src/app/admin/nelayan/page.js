"use client";

import { useEffect, useState } from "react";
import { LapakParkirCard, ProduktivitasGradeCard, TotalNelayanCard } from "@/components/admin/NelayanOverviewCards";
import ProduktivitasPreviewList from "@/components/admin/ProduktivitasPreviewList";
import VerifikasiTabs from "@/components/admin/VerifikasiTabs";
import RegistrationApprovalCard from "@/components/admin/RegistrationApprovalCard";
import GroupApprovalCard from "@/components/admin/GroupApprovalCard";
import {
  getRingkasanNelayan,
  getProduktivitasPreview,
  getVerifikasiRegistrasi,
  getKelompokBaru,
  getKeluhanMediasi,
  setujuiRegistrasiNelayan,
  tolakRegistrasiNelayan,
  setujuiKelompokBaru,
  tolakKelompokBaru,
} from "@/lib/api/nelayanAdmin";

export default function ManajemenNelayanPage() {
  const [ringkasan, setRingkasan] = useState(null);
  const [preview, setPreview] = useState(null);
  const [tab, setTab] = useState("registrasi");

  const [registrasi, setRegistrasi] = useState(null);
  const [kelompokBaru, setKelompokBaru] = useState(null);
  const [keluhan, setKeluhan] = useState(null);
  const [actionLoadingId, setActionLoadingId] = useState(null);

  useEffect(() => {
    getRingkasanNelayan().then(setRingkasan);
    getProduktivitasPreview().then(setPreview);
    getVerifikasiRegistrasi().then(setRegistrasi);
  }, []);

  useEffect(() => {
    if (tab === "kelompok-baru" && kelompokBaru === null) {
      getKelompokBaru().then(setKelompokBaru);
    }
    if (tab === "keluhan" && keluhan === null) {
      getKeluhanMediasi().then(setKeluhan);
    }
  }, [tab, kelompokBaru, keluhan]);

  async function handleRegistrasi(data, aksi) {
    setActionLoadingId(data.id);
    try {
      await (aksi === "setujui" ? setujuiRegistrasiNelayan(data.id) : tolakRegistrasiNelayan(data.id));
      setRegistrasi((prev) => prev.filter((r) => r.id !== data.id));
    } finally {
      setActionLoadingId(null);
    }
  }

  async function handleKelompokBaru(data, aksi) {
    setActionLoadingId(data.id);
    try {
      await (aksi === "setujui" ? setujuiKelompokBaru(data.id) : tolakKelompokBaru(data.id));
      setKelompokBaru((prev) => prev.filter((k) => k.id !== data.id));
    } finally {
      setActionLoadingId(null);
    }
  }

  return (
    <div className="px-8 py-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Manajemen Nelayan</h1>
        <p className="text-gray-500 mt-1">
          Kelola operasional, verifikasi, dan pantau produktivitas armada nelayan.
        </p>
      </div>

      {ringkasan && (
        <div className="grid grid-cols-3 gap-4">
          <LapakParkirCard tersedia={ringkasan.lapakTersedia} total={ringkasan.lapakTotal} />
          <ProduktivitasGradeCard
            grade={ringkasan.produktivitasGrade}
            label={ringkasan.produktivitasLabel}
            perubahanPersen={ringkasan.produktivitasPerubahanPersen}
          />
          <TotalNelayanCard total={ringkasan.totalNelayan} totalKelompok={ringkasan.totalKelompokTerdaftar} />
        </div>
      )}

      {preview && <ProduktivitasPreviewList preview={preview} />}

      <section className="rounded-2xl bg-white border border-gray-200">
        <VerifikasiTabs tab={tab} onChange={setTab} />

        {tab === "registrasi" && (
          <>
            {registrasi === null && <p className="text-center text-gray-400 py-12">Memuat...</p>}
            {registrasi?.length === 0 && (
              <p className="text-center text-gray-400 py-12">Tidak ada registrasi yang menunggu.</p>
            )}
            {registrasi?.map((r) => (
              <RegistrationApprovalCard
                key={r.id}
                data={r}
                loading={actionLoadingId === r.id}
                onSetujui={(d) => handleRegistrasi(d, "setujui")}
                onTolak={(d) => handleRegistrasi(d, "tolak")}
              />
            ))}
          </>
        )}

        {tab === "kelompok-baru" && (
          <>
            {kelompokBaru === null && <p className="text-center text-gray-400 py-12">Memuat...</p>}
            {kelompokBaru?.length === 0 && (
              <p className="text-center text-gray-400 py-12">Tidak ada kelompok baru yang menunggu.</p>
            )}
            {kelompokBaru?.map((k) => (
              <GroupApprovalCard
                key={k.id}
                data={k}
                loading={actionLoadingId === k.id}
                onSetujui={(d) => handleKelompokBaru(d, "setujui")}
                onTolak={(d) => handleKelompokBaru(d, "tolak")}
              />
            ))}
          </>
        )}

        {tab === "keluhan" && (
          <p className="text-center text-gray-400 py-12">
            Belum ada keluhan/mediasi. (Belum ada spesifikasi workflow untuk fitur ini)
          </p>
        )}
      </section>
    </div>
  );
}

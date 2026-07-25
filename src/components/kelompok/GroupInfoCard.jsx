"use client";

export default function GroupInfoCard({ groupInfo }) {
  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-bold text-gray-900">Info Kelompok</h2>
        <span className="rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-700">
          {groupInfo.status === "aktif" ? "AKTIF" : groupInfo.status}
        </span>
      </div>

      <div className="rounded-2xl bg-white border border-gray-200 p-5">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-2xl text-white">
            <span aria-hidden>⛵</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-700">{groupInfo.nama}</h3>
            <p className="text-gray-700">Komoditas Utama {groupInfo.komoditasUtama}</p>
            <p className="text-gray-500">Kapasitas {groupInfo.kapasitas} Orang</p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-gray-100 p-4">
            <p className="text-sm text-gray-500">Ketua Kelompok</p>
            <p className="font-semibold text-gray-900">{groupInfo.ketua}</p>
          </div>
          <div className="rounded-xl bg-gray-100 p-4">
            <p className="text-sm text-gray-500">Anggota</p>
            <p className="font-semibold text-gray-900">{groupInfo.jumlahAnggota} Orang</p>
          </div>
        </div>
      </div>
    </section>
  );
}

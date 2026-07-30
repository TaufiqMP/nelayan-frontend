"use client";

export default function StaffProfileCard({ profil }) {
  return (
    <div className="rounded-2xl bg-white border border-gray-200 overflow-hidden">
      <div className="relative h-28 bg-blue-600">
        <div className="absolute -bottom-10 left-6 h-20 w-20 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
          {profil.fotoProfil && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={profil.fotoProfil} alt={profil.namaLengkap} className="h-full w-full object-cover" />
          )}
        </div>
        {/* TODO: belum ada fungsi upload foto - tombol ini masih placeholder */}
        <button
          aria-label="Ganti foto profil"
          className="absolute -bottom-1 left-16 flex h-7 w-7 items-center justify-center rounded-full bg-blue-700 text-white text-sm border-2 border-white"
        >
          <span aria-hidden>✎</span>
        </button>
      </div>

      <div className="px-6 pt-12 pb-6">
        <h2 className="text-xl font-bold text-gray-900">{profil.namaLengkap}</h2>
        <p className="text-gray-500 mt-1">{profil.jabatan}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
            {profil.statusVerifikasi}
          </span>
          <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700">
            {profil.levelAdmin}
          </span>
        </div>
      </div>
    </div>
  );
}

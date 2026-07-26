"use client";

export default function AccountCard({ profil, onUpdateData }) {
  return (
    <section>
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-3">Akun</p>
      <div className="flex items-center gap-3 rounded-xl bg-white border border-gray-200 p-4">
        <div className="h-14 w-14 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
          {profil.fotoProfil && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={profil.fotoProfil} alt={profil.nama} className="h-full w-full object-cover" />
          )}
        </div>
        <div className="flex-1">
          <p className="font-bold text-gray-900">{profil.nama}</p>
          <p className="text-sm text-gray-400">ID: {profil.idNelayan}</p>
        </div>
        <button
          onClick={onUpdateData}
          className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Update Data
        </button>
      </div>
    </section>
  );
}

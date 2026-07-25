"use client";

export default function GroupOptionCard({ kelompok, selected, onSelect }) {
  const penuh = kelompok.jumlahAnggota >= kelompok.kapasitasMaksimal;

  return (
    <button
      type="button"
      disabled={penuh}
      onClick={() => onSelect(kelompok.id)}
      className={`w-full text-left rounded-xl border p-4 transition ${
        penuh
          ? "border-gray-200 bg-gray-50 opacity-60 cursor-not-allowed"
          : selected
          ? "border-blue-600 bg-blue-50 ring-1 ring-blue-600"
          : "border-gray-200 bg-white hover:border-blue-300"
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="font-semibold text-gray-900">{kelompok.nama}</p>
          <p className="text-sm text-gray-500">Ketua: {kelompok.ketua}</p>
        </div>
        <div className="text-right">
          <p className={`font-semibold ${penuh ? "text-red-500" : "text-blue-700"}`}>
            {kelompok.jumlahAnggota}/{kelompok.kapasitasMaksimal}
          </p>
          <p className="text-[11px] uppercase tracking-wide text-gray-400">
            {penuh ? "Penuh" : "Anggota"}
          </p>
        </div>
      </div>

      {kelompok.komoditas.length > 0 && (
        <p className="mt-2 text-sm text-amber-800">
          <span aria-hidden>〰️ </span>
          Komoditas: {kelompok.komoditas.join(", ")}
        </p>
      )}
    </button>
  );
}

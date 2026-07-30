"use client";

export default function ProduktivitasTable({ data, updateTerakhir }) {
  return (
    <section className="rounded-2xl bg-white border border-gray-200">
      <div className="flex items-center justify-between px-6 py-5">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Daftar Produktivitas Kelompok</h2>
          <p className="text-sm text-gray-400">Update terakhir: {updateTerakhir}</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-600">
            <span aria-hidden>⚙️</span> Filter
          </button>
          <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
            <span aria-hidden>⬇️</span> Export CSV
          </button>
        </div>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="border-y border-gray-100 bg-gray-50 text-xs font-semibold uppercase tracking-wide text-gray-500">
            <th className="px-6 py-3">Nama Kelompok</th>
            <th className="px-6 py-3">Anggota</th>
            <th className="px-6 py-3">Tipe Kapal</th>
            <th className="px-6 py-3">Total Setoran</th>
            <th className="px-6 py-3">Volume (Kg)</th>
            <th className="px-6 py-3">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((k) => (
            <tr key={k.nama} className="border-b border-gray-50 last:border-0">
              <td className="px-6 py-5 font-bold text-gray-900">{k.nama}</td>
              <td className="px-6 py-5 text-gray-700">{k.jumlahAnggota} Orang</td>
              <td className="px-6 py-5 text-gray-700">{k.tipeKapal}</td>
              <td className="px-6 py-5 text-gray-700">Rp {k.totalSetoranJt}Jt</td>
              <td className="px-6 py-5 font-bold text-gray-900">{k.volumeKg}</td>
              <td className="px-6 py-5">
                {/* TODO: menu aksi ini belum ada isinya (belum ada mockup dropdown-nya) */}
                <button aria-label="Menu aksi" className="text-gray-400 text-xl px-2">⋮</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

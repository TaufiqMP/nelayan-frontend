"use client";

export default function StokPelabuhanList({ stok }) {
  return (
    <section>
      <h2 className="font-bold text-gray-900 mb-3">Stok Pelabuhan (Kg)</h2>

      <div className="rounded-xl bg-white border border-gray-200 p-5 space-y-5">
        {stok.map((item) => {
          const persen = Math.min(100, Math.round((item.beratKg / item.kapasitasMaksKg) * 100));
          return (
            <div key={item.komoditas}>
              <div className="flex items-center justify-between mb-1.5">
                <p className="text-gray-700">{item.komoditas}</p>
                <p className="font-semibold text-gray-900">
                  {item.beratKg.toLocaleString("id-ID")} Kg
                </p>
              </div>
              <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                <div
                  className={`h-full rounded-full ${item.warna}`}
                  style={{ width: `${persen}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

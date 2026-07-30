"use client";

const STATUS_STYLE = {
  optimal: { label: "Optimal", dot: "bg-emerald-500", teks: "text-emerald-600" },
  menipis: { label: "Menipis", dot: "bg-red-500", teks: "text-red-600" },
};

export default function RincianKomoditasTable({ data }) {
  return (
    <section className="rounded-2xl bg-white border border-gray-200">
      <div className="flex items-center justify-between px-6 py-5">
        <h2 className="text-lg font-bold text-gray-900">Rincian Komoditas</h2>
        <button className="rounded-xl bg-blue-50 px-4 py-2.5 text-sm font-semibold text-blue-700">
          Ekspor CSV
        </button>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="border-y border-gray-100 text-sm text-gray-500">
            <th className="px-6 py-3 font-medium">Komoditas</th>
            <th className="px-6 py-3 font-medium">Grade</th>
            <th className="px-6 py-3 font-medium">Berat Stok</th>
            <th className="px-6 py-3 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            const status = STATUS_STYLE[item.status] || STATUS_STYLE.optimal;
            return (
              <tr key={item.komoditas} className="border-b border-gray-50 last:border-0">
                <td className="px-6 py-6 font-semibold text-gray-900">{item.komoditas}</td>
                <td className="px-6 py-6 font-bold text-blue-600">{item.grade}</td>
                <td className="px-6 py-6 text-gray-700">{item.beratKg} Kg</td>
                <td className="px-6 py-6">
                  <span className={`flex items-center gap-1.5 font-medium ${status.teks}`}>
                    <span className={`h-2 w-2 rounded-full ${status.dot}`} /> {status.label}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

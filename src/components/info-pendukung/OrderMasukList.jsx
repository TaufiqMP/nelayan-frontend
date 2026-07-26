"use client";

const STATUS_STYLE = {
  pending: { border: "border-l-amber-500", badge: "bg-amber-100 text-amber-800", label: "PENDING" },
  confirmed: { border: "border-l-teal-600", badge: "bg-teal-100 text-teal-700", label: "CONFIRMED" },
};

const TIPE_ICON = {
  resto: "🍴",
  pasar: "🛒",
};

export default function OrderMasukList({ order, limit }) {
  const ditampilkan = limit ? order.slice(0, limit) : order;

  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-bold text-gray-900">Order Masuk</h2>
        <a href="#" className="text-sm font-medium text-blue-600">
          Lihat Semua
        </a>
      </div>

      <div className="space-y-3">
        {ditampilkan.map((item) => {
          const style = STATUS_STYLE[item.status] || STATUS_STYLE.pending;
          return (
            <div
              key={item.id}
              className={`rounded-xl bg-white border border-gray-200 border-l-4 ${style.border} p-4`}
            >
              <div className="flex items-center justify-between">
                <p className="font-semibold text-blue-700">{item.namaPembeli}</p>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${style.badge}`}>
                  {style.label}
                </span>
              </div>
              <div className="mt-2 flex items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1.5">
                  <span aria-hidden>{TIPE_ICON[item.tipe] || "📦"}</span>
                  {item.komoditas} {item.beratKg}kg
                </span>
                <span className="flex items-center gap-1.5">
                  <span aria-hidden>📅</span> Pickup {item.tanggalPickup}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

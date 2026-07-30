"use client";

const STATUS_STYLE = {
  refill_segera: { label: "REFILL SEGERA", badge: "text-red-600", bar: "bg-red-500", icon: "🩸" },
  aman: { label: "AMAN", badge: "text-gray-400", bar: "bg-blue-600", icon: "🌊" },
};

export default function StockAlertCard({ stok }) {
  return (
    <div className="rounded-2xl bg-white border border-gray-200 p-5">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Peringatan Stok</h2>

      <div className="space-y-3">
        {stok.map((item) => {
          const style = STATUS_STYLE[item.status] || STATUS_STYLE.aman;
          const persen = Math.min(100, Math.round((item.sisaKg / item.kapasitasMaksKg) * 100));
          return (
            <div key={item.komoditas} className="rounded-xl bg-gray-50 p-4">
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-2 font-semibold text-gray-900">
                  <span aria-hidden>{style.icon}</span> {item.komoditas}
                </p>
                <span className={`text-xs font-bold ${style.badge}`}>{style.label}</span>
              </div>
              <p className="text-sm text-gray-500 mt-0.5">Sisa: {item.sisaKg} Kg</p>
              <div className="mt-2 h-1.5 rounded-full bg-gray-200 overflow-hidden">
                <div className={`h-full rounded-full ${style.bar}`} style={{ width: `${persen}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

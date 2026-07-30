"use client";

import { formatRupiah } from "@/lib/utils/formatKelompok";

const STATUS_STYLE = {
  diproses: { label: "Diproses", className: "bg-blue-100 text-blue-700" },
  menunggu_bayar: { label: "Menunggu Bayar", className: "bg-amber-100 text-amber-700" },
  siap_diambil: { label: "Siap Diambil", className: "bg-orange-100 text-orange-700" },
  pre_order: { label: "Pre Order", className: "bg-emerald-100 text-emerald-700" },
};

export default function RecentOrdersTable({ orderan }) {
  return (
    <section className="rounded-2xl bg-white border border-gray-200">
      <div className="flex items-center justify-between px-6 py-5">
        <h2 className="text-lg font-bold text-gray-900">Orderan Terbaru</h2>
        <a href="/admin/orderan" className="text-sm font-medium text-blue-600">
          Lihat Semua
        </a>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="border-y border-gray-100 text-sm text-gray-500">
            <th className="px-6 py-3 font-medium">ID Order</th>
            <th className="px-6 py-3 font-medium">Pembeli</th>
            <th className="px-6 py-3 font-medium">Komoditas</th>
            <th className="px-6 py-3 font-medium">Total</th>
            <th className="px-6 py-3 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {orderan.map((order) => {
            const status = STATUS_STYLE[order.status] || STATUS_STYLE.diproses;
            return (
              <tr key={order.id} className="border-b border-gray-50 last:border-0">
                <td className="px-6 py-4 font-medium text-gray-900">{order.id}</td>
                <td className="px-6 py-4 text-gray-700">{order.pembeli}</td>
                <td className="px-6 py-4 text-gray-700">{order.komoditas}</td>
                <td className="px-6 py-4 font-semibold text-gray-900">{formatRupiah(order.total)}</td>
                <td className="px-6 py-4">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${status.className}`}>
                    {status.label}
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

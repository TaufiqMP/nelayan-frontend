"use client";

import { formatRupiah } from "@/lib/utils/formatKelompok";

const STATUS_STYLE = {
  diproses: "bg-orange-100 text-orange-700",
  menunggu: "bg-red-100 text-red-600",
  dikirim: "bg-blue-100 text-blue-700",
  selesai: "bg-sky-100 text-sky-700",
};

export default function OrderanTable({ orderan, onLihatDetail }) {
  return (
    <table className="w-full text-left">
      <thead>
        <tr className="border-b border-gray-100 text-xs font-semibold uppercase tracking-wide text-gray-400">
          <th className="px-6 py-3">ID Order</th>
          <th className="px-6 py-3">Tanggal</th>
          <th className="px-6 py-3">Pembeli</th>
          <th className="px-6 py-3">Komoditas &amp; Berat</th>
          <th className="px-6 py-3">Total Harga</th>
          <th className="px-6 py-3">Status</th>
          <th className="px-6 py-3">Aksi</th>
        </tr>
      </thead>
      <tbody>
        {orderan.map((order) => (
          <tr key={order.id} className="border-b border-gray-50 last:border-0">
            <td className="px-6 py-4">
              <button
                onClick={() => onLihatDetail?.(order)}
                className="font-semibold text-blue-600"
              >
                {order.id}
              </button>
            </td>
            <td className="px-6 py-4 text-gray-600">{order.tanggal}</td>
            <td className="px-6 py-4 font-medium text-gray-900">{order.pembeli}</td>
            <td className="px-6 py-4 text-gray-700">
              {order.komoditas} • {order.beratKg}kg
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900">{formatRupiah(order.total)}</td>
            <td className="px-6 py-4">
              <span
                className={`rounded-full px-3 py-1 text-xs font-bold uppercase ${
                  STATUS_STYLE[order.status] || STATUS_STYLE.menunggu
                }`}
              >
                {order.status}
              </span>
            </td>
            <td className="px-6 py-4">
              <button
                onClick={() => onLihatDetail?.(order)}
                aria-label={`Lihat detail ${order.id}`}
                className="text-blue-600"
              >
                <span aria-hidden>👁️</span>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

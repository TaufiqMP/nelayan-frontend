"use client";

export default function MarketDemandInfo({ info }) {
  return (
    <section>
      <h2 className="text-lg font-bold text-gray-900 mb-3">Info Permintaan</h2>
      <div className="flex gap-3 rounded-xl bg-blue-50 border border-blue-100 p-4">
        <span aria-hidden className="text-blue-600 text-lg leading-none">
          ⓘ
        </span>
        <div>
          <p className="font-medium text-gray-900">{info.judul}</p>
          <p className="text-sm text-gray-500">{info.keterangan}</p>
        </div>
      </div>
    </section>
  );
}

"use client";

// TODO: dua fitur ini (Subsidi BBM & Forum Nelayan) belum ada halamannya
// sama sekali diluar mockup ini. Sementara tanpa href/link dulu. Kirim
// mockup kalau mau dibuatkan.
export default function QuickLinkCards({ links }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {links.map((item) => (
        <div key={item.id} className="rounded-xl bg-white border border-gray-200 p-4">
          <span aria-hidden className="text-2xl">
            {item.icon}
          </span>
          <p className="mt-3 font-semibold text-gray-900">{item.judul}</p>
          <p className="text-sm text-gray-500">{item.subjudul}</p>
        </div>
      ))}
    </div>
  );
}

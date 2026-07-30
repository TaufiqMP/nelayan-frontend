"use client";

export default function Pagination({ page, totalHalaman, onChange }) {
  // Bikin daftar nomor halaman yang ditampilkan: 1, halaman sekitar page
  // sekarang, dan halaman terakhir - dengan "..." di antara kalau ada gap.
  function daftarNomorHalaman() {
    const nomor = new Set([1, totalHalaman, page, page - 1, page + 1]);
    return [...nomor].filter((n) => n >= 1 && n <= totalHalaman).sort((a, b) => a - b);
  }

  const nomorHalaman = daftarNomorHalaman();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page === 1}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 disabled:opacity-40"
        aria-label="Halaman sebelumnya"
      >
        ‹
      </button>

      {nomorHalaman.map((n, i) => {
        const adaGapSebelum = i > 0 && n - nomorHalaman[i - 1] > 1;
        return (
          <span key={n} className="flex items-center gap-2">
            {adaGapSebelum && <span className="text-gray-400 px-1">...</span>}
            <button
              onClick={() => onChange(n)}
              className={`flex h-9 w-9 items-center justify-center rounded-lg font-medium ${
                n === page ? "bg-blue-600 text-white" : "border border-gray-200 text-gray-600"
              }`}
            >
              {n}
            </button>
          </span>
        );
      })}

      <button
        onClick={() => onChange(Math.min(totalHalaman, page + 1))}
        disabled={page === totalHalaman}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 disabled:opacity-40"
        aria-label="Halaman berikutnya"
      >
        ›
      </button>
    </div>
  );
}

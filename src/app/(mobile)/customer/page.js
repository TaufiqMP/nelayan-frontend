"use client";

// TODO: seluruh sisi Customer (Beranda Customer, Order, dst) belum punya
// mockup sama sekali. Kirim mockup kalau mau dibuatkan, sama seperti
// fitur-fitur Nelayan sebelumnya.

export default function CustomerPlaceholderPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 text-center">
      <div>
        <p className="text-4xl mb-3" aria-hidden>
          🛠️
        </p>
        <h1 className="text-xl font-bold text-gray-900">Halaman Customer belum dibuat</h1>
        <p className="mt-2 text-gray-500">
          Login berhasil sebagai Customer, tapi sisi aplikasi untuk role ini belum ada mockup-nya.
        </p>
      </div>
    </div>
  );
}

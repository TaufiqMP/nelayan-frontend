import "./globals.css";

export const metadata = {
  title: "Pasar Bahari",
  description: "Solusi digital terpercaya untuk potensi komoditas bahari Indonesia",
};

// Root layout HARUS ada <html>/<body> - jangan hapus. Tapi jangan taruh
// styling frame HP di sini lagi, itu sekarang ada di
// src/app/(mobile)/layout.js supaya khusus halaman Nelayan/Customer saja.
// Halaman Admin (src/app/admin/...) sengaja full-width desktop, tidak
// dibungkus frame ini.
export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="text-gray-900 antialiased">{children}</body>
    </html>
  );
}

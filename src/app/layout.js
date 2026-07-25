import "./globals.css";

export const metadata = {
  title: "Pasar Bahari",
  description: "Aplikasi manajemen kelompok nelayan",
};

// Lebar frame HP. 430px kira-kira lebar iPhone Pro Max / Android besar -
// cukup lega tapi masih kerasa "mobile". Ubah di sini kalau mau beda.
const MOBILE_FRAME_WIDTH = "430px";

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="text-gray-900 antialiased">
        {/* Wrapper full-viewport, background abu-abu buat area kosong di kiri-kanan saat dibuka di desktop */}
        <div className="min-h-screen bg-gray-200 flex justify-center">
          {/* "Frame" HP: lebar dibatasi, di-center, background putih/abu terang seperti app */}
          <div
            className="w-full min-h-screen bg-gray-50 shadow-xl relative"
            style={{ maxWidth: MOBILE_FRAME_WIDTH }}
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

// Layout khusus untuk semua halaman "mobile" (Nelayan & Customer):
// Beranda, Kelompok, Settings, Bantuan, Login, Info Pendukung, dst.
// Route group "(mobile)" ini tidak muncul di URL - /kelompok tetap
// /kelompok, cuma filenya dikelompokkan biar bisa punya layout beda dari
// halaman Admin yang desktop-only.

const MOBILE_FRAME_WIDTH = "430px";

export default function MobileLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center">
      <div
        className="w-full min-h-screen bg-gray-50 shadow-xl relative"
        style={{ maxWidth: MOBILE_FRAME_WIDTH }}
      >
        {children}
      </div>
    </div>
  );
}

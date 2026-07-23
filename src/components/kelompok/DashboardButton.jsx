import Link from "next/link";
import { GridIcon } from "./icons";

export default function DashboardButton() {
  return (
    <div className="px-5 pt-8 pb-4">
      {/* Dummy href — halaman Dashboard Kelompok menyusul, backend on progress */}
      <Link
        href="#"
        className="w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 transition-colors text-white font-bold rounded-2xl py-4"
      >
        <GridIcon />
        Lihat Dashboard Kelompok
      </Link>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS_ADMIN } from "@/lib/mockData/admin";

export default function AdminSidebar({ kantorCabang, admin }) {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 flex-shrink-0 flex-col border-r border-gray-200 bg-white">
      <div className="px-6 py-6">
        <h1 className="text-xl font-bold text-blue-700">{kantorCabang?.nama || "Kantor Cabang"}</h1>
        <p className="text-sm text-gray-400">{kantorCabang?.namaPelabuhan}</p>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        {NAV_ITEMS_ADMIN.map((item) => {
          const active = item.href === "/admin" ? pathname === "/admin" : pathname.startsWith(item.href);
          return (
            <Link
              key={item.key}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium transition ${
                active ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <span aria-hidden className="w-5 text-center">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {admin && (
        <div className="flex items-center gap-3 border-t border-gray-200 px-6 py-4">
          <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
            {admin.fotoProfil && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={admin.fotoProfil} alt={admin.nama} className="h-full w-full object-cover" />
            )}
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-sm">{admin.nama}</p>
            <p className="text-xs text-gray-400">ID: {admin.id}</p>
          </div>
        </div>
      )}
    </aside>
  );
}

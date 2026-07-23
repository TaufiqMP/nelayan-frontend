"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, UsersIcon, SettingsIcon } from "./icons";

const NAV_ITEMS = [
  { href: "/beranda", label: "Beranda", Icon: HomeIcon },
  { href: "/kelompok", label: "Kelompok", Icon: UsersIcon },
  { href: "/settings", label: "Settings", Icon: SettingsIcon },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky bottom-0 bg-white border-t border-slate-200 px-3 py-2">
      <div className="max-w-md mx-auto flex items-center justify-around">
        {NAV_ITEMS.map(({ href, label, Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center gap-1 px-5 py-2 rounded-2xl transition-colors ${
                active ? "bg-blue-700 text-white" : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs font-semibold">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

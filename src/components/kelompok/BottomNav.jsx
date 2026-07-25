"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Beranda", icon: "🏠" },
  { href: "/kelompok", label: "Kelompok", icon: "👥" },
  { href: "/settings", label: "Settings", icon: "⚙️" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 inset-x-0 mx-auto w-full border-t border-gray-200 bg-white px-3 py-2"
      style={{ maxWidth: "430px" }}
    >
      <div className="flex items-center justify-around">
        {NAV_ITEMS.map((item) => {
          // "/" harus exact match, selain itu boleh startsWith (biar /kelompok/setup dkk tetap nge-highlight "Kelompok")
          const active =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 rounded-xl px-5 py-2 text-sm font-medium transition ${
                active ? "bg-blue-600 text-white" : "text-gray-600"
              }`}
            >
              <span aria-hidden className="text-lg leading-none">
                {item.icon}
              </span>
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

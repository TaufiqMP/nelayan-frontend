"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { logout } from "@/lib/api/auth";

export default function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } finally {
      router.push("/login");
    }
  }

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className="w-full flex items-center justify-center gap-2 rounded-xl bg-amber-500 py-3.5 font-semibold text-gray-900 hover:bg-amber-600 disabled:opacity-60"
    >
      <span aria-hidden>⬅️</span> {loading ? "Keluar..." : "Keluar Sesi"}
    </button>
  );
}

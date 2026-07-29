"use client";

import { useEffect, useState } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopbar from "@/components/admin/AdminTopbar";
import { getKantorCabangSaya, getAdminSaya } from "@/lib/api/admin";

export default function AdminLayout({ children }) {
  const [kantorCabang, setKantorCabang] = useState(null);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    getKantorCabangSaya().then(setKantorCabang);
    getAdminSaya().then(setAdmin);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar kantorCabang={kantorCabang} admin={admin} />
      <div className="flex-1 flex flex-col min-w-0">
        <AdminTopbar kantorCabang={kantorCabang} />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}

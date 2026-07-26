"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import HelpSearchBar from "@/components/bantuan/HelpSearchBar";
import SafetyTipsBanner from "@/components/bantuan/SafetyTipsBanner";
import QuickLinkCards from "@/components/bantuan/QuickLinkCards";
import UserGuideList from "@/components/bantuan/UserGuideList";
import FaqAccordion from "@/components/bantuan/FaqAccordion";
import ContactSupportButton from "@/components/bantuan/ContactSupportButton";
import { getBantuanData } from "@/lib/api/bantuan";

export default function BantuanPage() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [kataKunci, setKataKunci] = useState("");

  useEffect(() => {
    getBantuanData().then(setData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="flex items-center justify-between border-b border-gray-200 bg-white px-5 py-4">
        <div className="flex items-center gap-4">
          <button onClick={() => router.back()} aria-label="Kembali" className="text-blue-600 text-xl">
            ←
          </button>
          <h1 className="text-xl font-bold text-blue-700">Bantuan</h1>
        </div>
        <span aria-hidden className="text-xl text-blue-600">🔔</span>
      </header>

      <main className="px-5 py-6 space-y-8">
        <HelpSearchBar value={kataKunci} onChange={setKataKunci} />

        {!data ? (
          <p className="text-center text-gray-400 py-12">Memuat...</p>
        ) : (
          <>
            <SafetyTipsBanner tips={data.tips} />
            <QuickLinkCards links={data.quickLinks} />
            <UserGuideList panduan={data.panduan} />
            <FaqAccordion faq={data.faq} />
            <ContactSupportButton kontak={data.kontak} />
          </>
        )}
      </main>
    </div>
  );
}

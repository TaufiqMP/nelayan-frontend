import AppHeader from "@/components/kelompok/AppHeader";
import GroupInfoCard from "@/components/kelompok/GroupInfoCard";
import MemberList from "@/components/kelompok/MemberList";
import CatchHistorySection from "@/components/kelompok/CatchHistorySection";
import DashboardButton from "@/components/kelompok/DashboardButton";
import BottomNav from "@/components/kelompok/BottomNav";

import { mockGroup, mockMembers, getCatchDataByPeriod } from "@/lib/mockData/kelompok";

export const metadata = {
  title: "Manajemen Kelompok — Pasar Bahari",
};

// This is a Server Component: initial data below is read straight from the
// mock data source for a fast first paint (SSR). It intentionally mirrors
// what GET /api/kelompok, /api/kelompok/anggota, and /api/kelompok/tangkapan
// return, so nothing changes for child components once the real backend is
// swapped in — only these three lines need to change.
export default function ManajemenKelompokPage() {
  const group = mockGroup;
  const members = mockMembers;
  const initialCatchData = getCatchDataByPeriod("bulan-ini");

  return (
    <div className="min-h-screen flex flex-col bg-white-50">
      <AppHeader hasNotification />

      <main className="flex-1 max-w-md w-full mx-auto pb-8">
        <GroupInfoCard group={group} />
        <MemberList members={members} />
        <CatchHistorySection initialData={initialCatchData} />
        <DashboardButton />
      </main>

      <BottomNav />
    </div>
  );
}

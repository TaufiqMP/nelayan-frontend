// ---------------------------------------------------------------------------
// DUMMY DATA — stand-in until the real backend for Manajemen Kelompok is
// ready. Every function here mirrors the shape the real API is expected to
// return, so swapping `lib/api/kelompok.js` over to real endpoints later
// should not require touching any component.
// ---------------------------------------------------------------------------

export const mockGroup = {
  id: "grp-bahari-jaya",
  name: "Bahari Jaya",
  status: "AKTIF", // AKTIF | NONAKTIF
  mainCommodity: "Ikan Tuna",
  capacity: 4,
  leaderName: "Yusuf Hadi",
  memberCount: 3, // anggota selain ketua
};

export const mockMembers = [
  {
    id: "usr-1",
    name: "Yusuf Hadi",
    role: "Ketua",
    avatarUrl: null,
  },
  {
    id: "usr-2",
    name: "Asep Kurniawan",
    role: "Anggota",
    avatarUrl: null,
  },
  {
    id: "usr-3",
    name: "Dedi Saputra",
    role: "Anggota",
    avatarUrl: null,
  },
  {
    id: "usr-4",
    name: "Mamat Suryana",
    role: "Anggota",
    avatarUrl: null,
  },
];

// Catch/transaction history keyed by period filter.
const catchDataByPeriod = {
  "hari-ini": {
    period: "hari-ini",
    periodLabel: "Hari Ini",
    totalWeight: 0,
    totalRevenue: 0,
    transactions: [],
  },
  "minggu-ini": {
    period: "minggu-ini",
    periodLabel: "Minggu Ini",
    totalWeight: 45,
    totalRevenue: 2925000,
    transactions: [
      {
        id: "trx-1",
        date: "2026-10-12",
        commodity: "Tuna",
        grade: "A",
        weightKg: 45,
        amount: 2925000,
        status: "Selesai",
      },
    ],
  },
  "bulan-ini": {
    period: "bulan-ini",
    periodLabel: "Bulan Ini",
    totalWeight: 120,
    totalRevenue: 7800000,
    transactions: [
      {
        id: "trx-1",
        date: "2026-10-12",
        commodity: "Tuna",
        grade: "A",
        weightKg: 45,
        amount: 2925000,
        status: "Selesai",
      },
      {
        id: "trx-2",
        date: "2026-10-10",
        commodity: "Tongkol",
        grade: "B",
        weightKg: 75,
        amount: 4875000,
        status: "Selesai",
      },
    ],
  },
};

export const CATCH_PERIOD_OPTIONS = [
  { value: "hari-ini", label: "Hari Ini" },
  { value: "minggu-ini", label: "Minggu Ini" },
  { value: "bulan-ini", label: "Bulan Ini" },
  { value: "rentang-tanggal", label: "Rentang Tanggal" },
];

export function getCatchDataByPeriod(period) {
  if (period === "rentang-tanggal") {
    // Custom range isn't wired up yet — return the monthly figure as a
    // reasonable placeholder until date-range picking is implemented.
    return { ...catchDataByPeriod["bulan-ini"], period: "rentang-tanggal", periodLabel: "Rentang Tanggal" };
  }
  return catchDataByPeriod[period] || catchDataByPeriod["bulan-ini"];
}

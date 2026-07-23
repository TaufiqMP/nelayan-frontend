import { NextResponse } from "next/server";
import { getCatchDataByPeriod } from "@/lib/mockData/kelompok";

// GET /api/kelompok/tangkapan?period=bulan-ini
// Returns catch summary (total weight, total revenue) and the transaction
// history for the requested period.
// TODO(backend): replace with real query against the setoran/transaksi table,
// filtered by group id + date range, and support a real "rentang-tanggal" (from/to).
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const period = searchParams.get("period") || "bulan-ini";

  const data = getCatchDataByPeriod(period);
  return NextResponse.json({ success: true, data });
}

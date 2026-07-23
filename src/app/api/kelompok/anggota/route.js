import { NextResponse } from "next/server";
import { mockMembers } from "@/lib/mockData/kelompok";

// GET /api/kelompok/anggota
// Returns the member list of the current group (Ketua + Anggota).
// TODO(backend): replace with real DB query, include pagination for "Lihat Semua".
export async function GET() {
  return NextResponse.json({ success: true, data: mockMembers });
}

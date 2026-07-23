import { NextResponse } from "next/server";
import { mockGroup } from "@/lib/mockData/kelompok";

// GET /api/kelompok
// Returns info of the group the logged-in nelayan belongs to.
// TODO(backend): replace with real DB lookup scoped to the authenticated user.
export async function GET() {
  return NextResponse.json({ success: true, data: mockGroup });
}

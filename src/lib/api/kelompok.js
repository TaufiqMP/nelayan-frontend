// Thin fetch wrappers around our own /api/kelompok/* routes.
// Components should call these instead of `fetch` directly, so the day the
// real backend is ready we only need to change what's inside these functions.

export async function fetchGroupInfo() {
  const res = await fetch("/api/kelompok");
  if (!res.ok) throw new Error("Gagal memuat info kelompok");
  const json = await res.json();
  return json.data;
}

export async function fetchMembers() {
  const res = await fetch("/api/kelompok/anggota");
  if (!res.ok) throw new Error("Gagal memuat daftar anggota");
  const json = await res.json();
  return json.data;
}

export async function fetchCatchHistory(period = "bulan-ini") {
  const res = await fetch(`/api/kelompok/tangkapan?period=${encodeURIComponent(period)}`);
  if (!res.ok) throw new Error("Gagal memuat riwayat tangkapan");
  const json = await res.json();
  return json.data;
}

// Lapisan API untuk autentikasi. Pola sama seperti lib/api/kelompok.js:
// USE_MOCK true -> simulasi login/register + simpan sesi di localStorage,
// false -> panggil backend beneran lewat apiFetch.
//
// PENTING: mock login di sini TIDAK benar-benar memvalidasi email/password
// (nggak ada database mock user). Login mock akan selalu "berhasil" dengan
// role "nelayan" kecuali ada sesi register sebelumnya di localStorage yang
// nyimpen role lain. Ini cuma buat mempercepat pengembangan UI, bukan
// simulasi keamanan.

import { apiFetch } from "@/lib/api/client";

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK !== "false";
const SESSION_KEY = "mock_auth_session";

const simulateDelay = (data, ms = 600) =>
  new Promise((resolve) => setTimeout(() => resolve(data), ms));

function tulisSesiMock(user) {
  if (typeof window === "undefined") return;
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}

export function bacaSesiSaya() {
  if (typeof window === "undefined") return null;
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY));
  } catch {
    return null;
  }
}

/** payload: { identifier (email/no hp), password } */
export async function login(payload) {
  if (USE_MOCK) {
    // TODO: ganti dengan validasi kredensial beneran begitu backend siap.
    const sesiTersimpan = bacaSesiSaya();
    const user = sesiTersimpan || { role: "nelayan", nama: "Pengguna", identifier: payload.identifier };
    tulisSesiMock(user);
    return simulateDelay({ success: true, user });
  }
  return apiFetch("/auth/login", { method: "POST", body: payload });
}

/** payload: { role, nik, fotoKtp, namaLengkap, noHp, email, kataSandi, konfirmasiKataSandi } */
export async function register(payload) {
  if (USE_MOCK) {
    const user = { role: payload.role, nama: payload.namaLengkap, email: payload.email };
    tulisSesiMock(user);
    return simulateDelay({ success: true, user });
  }
  return apiFetch("/auth/register", { method: "POST", body: payload });
}

export async function logout() {
  if (USE_MOCK) {
    if (typeof window !== "undefined") localStorage.removeItem(SESSION_KEY);
    return simulateDelay({ success: true }, 200);
  }
  return apiFetch("/auth/logout", { method: "POST" });
}

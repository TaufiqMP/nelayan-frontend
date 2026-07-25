// Wrapper fetch generik untuk semua panggilan ke backend Express temanmu.
// Dipakai oleh lib/api/*.js begitu USE_MOCK di-nonaktifkan.
//
// Set di .env.local:
//   NEXT_PUBLIC_API_URL=http://localhost:5000/api   (atau URL backend beneran)

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

export async function apiFetch(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
      // TODO: tambahkan Authorization header di sini begitu alur login/token
      // sudah ada, mis. `Authorization: Bearer ${token}`.
    },
    credentials: "include", // kalau backend pakai cookie/session
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  if (!res.ok) {
    // Coba baca pesan error dari backend (mis. hasil validasi JOI),
    // fallback ke status text kalau body bukan JSON.
    let message = res.statusText;
    try {
      const errBody = await res.json();
      message = errBody.message || errBody.error || message;
    } catch {
      /* body bukan JSON, biarkan pakai statusText */
    }
    throw new ApiError(message, res.status);
  }

  // Beberapa endpoint (DELETE, dsb) mungkin tidak punya body.
  const text = await res.text();
  return text ? JSON.parse(text) : null;
}

export class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

// Helper khusus untuk request yang mengirim file (mis. Foto Kapal),
// karena tidak boleh pakai Content-Type: application/json.
export async function apiFetchFormData(path, formData, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: "POST",
    ...options,
    credentials: "include",
    body: formData,
  });

  if (!res.ok) {
    throw new ApiError(res.statusText, res.status);
  }

  return res.json();
}

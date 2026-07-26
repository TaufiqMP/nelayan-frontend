export function validasiFormLogin(form) {
  const errors = {};
  if (!form.identifier?.trim()) {
    errors.identifier = "Email atau No. HP wajib diisi.";
  }
  if (!form.password) {
    errors.password = "Password wajib diisi.";
  }
  return { valid: Object.keys(errors).length === 0, errors };
}

// Field NIK & Foto KTP cuma wajib untuk role "nelayan". Field identitas
// dasar (nama, no hp, email, kata sandi) wajib untuk kedua role.
export function validasiFormRegister(form) {
  const errors = {};

  if (!form.role) {
    errors.role = "Pilih role Anda.";
    return { valid: false, errors };
  }

  if (form.role === "nelayan") {
    if (!form.nik?.trim()) {
      errors.nik = "NIK wajib diisi.";
    } else if (!/^\d{16}$/.test(form.nik.trim())) {
      errors.nik = "NIK harus 16 digit angka.";
    }
    if (!form.fotoKtp) {
      errors.fotoKtp = "Foto KTP wajib diunggah.";
    } else if (form.fotoKtp.size > 10 * 1024 * 1024) {
      errors.fotoKtp = "Ukuran foto maksimal 10 MB.";
    }
  }

  if (!form.namaLengkap?.trim()) {
    errors.namaLengkap = "Nama lengkap wajib diisi.";
  }
  if (!form.noHp?.trim()) {
    errors.noHp = "No. HP wajib diisi.";
  }
  if (!form.email?.trim()) {
    errors.email = "Email wajib diisi.";
  } else if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
    errors.email = "Format email tidak valid.";
  }
  if (!form.kataSandi || form.kataSandi.length < 8) {
    errors.kataSandi = "Kata sandi minimal 8 karakter.";
  }
  if (form.konfirmasiKataSandi !== form.kataSandi) {
    errors.konfirmasiKataSandi = "Konfirmasi kata sandi tidak cocok.";
  }

  return { valid: Object.keys(errors).length === 0, errors };
}

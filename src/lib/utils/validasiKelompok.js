// Validasi sisi frontend untuk form Kelompok.
// Catatan: ini hanya validasi UX. Backend WAJIB tetap memvalidasi ulang
// (mis. dengan JOI) karena request bisa datang bukan lewat form ini.

const MAKS_UKURAN_FOTO_MB = 10;

/*
export function validasiFormKelompokBaru(form) {
  const errors = {};

  if (!form.namaKelompok?.trim()) {
    errors.namaKelompok = "Nama kelompok wajib diisi.";
  }
  if (!form.namaKapal?.trim()) {
    errors.namaKapal = "Nama kapal wajib diisi.";
  }
  if (!form.kapasitas || Number(form.kapasitas) <= 0) {
    errors.kapasitas = "Kapasitas kapal harus lebih dari 0 orang.";
  }
  if (!form.mesin?.trim()) {
    errors.mesin = "Informasi mesin wajib diisi.";
  }
  if (!form.alatTangkap) {
    errors.alatTangkap = "Pilih alat tangkap yang dimiliki.";
  }
  if (!form.komoditasUtama?.trim()) {
    errors.komoditasUtama = "Komoditas utama wajib diisi.";
  }
  if (form.fotoKapal && form.fotoKapal.size > MAKS_UKURAN_FOTO_MB * 1024 * 1024) {
    errors.fotoKapal = `Ukuran foto maksimal ${MAKS_UKURAN_FOTO_MB} MB.`;
  }

  return { valid: Object.keys(errors).length === 0, errors };
}
*/

// Validasi form Buat Kelompok Baru (ketua kapal)
export function validasiFormKelompokBaru(form) {
  const errors = {};

  if (!form.namaKelompok || form.namaKelompok.trim().length < 3) {
    errors.namaKelompok = "Nama kelompok minimal 3 karakter";
  }

  if (!form.komoditasUtamaId) {
    errors.komoditasUtamaId = "Pilih komoditas utama";
  }

  if (!form.kantorCabangId) {
    errors.kantorCabangId = "Pilih kantor cabang";
  }

  if (!form.noRegistrasiKapal || form.noRegistrasiKapal.trim().length < 3) {
    errors.noRegistrasiKapal = "Nomor registrasi kapal wajib diisi (minimal 3 karakter)";
  }

  return { valid: Object.keys(errors).length === 0, errors };
}

// Validasi form Gabung Kelompok (nelayan non-pemilik kapal)
export function validasiFormGabungKelompok(form) {
  const errors = {};

  if (!form.kelompokId) {
    errors.kelompokId = "Pilih kelompok yang ingin diajukan.";
  }

  if (form.pengalamanTahun !== "" && Number(form.pengalamanTahun) < 0) {
    errors.pengalamanTahun = "Pengalaman melaut tidak boleh negatif.";
  }

  return { valid: Object.keys(errors).length === 0, errors };
}

export const ROLE_OPTIONS = [
  { value: "nelayan", label: "Nelayan" },
  { value: "customer", label: "Customer" },
];

// Ke mana user diarahkan setelah login/daftar berhasil, tergantung role.
// "customer" -> /customer masih placeholder karena sejauh ini seluruh
// halaman yang sudah dibangun (Beranda, Kelompok, dst) itu sisi Nelayan.
export const REDIRECT_PER_ROLE = {
  nelayan: "/",
  customer: "/customer",
};

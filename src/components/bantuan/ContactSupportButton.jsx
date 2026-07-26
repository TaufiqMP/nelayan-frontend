"use client";

export default function ContactSupportButton({ kontak }) {
  return (
    <section>
      <h2 className="font-bold text-gray-900 mb-3">Kontak Dukungan</h2>
      <a
        href={`tel:${kontak.nomorTelepon}`}
        className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-700 py-4 font-semibold text-white hover:bg-blue-800"
      >
        <span aria-hidden>📞</span> {kontak.label}
      </a>
    </section>
  );
}

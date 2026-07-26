"use client";

export default function TrustBadges() {
  return (
    <div className="flex flex-col items-center text-center px-8 pt-8">
      <div className="flex gap-3">
        {["🛡️", "✅", "✅"].map((icon, i) => (
          <span
            key={i}
            aria-hidden
            className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-200 text-lg"
          >
            {icon}
          </span>
        ))}
      </div>
      <p className="mt-3 text-sm text-gray-400">
        Data Anda dilindungi dengan enkripsi standar perbankan. Nelayan berkomitmen menjaga
        privasi informasi Anda.
      </p>
    </div>
  );
}

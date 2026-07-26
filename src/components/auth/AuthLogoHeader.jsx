"use client";

export default function AuthLogoHeader() {
  return (
    <div className="flex flex-col items-center text-center pt-10 pb-8">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-600 text-4xl text-white shadow-lg">
        <span aria-hidden>⚓</span>
      </div>
      <h1 className="mt-4 text-3xl font-bold text-blue-700">Pasar Bahari</h1>
      <p className="mt-2 text-gray-500 max-w-xs">
        Solusi digital terpercaya untuk potensi komoditas bahari Indonesia.
      </p>
    </div>
  );
}

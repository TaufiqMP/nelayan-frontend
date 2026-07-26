"use client";

export default function AppVersionFooter({ appInfo }) {
  return (
    <div className="text-center">
      <p className="text-sm text-gray-500">Versi Aplikasi {appInfo.versi}</p>
      <p className="text-sm text-gray-300">{appInfo.copyright}</p>
    </div>
  );
}

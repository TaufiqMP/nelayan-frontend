import { AnchorIcon, BellIcon } from "./icons";

export default function AppHeader({ hasNotification = true }) {
  return (
    <header className="flex items-center justify-between px-5 py-4 bg-slate-50 border-b border-slate-200">
      <div className="flex items-center gap-2">
        <AnchorIcon className="w-7 h-7 text-blue-700" />
        <h1 className="text-2xl font-extrabold tracking-tight text-blue-700">
          Pasar Bahari
        </h1>
      </div>

      <button
        type="button"
        aria-label="Notifikasi"
        className="relative p-1 text-slate-800 hover:text-blue-700 transition-colors"
      >
        <BellIcon />
        {hasNotification && (
          <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-red-500 rounded-full" />
        )}
      </button>
    </header>
  );
}

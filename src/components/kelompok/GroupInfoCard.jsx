import { SailboatIcon } from "./icons";

export default function GroupInfoCard({ group }) {
  if (!group) return null;

  const isActive = group.status === "AKTIF";

  return (
    <section className="px-5 pt-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-extrabold text-slate-900">Info Kelompok</h2>
        <span
          className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
            isActive ? "bg-emerald-100 text-emerald-700" : "bg-slate-200 text-slate-600"
          }`}
        >
          {group.status}
        </span>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 shrink-0 rounded-2xl bg-blue-600 flex items-center justify-center">
            <SailboatIcon className="w-8 h-8 text-white" />
          </div>
          <div className="min-w-0">
            <h3 className="text-xl font-extrabold text-blue-700 truncate">{group.name}</h3>
            <p className="text-slate-700 font-medium mt-0.5">
              Komoditas Utama {group.mainCommodity}
            </p>
            <p className="text-slate-400 text-sm mt-0.5">Kapasitas {group.capacity} Orang</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-5">
          <div className="bg-slate-100 rounded-xl p-4">
            <p className="text-slate-500 text-sm">Ketua Kelompok</p>
            <p className="text-slate-900 font-bold text-lg mt-1 truncate">{group.leaderName}</p>
          </div>
          <div className="bg-slate-100 rounded-xl p-4">
            <p className="text-slate-500 text-sm">Anggota</p>
            <p className="text-slate-900 font-bold text-lg mt-1">{group.memberCount} Orang</p>
          </div>
        </div>
      </div>
    </section>
  );
}

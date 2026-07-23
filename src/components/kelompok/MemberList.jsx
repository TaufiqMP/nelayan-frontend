import Link from "next/link";
import MemberItem from "./MemberItem";
import { ChevronRightIcon } from "./icons";

const PREVIEW_COUNT = 2;

export default function MemberList({ members = [] }) {
  const preview = members.slice(0, PREVIEW_COUNT);

  return (
    <section className="px-5 pt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-extrabold text-slate-900">Daftar Anggota</h2>
        {/* Dummy link — halaman "Semua Anggota" belum dibuat, backend on progress */}
        <Link
          href="#"
          className="flex items-center gap-1 text-blue-700 font-semibold hover:underline"
        >
          Lihat Semua
          <ChevronRightIcon />
        </Link>
      </div>

      <div className="flex flex-col gap-3">
        {preview.length === 0 && (
          <p className="text-slate-400 text-sm">Belum ada anggota di kelompok ini.</p>
        )}
        {preview.map((member) => (
          <MemberItem key={member.id} member={member} isLeader={member.role === "Ketua"} />
        ))}
      </div>
    </section>
  );
}

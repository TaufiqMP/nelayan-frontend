"use client";

import { SelectInput } from "@/components/kelompok/FormElements";
import { KEPEMILIKAN_KAPAL_OPTIONS } from "@/lib/mockData/kelompok";

/**
 * Step 1 dari alur setup kelompok: nelayan memilih apakah dia punya kapal.
 * Pilihan ini menentukan apakah ditampilkan CreateGroupForm (punya kapal)
 * atau JoinGroupForm (tidak punya kapal) berikutnya.
 */
export default function OwnershipStatusForm({ value, onChange }) {
  return (
    <div>
      <SelectInput
        label="Status Kepemilikan Kapal"
        placeholder="Pilih Status Kepemilikan"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        options={KEPEMILIKAN_KAPAL_OPTIONS}
        hint="Status ini menentukan apakah Anda akan memimpin kelompok baru atau bergabung dengan yang sudah ada."
      />
    </div>
  );
}

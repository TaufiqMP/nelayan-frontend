"use client";

export default function GradeToggle({ value, onChange }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {["A", "B", "C"].map((grade) => (
        <button
          key={grade}
          type="button"
          onClick={() => onChange(grade)}
          className={`rounded-lg border py-3 text-lg font-bold transition ${
            value === grade
              ? "border-blue-600 bg-white text-blue-700 shadow-sm ring-1 ring-blue-600"
              : "border-gray-200 bg-gray-50 text-gray-500"
          }`}
        >
          {grade}
        </button>
      ))}
    </div>
  );
}

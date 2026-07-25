"use client";

export function FieldLabel({ children }) {
  return (
    <label className="block text-sm font-medium text-gray-800 mb-1.5">
      {children}
    </label>
  );
}

export function FieldError({ message }) {
  if (!message) return null;
  return <p className="text-sm text-red-600 mt-1">{message}</p>;
}

export function TextInput({ label, error, hint, ...props }) {
  return (
    <div>
      {label && <FieldLabel>{label}</FieldLabel>}
      <input
        {...props}
        className={`w-full rounded-lg border px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          error ? "border-red-400" : "border-gray-300"
        } ${props.className || ""}`}
      />
      {hint && !error && <p className="text-xs text-gray-500 mt-1 italic">{hint}</p>}
      <FieldError message={error} />
    </div>
  );
}

export function TextArea({ label, error, ...props }) {
  return (
    <div>
      {label && <FieldLabel>{label}</FieldLabel>}
      <textarea
        {...props}
        className={`w-full rounded-lg border px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px] resize-none ${
          error ? "border-red-400" : "border-gray-300"
        } ${props.className || ""}`}
      />
      <FieldError message={error} />
    </div>
  );
}

export function SelectInput({ label, error, hint, options, placeholder, ...props }) {
  return (
    <div>
      {label && <FieldLabel>{label}</FieldLabel>}
      <div className="relative">
        <select
          {...props}
          className={`w-full appearance-none rounded-lg border bg-white px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            error ? "border-red-400" : "border-gray-300"
          } ${props.className || ""}`}
        >
          <option value="">{placeholder || "Pilih..."}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
          ▾
        </span>
      </div>
      {hint && !error && <p className="text-xs text-gray-500 mt-1">{hint}</p>}
      <FieldError message={error} />
    </div>
  );
}

export function PrimaryButton({ children, icon, loading, ...props }) {
  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={`w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed ${
        props.className || ""
      }`}
    >
      {icon}
      {loading ? "Memproses..." : children}
    </button>
  );
}

export function SectionLabel({ children, badge }) {
  return (
    <div className="flex items-center justify-between mb-3">
      <h2 className="text-sm font-bold tracking-wide text-blue-700 uppercase">
        {children}
      </h2>
      {badge && (
        <span className="text-xs font-medium text-gray-600 bg-gray-100 rounded-full px-2.5 py-1">
          {badge}
        </span>
      )}
    </div>
  );
}

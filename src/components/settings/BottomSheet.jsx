"use client";

export default function BottomSheet({ children, onClose, showCloseButton = false }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div
        className="absolute inset-0 bg-black/40 mx-auto"
        style={{ maxWidth: "430px" }}
        onClick={onClose}
      />
      <div
        className="relative w-full rounded-t-2xl bg-white px-5 pt-3 pb-6 max-h-[90vh] overflow-y-auto"
        style={{ maxWidth: "430px" }}
      >
        <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-gray-300" />
        {showCloseButton && (
          <button
            onClick={onClose}
            aria-label="Tutup"
            className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500"
          >
            ✕
          </button>
        )}
        {children}
      </div>
    </div>
  );
}

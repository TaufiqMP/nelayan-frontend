"use client";

export default function WaveDecoration() {
  return (
    <div aria-hidden className="mt-8">
      <svg viewBox="0 0 430 60" className="w-full" preserveAspectRatio="none">
        <path
          d="M0 30 C 70 60, 145 0, 215 30 C 285 60, 360 0, 430 30 L 430 60 L 0 60 Z"
          className="fill-blue-300"
        />
      </svg>
    </div>
  );
}

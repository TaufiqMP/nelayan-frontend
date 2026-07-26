"use client";

export default function WeatherCards({ cuaca }) {
  const items = [
    { icon: "🌡️", label: "Suhu", value: `${cuaca.suhuCelsius}°C` },
    { icon: "💨", label: "Angin", value: `${cuaca.anginKnot} knot` },
    { icon: "☀️", label: "Cuaca", value: cuaca.kondisi },
  ];

  return (
    <div className="grid grid-cols-3 gap-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center gap-1 rounded-xl bg-white border border-gray-200 py-4"
        >
          <span aria-hidden className="text-xl">
            {item.icon}
          </span>
          <p className="text-sm text-gray-500">{item.label}</p>
          <p className="font-semibold text-gray-900">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

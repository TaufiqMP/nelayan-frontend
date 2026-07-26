"use client";

import { useState } from "react";

export default function FaqAccordion({ faq }) {
  const [terbukaId, setTerbukaId] = useState(null);

  return (
    <section>
      <h2 className="font-bold text-gray-900 mb-3">Pertanyaan Umum (FAQ)</h2>

      <div className="space-y-3">
        {faq.map((item) => {
          const terbuka = terbukaId === item.id;
          return (
            <div key={item.id} className="rounded-xl bg-white border border-gray-200 p-4">
              <button
                onClick={() => setTerbukaId(terbuka ? null : item.id)}
                className="w-full flex items-start justify-between gap-3 text-left"
              >
                <p className="font-medium text-gray-900">{item.pertanyaan}</p>
                <span
                  aria-hidden
                  className={`flex-shrink-0 text-gray-400 transition-transform ${
                    terbuka ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>
              {terbuka && <p className="mt-2 text-sm text-gray-500">{item.jawaban}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}

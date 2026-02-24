"use client";

import { useState } from "react";
import PromoCard from "./PromoCard";
import type { Promo } from "@/app/types";

const PROMOS: Promo[] = [
  {
    title: "Looking for Specialist Doctors?",
    description: "Schedule an appointment with our top doctors.",
    bgImage: "images/doctor_image_3.jpg",
  },
  {
    title: "Looking for Specialist Doctors?",
    description: "Schedule an appointment with our top doctors.",
    bgImage: "images/doctor_image_2.jpg",
  },
];

export default function PromoSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = PROMOS[activeIndex];

  return (
    <section className="bg-white">
      {/* ── MOBILE ── */}
      <div className="md:hidden px-4 py-5">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Promo Menarik</h2>

        <div
          className="relative w-full rounded-2xl overflow-hidden text-white"
          style={{
            backgroundImage: `url(${active.bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "160px",
          }}
        >
          <div className="absolute inset-0 bg-black/40 rounded-2xl" />
          <div className="relative p-5">
            <h3 className="text-lg font-bold mb-1 leading-snug max-w-[200px]">
              {active.title}
            </h3>
            <p className="text-sm opacity-90 max-w-[180px]">{active.description}</p>
          </div>
        </div>

        <div className="flex justify-center space-x-1.5 mt-3">
          {PROMOS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`rounded-full transition-all ${
                i === activeIndex ? "w-4 h-2 bg-teal-500" : "w-2 h-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden md:block py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-neutral-900 mb-2">
              Promo <span className="text-brand">Menarik</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PROMOS.map((promo) => (
              <PromoCard key={promo.bgImage} promo={promo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

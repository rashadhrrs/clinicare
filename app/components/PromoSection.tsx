"use client";

import { useState } from "react";

export default function PromoSection() {
  const promos = [
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

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white">
      {/* ── MOBILE promo ── */}
      <div className="md:hidden px-4 py-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">Promo Menarik</h2>
        </div>

        {/* Card with image background */}
        <div
          className="relative w-full rounded-2xl overflow-hidden text-white"
          style={{
            backgroundImage: `url(${promos[activeIndex].bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "160px",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40 rounded-2xl" />
          <div className="relative p-5">
            <h3 className="text-lg font-bold mb-1 leading-snug max-w-[200px]">
              {promos[activeIndex].title}
            </h3>
            <p className="text-sm opacity-90 max-w-[180px]">
              {promos[activeIndex].description}
            </p>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center space-x-1.5 mt-3">
          {promos.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`rounded-full transition-all ${
                i === activeIndex
                  ? "w-4 h-2 bg-teal-500"
                  : "w-2 h-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── DESKTOP promo ── */}
      <div className="hidden md:block py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-neutral-900 mb-2">
              Promo <span className="text-brand">Menarik</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {promos.map((promo, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl text-white"
                style={{ backgroundImage: `url(${promo.bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
              >
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative p-8 md:p-12 max-w-96">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {promo.title}
                  </h3>
                  <p className="text-lg opacity-90 mb-6 max-w-xs">
                    {promo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

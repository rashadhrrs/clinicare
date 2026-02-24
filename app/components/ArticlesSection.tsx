"use client";

import { useState } from "react";
import ArticleCard from "./ArticleCard";
import type { Article } from "@/app/types";

const CATEGORIES = ["Semua", "Self Care", "Mata", "Gigi", "THT", "Beauty"];

const ARTICLES: Article[] = [
  {
    title: "Looking for Specialist Doctors?",
    description: "Schedule an appointment with our top doctors.",
    category: "Self Care",
    date: "2 hari yang lalu",
    image: "/images/doctor_image_3.jpg",
  },
  {
    title: "Pentingnya Pemeriksaan Gigi Rutin",
    description: "Jaga kesehatan gigi Anda dengan pemeriksaan rutin.",
    category: "Gigi",
    date: "3 hari yang lalu",
    image: "/images/hospital_main.jpg",
  },
];

export default function ArticlesSection() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filtered =
    activeCategory === "Semua"
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === activeCategory);

  return (
    <section className="md:hidden bg-gray-50 py-5">
      <div className="px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">Artikel</h2>
          <a href="#" className="text-teal-500 text-sm font-medium">
            Lihat semua
          </a>
        </div>

        <div className="flex space-x-2 mb-4 overflow-x-auto pb-1">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                activeCategory === category
                  ? "bg-teal-500 text-white"
                  : "bg-white text-gray-600 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filtered.map((article) => (
            <ArticleCard key={article.title} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
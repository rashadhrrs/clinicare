'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ArticlesSection() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  
  const categories = ['Semua', 'Self Care', 'Mata', 'Gigi', 'THT', 'Beauty'];
  
  const articles = [
    {
      title: 'Looking for Specialist Doctors?',
      description: 'Schedule an appointment with our top doctors.',
      category: 'Self Care',
      date: '2 hari yang lalu',
      image: '/images/doctor_image_3.jpg',
    },
    {
      title: 'Pentingnya Pemeriksaan Gigi Rutin',
      category: 'Gigi',
      date: '3 hari yang lalu',
      description: 'Jaga kesehatan gigi Anda dengan pemeriksaan rutin.',
      image: '/images/hospital_main.jpg',
    },
  ];

  return (
    <section className="md:hidden bg-gray-50 py-5">
      <div className="px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">Artikel</h2>
          <a href="#" className="text-teal-500 text-sm font-medium">
            Lihat semua
          </a>
        </div>

        {/* Category Filter */}
        <div className="flex space-x-2 mb-4 overflow-x-auto pb-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-teal-500 text-white'
                  : 'bg-white text-gray-600 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles */}
        <div className="space-y-4">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="relative w-full h-36">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                {/* Text overlay */}
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
                  <h3 className="font-bold text-white text-sm leading-snug mb-1">
                    {article.title}
                  </h3>
                  <p className="text-white text-xs opacity-90 line-clamp-2">
                    {article.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
'use client';

import { useState } from 'react';
import PlaceholderImage from './ui/PlaceholderImage';

export default function ArticlesSection() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  
  const categories = ['Semua', 'Self Care', 'Mata', 'Gigi', 'THT', 'Beauty'];
  
  const articles = [
    {
      title: 'Tips Menjaga Kesehatan Mata di Era Digital',
      category: 'Mata',
      date: '2 hari yang lalu'
    },
    {
      title: 'Pentingnya Pemeriksaan Gigi Rutin',
      category: 'Gigi',
      date: '3 hari yang lalu'
    }
  ];

  return (
    <section className="md:hidden bg-gray-50 py-6">
      <div className="px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Artikel</h2>
          <a href="#" className="text-teal-500 text-sm font-medium">
            Lihat semua
          </a>
        </div>

        {/* Category Filter */}
        <div className="flex space-x-2 mb-4 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-teal-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles */}
        <div className="space-y-4">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <PlaceholderImage
                width={300}
                height={128}
                alt={article.title}
                className="w-full h-32"
                backgroundColor="bg-gray-100"
                textColor="text-gray-500"
                text="📄"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 text-sm mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{article.category}</span>
                  <span>{article.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
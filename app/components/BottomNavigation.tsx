'use client';

import { useState } from 'react';

export default function BottomNavigation() {
  const [activeTab, setActiveTab] = useState('Beranda');

  const navItems = [
    {
      name: 'Beranda',
      icon: (active: boolean) => (
        <svg className={`w-5 h-5 ${active ? 'text-teal-500' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      )
    },
    {
      name: 'Booking',
      icon: (active: boolean) => (
        <svg className={`w-5 h-5 ${active ? 'text-teal-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: 'Pesan',
      icon: (active: boolean) => (
        <svg className={`w-5 h-5 ${active ? 'text-teal-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      name: 'Profil',
      icon: (active: boolean) => (
        <svg className={`w-5 h-5 ${active ? 'text-teal-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    }
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveTab(item.name)}
            className="flex-1 py-2 px-1"
          >
            <div className="flex flex-col items-center space-y-1">
              {item.icon(activeTab === item.name)}
              <span className={`text-xs ${
                activeTab === item.name ? 'text-teal-500 font-medium' : 'text-gray-400'
              }`}>
                {item.name}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
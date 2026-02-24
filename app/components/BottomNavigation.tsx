"use client";

import { useState } from "react";
import { Home, Calendar, MessageCircle, User } from "lucide-react";

const NAV_ITEMS = [
  { name: "Beranda", Icon: Home },
  { name: "Booking", Icon: Calendar },
  { name: "Pesan", Icon: MessageCircle },
  { name: "Profil", Icon: User },
] as const;

type NavName = (typeof NAV_ITEMS)[number]["name"];

export default function BottomNavigation() {
  const [activeTab, setActiveTab] = useState<NavName>("Beranda");

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex">
        {NAV_ITEMS.map(({ name, Icon }) => {
          const isActive = activeTab === name;
          return (
            <button
              key={name}
              onClick={() => setActiveTab(name)}
              className="flex-1 py-2 px-1"
            >
              <div className="flex flex-col items-center space-y-1">
                <Icon
                  className={`w-5 h-5 ${isActive ? "text-teal-500" : "text-gray-400"}`}
                />
                <span
                  className={`text-xs ${isActive ? "text-teal-500 font-medium" : "text-gray-400"}`}
                >
                  {name}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
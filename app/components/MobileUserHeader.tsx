import Image from "next/image";
import { LogoMobile } from "./ui/LogoMobile";

export default function MobileUserHeader() {
  return (
    <div className="md:hidden bg-gradient-to-r from-teal-500 to-teal-600 text-white">
      {/* Top bar: Logo + Bell */}
      <div className="flex items-center justify-between px-4 pt-5 pb-3">
        <LogoMobile />

        <button className="w-8 h-8 flex items-center justify-center relative">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-400 rounded-full"></span>
        </button>
      </div>

      {/* User Info */}
      <div className="flex items-center space-x-3 px-4 pb-5">
        <Image
          width={46}
          height={46}
          alt="Dita Nirmala"
          className="rounded-full border-2 border-white shrink-0"
          src="https://i.pravatar.cc/150?img=60"
        />
        <div>
          <div className="font-semibold text-white text-sm leading-tight">
            Alex Gaskarth
          </div>
          <div className="text-xs text-teal-100 flex items-center mt-1">
            <svg
              className="w-3 h-3 mr-1 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            Kebayoran Baru
          </div>
        </div>
      </div>
    </div>
  );
}

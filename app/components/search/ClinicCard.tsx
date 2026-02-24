import Image from "next/image";
import { MapPin, StarIcon } from "lucide-react";
import type { Clinic } from "@/app/types";

interface DesktopClinicCardProps {
  clinic: Clinic;
  onClick: () => void;
}

export function DesktopClinicCard({ clinic, onClick }: DesktopClinicCardProps) {
  return (
    <div
      onClick={onClick}
      className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-teal-500 hover:shadow-md transition-all cursor-pointer"
    >
      <div className="shrink-0">
        <Image
          width={109}
          height={109}
          alt={clinic.name}
          className="rounded-lg"
          src="/images/hospital_main.jpg"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-gray-800 truncate">{clinic.name}</h4>
        <div className="border border-gray-200 my-2" />
        <p className="text-sm text-gray-600 font-semibold mb-1">{clinic.type}</p>
        <div className="flex items-center text-xs text-gray-400 mb-2">
          <MapPin className="w-3 h-3 mr-1" />
          <span className="truncate text-[#4B5563] text-xs">{clinic.address}</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <StarIcon className="w-3.5 h-3.5 fill-[#FEB052] text-[#FEB052]" />
            <span className="text-xs text-gray-500 ml-1">{clinic.rating}</span>
          </div>
          <span className="text-gray-200">|</span>
          <span className="text-xs text-gray-500">{clinic.totalReviews} Reviews</span>
        </div>
      </div>
    </div>
  );
}

interface MobileClinicCardProps {
  clinic: Clinic;
  onClick: () => void;
}

export function MobileClinicCard({ clinic, onClick }: MobileClinicCardProps) {
  return (
    <div
      onClick={onClick}
      className="flex items-center space-x-3 p-3 bg-white border border-gray-200 rounded-xl cursor-pointer hover:border-teal-400 transition-colors"
    >
      <Image
        width={60}
        height={60}
        alt={clinic.name}
        className="rounded-lg object-cover shrink-0"
        src="/images/hospital_main.jpg"
      />
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-gray-800 text-sm truncate">{clinic.name}</h4>
        <p className="text-xs text-gray-500 truncate">{clinic.address}</p>
        <div className="flex items-center mt-1 space-x-1">
          <StarIcon className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs text-gray-600">{clinic.rating}</span>
          <span className="text-xs text-gray-400">({clinic.totalReviews})</span>
        </div>
      </div>
    </div>
  );
}

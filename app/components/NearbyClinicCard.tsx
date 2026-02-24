import Image from "next/image";
import { MapPin, BookOpen } from "lucide-react";
import type { NearbyClinic } from "@/app/types";

interface NearbyClinicCardProps {
  clinic: NearbyClinic;
}

export default function NearbyClinicCard({ clinic }: NearbyClinicCardProps) {
  return (
    <div className="shrink-0 w-44 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="relative w-full h-28">
        <Image
          src={clinic.image}
          alt={clinic.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-3">
        <h3 className="font-semibold text-gray-800 text-xs mb-1 line-clamp-2 leading-tight">
          {clinic.name}
        </h3>

        <div className="flex items-start text-xs text-gray-400 mb-1.5">
          <MapPin className="w-3 h-3 mr-1 mt-0.5 shrink-0" />
          <span className="line-clamp-2">{clinic.address}</span>
        </div>

        <div className="flex items-center space-x-1 mb-1.5">
          <span className="text-yellow-400 text-xs">★</span>
          <span className="text-xs font-semibold text-gray-700">{clinic.rating}</span>
          <span className="text-xs text-gray-400">({clinic.reviews} Reviews)</span>
        </div>

        <div className="flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center space-x-0.5">
            <MapPin className="w-3 h-3" />
            <span>
              {clinic.distance}/{clinic.time}
            </span>
          </div>
          <div className="flex items-center space-x-0.5">
            <BookOpen className="w-3 h-3" />
            <span>{clinic.type}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

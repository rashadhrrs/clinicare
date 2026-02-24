import NearbyClinicCard from "./NearbyClinicCard";
import type { NearbyClinic } from "@/app/types";

const NEARBY_CLINICS: NearbyClinic[] = [
  {
    name: "Mayapada Hospital Kuningan",
    address: "Jl. H. R. Rasuna Said No.Kav C-17",
    rating: 5.0,
    reviews: 58,
    distance: "2.5 km",
    time: "40min",
    type: "Rumah Sakit",
    image: "/images/hospital_detail.jpg",
  },
  {
    name: "Klinik Tanah Kusir",
    address: "Jl. Tanah Kusir II No.12",
    rating: 4.9,
    reviews: 108,
    distance: "2.5 km",
    time: "40min",
    type: "Klinik",
    image: "/images/hospital_detail.jpg",
  },
];

export default function NearbyClinicsSection() {
  return (
    <section className="md:hidden bg-white py-5">
      <div className="px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">Klinik Terdekat</h2>
          <a href="#" className="text-teal-500 text-sm font-medium">
            Lihat semua
          </a>
        </div>

        <div className="flex space-x-3 overflow-x-auto pb-2">
          {NEARBY_CLINICS.map((clinic) => (
            <NearbyClinicCard key={clinic.name} clinic={clinic} />
          ))}
        </div>
      </div>
    </section>
  );
}

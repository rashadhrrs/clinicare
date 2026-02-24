import Image from 'next/image';

export default function NearbyClinicsSection() {
  const clinics = [
    {
      name: 'Mayapada Hospital Kuningan',
      address: 'Jl. H. R. Rasuna Said No.Kav C-17',
      rating: 5.0,
      reviews: 58,
      distance: '2.5 km',
      time: '40min',
      type: 'Rumah Sakit',
      image: '/images/hospital_main.jpg',
    },
    {
      name: 'Klinik Tanah Kusir',
      address: 'Jl. Tanah Kusir II No.12',
      rating: 4.9,
      reviews: 108,
      distance: '2.5 km',
      time: '40min',
      type: 'Klinik',
      image: '/images/hospital_room.jpg',
    },
  ];

  return (
    <section className="md:hidden bg-white py-5">
      <div className="px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">Klinik Terdekat</h2>
          <a href="#" className="text-teal-500 text-sm font-medium">
            Lihat semua
          </a>
        </div>

        {/* Horizontal scroll clinic cards */}
        <div className="flex space-x-3 overflow-x-auto pb-2">
          {clinics.map((clinic, index) => (
            <div
              key={index}
              className="shrink-0 w-44 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              {/* Clinic image */}
              <div className="relative w-full h-28">
                <Image
                  src={clinic.image}
                  alt={clinic.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="p-3">
                <h3 className="font-semibold text-gray-800 text-xs mb-1 line-clamp-2 leading-tight">
                  {clinic.name}
                </h3>

                <div className="flex items-start text-xs text-gray-400 mb-1.5">
                  <svg className="w-3 h-3 mr-1 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="line-clamp-2">{clinic.address}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-1.5">
                  <span className="text-yellow-400 text-xs">★</span>
                  <span className="text-xs font-semibold text-gray-700">{clinic.rating}</span>
                  <span className="text-xs text-gray-400">({clinic.reviews} Reviews)</span>
                </div>

                {/* Distance + Type */}
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center space-x-0.5">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <span>{clinic.distance}/{clinic.time}</span>
                  </div>
                  <div className="flex items-center space-x-0.5">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    <span>{clinic.type}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

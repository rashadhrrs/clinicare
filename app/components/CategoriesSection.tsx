import Image from "next/image";

export default function CategoriesSection() {
  const categories = [
    { name: "Umum", icon: "hospital.svg" },
    { name: "Mata", icon: "eye.svg" },
    { name: "Gigi", icon: "teeth.svg" },
    { name: "Fisioterapi", icon: "physiotherapist.svg" },
    { name: "THT", icon: "ear.svg" },
    { name: "Umum", icon: "hospital.svg" },
    { name: "Mata", icon: "eye.svg" },
    { name: "Gigi", icon: "teeth.svg" },
  ];

  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-neutral-900 mb-2">
            Kategori <span className="text-brand">Klinik</span>
          </h2>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-4 lg:grid-cols-8 gap-6">
          {categories.map((category, index) => (
            <div
              key={`${category.name}-${index}`}
              className="group bg-white rounded-2xl text-center"
            >
              <div className="w-27 h-27 bg-[#D6F2F2] rounded-full flex items-center justify-center mx-auto mb-4">
                <Image
                  src={category.icon}
                  alt={category.name}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <h3 className="font-medium text-[#2AA996]">{category.name}</h3>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden">
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {categories.slice(0, 5).map((category, index) => (
              <div
                key={`${category.name}-mobile-${index}`}
                className="shrink-0 bg-white rounded-2xl p-4 text-center shadow-sm"
              >
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Image
                    src={category.icon}
                    alt={category.name}
                    width={5}
                    height={5}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xs font-medium text-gray-700 whitespace-nowrap">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

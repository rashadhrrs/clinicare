import Button from "./ui/Button";

export default function PromoSection() {
  const promos = [
    {
      title: "Looking for Specialist Doctors?",
      description: "Schedule an appointment with our top doctors.",
      bgImage: "images/doctor_image_3.jpg",
    },
    {
      title: "Looking for Specialist Doctors?",
      description: "Schedule an appointment with our top doctors.",
      bgImage: "images/doctor_image_2.jpg",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-neutral-900 mb-2">
            Promo <span className="text-brand">Menarik</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {promos.map((promo, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl bg-linear-to-r text-white`}
              style={{ backgroundImage: `url(${promo.bgImage})` }}
            >
              <div className="relative p-8 md:p-12 max-w-96">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {promo.title}
                </h3>
                <p className="text-lg opacity-90 mb-6 max-w-xs">
                  {promo.description}
                </p>
              </div>

              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="40" fill="currentColor" />
                  <circle cx="30" cy="30" r="20" fill="currentColor" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

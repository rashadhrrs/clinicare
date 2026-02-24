import type { Promo } from "@/app/types";

interface PromoCardProps {
  promo: Promo;
  className?: string;
}

export default function PromoCard({ promo, className = "" }: PromoCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl text-white ${className}`}
      style={{
        backgroundImage: `url(${promo.bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative p-8 md:p-12 max-w-96">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{promo.title}</h3>
        <p className="text-lg opacity-90 mb-6 max-w-xs">{promo.description}</p>
      </div>
    </div>
  );
}

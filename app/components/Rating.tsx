import { Star } from "lucide-react";

type RatingProps = {
  value: number;
  max?: number;
  className?: string;
};

export function Rating({ value, max = 5, className }: RatingProps) {
  const fullStars = Math.floor(value);
  const decimal = value - fullStars;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex">
        {Array.from({ length: max }).map((_, index) => {
          if (index < fullStars) {
            return (
              <div key={index} className="relative w-5 h-5">
                <Star className="absolute w-5 h-5 text-[#F3FBC6]" />
                <div className="absolute overflow-hidden">
                  <Star className="w-5 h-5 fill-[#F9D800] text-[#F9D800]" />
                </div>
              </div>
            );
          }

          if (index === fullStars && decimal > 0) {
            return (
              <div key={index} className="relative w-5 h-5">
                <Star className="absolute w-5 h-5 text-[#F3FBC6]" />
                <div
                  className="absolute overflow-hidden"
                  style={{ width: `${decimal * 100}%` }}
                >
                  <Star className="w-5 h-5 fill-[#F9D800] text-[#F9D800]" />
                </div>
              </div>
            );
          }

          return <Star key={index} className="w-5 h-5 text-[#F3FBC6]" />;
        })}
      </div>

      <span className="text-neutral-500 font-bold text-xs">
        ({value} Stars)
      </span>
    </div>
  );
}

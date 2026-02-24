import Avatar from "@/app/components/ui/Avatar";
import { Rating } from "@/app/components/Rating";

const AVATARS = [
  { src: "https://i.pravatar.cc/150?img=60", alt: "Profile 1" },
  { src: "https://i.pravatar.cc/150?img=10", alt: "Profile 2" },
  { src: "https://i.pravatar.cc/150?img=30", alt: "Profile 3" },
  { src: "https://i.pravatar.cc/150?img=35", alt: "Profile 4" },
];

export default function FloatingRatingCard() {
  return (
    <div className="absolute bottom-40 left-105 bg-white rounded-lg p-3 shadow-lg border">
      <div className="flex items-center gap-2 mb-1">
        <div className="flex -space-x-1">
          {AVATARS.map((avatar) => (
            <Avatar
              key={avatar.alt}
              width={37.46}
              height={37.46}
              alt={avatar.alt}
              className="rounded-full"
              backgroundColor="bg-teal-100"
              textColor="text-teal-600"
              src={avatar.src}
            />
          ))}
        </div>
        <span className="text-xl font-bold text-neutral-900 flex items-center">
          1400
          <span className="text-brand text-xl">+</span>
        </span>
      </div>
      <div className="text-brand font-bold py-1">Happy Customers</div>
      <Rating value={4.5} />
    </div>
  );
}

import Button from "./ui/Button";
import { ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import FloatingRatingCard from "./hero/FloatingRatingCard";

export default function HeroSection() {
  return (
    <section className="hidden md:block bg-linear-to-br from-teal-50 to-emerald-50">
      <div className="px-24">
        <div className="flex flex-col lg:flex-row items-center min-h-150 py-12 lg:py-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0 lg:pr-12">
            <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold text-[#383A3A] leading-tight mb-6">
              <span className="text-brand">Partner Kepercayaan</span>
              <br />
              Anda dalam Mencari
              <br />
              Klinik Kesehatan
            </h1>

            <p className="text-lg text-[#454545] mb-8 max-w-lg mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae
              lectus elit. Integer imperdiet sem ac nisl ultrices semper non eu
              dolor. Aliquam ut porttitor dui, eget congue eros. Duis iaculis
              purus et mauris rhoncus, et finibus diam pellentesque.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" variant="gradient" className="px-8 py-4.5">
                <span className="text-2xl font-bold text-white flex items-center gap-1.5">
                  Book an appointment <ChevronRight strokeWidth={3} />
                </span>
              </Button>
            </div>
          </div>

          {/* Right Content - Doctor Image */}
          <div className="flex-1 relative">
            <div className="relative">
              <Image
                src="/images/doctor_image.jpg"
                alt="Doctor"
                width={618}
                height={503}
              />

              <div className="absolute bottom-10 -left-10 bg-white rounded-lg py-2 px-6 shadow-lg border">
                <div className="text-brand font-bold flex items-center gap-2">
                  <div className="rounded-full bg-[#EFF9FF] p-2">
                    <Star className="w-4 h-4 fill-[#357A7B]" />
                  </div>
                  Mudah untuk buat janji
                </div>
              </div>

              <FloatingRatingCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import PlaceholderImage from "./ui/PlaceholderImage";
import Button from "./ui/Button";
import { ChevronRight, Plus, Star } from "lucide-react";
import Image from "next/image";
import Avatar from "./ui/Avatar";
import { Rating } from "./Rating";

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

            {/* Trust Badge */}
            {/* <div className="flex items-center gap-4 justify-center lg:justify-start">
              <div className="flex items-center bg-white rounded-lg p-4 shadow-sm border">
                <div className="flex -space-x-2 mr-3">
                  <PlaceholderImage
                    width={32}
                    height={32}
                    alt="Customer 1"
                    className="rounded-full border-2 border-white"
                    backgroundColor="bg-blue-200"
                    text="👤"
                  />
                  <PlaceholderImage
                    width={32}
                    height={32}
                    alt="Customer 2"
                    className="rounded-full border-2 border-white"
                    backgroundColor="bg-green-200"
                    text="👤"
                  />
                  <PlaceholderImage
                    width={32}
                    height={32}
                    alt="Customer 3"
                    className="rounded-full border-2 border-white"
                    backgroundColor="bg-purple-200"
                    text="👤"
                  />
                  <div className="w-8 h-8 bg-teal-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                    +
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-800">1400+</div>
                  <div className="text-xs text-gray-500">Happy Customers</div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm border">
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                  <span className="text-sm font-bold text-gray-800">4.7</span>
                </div>
                <div className="text-xs text-gray-500">(67 Reviews)</div>
              </div>
            </div> */}

            {/* Easy Appointment Badge */}
            {/* <div className="mt-6 flex items-center gap-2 justify-center lg:justify-start">
              <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">★</span>
              </div>
              <span className="text-sm text-gray-600">
                Mudah untuk buat janji
              </span>
            </div> */}
          </div>

          {/* Right Content - Doctor Image */}
          <div className="flex-1 relative">
            <div className="relative">
              {/* <PlaceholderImage
                width={400}
                height={500}
                alt="Professional Doctor"
                className="rounded-2xl shadow-2xl"
                backgroundColor="bg-gradient-to-br from-teal-100 to-teal-200"
                textColor="text-teal-600"
                text="👨‍⚕️ Doctor"
              /> */}
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

              {/* Floating Rating Card */}
              <div className="absolute bottom-40 left-105 bg-white rounded-lg p-3 shadow-lg border">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex -space-x-1">
                    <Avatar
                      width={37.46}
                      height={37.46}
                      alt="Profile"
                      className="rounded-full"
                      backgroundColor="bg-teal-100"
                      textColor="text-teal-600"
                      src="https://i.pravatar.cc/150?img=60"
                    />
                    <Avatar
                      width={37.46}
                      height={37.46}
                      alt="Profile"
                      className="rounded-full"
                      backgroundColor="bg-teal-100"
                      textColor="text-teal-600"
                      src="https://i.pravatar.cc/150?img=10"
                    />
                    <Avatar
                      width={37.46}
                      height={37.46}
                      alt="Profile"
                      className="rounded-full"
                      backgroundColor="bg-teal-100"
                      textColor="text-teal-600"
                      src="https://i.pravatar.cc/150?img=30"
                    />
                    <Avatar
                      width={37.46}
                      height={37.46}
                      alt="Profile"
                      className="rounded-full"
                      backgroundColor="bg-teal-100"
                      textColor="text-teal-600"
                      src="https://i.pravatar.cc/150?img=35"
                    />
                  </div>
                  <span className="text-xl font-bold text-neutral-900 flex items-center">
                    1400
                    <span className="text-brand text-xl">+</span>
                  </span>
                </div>
                <div className="text-brand font-bold py-1">Happy Customers</div>
                <Rating value={4.5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

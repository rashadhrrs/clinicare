"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  MapPin,
  Star,
  ChevronLeft,
  ChevronRight,
  Heart,
  Share2,
  Phone,
  Clock,
} from "lucide-react";
import axios from "axios";
import Header from "../../components/Header";
import Button from "../../components/ui/Button";
import PlaceholderImage from "../../components/ui/PlaceholderImage";
import Image from "next/image";
import { iconMap } from "@/app/components/hooks/IconMap";
import Link from "next/link";

interface Specialist {
  id: number;
  name: string;
  specialization: string;
  rating: number;
  totalReviews: number;
  image: string;
}

interface Review {
  id: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

interface Facility {
  name: string;
  icon: string;
}

interface Clinic {
  id: number;
  name: string;
  type: string;
  address: string;
  rating: number;
  totalReviews: number;
  images: string[];
  tabs: string[];
  specialists: Specialist[];
  facilities: Facility[];
  reviews: Review[];
}

export default function ClinicDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [clinic, setClinic] = useState<Clinic | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClinicDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:3002/api/clinics/${params.id}`,
        );
        setClinic(response.data);
      } catch (error) {
        console.error("Error fetching clinic details:", error);
        setClinic(null);
      } finally {
        setLoading(false);
      }
    };

    fetchClinicDetails();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  if (!clinic) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Klinik tidak ditemukan
          </h1>
          <Button onClick={() => router.back()}>Kembali</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Main Header */}
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <Link
            href="/"
            className="text-gray-600 hover:text-brand transition-colors"
          >
            Beranda
          </Link>{" "}
          <ChevronRight className="w-4 h-4" />
          <span>Klinik</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-800 font-medium">Klinik Mayapada</span>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 gap-4 mb-6 max-w-291.5 max-h-108">
          {/* Large Image - Left Side */}
          <div className="col-span-1">
            <Image
              width={577}
              height={432}
              alt={`${clinic.name} main`}
              className="max-w-144.25 max-h-108 rounded-lg"
              src="/images/hospital_detail.jpg"
            />
          </div>

          {/* Small Images Grid - Right Side */}
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 6 }, (_, index) => {
              const images = [
                {
                  bg: "from-blue-100 to-blue-200",
                  text: "🛏️ Room",
                  color: "text-blue-600",
                },
                {
                  bg: "from-green-100 to-green-200",
                  text: "⚕️ Equipment",
                  color: "text-green-600",
                },
                {
                  bg: "from-purple-100 to-purple-200",
                  text: "👩‍⚕️ Staff",
                  color: "text-purple-600",
                },
                {
                  bg: "from-teal-100 to-teal-200",
                  text: "🏢 Building",
                  color: "text-teal-600",
                },
                {
                  bg: "from-yellow-100 to-yellow-200",
                  text: "💉 Treatment",
                  color: "text-yellow-600",
                },
                {
                  bg: "from-red-100 to-red-200",
                  text: "🩺 Checkup",
                  color: "text-red-600",
                },
              ];
              const img = images[index];
              return (
                <Image
                  key={index}
                  width={184}
                  height={210}
                  alt={`${clinic.name}`}
                  className="max-w-46 max-h-52.5 rounded-lg"
                  src="/images/hospital_room.jpg"
                />
              );
            })}
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-8 border-b border-gray-200 mb-8">
          {["Spesialis", "Fasilitas", "Review", "Lokasi"].map((tab, index) => (
            <button
              key={tab}
              className={`pb-4 text-base font-medium transition-colors ${
                index === 0
                  ? "text-teal-500 border-b-2 border-teal-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-3 space-y-8">
            {/* Clinic Header Info */}
            <div className="rounded-xl flex justify-between p-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  {clinic.name}
                </h1>
                <p className="text-gray-600">{clinic.type}</p>

                <div className="flex items-center space-x-4 my-2">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-gray-400 mr-1" />
                    <span className="text-sm text-gray-600">
                      {clinic.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-1">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 fill-[#FEB052] text-[#FEB052] mr-1" />
                    <span className="font-bold text-gray-800 mr-1">
                      {clinic.rating}
                    </span>
                  </div>
                  <span className="text-gray-200">|</span>

                  <span className="text-sm text-gray-600">
                    {clinic.totalReviews} Reviews
                  </span>
                </div>
              </div>
              <div className="rounded-xl items-center flex">
                <Button className="w-full" size="lg">
                  Book Appointment
                </Button>
              </div>
            </div>

            {/* Specialists Section */}
            <div id="specialists" className="rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Spesialis{" "}
                  <span className="text-brand">
                    ({clinic.specialists?.length || 0})
                  </span>
                </h2>
              </div>

              <div className="flex space-x-6 overflow-x-auto pb-4">
                {clinic.specialists?.map((specialist) => (
                  <div
                    key={specialist.id}
                    className="shrink-0 w-85.5 bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow relative"
                  >
                    <button className="absolute top-5 right-4 text-gray-400 hover:text-red-500">
                      <Heart className="w-5 h-5" />
                    </button>

                    <div className="flex items-start space-x-4">

                      <Image
                        width={109}
                        height={109}
                        src={specialist.image}
                        alt={specialist.name}
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800 text-lg mb-1">
                          {specialist.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          {specialist.specialization}
                        </p>
                        <div className="flex items-center space-x-1">
                          <div className="flex items-center">
                            <Star className="w-3.5 h-3.5 fill-[#FEB052] text-[#FEB052] mr-1" />
                            <span className="text-xs text-gray-500 mr-1">
                              {specialist.rating}
                            </span>
                          </div>
                          <span className="text-gray-200">|</span>

                          <span className="text-xs text-gray-500">
                            {specialist.totalReviews} Reviews
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fasilitas Section */}
            <div id="fasilitas" className="rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Fasilitas
              </h2>
              <div className="grid grid-cols-2 gap-8">
                {clinic.facilities.map((facility) => {
                  const Icon = iconMap[facility.icon];

                  return (
                    <div
                      key={facility.name}
                      className="flex items-center space-x-4"
                    >
                      <div className="w-6 h-6 text-gray-600">
                        {Icon ? <Icon className="w-6 h-6" /> : null}
                      </div>

                      <span className="text-gray-700 font-medium">
                        {facility.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Reviews Section */}
            <div id="reviews" className="py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-gray-800">Reviews</h2>
                  <button className="text-gray-500 text-sm font-medium hover:text-gray-700">
                    Lihat semua
                  </button>
                </div>

                {/* Cards */}
                <div className="flex gap-6 overflow-x-auto pb-4">
                  {clinic.reviews?.slice(0, 4).map((review) => (
                    <div
                      key={review.id}
                      className="max-w-[320px] bg-[#F8FFFF] rounded-2xl p-6 shadow-md shrink-0"
                    >
                      {/* Name */}
                      <h4 className="font-semibold text-teal-700 mb-2">
                        {review.userName}
                      </h4>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm text-gray-700">
                          {review.rating.toFixed(1)}
                        </span>

                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? "fill-orange-400 text-orange-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Comment */}
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Lokasi Section */}
            <div id="lokasi" className="rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Lokasi</h2>
              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Map akan ditampilkan di sini</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-teal-500 mt-1" />
                <div>
                  <p className="font-medium text-gray-800 mb-1">
                    {clinic.name}
                  </p>
                  <p className="text-sm text-gray-600">{clinic.address}</p>
                  <p className="text-sm text-teal-500 mt-1">
                    {clinic.distance} dari lokasi Anda
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  MapPin,
  Star,
  ChevronLeft,
  ChevronRight,
  Heart,
  Shuffle,
  Clock,
  BedDouble,
  UserRound,
  MessageSquare,
} from "lucide-react";
import axios from "axios";
import Header from "../../components/Header";
import Button from "../../components/ui/Button";
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

const MOBILE_TABS = ["Spesialis", "Fasilitas", "Review", "Lokasi"];

export default function ClinicDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [clinic, setClinic] = useState<Clinic | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Spesialis");
  const [likedSpecialists, setLikedSpecialists] = useState<Set<number>>(
    new Set(),
  );

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

  const toggleLike = (id: number) => {
    setLikedSpecialists((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand"></div>
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

  /* ─────────────── MOBILE TAB CONTENT ─────────────── */
  const renderMobileTabContent = () => {
    switch (activeTab) {
      case "Spesialis":
        return (
          <div className="px-4 pt-4">
            <h2 className="text-base font-bold text-gray-800 mb-3">
              Spesialis{" "}
              <span className="text-brand">
                ({clinic.specialists?.length || 0})
              </span>
            </h2>
            <div className="space-y-3">
              {clinic.specialists?.map((specialist) => (
                <div
                  key={specialist.id}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center space-x-4 relative"
                >
                  <button
                    onClick={() => toggleLike(specialist.id)}
                    className="absolute top-4 right-4"
                  >
                    <Heart
                      className={`w-5 h-5 transition-colors ${
                        likedSpecialists.has(specialist.id)
                          ? "fill-red-500 text-red-500"
                          : "text-gray-300"
                      }`}
                    />
                  </button>

                  {/* Doctor image */}
                  <div className="shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-orange-100">
                    <Image
                      width={64}
                      height={64}
                      src={specialist.image}
                      alt={specialist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0 pr-6">
                    <h3 className="font-bold text-gray-800 text-sm">
                      {specialist.name}
                    </h3>
                    <p className="text-xs text-gray-500 mb-1.5">
                      {specialist.specialization}
                    </p>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-semibold text-gray-700">
                        {specialist.rating}
                      </span>
                      <span className="text-xs text-gray-400">
                        {specialist.totalReviews} Reviews
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "Fasilitas":
        return (
          <div className="px-4 pt-4">
            <h2 className="text-base font-bold text-gray-800 mb-3">
              Fasilitas
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {clinic.facilities.map((facility) => {
                const Icon = iconMap[facility.icon];
                return (
                  <div
                    key={facility.name}
                    className="flex items-center space-x-3 bg-white rounded-xl p-3 border border-gray-100 shadow-sm"
                  >
                    <div className="w-8 h-8 bg-teal-50 rounded-full flex items-center justify-center shrink-0">
                      {Icon ? <Icon className="w-4 h-4 text-teal-600" /> : null}
                    </div>
                    <span className="text-xs font-medium text-gray-700">
                      {facility.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        );

      case "Review":
        return (
          <div className="px-4 pt-4">
            <h2 className="text-base font-bold text-gray-800 mb-3">Review</h2>
            <div className="space-y-3">
              {clinic.reviews?.map((review) => (
                <div
                  key={review.id}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4"
                >
                  <h4 className="font-semibold text-teal-700 text-sm mb-1">
                    {review.userName}
                  </h4>
                  <div className="flex items-center space-x-1 mb-2">
                    <span className="text-xs text-gray-600">
                      {review.rating.toFixed(1)}
                    </span>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < review.rating
                              ? "fill-orange-400 text-orange-400"
                              : "text-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {review.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case "Lokasi":
        return (
          <div className="px-4 pt-4">
            <h2 className="text-base font-bold text-gray-800 mb-3">Lokasi</h2>
            <div className="bg-gray-100 h-48 rounded-2xl flex items-center justify-center mb-4">
              <div className="text-center">
                <MapPin className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                <p className="text-xs text-gray-500">
                  Map akan ditampilkan di sini
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3 bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
              <MapPin className="w-4 h-4 text-brand mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-gray-800 text-sm mb-0.5">
                  {clinic.name}
                </p>
                <p className="text-xs text-gray-500">{clinic.address}</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ═══════════════ MOBILE LAYOUT ═══════════════ */}
      <div className="md:hidden bg-white min-h-screen">
        {/* Hero image with overlay buttons */}
        <div className="relative w-full" style={{ height: "240px" }}>
          <Image
            src="/images/hospital_detail.jpg"
            alt={clinic.name}
            fill
            className="object-cover"
            priority
          />
          {/* Overlay action buttons */}
          <div className="absolute top-4 left-4">
            <button
              onClick={() => router.back()}
              className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
          </div>
          <div className="absolute top-4 right-4 flex space-x-2">
            <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md">
              <Shuffle className="w-4 h-4 text-gray-700" />
            </button>
            <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md">
              <Heart className="w-4 h-4 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Thumbnail row */}
        <div className="flex space-x-2 px-4 py-3 bg-white">
          {[
            "/images/hospital_room.jpg",
            "/images/doctor_image_2.jpg",
            "/images/hospital_main.jpg",
          ].map((src, i) => (
            <div
              key={i}
              className="relative w-24 h-16 rounded-xl overflow-hidden shrink-0"
            >
              <Image
                src={src}
                alt={`thumb-${i}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Clinic info */}
        <div className="px-4 pt-2 pb-4 bg-white border-b border-gray-100">
          <h1 className="text-xl font-bold text-gray-900 mb-0.5">
            {clinic.name}
          </h1>
          <p className="text-sm text-gray-400 mb-2">{clinic.type}</p>

          <div className="flex items-center text-xs text-gray-400 mb-2">
            <MapPin className="w-3.5 h-3.5 mr-1 shrink-0 text-gray-400" />
            <span>{clinic.address}</span>
          </div>

          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold text-gray-700">
              {clinic.rating}
            </span>
            <a href="#" className="text-sm text-blue-500 underline ml-1">
              {clinic.totalReviews.toLocaleString()} Reviews
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-4 bg-white px-2 py-4 border-b border-gray-100">
          {[
            {
              icon: <BedDouble className="w-5 h-5 text-brand" />,
              value: "12",
              label: "Ruangan",
            },
            {
              icon: <UserRound className="w-5 h-5 text-brand" />,
              value: clinic.specialists?.length ?? 8,
              label: "Doctor",
            },
            {
              icon: <Star className="w-5 h-5 fill-brand text-brand" />,
              value: clinic.rating,
              label: "rating",
            },
            {
              icon: <MessageSquare className="w-5 h-5 text-brand" />,
              value: clinic.totalReviews.toLocaleString(),
              label: "reviews",
            },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center space-y-1">
              <div className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center">
                {stat.icon}
              </div>
              <span className="text-sm font-bold text-gray-800">
                {stat.value}
              </span>
              <span className="text-xs text-gray-400">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Waktu Operasional */}
        <div className="px-4 py-4 bg-white border-b border-gray-100">
          <h2 className=" text-xl font-bold text-gray-800 mb-1">
            Waktu Operasional
          </h2>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-2 text-gray-400 shrink-0" />
            <span className="text-sm text-gray-500">
              Monday–Friday, 08.00 AM–18.00 PM
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 bg-white sticky top-0 z-10">
          {MOBILE_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "text-brand border-b-2 border-brand"
                  : "text-gray-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="pb-6">{renderMobileTabContent()}</div>
      </div>

      {/* ═══════════════ DESKTOP LAYOUT ═══════════════ */}
      <div className="hidden md:block">
        <Header />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <Link
              href="/"
              className="text-gray-600 hover:text-brand transition-colors"
            >
              Beranda
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span>Klinik</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-800 font-medium">{clinic.name}</span>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4 mb-6 max-w-291.5 max-h-108">
            <div className="col-span-1">
              <Image
                width={577}
                height={432}
                alt={`${clinic.name} main`}
                className="max-w-144.25 max-h-108 rounded-lg"
                src="/images/hospital_detail.jpg"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 6 }, (_, index) => (
                <Image
                  key={index}
                  width={184}
                  height={210}
                  alt={`${clinic.name}`}
                  className="max-w-46 max-h-52.5 rounded-lg"
                  src="/images/hospital_room.jpg"
                />
              ))}
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-8 border-b border-gray-200 mb-8">
            {["Spesialis", "Fasilitas", "Review", "Lokasi"].map(
              (tab, index) => (
                <button
                  key={tab}
                  className={`pb-4 text-base font-medium transition-colors ${
                    index === 0
                      ? "text-brand border-b-2 border-brand"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab}
                </button>
              ),
            )}
          </div>

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
                  <Star className="w-5 h-5 fill-[#FEB052] text-[#FEB052] mr-1" />
                  <span className="font-bold text-gray-800 mr-1">
                    {clinic.rating}
                  </span>
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

            {/* Specialists */}
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
                    <button
                      onClick={() => toggleLike(specialist.id)}
                      className="absolute top-5 right-4"
                    >
                      <Heart
                        className={`w-5 h-5 transition-colors ${
                          likedSpecialists.has(specialist.id)
                            ? "fill-red-500 text-red-500"
                            : "text-gray-400 hover:text-red-500"
                        }`}
                      />
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
                          <Star className="w-3.5 h-3.5 fill-[#FEB052] text-[#FEB052] mr-1" />
                          <span className="text-xs text-gray-500 mr-1">
                            {specialist.rating}
                          </span>
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

            {/* Fasilitas */}
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

            {/* Reviews */}
            <div id="reviews" className="py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-gray-800">Reviews</h2>
                  <button className="text-gray-500 text-sm font-medium hover:text-gray-700">
                    Lihat semua
                  </button>
                </div>
                <div className="flex gap-6 overflow-x-auto pb-4">
                  {clinic.reviews?.slice(0, 4).map((review) => (
                    <div
                      key={review.id}
                      className="max-w-[320px] bg-[#F8FFFF] rounded-2xl p-6 shadow-md shrink-0"
                    >
                      <h4 className="font-semibold text-teal-700 mb-2">
                        {review.userName}
                      </h4>
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
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Lokasi */}
            <div id="lokasi" className="rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Lokasi</h2>
              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Map akan ditampilkan di sini</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand mt-1" />
                <div>
                  <p className="font-medium text-gray-800 mb-1">
                    {clinic.name}
                  </p>
                  <p className="text-sm text-gray-600">{clinic.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

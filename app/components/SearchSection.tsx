"use client";

import { ArrowUpDownIcon, MapPin, Search, StarIcon } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";

interface Clinic {
  id: string;
  name: string;
  type: string;
  address: string;
  rating: number;
  totalReviews: number;
  images: string[];
}

export default function SearchSection() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [clinics, setClinics] = useState<Clinic[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [sortBy, setSortBy] = useState("Default");

  const filters = ["Semua", "Umum", "Mata", "Gigi", "THT"];
  const sortOptions = ["Default", "Rating Tertinggi", "Terdekat", "Nama A-Z"];

  // Debounced search function
  useEffect(() => {
    const searchClinics = async () => {
      if (!searchQuery.trim()) {
        setClinics([]);
        return;
      }

      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:3002/api/clinics?name=${encodeURIComponent(searchQuery)}`,
        );
        setClinics(response.data || []);
      } catch (error) {
        console.error("Error fetching clinics:", error);
        setClinics([]);
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(searchClinics, 300);
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  // Filter and sort clinics
  const filteredAndSortedClinics = useMemo(() => {
    let filtered = clinics;

    // Apply type filter
    if (activeFilter !== "Semua") {
      filtered = clinics.filter((clinic) =>
        clinic.type.toLowerCase().includes(activeFilter.toLowerCase()),
      );
    }

    // Apply sorting
    const sorted = [...filtered];
    switch (sortBy) {
      case "Rating Tertinggi":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case "Nama A-Z":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Terdekat":
        break;
      default:
        break;
    }

    return sorted;
  }, [clinics, activeFilter, sortBy]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <section>
      {/* ── MOBILE search bar ── */}
      <div className="md:hidden bg-gray-50 px-4 py-3">
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Cari klinik..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-9 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-neutral-900 focus:border-teal-500 focus:outline-none transition-colors shadow-sm"
          />
        </div>

        {/* Mobile search results */}
        {searchQuery && (
          <div className="mt-3">
            {loading && (
              <div className="flex justify-center py-4">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-teal-500"></div>
              </div>
            )}
            {!loading && filteredAndSortedClinics.length > 0 && (
              <div className="space-y-3">
                {filteredAndSortedClinics.map((clinic) => (
                  <div
                    key={clinic.id}
                    onClick={() => router.push(`/clinic/${clinic.id}`)}
                    className="flex items-center space-x-3 p-3 bg-white border border-gray-200 rounded-xl cursor-pointer hover:border-teal-400 transition-colors"
                  >
                    <Image
                      width={60}
                      height={60}
                      alt={clinic.name}
                      className="rounded-lg object-cover shrink-0"
                      src="/images/hospital_main.jpg"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-800 text-sm truncate">{clinic.name}</h4>
                      <p className="text-xs text-gray-500 truncate">{clinic.address}</p>
                      <div className="flex items-center mt-1 space-x-1">
                        <StarIcon className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs text-gray-600">{clinic.rating}</span>
                        <span className="text-xs text-gray-400">({clinic.totalReviews})</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {!loading && searchQuery && filteredAndSortedClinics.length === 0 && (
              <p className="text-sm text-gray-500 text-center py-4">Tidak ada klinik ditemukan</p>
            )}
          </div>
        )}
      </div>

      {/* ── DESKTOP search box ── */}
      <div className="hidden md:block bg-white py-16">
        <div className="px-24">
          <div className="text-left mb-12 border-2 p-10 rounded-[28px] border-brand">
            <h2 className="text-3xl font-bold text-brand mb-8">
              Cari Klinik Pilihan Anda
            </h2>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-[#BFBABA]" />
              </div>
              <input
                type="text"
                placeholder="Cari klinik..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 text-neutral-900 py-4 border border-[#A6A3A3] rounded-xl text-lg focus:border-brand focus:outline-none transition-colors"
              />
            </div>

          {/* Search Results */}
          {searchQuery && (
            <div className="mt-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#1E1E1E] mb-4">
                  {`Hasil untuk "${searchQuery}"`}
                </h3>

                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {filters.map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        activeFilter === filter
                          ? "bg-[#428283] text-white"
                          : "bg-white text-[#1C2A3A] border border-[#1C2A3A] hover:bg-brand hover:text-white cursor-pointer hover:border-brand"
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>

                {/* Results Count and Sort */}
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-[#474748]">
                    {loading
                      ? "Mencari..."
                      : `${filteredAndSortedClinics.length} Ditemukan`}
                  </span>
                  <div className="flex items-center">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none text-sm text-gray-500 rounded px-3 py-1 focus:outline-none focus:border-teal-500 cursor-pointer"
                    >
                      {sortOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <ArrowUpDownIcon className="w-4 h-4 text-gray-500" />
                  </div>
                </div>
              </div>

              {/* Loading State */}
              {loading && (
                <div className="flex justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-500"></div>
                </div>
              )}

              {/* Results List */}
              {!loading && filteredAndSortedClinics.length > 0 && (
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {filteredAndSortedClinics.map((clinic) => (
                    <div
                      key={clinic.id}
                      onClick={() => router.push(`/clinic/${clinic.id}`)}
                      className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-teal-500 hover:shadow-md transition-all cursor-pointer"
                    >
                      <div className="shrink-0">
                        <Image
                          width={109}
                          height={109}
                          alt={clinic.name}
                          className="rounded-lg"
                          src="/images/hospital_main.jpg"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-800 truncate">
                          {clinic.name}
                        </h4>
                        <div className="border border-gray-200 my-2"></div>
                        <p className="text-sm text-gray-600 font-semibold mb-1">
                          {clinic.type}
                        </p>
                        <div className="flex items-center text-xs text-gray-400 mb-2">
                          <MapPin className="w-3 h-3 mr-1" />
                          <span className="truncate text-[#4B5563] text-xs">
                            {clinic.address}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            <StarIcon className="w-3.5 h-3.5 fill-[#FEB052] text-[#FEB052]" />
                            <span className="text-xs text-gray-500 ml-1">
                              {clinic.rating}
                            </span>
                          </div>
                          <span className="text-gray-200">|</span>
                          <span className="text-xs text-gray-500">
                            {clinic.totalReviews} Reviews
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* No Results */}
              {!loading &&
                searchQuery &&
                filteredAndSortedClinics.length === 0 && (
                  <div className="text-center py-8">
                    <div className="text-gray-400 text-lg mb-2">🔍</div>
                    <p className="text-gray-500">
                      {`Tidak ada klinik ditemukan untuk "${searchQuery}"`}
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                      Coba kata kunci yang berbeda
                    </p>
                  </div>
                )}
            </div>
          )}
        </div>
        </div>

      </div>
    </section>
  );
}

"use client";

import { Search } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import PlaceholderImage from "./ui/PlaceholderImage";

interface Clinic {
  id: string;
  name: string;
  type: string;
  address: string;
  rating: number;
  reviewCount: number;
  image?: string;
}

export default function SearchSection() {
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
          `http://localhost:3002/api/clinics?name=${encodeURIComponent(searchQuery)}`
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
        clinic.type.toLowerCase().includes(activeFilter.toLowerCase())
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
        // Would need location data for proper implementation
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
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12 border-2 p-10 rounded-[28px] border-teal-500">
          <h2 className="text-3xl font-bold text-teal-500 mb-8">
            Cari Klinik Pilihan Anda
          </h2>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Cari klinik..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-4 border border-teal-500 rounded-xl text-lg focus:border-teal-600 focus:outline-none transition-colors"
            />
          </div>

          {/* Search Results */}
          {searchQuery && (
            <div className="mt-8">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Hasil untuk "{searchQuery}"
                </h3>

                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {filters.map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        activeFilter === filter
                          ? "bg-teal-500 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>

                {/* Results Count and Sort */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-gray-600">
                    {loading
                      ? "Mencari..."
                      : `${filteredAndSortedClinics.length} Ditemukan`}
                  </span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="text-sm border border-gray-300 rounded px-3 py-1 focus:outline-none focus:border-teal-500"
                  >
                    {sortOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
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
                      className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-teal-500 hover:shadow-md transition-all cursor-pointer"
                    >
                      <div className="flex-shrink-0">
                        <PlaceholderImage
                          width={64}
                          height={64}
                          alt={clinic.name}
                          className="rounded-lg"
                          backgroundColor="bg-teal-100"
                          textColor="text-teal-600"
                          text="🏥"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-800 truncate">
                          {clinic.name}
                        </h4>
                        <p className="text-sm text-gray-500 mb-1">
                          {clinic.type}
                        </p>
                        <div className="flex items-center text-xs text-gray-400 mb-2">
                          <svg
                            className="w-3 h-3 mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="truncate">{clinic.address}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            <span className="text-yellow-400 text-sm">★</span>
                            <span className="text-sm font-medium text-gray-700 ml-1">
                              {clinic.rating}
                            </span>
                          </div>
                          <span className="text-xs text-gray-400">
                            {clinic.reviewCount} Reviews
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* No Results */}
              {!loading && searchQuery && filteredAndSortedClinics.length === 0 && (
                <div className="text-center py-8">
                  <div className="text-gray-400 text-lg mb-2">🔍</div>
                  <p className="text-gray-500">
                    Tidak ada klinik ditemukan untuk "{searchQuery}"
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
    </section>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { useClinicSearch } from "@/app/hooks/useClinicSearch";
import SearchInput from "./search/SearchInput";
import SearchFilterBar from "./search/SearchFilterBar";
import { DesktopClinicCard, MobileClinicCard } from "./search/ClinicCard";
import { LoadingSpinner, SearchEmptyState } from "./search/SearchStates";

export default function SearchSection() {
  const router = useRouter();
  const {
    searchQuery,
    setSearchQuery,
    loading,
    activeFilter,
    setActiveFilter,
    sortBy,
    setSortBy,
    filteredAndSortedClinics,
  } = useClinicSearch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchQuery(e.target.value);

  const navigate = (id: string) => router.push(`/clinic/${id}`);

  return (
    <section>
      {/* ── MOBILE ── */}
      <div className="md:hidden bg-gray-50 px-4 py-3">
        <SearchInput value={searchQuery} onChange={handleChange} size="sm" />

        {searchQuery && (
          <div className="mt-3">
            {loading && <LoadingSpinner size="sm" />}
            {!loading && filteredAndSortedClinics.length > 0 && (
              <div className="space-y-3">
                {filteredAndSortedClinics.map((clinic) => (
                  <MobileClinicCard
                    key={clinic.id}
                    clinic={clinic}
                    onClick={() => navigate(clinic.id)}
                  />
                ))}
              </div>
            )}
            {!loading && filteredAndSortedClinics.length === 0 && (
              <p className="text-sm text-gray-500 text-center py-4">
                Tidak ada klinik ditemukan
              </p>
            )}
          </div>
        )}
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden md:block bg-white py-16">
        <div className="px-24">
          <div className="text-left mb-12 border-2 p-10 rounded-[28px] border-brand">
            <h2 className="text-3xl font-bold text-brand mb-8">
              Cari Klinik Pilihan Anda
            </h2>

            <SearchInput value={searchQuery} onChange={handleChange} />

            {searchQuery && (
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-[#1E1E1E] mb-4">
                  {`Hasil untuk "${searchQuery}"`}
                </h3>

                <SearchFilterBar
                  resultCount={filteredAndSortedClinics.length}
                  loading={loading}
                  activeFilter={activeFilter}
                  sortBy={sortBy}
                  onFilterChange={setActiveFilter}
                  onSortChange={setSortBy}
                />

                {loading && <LoadingSpinner />}

                {!loading && filteredAndSortedClinics.length > 0 && (
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {filteredAndSortedClinics.map((clinic) => (
                      <DesktopClinicCard
                        key={clinic.id}
                        clinic={clinic}
                        onClick={() => navigate(clinic.id)}
                      />
                    ))}
                  </div>
                )}

                {!loading && filteredAndSortedClinics.length === 0 && (
                  <SearchEmptyState searchQuery={searchQuery} />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

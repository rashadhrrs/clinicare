import { ArrowUpDownIcon } from "lucide-react";
import type { ClinicFilter, SortOption } from "@/app/hooks/useClinicSearch";
import { CLINIC_FILTERS, SORT_OPTIONS } from "@/app/hooks/useClinicSearch";

interface SearchFilterBarProps {
  resultCount: number;
  loading: boolean;
  activeFilter: ClinicFilter;
  sortBy: SortOption;
  onFilterChange: (filter: ClinicFilter) => void;
  onSortChange: (sort: SortOption) => void;
}

export default function SearchFilterBar({
  resultCount,
  loading,
  activeFilter,
  sortBy,
  onFilterChange,
  onSortChange,
}: SearchFilterBarProps) {
  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        {CLINIC_FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
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
          {loading ? "Mencari..." : `${resultCount} Ditemukan`}
        </span>
        <div className="flex items-center">
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            className="appearance-none text-sm text-gray-500 rounded px-3 py-1 focus:outline-none focus:border-teal-500 cursor-pointer"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ArrowUpDownIcon className="w-4 h-4 text-gray-500" />
        </div>
      </div>
    </div>
  );
}

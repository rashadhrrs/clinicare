"use client";

import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import type { Clinic } from "@/app/types";

export const CLINIC_FILTERS = ["Semua", "Umum", "Mata", "Gigi", "THT"] as const;
export const SORT_OPTIONS = [
  "Default",
  "Rating Tertinggi",
  "Terdekat",
  "Nama A-Z",
] as const;

export type ClinicFilter = (typeof CLINIC_FILTERS)[number];
export type SortOption = (typeof SORT_OPTIONS)[number];

export function useClinicSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [clinics, setClinics] = useState<Clinic[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState<ClinicFilter>("Semua");
  const [sortBy, setSortBy] = useState<SortOption>("Default");

  useEffect(() => {
    const fetchClinics = async () => {
      if (!searchQuery.trim()) {
        setClinics([]);
        return;
      }

      setLoading(true);
      try {
        const { data } = await axios.get<Clinic[]>(
          `http://localhost:3002/api/clinics?name=${encodeURIComponent(searchQuery)}`,
        );
        setClinics(data ?? []);
      } catch {
        setClinics([]);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(fetchClinics, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const filteredAndSortedClinics = useMemo(() => {
    const filtered =
      activeFilter === "Semua"
        ? clinics
        : clinics.filter((c) =>
            c.type.toLowerCase().includes(activeFilter.toLowerCase()),
          );

    const sorted = [...filtered];

    switch (sortBy) {
      case "Rating Tertinggi":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case "Nama A-Z":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return sorted;
  }, [clinics, activeFilter, sortBy]);

  return {
    searchQuery,
    setSearchQuery,
    loading,
    activeFilter,
    setActiveFilter,
    sortBy,
    setSortBy,
    filteredAndSortedClinics,
  };
}

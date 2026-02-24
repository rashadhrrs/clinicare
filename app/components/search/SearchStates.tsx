interface LoadingSpinnerProps {
  size?: "sm" | "md";
}

export function LoadingSpinner({ size = "md" }: LoadingSpinnerProps) {
  const sizeClasses = size === "sm" ? "h-6 w-6" : "h-8 w-8";
  return (
    <div className="flex justify-center py-4">
      <div
        className={`animate-spin rounded-full ${sizeClasses} border-b-2 border-teal-500`}
      />
    </div>
  );
}

interface SearchEmptyStateProps {
  searchQuery: string;
}

export function SearchEmptyState({ searchQuery }: SearchEmptyStateProps) {
  return (
    <div className="text-center py-8">
      <div className="text-gray-400 text-lg mb-2">🔍</div>
      <p className="text-gray-500">{`Tidak ada klinik ditemukan untuk "${searchQuery}"`}</p>
      <p className="text-sm text-gray-400 mt-1">Coba kata kunci yang berbeda</p>
    </div>
  );
}

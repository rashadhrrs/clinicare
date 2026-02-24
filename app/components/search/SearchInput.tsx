import { Search } from "lucide-react";

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  size?: "sm" | "lg";
}

export default function SearchInput({
  value,
  onChange,
  placeholder = "Cari klinik...",
  className = "",
  size = "lg",
}: SearchInputProps) {
  const sizeClasses =
    size === "sm"
      ? "pl-9 pr-4 py-3 text-sm rounded-xl"
      : "pl-10 pr-4 py-4 text-lg rounded-xl";

  const iconSizeClasses = size === "sm" ? "w-4 h-4" : "w-5 h-5";
  const iconOffset = size === "sm" ? "left-3" : "left-0 pl-3";

  return (
    <div className={`relative ${className}`}>
      <div
        className={`absolute inset-y-0 ${iconOffset} flex items-center pointer-events-none`}
      >
        <Search className={`${iconSizeClasses} text-[#BFBABA]`} />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full ${sizeClasses} border text-neutral-900 focus:outline-none transition-colors
          ${size === "sm" ? "bg-white border-gray-200 focus:border-teal-500 shadow-sm" : "border-[#A6A3A3] focus:border-brand"}`}
      />
    </div>
  );
}

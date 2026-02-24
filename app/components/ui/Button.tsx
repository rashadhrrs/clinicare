import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "gradient";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "font-medium rounded-lg transition-colors focus:outline-none focus:ring-2";

  const variantClasses = {
    primary:
      "bg-brand cursor-pointer text-white hover:bg-teal-600 focus:ring-teal-300",
    secondary:
      "bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-300",
    outline:
      "border border-teal-500 text-teal-500 hover:bg-teal-50 focus:ring-teal-300",
    gradient:
      "bg-gradient-to-r from-[#2AA996] to-[#357A7B] text-white " +
      "hover:opacity-90 focus:ring-[#2AA996] shadow-[ -8px_8px_28px_rgba(0,0,0,0.06) ]",
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

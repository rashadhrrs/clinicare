import Image from "next/image";

interface AvatarProps {
  width: number;
  height: number;
  alt: string;
  className?: string;
  backgroundColor?: string;
  textColor?: string;
  src: string;
}

export default function Avatar({
  width,
  height,
  alt,
  className = "",
  backgroundColor = "bg-gray-200",
  textColor = "text-gray-500",
  //   text,
  src,
}: AvatarProps) {
  //   const displayText = text || `${width}×${height}`;

  return (
    <Image
      className={`${backgroundColor} ${textColor} flex items-center justify-center text-xs font-medium ${className}`}
      role="img"
      aria-label={alt}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
}

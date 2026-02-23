interface PlaceholderImageProps {
  width: number;
  height: number;
  alt: string;
  className?: string;
  backgroundColor?: string;
  textColor?: string;
  text?: string;
}

export default function PlaceholderImage({
  width,
  height,
  alt,
  className = '',
  backgroundColor = 'bg-gray-200',
  textColor = 'text-gray-500',
  text
}: PlaceholderImageProps) {
  const displayText = text || `${width}×${height}`;
  
  return (
    <div
      className={`${backgroundColor} ${textColor} flex items-center justify-center text-xs font-medium ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
      role="img"
      aria-label={alt}
    >
      {displayText}
    </div>
  );
}
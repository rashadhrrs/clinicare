import Image from "next/image";
import type { Article } from "@/app/types";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
      <div className="relative w-full h-36">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
          <h3 className="font-bold text-white text-sm leading-snug mb-1">
            {article.title}
          </h3>
          <p className="text-white text-xs opacity-90 line-clamp-2">
            {article.description}
          </p>
        </div>
      </div>
    </div>
  );
}

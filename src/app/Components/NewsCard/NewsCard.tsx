import { Noto_Serif_Bengali } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const NotoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
});

interface News {
  id: string;
  imageUrl: string;
  imageAlt?: string;
  lastPublished: string;
  title: string;
  description: string;
}

const NewsCard = ({ news }: { news: News }) => {
  const { id, imageUrl, imageAlt, lastPublished, title, description } = news;

  return (
    <div>
      <Link href={`/news/${id}`}>
        <div className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          {/* Image */}
          <div className="relative overflow-hidden">
            <Image
              src={imageUrl}
              alt={imageAlt || title}
              width={640}
              height={360}
              className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-56"
            />
          </div>

          {/* Content */}
          <div className="p-4 sm:p-5">
            {/* Title */}
            <h2 className="line-clamp-2 text-lg font-bold leading-7 text-gray-900 transition-colors duration-300 group-hover:text-red-600">
              {title}
            </h2>

            {/* Description */}
            <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
              {description}
            </p>

            {/* Bottom */}
            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
              <p
                className={`${NotoSerifBengali.className} text-xs font-medium text-gray-400`}
              >
                {lastPublished}
              </p>

              <span className="text-xs font-semibold text-red-600 transition-transform duration-300 group-hover:translate-x-1">
                Read More →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;

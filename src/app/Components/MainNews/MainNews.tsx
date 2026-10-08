import Image from "next/image";
import Link from "next/link";

interface News {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  firstPublished: string;
}

const MainNews = ({ news }: { news: News[] }) => {
  const [firstNews, ...otherNews] = news;

  return (
    <div>
      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Featured News */}
          <Link href={`/news/${firstNews.id}`}>
            <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={firstNews.imageUrl}
                  alt={firstNews.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-300 hover:scale-105"
                />
              </div>

              <div className="p-5">
                {/* Category / Label */}
                <span className="inline-block rounded bg-red-50 px-3 py-1 text-xs font-bold text-red-600">
                  প্রধান খবর
                </span>

                {/* Title */}
                <h1 className="mt-3 text-2xl font-bold leading-tight text-gray-900 transition hover:text-red-600">
                  {firstNews.title}
                </h1>

                {/* Description */}
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                  {firstNews.description}
                </p>

                {/* Date */}
                <p className="mt-4 text-xs text-gray-400">
                  {firstNews.firstPublished}
                </p>
              </div>
            </article>
          </Link>

          {/* Other News */}
          <div className="flex flex-col divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
            {otherNews.slice(0, 4).map((news) => (
              <article
                className="group cursor-pointer p-4 transition hover:bg-gray-50"
                key={news.id}
              >
                <Link href={`/news/${news.id}`}>
                <div className="flex gap-4">
                  {/* Small Image */}
                  <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={news.imageUrl}
                      alt={news.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center">
                    <h2 className="line-clamp-2 text-base font-bold leading-6 text-gray-800 transition group-hover:text-red-600">
                      {news.title}
                    </h2>

                    <p className="mt-2 text-xs text-gray-400">
                      {news.firstPublished}
                    </p>
                  </div>
                </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainNews;

import Link from "next/link";

interface MostReadNews {
  id: string;
  title: string;
}

const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");

  const data = await res.json();
  const mostRead: MostReadNews[] = data.data;

  console.log(mostRead);

  return (
    <div className="w-full p-4 sm:p-5">
      {/* Header */}
      <div className="mb-4 flex items-center gap-2">
        <div className="h-6 w-1 rounded-full bg-red-600" />

        <h1 className="text-lg font-bold text-gray-900">সর্বাধিক পঠিত</h1>
      </div>

      {/* List */}
      <div className="divide-y divide-gray-100">
        {mostRead.map((news, i) => (
          <div
            key={news.id}
            className="group flex items-start gap-3 py-3 first:pt-0 last:pb-0"
          >
            {/* Number */}
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-gray-100 text-xs font-bold text-gray-500 transition-colors group-hover:bg-red-600 group-hover:text-white">
              {i + 1}
            </span>

            {/* Title */}
            <Link href={`/news/${news.id}`}>
              <h2 className="line-clamp-2 text-sm font-semibold leading-5 text-gray-700 transition-colors group-hover:text-red-600">
                {news.title}
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostRead;

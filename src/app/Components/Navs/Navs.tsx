import Link from "next/link";

interface Navs {
  slug: string;
  title: string;
  topicId: null;
  url: string;
  scrapable: boolean;
}

const Navs = async () => {
  const response = await fetch("https://news-api-v2.vercel.app/api/categories");

  const data = await response.json();

  const navs: Navs[] = data.data;

  const filteredNavs = navs.filter((n) => n.scrapable);

  return (
    <nav className="border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-2 sm:px-4">
        <div className="flex items-center justify-start gap-1 overflow-x-auto py-2 sm:justify-center sm:py-3">
          {/* Home */}
          <Link
            href="/"
            className="shrink-0 rounded-md px-3 py-2 text-xs font-semibold text-gray-700 transition hover:bg-red-50 hover:text-red-600 sm:px-4 sm:text-sm"
          >
            হোম
          </Link>

          {/* Dynamic Categories */}
          {filteredNavs.map((n, i) => (
            <Link
              key={i}
              href={`/category/${n.slug}`}
              className="shrink-0 whitespace-nowrap rounded-md px-3 py-2 text-xs font-semibold text-gray-700 transition hover:bg-red-50 hover:text-red-600 sm:px-4 sm:text-sm"
            >
              {n.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navs;

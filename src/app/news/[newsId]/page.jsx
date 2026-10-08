import Image from "next/image";
import { notFound } from "next/navigation";

const NewsDetailsPage = async ({ params }) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
    {
      cache: "no-store",
    },
  );

  // API response failed
  if (!res.ok) {
    notFound();
  }

  const data = await res.json();
  const news = data?.data;

  // News data পাওয়া যায়নি
  if (!news) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <article className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div className="overflow-hidden rounded-2xl bg-white shadow-md">
          {/* ================= HEADER ================= */}
          <div className="px-5 py-7 sm:px-8 sm:py-9 lg:px-12 lg:py-10">
            {/* Source + Date */}
            <div className="mb-5 flex flex-wrap items-center gap-3 text-sm text-gray-500">
              <span className="rounded-full bg-red-600 px-4 py-1.5 font-semibold text-white">
                {news.source || "News"}
              </span>

              <span className="text-gray-300">•</span>

              <span>
                {news.lastPublished
                  ? new Date(news.lastPublished).toLocaleDateString("bn-BD", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : ""}
              </span>
            </div>

            {/* Title */}
            <h1 className="max-w-5xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              {news.title}
            </h1>
          </div>

          {/* ================= ARTICLE CONTENT ================= */}
          <div className="px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
            <div className="mx-auto max-w-7xl">
              {news.body?.map((item, index) => {
                // Duplicate main image skip
                if (item.type === "image" && item.url === news.imageUrl) {
                  return null;
                }

                // Image
                if (item.type === "image") {
                  return (
                    <figure key={index} className="my-10">
                      <div className="mx-auto max-w-3xl overflow-hidden rounded-xl">
                        <Image
                          src={item.url}
                          alt={item.altText || news.title || "News image"}
                          width={item.width || 1200}
                          height={item.height || 675}
                          className="h-auto w-full object-cover"
                        />
                      </div>

                      {item.caption && (
                        <figcaption className="mt-3 text-center text-sm text-gray-500">
                          {item.caption}
                        </figcaption>
                      )}
                    </figure>
                  );
                }

                // Subheading
                if (item.type === "subheading") {
                  return (
                    <h2
                      key={index}
                      className="mb-4 mt-10 border-l-4 border-red-600 pl-4 text-2xl font-bold text-gray-900"
                    >
                      {item.text}
                    </h2>
                  );
                }

                // Paragraph
                if (item.type === "text") {
                  return (
                    <p
                      key={index}
                      className="mb-6 text-[17px] leading-8 text-gray-700 sm:text-lg sm:leading-9"
                    >
                      {item.text}
                    </p>
                  );
                }

                return null;
              })}
            </div>
          </div>

          {/* ================= TAGS ================= */}
          {news.tags?.length > 0 && (
            <div className="border-t border-gray-200 px-5 py-5 sm:px-8 lg:px-12">
              <div className="flex flex-wrap gap-2">
                {news.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1.5 text-sm text-gray-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </main>
  );
};

export default NewsDetailsPage;

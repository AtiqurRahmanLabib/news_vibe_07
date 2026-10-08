import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface Headline {
  id: string;
  title: string;
}

const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news");

  const data = await res.json();

  const headLines: Headline[] = data.data;

  return (
    <div className="mx-auto mt-3 max-w-7xl px-3 sm:px-4 lg:px-6">
      <div className="flex overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        {/* Latest Badge */}
        <div className="relative z-10 flex shrink-0 items-center gap-2 bg-red-600 px-3 py-2.5 text-white shadow-md sm:px-5 sm:py-3">
          {/* Live Dot */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
          </span>

          <h1 className="whitespace-nowrap text-xs font-bold sm:text-sm">
            সর্বশেষ
          </h1>
        </div>

        {/* Headlines */}
        <div className="min-w-0 flex-1 overflow-hidden bg-gray-50 py-2.5 sm:py-3">
          <MarqueeText direction="right" duration={12}>
            {headLines.map((headline) => (
              <span
                key={headline.id}
                className="mx-3 inline-flex items-center sm:mx-5"
              >
                <Link
                  href={`/news/${headline.id}`}
                  className="inline-flex items-center"
                >
                  {/* Dot */}
                  <span className="mr-3 h-2 w-2 shrink-0 rounded-full bg-red-500 sm:mr-4" />

                  {/* Headline */}
                  <span className="whitespace-nowrap text-xs font-medium text-gray-700 transition-colors hover:text-red-600 sm:text-sm">
                    {headline.title}
                  </span>
                </Link>
              </span>
            ))}
          </MarqueeText>
        </div>
      </div>
    </div>
  );
};

export default Marquee;

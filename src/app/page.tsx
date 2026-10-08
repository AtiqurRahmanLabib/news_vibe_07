import MainNews from "./Components/MainNews/MainNews";
import MostRead from "./Components/MostRead/MostRead";
import NewsCard from "./Components/NewsCard/NewsCard";

interface OthersSection {
  curationId: string;
  title: string;
  articles: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    lastPublished: string;
  }[];
}

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;
  const otherSections: OthersSection[] = sections.slice(1) as OthersSection[];

  return (
    <div className="min-h-screen">
      {/* Main News */}
      
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {/* Main News */}
          <div className="lg:col-span-2">
            <MainNews news={mainNews} />
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
            <MostRead />
          </div>
        </div>
      </div>
    

      {/* Other News Sections */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {otherSections.map((section) => (
          <section key={section.curationId} className="mb-10">
            {/* Section Title */}
            <div className="mb-6 flex items-center gap-3">
              <div className="h-8 w-1 rounded-full bg-red-600"></div>

              <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
                {section.title}
              </h1>

              <div className="h-px flex-1 bg-gray-200"></div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {section.articles.map((news) => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

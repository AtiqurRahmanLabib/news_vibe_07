import NewsCard from "@/app/Components/NewsCard/NewsCard";
import { notFound } from "next/navigation";

interface CategoryNews {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  lastPublished: string;
}

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
  );

  const data = await res.json();
  const categoryData: CategoryNews[] = data.data;

  console.log(data);

  if(!categoryData){
    notFound()
  }

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Category Header */}
        <div className="mb-6 flex items-center gap-3">
          <div className="h-8 w-1 rounded-full bg-red-600" />

          <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
            {data.title}
          </h1>

          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* News Cards - 3 Columns */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categoryData.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default CategoryPage;

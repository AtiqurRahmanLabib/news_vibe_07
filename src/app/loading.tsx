const Loading = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <article className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div className="overflow-hidden rounded-2xl bg-white shadow-md">
          {/* Header Skeleton */}
          <div className="px-5 py-7 sm:px-8 sm:py-9 lg:px-12 lg:py-10">
            {/* Source + Date */}
            <div className="mb-5 flex items-center gap-3">
              <div className="h-8 w-24 animate-pulse rounded-full bg-gray-200" />
              <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
            </div>

            {/* Title */}
            <div className="space-y-3">
              <div className="h-10 w-full max-w-4xl animate-pulse rounded bg-gray-200" />
              <div className="h-10 w-3/4 max-w-3xl animate-pulse rounded bg-gray-200" />
            </div>
          </div>

          {/* Article Content */}
          <div className="px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
            <div className="mx-auto max-w-7xl">
              {/* Paragraphs */}
              <div className="space-y-4">
                <div className="h-5 w-full animate-pulse rounded bg-gray-200" />
                <div className="h-5 w-full animate-pulse rounded bg-gray-200" />
                <div className="h-5 w-11/12 animate-pulse rounded bg-gray-200" />
                <div className="h-5 w-10/12 animate-pulse rounded bg-gray-200" />
              </div>

              {/* Image */}
              <div className="my-10 mx-auto h-64 w-full max-w-3xl animate-pulse rounded-xl bg-gray-200 sm:h-96" />

              {/* More Text */}
              <div className="space-y-4">
                <div className="h-5 w-full animate-pulse rounded bg-gray-200" />
                <div className="h-5 w-full animate-pulse rounded bg-gray-200" />
                <div className="h-5 w-9/12 animate-pulse rounded bg-gray-200" />
              </div>
            </div>
          </div>

          {/* Tags Skeleton */}
          <div className="border-t border-gray-200 px-5 py-5 sm:px-8 lg:px-12">
            <div className="flex gap-2">
              <div className="h-7 w-16 animate-pulse rounded-full bg-gray-200" />
              <div className="h-7 w-20 animate-pulse rounded-full bg-gray-200" />
              <div className="h-7 w-24 animate-pulse rounded-full bg-gray-200" />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Loading;

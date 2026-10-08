import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-7xl font-bold text-red-600">404</h1>

      <h2 className="mt-4 text-2xl font-bold text-gray-900">Page Not Found</h2>

      <p className="mt-2 max-w-md text-sm text-gray-500">
        Sorry, the page you are looking for does not exist or may have been
        moved.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;

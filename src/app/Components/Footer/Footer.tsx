import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-gray-200 bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Footer Top */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-extrabold text-white">
              News Vibe <span className="text-red-600">07</span>
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-6 text-gray-400">
              সর্বশেষ খবর, দেশ-বিদেশের গুরুত্বপূর্ণ সংবাদ এবং বিভিন্ন বিষয়ের
              আপডেট এক জায়গায়।
            </p>

            {/* Creator */}
            <p className="mt-5 text-sm text-gray-400">
              Designed & Developed by{" "}
              <span className="font-semibold text-white">
                Atiqur Rahman Labib
              </span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-y-3 text-sm">
              <Link href="/" className="transition hover:text-red-500">
                হোম
              </Link>

              <Link href="#" className="transition hover:text-red-500">
                সর্বশেষ
              </Link>

              <Link href="#" className="transition hover:text-red-500">
                জাতীয়
              </Link>

              <Link href="#" className="transition hover:text-red-500">
                আন্তর্জাতিক
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Follow Me
            </h3>

            <p className="mb-4 text-sm text-gray-400">
              Connect with me on social media.
            </p>

            <div className="flex flex-wrap gap-3">
              {/* Facebook */}
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-gray-900 text-sm font-bold text-gray-300 transition hover:border-red-600 hover:bg-red-600 hover:text-white"
              >
                f
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-gray-900 text-sm font-bold text-gray-300 transition hover:border-red-600 hover:bg-red-600 hover:text-white"
              >
                GH
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-gray-900 text-sm font-bold text-gray-300 transition hover:border-red-600 hover:bg-red-600 hover:text-white"
              >
                in
              </a>

              {/* X */}
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-gray-900 text-sm font-bold text-gray-300 transition hover:border-red-600 hover:bg-red-600 hover:text-white"
              >
                X
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-800 pt-5">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-gray-500 sm:flex-row sm:text-left">
            <p>
              © {new Date().getFullYear()} BanglaBulletin
             
            </p>
            <p>Source: BBC Bangla</p>
            <p>
              Created with by{" "}
              <span className="font-medium text-gray-300">
                Atiqur Rahman Labib
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

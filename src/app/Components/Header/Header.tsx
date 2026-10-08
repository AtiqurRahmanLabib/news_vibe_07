import Image from "next/image";
import Logo from "../../../../public/logo.png";
import Link from "next/link";
import UserInfo from "../UserInfo/UserInfo";

const Header = () => {
  const date = new Date().toLocaleString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-3 sm:px-4">
        {/* Top Header */}
        <div className="relative flex items-center justify-between py-3 sm:py-5">
          {/* Logo */}
          <Link href="/">
            <div className="flex shrink-0 items-center">
              <Image
                className="h-full w-full object-cover sm:h-full sm:w-full"
                src={Logo}
                width={100}
                height={100}
                alt="Bangla News 24 Logo"
              />
            </div>
          </Link>

          {/* Center Title */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 text-center sm:block">
            <Link href="/">
              <h1 className="whitespace-nowrap text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
                News Vibe <span className="text-red-600">07</span>
              </h1>
            </Link>

            <p className="mt-1 text-xs font-medium text-gray-500">{date}</p>
          </div>

          {/* Mobile Title */}
          <div className="absolute left-1/2 -translate-x-1/2 text-center sm:hidden">
            <h1 className="whitespace-nowrap text-lg font-extrabold tracking-tight text-gray-900">
              News Vibe <span className="text-red-600">07</span>
            </h1>

            <p className="mt-0.5 whitespace-nowrap text-[9px] font-medium text-gray-500">
              {date}
            </p>
          </div>

          {/* Auth Buttons */}
          <UserInfo></UserInfo>
        </div>
      </div>
    </header>
  );
};

export default Header;

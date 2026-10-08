"use client";

import { authClient } from "@/app/lib/auth-client";
import Link from "next/link";

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };
  return (
    <div>
      {user ? (
        <div className="flex items-center gap-3">
          {/* User Avatar */}
          <Link href='/profile'>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50 text-sm font-bold text-red-600 ring-1 ring-red-100">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
          </Link>

          {/* User Name */}
          <div className="hidden border-l border-gray-200 pl-3 sm:block">
            <p className="max-w-32 truncate text-sm font-semibold text-gray-800">
              {user?.name}
            </p>
          </div>

          {/* Sign Out */}
          <button
            onClick={() => handleSignOut()}
            className="rounded-md border border-gray-200 bg-white px-3 py-2 text-xs font-semibold text-gray-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 sm:px-4 sm:text-sm"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          {/* Sign In */}
          <Link href="/sign-in">
            <button className="rounded-md border border-gray-300 bg-white px-3 py-2 text-xs font-semibold text-gray-700 transition hover:border-red-300 hover:bg-red-50 hover:text-red-600 sm:px-4 sm:text-sm">
              Sign In
            </button>
          </Link>

          {/* Sign Up */}
          <Link href="/sign-up">
            <button className="rounded-md bg-red-600 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-red-700 hover:shadow-md sm:px-4 sm:text-sm">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;

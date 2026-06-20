"use client";

import Link from "next/link";
import Image from "next/image";
import { useUser, UserButton } from "@clerk/nextjs";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const { isSignedIn } = useUser();

  return (
    <nav className="fixed top-0 z-50 w-full bg-dark-1 px-6 py-4 flex justify-between items-center lg:px-10">
      {/* Left Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="meetlylogo"
          className="max-sm:size-10"
        />

        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          Meetly
        </p>
      </Link>

      {/* Right Side */}
      <div className="flex items-center gap-5">
        {isSignedIn && <UserButton afterSignOutUrl="/sign-in" />}

       
        <MobileNav />
      </div>
    </nav>
  );
}
import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="root-layout">
      <nav className="flex items-center justify-between w-full p-4"> 
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={38} height={32} />
          <h2 className="text-primary-100">PrepSmart</h2>
        </Link>
        <div className="flex items-center justify-end gap-2">
            <SignedOut>
              <Link
                href="/sign-in"
                className="btn-primary items-center justify-center h-10 sm:h-12 px-4 sm:px-5 rounded-full font-medium text-sm sm:text-base cursor-pointer hover:opacity-90 inline-flex"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="btn-secondary items-center justify-center h-10 sm:h-12 px-4 sm:px-5 rounded-full font-medium text-sm sm:text-base text-white cursor-pointer hover:opacity-90 inline-flex"
              >
                Sign Up
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default RootLayout;

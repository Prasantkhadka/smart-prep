"use client";

import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import logo from "../public/logo.svg";

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full ">
        <Link href="/"><Image src={logo} alt="PrepSmart Logo" className="ml-4 sm:ml-8 mt-2 mb-2"/></Link>
        <div className="flex justify-end p-4 gap-4 h-16">
        <SignedOut>
            <Link href="/sign-in" className="btn-primary items-center justify-center h-10 sm:h-12 px-4 sm:px-5 rounded-full font-medium text-sm sm:text-base cursor-pointer hover:opacity-90 inline-flex">
            Sign In
            </Link>
            <Link href="/sign-up" className="btn-secondary items-center justify-center h-10 sm:h-12 px-4 sm:px-5 rounded-full font-medium text-sm sm:text-base text-white cursor-pointer hover:opacity-90 inline-flex">
            Sign Up
            </Link>
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>
        </div>
    </header>
    
  );
};

export default Header;

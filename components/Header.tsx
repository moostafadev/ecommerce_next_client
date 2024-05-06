"use client";

import React, { useState } from "react";
import { ModeToggle } from "./DarkModeToggle";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  const [display, setDisplay] = useState<boolean>(false);
  const navData: string[] = ["الكورسات", "من نحن", "تواصل معنا", "المساعدة"];
  return (
    <header className="relative flex items-center justify-center h-16 border-b shadow-sm border-neutral-500 dark:border-neutral-800 border-opacity-20">
      <div className="container flex items-center justify-between gap-2">
        <div className="flex items-center gap-8">
          <Link href="/">
            <h1 className="text-lg sm:text-2xl font-bold sm:font-extrabold leading-none">
              اكاديمية كورسات
            </h1>
          </Link>
          <ul className="hidden md:flex text-center">
            {navData.map((item: string, idx: number) => (
              <li key={idx}>
                <Link
                  href={`/`}
                  className="block px-2 font-bold hover:underline"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <ModeToggle />
          <SignedIn>
            <UserButton
              userProfileMode="navigation"
              userProfileUrl="/user-profile"
            />
          </SignedIn>
          <SignedOut>
            <Button className="font-bold p-[6px] sm:p-2">
              <Link href={"/sign-in"}>تسجيل الدخول</Link>
            </Button>
          </SignedOut>
          <Button
            className={`md:hidden p-[6px] sm:p-2`}
            variant={"ghost"}
            onClick={() => setDisplay(display === false ? true : false)}
          >
            {display ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      <div
        className={`md:hidden flex justify-center absolute top-16 ${
          display ? "left-0" : "left-[100%]"
        } w-full h-[calc(100vh-64px)] backdrop-blur-sm duration-300 overflow-hidden`}
      >
        <ul className="w-full py-4 px-3 text-center">
          {navData.map((item: string, idx: number) => (
            <li key={idx}>
              <Link
                href={"/"}
                className="block p-4 text-xl font-bold hover:underline duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;

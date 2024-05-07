"use client";

import React, { useState } from "react";
import { ModeToggle } from "./DarkModeToggle";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

interface INavData {
  name: string;
  link: string;
}

const Header = () => {
  const [display, setDisplay] = useState<boolean>(false);
  const navData: INavData[] = [
    {
      name: "الكورسات",
      link: "/courses",
    },
    {
      name: "من نحن",
      link: "/",
    },
    {
      name: "تواصل معنا",
      link: "/",
    },
    {
      name: "المساعدة",
      link: "/",
    },
  ];

  return (
    <header className="relative flex items-center justify-center h-16 border-b shadow-sm border-neutral-500 dark:border-neutral-800 border-opacity-20">
      <div className="container flex items-center justify-between gap-2">
        <div className="flex items-center gap-8">
          <Link href="/" onClick={() => setDisplay(false)}>
            <h1 className="text-lg sm:text-2xl font-bold sm:font-extrabold leading-none">
              اكاديمية كورسات
            </h1>
          </Link>
          <ul className="hidden md:flex text-center">
            {navData.map((item: INavData, idx: number) => (
              <li key={idx}>
                <Link
                  href={{ pathname: item.link }}
                  className="block px-2 font-bold hover:underline"
                >
                  {item.name}
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
              <Link href={{ pathname: "/sign-in" }}>تسجيل الدخول</Link>
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
          {navData.map((item: INavData, idx: number) => (
            <li key={idx}>
              <Link
                href={{ pathname: item.link }}
                className="block p-4 text-xl font-bold hover:underline duration-300"
                onClick={() => setDisplay(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;

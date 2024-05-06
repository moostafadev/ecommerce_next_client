"use client";

import React, { useState } from "react";
import { ModeToggle } from "./DarkModeToggle";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [display, setDisplay] = useState<boolean>(false);
  const navData: string[] = ["Home", "About", "Courses", "Contact", "Help"];
  return (
    <header className="relative flex items-center justify-center h-16 border-b border-neutral-500 dark:border-neutral-800 border-opacity-20">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/">
            <h1 className="text-xl font-bold leading-none">Courses Academy</h1>
          </Link>
          <ul className="hidden md:flex text-center">
            {navData.map((item: string, idx: number) => (
              <li key={idx}>
                <Link
                  href={`${item.toLowerCase()}`}
                  className="block px-2 font-semibold hover:underline"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-1">
          <ModeToggle />
          <Button
            className={`md:hidden px-2`}
            size={"icon"}
            variant={"ghost"}
            onClick={() => setDisplay(display === false ? true : false)}
          >
            {display ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      <div
        className={`md:hidden flex justify-center absolute top-16 right-0 ${
          display ? "w-full" : "w-0"
        } h-[calc(100vh-64px)] backdrop-blur-sm duration-300 z-10`}
      >
        <ul className="w-full py-4 px-3 text-center">
          {navData.map((item: string, idx: number) => (
            <li key={idx}>
              <Link
                href={`${item.toLowerCase()}`}
                className="block p-4 text-xl font-semibold hover:underline duration-300"
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

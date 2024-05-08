"use client";

import Link from "next/link";
import React, { useState } from "react";
import { ModeToggle } from "./DarkModeToggle";
import { UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import SidebarDashboard from "./SidebarDashboard";

const HeaderDashboard = () => {
  const [display, setDisplay] = useState<boolean>(false);
  return (
    <>
      <header className="fixed top-0 left-0 flex items-center justify-center h-16 w-full border-b shadow-sm border-neutral-500 dark:border-neutral-800 bg-white dark:bg-zinc-950 z-10">
        <div className="w-full px-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-8">
            <Link href="/" onClick={() => setDisplay(false)}>
              <h1 className="text-lg sm:text-2xl font-bold sm:font-extrabold leading-none">
                اكاديمية كورسات
              </h1>
            </Link>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <UserButton
              userProfileMode="navigation"
              userProfileUrl="/user-profile"
            />
            <ModeToggle />
            <Button
              className={`md:hidden p-[6px] sm:p-2`}
              variant={"ghost"}
              onClick={() => setDisplay(display === false ? true : false)}
            >
              {display ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </header>
      <SidebarDashboard Sidestate={display} setDisplay={setDisplay} />
    </>
  );
};

export default HeaderDashboard;

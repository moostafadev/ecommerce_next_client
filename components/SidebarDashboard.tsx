"use client";

import { Layers, LineChart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Dispatch, SetStateAction } from "react";

interface IProp {
  Sidestate: boolean;
  setDisplay: Dispatch<SetStateAction<boolean>>;
}

const SidebarDashboard = ({ Sidestate, setDisplay }: IProp) => {
  const pathname = usePathname();

  const linkStyle = "flex items-center gap-2 p-4 pl-0";
  const activeClassName =
    "text-white bg-zinc-700 dark:bg-zinc-950 rounded-r-lg";

  return (
    <aside
      className={`w-full md:w-[300px] h-[calc(100%-64px)] fixed bottom-0 ${
        Sidestate ? "right-0" : "right-[-100%]"
      } md:right-0 border-l shadow-sm border-neutral-500 dark:border-neutral-800 backdrop-blur-sm duration-300 md:bg-zinc-100 md:dark:bg-zinc-900 z-10`}
    >
      <ul className="py-4 pr-4">
        <li>
          <Link
            href={"/admin/dashboard"}
            className={`${linkStyle} ${
              pathname === "/admin/dashboard" ? activeClassName : ""
            }`}
            onClick={() => setDisplay(false)}
          >
            <LineChart />
            <span className="font-bold">لوحة التحكم</span>
          </Link>
        </li>
        <li>
          <Link
            href={"/admin/dashboard/courses"}
            className={`${linkStyle} ${
              pathname.startsWith("/admin/dashboard/courses/")
                ? activeClassName
                : ""
            }`}
            onClick={() => setDisplay(false)}
          >
            <Layers />
            <span className="font-bold">الكورسات</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default SidebarDashboard;

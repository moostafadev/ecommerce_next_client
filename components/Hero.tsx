import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex items-center justify-center pt-4 pb-20 px-2 min-h-[calc(100vh-64px)] container">
      <div className="flex items-center justify-center flex-col gap-8">
        <div className="text-3xl sm:text-4xl font-extrabold text-center">
          هذه المنصة لشراء الكورسات أونلاين
          <span className="text-4xl sm:text-5xl font-black block mt-2">
            نريد جيل أفضل
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Button size={"lg"} className="font-bold text-base sm:text-lg">
            <Link href={"/"}>هيا بنا</Link>
          </Button>
          <Button
            size={"lg"}
            variant={"secondary"}
            className="font-bold text-lg"
          >
            <Link href={"/"}>تواصل معنا</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

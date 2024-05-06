"use client";

import { getProjectAction } from "@/actions/projects.action";
import Image from "next/image";
import React, { useState } from "react";

interface IProp {
  projects: {
    id: string;
    title: string;
    body: string | null;
    image: string | null;
  }[];
}

const ProductsSection = ({ projects }: IProp) => {
  return (
    <div className="container">
      <h1 className="text-center font-extrabold text-2xl mb-8">
        أشهر الكورسات
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-2">
        {projects?.map((project) => (
          <div className="" key={project?.id}>
            <Image
              alt="image"
              src={project?.image as string}
              width={1000}
              height={100}
              className="rounded-md"
            />
            <div>
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p>{project.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;

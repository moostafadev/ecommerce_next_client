import { IProject } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ id, title, body, image }: IProject) => {
  return (
    <Link
      href={"/courses/" + id}
      className="flex flex-col gap-4 border-2 border-black dark:border-white rounded-md overflow-hidden hover:scale-105 duration-300 cursor-pointer"
    >
      <Image
        alt="image"
        src={image as string}
        width={1000}
        height={100}
        className="border-b-2 border-black dark:border-white"
      />
      <div className="flex flex-col gap-1 px-4 pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{body}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;

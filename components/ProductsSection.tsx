import { IProject } from "@/interfaces";
import React from "react";
import ProjectCard from "./ProjectCard";

interface IProp {
  title: string;
  projects: IProject[];
}

const ProductsSection = ({ projects, title }: IProp) => {
  return (
    <div className="container py-8">
      <h1 className="text-center font-extrabold text-2xl mb-8">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
        {projects?.map((project) => (
          <ProjectCard
            key={project?.id}
            id={project?.id}
            title={project?.title}
            body={project?.body}
            image={project?.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;

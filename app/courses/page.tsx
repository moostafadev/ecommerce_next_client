import { getProjectAction } from "@/actions/projects.action";
import { BreadcrumbDemo } from "@/components/Breadcrumb";
import ProjectCard from "@/components/ProjectCard";
import React from "react";

const page = async () => {
  const projects = await getProjectAction();
  return (
    <div className="py-6">
      <div className="mb-4">
        <BreadcrumbDemo
          links={[
            {
              name: "كورسات",
              link: "/courses",
            },
          ]}
        />
      </div>
      <h1 className="text-center font-extrabold text-2xl mb-8">الكورسات</h1>
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

export default page;

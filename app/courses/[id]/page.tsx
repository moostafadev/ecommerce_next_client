import { getOneProjectAction } from "@/actions/projects.action";
import { BreadcrumbDemo } from "@/components/Breadcrumb";
import { IProject } from "@/interfaces";
import Image from "next/image";
import React from "react";

const page = async (params: { id: string }) => {
  const data: IProject[] = await getOneProjectAction(params.id as string);
  return (
    <div className="py-6">
      <div className="mb-4">
        <BreadcrumbDemo
          links={[
            {
              name: "كورسات",
              link: "/courses",
            },
            {
              name: data[0].title,
              link: params.id,
            },
          ]}
        />
      </div>
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-2xl font-bold self-start">{data[0]?.title}</h1>
        <div className="flex flex-col gap-3">
          <Image
            src={data[0].image as string}
            alt="image"
            width={1000}
            height={1000}
            className="rounded-md"
          />
          <p className="flex gap-1">
            <strong>الوصف:</strong>
            <span>{data[0].body}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;

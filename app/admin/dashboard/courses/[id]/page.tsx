import { getOneProjectAction } from "@/actions/projects.action";
import CourseForm from "@/components/CourseForm";
import HeadingAdmin from "@/components/HeadingAdmin";
import { IProject } from "@/interfaces";
import React from "react";

interface PageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const page = async ({ params, searchParams }: PageProps) => {
  const data: IProject[] = await getOneProjectAction(params.id as string);
  return (
    <div>
      <HeadingAdmin title="تعديل علي كورس" />
      <div>
        {
          <CourseForm
            pattern="edit"
            id={params.id}
            title={data[0].title}
            body={data[0].body}
            type={data[0].type}
            image={data[0].image}
          />
        }
      </div>
    </div>
  );
};

export default page;

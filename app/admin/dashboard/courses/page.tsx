import { getProjectAction } from "@/actions/projects.action";
import CoursesTable from "@/components/CoursesTable";
import HeadingAdmin from "@/components/HeadingAdmin";
import React from "react";

const page = async () => {
  const courses = await getProjectAction();
  return (
    <div>
      <HeadingAdmin title="ادارة الكورسات" />
      <CoursesTable courses={courses} />
    </div>
  );
};

export default page;

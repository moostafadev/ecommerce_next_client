import CourseForm from "@/components/CourseForm";
import HeadingAdmin from "@/components/HeadingAdmin";
import React from "react";

const page = () => {
  return (
    <div>
      <HeadingAdmin title="أضافة كورس جديد" />
      <div>{<CourseForm pattern="add" />}</div>
    </div>
  );
};

export default page;

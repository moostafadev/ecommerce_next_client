import { getProjectAction } from "@/actions/projects.action";
import CoursesTable from "@/components/CoursesTable";
import HeadingAdmin from "@/components/HeadingAdmin";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = async () => {
  const courses = await getProjectAction();
  return (
    <div>
      <HeadingAdmin title="ادارة الكورسات" />
      <Link href={"/admin/dashboard/courses/add"} className="block mb-4">
        <Button className="flex items-center gap-2">
          <Plus size={26} />
          <span className="text-lg font-bold">أضافة كورس</span>
        </Button>
      </Link>
      <CoursesTable courses={courses} />
    </div>
  );
};

export default page;

"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Eye, Pen, Trash } from "lucide-react";
import { deleteOneProjectAction } from "@/actions/projects.action";
import Spinner from "./Spinner";

const CoursesTableActions = ({ id }: { id: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <>
      <Link href={`/courses/${id}`}>
        <Button className="h-[30px] px-2 bg-teal-600 text-white hover:bg-teal-500">
          <Eye size={20} />
        </Button>
      </Link>
      <Link href={`/admin/dashboard/courses/${id}`}>
        <Button className="h-[30px] px-2 bg-sky-600 text-white hover:bg-sky-500">
          <Pen size={20} />
        </Button>
      </Link>
      <Button
        className="h-[30px] px-2 bg-rose-600 text-white hover:bg-rose-500"
        onClick={async () => {
          setIsLoading(true);
          await deleteOneProjectAction({ id });
          setIsLoading(false);
        }}
        disabled={isLoading}
      >
        {isLoading ? <Spinner /> : <Trash size={20} />}
      </Button>
    </>
  );
};

export default CoursesTableActions;

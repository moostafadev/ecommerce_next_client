import React from "react";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
  TableFooter,
} from "./ui/table";
import { IProject } from "@/interfaces";
import CoursesTableActions from "./CoursesTableActions";

const CoursesTable = ({ courses }: { courses: IProject[] }) => {
  const styleHeading = "text-right text-base font-bold";
  const styleBody = "font-semibold text-base";

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className={styleHeading}>رقم</TableHead>
          <TableHead className={styleHeading}>العنوان</TableHead>
          <TableHead className={styleHeading}>الحالة</TableHead>
          <TableHead className={styleHeading}>التحكم</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {courses.map((course: IProject, idx: number) => (
          <TableRow key={course.id}>
            <TableCell className={styleBody}>{idx + 1}</TableCell>
            <TableCell className={styleBody}>{course.title}</TableCell>
            <TableCell className={styleBody}>
              {course.type === "populare" ? "مشهور" : "أكثر مبيعاً"}
            </TableCell>
            <TableCell className={`${styleBody} flex items-center gap-1`}>
              <CoursesTableActions id={course.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>المجموع</TableCell>
          <TableCell className="text-right">{courses.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default CoursesTable;

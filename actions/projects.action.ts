"use server";

import { IProject } from "@/interfaces";
import { CourseValues } from "@/schema";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const createProjectAction = async ({
  title,
  body,
  type,
  image,
}: IProject) => {
  await prisma.project.create({
    data: {
      title,
      body,
      type,
      image,
    },
  });
  revalidatePath("/admin/dashboard/courses");
};

export const editProjectAction = async ({
  id,
  title,
  body,
  type,
  image,
}: IProject) => {
  await prisma.project.update({
    where: {
      id,
    },
    data: {
      title,
      body,
      type,
      image,
    },
  });
  revalidatePath("/admin/dashboard/courses");
};

export const getProjectAction = async () => {
  return await prisma.project.findMany();
};

export const getFilteredProjectAction = async (
  type: "populare" | "mostSales"
) => {
  return await prisma.project.findMany({
    where: {
      type,
    },
  });
};

export const getOneProjectAction = async (id: string) => {
  return await prisma.project.findMany({
    where: {
      id,
    },
  });
};

export const deleteOneProjectAction = async ({ id }: { id: string }) => {
  await prisma.project.delete({
    where: {
      id,
    },
  });
  revalidatePath("/admin/dashboard/courses");
};

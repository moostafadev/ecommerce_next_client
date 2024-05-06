import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const createProjectAction = async () => {
  await prisma.project.create({
    data: {
      title: "كورس Next.js",
      body: "هذا الكورس مميز للغاية",
      image:
        "https://res.cloudinary.com/dvtmqtcyl/image/upload/v1714241351/Screenshot_2024-04-27_210834_pytjyo.png",
    },
  });
  revalidatePath("/");
};

export const getProjectAction = async () => {
  return await prisma.project.findMany();
};

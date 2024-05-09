import { z } from "zod";

export const CourseSchema = z.object({
  title: z
    .string()
    .min(1, { message: "يجب ادخال عنوان مناسب." })
    .max(30, { message: "العنوان لا يصلح لانه أكثر من 30 حرفاً" }),
  body: z.string().optional().nullable(),
  type: z
    .enum(["mostSales", "populare"])
    .default("populare")
    .optional()
    .nullable(),
});

export type CourseValues = z.infer<typeof CourseSchema>;

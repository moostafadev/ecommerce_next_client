"use client";

import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { z } from "zod";
import { CourseSchema } from "@/schema";
import { useForm } from "react-hook-form";
import {
  createProjectAction,
  editProjectAction,
} from "@/actions/projects.action";
import Spinner from "./Spinner";
import { Pen, Plus, Trash } from "lucide-react";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useRouter } from "next/navigation";
import { Types } from "@/types/globals";
import {
  CldUploadButton,
  CldUploadWidget,
  CloudinaryUploadWidgetInfo,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import Image from "next/image";

const CourseForm = ({
  id,
  title,
  body,
  type,
  image,
  pattern,
}: {
  id?: string;
  title?: string;
  body?: string | null;
  type?: Types | null;
  image?: string | null;
  pattern: "add" | "edit";
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isImage, setIsImage] = useState(image ? true : false);
  const [imageURL, setImageURL] = useState<string | null | undefined>(image);
  const router = useRouter();

  const form = useForm<z.infer<typeof CourseSchema>>({
    resolver: zodResolver(CourseSchema),
    defaultValues: {
      title,
      body,
      type,
    },
  });

  async function onSubmit({ title, body, type }: z.infer<typeof CourseSchema>) {
    setIsLoading(true);
    if (pattern === "add") {
      await createProjectAction({ title, body, type, image: imageURL });
    } else if (pattern === "edit" && id) {
      await editProjectAction({ id, title, body, type, image: imageURL });
    }
    setImageURL("");
    setIsImage(true);
    setIsLoading(false);
    router.push("/admin/dashboard/courses/");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl font-bold">عنوان الكورس</FormLabel>
              <FormControl>
                <Input
                  className="text-base max-w-[600px]"
                  placeholder="عنوان الكورس"
                  {...field}
                />
              </FormControl>
              <FormDescription>هذا عنوان الكورس.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl font-bold">وصف الكورس</FormLabel>
              <FormControl>
                <Textarea
                  className="text-base max-w-[600px]"
                  placeholder="وصف الكورس"
                  value={field.value ?? ""}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                />
              </FormControl>
              <FormDescription>هذا وصف الكورس.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl font-bold">نوع الكورس</FormLabel>
              <Select
                defaultValue={type as "populare"}
                onValueChange={(e: Types) => form.setValue("type", e)}
              >
                <FormControl>
                  <SelectTrigger className="w-[180px] text-base">
                    <SelectValue placeholder="مشهور" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="populare">مشهور</SelectItem>
                  <SelectItem value="mostSales">أكثر مبيعاً</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>هذا نوع الكورس.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <label className="text-xl font-bold">صورة الكورس</label>
          <CldUploadWidget
            uploadPreset="nhru5gzp"
            onSuccess={({ info }: CloudinaryUploadWidgetResults) => {
              if (typeof info === "object" && info !== null) {
                setImageURL(info.url);
                setIsImage(true);
              }
            }}
          >
            {({ open }) => {
              return (
                <Button onClick={() => open()} type="button" disabled={isImage}>
                  Upload an Image
                </Button>
              );
            }}
          </CldUploadWidget>
        </div>
        {isImage || imageURL ? (
          <div className="max-w-[600px] flex flex-col gap-2">
            <Button
              variant={"destructive"}
              size={"icon"}
              className="mr-auto"
              onClick={() => {
                setIsImage(false);
                setImageURL("");
              }}
            >
              <Trash />
            </Button>
            <Image
              className="rounded-md"
              alt="image"
              src={imageURL as string}
              width={600}
              height={1000}
            />
          </div>
        ) : null}
        <Button
          type="submit"
          disabled={isLoading}
          className="flex items-center gap-2"
        >
          {isLoading ? (
            <Spinner />
          ) : pattern === "add" ? (
            <>
              <Plus size={20} />
              <span className="text-lg font-bold">اضافة</span>
            </>
          ) : (
            <>
              <Pen size={18} />
              <span className="text-lg font-bold">تعديل</span>
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default CourseForm;

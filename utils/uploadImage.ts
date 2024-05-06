import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function create(formData: FormData) {
  "use server";
  const file = formData.get("image") as File;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          tags: ["nextjs-server-actions-upload-coursat"],
          upload_preset: "nhru5gzp",
        },
        function (error, result) {
          if (error) {
            reject(error);
            return error;
          }
          resolve(result);
          return result;
        }
      )
      .end(buffer);
  });
}

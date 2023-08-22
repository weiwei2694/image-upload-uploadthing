import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
    imageUploaderButton: f({ image: { maxFileSize: "1MB" } }).onUploadComplete(
        async ({ file }) => {
            console.log("file url", file.url);
        }
    ),
    imageUploaderDnD: f({ image: { maxFileSize: "4MB", maxFileCount: 2 } }).onUploadComplete(
        async ({ file }) => {
            console.log("file url", file.url);
        }
    ),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;

"use client";

import "@uploadthing/react/styles.css";
import { UploadButton } from "@uploadthing/react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Files {
    fileKey: string;
    fileName: string;
    fileSize: number;
    fileUrl: string;
    key: string;
    name: string;
    size: number;
    url: string;
}

const Button = () => {
    const [error, setError] = useState<Error>();
    const [files, setFiles] = useState<Files[]>([]);

    // uploadthing property
    const onClientUploadComplete = (res: Files[]) => {
        if (res.length <= 0) return;

        alert("Upload Completed");
        setFiles(res);
    };

    const onUploadError = (error: Error) => {
        if (!error) return;

        setFiles([]);
        setError(error);
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-start gap-10 p-24">
            {/* @ts-ignore */}
            <UploadButton
                endpoint="imageUploaderButton"
                onClientUploadComplete={onClientUploadComplete}
                onUploadError={onUploadError}
            />

            {/* Show Files or Error */}
            {files.length > 0 ? (
                <ul>
                    {files.map(({ url }) => (
                        <li key={url}>
                            <Link href={url} target="_blank">
                                {url}
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                error && <p className="text-red-500">{error.message}</p>
            )}
        </main>
    );
};

export default Button;

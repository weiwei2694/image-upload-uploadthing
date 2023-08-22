import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Next.js 13 | Image Upload",
    description: "how to upload image to server"
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={manrope.className}>
                <main className="max-w-4xl">{children}</main>
            </body>
        </html>
    );
}

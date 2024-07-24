import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/providers/convex-client-provider";
import { Toaster } from "@/components/ui/sonner";
import { Suspense } from "react";
import { Loading } from "@/components/auth/loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CollabOnline",
  description: "Collaborate in one Visual Workspace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <meta name="description" content="Collaborate in one Visual Workspace" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="CollabOnline" />
    <meta property="og:description" content="Collaborate in one Visual Workspace" />
    <meta property="og:image" content="https://i.postimg.cc/653yw6FF/Screenshot-2024-07-24-232003.png" />
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
        <ConvexClientProvider>
          <Toaster />
          {children}
        </ConvexClientProvider>
        </Suspense>
      </body>

    </html>
  );
}

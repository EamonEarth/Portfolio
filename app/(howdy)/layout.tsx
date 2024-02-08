import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "../../lib/utils";
import { ArrowRight, ChevronsLeftRight } from "lucide-react";
import TrackerProvider from "./components/TrackerProvider";
import MouseTracker from "./components/MouseTracker";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eamon Travers | ",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("bg-primary antialiased", inter.className)}>
        <Toaster />
        <TrackerProvider />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "@/app/globals.css";
import { NextUIProviders } from "@/app/Providers/NextUIProviders";
import { inter } from "@/app/fonts";
import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
  title: "Scale Africa",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProviders>
          <Navbar />
          {children}
        </NextUIProviders>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Anton } from "next/font/google";
import "./globals.css";
import MouseMove from "@/hooks/MouseMove";
import { Providers } from "@/app/providers";

const anton = Anton({
  variable: "--font-anton-sans",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Creative Brahmx",
  description: "A website created for the portfolio of a creative designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${anton.variable} antialiased`}>
        <MouseMove />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

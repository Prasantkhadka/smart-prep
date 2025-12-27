import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Mona_Sans } from "next/font/google";
import "./globals.css";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrepSmart",
  description:
    "An AI-powered platform to help you prepare for interviews efficiently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <body className={`${monaSans.className} antialiased pattern`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

import type { Metadata } from "next";
import { Sora, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/components/ConvexClientProvider";


const soraFont = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: "variable",                     
});
const spaceGroteskFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: "variable",
});

export const metadata: Metadata = {
  title: "AI Chat App",
  description: "A modern chat application built with Next.js and Convex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClientProvider>
      <html lang="en">
        <body
          className={`${soraFont.variable} ${spaceGroteskFont.variable} antialiased bg-gray-950 text-gray-300 font-body`}
      >
     
        {children}
        
      </body>
    </html>
    </ConvexClientProvider>
  );
}

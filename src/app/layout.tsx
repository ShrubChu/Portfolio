import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomHeader from "@/components/header";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hareign Casaclang",
  description: "Hareign's Lore",
};

export default function RootLayout({
  children, /* like a blank member variable, page.tsx gets slapped on*/
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-2xl mx-auto`}>

        <CustomHeader />


        {children}



      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Montserrat, Roboto } from "next/font/google";
import "../../globals.css"
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/Footer";
import { inter } from "@/config/fonts";








export const metadata: Metadata = {
  title: "Home Page",
  description: "cleaning services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <div className="min-h-screen bg-jordy-blue-25">
         <Navbar />
        {children}
       <Footer />
  
         </div>
       
        </body>
    </html>
  );
}

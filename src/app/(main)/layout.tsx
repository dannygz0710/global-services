import type { Metadata } from "next";
import { Inter, Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/Footer";






const roboto = Montserrat({
  weight: '400', subsets: ['latin'], })

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
      <body className={roboto.className}>
         <div className="min-h-screen">
         <Navbar />
        {children}
       <Footer />
  
         </div>
       
        </body>
    </html>
  );
}

import { auth } from "@/auth.config";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/navbar";
import { redirect } from "next/navigation";
import "../../globals.css"





export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  console.log(session);
  if (!session?.user) {
    redirect("/auth/login");
  }

  return (
    <html lang="en">
      <body className=" min-h-screen">
         <Navbar />
        {children}
       <Footer />
  
         
       
        </body>
    </html>
  );
}



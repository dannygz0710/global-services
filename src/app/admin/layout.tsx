import { auth } from "@/auth.config";
import { redirect } from "next/navigation";




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

  return <div className="lg:mt-40">{children}</div>;
}

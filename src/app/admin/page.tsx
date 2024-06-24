import prisma from "@/lib/prisma";
import { GetElementGrid } from "./components/GetElementGrid";
import "animate.css";


export const metadata = {
  title: "User List",
  description: "Admin Page",
};

export default async function AdminPage() {
  const users = await prisma.form.findMany({ orderBy: { createdAt: "asc" } });

  return (
    <div className="animate__animated animate__fadeIn mt-10">
      <GetElementGrid users={users} />
    </div>
  );
}

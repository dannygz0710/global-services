"use client";
import { Form } from "@prisma/client";
import { GetElementItem } from "./GetElementItem";
import { IoTrashOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { deleteAllTasks } from "@/helpers/task";
import { LogoutButton } from "./LogoutButton";
import "animate.css";

interface Props {
  users?: Form[];
}

export const GetElementGrid = ({ users = [] }: Props) => {
  const router = useRouter();

  const complete = users.map((item) => {
    return;
    item;
  });

  const handleClick = () => {
    deleteAllTasks(complete);
    router.refresh();
  };
  return (
    <section>
      <div className="   m-auto container max-w-2xl ">
        {users.map((user) => (
          <GetElementItem key={user.id} user={user} />
        ))}
      </div>
      {complete.length === 0 && (
        <h1 className="text-3xl text-center text-jordy-blue-400 mb-8">
          No User
        </h1>
      )}
      <div className=" flex  justify-center gap-10 my-20 animate__animated animate__fadeIn">
        <button
          onClick={handleClick}
          type="button"
          className="flex  rounded  bg-danger py-2 px-4 text-white hover:bg-danger2 transition-all"
        >
          <IoTrashOutline />
          Delete
        </button>
        <LogoutButton />
      </div>
    </section>
  );
};

"use client";
import { Form } from "@prisma/client";
import styles from "./GetElementItem.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { updateTask } from "@/helpers/task";


interface Props {
  user: Form;
};


export const GetElementItem = ({ user }: Props) => {
  const router = useRouter();
  const handleOnClick = () => {
    updateTask(user.id, user.complete);
    router.refresh();
  };

  return (
    <div
      onClick={handleOnClick}
      className={user.complete ? styles.userDone : styles.userPending}
    >
      <Link href={`/admin/${user.id}`}>
        <div className="flex justify-around gap-20 text-jordy-blue-900">
          <h3 className="capitalize">
            <span>Name: </span>
            {user.name}
          </h3>
          <h3>
            <span>Phone: </span>
            {user.phone}
          </h3>
        </div>
      </Link>
    </div>
  );
};

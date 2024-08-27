"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: Props) => {
  const pathName = usePathname();
  return (
    <Link
      href={path}
      className={` ${"text-jordy-blue-300  hover:text-jordy-blue-600 cursor-pointer hover:underline py-5"} ${
        pathName === path && "text-jordy-blue-900 "
      }} `}
    >
      {text}
    </Link>
  );
};

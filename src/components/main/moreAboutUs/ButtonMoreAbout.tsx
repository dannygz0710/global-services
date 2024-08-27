"use client";

import { useRouter } from "next/navigation";

export const ButtonMoreAbout = () => {
  const router = useRouter();
  return (
    <button
      className="bg-transparent border border-jordy-blue-200 text-jordy-blue-200 font-semibold py-2 px-4 rounded focus:outline-none hover:bg-white hover:text-jordy-blue-700 hover:border-blue-500 transition duration-300 ease-in-out"
      onClick={() => {
        router.push("/general/about");
      }}
    >
      About Us
    </button>
  );
};

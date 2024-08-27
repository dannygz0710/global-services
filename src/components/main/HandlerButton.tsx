"use client";
import { useRouter } from "next/navigation";

export const HandlerButton = () => {
  const router = useRouter();
  return (
    <div className="m-20 flex  justify-center gap-3 ">
      <button
        className="  bg-jordy-blue-200 hover:bg-jordy-blue-300 text-jordy-blue-800  py-2 px-4 rounded"
        onClick={() => {
          router.push("/general/contact");
        }}
      >
        Free Quote
      </button>

      <button
        className=" bg-jordy-blue-200 hover:bg-jordy-blue-300  text-jordy-blue-800  ml-5 py-2 px-4 rounded"
        onClick={() => {
          router.push("/general/services");
        }}
      >
        Services
      </button>
    </div>
  );
};

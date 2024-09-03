"use client";
import { useRouter } from "next/navigation";

export const HandlerButton = () => {
  const router = useRouter();
  return (
    <div className="m-20 flex  justify-center gap-7 ">
      <button
       className="border border-jordy-blue-500 text-jordy-blue-600 hover:bg-blue-500   hover:bg-jordy-blue-50 font-semibold py-2 px-6 rounded"
    
     
     
        onClick={() => {
          router.push("/general/contact");
        }}
      >
        Free Quote
      </button>

      <button
        className="border border-jordy-blue-500 text-jordy-blue-600 hover:bg-blue-500   hover:bg-jordy-blue-50 font-semibold py-2 px-6 rounded"
        onClick={() => {
          router.push("/general/services");
        }}
      >
        Services
      </button>
    </div>
  );
};

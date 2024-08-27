"use client";
import { useRouter } from "next/navigation";

interface Props {
  className: string;
};

export const NavigationButtons = ({ className }:Props) => {
  const router = useRouter();
  return (
    <div className={className}>
      <div>
        <button
          className="bg-transparent border border-jordy-blue-600 text-jordy-blue-600 font-semibold py-2 px-10 rounded focus:outline-none hover:bg-white hover:text-jordy-blue-700 hover:border-blue-500 transition duration-300 ease-in-out"
          onClick={() => {
            router.push("/general/about");
          }}
        >
          About Us
        </button>
      </div>
      <div>
        <button
          className="bg-transparent border border-jordy-blue-600 text-jordy-blue-600 font-semibold py-2 px-10 rounded focus:outline-none hover:bg-white hover:text-jordy-blue-700 hover:border-blue-500 transition duration-300 ease-in-out"
          onClick={() => {
            router.push("/general/services");
          }}
        >
          Services
        </button>
      </div>

      <div>
        <button
          className="bg-transparent border border-jordy-blue-600 text-jordy-blue-600 font-semibold py-2 px-10 rounded focus:outline-none hover:bg-white hover:text-jordy-blue-700 hover:border-blue-500 transition duration-300 ease-in-out"
          onClick={() => {
            router.push("/general/contact");
          }}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

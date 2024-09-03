import Link from "next/link";

export const GoBackButton = () => {
  return (
    <Link
      href="/admin"
      className=" border border-jordy-blue-500 text-jordy-blue-500 font-semibold py-2 px-6 rounded focus:outline-none hover:bg-jordy-blue-200  hover:border-blue-500 transition duration-300 ease-in-out"
    >
      Go Back
    </Link>
  );
};

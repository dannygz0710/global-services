import Link from "next/link";

export const GoBackButton = () => {
  return (
    <Link
      href="/admin"
      className="w-32 bg-transparent border border-jordy-blue-500 text-jordy-blue-500 font-semibold py-2 px-4 rounded focus:outline-none hover:bg-jordy-blue-100 hover:text-jordy-blue-700 hover:border-blue-500 transition duration-300 ease-in-out"
    >
      Go Back
    </Link>
  );
};

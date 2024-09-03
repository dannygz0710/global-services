"use client";
import { logout } from "@/actions/logout";
import { CiLogout } from "react-icons/ci";

export const LogoutButton = () => {
  return (
    <button
      className=" px-4 py-3 flex items-center space-x-4 text-jordy-blue-600  border  border-jordy-blue-400 hover:bg-jordy-blue-100 rounded"
      onClick={() => logout()}
    >
      <CiLogout />
      Logout
    </button>
  );
};

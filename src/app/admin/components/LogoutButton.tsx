"use client"
import { logout } from "@/actions/logout";
import { CiLogout } from "react-icons/ci";

export const LogoutButton = () => {
  return (
    <button 
    className="px-4 py-3 flex items-center space-x-4 rounded-md text-jordy-blue-600 group"
    onClick={() => logout()}
    >
        <CiLogout />
        <span 
        className="group-hover:text-jordy-blue-950 font-semibold">Logout</span>
      </button>
  )
}

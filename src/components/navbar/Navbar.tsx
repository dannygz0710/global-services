"use client";
import { useState } from "react";
import { NavItem } from "./components/NavItem";
import { TogleButton } from "./components/TogleButton";
import { MobileNavigation } from "./components/MobileNavigation";
import Image from "next/image";
import "animate.css";
import Link from "next/link";



const navItems = [
  { path: "/", label: "Home" },
  { path: "/general/about", label: "About" },
  { path: "/general/services", label: "Services" },
  { path: "/general/contact", label: "Contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <nav className="bg-jordy-blue-50 p-5  animate__animated animate__fadeIn">
        <div className=" mx-auto animate__animated animate__fadeIn">
          <div className="flex items-center justify-between animate__animated animate__fadeIn">
            {/* <!-- Logo or Branding --> */}
            <Link 
            href="/"
            style={{ maxWidth: "75px", height: "auto" }}>
              <Image
                src="/assets/thumbnail.png"
                alt="Thumbnail"
                priority
                width={900} 
                height={475} 
              />
            </Link>

            <NavItem navItems={navItems} />

            {/* <!-- Mobile Navigation Toggle Button --> */}
            <TogleButton setIsOpen={setIsOpen} isOpen={isOpen} />
          </div>

          {/* <!-- Mobile Navigation Menu --> */}
          <MobileNavigation isOpen={isOpen} navItems={navItems} />
        </div>
      </nav>
    </main>
  );
};

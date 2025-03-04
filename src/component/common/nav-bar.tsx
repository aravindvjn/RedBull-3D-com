import Link from "next/link";
import React from "react";

const NavBar = () => {
  const linkClasses =
    "sm:hover:bg-red-500/20 border border-transparent hover:border-white/40 sm:rounded-full  sm:w-[120px] text-center sm:h-10 duration-200 ease-in-out sm:hover:text-white center";
  return (
    <div
      className="absolute ease-in-out sm:rounded-full sm:bg-blue-900/20 sm:border border-white/30 backdrop-blur-lg w-full sm:w-fit z-10 
    left-1/2 top-[10px] text-[13px] sm:text-[14px] -translate-x-1/2 text-white flex justify-center overflow-hidden"
    >
      <ul className="flex items-center gap-[10px] sm:gap-0 justify-between ">
        <Link className={linkClasses} href={"/"}>
          Home
        </Link>
        <Link className={linkClasses} href={"/#f1-engine"}>
          F1 Engine
        </Link>
        <Link className={linkClasses} href={"/#drink"}>
          Drinks
        </Link>
        <Link className={linkClasses} href={"/#about"}>
          About
        </Link>
        <Link className={linkClasses} href={"mailto:aravind284479@gmail.com"}>
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;

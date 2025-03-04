import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="absolute rounded-full bg-blue-900/20 border border-white/30 backdrop-blur-lg w-fit z-10 
    px-[30px] py-[10px] left-1/2 top-[10px] text-[14px] -translate-x-1/2 text-white flex justify-center">
      <ul className="flex items-center  gap-[20px] md:gap-[30px]">
        <Link href={'/'}>Home</Link>
        <Link href={'/#drink'}>Drinks</Link>
        <Link href={'/#drink'}>Events</Link>
        <Link href={'/#about'}>About</Link>
        <Link href={'/#about'}>Contact</Link>
      </ul>
    </div>
  );
};

export default NavBar;

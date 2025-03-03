import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="absolute z-10 p-[10px] left-0 top-0 w-full text-white flex justify-center">
      <ul className="flex items-center gap-[20px]">
        <Link href={'/'}>Home</Link>
        <Link href={'/#drink'}>Drinks</Link>
        <Link href={'/#about'}>About</Link>
      </ul>
    </div>
  );
};

export default NavBar;

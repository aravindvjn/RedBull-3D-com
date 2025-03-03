import Image from "next/image";
import React from "react";

const HeroText = () => {
  return (
    <>
    <button className="absolute right-1/2 translate-1/2 md:right-[120px] md:top-[40px] bottom-[40px] md:bottom-auto bg-red-500  px-4 py-2 rounded cursor-pointer hover:bg-red-700 text-white z-10 shadow-md shadow-black">Contact Developer</button>
      <div className="absolute left-[30px] top-[90px] md:top-[30px] font-extrabold font-bebas opacity-60 text-white/30">
        <p className="text-[180px] leading-[150px]  md:text-[280px] stroke-white  md:leading-tight">RED BULL</p>
        <p className="text-[80px] md:text-[160px] leading-tight">Racing</p>
      </div>
      <Image
        src={"/images/red-bull.png"}
        height={500}
        width={500}
        className="absolute right-10 hidden md:flex bottom-10 w-[400px]"
        alt=""
      />
      <p className="italic absolute bottom-[220px] md:bottom-[60px] left-[50px] text-white text-[20px] md:text-[30px]">"Red Bull gives you wings."</p>
    </>
  );
};

export default HeroText;

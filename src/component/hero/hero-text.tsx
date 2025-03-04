import Image from "next/image";
import React from "react";
import ContactDevButton from "./contact-dev-button";
const HeroText = () => {
  return (
    <>
      <ContactDevButton />
      <div className="absolute left-[30px] top-[90px] md:top-[30px] font-extrabold font-bebas opacity-60 text-white/30">
        <p className="text-[180px] leading-[150px]  md:text-[280px] stroke-white  md:leading-tight">
          RED BULL
        </p>
        <p className="text-[80px] md:text-[160px] leading-tight">Racing</p>
      </div>
      <Image
        src={"/images/red-bull.png"}
        height={500}
        width={500}
        className="absolute right-10 hidden md:flex bottom-10 w-[400px]"
        alt=""
      />
      <p className="italic absolute bottom-[120px] md:bottom-[60px] left-[50px] text-white text-[20px] md:text-[30px]">
        "Red Bull gives you wings."
      </p>
    </>
  );
};

export default HeroText;

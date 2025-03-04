import Image from "next/image";
import React from "react";
import ContactDevButton from "./contact-dev-button";
import { WavyPaths } from "../common/wavy-lines";
const HeroText = () => {
  return (
    <>
      <WavyPaths />
      <ContactDevButton />
      <div className="absolute left-[30px] top-[90px] md:top-[30px] font-extrabold font-bebas opacity-60 text-white/30">
        <p className="text-[180px] leading-[150px]  md:text-[280px] stroke-white  md:leading-tight">
          RED BULL
        </p>
        <p className="text-[80px] md:text-[160px] leading-tight">Racing</p>
      </div>
      <Image
        src={"/images/f1.png"}
        height={500}
        width={500}
        className="absolute sm:right-10 flex bottom-2 md:-bottom-32 w-[400px]"
        alt=""
      />
      <p className="italic absolute bottom-[120px] md:bottom-[60px] left-[50px] text-white text-[20px] md:text-[30px]">
      &quot;Red Bull gives you wings.&quot;
      </p>
    </>
  );
};

export default HeroText;

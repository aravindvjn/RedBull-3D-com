import Image from "next/image";
import React from "react";
import ContactDevButton from "./contact-dev-button";
import { WavyPaths } from "../common/wavy-lines";
import Headings from "./headings";
const HeroText = () => {
  return (
    <>
      <WavyPaths />
      <ContactDevButton />
      <Headings />

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

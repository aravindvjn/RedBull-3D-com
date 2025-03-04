import Link from "next/link";
import React from "react";

const ContactDevButton = () => {
  return (
    <Link href={'mailto:aravind284479@gmail.com'} className="absolute right-1/2 translate-1/2 md:right-[120px] md:top-[40px] bottom-[40px] md:bottom-auto bg-red-600  px-4 py-2 rounded cursor-pointer hover:bg-red-700 text-white z-10 shadow-md shadow-black">
      Contact Developer
    </Link>
  );
};

export default ContactDevButton;

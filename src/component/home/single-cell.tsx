import Image from "next/image";
import React from "react";

const SingleCell = ({
  description,
  image,
  name,
  year,
}: {
  year?: number;
  name: string;
  description: string;
  image: string;
}) => {

  return (
    <div className="rounded-lg single-car border border-white/50 overflow-hidden text-center w-[200px] aspect-square md:w-[400px]  sm:w-[200px] ">
      <Image
        className="h-full image object-cover w-full"
        height={500}
        width={500}
        alt={name}
        src={image}
      />

      <p className="car-name absolute -translate-x-1/2 left-1/2 bottom-0 p-3 text-xl font-bold ">
        {name} {year && `(${year})`}
      </p>
      
      <p className="description">{description}</p>
    </div>
  );
};

export default SingleCell;

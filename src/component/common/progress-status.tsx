import React from "react";

const ProgressStatus = ({ progress }: { progress: number }) => {
  return (
    <div className="absolute z-40 bg-black/40 backdrop-blur-md flex justify-center items-center h-full  w-full">
      <div className="relative h-10 w-2/3 md:w-1/3 rounded shadow-md shadow-black/50 overflow-hidden bg-black/20 backdrop-blur-lg">
        <div className="absolute left-1/2 -translate-x-1/2 text-center font-bold text-[30px] leading-tight text-white">
          LOADING...
        </div>
        <div
          style={{
            backgroundColor: "red",
            height: "100%",
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
};

export default ProgressStatus;

"use client";
import React, { useEffect, useRef, useState } from "react";
import { redBullProducts } from "@/lib/data/red-bull-drink";
import SingleCell from "./single-cell";

const DrinksShowCase = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isReverse, setIsReverse] = useState<boolean>(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollAmount = 2;
    let interval: NodeJS.Timeout;

    const startScrolling = () => {
      interval = setInterval(() => {
        if (!isPaused) {
          if (isReverse) {
            scrollContainer.scrollLeft -= scrollAmount;
          } else {
            scrollContainer.scrollLeft += scrollAmount;
          }

          if (
            scrollContainer.scrollLeft + scrollContainer.clientWidth >=
            scrollContainer.scrollWidth
          ) {
            setIsReverse(true);
          }
          if (scrollContainer.scrollLeft <= 0) {
            setIsReverse(false);
          }
        }
      }, 30);
    };

    startScrolling();

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      ref={scrollRef}
      className="w-full overflow-x-scroll scrollbar-hide bg-gray-900"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex w-max p-5 center gap-[20px]">
        {redBullProducts.map((car, index) => (
          <SingleCell {...car} key={index} />
        ))}
      </div>
    </div>
  );
};

export default DrinksShowCase;

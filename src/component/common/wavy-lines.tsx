"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function WavyPaths() {
  const root = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    if (!root.current) return;

    const paths = root.current.querySelectorAll(".wavy-path");

    gsap.set(paths, {
      strokeDasharray: "300, 2000",
      strokeDashoffset: 300,
    });

    gsap.to(paths, {
      strokeDashoffset: 2500,
      duration: 0.5, 
      repeat: -1,
      stagger: { each: 0.5, from: "random" }, 
      ease: "none",
    });

    gsap.to(paths, {
      autoAlpha: 0, 
      duration: 1,
      repeat: -1,
      yoyo: true,
      stagger: { each: 0.5, from: "random" },
    });
  });

  useEffect(() => {
    if (!root.current) return;

    const paths = root.current.querySelectorAll(".wavy-path");

    paths.forEach((path, i) => {
      gsap.to(path, {
        y: (index) => Math.sin(index + i) * 15,
        scale: (index) => 1 + Math.sin(index + i) * 0.2,
        opacity: (index) => 0.6 + Math.sin(index + i) * 0.4,
        duration: 1.5, 
        repeat: -1,
        ease: "sine.inOut",
        yoyo: true,
        delay: Math.random() * 1, 
      });
    });
  }, []);

  return (
    <div className="absolute flex items-center justify-center w-screen h-screen overflow-hidden">
      <svg
        ref={root}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 1242 308"
        width={1242}
        height={308}
        className="pointer-events-none rotate-[140deg] text-white/30 scale-200"
      >
        {[...Array(8)].map((_, i) => (
          <path
            key={i}
            stroke="currentColor"
            className="wavy-path"
            strokeLinecap="round"
            strokeWidth="12"
            d={`M20 ${100 + i * 20} 
              C150 ${90 + i * 10}, 300 ${110 + i * 5}, 450 ${100 + i * 8} 
              S750 ${90 + i * 5}, 900 ${110 + i * 8}
              S1100 ${120 + i * 5}, 1240 ${100 + i * 5}`}
          />
        ))}
      </svg>
    </div>
  );
}

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const RedBullCar = () => {
  return (
    <div
      id="f1-engine"
      className="relative h-screen w-full bg-black text-white flex items-center justify-center overflow-y-scroll"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl p-6">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <Image
            src="/images/redbull-car.png"
            alt="Red Bull Racing Car"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-red-500">
            Red Bull Racing Car Features
          </h1>
          <ul className="list-disc list-inside space-y-3 text-[14px] md:text-lg">
            <li>
              Aerodynamic Efficiency – Designed by Adrian Newey, featuring an
              ultra-low drag concept.
            </li>
            <li>
              Powerful Honda Engine – High-performance RBPT-Honda power unit for
              peak efficiency.
            </li>
            <li>
              Lightweight Carbon Fiber Body – Enhances speed and downforce
              stability.
            </li>
            <li>
              DRS System – Drag Reduction System helps in overtaking with
              minimal resistance.
            </li>
            <li>
              Advanced Suspension – Provides superior handling and cornering
              capabilities.
            </li>
            <li>
              Hybrid Turbo System – Maximizes power while maintaining fuel
              efficiency.
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default RedBullCar;

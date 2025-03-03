"use client";
import { Canvas, useThree } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { RedBullF1Model } from "../model/red-bull-f1";
import { RedBullDrink } from "../model/red-bull-drink";

const ResponsiveCamera = () => {
  const { camera, size } = useThree<any>();
  const [fov, setFov] = useState(35);

  useEffect(() => {
    if (size.width < 768) {
      setFov(50);
      camera.position.set(300, 200, 240);
    } else {
      setFov(35);
      camera.position.set(240, 180, 230);
    }
    camera.fov = fov;
    camera.updateProjectionMatrix();
  }, [size.width, camera, fov]);

  return null;
};

const DrinkCanvasViewer = () => {
  return (
    <Canvas className="absolute flex min-w-dvw justify-center items-center">
      <ambientLight intensity={1} />
      <Environment preset="studio" />
      <RedBullDrink scale={[0.45, 0.45, 0.45]} />
      <ContactShadows
        opacity={0.8} 
        scale={200} 
        blur={2.5} 
        far={20} 
        resolution={1024} 
      />

      <OrbitControls enableZoom={false} enableRotate={false}  />
      <ResponsiveCamera />
    </Canvas>
  );
};

export default DrinkCanvasViewer;

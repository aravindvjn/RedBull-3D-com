"use client";
import { Canvas, useThree } from "@react-three/fiber";
import React, { useEffect, useCallback} from "react";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { RedBullF1Model } from "../model/red-bull-f1";
import * as THREE from "three";

const INITIAL_CAMERA_POSITION = [60, 65, 50];

const ResponsiveCamera = () => {
  const { camera } = useThree<any>();

  const updateCamera = useCallback(() => {
    const scale = Math.max(Math.min(1000 / window.innerWidth, 15), 1.7);
    camera.position.set(
      INITIAL_CAMERA_POSITION[0] * scale,
      INITIAL_CAMERA_POSITION[1] * scale,
      INITIAL_CAMERA_POSITION[2] * scale
    );
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    camera.updateProjectionMatrix();
  }, [camera]);

  useEffect(() => {
    updateCamera();

    window.addEventListener("resize", updateCamera);

    return () => window.removeEventListener("resize", updateCamera);
  }, [updateCamera]);

  return null;
};

const ModelViewer = () => {
  return (
    <Canvas className="absolute flex min-w-dvw justify-center items-center">
      <ambientLight intensity={1} />
      <Environment preset="studio" />
      <RedBullF1Model scale={[1, 1, 1]} />
      <ContactShadows
        opacity={0.8}
        scale={200}
        blur={2.5}
        far={20}
        resolution={1024}
      />
      <OrbitControls enableZoom={false} enableRotate={false} />
      <ResponsiveCamera />
    </Canvas>
  );
};

export default ModelViewer;

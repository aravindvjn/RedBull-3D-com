import * as THREE from "three";
import React, { JSX, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";
import { GLTFResultDrink } from "./type";


export function RedBullDrink(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/redbull_can.glb") as GLTFResultDrink;

  const canRef = useRef<THREE.Object3D>(null);

  useFrame(() => {
    if (canRef.current) {
      canRef.current.position.y = -200;
      canRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group {...props} dispose={null}>
      <group ref={canRef} name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="redbull_canfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="RootNode">
              <group
                name="Light"
                position={[407.625, 590.386, -100.545]}
                rotation={[1.89, 0.881, -2.045]}
                scale={100}
              >
                <group name="Object_4" rotation={[Math.PI / 2, 0, 0]}>
                  <group name="Object_5" />
                </group>
              </group>
              <group
                name="Camera"
                position={[735.889, 495.831, 692.579]}
                rotation={[Math.PI, 0.756, 2.68]}
                scale={100}
              >
                <group name="Object_7" />
              </group>
              <group name="pCylinder7" scale={[4.766, 13.402, 4.766]}>
                <mesh
                  name="pCylinder7_aiStandardSurface1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCylinder7_aiStandardSurface1_0.geometry}
                  material={materials.aiStandardSurface1}
                />
              </group>
              <group name="pCylinder6" scale={[12.498, 13.402, 8.999]}>
                <mesh
                  name="pCylinder6_aiStandardSurface1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCylinder6_aiStandardSurface1_0.geometry}
                  material={materials.aiStandardSurface1}
                />
              </group>
              <group name="pCylinder5" scale={13.402}>
                <mesh
                  name="pCylinder5_aiStandardSurface1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCylinder5_aiStandardSurface1_0.geometry}
                  material={materials.aiStandardSurface1}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/redbull_can.glb");

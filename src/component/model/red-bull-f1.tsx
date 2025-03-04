import * as THREE from "three";
import React, { JSX, useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { GLTFResultF1 } from "./type";

export function RedBullF1Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/red_bull_racing_but_with_detached_tyres.glb"
  ) as GLTFResultF1;

  const [time, setTime] = useState(0);

  const wheelRefs = useRef<THREE.Object3D[]>([]);
  const carRef = useRef<THREE.Object3D>(null);

  useFrame(() => {
    if (wheelRefs) {
      wheelRefs.current.forEach((wheel) => {
        wheel.rotation.z += 0.2;
      });
    }
  });

  useFrame((state, delta) => {

    if (!carRef.current) return;

    if (carRef.current.position.z < -10) {
      carRef.current.position.z += 30;
    } else {
      setTime((prev) => prev + delta);

      carRef.current.position.z = Math.sin(time) * 5;
      carRef.current.position.x = Math.sin(time) * 10;
    }
  });

  useEffect(() => {
    if (!carRef.current) return;
    carRef.current.position.z = -700;
    carRef.current.visible = true;
  }, []);

  return (
    <group {...props} dispose={null}>
      <group visible={false} ref={carRef} name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="Red_Bull_detached_tyresfbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="RootNode">
              <group name="RedBull_V2_lp" rotation={[0, Math.PI / 2, 0]}>
                <group name="Object_4" position={[-43.277, 27.929, 6.613]}>
                  <mesh
                    name="RedBull_V2_lp_Formula_1_Car_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.RedBull_V2_lp_Formula_1_Car_0.geometry}
                    material={materials.Formula_1_Car}
                  />
                </group>
              </group>
              <group
                ref={(el) => {
                  if (el && !wheelRefs.current.includes(el)) {
                    wheelRefs.current.push(el);
                  }
                }}
                name="RearRightTyre"
                position={[-35.921, 15.323, -92.027]}
                rotation={[0, Math.PI / 2, 0]}
              >
                <group name="Object_7" position={[-135.304, 12.606, 42.535]}>
                  <mesh
                    name="RearRightTyre_Formula_1_Car_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.RearRightTyre_Formula_1_Car_0.geometry}
                    material={materials.Formula_1_Car}
                  />
                </group>
              </group>
              <group
                ref={(el) => {
                  if (el && !wheelRefs.current.includes(el)) {
                    wheelRefs.current.push(el);
                  }
                }}
                name="FrontRightTyre"
                position={[-38.009, 15.323, 74.256]}
                rotation={[0, Math.PI / 2, 0]}
              >
                <group name="Object_10" position={[30.979, 12.606, 44.623]}>
                  <mesh
                    name="FrontRightTyre_Formula_1_Car_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.FrontRightTyre_Formula_1_Car_0.geometry}
                    material={materials.Formula_1_Car}
                  />
                </group>
              </group>
              <group
                ref={(el) => {
                  if (el && !wheelRefs.current.includes(el)) {
                    wheelRefs.current.push(el);
                  }
                }}
                name="FrontLeftTyre"
                position={[38.009, 15.323, 74.256]}
                rotation={[0, Math.PI / 2, 0]}
              >
                <group name="Object_13" position={[30.979, 12.606, -31.396]}>
                  <mesh
                    name="FrontLeftTyre_Formula_1_Car_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.FrontLeftTyre_Formula_1_Car_0.geometry}
                    material={materials.Formula_1_Car}
                  />
                </group>
              </group>
              <group
                ref={(el) => {
                  if (el && !wheelRefs.current.includes(el)) {
                    wheelRefs.current.push(el);
                  }
                }}
                name="RearLeftTyre"
                position={[35.921, 15.323, -92.027]}
                rotation={[0, Math.PI / 2, 0]}
              >
                <group name="Object_16" position={[-135.304, 12.606, -29.307]}>
                  <mesh
                    name="RearLeftTyre_Formula_1_Car_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.RearLeftTyre_Formula_1_Car_0.geometry}
                    material={materials.Formula_1_Car}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/red_bull_racing_but_with_detached_tyres.glb");

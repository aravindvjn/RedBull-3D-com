import * as THREE from 'three'
import { GLTF } from 'three-stdlib';

export type GLTFResultF1 = GLTF & {
    nodes: {
      RedBull_V2_lp_Formula_1_Car_0: THREE.Mesh;
      RearRightTyre_Formula_1_Car_0: THREE.Mesh;
      FrontRightTyre_Formula_1_Car_0: THREE.Mesh;
      FrontLeftTyre_Formula_1_Car_0: THREE.Mesh;
      RearLeftTyre_Formula_1_Car_0: THREE.Mesh;
    };
    materials: {
      Formula_1_Car: THREE.MeshStandardMaterial;
    };
  };


  export type GLTFResultDrink = GLTF & {
    nodes: {
      pCylinder7_aiStandardSurface1_0: THREE.Mesh;
      pCylinder6_aiStandardSurface1_0: THREE.Mesh;
      pCylinder5_aiStandardSurface1_0: THREE.Mesh;
    };
    materials: {
      aiStandardSurface1: THREE.MeshPhysicalMaterial;
    };
  };
  
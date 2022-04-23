/**
 * /*
 * Auto-generated by: https://github.com/pmndrs/gltfjsx
 * author: ONESEC (https://sketchfab.com/ONESEC)
 * license: COPYRIGHT TO ONESEC
 * source: https://sketchfab.com/3d-models/menpo-orange-8367d291414d4238b5ddb6e6455f49a7
 * title: Menpo-Orange
 *
 * @format
 */

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function MenpoCamoOrangeModel({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    "/threeModel/Menpo/camo-orange/scene.gltf"
  );
  return (
    <group
      dispose={null}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -2.5, 0]}
      scale={0.11}
      ref={group}
      {...props}
    >
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.screwcolor128128128}
      />
      <mesh
        geometry={nodes.Object_3.geometry}
        material={materials["a-aGee3aRealogoptc-metallic-gold255255135"]}
      />
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials["a-aGee3aRealogoaPeptc-painted-red25500_1"]}
      />
      <mesh
        geometry={nodes.Object_5.geometry}
        material={materials["a-aGee3aRealogoaPeptc-metallic-gold255255135"]}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials["a-aGee3aRealogoptc-painted-red25500_1"]}
      />
      <mesh
        geometry={nodes.Object_7.geometry}
        material={materials.Paint_Textured_White}
      />
      <mesh
        geometry={nodes.Object_8.geometry}
        material={materials["pbc1-2ptc-painted-green02550"]}
      />
      <mesh
        geometry={nodes.Object_9.geometry}
        material={materials.Paint_Textured_Black}
      />
      <mesh
        geometry={nodes.Object_10.geometry}
        material={materials.Paint_Metallic_Orange_peel_Amber}
      />
      <mesh
        geometry={nodes.Object_11.geometry}
        material={materials.Paint_Metallic_Orange_peel_Dark_Cool_Grey}
      />
      <mesh geometry={nodes.Object_12.geometry} material={materials.material} />
      <mesh
        geometry={nodes.Object_13.geometry}
        material={materials.Paint_Gloss_Yellow_1}
      />
      <mesh
        geometry={nodes.Object_14.geometry}
        material={materials.Paint_Gloss_Orange_7}
      />
      <mesh
        geometry={nodes.Object_15.geometry}
        material={materials.Paint_Gloss_Orange_7}
      />
      <mesh
        geometry={nodes.Object_16.geometry}
        material={materials.Paint_Gloss_Orange_7}
      />
      <mesh
        geometry={nodes.Object_17.geometry}
        material={materials.Paint_Gloss_Orange_7}
      />
      <mesh
        geometry={nodes.Object_18.geometry}
        material={materials.Paint_Gloss_Orange_7}
      />
    </group>
  );
}

useGLTF.preload("/threeModel/Menpo/camo-orange/scene.gltf");
/**
 * /*
 * Auto-generated by: https://github.com/pmndrs/gltfjsx
 * author: ONESEC (https://sketchfab.com/ONESEC)
 * license: COPYRIGHT TO ONESEC
 * source: https://sketchfab.com/3d-models/menpo-red-07cded7ae8cd4c0c88bfbed25378c346
 * title: Menpo-Red
 *
 * @format
 */

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function MenpoRedModel({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/threeModel/Menpo/red/scene.gltf");
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
        material={materials["a-aGee3aRealogoaPeptc-metallic-gold255255135"]}
      />
      <mesh
        geometry={nodes.Object_3.geometry}
        material={materials["glassptc-ceramic255255242"]}
      />
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials["a-aGee3aRealogoptc-metallic-gold255255135"]}
      />
      <mesh
        geometry={nodes.Object_5.geometry}
        material={materials["a-aGee3aRealogoptc-painted-red25500_1"]}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials["1-8color128128128"]}
      />
      <mesh
        geometry={nodes.Object_7.geometry}
        material={materials["1-8color128128128"]}
      />
      <mesh
        geometry={nodes.Object_8.geometry}
        material={materials["a-aGee3aRealogoaPeptc-painted-red25500_1"]}
      />
      <mesh
        geometry={nodes.Object_9.geometry}
        material={materials["back1-2color128128128"]}
      />
      <mesh
        geometry={nodes.Object_10.geometry}
        material={materials.glasscolor128128128}
      />
      <mesh
        geometry={nodes.Object_11.geometry}
        material={materials.Anodized_Aluminum_Polished_Blue_4}
      />
      <mesh
        geometry={nodes.Object_12.geometry}
        material={materials.Anodized_Aluminum_Polished_Blue_4}
      />
      <mesh
        geometry={nodes.Object_13.geometry}
        material={materials.Anodized_Aluminum_Brushed_90X_Purple_2}
      />
    </group>
  );
}

useGLTF.preload("/threeModel/Menpo/red/scene.gltf");

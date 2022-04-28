/** @format */

import { Environment, OrbitControls, Loader } from "@react-three/drei";
import { Suspense } from "react";
import { VirtualSceneContainer, VirtualCanvas } from "./virtual-scene.styles";
import { glassesModel } from "../glassesCanvasModel/glassesCanvasToMaps";
import { transferClassesTypeName } from "../../utils/transferGlassesTypeName";

const VirtualScene = ({
  type,
  color,
  view3d,
  currentEnvironment,
  onTimeout,
}) => {
  const { curType, curColor } = transferClassesTypeName({ type, color });
  const CurGlassesModel = glassesModel[curType][curColor];

  return (
    <VirtualSceneContainer>
      <Suspense fallback={null}>
        {onTimeout ? (
          <VirtualCanvas camera={{ position: [1, 0, 0], fov: 35 }}>
            <CurGlassesModel view3d={view3d} />
            <Environment
              background
              preset={currentEnvironment}
              far={1000}
              frames={Infinity}
              resolution={256}
            />
            <OrbitControls />
          </VirtualCanvas>
        ) : (
          <div />
        )}
      </Suspense>
      <Loader barStyles={{ width: "100%" }} />
    </VirtualSceneContainer>
  );
};

export default VirtualScene;

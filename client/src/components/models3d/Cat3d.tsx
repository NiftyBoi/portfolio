import { OrbitControls, useGLTF } from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import {CardCat3d} from "./cardmodels3d/cardCat3d";

const Cat3d = () => {
    const { scene , animations} = useGLTF('/bananacat.glb') as any;


return(
    <div>
        <Canvas orthographic camera={{ zoom: 230, position: [0, 0, 5] }} style={{ height: '585px', width: '400px' }}>
            <ambientLight intensity={1.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <OrbitControls enablePan={false} />
            <Suspense>
                <CardCat3d scene={scene} animations={animations} />
            </Suspense>
        </Canvas>
    </div>
);
};

export default Cat3d;
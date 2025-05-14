import { OrbitControls, useGLTF } from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import {CardCat3d} from "./cardmodels3d/cardCat3d";

const Cat3d = () => {
    const { scene , animations} = useGLTF('/bananacat.glb') as any;


    return(
    <div>
        <Canvas orthographic camera={{ zoom: 100, position: [0, -1, 5], fov:50 }} style={{ height: '500px', width: '500px' }}>
            <ambientLight intensity={2} />
            <OrbitControls />
                <Suspense>
                    <CardCat3d scene={scene} animations={animations}/>
                </Suspense>
        </Canvas>
    </div>
    );
};

export default Cat3d;
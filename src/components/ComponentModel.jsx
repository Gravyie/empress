import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";


function Model({ i }) {
    const {scene} = useGLTF(`/models/Model${i}.glb`);
    return <primitive object={scene} position={[0, -8, 0]} />;
}

export default function ComponentModel({i, bgColor}) {
    return (
        <div className={`w-[60%] md:w-[70%] h-[150px] md:h-[350px] rounded-2xl overflow-hidden shadow-lg ${bgColor}`}>
            <Canvas camera={{ position: [90, 30, -50], fov: 40}}>
                <ambientLight intensity={10} />
                <directionalLight position={[10, 10, 10]} intensity={10} />
                <OrbitControls enableZoom={true} />
                <Model i={i} />
            </Canvas>
        </div>
    )
}
"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";

function PCModel() {
  const { scene } = useGLTF("/models/MainModel.glb");
  return <primitive object={scene} position={[0, -8, 0]} />;
}

export default function Hero3d() {
  return (
    <div className="flex flex-rows bg-black">
      {/* Left Text Section */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="p-4 text-center w-1/3 flex flex-col items-center justify-center"
      >
        <div className="mb-15">
          <h2 className="text-7xl font-semibold mb-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Get your Perfect PC today.
          </h2>
          <p className="text-gray-300 text-lg">
            Choose from our prebuild section OR Build your own
          </p>
        </div>
        <div>
          <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-2 rounded-md mr-5 hover:from-indigo-500 hover:to-purple-500 transition duration-300">
            Pre-Built
          </button>
          <button className="bg-gradient-to-r from-cyan-500 to-green-400 text-white px-6 py-2 rounded-md hover:from-green-400 hover:to-cyan-500 transition duration-300">
            Build it yourself!
          </button>
        </div>
      </motion.div>

      {/* 3D Model */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="w-1/3"
      >
        <div className="relative w-full h-[860px]">
          <Canvas
            camera={{ position: [90, -30, -90], fov: 40 }}
            resize={{ scroll: true, offsetSize: true }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} />
            <PCModel />
            <OrbitControls />
          </Canvas>
        </div>
      </motion.div>

      {/* Right Info Section */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="p-4 w-1/3 flex flex-col items-start justify-center"
      >
        <div className="mb-10 text-left">
          <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Pre-Built.
          </h2>
          <p className="text-gray-300 text-md">
            Computers that are already assembled and prebuilt by manufacturers,
            rather than building one's own computer from scratch.
          </p>
        </div>
        <div className="mb-10 text-left">
          <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
            Build it yourself.
          </h2>
          <p className="text-gray-300 text-md">
            Main advantages of building your own computer is flexibility and
            customization. You have full control over the selection of each
            component, allowing you to choose the best part of your specific
            needs and budget.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

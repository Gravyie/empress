"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import { Suspense } from "react";
import Loader from "./Loader";

function PCModel() {
  const { scene } = useGLTF("/models/MainModel.glb");
  return <primitive object={scene} position={[0, -0.3, 0]} />;
}

export default function Hero3d() {
  return (
    <div className="relative w-full h-[92vh] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative flex flex-rows z-10">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="p-4 text-center w-1/3 flex flex-col items-center justify-center"
        >
          <div className="mb-15">
            <h2 className="text-5xl font-semibold mb-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Get your Perfect PC today.
            </h2>
            <p className="text-gray-300 text-lg">
              Choose from our prebuild section OR Build your own
            </p>
          </div>
          <div>
            <a href="workstations">
            <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-2 rounded-md mr-5 hover:from-indigo-500 hover:to-purple-500 transition duration-300">
              Pre-Built
            </button>
            </a>
            <a href="custom-pc">
            <button className="bg-gradient-to-r from-cyan-500 to-green-400 text-white px-6 py-2 rounded-md hover:from-green-400 hover:to-cyan-500 transition duration-300">
              Build it yourself!
            </button>
            </a>
          </div>
          <div>
            <a href="https://youtube.com/shorts/0_8FqIOhwCM?si=nHV4gQhcQ7zKLGh4" target="_blank">
            <button className="mt-6 border-1 border-purple-500 px-4 py-2 rounded-md text-purple font-bold text-purple-400 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent transition duration-300">
              Watch Video
            </button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="w-1/3"
        >
          <div className="w-full h-[65vh]">
            <Canvas
              camera={{ position: [2, 1, 3], fov: 12 }}
              resize={{ scroll: true, offsetSize: true }}
            >
            <Suspense fallback={<Loader />}>
                <ambientLight intensity={100} />
                <directionalLight position={[15, 15, 15]} intensity={50}/>
                <PCModel />
                <OrbitControls enableZoom={false} />
              </Suspense>
            </Canvas>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="p-4 w-1/3 flex flex-col items-start justify-center"
        >
          <div className="mb-10 text-left">
            <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Pre-Built.
            </h2>
            <p className="text-gray-300 text-md">
              Computers that are already assembled and prebuilt by manufacturers,
              rather than building one's own computer from scratch.
            </p>
          </div>
          <div className="mb-10 text-left">
            <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-green-500 to-cyan-700 bg-clip-text text-transparent">
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
      <section className="pt-5 pb-10 px-4">
        <style>{`
          .animated-gradient {
            background: linear-gradient(-45deg, #2E003E, #7F7FFF, #2E003E, #000);
            background-size: 400% 400%;
            animation: gradientShift 15s ease infinite;
          }

          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>

        <div className="animated-gradient text-white py-8 px-4 rounded-xl shadow-xl backdrop-blur-md bg-black/60 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0 md:divide-x divide-gray-600">
            
            <div className="px-6 md:w-1/4 animate-fadeUp">
              <div className="text-3xl mb-2">🚚</div>
              <h3 className="font-bold text-lg mb-1">Fastest Shipping</h3>
              <p className="text-sm text-gray-300">
                Get your PCs Delivered Swiftly with our Shipping Partner.
              </p>
            </div>

            <div className="px-6 md:w-1/4 animate-fadeUp">
              <div className="text-3xl mb-2">🛍️</div>
              <h3 className="font-bold text-lg mb-1">After Sales Service</h3>
              <p className="text-sm text-gray-300">
                Support that Sticks with you, even After the Purchase.
              </p>
            </div>

            <div className="px-6 md:w-1/4 animate-fadeUp">
              <div className="text-3xl mb-2">💬</div>
              <h3 className="font-bold text-lg mb-1">Support 24/7</h3>
              <p className="text-sm text-gray-300">
                Contact us 24/7 hours a day.
              </p>
            </div>

            <div className="px-6 md:w-1/4 animate-fadeUp">
              <div className="text-3xl mb-2">✅</div>
              <h3 className="font-bold text-lg mb-1">100% Secure Payment</h3>
              <p className="text-sm text-gray-300">
                Experience safe, encrypted, and reliable payment options.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

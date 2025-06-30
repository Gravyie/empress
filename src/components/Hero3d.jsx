"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import { Suspense } from "react";
import Loader from "./Loader";

function PCModel() {
  const { scene } = useGLTF("/models/MainModel.glb");
  return <primitive object={scene} position={[0, -0.30, 0]} />;
}

export default function Hero3d() {
  return (
    <div className="relative w-full h-auto min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/bg-video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main 3-column section */}
      <div className="relative z-10 flex flex-col md:flex-row w-full md:h-full">
        {/* Left Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/3 p-4 flex flex-col items-center justify-center text-center md:text-left space-y-4 md:space-y-0"
        >
          <div>
            <h2 className="mt-4 text-2xl md:text-5xl font-semibold md:mb-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-snug">
              Get your Perfect PC today.
            </h2>
            <p className="text-gray-200 text-base md:text-lg max-w-sm md:max-w-none mx-auto md:mx-0">
              Choose from our prebuild section OR Build your own
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 md:mt-4">
            <a href="workstations">
              <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-2 rounded-md hover:from-indigo-500 hover:to-purple-500 transition duration-300">
                Pre-Built
              </button>
            </a>
            <a href="pc-builder">
              <button className="bg-gradient-to-r from-cyan-500 to-green-400 text-white px-6 py-2 rounded-md hover:from-green-400 hover:to-cyan-500 transition duration-300">
                Build it yourself!
              </button>
              <button className="bg-gradient-to-r from-cyan-500 to-green-400 text-white px-6 py-2 rounded-md hover:from-green-400 hover:to-cyan-500 transition duration-300">
                Build it yourself!
              </button>
            </a>
          </div>
          <a
            href="https://youtube.com/shorts/0_8FqIOhwCM?si=nHV4gQhcQ7zKLGh4"
            target="_blank"
            className="md:mt-4"
          >
            <button className="border border-purple-500 px-4 py-2 rounded-md font-bold text-purple-400 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent transition duration-300">
              Watch Video
            </button>
          </a>
        </motion.div>

        {/* Center 3D Model */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full md:w-1/3 flex items-center justify-center"
        >
          <div className="w-full h-[250px] md:h-[64vh] px-4 md:px-0">
            <Canvas camera={{ position: [2, 0.7, 3], fov: 12 }}>
              <Suspense fallback={<Loader />}>
                <ambientLight intensity={100} />
                <directionalLight position={[15, 15, 15]} intensity={50} />
                <directionalLight position={[15, 15, 15]} intensity={50} />
                <PCModel />
                <OrbitControls enableZoom={false} />
              </Suspense>
            </Canvas>
          </div>
        </motion.div>

        {/* Right Description Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/3 p-4 flex flex-col items-center md:items-start justify-center text-center md:text-left space-y-6"
        >
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-6 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Pre-Built.
            </h2>
            <p className="text-gray-200 text-sm md:text-md max-w-sm md:max-w-none mx-auto md:mx-0">
              Computers that are already assembled and prebuilt by manufacturers,
              rather than building one's own computer from scratch.
            </p>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-6 bg-gradient-to-r from-green-500 to-cyan-700 bg-clip-text text-transparent">
              Build it yourself.
            </h2>
            <p className="text-gray-200 text-sm md:text-md max-w-sm md:max-w-none mx-auto md:mx-0">
              Main advantages of building your own computer is flexibility and
              customization. You have full control over the selection of each
              component, allowing you to choose the best part of your specific
              needs and budget.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Feature Section */}
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

        <div className="animated-gradient text-white py-8 px-6 rounded-xl shadow-xl backdrop-blur-md bg-black/60 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0 md:divide-x divide-gray-600">
            {[
              {
                emoji: "🚚",
                title: "Fastest Shipping",
                desc: "Get your PCs Delivered Swiftly with our Shipping Partner.",
              },
              {
                emoji: "🛍️",
                title: "After Sales Service",
                desc: "Support that Sticks with you, even After the Purchase.",
              },
              {
                emoji: "💬",
                title: "Support 24/7",
                desc: "Contact us 24/7 hours a day.",
              },
              {
                emoji: "✅",
                title: "100% Secure Payment",
                desc: "Experience safe, encrypted, and reliable payment options.",
              },
            ].map((item, i) => (
              <div key={i} className="px-4 md:w-1/4 animate-fadeUp">
                <div className="text-3xl mb-2">{item.emoji}</div>
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

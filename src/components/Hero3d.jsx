import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion } from "framer-motion";

function PCModel() {
  const { scene } = useGLTF('/models/MainModel.glb');
  return <primitive object={scene} position={[-2, 3, 0]}/>;
}

export default function Hero3D() {
  return (
    <div className='relative w-full h-auto lg:h-[94vh] overflow-hidden bg-black'>
      <div className="relative z-10 flex flex-col lg:flex-row">
        {/* Left Text Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="p-4 lg:p-6 w-full lg:w-1/3 flex flex-col items-center justify-center text-center space-y-1 lg:space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Get your Perfect PC today.
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mb-10">
            Choose from our prebuild section OR Build your own
          </p>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <a href="workstations">
              <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-5 py-2 rounded-md text-sm hover:from-indigo-500 hover:to-purple-500 transition duration-300">
                Pre-Built
              </button>
            </a>
            <a href="pc-builder">
              <button className="bg-gradient-to-r from-cyan-500 to-green-400 text-white px-5 py-2 rounded-md text-sm hover:from-green-400 hover:to-cyan-500 transition duration-300">
                Build it yourself!
              </button>
            </a>
          </div>
          <a
            href="https://youtube.com/shorts/0_8FqIOhwCM?si=nHV4gQhcQ7zKLGh4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-2 border border-gray-500 px-4 py-2 rounded-md font-bold bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent text-sm transition duration-300">
              Watch Video
            </button>
          </a>
        </motion.div>
        <div className="p-4 lg:p-6 w-full lg:w-1/3 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[68vh] flex flex-col items-center justify-center text-center space-y-1 lg:space-y-4">
          <Canvas camera={{ position: [-20, 0, 30], fov: 60 }}>
            <ambientLight intensity={2} />
            <directionalLight position={[4, 1, 5]} intensity={1}/>
            <PCModel />
            <OrbitControls enableZoom={false}/>
          </Canvas>
        </div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="p-4 lg:p-6 w-full lg:w-1/3 flex flex-col items-center lg:items-start justify-center text-center lg:text-left space-y-4"
        >
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-2">
              Pre-Built.
            </h2>
            <p className="text-gray-300 text-sm sm:text-base text-center lg:text-left">
              Computers that are already assembled and prebuilt by manufacturers, rather than building one's own computer from scratch.
            </p>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-green-500 to-cyan-700 bg-clip-text text-transparent mb-2">
              Build it yourself.
            </h2>
            <p className="text-gray-300 text-sm sm:text-base text-center lg:text-left">
              Main advantages of building your own computer is flexibility and customization. You have full control over the selection of each component.
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

        <div className="animated-gradient text-white py-6 px-4 rounded-xl shadow-xl backdrop-blur-md bg-black/60 max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-6 sm:gap-0 sm:divide-x divide-gray-600">
            {[
              {
                icon: "🚚",
                title: "Fastest Shipping",
                text: "Get your PCs Delivered Swiftly with our Shipping Partner.",
              },
              {
                icon: "🛍️",
                title: "After Sales Service",
                text: "Support that Sticks with you, even After the Purchase.",
              },
              {
                icon: "💬",
                title: "Support 24/7",
                text: "Contact us 24/7 hours a day.",
              },
              {
                icon: "✅",
                title: "100% Secure Payment",
                text: "Experience safe, encrypted, and reliable payment options.",
              },
            ].map((item, idx) => (
              <div key={idx} className="sm:w-1/4 px-4">
                <div className="text-2xl mb-1">{item.icon}</div>
                <h3 className="font-bold text-base sm:text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html, useProgress, Float, Environment, ContactShadows } from '@react-three/drei';
import { motion } from "framer-motion";
import { Play, Cpu, Wrench, Truck, Headset, ShieldCheck, CreditCard, ArrowRight } from "lucide-react";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3">
        <div className="w-20 h-[2px] bg-black/10 dark:bg-white/10 overflow-hidden">
          <div
            className="h-full shine-chrome transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-gray-500 dark:text-white/50 text-[10px] font-mono tracking-[0.3em] uppercase">
          Loading {Math.round(progress)}%
        </span>
      </div>
    </Html>
  );
}

function PCModel() {
  const { scene } = useGLTF('/models/MainModel.glb');
  return <primitive object={scene} position={[-2, 3, 0]} />;
}

function AnimatedLight() {
  const lightRef = useRef();
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.8;
    if (lightRef.current) {
      // Orbit light smoothly around the PC
      lightRef.current.position.x = Math.sin(t) * 25;
      lightRef.current.position.z = Math.cos(t) * 25;
      lightRef.current.position.y = 5 + Math.sin(t * 1.5) * 5;
    }
  });

  return (
    <pointLight 
      ref={lightRef}
      color="#F47C5A" 
      intensity={50} 
      distance={60} 
      decay={2}
    />
  );
}

export default function Hero3D() {
  return (
    <div className="relative w-full min-h-[calc(100vh-80px)] flex flex-col justify-between overflow-hidden bg-[#f8f9fa] dark:bg-black">
      {/* Ambient grid background */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

      {/* Subtle chrome glow accent */}
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 lg:px-8 flex-grow flex flex-col lg:flex-row items-center justify-between py-12 lg:py-0 gap-12 lg:gap-16">

        {/* Left — Text Content */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left z-20 mt-10 lg:mt-0"
        >
          {/* Status Chip */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/10 bg-white/[0.03] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F47C5A] animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/60">
              Now Shipping Nationwide
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-[-0.03em] mb-6">
            <span className="text-white">Engineered</span>
            <br className="hidden lg:block" />
            <span className="text-[#F47C5A]">Perfection.</span>
          </h1>

          {/* Subtext */}
          <p className="text-white/50 text-base sm:text-lg max-w-md font-light leading-relaxed mb-8">
            Performance-grade systems built from the ground up. Pre-configured or fully custom — your call.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
            <a href="/workstations" className="w-full sm:w-auto">
              <button className="w-full group flex items-center justify-center gap-2 px-8 py-4 bg-white text-black text-xs font-semibold uppercase tracking-[0.15em] hover:bg-[#F47C5A] hover:text-white transition-all duration-300">
                Shop Pre-Built
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
            <a href="/pc-builder" className="w-full sm:w-auto">
              <button className="group w-full flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white/80 text-xs font-semibold uppercase tracking-[0.15em] hover:border-[#F47C5A]/50 hover:text-[#F47C5A] hover:bg-[#F47C5A]/5 hover:shadow-[0_0_20px_rgba(244,124,90,0.15)] transition-all duration-300">
                <Wrench size={14} className="group-hover:rotate-12 transition-transform" />
                Custom Build
              </button>
            </a>
          </div>

          <p className="text-white/30 text-[11px] font-light tracking-wide mb-10 max-w-sm">
            Select "Shop Pre-Built" for expertly assembled rigs, or "Custom Build" to hand-pick every component.
          </p>

          {/* Watch Video Link */}
          <a
            href="https://youtube.com/shorts/0_8FqIOhwCM?si=nHV4gQhcQ7zKLGh4"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-white/40 hover:text-white transition-colors"
          >
            <div className="w-10 h-10 border border-white/15 flex items-center justify-center group-hover:border-[#F47C5A] group-hover:bg-[#F47C5A]/10 group-hover:text-[#F47C5A] transition-all rounded-full">
              <Play size={13} className="ml-0.5" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Watch Cinematic Demo</span>
          </a>
        </motion.div>

        {/* Right — 3D Model Cinematic Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="w-full lg:w-[55%] h-[400px] sm:h-[500px] lg:h-[80vh] relative z-10"
        >
          {/* Ambient glow behind model for depth */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-gradient-to-tr from-[#F47C5A]/20 via-orange-500/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
          
          <Canvas camera={{ position: [-25, 5, 35], fov: 45 }}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 20, 10]} intensity={1.5} color="#ffffff" />
            <directionalLight position={[-15, 10, -10]} intensity={1} color="#a8b1ff" /> {/* Subtle blue rim light */}
            
            <AnimatedLight />
            <Environment preset="city" />

            <Suspense fallback={<Loader />}>
              <Float speed={2} rotationIntensity={0.3} floatIntensity={1.2} floatingRange={[-0.1, 0.1]}>
                <PCModel />
              </Float>
            </Suspense>

            {/* Cinematic ground shadow */}
            <ContactShadows position={[0, -2.5, 0]} opacity={0.65} scale={30} blur={2.5} far={10} color="#000000" />

            <OrbitControls 
              enableZoom={false} 
              autoRotate 
              autoRotateSpeed={0.8} 
              maxPolarAngle={Math.PI / 2 + 0.15}
              minPolarAngle={Math.PI / 3}
            />
          </Canvas>
        </motion.div>
      </div>

      {/* Bottom Features Strip */}
      <div className="relative z-20 border-t border-white/[0.06] bg-[#f8f9fa] dark:bg-black/60 backdrop-blur-sm mt-auto">
        <div className="max-w-7xl mx-auto px-5 py-7">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-white/[0.06]">
            {[
              { icon: <Truck size={18} />, title: "Express Delivery", desc: "Insured global shipping" },
              { icon: <ShieldCheck size={18} />, title: "3-Year Warranty", desc: "Comprehensive coverage" },
              { icon: <Headset size={18} />, title: "24/7 Support", desc: "Lifetime tech assistance" },
              { icon: <CreditCard size={18} />, title: "Secure Checkout", desc: "Encrypted transactions" },
            ].map((f, i) => (
              <motion.div
                initial={{ y: 15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                key={i}
                className="flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-8 first:lg:pl-0"
              >
                <div className="mb-2 text-gray-500 dark:text-white/50">{f.icon}</div>
                <h4 className="text-xs uppercase tracking-[0.15em] font-semibold text-white mb-0.5">{f.title}</h4>
                <p className="text-[11px] text-white/35 font-light">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
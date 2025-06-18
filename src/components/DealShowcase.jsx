import React, { useState, useEffect, useRef } from 'react';
import { Clock, Star, Zap, Shield, Cpu, MonitorSpeaker, ShoppingCart, Heart } from 'lucide-react';
import { useInView } from "react-intersection-observer";

const DealShowcase = () => {

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      ref={ref}
      className={`relative p-4 w-full overflow-hidden transition-opacity duration-1000 ${
        inView ? "animate-fadeInFromBack" : "opacity-0"
      }`}
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(251, 146, 60, 0.3) 0%, 
            rgba(239, 68, 68, 0.2) 25%, 
            rgba(168, 85, 247, 0.2) 50%, 
            rgba(59, 130, 246, 0.1) 75%, 
            rgba(16, 185, 129, 0.1) 100%
          ),
          linear-gradient(135deg, 
            #fff7ed 0%, 
            #fed7aa 15%, 
            #fdba74 30%, 
            #fb923c 45%, 
            #ea580c 60%, 
            #dc2626 75%, 
            #991b1b 90%, 
            #450a0a 100%
          )
        `,
        transition: 'background 0.3s ease-out'
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={`shape-${i}`}
            className="absolute animate-float"
            style={{
              left: `${15 + (i * 7)}%`,
              top: `${10 + (i * 6)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + (i % 3)}s`,
            }}
          >
            <div 
              className={`
                w-${8 + (i % 4) * 2} h-${8 + (i % 4) * 2} 
                bg-gradient-to-br from-orange-400/30 to-red-500/20 
                rounded-full blur-sm
                transform-gpu perspective-1000
              `}
              style={{
                transform: `rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`,
                boxShadow: `
                  0 ${10 + i * 2}px ${20 + i * 3}px rgba(251, 146, 60, 0.3),
                  inset 0 0 ${15 + i}px rgba(255, 255, 255, 0.1)
                `,
                transition: 'transform 0.1s ease-out'
              }}
            />
          </div>
        ))}

        {[...Array(80)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          >
            <div 
              className="w-0.5 h-0.5 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full"
              style={{
                boxShadow: '0 0 8px currentColor',
                filter: `hue-rotate(${i * 4}deg)`
              }}
            />
          </div>
        ))}

        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1920 1080">
          <defs>
            <linearGradient id="circuit1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="50%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#dc2626" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <g filter="url(#glow)">
            <path 
              d="M100,300 Q400,200 800,300 T1500,300" 
              stroke="url(#circuit1)" 
              strokeWidth="3" 
              fill="none" 
              className="animate-pulse"
              style={{ animationDuration: '3s' }}
            />
            <path 
              d="M200,500 Q600,600 1000,500 T1600,500" 
              stroke="url(#circuit1)" 
              strokeWidth="2" 
              fill="none" 
              className="animate-pulse"
              style={{ animationDuration: '4s', animationDelay: '1s' }}
            />
            <path 
              d="M150,700 Q500,800 900,700 T1400,700" 
              stroke="url(#circuit1)" 
              strokeWidth="2" 
              fill="none" 
              className="animate-pulse"
              style={{ animationDuration: '5s', animationDelay: '2s' }}
            />
          </g>
        </svg>

        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={`wing-${i}`}
              className="absolute opacity-20"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 8}%`,
                transform: `rotate(${i * 30}deg)`,
              }}
            >
              <div 
                className="w-32 h-2 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full animate-pulse"
                style={{ 
                  animationDuration: `${3 + i}s`,
                  animationDelay: `${i * 0.5}s`,
                  filter: 'blur(1px)'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm font-medium mb-6 border border-white/30 shadow-xl">
              <Zap className="w-5 h-5 animate-pulse text-yellow-300" />
              <span className="font-semibold">DEAL OF THE DAY</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
              High Spec Gaming PC
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
              Ultimate performance meets unbeatable price. Limited time offer on our premium gaming build.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="group relative">
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:bg-white/15">
                  <div className="aspect-[3/3] rounded-2xl overflow-hidden relative">
                    <img
                      src="/images/Emperor.png"
                      alt="Gaming Beast PC"
                      className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              
              <div className="grid grid-cols-3 gap-4">
                {[Cpu, MonitorSpeaker, Shield].map((Icon, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 cursor-pointer hover:bg-white/20 transition-all duration-300 hover:scale-110 group">
                    <div className="aspect-square bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-orange-300 group-hover:text-orange-200 transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Cpu className="w-6 h-6 mr-3 text-orange-300" />
                  Specifications
                </h3>
                <div className="space-y-4">
                  {[
                    { label: 'Processor', value: 'Intel i7-13700KF' },
                    { label: 'Graphics', value: 'RTX 4070 Super' },
                    { label: 'Memory', value: '32GB DDR5' },
                    { label: 'Storage', value: '1TB NVMe SSD' },
                    { label: 'Cooling', value: 'AIO Liquid Cooling' }
                  ].map((spec, i) => (
                    <div key={i} className="flex justify-between items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                      <span className="text-white/80 font-medium">{spec.label}</span>
                      <span className="text-white font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center hover:scale-105 transition-transform duration-300">
                  <Star className="w-8 h-8 text-yellow-400 mx-auto mb-3 animate-pulse" />
                  <div className="text-white text-2xl font-bold">4.9/5</div>
                  <div className="text-white/70 text-sm">Customer Rating</div>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center hover:scale-105 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-green-400 mx-auto mb-3 animate-pulse" />
                  <div className="text-white text-2xl font-bold">3 Years</div>
                  <div className="text-white/70 text-sm">Warranty</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl text-center">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <Clock className="w-6 h-6 text-orange-300 animate-pulse" />
                  <span className="text-white text-lg font-semibold">Deal Ends In</span>
                </div>
                <div className="flex justify-center space-x-3">
                  {[
                    { value: timeLeft.hours, label: 'Hours' },
                    { value: timeLeft.minutes, label: 'Min' },
                    { value: timeLeft.seconds, label: 'Sec' }
                  ].map((time, i) => (
                    <div key={i} className="bg-orange-500/30 backdrop-blur-sm rounded-xl p-4 min-w-[70px] border border-orange-400/30">
                      <div className="text-white text-2xl font-bold">{time.value.toString().padStart(2, '0')}</div>
                      <div className="text-orange-200 text-xs font-medium">{time.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl text-center">
                <div className="space-y-4 mb-8">
                  <div className="text-white/60 line-through text-xl">₹2,49,999</div>
                  <div className="text-white text-4xl font-bold">₹1,99,999</div>
                  <div className="bg-gradient-to-r from-red-500 to-red-600 text-white text-sm px-4 py-2 rounded-full inline-block font-semibold shadow-lg">
                    Save ₹50,000 (20% OFF)
                  </div>
                </div>
                
                <div className="space-y-4">
                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-8 rounded-2xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3">
                    <ShoppingCart className="w-5 h-5" />
                    <span>Buy Now</span>
                  </button>
                  <button className="w-full bg-white/20 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-2xl hover:bg-white/30 transition-all duration-300 border border-white/30 flex items-center justify-center space-x-3">
                    <Heart className="w-5 h-5" />
                    <span>Add to Wishlist</span>
                  </button>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex justify-center space-x-6 text-sm text-white/90">
                    <span className="flex items-center space-x-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      <span>Free Shipping</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      <span>Easy Returns</span>
                    </span>
                  </div>
                  <div className="text-xs text-white/70 font-medium">
                    EMI starting from ₹8,333/month
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default DealShowcase;
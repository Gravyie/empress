import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// --- Data Definitions ---
const COMPONENT_FLOW = [
  { type: 'cpu', label: 'CPU' },
  { type: 'motherboard', label: 'Motherboard' },
  { type: 'ram', label: 'RAM' },
  { type: 'gpu', label: 'GPU' },
  { type: 'storage', label: 'Storage' },
  { type: 'psu', label: 'Power Supply' },
  { type: 'case', label: 'Case' },
];

const ALL_COMPONENTS = {
  cpu: [
    { id: 'cpu1', name: 'Intel i5-14600K', image: '/images/components/cpu1.jpeg', type: 'cpu', price: 262 },
    { id: 'cpu2', name: 'AMD Ryzen 7 7800X3D', image: '/images/components/cpu2.jpeg', type: 'cpu', price: 477 },
    { id: 'cpu3', name: 'Intel i7-14700K', image: '/images/components/cpu3.jpeg', type: 'cpu', price: 376 },
    { id: 'cpu4', name: 'AMD Ryzen 9 7900X', image: '/images/components/cpu4.jpeg', type: 'cpu', price: 542 },
    { id: 'cpu5', name: 'Intel i9-14900K', image: '/images/components/cpu5.jpeg', type: 'cpu', price: 518 },
    { id: 'cpu6', name: 'AMD Ryzen 9 7950X3D', image: '/images/components/cpu6.jpeg', type: 'cpu', price: 842 },
    { id: 'cpu7', name: 'Intel i5-14600K', image: '/images/components/cpu1.jpeg', type: 'cpu', price: 262 },
    { id: 'cpu8', name: 'AMD Ryzen 7 7800X3D', image: '/images/components/cpu2.jpeg', type: 'cpu', price: 477 },
    { id: 'cpu9', name: 'Intel i7-14700K', image: '/images/components/cpu3.jpeg', type: 'cpu', price: 376 },
  ],
  motherboard: [
    { id: 'mb1', name: 'MSI B650 Tomahawk WiFi', image: '/images/components/mb1.jpeg', type: 'motherboard', price: null },
    { id: 'mb2', name: 'ASUS ROG Strix Z790-E', image: '/images/components/mb2.jpeg', type: 'motherboard', price: null },
    { id: 'mb3', name: 'Gigabyte X670E Aorus Master', image: '/images/components/mb3.jpeg', type: 'motherboard', price: null },
    { id: 'mb4', name: 'ASRock B650M Pro RS WiFi', image: '/images/components/mb4.jpeg', type: 'motherboard', price: null },
    { id: 'mb5', name: 'MSI PRO B760M-A WiFi', image: '/images/components/mb5.jpeg', type: 'motherboard', price: null },
    { id: 'mb6', name: 'ASUS TUF Gaming X670E-PLUS', image: '/images/components/mb6.jpeg', type: 'motherboard', price: null },
    { id: 'mb7', name: 'MSI B650 Tomahawk WiFi', image: '/images/components/mb1.jpeg', type: 'motherboard', price: null },
    { id: 'mb8', name: 'ASUS ROG Strix Z790-E', image: '/images/components/mb2.jpeg', type: 'motherboard', price: null },
    { id: 'mb9', name: 'Gigabyte X670E Aorus Master', image: '/images/components/mb3.jpeg', type: 'motherboard', price: null },
  ],
  ram: [
    { id: 'ram1', name: 'Corsair Vengeance RGB 16GB DDR5', image: '/images/components/ram1.jpeg', type: 'ram', price: 83 },
    { id: 'ram2', name: 'G.SKILL Trident Z5 Neo 32GB DDR5', image: '/images/components/ram2.jpeg', type: 'ram', price: 156 },
    { id: 'ram3', name: 'Kingston Fury Beast 64GB DDR5', image: '/images/components/ram3.jpeg', type: 'ram', price: 291 },
    { id: 'ram4', name: 'TeamGroup T-Force Delta RGB 16GB DDR4', image: '/images/components/ram4.jpeg', type: 'ram', price: 58 },
    { id: 'ram5', name: 'Corsair Dominator Platinum 32GB DDR5', image: '/images/components/ram5.jpeg', type: 'ram', price: 209 },
    { id: 'ram6', name: 'Crucial Pro 48GB DDR5', image: '/images/components/ram6.jpeg', type: 'ram', price: 187 },
    { id: 'ram7', name: 'Corsair Vengeance RGB 16GB DDR5', image: '/images/components/ram1.jpeg', type: 'ram', price: 83 },
    { id: 'ram8', name: 'G.SKILL Trident Z5 Neo 32GB DDR5', image: '/images/components/ram2.jpeg', type: 'ram', price: 156 },
    { id: 'ram9', name: 'Kingston Fury Beast 64GB DDR5', image: '/images/components/ram3.jpeg', type: 'ram', price: 291 },
  ],
  gpu: [
    { id: 'gpu1', name: 'NVIDIA RTX 4070 SUPER', image: '/images/components/gpu1.jpeg', type: 'gpu', price: 710 },
    { id: 'gpu2', name: 'AMD RX 7800 XT', image: '/images/components/gpu2.jpeg', type: 'gpu', price: null },
    { id: 'gpu3', name: 'NVIDIA RTX 4080 SUPER', image: '/images/components/gpu3.jpeg', type: 'gpu', price: null },
    { id: 'gpu4', name: 'AMD RX 7900 XTX', image: '/images/components/gpu4.jpeg', type: 'gpu', price: null },
    { id: 'gpu5', name: 'NVIDIA RTX 4060', image: '/images/components/gpu5.jpeg', type: 'gpu', price: 369 },
    { id: 'gpu6', name: 'AMD RX 7600', image: '/images/components/gpu6.jpeg', type: 'gpu', price: null },
    { id: 'gpu7', name: 'NVIDIA RTX 4070 SUPER', image: '/images/components/gpu1.jpeg', type: 'gpu', price: 710 },
    { id: 'gpu8', name: 'AMD RX 7800 XT', image: '/images/components/gpu2.jpeg', type: 'gpu', price: null },
    { id: 'gpu9', name: 'NVIDIA RTX 4080 SUPER', image: '/images/components/gpu3.jpeg', type: 'gpu', price: null },
  ],
  storage: [
    { id: 'sto1', name: 'Samsung 990 Pro 1TB NVMe SSD', image: '/images/components/sto1.jpeg', type: 'storage', price: 124 },
    { id: 'sto2', name: 'WD Black SN850X 2TB NVMe SSD', image: '/images/components/sto2.jpeg', type: 'storage', price: null },
    { id: 'sto3', name: 'Crucial P5 Plus 500GB NVMe SSD', image: '/images/components/sto3.jpeg', type: 'storage', price: null },
    { id: 'sto4', name: 'Seagate Barracuda 4TB HDD', image: '/images/components/sto4.jpeg', type: 'storage', price: null },
    { id: 'sto5', name: 'Kingston NV2 250GB NVMe SSD', image: '/images/components/sto5.jpeg', type: 'storage', price: null },
    { id: 'sto6', name: 'Crucial MX500 1TB SATA SSD', image: '/images/components/sto6.jpeg', type: 'storage', price: null },
    { id: 'sto7', name: 'Samsung 990 Pro 1TB NVMe SSD', image: '/images/components/sto1.jpeg', type: 'storage', price: 124 },
    { id: 'sto8', name: 'WD Black SN850X 2TB NVMe SSD', image: '/images/components/sto2.jpeg', type: 'storage', price: null },
    { id: 'sto9', name: 'Crucial P5 Plus 500GB NVMe SSD', image: '/images/components/sto3.jpeg', type: 'storage', price: null },
  ],
  psu: [
    { id: 'psu1', name: 'Corsair RM750e 750W 80+ Gold', image: '/images/components/psu1.jpeg', type: 'psu', price: 104 },
    { id: 'psu2', name: 'EVGA SuperNOVA 850 GT 850W 80+ Gold', image: '/images/components/psu2.jpeg', type: 'psu', price: 125 },
    { id: 'psu3', name: 'Seasonic Focus Plus Gold 1000W', image: '/images/components/psu3.jpeg', type: 'psu', price: 167 },
    { id: 'psu4', name: 'Thermaltake Smart 600W 80+ White', image: '/images/components/psu4.jpeg', type: 'psu', price: 52 },
    { id: 'psu5', name: 'Corsair SF750 750W 80+ Platinum (SFX)', image: '/images/components/psu5.jpeg', type: 'psu', price: 157 },
    { id: 'psu6', name: 'Pure Power 12 M 750W', image: '/images/components/psu6.jpeg', type: 'psu', price: 93 },
    { id: 'psu7', name: 'Corsair RM750e 750W 80+ Gold', image: '/images/components/psu1.jpeg', type: 'psu', price: 104 },
    { id: 'psu8', name: 'EVGA SuperNOVA 850 GT 850W 80+ Gold', image: '/images/components/psu2.jpeg', type: 'psu', price: 125 },
    { id: 'psu9', name: 'Seasonic Focus Plus Gold 1000W', image: '/images/components/psu3.jpeg', type: 'psu', price: 167 },
  ],
  case: [
    { id: 'case1', name: 'NZXT H7 Flow', image: '/images/img1.JPG', type: 'case', price: 136 },
    { id: 'case2', name: 'Lian Li O11 Dynamic EVO', image: '/images/img2.JPG', type: 'case', price: 176 },
    { id: 'case3', name: 'Fractal Design North', image: '/images/img3.JPG', type: 'case', price: 146 },
    { id: 'case4', name: 'Cooler Master MasterBox Q300L', image: '/images/img4.JPG', type: 'case', price: 63 },
    { id: 'case5', name: 'Hyte Y70 Touch', image: '/images/img5.JPG', type: 'case', price: 368 },
    { id: 'case6', name: 'Montech AIR 903 MAX', image: '/images/img6.JPG', type: 'case', price: 79 },
    { id: 'case7', name: 'NZXT H7 Flow', image: '/images/img1.JPG', type: 'case', price: 136 },
    { id: 'case8', name: 'Lian Li O11 Dynamic EVO', image: '/images/img2.JPG', type: 'case', price: 176 },
    { id: 'case9', name: 'Fractal Design North', image: '/images/img3.JPG', type: 'case', price: 146 },
  ]
};

const BUILD_PROGRESS_IMAGES = {
  0: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80', // CPU
  1: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80', // Motherboard
  2: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80', // RAM
  3: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=800&q=80', // GPU
  4: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?auto=format&fit=crop&w=800&q=80', // Storage
  5: 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?auto=format&fit=crop&w=800&q=80', // PSU
  6: '/images/img2.JPG', // Case
  7: '/images/img3.JPG', // Complete
};

const getCurrentImageForBuild = (step, selectedComponents) => {
  if (step === COMPONENT_FLOW.length) {
    const selectedCase = selectedComponents['case'];
    if (selectedCase && selectedCase.image) {
      return selectedCase.image;
    }
    return BUILD_PROGRESS_IMAGES[COMPONENT_FLOW.length];
  }
  return BUILD_PROGRESS_IMAGES[step] || BUILD_PROGRESS_IMAGES[0];
};

// --- ComponentCard (Draggable Item) ---
const ComponentCard = ({ component, onSelectComponent, isSelected }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'component',
    item: { ...component },
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        onSelectComponent(item);
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      onClick={() => onSelectComponent(component)}
      className={`
        cursor-pointer bg-[#0a0a0a] rounded-lg p-2.5 sm:p-3 border border-black/10 dark:border-white/10
        hover:border-white/30 transform transition duration-300 ease-in-out
        ${isDragging ? 'opacity-50 border-[#F47C5A]' : ''}
        ${isSelected ? 'border-[#F47C5A] ring-1 ring-[#F47C5A]/50 bg-white/[0.02]' : ''}
        flex flex-col items-center justify-between text-center
        w-full h-full min-h-[110px] sm:min-h-[150px]
      `}
    >
      <div className="w-full h-12 sm:h-16 mb-1.5 relative flex items-center justify-center p-1 bg-black/5 dark:bg-white/5 rounded-md border border-white/[0.04] flex-shrink-0">
        <img src={component.image} alt={component.name} className="max-w-full max-h-full object-contain" />
      </div>
      <div className="flex flex-col justify-end flex-1 w-full">
        <p className="font-medium text-gray-800 dark:text-white/80 text-[10px] sm:text-[11px] leading-snug line-clamp-2">{component.name}</p>
        {component.price && <p className="text-[10px] sm:text-[11px] text-[#F47C5A] font-semibold mt-1.5 uppercase tracking-wider">${component.price.toLocaleString()}</p>}
      </div>
    </div>
  );
};

// --- BuildArea (Drop Target) ---
const BuildArea = ({ image, currentComponentType }) => {
  const currentComponentTypeRef = useRef(currentComponentType);

  useEffect(() => {
    currentComponentTypeRef.current = currentComponentType;
  }, [currentComponentType]);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'component',
    drop: (item) => ({ accepted: true, type: item.type }),
    canDrop: (item) => {
      return item.type === currentComponentTypeRef.current;
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;
  const borderColor = isActive ? 'border-[#F47C5A]' : (canDrop ? 'border-white/30' : 'border-black/10 dark:border-white/10');

  return (
    <div
      ref={drop}
      className={`
        relative bg-[#0a0a0a] rounded-xl p-3 sm:p-6 
        h-full w-full min-h-[250px] md:min-h-[450px]
        flex items-center justify-center overflow-hidden
        transition-all duration-300 ease-in-out
        border ${borderColor}
      `}
    >
      <img
        src={image}
        alt="Current build stage"
        className="absolute inset-0 w-full h-full object-cover sm:object-contain p-2 sm:p-4 rounded-lg opacity-80"
        style={{ transition: 'transform 0.5s ease-out' }}
      />
      {isActive && (
        <div className="absolute inset-0 bg-[#f8f9fa] dark:bg-black/80 backdrop-blur-sm flex items-center justify-center">
          <p className="text-white text-lg sm:text-xl font-bold tracking-[0.2em] uppercase">
            Drop Component Here
          </p>
        </div>
      )}
    </div>
  );
};

// --- Main PCBuilder Component ---
const PCBuilder = () => {
  const [step, setStep] = useState(0);
  const [selectedComponents, setSelectedComponents] = useState({});

  const { currentType, currentLabel, isBuildComplete } = useMemo(() => {
    const isComplete = step >= COMPONENT_FLOW.length;
    return {
      currentType: COMPONENT_FLOW[step]?.type,
      currentLabel: COMPONENT_FLOW[step]?.label,
      isBuildComplete: isComplete,
    };
  }, [step]);

  const componentOptions = ALL_COMPONENTS[currentType] || [];

  const handleSelectComponent = useCallback((component) => {
    const expectedTypeForCurrentStep = COMPONENT_FLOW[step]?.type;

    if (component.type === expectedTypeForCurrentStep) {
      setSelectedComponents(prev => ({ ...prev, [component.type]: component }));
      setStep(prev => prev + 1);
    } else if (selectedComponents[component.type]) {
      setSelectedComponents(prev => ({ ...prev, [component.type]: component }));
      const modifiedComponentStepIndex = COMPONENT_FLOW.findIndex(item => item.type === component.type);
      if (modifiedComponentStepIndex !== -1 && modifiedComponentStepIndex < step) {
          setStep(modifiedComponentStepIndex);
      }
    }
  }, [step, selectedComponents]);

  const handleModifyStep = useCallback((typeToModify) => {
    const index = COMPONENT_FLOW.findIndex(c => c.type === typeToModify);
    if (index !== -1) {
      setStep(index);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const totalBuildPrice = useMemo(() => {
    return Object.values(selectedComponents).reduce((sum, component) => sum + (component.price || 0), 0);
  }, [selectedComponents]);

  const currentBuildImage = getCurrentImageForBuild(step, selectedComponents);

  const scrollToSummary = useCallback(() => {
    document.getElementById('pc-summary')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);

  useEffect(() => {
    if (isBuildComplete) {
      // Small delay to allow the UI to update with "Build Complete" state before scrolling
      const timer = setTimeout(() => {
        scrollToSummary();
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isBuildComplete, scrollToSummary]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-[#f8f9fa] dark:bg-black text-white pb-8 sm:pb-16 pt-4 sm:pt-8 px-3 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center pt-1 md:pt-4 sm:pt-6 mb-4 sm:mb-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight uppercase">
              Assemble Your <span className="text-chrome">Dream PC</span>
            </h1>
            <p className="text-sm sm:text-md text-gray-500 dark:text-white/40 mt-2 font-light tracking-wide">
              Drag, Drop, or Click to Build Your Perfect Rig
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 sm:gap-6 lg:gap-10 items-stretch">
            {/* Build Visualization Area */}
            <div className="md:col-span-3 order-1 flex flex-col gap-4">
              <div className="flex justify-between items-end">
                <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-widest">
                  Your PC Build
                </h2>
                {!isBuildComplete && (
                  <p className="text-xs sm:text-sm text-[#F47C5A] uppercase tracking-wider font-semibold">
                    Step {step + 1} of {COMPONENT_FLOW.length}
                  </p>
                )}
              </div>
              
              <BuildArea
                image={currentBuildImage}
                currentComponentType={currentType}
              />
              
              {!isBuildComplete && (
                <div className="flex flex-col sm:flex-row items-center justify-between mt-2 gap-4">
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-white/50 text-center lg:text-left">
                    Currently selecting: <span className="text-white font-medium">{currentLabel}</span>
                  </p>
                  <button
                    onClick={scrollToSummary}
                    className="text-[10px] text-gray-500 dark:text-white/40 hover:text-white uppercase tracking-[0.15em] font-medium transition duration-200"
                  >
                    Go to Summary ↓
                  </button>
                </div>
              )}
            </div>

            {/* Component Selection Area */}
            <div className="md:col-span-2 order-2 mt-4 md:mt-0 flex flex-col h-full">
              <div className="min-h-[2.5rem] sm:min-h-[3.5rem] mb-1 sm:mb-4 flex items-start">
                <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-widest">
                  {isBuildComplete
                    ? `Build Complete`
                    : `Choose your ${currentLabel}`
                  }
                </h2>
              </div>

              {!isBuildComplete ? (
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-auto">
                  {componentOptions.length > 0 ? (
                    componentOptions.map(option => (
                      <ComponentCard
                        key={option.id}
                        component={option}
                        onSelectComponent={handleSelectComponent}
                        isSelected={selectedComponents[currentType]?.id === option.id}
                      />
                    ))
                  ) : (
                    <p className="text-gray-500 dark:text-white/40 text-sm col-span-full py-10 text-center border border-black/10 dark:border-white/10 border-dashed rounded-lg">No components available</p>
                  )}
                </div>
              ) : (
                <div className="bg-[#0a0a0a] rounded-xl p-6 sm:p-8 border border-black/10 dark:border-white/10 text-center">
                  <p className="text-lg text-white font-semibold mb-3">
                    Your custom PC is ready.
                  </p>
                  <p className="text-sm text-gray-500 dark:text-white/50 mb-8 font-light">
                    Review your selections below or modify any part to perfect your build.
                  </p>
                  <div className="flex flex-col space-y-3">
                    <button
                      onClick={() => setStep(0)}
                      className="border border-black/20 dark:border-white/20 text-white hover:bg-white hover:text-black text-xs font-semibold uppercase tracking-widest px-6 py-3 transition-colors duration-300"
                    >
                      Start A New Build
                    </button>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                      <button
                         onClick={() => {
                          setStep(0);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-xs text-gray-500 dark:text-white/50 hover:text-white uppercase tracking-wider font-medium transition-colors"
                      >
                        Modify Build
                      </button>
                      <button
                        onClick={scrollToSummary}
                        className="text-xs text-white hover:text-gray-300 uppercase tracking-wider font-semibold transition-colors"
                      >
                        View Summary
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Back Button for in-progress build steps */}
              {!isBuildComplete && (
                <div className={`pt-4 flex-shrink-0 text-center lg:text-left transition-opacity duration-300 ${step > 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                  <button
                    onClick={() => setStep(prev => Math.max(0, prev - 1))}
                    className="text-[10px] text-gray-500 dark:text-white/40 hover:text-white uppercase tracking-[0.15em] font-medium transition duration-200"
                  >
                    ← Go Back to Previous Step
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Final Build Summary & Details */}
          <div className={`transition-all duration-1000 ease-in-out relative ${isBuildComplete ? 'opacity-100 translate-y-0 mt-6 sm:mt-12 py-6 sm:py-12' : 'opacity-30 translate-y-8 mt-6 sm:mt-12 py-4 sm:py-8 pointer-events-none'} lg:flex lg:items-center lg:justify-center border-t border-white/[0.06]`}>
            {/* Convex Lens Trail connecting upper and lower sections */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center h-8 w-12">
               {/* Fading connecting line */}
               <div className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#F47C5A]/80 to-transparent" />
               
               {/* Convex lens wide horizontal glow */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-1.5 bg-[#F47C5A] blur-[4px] rounded-[100%]" />
               
               {/* Convex lens intense core */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-[1px] bg-white shadow-[0_0_12px_3px_#F47C5A] rounded-[100%]" />
               
               {/* Vertical flare core */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-6 bg-white blur-[1px] rounded-[100%]" />
            </div>
            <div
              id="pc-summary"
              className="w-full max-w-5xl mx-auto flex flex-col"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-white mb-4 sm:mb-8 uppercase tracking-widest">
                <span className="text-chrome">Summary</span>
              </h2>

              <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-10">
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                  <div className="relative w-full aspect-square max-w-sm bg-[#0a0a0a] border border-black/10 dark:border-white/10 rounded-xl p-4 flex items-center justify-center">
                     <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 via-fuchsia-500/10 to-orange-500/10 rounded-xl blur-2xl pointer-events-none" />
                     <img
                       src={getCurrentImageForBuild(COMPONENT_FLOW.length, selectedComponents)}
                       alt="Final PC build"
                       className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                     />
                  </div>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-white/50 uppercase tracking-widest mb-3">Specs Sheet</h3>
                    <ul className="space-y-0 relative before:absolute before:inset-y-0 before:left-[9px] before:w-[2px] before:bg-white/10">
                      {COMPONENT_FLOW.map(({ type, label }, idx) => {
                        const isSelected = !!selectedComponents[type];
                        const isCurrent = step === idx;
                        return (
                          <li
                            key={type}
                            className="relative pl-7 py-2"
                          >
                            {/* Vertical Trail Node */}
                            <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 flex items-center justify-center z-10 bg-[#0a0a0a] transition-colors
                              ${isSelected ? 'border-[#F47C5A] bg-[#F47C5A]/10' : (isCurrent ? 'border-white bg-white/10' : 'border-white/20')}
                            `}>
                              <div className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-[#F47C5A]' : (isCurrent ? 'bg-white' : 'bg-transparent')}`} />
                            </div>

                            <div className="flex-1 min-w-0 flex flex-col">
                              <span className="text-[10px] text-gray-500 dark:text-white/40 uppercase tracking-wider">{label}</span>
                              <div className="flex justify-between items-center mt-1">
                                <span className={`text-sm font-medium truncate pr-4 ${isSelected ? 'text-white' : 'text-white/30'}`}>
                                  {selectedComponents[type]?.name ? selectedComponents[type].name : "Not Selected"}
                                </span>
                                <div className="text-right flex-shrink-0">
                                   {selectedComponents[type]?.price && (
                                    <p className="text-xs font-semibold text-gray-800 dark:text-white/80">
                                      ${selectedComponents[type].price.toLocaleString()}
                                    </p>
                                  )}
                                  <button
                                    onClick={() => handleModifyStep(type)}
                                    className="text-[10px] text-gray-600 dark:text-white/60 hover:text-white uppercase tracking-wider font-semibold mt-0.5"
                                  >
                                    Edit
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-black/10 dark:border-white/10">
                    <div className="flex justify-between items-end mb-4">
                      <span className="text-xs text-gray-500 dark:text-white/50 uppercase tracking-widest font-semibold">Total Estimate</span>
                      <span className="text-2xl sm:text-3xl font-bold text-white">
                        ${totalBuildPrice.toLocaleString()}
                      </span>
                    </div>
                    <button className="w-full bg-white text-black hover:bg-gray-200 font-semibold text-xs uppercase tracking-[0.15em] px-8 py-4 transition-colors">
                      Add Build To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default PCBuilder;
import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// --- Data Definitions (Unchanged for brevity) ---
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
    { id: 'cpu1', name: 'Intel i5-14600K', image: '/images/components/cpu1.jpeg', type: 'cpu', price: 21739 },
    { id: 'cpu2', name: 'AMD Ryzen 7 7800X3D', image: '/images/components/cpu2.jpeg', type: 'cpu', price: 39550 },
    { id: 'cpu3', name: 'Intel i7-14700K', image: '/images/components/cpu3.jpeg', type: 'cpu', price: 31200 },
    { id: 'cpu4', name: 'AMD Ryzen 9 7900X', image: '/images/components/cpu4.jpeg', type: 'cpu', price: 44999 },
    { id: 'cpu5', name: 'Intel i9-14900K', image: '/images/components/cpu5.jpeg', type: 'cpu', price: 43000 },
    { id: 'cpu6', name: 'AMD Ryzen 9 7950X3D', image: '/images/components/cpu6.jpeg', type: 'cpu', price: 69900 },
  ],
  motherboard: [
    { id: 'mb1', name: 'MSI B650 Tomahawk WiFi', image: '/images/components/mb1.jpeg', type: 'motherboard', price: /* waiting sourcing */ null },
    { id: 'mb2', name: 'ASUS ROG Strix Z790-E', image: '/images/components/mb2.jpeg', type: 'motherboard', price: null },
    { id: 'mb3', name: 'Gigabyte X670E Aorus Master', image: '/images/components/mb3.jpeg', type: 'motherboard', price: null },
    { id: 'mb4', name: 'ASRock B650M Pro RS WiFi', image: '/images/components/mb4.jpeg', type: 'motherboard', price: null },
    { id: 'mb5', name: 'MSI PRO B760M-A WiFi', image: '/images/components/mb5.jpeg', type: 'motherboard', price: null },
    { id: 'mb6', name: 'ASUS TUF Gaming X670E-PLUS', image: '/images/components/mb6.jpeg', type: 'motherboard', price: null },
  ],
  ram: [
    { id: 'ram1', name: 'Corsair Vengeance RGB 16GB DDR5', image: '/images/components/ram1.jpeg', type: 'ram', price: 6930 },
    { id: 'ram2', name: 'G.SKILL Trident Z5 Neo 32GB DDR5', image: '/images/components/ram2.jpeg', type: 'ram', price: 12976 },
    { id: 'ram3', name: 'Kingston Fury Beast 64GB DDR5', image: '/images/components/ram3.jpeg', type: 'ram', price: 24170 },
    { id: 'ram4', name: 'TeamGroup T-Force Delta RGB 16GB DDR4', image: '/images/components/ram4.jpeg', type: 'ram', price: 4815 },
    { id: 'ram5', name: 'Corsair Dominator Platinum 32GB DDR5', image: '/images/components/ram5.jpeg', type: 'ram', price: 17330 },
    { id: 'ram6', name: 'Crucial Pro 48GB DDR5', image: '/images/components/ram6.jpeg', type: 'ram', price: 15547 },
  ],
  gpu: [
    { id: 'gpu1', name: 'NVIDIA RTX 4070 SUPER', image: '/images/components/gpu1.jpeg', type: 'gpu', price: 58911 },
    { id: 'gpu2', name: 'AMD RX 7800 XT', image: '/images/components/gpu2.jpeg', type: 'gpu', price: null },
    { id: 'gpu3', name: 'NVIDIA RTX 4080 SUPER', image: '/images/components/gpu3.jpeg', type: 'gpu', price: null },
    { id: 'gpu4', name: 'AMD RX 7900 XTX', image: '/images/components/gpu4.jpeg', type: 'gpu', price: null },
    { id: 'gpu5', name: 'NVIDIA RTX 4060', image: '/images/components/gpu5.jpeg', type: 'gpu', price: 30600 },
    { id: 'gpu6', name: 'AMD RX 7600', image: '/images/components/gpu6.jpeg', type: 'gpu', price: null },
  ],
  storage: [
    { id: 'sto1', name: 'Samsung 990 Pro 1TB NVMe SSD', image: '/images/components/sto1.jpeg', type: 'storage', price: 10290 },
    { id: 'sto2', name: 'WD Black SN850X 2TB NVMe SSD', image: '/images/components/sto2.jpeg', type: 'storage', price: null },
    { id: 'sto3', name: 'Crucial P5 Plus 500GB NVMe SSD', image: '/images/components/sto3.jpeg', type: 'storage', price: null },
    { id: 'sto4', name: 'Seagate Barracuda 4TB HDD', image: '/images/components/sto4.jpeg', type: 'storage', price: null },
    { id: 'sto5', name: 'Kingston NV2 250GB NVMe SSD', image: '/images/components/sto5.jpeg', type: 'storage', price: null },
    { id: 'sto6', name: 'Crucial MX500 1TB SATA SSD', image: '/images/components/sto6.jpeg', type: 'storage', price: null },
  ],
  psu: [
    { id: 'psu1', name: 'Corsair RM750e 750W 80+ Gold', image: '/images/components/psu1.jpeg', type: 'psu', price: 8666 },
    { id: 'psu2', name: 'EVGA SuperNOVA 850 GT 850W 80+ Gold', image: '/images/components/psu2.jpeg', type: 'psu', price: 10400 },
    { id: 'psu3', name: 'Seasonic Focus Plus Gold 1000W', image: '/images/components/psu3.jpeg', type: 'psu', price: 13860 },
    { id: 'psu4', name: 'Thermaltake Smart 600W 80+ White', image: '/images/components/psu4.jpeg', type: 'psu', price: 4333 },
    { id: 'psu5', name: 'Corsair SF750 750W 80+ Platinum (SFX)', image: '/images/components/psu5.jpeg', type: 'psu', price: 12999 },
    { id: 'psu6', name: 'Pure Power 12 M 750W', image: '/images/components/psu6.jpeg', type: 'psu', price: 7733 },
  ],
  case: [
    { id: 'case1', name: 'NZXT H7 Flow', image: '/images/img1.JPG', type: 'case', price: 11266 },
    { id: 'case2', name: 'Lian Li O11 Dynamic EVO', image: '/images/img2.JPG', type: 'case', price: 14600 },
    { id: 'case3', name: 'Fractal Design North', image: '/images/img3.JPG', type: 'case', price: 12100 },
    { id: 'case4', name: 'Cooler Master MasterBox Q300L', image: '/images/img4.JPG', type: 'case', price: 5200 },
    { id: 'case5', name: 'Hyte Y70 Touch', image: '/images/img5.JPG', type: 'case', price: 30550 },
    { id: 'case6', name: 'Montech AIR 903 MAX', image: '/images/img6.JPG', type: 'case', price: 6580 },
  ]
};

const BUILD_PROGRESS_IMAGES = {
  0: '/images/build/inst-cpu.avif',
  1: '/images/build/inst-moth.avif',
  2: '/images/build/inst-ram.avif',
  3: '/images/build/inst-gpu.avif',
  4: '/images/build/inst-stor.avif',
  5: '/images/build/inst-psu.avif',
  6: '/images/build/inst-case.JPG',
  7: '/images/build/inst-case.JPG', // Generic final image
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
        cursor-pointer bg-white rounded-lg shadow-md p-3 border border-gray-200
        hover:shadow-lg hover:scale-[1.02] transform transition duration-200 ease-in-out
        ${isDragging ? 'opacity-50 border-blue-400' : ''}
        ${isSelected ? 'border-blue-500 ring-2 ring-blue-300' : ''}
        flex flex-col items-center text-center
        w-full h-auto
      `}
    >
      <img src={component.image} alt={component.name} className="w-full h-16 object-contain mb-1" />
      <p className="font-semibold text-gray-800 text-sm leading-tight">{component.name}</p>
      {component.price && <p className="text-xs text-gray-500 mt-0.5">${component.price.toFixed(2)}</p>}
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
  const borderColor = isActive ? 'border-blue-500' : (canDrop ? 'border-blue-400' : 'border-gray-200');

  return (
    <div
      ref={drop}
      className={`
        relative bg-white/70 backdrop-blur-md rounded-xl shadow-xl p-6 min-h-[400px]
        flex items-center justify-center overflow-hidden
        transition-all duration-300 ease-in-out
        border-4 ${borderColor}
      `}
    >
      <img
        src={image}
        alt="Current build stage"
        className="max-w-full max-h-[450px] object-contain"
        style={{ transition: 'transform 0.3s ease-out' }}
      />
      {/* Reverted "Drop Here!" to semi-transparent overlay */}
      {isActive && (
        <div className="absolute inset-0 bg-opacity-20 flex items-center justify-center text-gray-500 text-2xl font-bold">
          Drop Here!
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
      // This is the correct logic for incrementing the step
      setStep(prev => prev + 1);
    } else if (selectedComponents[component.type]) {
      // This path is for when a user changes a component by clicking/dropping it
      // if it's already selected but not the current step's component.
      // It effectively allows "re-selecting" a component to update it
      // and potentially jump back to that step if it's earlier in the flow.
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
    document.getElementById('pc-summary')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-[#fff6ef] py-10 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto space-y-16">

          {/* Header */}
          <div className="text-center">
            <h1 className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent text-6xl font-extrabold tracking-tight leading-tight">
              Assemble Your Dream PC
            </h1>
            <p className="text-xl text-gray-400">
              Drag, Drop, or Click to Build Your Perfect Rig!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Build Visualization Area */}
            <div className="lg:col-span-3 mb-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent mb-4 text-center lg:text-left">
                Your PC Build
              </h2>

              <BuildArea
                image={currentBuildImage}
                currentComponentType={currentType}
              />
              {/* Optional: Add a step indicator */}
              {!isBuildComplete && (
                <p className="mt-4 text-xl text-gray-600 mb-4 text-center lg:text-left">
                  Step {step + 1} of {COMPONENT_FLOW.length}: {currentLabel}
                </p>
              )}
            </div>

            {/* Component Selection Area */}
            <div className="lg:col-span-2">
              <h2 className="bg-gradient-to-r from-cyan-500 to-green-400 bg-clip-text text-transparent text-3xl font-bold mb-6 text-center lg:text-left">
                {isBuildComplete
                  ? `Your Masterpiece is Complete!`
                  : `Choose your ${currentLabel}`
                }
              </h2>

              {!isBuildComplete ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
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
                    <p className="text-gray-500 text-lg col-span-full">No components available for this category.</p>
                  )}
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 text-center">
                  <p className="text-xl text-gray-700 font-semibold mb-4">
                    Congratulations! Your custom PC is ready.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Review your selections below or modify any part to perfect your build.
                  </p>
                  <div className="flex flex-col space-y-4"> {/* Keep Start New Build separate */}
                    <button
                      onClick={() => setStep(0)}
                      className="bg-white text-[#F47C5A] border font-bold px-6 py-3 rounded-lg shadow-lg transition duration-200 ease-in-out transform hover:scale-105"
                    >
                      Start A New Build
                    </button>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-2"> {/* New div for side-by-side buttons */}
                      <button
                        onClick={() => {
                          setStep(0);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="inline-flex items-center justify-center text-blue-600 hover:text-blue-800 text-lg font-medium transition duration-200"
                      >
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                        Go Back to Build
                      </button>
                      <button
                        onClick={scrollToSummary}
                        className="inline-flex items-center justify-center text-green-600 hover:text-green-800 text-lg font-medium transition duration-200"
                      >
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        Go to Summary
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Back Button for in-progress build steps */}
              {step > 0 && !isBuildComplete && (
                <div className="mt-8 text-center lg:text-left">
                  <button
                    onClick={() => setStep(prev => Math.max(0, prev - 1))}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 text-lg font-medium transition duration-200"
                  >
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    Go Back
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Final Build Summary & Details */}
          <div
            id='pc-summary'
            className='pt-6 border-t border-dashed border-gray-400'
          >
            <div
              className="bg-white border border-gray-200 rounded-xl shadow-2xl py-6 px-4 lg:px-8 mt-8 max-w-screen-xl mx-auto"
            >
              <h2 className="text-3xl font-extrabold text-center text-[#F47C5A] mb-4">
                Your Custom PC Summary
              </h2>

              {/* Wrapper for image and summary */}
              <div className="flex flex-col lg:flex-row gap-10">
                {/* Left: PC Image */}
                <div className="w-full lg:w-2/3 flex justify-center">
                  <img
                    src={getCurrentImageForBuild(COMPONENT_FLOW.length, selectedComponents)}
                    alt="Final PC build"
                    className="w-full max-w-3xl rounded-lg shadow-xl border border-gray-100 object-contain"
                  />
                </div>

                {/* Right: Summary + Price */}
                <div className="w-full lg:w-1/3 flex flex-col justify-between">
                  <div className="space-y-4 overflow-auto max-h-[600px] pr-2">
                    <h3 className="text-md font-bold text-gray-800">Selected Components:</h3>
                    <ul className="space-y-3">
                      {COMPONENT_FLOW.map(({ type, label }) => (
                        <li
                          key={type}
                          className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg shadow-sm border border-gray-100"
                        >
                          {selectedComponents[type]?.image ? (
                            <img
                              src={selectedComponents[type].image}
                              alt={label}
                              className="w-10 h-10 object-contain rounded-md border border-gray-200"
                            />
                          ) : (
                            <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-md">
                              <span className="text-gray-500 text-xs">No Img</span>
                            </div>
                          )}
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-800">
                              {label}:{" "}
                              <span className="font-semibold text-gray-900">
                                {selectedComponents[type]?.name || "Not Selected"}
                              </span>
                            </p>
                            {selectedComponents[type]?.price && (
                              <p className="text-sm text-gray-500">
                                ₹{selectedComponents[type].price.toLocaleString()}
                              </p>
                            )}
                          </div>
                          <button
                            onClick={() => handleModifyStep(type)}
                            className="text-xs text-blue-600 hover:text-blue-800 font-medium hover:underline"
                          >
                            Change
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Total Price */}
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="flex justify-between text-lg font-bold text-gray-900">
                      <span>Total Price:</span>
                      <span className="text-blue-700">
                        ₹{totalBuildPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-10 text-center">
                <button className="bg-[#F47C5A] text-white hover:bg-white hover:text-[#F47C5A] font-bold text-xl px-10 py-4 rounded-xl shadow-2xl transition duration-300 transform hover:scale-105">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default PCBuilder;
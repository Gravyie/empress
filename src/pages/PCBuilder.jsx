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
    { id: 'cpu1', name: 'Intel i5-14600K', image: '/images/cpu1.png', type: 'cpu', price: 299.99 },
    { id: 'cpu2', name: 'AMD Ryzen 7 7800X3D', image: '/images/cpu2.png', type: 'cpu', price: 369.99 },
    { id: 'cpu3', name: 'Intel i7-14700K', image: '/images/cpu3.png', type: 'cpu', price: 399.99 },
    { id: 'cpu4', name: 'AMD Ryzen 9 7900X', image: '/images/cpu4.png', type: 'cpu', price: 450.00 },
    { id: 'cpu5', name: 'Intel i9-14900K', image: '/images/cpu5.png', type: 'cpu', price: 589.99 },
    { id: 'cpu6', name: 'AMD Ryzen 9 7950X3D', image: '/images/cpu6.png', type: 'cpu', price: 629.99 },
  ],
  motherboard: [
    { id: 'mb1', name: 'MSI B650 Tomahawk WiFi', image: '/images/mb1.png', type: 'motherboard', price: 199.99 },
    { id: 'mb2', name: 'ASUS ROG Strix Z790-E', image: '/images/mb2.png', type: 'motherboard', price: 429.99 },
    { id: 'mb3', name: 'Gigabyte X670E Aorus Master', image: '/images/mb3.png', type: 'motherboard', price: 349.99 },
    { id: 'mb4', name: 'ASRock B650M Pro RS WiFi', image: '/images/mb4.png', type: 'motherboard', price: 179.99 },
    { id: 'mb5', name: 'MSI PRO B760M-A WiFi', image: '/images/mb5.png', type: 'motherboard', price: 159.99 },
    { id: 'mb6', name: 'ASUS TUF Gaming X670E-PLUS', image: '/images/mb6.png', type: 'motherboard', price: 289.99 },
  ],
  ram: [
    { id: 'ram1', name: 'Corsair Vengeance RGB 16GB DDR5', image: '/images/ram1.png', type: 'ram', price: 89.99 },
    { id: 'ram2', name: 'G.SKILL Trident Z5 Neo 32GB DDR5', image: '/images/ram2.png', type: 'ram', price: 149.99 },
    { id: 'ram3', name: 'Kingston Fury Beast 64GB DDR5', image: '/images/ram3.png', type: 'ram', price: 289.99 },
    { id: 'ram4', name: 'TeamGroup T-Force Delta RGB 16GB DDR4', image: '/images/ram4.png', type: 'ram', price: 69.99 },
    { id: 'ram5', name: 'Corsair Dominator Platinum 32GB DDR5', image: '/images/ram5.png', type: 'ram', price: 199.99 },
    { id: 'ram6', name: 'Crucial Pro 48GB DDR5', image: '/images/ram6.png', type: 'ram', price: 179.99 },
  ],
  gpu: [
    { id: 'gpu1', name: 'NVIDIA RTX 4070 SUPER', image: '/images/gpu1.png', type: 'gpu', price: 599.99 },
    { id: 'gpu2', name: 'AMD RX 7800 XT', image: '/images/gpu2.png', type: 'gpu', price: 499.99 },
    { id: 'gpu3', name: 'NVIDIA RTX 4080 SUPER', image: '/images/gpu3.png', type: 'gpu', price: 999.99 },
    { id: 'gpu4', name: 'AMD RX 7900 XTX', image: '/images/gpu4.png', type: 'gpu', price: 899.99 },
    { id: 'gpu5', name: 'NVIDIA RTX 4060', image: '/images/gpu5.png', type: 'gpu', price: 299.99 },
    { id: 'gpu6', name: 'AMD RX 7600', image: '/images/gpu6.png', type: 'gpu', price: 259.99 },
  ],
  storage: [
    { id: 'sto1', name: 'Samsung 990 Pro 1TB NVMe SSD', image: '/images/sto1.png', type: 'storage', price: 129.99 },
    { id: 'sto2', name: 'WD Black SN850X 2TB NVMe SSD', image: '/images/sto2.png', type: 'storage', price: 189.99 },
    { id: 'sto3', name: 'Crucial P5 Plus 500GB NVMe SSD', image: '/images/sto3.png', type: 'storage', price: 59.99 },
    { id: 'sto4', name: 'Seagate Barracuda 4TB HDD', image: '/images/sto4.png', type: 'storage', price: 89.99 },
    { id: 'sto5', name: 'Kingston NV2 250GB NVMe SSD', image: '/images/sto5.png', type: 'storage', price: 35.99 },
    { id: 'sto6', name: 'Crucial MX500 1TB SATA SSD', image: '/images/sto6.png', type: 'storage', price: 79.99 },
  ],
  psu: [
    { id: 'psu1', name: 'Corsair RM750e 750W 80+ Gold', image: '/images/psu1.png', type: 'psu', price: 99.99 },
    { id: 'psu2', name: 'EVGA SuperNOVA 850 GT 850W 80+ Gold', image: '/images/psu2.png', type: 'psu', price: 119.99 },
    { id: 'psu3', name: 'Seasonic Focus Plus Gold 1000W', image: '/images/psu3.png', type: 'psu', price: 169.99 },
    { id: 'psu4', name: 'Thermaltake Smart 600W 80+ White', image: '/images/psu4.png', type: 'psu', price: 49.99 },
    { id: 'psu5', name: 'Corsair SF750 750W 80+ Platinum (SFX)', image: '/images/psu5.png', type: 'psu', price: 149.99 },
    { id: 'psu6', name: 'Pure Power 12 M 750W', image: '/images/psu6.png', type: 'psu', price: 89.99 },
  ],
  case: [
    { id: 'case1', name: 'NZXT H7 Flow', image: '/images/case1.png', type: 'case', price: 129.99 },
    { id: 'case2', name: 'Lian Li O11 Dynamic EVO', image: '/images/case2.png', type: 'case', price: 169.99 },
    { id: 'case3', name: 'Fractal Design North', image: '/images/case3.png', type: 'case', price: 139.99 },
    { id: 'case4', name: 'Cooler Master MasterBox Q300L', image: '/images/case4.png', type: 'case', price: 59.99 },
    { id: 'case5', name: 'Hyte Y70 Touch', image: '/images/case5.png', type: 'case', price: 359.99 },
    { id: 'case6', name: 'Montech AIR 903 MAX', image: '/images/case6.png', type: 'case', price: 75.99 },
  ]
};

const BUILD_PROGRESS_IMAGES = {
  0: '/images/img1.JPG',
  1: '/images/img2.JPG',
  2: '/images/img3.JPG',
  3: '/images/img4.JPG',
  4: '/images/img5.JPG',
  5: '/images/img6.JPG',
  6: '/images/img1.JPG',
  7: '/images/img6.JPG', // Generic final image
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
        className="max-w-full max-h-[400px] object-contain"
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto space-y-16">

          {/* Header */}
          <div className="text-center">
            <h1 className="text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Assemble Your Dream PC
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Drag, Drop, or Click to Build Your Perfect Rig!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Build Visualization Area */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center lg:text-left">
                Your PC Build Progress
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
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center lg:text-left">
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
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg shadow-lg transition duration-200 ease-in-out transform hover:scale-105"
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
          <div id="pc-summary" className="bg-white border border-gray-200 rounded-xl shadow-2xl py-4 px-4 lg:py-6 lg:px-6 mt-8">
            <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
              Your Custom PC Summary
            </h2>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10">
              <img
                src={getCurrentImageForBuild(COMPONENT_FLOW.length, selectedComponents)}
                alt="Final PC build"
                className="w-full max-w-md rounded-lg shadow-xl border border-gray-100"
              />

              <div className="w-full max-w-md space-y-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Selected Components:</h3>
                <ul className="space-y-3">
                  {COMPONENT_FLOW.map(({ type, label }) => (
                    <li key={type} className="flex items-center gap-3 bg-gray-50 p-2 rounded-lg shadow-sm border border-gray-100">
                      {selectedComponents[type]?.image ? (
                        <img
                          src={selectedComponents[type].image}
                          alt={label}
                          className="w-10 h-10 object-contain rounded-md border border-gray-200 p-0.5"
                        />
                      ) : (
                        <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-md">
                          <span className="text-gray-500 text-xs">No Img</span>
                        </div>
                      )}
                      <div className="flex-1">
                        <p className="text-gray-700 font-medium text-base">
                          {label}: <span className="font-semibold text-gray-900">{selectedComponents[type]?.name || 'Not Selected'}</span>
                        </p>
                        {selectedComponents[type]?.price && (
                          <p className="text-sm text-gray-500">${selectedComponents[type].price.toFixed(2)}</p>
                        )}
                      </div>
                      <button
                        onClick={() => handleModifyStep(type)}
                        className="ml-auto text-xs text-blue-600 hover:text-blue-800 font-medium hover:underline transition duration-200 px-2 py-0.5 rounded-md bg-blue-50 hover:bg-blue-100"
                      >
                        Change
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-gray-200 pt-3 mt-3 flex justify-between items-center">
                  <p className="text-xl font-extrabold text-gray-900">Total Price:</p>
                  <p className="text-2xl font-extrabold text-blue-700">${totalBuildPrice.toFixed(2)}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold text-xl px-10 py-4 rounded-xl shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 active:scale-95">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default PCBuilder;
  const scrollLeft = (categoryKey) => {
    const container = document.getElementById(`scroll-${categoryKey}`);
    container.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = (categoryKey) => {
    const container = document.getElementById(`scroll-${categoryKey}`);
    container.scrollBy({ left: 300, behavior: 'smooth' });
  };
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Cpu, HardDrive, Monitor, Zap, MemoryStick, CircuitBoard, ShoppingCart, Check } from 'lucide-react';

const CustomPC = () => {
  const [selectedComponents, setSelectedComponents] = useState({});
  const [showBuildSummary, setShowBuildSummary] = useState(false);

  const categories = {
    processors: {
      name: 'Processors (CPU)',
      icon: <Cpu className="w-6 h-6" />,
      products: [
        { id: 'cpu1', name: 'Intel Core i9-13900K', price: 48900, image: '/api/placeholder/200/150' },
        { id: 'cpu2', name: 'AMD Ryzen 9 7900X', price: 45500, image: '/api/placeholder/200/150' },
        { id: 'cpu3', name: 'Intel Core i7-13700K', price: 33900, image: '/api/placeholder/200/150' },
        { id: 'cpu4', name: 'AMD Ryzen 7 7700X', price: 33100, image: '/api/placeholder/200/150' },
        { id: 'cpu5', name: 'Intel Core i5-13600K', price: 26500, image: '/api/placeholder/200/150' },
        { id: 'cpu6', name: 'Intel Core i9-13900K', price: 48900, image: '/api/placeholder/200/150' },
        { id: 'cpu7', name: 'AMD Ryzen 9 7900X', price: 45500, image: '/api/placeholder/200/150' },
      ]
    },
    gpus: {
      name: 'Graphics Cards (GPU)',
      icon: <Monitor className="w-6 h-6" />,
      products: [
        { id: 'gpu1', name: 'NVIDIA RTX 4090', price: 132900, image: '/api/placeholder/200/150' },
        { id: 'gpu2', name: 'NVIDIA RTX 4080', price: 99500, image: '/api/placeholder/200/150' },
        { id: 'gpu3', name: 'AMD RX 7900 XTX', price: 82900, image: '/api/placeholder/200/150' },
        { id: 'gpu4', name: 'NVIDIA RTX 4070 Ti', price: 66300, image: '/api/placeholder/200/150' },
        { id: 'gpu5', name: 'AMD RX 7800 XT', price: 53900, image: '/api/placeholder/200/150' },
        { id: 'gpu6', name: 'NVIDIA RTX 4090', price: 132900, image: '/api/placeholder/200/150' },
        { id: 'gpu7', name: 'NVIDIA RTX 4080', price: 99500, image: '/api/placeholder/200/150' },
      ]
    },
    motherboards: {
      name: 'Motherboards',
      icon: <CircuitBoard className="w-6 h-6" />,
      products: [
        { id: 'mb1', name: 'ASUS ROG Strix Z790-E', price: 37300, image: '/api/placeholder/200/150' },
        { id: 'mb2', name: 'MSI MAG B650 Tomahawk', price: 20700, image: '/api/placeholder/200/150' },
        { id: 'mb3', name: 'Gigabyte Z790 Aorus Elite', price: 24800, image: '/api/placeholder/200/150' },
        { id: 'mb4', name: 'ASRock B550 Steel Legend', price: 14900, image: '/api/placeholder/200/150' },
        { id: 'mb5', name: 'ASUS ROG Strix Z790-E', price: 37300, image: '/api/placeholder/200/150' },
        { id: 'mb6', name: 'MSI MAG B650 Tomahawk', price: 20700, image: '/api/placeholder/200/150' },
        { id: 'mb7', name: 'Gigabyte Z790 Aorus Elite', price: 24800, image: '/api/placeholder/200/150' },
      ]
    },
    memory: {
      name: 'Memory (RAM)',
      icon: <MemoryStick className="w-6 h-6" />,
      products: [
        { id: 'ram1', name: 'Corsair Vengeance 32GB DDR5', price: 24800, image: '/api/placeholder/200/150' },
        { id: 'ram2', name: 'G.Skill Trident Z5 32GB', price: 26500, image: '/api/placeholder/200/150' },
        { id: 'ram3', name: 'Corsair Vengeance 16GB DDR5', price: 12400, image: '/api/placeholder/200/150' },
        { id: 'ram4', name: 'Kingston Fury Beast 32GB', price: 23200, image: '/api/placeholder/200/150' },
        { id: 'ram5', name: 'Corsair Vengeance 32GB DDR5', price: 24800, image: '/api/placeholder/200/150' },
        { id: 'ram6', name: 'G.Skill Trident Z5 32GB', price: 26500, image: '/api/placeholder/200/150' },
        { id: 'ram7', name: 'Corsair Vengeance 16GB DDR5', price: 12400, image: '/api/placeholder/200/150' },
      ]
    },
    storage: {
      name: 'Storage (SSD/HDD)',
      icon: <HardDrive className="w-6 h-6" />,
      products: [
        { id: 'ssd1', name: 'Samsung 980 PRO 2TB NVMe', price: 16500, image: '/api/placeholder/200/150' },
        { id: 'ssd2', name: 'WD Black SN850X 1TB', price: 10700, image: '/api/placeholder/200/150' },
        { id: 'ssd3', name: 'Crucial MX4 1TB SATA', price: 7400, image: '/api/placeholder/200/150' },
        { id: 'ssd4', name: 'Seagate FireCuda 2TB HDD', price: 8200, image: '/api/placeholder/200/150' },
        { id: 'ssd5', name: 'Samsung 980 PRO 2TB NVMe', price: 16500, image: '/api/placeholder/200/150' },
        { id: 'ssd6', name: 'WD Black SN850X 1TB', price: 10700, image: '/api/placeholder/200/150' },
        { id: 'ssd7', name: 'Crucial MX4 1TB SATA', price: 7400, image: '/api/placeholder/200/150' },
      ]
    },
    psu: {
      name: 'Power Supply (PSU)',
      icon: <Zap className="w-6 h-6" />,
      products: [
        { id: 'psu1', name: 'Corsair RM850x 850W 80+ Gold', price: 12400, image: '/api/placeholder/200/150' },
        { id: 'psu2', name: 'EVGA SuperNOVA 750W', price: 9900, image: '/api/placeholder/200/150' },
        { id: 'psu3', name: 'Seasonic Focus GX-650', price: 8200, image: '/api/placeholder/200/150' },
        { id: 'psu4', name: 'be quiet! Straight Power 11', price: 10700, image: '/api/placeholder/200/150' },
        { id: 'psu5', name: 'Corsair RM850x 850W 80+ Gold', price: 12400, image: '/api/placeholder/200/150' },
        { id: 'psu6', name: 'EVGA SuperNOVA 750W', price: 9900, image: '/api/placeholder/200/150' },
        { id: 'psu7', name: 'Seasonic Focus GX-650', price: 8200, image: '/api/placeholder/200/150' },
      ]
    }
  };

  const handleComponentSelect = (categoryKey, product) => {
    setSelectedComponents(prev => ({
      ...prev,
      [categoryKey]: product
    }));
  };



  const calculateTotalPrice = () => {
    return Object.values(selectedComponents).reduce((total, component) => total + component.price, 0);
  };

  const canBuildPC = () => {
    return Object.keys(categories).every(categoryKey => selectedComponents[categoryKey]);
  };

  const handleBuildPC = () => {
    if (canBuildPC()) {
      setShowBuildSummary(true);
    }
  };

  const ProductCard = ({ product, isSelected, onSelect, categoryKey }) => (
    <div 
      className={`group cursor-pointer flex-shrink-0 w-48 sm:w-52 transition-all duration-300 ${
        isSelected ? 'transform scale-105' : 'hover:scale-105'
      }`}
      onClick={() => onSelect(categoryKey, product)}
    >
      <div className={`bg-[#0a0a0a] rounded-xl border transition-all duration-300 overflow-hidden h-64 flex flex-col ${
        isSelected ? 'border-[#F47C5A] ring-2 ring-[#F47C5A]/20' : 'border-black/10 dark:border-white/10 group-hover:border-white/30'
      }`}>
        <div className="relative aspect-[4/3] bg-white/[0.02] flex-shrink-0 p-4">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-contain"
          />
          {isSelected && (
            <div className="absolute top-2 right-2 bg-white text-black hover:bg-gray-200 rounded-full p-1.5 z-10">
              <Check className="w-4 h-4" />
            </div>
          )}
        </div>
        <div className="p-4 flex flex-col flex-grow border-t border-white/[0.04]">
          <div className="h-12 flex items-start">
            <h3 className="font-semibold text-white/90 text-sm leading-tight line-clamp-2">{product.name}</h3>
          </div>
          <div className="mt-auto">
            <p className="text-lg font-bold text-[#F47C5A]">${product.price.toLocaleString('en-US')}</p>
          </div>
        </div>
      </div>
    </div>
  );

  if (showBuildSummary) {
    return (
      <div className="min-h-screen bg-[#f8f9fa] dark:bg-black py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0a0a0a] border border-black/10 dark:border-white/10 rounded-2xl p-8 sm:p-12">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-white mb-3">Your Custom PC Build</h1>
              <p className="text-gray-500 dark:text-white/50 font-light">Here's your selected configuration</p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-xl uppercase tracking-widest font-semibold text-white/90 mb-6">Selected Components</h2>
                <div className="space-y-4">
                  {Object.entries(categories).map(([categoryKey, category]) => {
                    const selectedComponent = selectedComponents[categoryKey];
                    return (
                      <div key={categoryKey} className="flex items-center space-x-4 p-4 bg-white/[0.02] border border-white/[0.04] rounded-lg">
                        <div className="text-chrome">{category.icon}</div>
                        <div className="flex-1">
                          <p className="font-medium text-white/90 text-sm">{selectedComponent.name}</p>
                          <p className="text-xs text-gray-500 dark:text-white/40">{category.name}</p>
                        </div>
                        <p className="font-semibold text-[#F47C5A]">${selectedComponent.price.toLocaleString('en-US')}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-[#0a0a0a] border border-[#F47C5A]/20 rounded-xl p-8 text-white h-fit sticky top-24">
                <h3 className="text-xl uppercase tracking-widest font-bold mb-8">Build Summary</h3>
                <div className="space-y-4 mb-8 text-sm">
                  <div className="flex justify-between text-gray-700 dark:text-white/70">
                    <span>Components Total:</span>
                    <span className="font-semibold text-white">${calculateTotalPrice().toLocaleString('en-US')}</span>
                  </div>
                  <div className="flex justify-between text-gray-700 dark:text-white/70">
                    <span>Assembly Service:</span>
                    <span className="font-semibold text-white">$100</span>
                  </div>
                  <div className="border-t border-black/10 dark:border-white/10 pt-4 mt-2">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total Price:</span>
                      <span className="text-[#F47C5A]">${(calculateTotalPrice() + 100).toLocaleString('en-US')}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <button className="w-full bg-white text-black font-semibold uppercase tracking-widest text-xs py-4 rounded hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>
                  <button 
                    onClick={() => setShowBuildSummary(false)}
                    className="w-full bg-transparent border border-black/20 dark:border-white/20 text-gray-800 dark:text-white/80 font-semibold uppercase tracking-widest text-xs py-4 rounded hover:border-white/50 hover:text-white transition-colors"
                  >
                    Modify Build
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-black py-16 px-5 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold uppercase tracking-widest text-white mb-4">Build Your Custom PC</h1>
          <p className="text-lg text-gray-500 dark:text-white/50 font-light mb-10">Select components from each category to build your dream machine</p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:space-x-4 max-w-md mx-auto">
            <div className="text-xs uppercase tracking-widest font-semibold text-gray-700 dark:text-white/70">
              {Object.keys(selectedComponents).length} of {Object.keys(categories).length} components
            </div>
            <div className="w-full sm:w-64 bg-black/5 dark:bg-white/5 rounded-full h-1">
              <div 
                className="bg-[#F47C5A] h-1 rounded-full transition-all duration-500"
                style={{ width: `${(Object.keys(selectedComponents).length / Object.keys(categories).length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {Object.entries(categories).map(([categoryKey, category]) => (
            <div key={categoryKey} className="bg-[#0a0a0a] border border-black/10 dark:border-white/10 rounded-xl p-6 sm:p-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="text-chrome">{category.icon}</div>
                <h2 className="text-xl uppercase tracking-widest font-semibold text-white">{category.name}</h2>
                {selectedComponents[categoryKey] && (
                  <div className="bg-[#F47C5A]/10 border border-[#F47C5A]/20 text-[#F47C5A] px-3 py-1 rounded text-[10px] uppercase tracking-wider font-semibold flex items-center space-x-1.5 ml-auto sm:ml-4">
                    <Check className="w-3 h-3" />
                    <span>Selected</span>
                  </div>
                )}
              </div>

              <div className="relative group">

                <button 
                  onClick={() => scrollLeft(categoryKey)}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#f8f9fa] dark:bg-black/80 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:bg-black/10 dark:bg-white/10 hover:border-white/30 -ml-4 hidden sm:block"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                
                <button 
                  onClick={() => scrollRight(categoryKey)}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#f8f9fa] dark:bg-black/80 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:bg-black/10 dark:bg-white/10 hover:border-white/30 -mr-4 hidden sm:block"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>

                <div 
                  id={`scroll-${categoryKey}`}
                  className="overflow-x-auto pb-4 scrollbar-hide"
                >
                  <div className="flex gap-4 sm:gap-6 min-w-max px-2">
                    {category.products.map(product => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        isSelected={selectedComponents[categoryKey]?.id === product.id}
                        onSelect={handleComponentSelect}
                        categoryKey={categoryKey}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-[#0a0a0a] border border-black/10 dark:border-white/10 rounded-2xl p-8 sm:p-12 max-w-md mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-[#F47C5A]/[0.02] pointer-events-none" />
            <h3 className="text-2xl font-bold uppercase tracking-widest text-white mb-6 relative z-10">Ready to Build?</h3>
            {calculateTotalPrice() > 0 && (
              <p className="text-sm text-gray-500 dark:text-white/50 mb-8 relative z-10">
                Current Total: <span className="font-bold text-xl text-[#F47C5A] block mt-2">${calculateTotalPrice().toLocaleString('en-US')}</span>
              </p>
            )}
            <button
              onClick={handleBuildPC}
              disabled={!canBuildPC()}
              className={`w-full py-4 px-8 rounded font-semibold text-xs uppercase tracking-widest transition-all duration-300 relative z-10 ${
                canBuildPC()
                  ? 'bg-white text-black hover:bg-gray-200'
                  : 'bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-400 dark:text-white/30 cursor-not-allowed'
              }`}
            >
              {canBuildPC() ? 'Build My PC' : `Select ${Object.keys(categories).length - Object.keys(selectedComponents).length} More Components`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomPC;
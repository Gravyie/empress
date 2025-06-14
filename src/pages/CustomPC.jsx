  const scrollLeft = (categoryKey) => {
    const container = document.getElementById(`scroll-${categoryKey}`);
    container.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = (categoryKey) => {
    const container = document.getElementById(`scroll-${categoryKey}`);
    container.scrollBy({ left: 300, behavior: 'smooth' });
  };import React, { useState } from 'react';
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
      <div className={`bg-white rounded-xl shadow-lg border-2 transition-all duration-300 overflow-hidden h-64 flex flex-col ${
        isSelected ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200 group-hover:border-gray-300 group-hover:shadow-xl'
      }`}>
        <div className="relative aspect-[4/3] bg-gray-50 flex-shrink-0">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {isSelected && (
            <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-1.5">
              <Check className="w-4 h-4" />
            </div>
          )}
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <div className="h-12 flex items-start">
            <h3 className="font-semibold text-gray-800 text-sm leading-tight line-clamp-2">{product.name}</h3>
          </div>
          <div>
            <p className="text-lg font-bold text-blue-600">₹{product.price.toLocaleString('en-IN')}</p>
          </div>
        </div>
      </div>
    </div>
  );

  if (showBuildSummary) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Your Custom PC Build</h1>
              <p className="text-gray-600">Here's your selected configuration</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Selected Components</h2>
                <div className="space-y-4">
                  {Object.entries(categories).map(([categoryKey, category]) => {
                    const selectedComponent = selectedComponents[categoryKey];
                    return (
                      <div key={categoryKey} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="text-blue-600">{category.icon}</div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-800">{selectedComponent.name}</p>
                          <p className="text-sm text-gray-600">{category.name}</p>
                        </div>
                        <p className="font-semibold text-blue-600">₹{selectedComponent.price.toLocaleString('en-IN')}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl p-6 text-white">
                <h3 className="text-2xl font-bold mb-6">Build Summary</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>Components Total:</span>
                    <span className="font-semibold">₹{calculateTotalPrice().toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Assembly Service:</span>
                    <span className="font-semibold">₹8,200</span>
                  </div>
                  <div className="border-t border-white/20 pt-3">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total Price:</span>
                      <span>₹{(calculateTotalPrice() + 8200).toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
                    <ShoppingCart className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </button>
                  <button 
                    onClick={() => setShowBuildSummary(false)}
                    className="w-full bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Build Your Custom PC</h1>
          <p className="text-xl text-gray-600 mb-8">Select components from each category to build your dream machine</p>
          
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="text-sm text-gray-600">
              {Object.keys(selectedComponents).length} of {Object.keys(categories).length} components selected
            </div>
            <div className="w-64 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(Object.keys(selectedComponents).length / Object.keys(categories).length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          {Object.entries(categories).map(([categoryKey, category]) => (
            <div key={categoryKey} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="text-blue-600">{category.icon}</div>
                <h2 className="text-2xl font-semibold text-gray-800">{category.name}</h2>
                {selectedComponents[categoryKey] && (
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-2">
                    <Check className="w-4 h-4" />
                    <span>Selected</span>
                  </div>
                )}
              </div>

              <div className="relative">

                <button 
                  onClick={() => scrollLeft(categoryKey)}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 opacity-75 hover:opacity-100 transition-opacity cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                
                <button 
                  onClick={() => scrollRight(categoryKey)}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 opacity-75 hover:opacity-100 transition-opacity cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>

                <div 
                  id={`scroll-${categoryKey}`}
                  className="overflow-x-auto pb-4"
                >
                  <div className="flex gap-4 min-w-max px-8">
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

        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Build?</h3>
            {calculateTotalPrice() > 0 && (
              <p className="text-lg text-gray-600 mb-6">
                Current Total: <span className="font-bold text-blue-600">₹{calculateTotalPrice().toLocaleString('en-IN')}</span>
              </p>
            )}
            <button
              onClick={handleBuildPC}
              disabled={!canBuildPC()}
              className={`w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 ${
                canBuildPC()
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
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
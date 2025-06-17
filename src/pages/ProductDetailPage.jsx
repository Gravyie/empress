import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetailPage = () => {
  const { productId } = useParams(); // Get the productId from the URL
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(''); // State for the currently displayed main image

  // --- Sample Product Data (Expanded with more images and detailed specs) ---
  // In a real application, this would come from an API or a shared data file.
  const allSampleProducts = {
    'prebuilt-pcs': [
      {
        id: 'cyberpowerpc-gamer-master',
        brand: 'CyberPowerPC',
        name: 'CyberPowerPC Gamer Master Gaming PC',
        description: 'A powerhouse prebuilt gaming PC, designed for extreme performance and stunning visuals. Equipped with the latest generation CPU and GPU, ensuring a smooth experience in demanding games and applications. Features liquid cooling for optimal thermal management and a sleek, customizable RGB lighting system. Ideal for competitive gamers and content creators seeking top-tier performance without the hassle of building from scratch.',
        price: 1499.99,
        originalPrice: 1599.99,
        images: [
          "/images/img1.JPG",
          "/images/img2.JPG",
          "/images/img3.JPG",
        ],
        specs: {
          'CPU': 'AMD Ryzen 7 7700X',
          'GPU': 'NVIDIA GeForce RTX 4070',
          'RAM': '16GB DDR5 5600MHz',
          'Storage': '1TB NVMe PCIe 4.0 SSD',
          'Operating System': 'Windows 11 Home',
          'Cooling': '240mm AIO Liquid Cooler',
          'Power Supply': '750W 80+ Gold PSU'
        },
        badge: { text: 'Gaming Rig', color: 'bg-red-500' },
        inStock: true
      },
      // ... (other prebuilt PCs if any, ensure their `id` matches what you'd pass)
    ],
    'processors': [
      {
        id: 'intel-i9-13900k',
        brand: 'Intel',
        name: 'Intel Core i9-13900K Processor',
        description: 'The Intel Core i9-13900K is a high-performance 13th Gen desktop processor with 24 cores (8 P-cores + 16 E-cores) and 32 threads. It boasts a maximum turbo frequency of up to 5.8 GHz, making it perfect for extreme gaming, demanding productivity tasks, and intensive content creation. Featuring Intel Thread Director for intelligent workload routing, it offers exceptional multitasking capabilities and is built on the LGA 1700 socket.',
        price: 589.99,
        originalPrice: 649.99,
        images: [
          'https://via.placeholder.com/600x400/4285f4/ffffff?text=Intel+i9+Main',
          'https://via.placeholder.com/300x200/4285f4/ffffff?text=Intel+i9+Top',
          'https://via.placeholder.com/300x200/4285f4/ffffff?text=Intel+i9+Side'
        ],
        specs: {
          'Cores': '24 (8 Performance-cores + 16 Efficient-cores)',
          'Threads': '32',
          'Base Clock': '3.0 GHz (P-core) / 2.2 GHz (E-core)',
          'Boost Clock': 'Up to 5.8 GHz',
          'Socket': 'LGA 1700',
          'TDP': '125W (Processor Base Power)',
          'Integrated Graphics': 'Intel UHD Graphics 770',
          'Cache': '36MB Intel Smart Cache'
        },
        badge: { text: 'Flagship', color: 'bg-red-500' },
        inStock: true
      },
      {
        id: 'amd-ryzen-9-7950x',
        brand: 'AMD',
        name: 'AMD Ryzen 9 7950X Processor',
        description: 'The AMD Ryzen 9 7950X is a 16-core, 32-thread desktop processor built on the 5nm "Zen 4" architecture. It delivers incredible performance for gaming, streaming, and content creation, with boost frequencies up to 5.7 GHz. Designed for the AM5 platform, it supports DDR5 memory and PCIe 5.0, offering next-generation connectivity and power efficiency for high-end systems.',
        price: 699.99,
        images: [
          'https://via.placeholder.com/600x400/ed1c24/ffffff?text=AMD+7950X+Main',
          'https://via.placeholder.com/300x200/ed1c24/ffffff?text=AMD+7950X+Box',
          'https://via.placeholder.com/300x200/ed1c24/ffffff?text=AMD+7950X+Chip'
        ],
        specs: {
          'Cores': '16',
          'Threads': '32',
          'Base Clock': '4.5 GHz',
          'Boost Clock': 'Up to 5.7 GHz',
          'Socket': 'AM5',
          'TDP': '170W',
          'Integrated Graphics': 'AMD Radeon Graphics (Basic)',
          'Cache': '64MB L3 Cache'
        },
        badge: { text: 'New', color: 'bg-green-500' },
        inStock: true
      },
      {
        id: 'amd-ryzen-7-7800x3d',
        brand: 'AMD',
        name: 'AMD Ryzen 7 7800X3D Processor',
        description: 'The AMD Ryzen 7 7800X3D is the ultimate gaming processor, featuring AMD 3D V-Cache™ technology which significantly boosts gaming performance by stacking an additional layer of L3 cache. With 8 cores and 16 threads, it delivers exceptional frame rates in even the most demanding titles. Designed for the AM5 platform, it offers superb power efficiency and is a top choice for dedicated gamers.',
        price: 449.99,
        images: [
          'https://via.placeholder.com/600x400/ed1c24/ffffff?text=AMD+7800X3D+Main',
          'https://via.placeholder.com/300x200/ed1c24/ffffff?text=AMD+7800X3D+Top',
          'https://via.placeholder.com/300x200/ed1c24/ffffff?text=AMD+7800X3D+Angle'
        ],
        specs: {
          'Cores': '8',
          'Threads': '16',
          'Base Clock': '4.2 GHz',
          'Boost Clock': 'Up to 5.0 GHz',
          'Socket': 'AM5',
          'TDP': '120W',
          'Integrated Graphics': 'AMD Radeon Graphics (Basic)',
          'Cache': '96MB L3 Cache (3D V-Cache)'
        },
        badge: { text: 'Gaming', color: 'bg-purple-500' },
        inStock: true
      },
      // ... (other processors)
    ],
    'gpus': [
      {
        id: 'nvidia-rtx-4090',
        brand: 'NVIDIA',
        name: 'NVIDIA GeForce RTX 4090 Graphics Card',
        description: 'The NVIDIA GeForce RTX 4090 is the ultimate GeForce GPU. It brings an enormous leap in performance, efficiency, and AI-powered graphics. Experience ultra-high performance gaming, incredibly detailed virtual worlds with ray tracing, unprecedented productivity, and new ways to create. It\'s powered by the NVIDIA Ada Lovelace architecture and comes with 24 GB of G6X memory.',
        price: 1599.99,
        images: [
          'https://via.placeholder.com/600x400/76b900/ffffff?text=RTX+4090+Main',
          'https://via.placeholder.com/300x200/76b900/ffffff?text=RTX+4090+Angle',
          'https://via.placeholder.com/300x200/76b900/ffffff?text=RTX+4090+Ports'
        ],
        specs: {
          'GPU Architecture': 'NVIDIA Ada Lovelace',
          'VRAM': '24GB GDDR6X',
          'CUDA Cores': '16384',
          'Boost Clock': '2.52 GHz',
          'Memory Interface': '384-bit',
          'PCIe Interface': 'PCIe Gen 4.0',
          'Recommended PSU': '850W'
        },
        badge: { text: 'Flagship', color: 'bg-red-500' },
        inStock: true
      },
      {
        id: 'amd-rx-7900xtx',
        brand: 'AMD',
        name: 'AMD Radeon RX 7900XTX Graphics Card',
        description: 'Experience incredible performance, visuals, and features with the AMD Radeon RX 7900XTX graphics card. Featuring AMD RDNA™ 3 architecture, it delivers exceptional 4K and 8K gaming performance, advanced raytracing capabilities, and AMD FidelityFX™ Super Resolution technology. With 24GB of GDDR6 memory, it’s built for the most demanding games and professional workflows.',
        price: 999.99,
        images: [
          'https://via.placeholder.com/600x400/ED1C24/ffffff?text=RX+7900XTX+Main',
          'https://via.placeholder.com/300x200/ED1C24/ffffff?text=RX+7900XTX+Fan',
          'https://via.placeholder.com/300x200/ED1C24/ffffff?text=RX+7900XTX+Backplate'
        ],
        specs: {
          'GPU Architecture': 'AMD RDNA™ 3',
          'VRAM': '24GB GDDR6',
          'Compute Units': '96',
          'Boost Clock': '2.5 GHz',
          'Memory Interface': '384-bit',
          'PCIe Interface': 'PCIe Gen 4.0',
          'Recommended PSU': '800W'
        },
        badge: { text: 'Powerful', color: 'bg-blue-500' },
        inStock: true
      },
      // ... (other GPUs)
    ],
    'motherboards': [
      {
        id: 'asus-rog-strix-z790-e-gaming',
        brand: 'ASUS',
        name: 'ASUS ROG Strix Z790-E Gaming WiFi Motherboard',
        description: 'The ASUS ROG Strix Z790-E Gaming WiFi is a premium Intel Z790 motherboard designed for top-tier gaming and high-performance computing. It supports 12th, 13th, and 14th Gen Intel Core processors, features DDR5 memory support, multiple PCIe 5.0 M.2 slots for ultra-fast storage, and robust power delivery. Integrated Wi-Fi 6E and 2.5 Gb Ethernet ensure lightning-fast networking for an unparalleled gaming and productivity experience.',
        price: 489.99,
        images: [
          'https://via.placeholder.com/600x400/000000/ffffff?text=ASUS+Z790+Main',
          'https://via.placeholder.com/300x200/000000/ffffff?text=ASUS+Z790+IO',
          'https://via.placeholder.com/300x200/000000/ffffff?text=ASUS+Z790+Angle'
        ],
        specs: {
          'Chipset': 'Intel Z790',
          'Socket': 'LGA 1700',
          'RAM Support': '4 x DDR5 DIMM slots, max. 128GB',
          'PCIe Slots': '1 x PCIe 5.0 x16, 2 x PCIe 4.0 x16',
          'Storage': '5 x M.2 slots (PCIe 4.0/5.0), 4 x SATA 6Gb/s ports',
          'Networking': 'Intel 2.5Gb Ethernet, Wi-Fi 6E, Bluetooth v5.3',
          'Form Factor': 'ATX'
        },
        badge: { text: 'High-End', color: 'bg-purple-500' },
        inStock: true
      },
      // ... (other motherboards)
    ],
    'memory': [
      {
        id: 'corsair-vengeance-rgb-ddr5-32gb',
        brand: 'Corsair',
        name: 'Corsair Vengeance RGB DDR5 32GB (2x16GB) 6000MHz',
        description: 'Elevate your PC\'s performance and aesthetics with Corsair Vengeance RGB DDR5 memory. This 32GB (2x16GB) kit clocks in at 6000MHz, providing exceptional speed for gaming, multitasking, and demanding applications. Featuring dynamic, individually addressable RGB lighting, it seamlessly integrates with your system\'s look while delivering cutting-edge DDR5 performance. Optimized for Intel XMP 3.0 and AMD EXPO for easy overclocking.',
        price: 129.99,
        images: [
          'https://via.placeholder.com/600x400/800080/ffffff?text=Corsair+RAM+Main',
          'https://via.placeholder.com/300x200/800080/ffffff?text=Corsair+RAM+Angle',
          'https://via.placeholder.com/300x200/800080/ffffff?text=Corsair+RAM+RGB'
        ],
        specs: {
          'Capacity': '32GB (2 x 16GB)',
          'Memory Type': 'DDR5 SDRAM',
          'Speed': '6000MHz (PC5-48000)',
          'CAS Latency': 'CL30',
          'Voltage': '1.35V',
          'Features': 'RGB Lighting, Intel XMP 3.0 & AMD EXPO Support',
          'Compatibility': 'Intel 600/700 series, AMD 600 series motherboards'
        },
        badge: { text: 'Fast', color: 'bg-blue-500' },
        inStock: true
      },
      // ... (other memory kits)
    ],
    'storage': [
      {
        id: 'samsung-990-pro-2tb',
        brand: 'Samsung',
        name: 'Samsung 990 Pro 2TB NVMe SSD',
        description: 'Unleash the full potential of your gaming and creative applications with the Samsung 990 Pro 2TB NVMe SSD. This PCIe 4.0 SSD delivers incredible sequential read/write speeds of up to 7,450/6,900 MB/s, making it one of the fastest drives on the market. Optimized for heavy workloads, it features an advanced controller and thermal control solutions to maintain peak performance under pressure. Ideal for gamers, content creators, and professionals requiring elite storage.',
        price: 189.99,
        images: [
          'https://via.placeholder.com/600x400/123456/ffffff?text=Samsung+SSD+Main',
          'https://via.placeholder.com/300x200/123456/ffffff?text=Samsung+SSD+Front',
          'https://via.placeholder.com/300x200/123456/ffffff?text=Samsung+SSD+Back'
        ],
        specs: {
          'Capacity': '2TB',
          'Interface': 'PCIe Gen 4.0 x4, NVMe 2.0',
          'Sequential Read': 'Up to 7,450 MB/s',
          'Sequential Write': 'Up to 6,900 MB/s',
          'Form Factor': 'M.2 2280',
          'Controller': 'Samsung Elpis Controller',
          'NAND Flash': 'Samsung V-NAND 3-bit MLC'
        },
        badge: { text: 'Fastest', color: 'bg-red-500' },
        inStock: true
      },
      // ... (other storage devices)
    ],
    'cases': [
      {
        id: 'lian-li-o11-dynamic-evo',
        brand: 'Lian Li',
        name: 'Lian Li O11 Dynamic EVO (Black) Mid-Tower Case',
        description: 'The Lian Li O11 Dynamic EVO is a highly versatile ATX mid-tower case designed for enthusiasts seeking maximum flexibility and aesthetic appeal. It features a reversible design, allowing for standard or inverted layouts, and supports massive cooling configurations with multiple radiator and fan mounting options. With its dual-chamber design, tempered glass panels, and excellent cable management features, it\'s perfect for showcasing high-end builds.',
        price: 169.99,
        images: [
          'https://via.placeholder.com/600x400/333333/ffffff?text=Lian+Li+O11+Main',
          'https://via.placeholder.com/300x200/333333/ffffff?text=Lian+Li+O11+Front',
          'https://via.placeholder.com/300x200/333333/ffffff?text=Lian+Li+O11+Inside'
        ],
        specs: {
          'Form Factor': 'Mid-Tower',
          'Motherboard Support': 'E-ATX, ATX, Micro-ATX, Mini-ITX',
          'Material': 'Steel, Aluminum, Tempered Glass',
          'Max GPU Length': '422mm',
          'Max CPU Cooler Height': '167mm',
          'Fan Support': 'Top: 3x120mm/2x140mm, Side: 3x120mm/2x140mm, Bottom: 3x120mm/2x140mm',
          'Radiator Support': 'Up to 360mm on Top, Side, Bottom'
        },
        badge: { text: 'Popular', color: 'bg-blue-500' },
        inStock: true
      },
      // ... (other cases)
    ],
    'power': [
      {
        id: 'corsair-rm1000e',
        brand: 'Corsair',
        name: 'Corsair RM1000e 1000W 80 PLUS Gold Fully Modular PSU',
        description: 'The Corsair RM1000e is a reliable and highly efficient 1000W power supply, perfect for powering high-performance gaming rigs and workstations. Rated 80 PLUS Gold for up to 90% efficiency, it reduces power consumption and heat. Its fully modular cabling system allows for clean builds and easy cable management, while its silent fan operation ensures a quiet computing experience. Backed by a 7-year warranty for peace of mind.',
        price: 159.99,
        images: [
          'https://via.placeholder.com/600x400/FFD700/000000?text=Corsair+PSU+Main',
          'https://via.placeholder.com/300x200/FFD700/000000?text=Corsair+PSU+Modular',
          'https://via.placeholder.com/300x200/FFD700/000000?text=Corsair+PSU+Fan'
        ],
        specs: {
          'Wattage': '1000W',
          'Efficiency Rating': '80 PLUS Gold',
          'Form Factor': 'ATX',
          'Modularity': 'Fully Modular',
          'Fan Bearing Technology': 'Rifle Bearing',
          'Capacitors': '100% Japanese 105°C',
          'Warranty': '7 Years'
        },
        badge: { text: 'High Power', color: 'bg-red-500' },
        inStock: true
      },
      // ... (other power supplies)
    ],
    'cooling': [
      {
        id: 'arctic-liquid-freezer-ii-360',
        brand: 'ARCTIC',
        name: 'ARCTIC Liquid Freezer II 360 AIO Liquid Cooler',
        description: 'The ARCTIC Liquid Freezer II 360 is an all-in-one CPU liquid cooler renowned for its exceptional cooling performance and quiet operation. Featuring a 360mm radiator, three high-quality PWM fans, and an optimized pump, it effectively dissipates heat from even the most demanding processors. Its integrated VRM fan further cools motherboard components, ensuring overall system stability. A top choice for overclockers and silent PC enthusiasts.',
        price: 139.99,
        images: [
          'https://via.placeholder.com/600x400/4682B4/ffffff?text=ARCTIC+Cooler+Main',
          'https://via.placeholder.com/300x200/4682B4/ffffff?text=ARCTIC+Cooler+Radiator',
          'https://via.placeholder.com/300x200/4682B4/ffffff?text=ARCTIC+Cooler+Pump'
        ],
        specs: {
          'Cooler Type': 'All-in-One Liquid Cooler',
          'Radiator Size': '360mm',
          'Fan Size': '3 x 120mm P12 PWM fans',
          'Pump Speed': '800-2000 RPM (PWM)',
          'VRM Fan': '40mm, 1000-3000 RPM (PWM)',
          'Socket Compatibility': 'Intel: LGA1700, 1200, 115X, 2011-3, 2066; AMD: AM5, AM4',
          'Tubing Length': '450mm'
        },
        badge: { text: 'Top Performer', color: 'bg-red-500' },
        inStock: true
      },
      // ... (other cooling solutions)
    ]
    // Add other categories and their products as needed, ensuring 'images' key exists
  };

  // --- useEffect to load product data ---
  useEffect(() => {
    let foundProduct = null;
    // Iterate through all categories to find the product by its ID
    for (const categoryId in allSampleProducts) {
      const productsInThisCategory = allSampleProducts[categoryId];
      foundProduct = productsInThisCategory.find(p => p.id === productId);
      if (foundProduct) {
        break; // Product found, stop searching
      }
    }

    if (foundProduct) {
      setProduct(foundProduct);
      setMainImage(foundProduct.images[0]); // Set the first image as main
    } else {
      // Handle case where product is not found (e.g., navigate to a 404 page or category page)
      console.warn(`Product with ID "${productId}" not found.`);
      navigate('/categories'); // Or navigate('/404');
    }
  }, [productId, navigate]); // Rerun when productId changes

  if (!product) {
    // You could render a loading spinner or a "Product Not Found" message here
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
        Loading product details...
      </div>
    );
  }

  const handleThumbnailClick = (imageSrc) => {
    setMainImage(imageSrc);
  };

  const handleBuyNow = () => {
    console.log(`Buying ${product.name} now!`);
    // Implement actual checkout logic here
    alert(`Proceeding to checkout for ${product.name}`);
  };

  const handleAddToCart = () => {
    if (product.inStock) {
      console.log(`Added ${product.name} to cart!`);
      // Implement add to cart logic here (e.g., update global cart state)
      alert(`${product.name} added to cart!`);
    } else {
      alert(`${product.name} is currently out of stock.`);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 lg:grid lg:grid-cols-2 lg:gap-10 flex flex-col">

        {/* Back to Products Link */}
        <div className="lg:col-span-2">
          <button
            onClick={() => navigate(-1)} // Go back one step in history
            className="flex items-center text-purple-700 hover:text-indigo-600 transition-colors text-sm font-semibold"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Products
          </button>
        </div>

        {/* Left Section: Image Gallery */}
        <div className="flex flex-col items-center">
          {/* Main Image */}
          <div className="relative h-[600px] w-full max-w-lg lg:max-w-none bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center p-4 mb-4 shadow-md">
            <img
              src={mainImage}
              alt={product.name}
              className="max-w-full max-h-full object-contain"
            />
            {/* Out of Stock Badge for Main Image */}
            {!product.inStock && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-xl">
                <span className="bg-red-600 text-white px-5 py-2 rounded-lg font-bold text-lg">
                  Out of Stock
                </span>
              </div>
            )}
          </div>

          {/* Thumbnail Images */}
          {product.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2 justify-center w-full max-w-lg lg:max-w-none">
              {product.images.map((imgSrc, index) => (
                <div
                  key={index}
                  className={`w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 cursor-pointer transition-all duration-200
                    ${mainImage === imgSrc ? 'border-purple-600 shadow-md' : 'border-gray-200 hover:border-purple-300'}`}
                  onClick={() => handleThumbnailClick(imgSrc)}
                >
                  <img
                    src={imgSrc}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Section: Details */}
        <div className="mt-8 lg:mt-0">
          <span className="text-sm text-gray-500 uppercase font-semibold tracking-wide block mb-2">
            {product.brand}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {product.name}
          </h1>

          <p className="text-gray-700 leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Price */}
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-4xl font-bold text-purple-700">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
            {product.originalPrice && product.price < product.originalPrice && (
                <span className="ml-2 text-green-600 font-semibold text-sm">
                  Save ${(product.originalPrice - product.price).toFixed(2)}!
                </span>
            )}
          </div>

          {/* Specifications */}
          <h2 className="text-xl font-bold text-gray-800 mb-3 border-b pb-2">
            Specifications
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            {Object.entries(product.specs).map(([key, value]) => (
              <li key={key}>
                <span className="font-semibold">{key}:</span> {value}
              </li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleBuyNow}
              disabled={!product.inStock}
              className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-lg font-semibold py-3 px-6 rounded-xl shadow-lg hover:from-purple-700 hover:to-indigo-700 transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              Buy Now
            </button>
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="flex-1 bg-white border-2 border-purple-600 text-purple-700 text-lg font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-purple-50 hover:border-purple-700 transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
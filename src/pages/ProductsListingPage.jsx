import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams and useNavigate
import { useInView } from "react-intersection-observer";

const ProductsListingPage = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const { categoryId } = useParams(); // Get the categoryId from the URL (e.g., 'processors', 'gpus')
  const navigate = useNavigate(); // Initialize useNavigate for programmatic navigation

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    brand: '',
    priceRange: '',
    sortBy: ''
  });

  // --- Sample Product Data (Expanded to include multiple categories) ---
  // In a real application, you would typically fetch this data from an API
  const allSampleProducts = {
    'prebuilt-pcs': [
      {
        id: 'cyberpowerpc-gamer-master',
        brand: 'CyberPowerPC',
        name: 'CyberPowerPC Gamer Master Gaming PC',
        description: 'Prebuilt gaming PC with RTX 4070 and Ryzen 7 7700X. Ready for high-performance gaming out of the box.',
        price: 1499.99,
        image: '/images/img1.JPG',
        specs: {
          'CPU': 'Ryzen 7 7700X',
          'GPU': 'RTX 4070',
          'RAM': '16GB DDR5',
          'Storage': '1TB NVMe SSD'
        },
        badge: { text: 'Gaming Rig', color: 'bg-red-500' },
        inStock: true
      },
      {
        id: 'skytech-shiva-gaming-pc',
        brand: 'Skytech',
        name: 'Skytech Shiva Gaming PC',
        description: 'High-performance prebuilt PC featuring an Intel Core i9 and NVIDIA RTX 4080.',
        price: 2199.99,
        image: '/images/img3.JPG',
        specs: {
          'CPU': 'Intel Core i9-13900K',
          'GPU': 'RTX 4080',
          'RAM': '32GB DDR5',
          'Storage': '2TB NVMe SSD'
        },
        badge: { text: 'Pro Gaming', color: 'bg-purple-500' },
        inStock: true
      },
      {
        id: 'hp-omen-25l-gaming-desktop',
        brand: 'HP',
        name: 'HP OMEN 25L Gaming Desktop',
        description: 'Compact and powerful gaming desktop with AMD Ryzen 5 and RTX 3050. Great for entry-level gaming.',
        price: 899.99,
        image: 'https://via.placeholder.com/300x200/007bff/ffffff?text=HP+OMEN',
        specs: {
          'CPU': 'Ryzen 5 5600G',
          'GPU': 'RTX 3050',
          'RAM': '8GB DDR4',
          'Storage': '512GB NVMe SSD'
        },
        badge: { text: 'Value Pick', color: 'bg-green-500' },
        inStock: true
      }
    ],
    'processors': [
      {
        id: 'intel-i9-13900k',
        brand: 'Intel',
        name: 'Intel Core i9-13900K',
        description: 'High-performance 13th Gen processor with 24 cores and 32 threads. Perfect for gaming and content creation with boost speeds up to 5.8GHz.',
        price: 589.99,
        originalPrice: 649.99,
        image: 'https://via.placeholder.com/300x200/4285f4/ffffff?text=Intel+i9',
        specs: {
          'Cores': '24 (8P+16E)',
          'Threads': '32',
          'Base Clock': '3.0 GHz',
          'Boost Clock': '5.8 GHz',
          'Socket': 'LGA 1700'
        },
        badge: { text: 'Flagship', color: 'bg-red-500' },
        inStock: true
      },
      {
        id: 'amd-ryzen-9-7950x',
        brand: 'AMD',
        name: 'AMD Ryzen 9 7950X',
        description: 'Powerful 16-core processor built on 5nm technology. Exceptional performance for demanding workloads and gaming.',
        price: 699.99,
        image: 'https://via.placeholder.com/300x200/ed1c24/ffffff?text=AMD+Ryzen',
        specs: {
          'Cores': '16',
          'Threads': '32',
          'Base Clock': '4.5 GHz',
          'Boost Clock': '5.7 GHz',
          'Socket': 'AM5'
        },
        badge: { text: 'New', color: 'bg-green-500' },
        inStock: true
      },
      {
        id: 'intel-i7-13700k',
        brand: 'Intel',
        name: 'Intel Core i7-13700K',
        description: 'Excellent gaming and productivity processor with 16 cores and 24 threads. Great balance of performance and value.',
        price: 419.99,
        image: 'https://via.placeholder.com/300x200/4285f4/ffffff?text=Intel+i7',
        specs: {
          'Cores': '16 (8P+8E)',
          'Threads': '24',
          'Base Clock': '3.4 GHz',
          'Boost Clock': '5.4 GHz',
          'Socket': 'LGA 1700'
        },
        badge: { text: 'Popular', color: 'bg-blue-500' },
        inStock: true
      },
      {
        id: 'amd-ryzen-7-7800x3d',
        brand: 'AMD',
        name: 'AMD Ryzen 7 7800X3D',
        description: 'Gaming-focused processor with 3D V-Cache technology. Delivers exceptional gaming performance with 8 cores and 16 threads.',
        price: 449.99,
        image: 'https://via.placeholder.com/300x200/ed1c24/ffffff?text=AMD+7800X3D',
        specs: {
          'Cores': '8',
          'Threads': '16',
          'Base Clock': '4.2 GHz',
          'Boost Clock': '5.0 GHz',
          'Socket': 'AM5'
        },
        badge: { text: 'Gaming', color: 'bg-purple-500' },
        inStock: true
      },
      {
        id: 'intel-i5-13600k',
        brand: 'Intel',
        name: 'Intel Core i5-13600K',
        description: 'Mid-range powerhouse with 14 cores and 20 threads. Perfect for gaming and streaming with excellent price-to-performance ratio.',
        price: 319.99,
        image: 'https://via.placeholder.com/300x200/4285f4/ffffff?text=Intel+i5',
        specs: {
          'Cores': '14 (6P+8E)',
          'Threads': '20',
          'Base Clock': '3.5 GHz',
          'Boost Clock': '5.1 GHz',
          'Socket': 'LGA 1700'
        },
        badge: { text: 'Best Value', color: 'bg-amber-500' },
        inStock: true
      },
      {
        id: 'amd-ryzen-5-7600x',
        brand: 'AMD',
        name: 'AMD Ryzen 5 7600X',
        description: 'Efficient 6-core processor perfect for gaming and everyday tasks. Great entry point into the AM5 platform.',
        price: 299.99,
        image: 'https://via.placeholder.com/300x200/ed1c24/ffffff?text=AMD+Ryzen+5',
        specs: {
          'Cores': '6',
          'Threads': '12',
          'Base Clock': '4.7 GHz',
          'Boost Clock': '5.3 GHz',
          'Socket': 'AM5'
        },
        badge: { text: 'Budget', color: 'bg-emerald-500' },
        inStock: false
      }
    ],
    'gpus': [
      {
        id: 'nvidia-rtx-4090',
        brand: 'NVIDIA',
        name: 'NVIDIA GeForce RTX 4090',
        description: 'Ultimate performance for gaming and content creation. 24GB GDDR6X VRAM and Ada Lovelace architecture.',
        price: 1599.99,
        image: 'https://via.placeholder.com/300x200/76b900/ffffff?text=RTX+4090',
        specs: {
          'VRAM': '24GB GDDR6X',
          'Boost Clock': '2.52 GHz',
          'Interface': 'PCIe 4.0'
        },
        badge: { text: 'Flagship', color: 'bg-red-500' },
        inStock: true
      },
      {
        id: 'amd-rx-7900xtx',
        brand: 'AMD',
        name: 'AMD Radeon RX 7900XTX',
        description: 'High-end gaming performance from AMD RDNA 3 architecture. Features 24GB GDDR6 VRAM.',
        price: 999.99,
        image: 'https://via.placeholder.com/300x200/ED1C24/ffffff?text=RX+7900XTX',
        specs: {
          'VRAM': '24GB GDDR6',
          'Boost Clock': '2.5 GHz',
          'Interface': 'PCIe 4.0'
        },
        badge: { text: 'Powerful', color: 'bg-blue-500' },
        inStock: true
      },
      {
        id: 'nvidia-rtx-4070',
        brand: 'NVIDIA',
        name: 'NVIDIA GeForce RTX 4070',
        description: 'Excellent 1440p gaming performance with DLSS 3 and ray tracing capabilities. 12GB GDDR6X VRAM.',
        price: 599.99,
        image: 'https://via.placeholder.com/300x200/76b900/ffffff?text=RTX+4070',
        specs: {
          'VRAM': '12GB GDDR6X',
          'Boost Clock': '2.48 GHz',
          'Interface': 'PCIe 4.0'
        },
        badge: { text: 'Popular', color: 'bg-green-500' },
        inStock: true
      },
      {
        id: 'amd-rx-7800xt',
        brand: 'AMD',
        name: 'AMD Radeon RX 7800XT',
        description: 'Strong contender for 1440p gaming. 16GB GDDR6 VRAM, great value.',
        price: 499.99,
        image: 'https://via.placeholder.com/300x200/ed1c24/ffffff?text=RX+7800XT',
        specs: {
          'VRAM': '16GB GDDR6',
          'Boost Clock': '2.43 GHz',
          'Interface': 'PCIe 4.0'
        },
        badge: { text: 'Great Value', color: 'bg-teal-500' },
        inStock: true
      }
    ],
    'motherboards': [
      {
        id: 'asus-rog-strix-z790-e-gaming',
        brand: 'ASUS',
        name: 'ASUS ROG Strix Z790-E Gaming WiFi',
        description: 'Premium Intel Z790 motherboard for 12th/13th/14th Gen CPUs. Features DDR5 support, PCIe 5.0, and Wi-Fi 6E.',
        price: 489.99,
        image: 'https://via.placeholder.com/300x200/000000/ffffff?text=ASUS+Z790',
        specs: {
          'Chipset': 'Intel Z790',
          'Socket': 'LGA 1700',
          'RAM': 'DDR5'
        },
        badge: { text: 'High-End', color: 'bg-purple-500' },
        inStock: true
      },
      {
        id: 'msi-mag-b650-tomahawk-wifi',
        brand: 'MSI',
        name: 'MSI MAG B650 TOMAHAWK WIFI',
        description: 'Solid AMD B650 motherboard for Ryzen 7000 series. Offers DDR5 support, multiple M.2 slots, and Wi-Fi 6E.',
        price: 219.99,
        image: 'https://via.placeholder.com/300x200/696969/ffffff?text=MSI+B650',
        specs: {
          'Chipset': 'AMD B650',
          'Socket': 'AM5',
          'RAM': 'DDR5'
        },
        badge: { text: 'Value', color: 'bg-amber-500' },
        inStock: true
      },
      {
        id: 'gigabyte-b760-aorus-elite-ax',
        brand: 'Gigabyte',
        name: 'Gigabyte B760 AORUS ELITE AX',
        description: 'Mid-range Intel B760 motherboard with DDR5 support and strong VRM for gaming PCs.',
        price: 189.99,
        image: 'https://via.placeholder.com/300x200/004d40/ffffff?text=Gigabyte+B760',
        specs: {
          'Chipset': 'Intel B760',
          'Socket': 'LGA 1700',
          'RAM': 'DDR5'
        },
        badge: { text: 'Gaming Ready', color: 'bg-blue-500' },
        inStock: true
      }
    ],
    'memory': [
      {
        id: 'corsair-vengeance-rgb-ddr5-32gb',
        brand: 'Corsair',
        name: 'Corsair Vengeance RGB DDR5 32GB (2x16GB) 6000MHz',
        description: 'High-performance RGB DDR5 RAM for gaming and high-end systems. Optimized for Intel XMP 3.0 and AMD EXPO.',
        price: 129.99,
        image: 'https://via.placeholder.com/300x200/800080/ffffff?text=Corsair+RAM',
        specs: {
          'Capacity': '32GB (2x16GB)',
          'Speed': '6000MHz',
          'Type': 'DDR5'
        },
        badge: { text: 'Fast', color: 'bg-blue-500' },
        inStock: true
      },
      {
        id: 'gskill-trident-z5-rgb-ddr5-64gb',
        brand: 'G.Skill',
        name: 'G.Skill Trident Z5 RGB DDR5 64GB (2x32GB) 6400MHz',
        description: 'Max out your memory with this high-capacity, high-speed kit, featuring stunning RGB lighting.',
        price: 249.99,
        image: 'https://via.placeholder.com/300x200/800000/ffffff?text=G.Skill+RAM',
        specs: {
          'Capacity': '64GB (2x32GB)',
          'Speed': '6400MHz',
          'Type': 'DDR5'
        },
        badge: { text: 'Pro', color: 'bg-red-500' },
        inStock: true
      },
      {
        id: 'kingston-fury-beast-ddr4-16gb',
        brand: 'Kingston',
        name: 'Kingston FURY Beast DDR4 16GB (2x8GB) 3200MHz',
        description: 'Reliable and affordable DDR4 memory for mainstream builds. Great for gaming and everyday tasks.',
        price: 49.99,
        image: 'https://via.placeholder.com/300x200/5a5a5a/ffffff?text=Kingston+DDR4',
        specs: {
          'Capacity': '16GB (2x8GB)',
          'Speed': '3200MHz',
          'Type': 'DDR4'
        },
        badge: { text: 'Budget Friendly', color: 'bg-green-500' },
        inStock: true
      }
    ],
    'storage': [
      {
        id: 'samsung-990-pro-2tb',
        brand: 'Samsung',
        name: 'Samsung 990 Pro 2TB NVMe SSD',
        description: 'Blazing fast NVMe SSD for unparalleled storage performance. Ideal for gaming and content creation.',
        price: 189.99,
        image: 'https://via.placeholder.com/300x200/123456/ffffff?text=Samsung+SSD',
        specs: {
          'Capacity': '2TB',
          'Interface': 'PCIe 4.0 NVMe',
          'Read Speed': '7450 MB/s'
        },
        badge: { text: 'Fastest', color: 'bg-red-500' },
        inStock: true
      },
      {
        id: 'wd-black-sn850x-1tb',
        brand: 'Western Digital',
        name: 'WD_BLACK SN850X 1TB NVMe SSD',
        description: 'High-performance NVMe SSD optimized for gaming, reducing load times dramatically.',
        price: 99.99,
        image: 'https://via.placeholder.com/300x200/000080/ffffff?text=WD+SSD',
        specs: {
          'Capacity': '1TB',
          'Interface': 'PCIe 4.0 NVMe',
          'Read Speed': '7300 MB/s'
        },
        badge: { text: 'Gaming', color: 'bg-purple-500' },
        inStock: true
      },
      {
        id: 'crucial-mx500-1tb-ssd',
        brand: 'Crucial',
        name: 'Crucial MX500 1TB SATA SSD',
        description: 'Reliable and cost-effective SATA SSD for general storage and older systems.',
        price: 69.99,
        image: 'https://via.placeholder.com/300x200/808080/ffffff?text=Crucial+SSD',
        specs: {
          'Capacity': '1TB',
          'Interface': 'SATA 6Gb/s',
          'Read Speed': '560 MB/s'
        },
        badge: { text: 'Reliable', color: 'bg-blue-500' },
        inStock: true
      }
    ],
    'cases': [
      {
        id: 'lian-li-o11-dynamic-evo',
        brand: 'Lian Li',
        name: 'Lian Li O11 Dynamic EVO (Black)',
        description: 'Modular ATX Mid-Tower case with reversible design for optimal build flexibility and stunning aesthetics.',
        price: 169.99,
        image: 'https://via.placeholder.com/300x200/333333/ffffff?text=Lian+Li+O11',
        specs: {
          'Form Factor': 'Mid-Tower',
          'Material': 'Steel, Aluminum, Tempered Glass',
          'Fan Support': 'Up to 10 fans'
        },
        badge: { text: 'Popular', color: 'bg-blue-500' },
        inStock: true
      },
      {
        id: 'nzxt-h7-flow',
        brand: 'NZXT',
        name: 'NZXT H7 Flow (White)',
        description: 'Clean, modern mid-tower case with excellent airflow, perfect for high-performance builds and easy cable management.',
        price: 129.99,
        image: 'https://via.placeholder.com/300x200/E0E0E0/000000?text=NZXT+H7',
        specs: {
          'Form Factor': 'Mid-Tower',
          'Material': 'Steel, Tempered Glass',
          'Fan Support': 'Up to 7 fans'
        },
        badge: { text: 'Sleek', color: 'bg-gray-700' },
        inStock: true
      },
      {
        id: 'fractal-design-north',
        brand: 'Fractal Design',
        name: 'Fractal Design North (Chalk White)',
        description: 'Stylish case with a real wood front panel, blending Scandinavian design with excellent cooling performance.',
        price: 139.99,
        image: 'https://via.placeholder.com/300x200/F5F5DC/000000?text=Fractal+North',
        specs: {
          'Form Factor': 'Mid-Tower',
          'Material': 'Steel, Wood, Tempered Glass',
          'Fan Support': 'Up to 8 fans'
        },
        badge: { text: 'Elegant', color: 'bg-brown-500' },
        inStock: true
      }
    ],
    'power': [
      {
        id: 'corsair-rm1000e',
        brand: 'Corsair',
        name: 'Corsair RM1000e 1000W 80 PLUS Gold Fully Modular PSU',
        description: 'Reliable and efficient power supply for demanding systems, with fully modular cables for clean builds.',
        price: 159.99,
        image: 'https://via.placeholder.com/300x200/FFD700/000000?text=Corsair+PSU',
        specs: {
          'Wattage': '1000W',
          'Efficiency': '80 Plus Gold',
          'Modularity': 'Fully Modular'
        },
        badge: { text: 'High Power', color: 'bg-red-500' },
        inStock: true
      },
      {
        id: 'seasonic-focus-plus-gold-750w',
        brand: 'Seasonic',
        name: 'Seasonic FOCUS Plus Gold 750W 80 PLUS Gold Fully Modular PSU',
        description: 'Excellent mid-range power supply with great reliability and quiet operation.',
        price: 109.99,
        image: 'https://via.placeholder.com/300x200/FFD700/000000?text=Seasonic+PSU',
        specs: {
          'Wattage': '750W',
          'Efficiency': '80 Plus Gold',
          'Modularity': 'Fully Modular'
        },
        badge: { text: 'Reliable', color: 'bg-green-500' },
        inStock: true
      },
      {
        id: 'evga-supernova-650-g5',
        brand: 'EVGA',
        name: 'EVGA SuperNOVA 650 G5 650W 80 PLUS Gold Fully Modular PSU',
        description: 'Compact and efficient power supply, ideal for smaller builds or less power-hungry systems.',
        price: 89.99,
        image: 'https://via.placeholder.com/300x200/FFD700/000000?text=EVGA+PSU',
        specs: {
          'Wattage': '650W',
          'Efficiency': '80 Plus Gold',
          'Modularity': 'Fully Modular'
        },
        badge: { text: 'Compact', color: 'bg-blue-500' },
        inStock: true
      }
    ],
    'cooling': [
      {
        id: 'arctic-liquid-freezer-ii-360',
        brand: 'ARCTIC',
        name: 'ARCTIC Liquid Freezer II 360 AIO Liquid Cooler',
        description: 'High-performance all-in-one liquid cooler for CPUs, known for excellent thermal performance and quiet operation.',
        price: 139.99,
        image: 'https://via.placeholder.com/300x200/4682B4/ffffff?text=ARCTIC+Cooler',
        specs: {
          'Type': 'AIO Liquid Cooler',
          'Radiator Size': '360mm',
          'Compatibility': 'Intel/AMD'
        },
        badge: { text: 'Top Performer', color: 'bg-red-500' },
        inStock: true
      },
      {
        id: 'noctua-nh-d15',
        brand: 'Noctua',
        name: 'Noctua NH-D15 CPU Air Cooler',
        description: 'Legendary quiet and powerful air cooler, rivaling many AIOs in performance, with brown fans.',
        price: 109.99,
        image: 'https://via.placeholder.com/300x200/8B4513/ffffff?text=Noctua+Cooler',
        specs: {
          'Type': 'Air Cooler',
          'Fan Size': '2x 140mm',
          'Compatibility': 'Intel/AMD'
        },
        badge: { text: 'Silent King', color: 'bg-brown-500' },
        inStock: true
      },
      {
        id: 'cooler-master-hyper-212-rgb',
        brand: 'Cooler Master',
        name: 'Cooler Master Hyper 212 RGB Black Edition',
        description: 'Iconic air cooler with updated aesthetics and RGB lighting. Great balance of price and performance.',
        price: 49.99,
        image: 'https://via.placeholder.com/300x200/222222/ffffff?text=Hyper+212',
        specs: {
          'Type': 'Air Cooler',
          'Fan Size': '120mm',
          'Compatibility': 'Intel/AMD'
        },
        badge: { text: 'Budget RGB', color: 'bg-green-500' },
        inStock: true
      }
    ]
    // Make sure all category IDs from CategoriesPage are present here with their products
  };

  // --- useEffect to load products based on categoryId ---
  useEffect(() => {
    // Get products for the current categoryId, or an empty array if not found
    // The `|| []` ensures that if a categoryId doesn't exist in allSampleProducts,
    // it defaults to an empty array, preventing errors.
    const productsForCategory = allSampleProducts[categoryId] || [];
    setProducts(productsForCategory);
    setFilteredProducts(productsForCategory); // Initialize filtered products with all products in the category

    // Reset filters when the category changes to ensure a clean state for the new category
    setFilters({
      brand: '',
      priceRange: '',
      sortBy: ''
    });
  }, [categoryId]); // This effect runs whenever the categoryId changes in the URL

  // --- useEffect to apply filters and sorting ---
  useEffect(() => {
    let currentFiltered = [...products]; // Start with the full list of products for the current category

    // Apply Brand Filter
    if (filters.brand) {
      currentFiltered = currentFiltered.filter(product =>
        product.brand.toLowerCase() === filters.brand.toLowerCase()
      );
    }

    // Apply Price Range Filter
    if (filters.priceRange) {
      switch (filters.priceRange) {
        case 'under-200':
          currentFiltered = currentFiltered.filter(product => product.price < 200);
          break;
        case '200-500':
          currentFiltered = currentFiltered.filter(product => product.price >= 200 && product.price <= 500);
          break;
        case 'over-500':
          currentFiltered = currentFiltered.filter(product => product.price > 500);
          break;
        default:
          break; // Handle cases where value might be empty or invalid
      }
    }

    // Apply Sorting
    if (filters.sortBy) {
      switch (filters.sortBy) {
        case 'price-low':
          currentFiltered.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          currentFiltered.sort((a, b) => b.price - a.price);
          break;
        case 'name':
          currentFiltered.sort((a, b) => a.name.localeCompare(b.name));
          break;
        default:
          break; // Handle cases where value might be empty or invalid
      }
    }

    setFilteredProducts(currentFiltered); // Update the state with the filtered and sorted products
  }, [filters, products]); // Re-run this effect when filters or the base product list changes

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleAddToCart = (e, productId) => {
    e.stopPropagation(); // Prevent the product card's onClick (handleProductClick) from firing
    const product = products.find(p => p.id === productId);
    if (product && product.inStock) {
      console.log(`Added ${product.name} to cart!`);
      // In a real application, you would dispatch an action to add to a global cart state (e.g., using Context API or Redux)
      // For now, it's just a console log.
    } else {
      console.log(`${product.name} is out of stock.`);
    }
  };

  const handleProductClick = (productId) => {
    // console.log(`Navigating to product detail page for: ${productId}`); // You can keep or remove this console.log
    navigate('/product/' + productId); // <--- THIS IS THE REQUIRED CHANGE
  };

  const goToCategories = () => {
    navigate('/categories'); // Navigate back to the main categories page
  };

  // Helper function to capitalize and format category name for display in the header
  const formatCategoryName = (id) => {
    if (!id) return 'Products'; // Default if categoryId is somehow missing
    // Replace hyphens with spaces, then capitalize each word
    return id.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-5 py-5">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <div className="text-black/80 text-sm mb-2">
                <button
                  onClick={goToCategories}
                  className="hover:text-white transition-colors"
                >
                  Categories
                </button>
                <span className="mx-2">/</span>
                {/* Display the formatted current category name */}
                <span className="font-semibold">{formatCategoryName(categoryId)}</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-black drop-shadow-lg">
                {formatCategoryName(categoryId)}
              </h1>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              {/* Brand Filter: Dynamically populate options based on available products in the current category */}
              <select
                className="px-4 py-2 rounded-lg bg-white/90 backdrop-blur-sm border-0 focus:ring-2 focus:ring-purple-300 text-sm"
                value={filters.brand}
                onChange={(e) => handleFilterChange('brand', e.target.value)}
              >
                <option value="">All Brands</option>
                {/* Create a unique set of brands from the current category's products */}
                {[...new Set(products.map(p => p.brand))].sort().map(brand => (
                  <option key={brand} value={brand.toLowerCase()}>{brand}</option>
                ))}
              </select>

              <select
                className="px-4 py-2 rounded-lg bg-white/90 backdrop-blur-sm border-0 focus:ring-2 focus:ring-purple-300 text-sm"
                value={filters.priceRange}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              >
                <option value="">All Prices</option>
                <option value="under-200">Under $200</option>
                <option value="200-500">$200 - $500</option>
                <option value="over-500">Over $500</option>
              </select>

              <select
                className="px-4 py-2 rounded-lg bg-white/90 backdrop-blur-sm border-0 focus:ring-2 focus:ring-purple-300 text-sm"
                value={filters.sortBy}
                onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              >
                <option value="">Sort By</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto px-5 py-8 transition-opacity duration-1000 ${
        inView ? "animate-fadeInFromBack" : "opacity-0"
        }`}
      >
        {filteredProducts.length === 0 ? (
          <div className="text-center text-white py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">No products found</h3>
            <p className="text-white/80">Try adjusting your filters</p>
            {/* Provide a button to clear filters */}
            {(filters.brand || filters.priceRange || filters.sortBy) && (
              <button
                onClick={() => setFilters({ brand: '', priceRange: '', sortBy: '' })}
                className="mt-4 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Clear Filters
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => handleProductClick(product.id)} // This triggers the navigation
                className="group bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-white/20"
              >
                {/* Product Image */}
                <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-[80%] max-h-[80%] object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute top-3 right-3 ${product.badge.color} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                    {product.badge.text}
                  </div>
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Content */}
                <div className="p-6">
                  <div className='h-[150px]'>
                  <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-2">
                    {product.brand}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {product.description}
                  </p>
                  </div>

                  {/* Specs */}
                  <div className="bg-gray-50 rounded-lg p-3 mb-4 space-y-1">
                    {Object.entries(product.specs).slice(0, 3).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-xs">
                        <span className="text-gray-500 font-medium">{key}:</span>
                        <span className="text-gray-700 font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price and Add to Cart */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-gray-800">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={(e) => handleAddToCart(e, product.id)}
                      disabled={!product.inStock}
                      className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-2 rounded-full font-semibold hover:from-indigo-600 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {product.inStock ? 'Add to Cart' : 'Unavailable'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsListingPage;
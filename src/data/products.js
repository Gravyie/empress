export const allSampleProducts = {
  'prebuilt-pcs': [
    {
      id: 'cyberpowerpc-gamer-master',
      brand: 'CyberPowerPC',
      name: 'CyberPowerPC Gamer Master Gaming PC',
      description1: 'High-performance prebuilt gaming PC for extreme performance and visuals.',
      description2: 'A powerhouse prebuilt gaming PC, designed for extreme performance and stunning visuals. Equipped with the latest generation CPU and GPU, ensuring a smooth experience in demanding games and applications. Features liquid cooling for optimal thermal management and a sleek, customizable RGB lighting system. Ideal for competitive gamers and content creators seeking top-tier performance without the hassle of building from scratch.',
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
    {
      id: 'skytech-shiva-gaming-pc',
      brand: 'Skytech',
      name: 'Skytech Shiva Gaming PC',
      description1: 'High-performance prebuilt PC with Intel Core i9 and RTX 4080.',
      description2: 'High-performance prebuilt PC featuring an Intel Core i9 and NVIDIA RTX 4080.',
      price: 2199.99,
      images: [
        '/images/img3.JPG',
        'https://via.placeholder.com/300x200/cccccc/ffffff?text=Skytech+Shiva+2',
        'https://via.placeholder.com/300x200/cccccc/ffffff?text=Skytech+Shiva+3'
      ],
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
      description1: 'Compact and powerful gaming desktop with AMD Ryzen 5 and RTX 3050.',
      description2: 'Compact and powerful gaming desktop with AMD Ryzen 5 and RTX 3050. Great for entry-level gaming.',
      price: 899.99,
      images: [
        'https://via.placeholder.com/300x200/007bff/ffffff?text=HP+OMEN',
        'https://via.placeholder.com/300x200/cccccc/ffffff?text=HP+OMEN+2',
        'https://via.placeholder.com/300x200/cccccc/ffffff?text=HP+OMEN+3'
      ],
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
      name: 'Intel Core i9-13900K Processor',
      description1: 'High-performance 13th Gen Intel Core i9 with 24 cores.',
      description2: 'The Intel Core i9-13900K is a high-performance 13th Gen desktop processor with 24 cores (8 P-cores + 16 E-cores) and 32 threads. It boasts a maximum turbo frequency of up to 5.8 GHz, making it perfect for extreme gaming, demanding productivity tasks, and intensive content creation. Featuring Intel Thread Director for intelligent workload routing, it offers exceptional multitasking capabilities and is built on the LGA 1700 socket.',
      price: 589.99,
      originalPrice: 649.99,
      images: [
        "/images/img1.JPG",
        "/images/img2.JPG",
        "/images/img3.JPG",
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
      description1: '16-core, 32-thread "Zen 4" processor for gaming and creation.',
      description2: 'The AMD Ryzen 9 7950X is a 16-core, 32-thread desktop processor built on the 5nm "Zen 4" architecture. It delivers incredible performance for gaming, streaming, and content creation, with boost frequencies up to 5.7 GHz. Designed for the AM5 platform, it supports DDR5 memory and PCIe 5.0, offering next-generation connectivity and power efficiency for high-end systems.',
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
      id: 'intel-i7-13700k',
      brand: 'Intel',
      name: 'Intel Core i7-13700K',
      description1: '16-core, 24-thread processor for gaming and productivity.',
      description2: 'Excellent gaming and productivity processor with 16 cores and 24 threads. Great balance of performance and value.',
      price: 419.99,
      images: [
        'https://via.placeholder.com/300x200/4285f4/ffffff?text=Intel+i7',
        'https://via.placeholder.com/300x200/cccccc/ffffff?text=Intel+i7+2',
        'https://via.placeholder.com/300x200/cccccc/ffffff?text=Intel+i7+3'
      ],
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
      name: 'AMD Ryzen 7 7800X3D Processor',
      description1: 'Ultimate gaming processor with AMD 3D V-Cache™ technology.',
      description2: 'The AMD Ryzen 7 7800X3D is the ultimate gaming processor, featuring AMD 3D V-Cache™ technology which significantly boosts gaming performance by stacking an additional layer of L3 cache. With 8 cores and 16 threads, it delivers exceptional frame rates in even the most demanding titles. Designed for the AM5 platform, it offers superb power efficiency and is a top choice for dedicated gamers.',
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
        'Boost Clock': '5.0 GHz',
        'Socket': 'AM5',
        'TDP': '120W',
        'Integrated Graphics': 'AMD Radeon Graphics (Basic)',
        'Cache': '96MB L3 Cache (3D V-Cache)'
      },
      badge: { text: 'Gaming', color: 'bg-purple-500' },
      inStock: true
    },
    {
      id: 'intel-i5-13600k',
      brand: 'Intel',
      name: 'Intel Core i5-13600K',
      description1: 'Mid-range processor for gaming and streaming.',
      description2: 'Mid-range powerhouse with 14 cores and 20 threads. Perfect for gaming and streaming with excellent price-to-performance ratio.',
      price: 319.99,
      images: [
        'https://via.placeholder.com/300x200/4285f4/ffffff?text=Intel+i5',
        'https://via.placeholder.com/300x200/cccccc/ffffff?text=Intel+i5+2',
        'https://via.placeholder.com/300x200/cccccc/ffffff?text=Intel+i5+3'
      ],
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
      description1: 'Efficient 6-core processor for gaming and everyday tasks.',
      description2: 'Efficient 6-core processor perfect for gaming and everyday tasks. Great entry point into the AM5 platform.',
      price: 299.99,
      images: [
        'https://via.placeholder.com/300x200/ed1c24/ffffff?text=AMD+Ryzen+5',
        'https://via.placeholder.com/300x200/cccccc/ffffff?text=AMD+Ryzen+5+2',
        'https://via.placeholder.com/300x200/cccccc/ffffff?text=AMD+Ryzen+5+3'
      ],
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
      name: 'NVIDIA GeForce RTX 4090 Graphics Card',
      description1: 'Ultimate GeForce GPU for ultra-high performance gaming and creation.',
      description2: 'The NVIDIA GeForce RTX 4090 is the ultimate GeForce GPU. It brings an enormous leap in performance, efficiency, and AI-powered graphics. Experience ultra-high performance gaming, incredibly detailed virtual worlds with ray tracing, unprecedented productivity, and new ways to create. It\'s powered by the NVIDIA Ada Lovelace architecture and comes with 24 GB of G6X memory.',
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
      description1: 'High-performance GPU for 4K and 8K gaming with AMD RDNA™ 3.',
      description2: 'Experience incredible performance, visuals, and features with the AMD Radeon RX 7900XTX graphics card. Featuring AMD RDNA™ 3 architecture, it delivers exceptional 4K and 8K gaming performance, advanced raytracing capabilities, and AMD FidelityFX™ Super Resolution technology. With 24GB of GDDR6 memory, it’s built for the most demanding games and professional workflows.',
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
    {
      id: 'nvidia-rtx-4070',
      brand: 'NVIDIA',
      name: 'NVIDIA GeForce RTX 4070',
      description1: 'Excellent 1440p gaming GPU with DLSS 3 and 12GB VRAM.',
      description2: 'Excellent 1440p gaming performance with DLSS 3 and ray tracing capabilities. 12GB GDDR6X VRAM.',
      price: 599.99,
      images: [
        'https://via.placeholder.com/300x200/76b900/ffffff?text=RTX+4070',
        'https://via.placeholder.com/300x200/cccccc/ffffff?text=RTX+4070+2',
        'https://via.placeholder.com/300x200/cccccc/ffffff?text=RTX+4070+3'
      ],
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
      description1: 'Strong 1440p gaming GPU with 16GB GDDR6 VRAM.',
      description2: 'Strong contender for 1440p gaming. 16GB GDDR6 VRAM, great value.',
      price: 499.99,
      images: [
        'https://via.placeholder.com/300x200/ed1c24/ffffff?text=RX+7800XT',
        'https://via.placeholder.com/300x200/cccccc/ffffff?text=RX+7800XT+2',
        'https://via.placeholder.com/300x200/cccccc/ffffff?text=RX+7800XT+3'
      ],
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
      name: 'ASUS ROG Strix Z790-E Gaming WiFi Motherboard',
      description1: 'Premium Intel Z790 motherboard for high-performance gaming.',
      description2: 'The ASUS ROG Strix Z790-E Gaming WiFi is a premium Intel Z790 motherboard designed for top-tier gaming and high-performance computing. It supports 12th, 13th, and 14th Gen Intel Core processors, features DDR5 memory support, multiple PCIe 5.0 M.2 slots for ultra-fast storage, and robust power delivery. Integrated Wi-Fi 6E and 2.5 Gb Ethernet ensure lightning-fast networking for an unparalleled gaming and productivity experience.',
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
    {
      id: 'msi-mag-b650-tomahawk-wifi',
      brand: 'MSI',
      name: 'MSI MAG B650 TOMAHAWK WIFI',
      description1: 'Solid AMD B650 motherboard for Ryzen 7000 series.',
      description2: 'Solid AMD B650 motherboard for Ryzen 7000 series. Offers DDR5 support, multiple M.2 slots, and Wi-Fi 6E.',
      price: 219.99,
      images: [
        'https://via.placeholder.com/300x200/696969/ffffff?text=MSI+B650',
        'https://via.placeholder.com/300x200/cccccc/ffffff?text=MSI+B650+2',
        'https://via.placeholder.com/300x200/cccccc/ffffff?text=MSI+B650+3'
      ],
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
      description1: 'Mid-range Intel B760 motherboard with DDR5 for gaming PCs.',
      description2: 'Mid-range Intel B760 motherboard with DDR5 support and strong VRM for gaming PCs.',
      price: 189.99,
      images: [
        'https://via.placeholder.com/300x200/004d40/ffffff?text=Gigabyte+B760',
        'https://via.placeholder.com/300x200/cccccc/ffffff?text=Gigabyte+B760+2',
        'https://via.placeholder.com/300x200/cccccc/ffffff?text=Gigabyte+B760+3'
      ],
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
      description1: 'High-speed DDR5 memory with RGB lighting for enhanced PC performance.',
      description2: 'Elevate your PC\'s performance and aesthetics with Corsair Vengeance RGB DDR5 memory. This 32GB (2x16GB) kit clocks in at 6000MHz, providing exceptional speed for gaming, multitasking, and demanding applications. Featuring dynamic, individually addressable RGB lighting, it seamlessly integrates with your system\'s look while delivering cutting-edge DDR5 performance. Optimized for Intel XMP 3.0 and AMD EXPO for easy overclocking.',
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
    {
      id: 'gskill-trident-z5-rgb-ddr5-64gb',
      brand: 'G.Skill',
      name: 'G.Skill Trident Z5 RGB DDR5 64GB (2x32GB) 6400MHz',
      description1: 'High-capacity, high-speed DDR5 RAM with stunning RGB.',
      description2: 'Max out your memory with this high-capacity, high-speed kit, featuring stunning RGB lighting.',
      price: 249.99,
      images: [
        'https://via.placeholder.com/300x200/800000/ffffff?text=G.Skill+RAM',
        'https://via.placeholder.com/300x200/cccccc/ffffff?text=G.Skill+RAM+2',
        'https://via.placeholder.com/300x200/cccccc/ffffff?text=G.Skill+RAM+3'
      ],
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
      description1: 'Reliable and affordable DDR4 memory for mainstream builds.',
      description2: 'Reliable and affordable DDR4 memory for mainstream builds. Great for gaming and everyday tasks.',
      price: 49.99,
      images: [
        'https://via.placeholder.com/300x200/5a5a5a/ffffff?text=Kingston+DDR4',
        'https://via.placeholder.com/300x200/cccccc/ffffff?text=Kingston+DDR4+2',
        'https://via.placeholder.com/300x200/cccccc/ffffff?text=Kingston+DDR4+3'
      ],
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
      description1: 'Ultra-fast PCIe 4.0 NVMe SSD for gaming and creative tasks.',
      description2: 'Unleash the full potential of your gaming and creative applications with the Samsung 990 Pro 2TB NVMe SSD. This PCIe 4.0 SSD delivers incredible sequential read/write speeds of up to 7,450/6,900 MB/s, making it one of the fastest drives on the market. Optimized for heavy workloads, it features an advanced controller and thermal control solutions to maintain peak performance under pressure. Ideal for gamers, content creators, and professionals requiring elite storage.',
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
    {
      id: 'wd-black-sn850x-1tb',
      brand: 'Western Digital',
      name: 'WD_BLACK SN850X 1TB NVMe SSD',
      description1: 'High-performance NVMe SSD optimized for gaming.',
      description2: 'High-performance NVMe SSD optimized for gaming, reducing load times dramatically.',
      price: 99.99,
      images: [
        'https://via.placeholder.com/300x200/000080/ffffff?text=WD+SSD',
        'https://via.placeholder.com/300x200/cccccc/ffffff?text=WD+SSD+2',
        'https://via.placeholder.com/300x200/cccccc/ffffff?text=WD+SSD+3'
      ],
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
      description1: 'Reliable and cost-effective SATA SSD for general storage.',
      description2: 'Reliable and cost-effective SATA SSD for general storage and older systems.',
      price: 69.99,
      images: [
        'https://via.placeholder.com/300x200/808080/ffffff?text=Crucial+SSD',
        'https://via.placeholder.com/300x200/cccccc/ffffff?text=Crucial+SSD+2',
        'https://via.placeholder.com/300x200/cccccc/ffffff?text=Crucial+SSD+3'
      ],
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
      name: 'Lian Li O11 Dynamic EVO (Black) Mid-Tower Case',
      description1: 'Versatile ATX mid-tower case for enthusiasts with reversible design.',
      description2: 'The Lian Li O11 Dynamic EVO is a highly versatile ATX mid-tower case designed for enthusiasts seeking maximum flexibility and aesthetic appeal. It features a reversible design, allowing for standard or inverted layouts, and supports massive cooling configurations with multiple radiator and fan mounting options. With its dual-chamber design, tempered glass panels, and excellent cable management features, it\'s perfect for showcasing high-end builds.',
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
    {
      id: 'nzxt-h7-flow',
      brand: 'NZXT',
      name: 'NZXT H7 Flow (White)',
      description1: 'Clean, modern mid-tower case with excellent airflow.',
      description2: 'Clean, modern mid-tower case with excellent airflow, perfect for high-performance builds and easy cable management.',
      price: 129.99,
      images: [
        'https://via.placeholder.com/300x200/E0E0E0/000000?text=NZXT+H7',
        'https://via.placeholder.com/300x200/cccccc/ffffff?text=NZXT+H7+2',
        'https://via.placeholder.com/300x200/cccccc/ffffff?text=NZXT+H7+3'
      ],
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
      description1: 'Stylish case with real wood panel, blending design with cooling.',
      description2: 'Stylish case with a real wood front panel, blending Scandinavian design with excellent cooling performance.',
      price: 139.99,
      images: [
        'https://via.placeholder.com/300x200/F5F5DC/000000?text=Fractal+North',
        'https://via.placeholder.com/300x200/cccccc/ffffff?text=Fractal+North+2',
        'https://via.placeholder.com/300x200/cccccc/ffffff?text=Fractal+North+3'
      ],
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
      description1: 'Reliable 1000W 80 PLUS Gold PSU for high-performance systems.',
      description2: 'The Corsair RM1000e is a reliable and highly efficient 1000W power supply, perfect for powering high-performance gaming rigs and workstations. Rated 80 PLUS Gold for up to 90% efficiency, it reduces power consumption and heat. Its fully modular cabling system allows for clean builds and easy cable management, while its silent fan operation ensures a quiet computing experience. Backed by a 7-year warranty for peace of mind.',
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
    {
      id: 'seasonic-focus-plus-gold-750w',
      brand: 'Seasonic',
      name: 'Seasonic FOCUS Plus Gold 750W 80 PLUS Gold Fully Modular PSU',
      description1: 'Mid-range PSU with great reliability and quiet operation.',
      description2: 'Excellent mid-range power supply with great reliability and quiet operation.',
      price: 109.99,
      images: [
        'https://via.placeholder.com/300x200/FFD700/000000?text=Seasonic+PSU',
        'https://via.placeholder.com/300x200/cccccc/ffffff?text=Seasonic+PSU+2',
        'https://via.placeholder.com/300x200/cccccc/ffffff?text=Seasonic+PSU+3'
      ],
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
      description1: 'Compact and efficient 650W PSU, ideal for smaller builds.',
      description2: 'Compact and efficient power supply, ideal for smaller builds or less power-hungry systems.',
      price: 89.99,
      images: [
        'https://via.placeholder.com/300x200/FFD700/000000?text=EVGA+PSU',
        'https://via.placeholder.com/300x200/cccccc/ffffff?text=EVGA+PSU+2',
        'https://via.placeholder.com/300x200/cccccc/ffffff?text=EVGA+PSU+3'
      ],
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
      description1: 'Exceptional AIO liquid cooler with 360mm radiator and quiet operation.',
      description2: 'The ARCTIC Liquid Freezer II 360 is an all-in-one CPU liquid cooler renowned for its exceptional cooling performance and quiet operation. Featuring a 360mm radiator, three high-quality PWM fans, and an optimized pump, it effectively dissipates heat from even the most demanding processors. Its integrated VRM fan further cools motherboard components, ensuring overall system stability. A top choice for overclockers and silent PC enthusiasts.',
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
    {
      id: 'noctua-nh-d15',
      brand: 'Noctua',
      name: 'Noctua NH-D15 CPU Air Cooler',
      description1: 'Legendary quiet and powerful air cooler, rivaling AIOs.',
      description2: 'Legendary quiet and powerful air cooler, rivaling many AIOs in performance, with brown fans.',
      price: 109.99,
      images: [
        'https://via.placeholder.com/300x200/8B4513/ffffff?text=Noctua+Cooler',
        'https://via.placeholder.com/300x200/cccccc/ffffff?text=Noctua+Cooler+2',
        'https://via.placeholder.com/300x200/cccccc/ffffff?text=Noctua+Cooler+3'
      ],
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
      description1: 'Iconic RGB air cooler with great price-to-performance ratio.',
      description2: 'Iconic air cooler with updated aesthetics and RGB lighting. Great balance of price and performance.',
      price: 49.99,
      images: [
        'https://via.placeholder.com/300x200/222222/ffffff?text=Hyper+212',
        'https://via.placeholder.com/300x200/cccccc/ffffff?text=Hyper+212+2',
        'https://via.placeholder.com/300x200/cccccc/ffffff?text=Hyper+212+3'
      ],
      specs: {
        'Type': 'Air Cooler',
        'Fan Size': '120mm',
        'Compatibility': 'Intel/AMD'
      },
      badge: { text: 'Budget RGB', color: 'bg-green-500' },
      inStock: true
    }
  ]
};
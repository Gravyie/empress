import React, { useState, useEffect, useMemo } from "react";
import BuildPCBanner from "../components/BuildPCBanner";

// ——— Data ———
const DATA = {
  purpose: [
    { label: "Gaming", price: 0 },
    { label: "Video Editing", price: 0 },
    { label: "3D Rendering", price: 0 },
    { label: "Office / General", price: 0 }
  ],
  processors: {
    amd: [
      { label: "Ryzen 5 5600X", price: 15000 },
      { label: "Ryzen 7 5800X", price: 22000 },
      { label: "Ryzen 9 5900X", price: 34000 }
    ],
    intel: [
      { label: "Core i5-12400F", price: 14000 },
      { label: "Core i7-12700K", price: 26000 },
      { label: "Core i9-12900K", price: 44000 }
    ]
  },
  motherboards: [
    { label: "MSI B550 Tomahawk", price: 12000 },
    { label: "ASUS ROG Strix B550-F", price: 15000 },
    { label: "Gigabyte X570 Aorus Elite", price: 18000 },
    { label: "ASUS Z690-P", price: 20000 }
  ],
  ram: [
    { label: "16GB DDR4", price: 6000 },
    { label: "32GB DDR4", price: 10000 },
    { label: "64GB DDR4", price: 18000 }
  ],
  graphicCard: [
    { label: "NVIDIA RTX 3060", price: 27000 },
    { label: "NVIDIA RTX 3070", price: 40000 },
    { label: "AMD RX 6700 XT", price: 30000 }
  ],
  ssds: [
    { label: "500GB NVMe SSD", price: 4000 },
    { label: "1TB NVMe SSD", price: 7000 },
    { label: "2TB NVMe SSD", price: 12000 }
  ],
  hdds: [
    { label: "1TB HDD", price: 3000 },
    { label: "2TB HDD", price: 4500 },
    { label: "4TB HDD", price: 7000 }
  ],
  cases: [
    { id: "white", label: "ICE-200TG White", price: 5500 },
    { id: "black", label: "690 Air Black", price: 6000 }
  ],
  coolers: [
    { label: "Cooler Master Hyper 212", price: 3000 },
    { label: "NZXT Kraken X53", price: 8000 },
    { label: "Noctua NH-D15", price: 9000 }
  ],
  psus: [
    { label: "Corsair CX550", price: 4500 },
    { label: "Cooler Master MWE650", price: 6000 },
    { label: "Seasonic 750W Gold", price: 10000 }
  ],
  fans: [
    { label: "SickleFlow 120mm", price: 800 },
    { label: "LL120 RGB", price: 1500 },
    { label: "Prizm 120 ARGB", price: 1000 }
  ],
  addons: {
    os: [
      { label: "Windows 11 Home", price: 10000 },
      { label: "Windows 11 Pro", price: 13000 },
      { label: "Ubuntu 24.04", price: 0 }
    ],
    monitor: [
      { label: '24" FHD 75Hz', price: 8000 },
      { label: '27" QHD 165Hz', price: 22000 },
      { label: '32" 4K UHD', price: 30000 }
    ],
    keyboard: [
      { label: "Logitech K120", price: 800 },
      { label: "Redragon K552", price: 2500 },
      { label: "Corsair K70", price: 7000 }
    ],
    mouse: [
      { label: "Logitech G102", price: 1200 },
      { label: "Razer DeathAdder V2", price: 4000 },
      { label: "MX Master 3", price: 7000 }
    ],
    wifi: [
      { label: "USB Wi-Fi Adapter", price: 1200 },
      { label: "AX200 PCIe Wi-Fi", price: 2400 }
    ],
    cable: [
      { label: "Braided Cables", price: 2000 },
      { label: "ARGB Extensions", price: 3000 }
    ]
  }
};

// PC Images based on case selection
const PC_IMAGES = {
  white: "/images/img5.JPG",
  black: "/images/img6.JPG",
  default: "/images/img1.JPG",
};

// ... [Imports and DATA stay unchanged] ...

export default function BuildPC() {
  const [phase, setPhase] = useState("components");
  const [brand, setBrand] = useState("amd");
  const [sel, setSel] = useState({});
  const [qty, setQty] = useState({});

  // ✅ FIX: Total price calculation
  const total = useMemo(() => {
    let sum = 0;
    Object.entries(sel).forEach(([key, value]) => {
      if (!value) return;

      let item;

      if (key === "processor") {
        item = DATA.processors[brand].find(i => i.label === value);
      } else if (key === "motherboard") {
        item = DATA.motherboards.find(i => i.label === value);
      } else if (DATA.addons[key]) {
        item = DATA.addons[key].find(i => i.label === value);
      } else {
        const dataKey = DATA[key] ? key : `${key}s`; // for singular like "case" → "cases"
        item = (DATA[dataKey] || []).find(i => i.label === value || i.id === value);
      }

      if (item) {
        const count = qty[key] || 1;
        sum += item.price * count;
      }
    });
    return sum;
  }, [sel, qty, brand]);

  // ✅ FIX: Image changes based on case selection
  const currentImage = useMemo(() => {
    if (sel.case && PC_IMAGES[sel.case]) {
      return PC_IMAGES[sel.case];
    }
    return PC_IMAGES.default;
  }, [sel.case]);

  // ✅ FIX: Component select should use `.id` for case, `.label` for others
  const componentFields = [
    { label: "PURPOSE", key: "purpose", options: DATA.purpose },
    { label: "PROCESSOR", key: "processor", options: DATA.processors[brand] },
    { label: "MOTHERBOARD", key: "motherboard", options: DATA.motherboards },
    { label: "RAM GB Total", key: "ram", options: DATA.ram, qty: true },
    { label: "GRAPHIC CARD", key: "graphicCard", options: DATA.graphicCard, qty: true },
    { label: "Primary Storage", key: "ssds", options: DATA.ssds },
    { label: "Secondary Storage", key: "hdds", options: DATA.hdds, qty: true },
    { label: "CASE", key: "case", options: DATA.cases }, // Uses id!
    { label: "CPU COOLER", key: "coolers", options: DATA.coolers },
    { label: "PSU", key: "psus", options: DATA.psus },
    { label: "Case Fans", key: "fans", options: DATA.fans, qty: true }
  ];

  const addonFields = [
    { label: "OS", key: "os", options: DATA.addons.os },
    { label: "Monitor", key: "monitor", options: DATA.addons.monitor, qty: true },
    { label: "Keyboard", key: "keyboard", options: DATA.addons.keyboard },
    { label: "Mouse", key: "mouse", options: DATA.addons.mouse },
    { label: "Wi-Fi & Bluetooth", key: "wifi", options: DATA.addons.wifi },
    { label: "Custom Cable", key: "cable", options: DATA.addons.cable }
  ];

  const currentFields = phase === "components" ? componentFields : addonFields;

  return (
    <>
      <BuildPCBanner />
      <div className="min-h-[90vh] bg-white text-gray-500 flex p-6">
        {/* Left Panel */}
        <div className="w-1/2 bg-gray-200 flex flex-col items-center justify-center p-8 rounded-2xl">
          <div className="max-w-md w-full">
            <img
              src={currentImage}
              alt="PC Build"
              className="w-full h-auto mb-4"
            />
            <p className="text-xs text-gray-500 text-center mb-8">
              * images are for reference only
            </p>
            <div className="border-t border-gray-700 mb-4 relative">
              <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 px-3 text-xs text-gray-400">
                (Inclusive of all taxes)
              </span>
            </div>
            <div className="bg-gray-200 rounded-lg p-4 text-center">
              <div className="text-4xl font-bold text-[#F47C5A]">
                ₹{total.toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-1/2 bg-gray-100 flex flex-col rounded-2xl min-h-[730px] max-h-[85vh] overflow-y-auto">
          {/* Header */}
          <div className="p-6 border-b border-gray-700">
            {/* COMPONENTS/ADD-ONS switch */}
            <div className="flex justify-center mb-6">
              <div className="flex">
                <button
                  onClick={() => setPhase("components")}
                  className={`px-6 py-3 font-bold text-sm transition-colors ${
                    phase === "components"
                      ? "bg-[#F47C5A] text-gray-700"
                      : "bg-gray-700 text-[#F47C5A] hover:bg-gray-600"
                  }`}
                >
                  COMPONENTS
                </button>
                <button
                  onClick={() => setPhase("addons")}
                  className={`px-6 py-3 font-bold text-sm transition-colors ${
                    phase === "addons"
                      ? "bg-[#F47C5A] text-gray-700"
                      : "bg-gray-700 text-[#F47C5A] hover:bg-gray-600"
                  }`}
                >
                  ADD-ONS
                </button>
              </div>
            </div>

            {/* AMD/Intel switch */}
            <div className="flex justify-center items-center space-x-8">
              {["amd", "intel"].map((b) => (
                <label key={b} className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      type="radio"
                      name="brand"
                      value={b}
                      checked={brand === b}
                      onChange={(e) => setBrand(e.target.value)}
                      className="sr-only"
                    />
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      brand === b ? "border-white bg-white" : "border-gray-400"
                    }`}>
                      {brand === b && <div className="w-3 h-3 bg-[#F47C5A] rounded-full"></div>}
                    </div>
                  </div>
                  <span className="ml-3 text-gray-600 font-bold text-lg">{b.toUpperCase()}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4">
              {currentFields.map((field) => (
                <div key={field.key} className={field.qty ? "flex items-end space-x-2" : ""}>
                  <div className={field.qty ? "flex-1" : "w-full"}>
                    <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase">
                      {field.label}
                    </label>
                    <select
                      className="w-full bg-gray-200 border border-gray-600 rounded px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-[#F47C5A]"
                      value={sel[field.key] || ""}
                      onChange={(e) => setSel(prev => ({ ...prev, [field.key]: e.target.value }))}
                    >
                      <option value="">Select {field.label}</option>
                      {field.options.map((option) => (
                        <option
                          key={option.id || option.label}
                          value={option.id || option.label}
                        >
                          {option.label || option.id}
                          {option.price > 0 && ` (₹${option.price})`}
                        </option>
                      ))}
                    </select>
                  </div>
                  {field.qty && sel[field.key] && (
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-2">
                        Qty.
                      </label>
                      <select
                        className="bg-gray-200 border border-gray-600 rounded px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-[#F47C5A]"
                        value={qty[field.key] || 1}
                        onChange={(e) =>
                          setQty(prev => ({
                            ...prev,
                            [field.key]: parseInt(e.target.value)
                          }))
                        }
                      >
                        {[1, 2, 3, 4].map(num => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-700 flex justify-end space-x-4">
            <button
              onClick={() => {
                let text = "Your Custom PC Quote:\n\n";
                Object.entries(sel).forEach(([k, v]) => {
                  if (v) {
                    const count = qty[k] || 1;
                    let item;
                    if (k === "processor") {
                      item = DATA.processors[brand].find(i => i.label === v);
                    } else if (k === "motherboard") {
                      item = DATA.motherboards.find(i => i.label === v);
                    } else if (DATA.addons[k]) {
                      item = DATA.addons[k].find(i => i.label === v);
                    } else {
                      item = (DATA[k] || []).find(i => i.label === v || i.id === v);
                    }
                    const price = item ? item.price * count : 0;
                    text += `${k.toUpperCase()}: ${v}${count > 1 ? ` x${count}` : ""} - ₹${price}\n`;
                  }
                });
                text += `\nTotal: ₹${total}`;
                const blob = new Blob([text], { type: "text/plain" });
                const a = document.createElement("a");
                a.href = URL.createObjectURL(blob);
                a.download = "pc-quote.txt";
                a.click();
              }}
              className="bg-[#F47C5A] text-gray-700 font-semibold px-6 py-2 rounded"
            >
              Download Quote
            </button>
            <button
              onClick={() => setPhase(phase === "components" ? "addons" : "components")}
              className="bg-[#F47C5A] text-gray-700 font-semibold px-6 py-2 rounded"
            >
              {phase === "components" ? "Next" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

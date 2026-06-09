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
      { label: "Ryzen 5 5600X", price: 181 },
      { label: "Ryzen 7 5800X", price: 265 },
      { label: "Ryzen 9 5900X", price: 410 }
    ],
    intel: [
      { label: "Core i5-12400F", price: 169 },
      { label: "Core i7-12700K", price: 313 },
      { label: "Core i9-12900K", price: 530 }
    ]
  },
  motherboards: [
    { label: "MSI B550 Tomahawk", price: 145 },
    { label: "ASUS ROG Strix B550-F", price: 181 },
    { label: "Gigabyte X570 Aorus Elite", price: 217 },
    { label: "ASUS Z690-P", price: 241 }
  ],
  ram: [
    { label: "16GB DDR4", price: 72 },
    { label: "32GB DDR4", price: 120 },
    { label: "64GB DDR4", price: 217 }
  ],
  graphicCard: [
    { label: "NVIDIA RTX 3060", price: 325 },
    { label: "NVIDIA RTX 3070", price: 482 },
    { label: "AMD RX 6700 XT", price: 361 }
  ],
  ssds: [
    { label: "500GB NVMe SSD", price: 48 },
    { label: "1TB NVMe SSD", price: 84 },
    { label: "2TB NVMe SSD", price: 145 }
  ],
  hdds: [
    { label: "1TB HDD", price: 36 },
    { label: "2TB HDD", price: 54 },
    { label: "4TB HDD", price: 84 }
  ],
  cases: [
    { id: "white", label: "ICE-200TG White", price: 66 },
    { id: "black", label: "690 Air Black", price: 72 }
  ],
  coolers: [
    { label: "Cooler Master Hyper 212", price: 36 },
    { label: "NZXT Kraken X53", price: 96 },
    { label: "Noctua NH-D15", price: 108 }
  ],
  psus: [
    { label: "Corsair CX550", price: 54 },
    { label: "Cooler Master MWE650", price: 72 },
    { label: "Seasonic 750W Gold", price: 120 }
  ],
  fans: [
    { label: "SickleFlow 120mm", price: 10 },
    { label: "LL120 RGB", price: 18 },
    { label: "Prizm 120 ARGB", price: 12 }
  ],
  addons: {
    os: [
      { label: "Windows 11 Home", price: 120 },
      { label: "Windows 11 Pro", price: 157 },
      { label: "Ubuntu 24.04", price: 0 }
    ],
    monitor: [
      { label: '24" FHD 75Hz', price: 96 },
      { label: '27" QHD 165Hz', price: 265 },
      { label: '32" 4K UHD', price: 361 }
    ],
    keyboard: [
      { label: "Logitech K120", price: 10 },
      { label: "Redragon K552", price: 30 },
      { label: "Corsair K70", price: 84 }
    ],
    mouse: [
      { label: "Logitech G102", price: 14 },
      { label: "Razer DeathAdder V2", price: 48 },
      { label: "MX Master 3", price: 84 }
    ],
    wifi: [
      { label: "USB Wi-Fi Adapter", price: 14 },
      { label: "AX200 PCIe Wi-Fi", price: 29 }
    ],
    cable: [
      { label: "Braided Cables", price: 24 },
      { label: "ARGB Extensions", price: 36 }
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
      <div className="min-h-[90vh] bg-[#f8f9fa] dark:bg-black text-white flex flex-col lg:flex-row p-4 md:p-6 gap-4 md:gap-6">
        {/* Left Panel */}
        <div className="w-full lg:w-1/2 bg-[#0a0a0a] border border-black/10 dark:border-white/10 flex flex-col items-center justify-center p-4 sm:p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[#F47C5A]/10 rounded-2xl blur-3xl pointer-events-none" />
          <div className="max-w-md w-full relative z-10">
            <img
              src={currentImage}
              alt="PC Build"
              className="w-full h-auto mb-4 drop-shadow-2xl"
            />
            <p className="text-xs text-gray-400 dark:text-white/30 text-center mb-8 uppercase tracking-widest font-light">
              * images are for reference only
            </p>
            <div className="border-t border-white/[0.06] mb-4 relative">
              <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0a0a0a] px-3 text-[10px] text-gray-500 dark:text-white/40 uppercase tracking-widest">
                (Inclusive of all taxes)
              </span>
            </div>
            <div className="bg-white/[0.02] border border-black/10 dark:border-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl md:text-5xl font-bold text-white">
                ${total.toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full lg:w-1/2 bg-[#0a0a0a] border border-black/10 dark:border-white/10 flex flex-col rounded-2xl min-h-[730px] max-h-[85vh] overflow-y-auto custom-scrollbar">
          {/* Header */}
          <div className="p-6 border-b border-white/[0.06]">
            {/* COMPONENTS/ADD-ONS switch */}
            <div className="flex justify-center mb-8">
              <div className="flex border border-black/10 dark:border-white/10 rounded-md overflow-hidden">
                <button
                  onClick={() => setPhase("components")}
                  className={`px-8 py-3 font-semibold text-xs uppercase tracking-widest transition-colors ${
                    phase === "components"
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-transparent text-gray-500 dark:text-white/50 hover:text-white hover:bg-black/5 dark:bg-white/5"
                  }`}
                >
                  Components
                </button>
                <button
                  onClick={() => setPhase("addons")}
                  className={`px-8 py-3 font-semibold text-xs uppercase tracking-widest transition-colors ${
                    phase === "addons"
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-transparent text-gray-500 dark:text-white/50 hover:text-white hover:bg-black/5 dark:bg-white/5"
                  }`}
                >
                  Add-Ons
                </button>
              </div>
            </div>

            {/* AMD/Intel switch */}
            {phase === "components" && (
              <div className="flex justify-center items-center space-x-12">
                {["amd", "intel"].map((b) => (
                  <label key={b} className="flex items-center cursor-pointer group">
                    <div className="relative">
                      <input
                        type="radio"
                        name="brand"
                        value={b}
                        checked={brand === b}
                        onChange={(e) => setBrand(e.target.value)}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                        brand === b ? "border-[#F47C5A] bg-transparent" : "border-black/20 dark:border-white/20 group-hover:border-white/40"
                      }`}>
                        {brand === b && <div className="w-2.5 h-2.5 bg-[#F47C5A] rounded-full"></div>}
                      </div>
                    </div>
                    <span className={`ml-3 font-bold text-lg uppercase tracking-wider transition-colors ${brand === b ? "text-white" : "text-gray-500 dark:text-white/40 group-hover:text-white"}`}>{b}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Form */}
          <div className="p-4 sm:p-8 flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 md:gap-y-8">
              {currentFields.map((field) => (
                <div key={field.key} className={field.qty ? "flex items-end space-x-3" : ""}>
                  <div className={field.qty ? "flex-1" : "w-full"}>
                    <label className="block text-[10px] font-semibold text-gray-500 dark:text-white/50 mb-2 uppercase tracking-widest">
                      {field.label}
                    </label>
                    <select
                      className="w-full bg-[#f8f9fa] dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors appearance-none"
                      value={sel[field.key] || ""}
                      onChange={(e) => setSel(prev => ({ ...prev, [field.key]: e.target.value }))}
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='rgba(255,255,255,0.4)'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1rem' }}
                    >
                      <option value="" className="bg-[#0a0a0a]">Select {field.label}</option>
                      {field.options.map((option) => (
                        <option
                          key={option.id || option.label}
                          value={option.id || option.label}
                          className="bg-[#0a0a0a]"
                        >
                          {option.label || option.id}
                          {option.price > 0 && ` (+$${option.price.toLocaleString()})`}
                        </option>
                      ))}
                    </select>
                  </div>
                  {field.qty && sel[field.key] && (
                    <div className="w-20">
                      <label className="block text-[10px] font-semibold text-gray-500 dark:text-white/50 mb-2 uppercase tracking-widest">
                        Qty
                      </label>
                      <select
                        className="w-full bg-[#f8f9fa] dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-md px-3 py-3 text-sm text-center text-white focus:outline-none focus:border-white/30 transition-colors appearance-none"
                        value={qty[field.key] || 1}
                        onChange={(e) =>
                          setQty(prev => ({
                            ...prev,
                            [field.key]: parseInt(e.target.value)
                          }))
                        }
                      >
                        {[1, 2, 3, 4].map(num => (
                          <option key={num} value={num} className="bg-[#0a0a0a]">
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
          <div className="p-4 sm:p-6 border-t border-white/[0.06] bg-[#0a0a0a] sticky bottom-0 flex flex-col sm:flex-row justify-end gap-3 sm:space-x-4">
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
                      text += `${k.toUpperCase()}: ${v}${count > 1 ? ` x${count}` : ""} - $${price}\n`;
                    }
                  });
                  text += `\nTotal: $${total}`;
                  const blob = new Blob([text], { type: "text/plain" });
                  const a = document.createElement("a");
                  a.href = URL.createObjectURL(blob);
                  a.download = "pc-quote.txt";
                  a.click();
                }}
                className="w-full sm:w-auto border border-black/20 dark:border-white/20 text-gray-800 dark:text-white/80 hover:text-white hover:border-white/50 text-xs uppercase tracking-widest font-semibold px-6 py-3 transition-colors"
              >
                Download Quote
              </button>
              <button
                onClick={() => setPhase(phase === "components" ? "addons" : "components")}
                className="w-full sm:w-auto bg-white hover:bg-gray-200 text-black text-xs uppercase tracking-widest font-semibold px-8 py-3 transition-colors text-center"
              >
                {phase === "components" ? "Next Step" : "Add to Cart"}
              </button>
          </div>
        </div>
      </div>
    </>
  );
}

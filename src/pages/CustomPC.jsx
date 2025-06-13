import React, { useState } from "react";

const steps = [
  { key: "cpu", label: "Select CPU", options: ["Intel i5", "Intel i7", "Ryzen 5", "Ryzen 7"] },
  { key: "gpu", label: "Select GPU", options: ["RTX 4060", "RTX 4070", "RTX 4080", "RTX 4090"] },
  { key: "ram", label: "Select RAM", options: ["16GB", "32GB", "64GB", "128GB"] },
  { key: "storage", label: "Select Storage", options: ["512GB SSD", "1TB SSD", "2TB SSD", "4TB NVMe"] },
  { key: "psu", label: "Select Power Supply", options: ["550W", "650W", "750W", "850W"] },
  { key: "case", label: "Select PC Case", options: ["Mini Tower", "Mid Tower", "Full Tower"] },
];

const CustomPC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState({});

  const current = steps[currentStep];
  const isSummary = currentStep === steps.length;

  const handleSelection = (key, value) => {
    setSelections((prev) => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded shadow p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Build Your Custom PC</h1>

        {!isSummary ? (
          <>
            <h2 className="text-xl font-semibold mb-4">{current.label}</h2>
            <div className="space-y-3 mb-6">
              {current.options.map((option) => (
                <label
                  key={option}
                  className={`block p-3 border rounded cursor-pointer ${
                    selections[current.key] === option
                      ? "border-[#F47C5A] bg-[#fff2ec]"
                      : "border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name={current.key}
                    value={option}
                    checked={selections[current.key] === option}
                    onChange={() => handleSelection(current.key, option)}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>

            <div className="flex justify-between">
              <button
                onClick={handleBack}
                disabled={currentStep === 0}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!selections[current.key]}
                className="px-6 py-2 bg-[#F47C5A] text-white rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <div>
            <h2 className="text-xl font-semibold mb-4">Your Custom Build Summary</h2>
            <ul className="space-y-2 mb-6">
              {steps.map((step) => (
                <li key={step.key} className="flex justify-between border-b py-2">
                  <span>{step.label}:</span>
                  <span className="font-semibold text-gray-800">{selections[step.key]}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => alert("Added to cart!")}
              className="w-full py-2 bg-[#F47C5A] text-white rounded"
            >
              Add to Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomPC;

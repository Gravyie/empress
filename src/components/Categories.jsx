import React from "react";

const products = [
  { id: 1, name: "Headphones", price: "$99" },
  { id: 2, name: "Keyboard", price: "$49" },
  { id: 3, name: "Speaker", price: "$79" },
  { id: 4, name: "Productive PC", price: "$999" },
  { id: 5, name: "Gaming PC", price: "$999" },
];

export default function ProductCategories() {
  return (
    <div className="w-full px-4">
      <h2 className="text-lg font-medium mb-3">Products</h2>
      <div className="flex overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden">
        {products.map((product) => (
          <div 
            key={product.id}
            className="min-w-[120px] p-3 bg-white rounded-lg border flex-shrink-0 mr-3 last:mr-0"
          >
            <h3 className="font-medium">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
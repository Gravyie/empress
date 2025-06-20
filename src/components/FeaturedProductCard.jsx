import { ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 w-[250px] flex-shrink-0">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md mb-3"
      />

      {/* Title and Cart Icon */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-semibold text-gray-800">{product.name}</h3>
        <button className="text-[#F47C5A] hover:text-purple-800">
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>

      {/* Price */}
      <div className="mb-2 text-gray-600 text-sm">
        ₹{product.price.toLocaleString()}{" "}
        {product.originalPrice && (
          <span className="line-through text-xs text-gray-400">
            ₹{product.originalPrice.toLocaleString()}
          </span>
        )}
      </div>

      {/* Ratings */}
      <div className="text-yellow-500 text-sm mb-1">
        {"★".repeat(product.rating)}{" "}
        <span className="text-gray-500 text-xs">({product.reviews})</span>
      </div>
    </div>
  );
};

export default ProductCard;

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useInView } from "react-intersection-observer";
import { allSampleProducts } from '../data/products';
import RelatedProducts from '../components/RelatedProducts';
import { useCart } from '../components/CartContext';

const ProductDetailPage = () => {
  const { addToCart } = useCart();

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [category, setCategory] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    let foundProduct = null;
    let productCategory = null;

    for (const categoryId in allSampleProducts) {
      const productsInThisCategory = allSampleProducts[categoryId];
      const match = productsInThisCategory.find(p => p.id === productId);
      if (match) {
        foundProduct = match;
        productCategory = categoryId;
        break;
      }
    }

    if (foundProduct) {
      setProduct(foundProduct);
      setMainImage(foundProduct.images[0]);
      setCategory(productCategory);
    } else {
      navigate('/categories');
    }
  }, [productId, navigate]);

  if (!product) {
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
    addToCart(product, quantity);
    navigate("/cart");
  };

  // Determine if it's a PC product category
  const isPC = category === 'pcs';

  return (
    <div
      ref={ref}
      className={`min-h-screen bg-white transition-opacity duration-1000 ${
        inView ? "animate-fadeInFromBack" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-4 lg:p-6 lg:grid lg:grid-cols-2 lg:gap-4 flex flex-col">
        {/* Back to Products Link */}
        <div className="col-span-full mt-4"> {/* Adjusted for mobile spacing */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-purple-700 hover:text-indigo-600 transition-colors text-sm font-semibold"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Products
          </button>
        </div>

        {/* --- Left Section: Image Gallery (Mobile Optimization) --- */}
        {isPC ?
          /* Mobile styles for PC Image Gallery */
          <div className="flex flex-col items-center lg:items-start lg:col-span-1">
            {/* Main Image for PC (Mobile) */}
            <div className="relative w-full max-w-xs sm:max-w-sm h-64 sm:h-80 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center p-2 mb-3 shadow-md
                        lg:h-[75%] lg:max-w-lg lg:p-4 lg:mb-4"> {/* Desktop styles for PC Main Image */}
              <img
                src={mainImage}
                alt={product.name}
                className="max-w-full max-h-full object-contain"
              />
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-xl">
                  <span className="bg-red-600 text-white px-3 py-1 text-sm rounded-md font-bold"> {/* Smaller badge */}
                    Out of Stock
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnail Images for PC (Mobile - Horizontal scroll) */}
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2 justify-start w-full max-w-xs sm:max-w-sm lg:justify-center lg:max-w-lg"> {/* Adjusted gap, justify-start for mobile */}
                {product.images.map((imgSrc, index) => (
                  <div
                    key={index}
                    className={`w-16 h-16 flex-shrink-0 rounded-md overflow-hidden border-2 cursor-pointer transition-all duration-200
                                ${mainImage === imgSrc ? 'border-purple-600 shadow-sm' : 'border-gray-200 hover:border-purple-300'}
                                lg:w-20 lg:h-20 lg:rounded-lg lg:shadow-md`} /* Desktop sizes */
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
          : /* Mobile styles for Non-PC Image Gallery */
          <div className="flex flex-col-reverse items-center lg:flex-row lg:gap-6 lg:items-start lg:col-span-1"> {/* Reverse order for mobile: thumbnails above main image */}
            {/* Thumbnail Images (Mobile - Horizontal, above main image) */}
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2 justify-center w-full mt-4 lg:mt-0 lg:flex-col lg:gap-4 lg:w-auto"> {/* Horizontal for mobile, vertical for desktop */}
                {product.images.map((imgSrc, index) => (
                  <div
                    key={index}
                    className={`w-16 h-16 flex-shrink-0 rounded-md overflow-hidden border-2 cursor-pointer transition-all duration-200
                                ${mainImage === imgSrc ? 'border-purple-600 shadow-sm' : 'border-gray-200 hover:border-purple-300'}
                                lg:w-20 lg:h-20 lg:rounded-lg lg:shadow-md`} /* Desktop sizes */
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

            {/* Main Image for Non-PC (Mobile) */}
            <div className="relative w-full max-w-xs sm:max-w-sm h-72 sm:h-96 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center p-2 shadow-md
                        lg:w-[400px] lg:h-[500px] lg:p-4"> {/* Desktop sizes */}
              <img
                src={mainImage}
                alt={product.name}
                className="max-w-full max-h-full object-contain"
              />
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-xl">
                  <span className="bg-red-600 text-white px-3 py-1 text-sm rounded-md font-bold"> {/* Smaller badge */}
                    Out of Stock
                  </span>
                </div>
              )}
            </div>
          </div>
        }

        {/* --- Right Section: Details (Mobile Optimization) --- */}
        {isPC ?
          /* Mobile styles for PC Product Details */
          <div className="mt-6 lg:mt-0 px-2 lg:px-0"> {/* Reduced top margin, added horizontal padding for mobile */}
            <span className="text-xs text-gray-500 uppercase font-semibold tracking-wide block mb-1"> {/* Smaller font */}
              {product.brand}
            </span>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2"> {/* Smaller font */}
              {product.name}
            </h1>

            <p className="text-gray-700 leading-snug text-sm mb-4"> {/* Smaller font, tighter leading */}
              {product.description1} {/* Can do description2 as well*/}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-4"> {/* Reduced gap, margin */}
              <span className="text-3xl font-bold text-purple-700"> {/* Smaller font */}
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-base text-gray-500 line-through"> {/* Smaller font */}
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              {product.originalPrice && product.price < product.originalPrice && (
                  <span className="ml-1 text-green-600 font-semibold text-xs"> {/* Smaller font, margin */}
                    Save ${(product.originalPrice - product.price).toFixed(2)}!
                  </span>
              )}
            </div>

            {/* Specifications */}
            <h2 className="text-base font-bold text-gray-800 mb-2 border-b pb-1"> {/* Smaller font, padding */}
              Specifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-gray-700 mb-6 text-sm"> {/* Smaller gap, font */}
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key}>
                  <p className="font-semibold inline">{key}:</p>{" "}
                  <span className="inline">{value}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3"> {/* Reduced gap */}
              <button
                onClick={handleBuyNow}
                disabled={!product.inStock}
                className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-base font-semibold py-2.5 px-4 rounded-lg shadow-md hover:from-purple-700 hover:to-indigo-700 transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                          lg:text-lg lg:py-3 lg:px-6 lg:rounded-xl lg:shadow-lg lg:hover:-translate-y-1" /* Desktop sizes */
              >
                Buy Now
              </button>
              <button
                onClick={() => addToCart(product, quantity)}
                disabled={!product.inStock}
                className="flex-1 bg-white border-2 border-purple-600 text-purple-700 text-base font-semibold py-2.5 px-4 rounded-lg shadow-md hover:bg-purple-50 hover:border-purple-700 transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                          lg:text-lg lg:py-3 lg:px-6 lg:rounded-xl lg:shadow-lg lg:hover:-translate-y-1" /* Desktop sizes */
              >
                Add to Cart
              </button>
            </div>
          </div>
          : /* Mobile styles for Non-PC Product Details */
          <div className="space-y-3 mt-6 lg:mt-0 px-2 lg:px-0 text-gray-800"> {/* Reduced top margin, added horizontal padding for mobile */}
            {/* Product Name */}
            <h1 className="text-xl sm:text-2xl font-bold">{product.name}</h1> {/* Smaller font */}

            {/* Rating and Stock */}
            <div className="flex items-center gap-2 text-yellow-500 text-xs sm:text-sm"> {/* Smaller font */}
              ★★★★☆
              <span className="text-gray-600">(150 Reviews)</span>
              {product.inStock ? (
                <span className="text-green-600 ml-2 font-medium">In Stock</span>
              ) : (
                <span className="text-red-600 ml-2 font-medium">Out of Stock</span>
              )}
            </div>

            {/* Price */}
            <div className="text-2xl sm:text-3xl font-semibold text-gray-900"> {/* Smaller font */}
              ${product.price.toFixed(2)}
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-snug text-xs sm:text-sm"> {/* Smaller font, tighter leading */}
              {product.description2}
            </p>

            {/* Colour Options */}
            {product.colors?.length > 0 && (
              <div>
                <h4 className="font-semibold text-xs sm:text-sm mb-1">Colours:</h4> {/* Smaller font */}
                <div className="flex gap-1.5 flex-wrap"> {/* Reduced gap */}
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-5 h-5 rounded-full border-2 ${selectedColor === color ? 'border-black' : 'border-gray-300'}`}
                      /* Smaller size */ // Corrected: Moved comment outside the template literal
                      style={{ backgroundColor: color }}
                      aria-label={`Select color ${color}`}
                    ></button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Options */}
            {product.sizes?.length > 0 && (
              <div>
                <h4 className="font-semibold text-xs sm:text-sm mb-1">Size:</h4> {/* Smaller font */}
                <div className="flex gap-1.5 flex-wrap"> {/* Reduced gap */}
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-2.5 py-0.5 border text-xs sm:text-sm rounded-md hover:bg-gray-100 transition ${ // Reduced padding, font
                        selectedSize === size ? 'border-black font-semibold' : ''
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity and Buy Now */}
            <div className="flex items-center gap-2 mt-4 flex-wrap">
              <div className="flex items-center border rounded-md"> {/* Group quantity controls */}
                <button
                  className="w-7 h-7 text-base font-bold rounded-l-md"
                  /* Smaller size */ // Corrected: Moved comment outside the template literal
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  -
                </button>
                <span className="px-3 font-medium text-sm">{quantity}</span>
                <button
                  className="w-7 h-7 text-base font-bold rounded-r-md"
                  /* Smaller size */ // Corrected: Moved comment outside the template literal
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  +
                </button>
              </div>

              <button
                onClick={() => addToCart(product, quantity)}
                disabled={!product.inStock}
                className="flex-1 min-w-[120px] px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed text-sm font-semibold"
              >
                Add to Cart
              </button>

              <button
                onClick={handleBuyNow}
                disabled={!product.inStock}
                className="flex-1 min-w-[120px] px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed text-sm font-semibold"
              >
                Buy Now
              </button>
            </div>

            {/* Delivery Options */}
            <div className="mt-4 space-y-2 text-xs sm:text-sm"> {/* Reduced top margin, space-y, font */}
              <div className="flex items-start gap-2"> {/* Reduced gap */}
                <span className="text-lg">🚚</span> {/* Slightly smaller icon */}
                <div>
                  <strong>Free Delivery</strong><br />
                  <span className="text-gray-600">Enter your postal code for delivery availability</span>
                </div>
              </div>

              <div className="flex items-start gap-2"> {/* Reduced gap */}
                <span className="text-lg">↩️</span> {/* Slightly smaller icon */}
                <div>
                  <strong>Return Delivery</strong><br />
                  <span className="text-gray-600">Free 30 days delivery returns</span>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
      {/* Related Products */}
      <RelatedProducts
        currentProduct={product}
        allSampleProducts={allSampleProducts}
        category={category}
      />
    </div>
  );
};

export default ProductDetailPage;
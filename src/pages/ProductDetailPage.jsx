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
      <div className="min-h-screen bg-[#f8f9fa] dark:bg-black flex items-center justify-center text-gray-500 dark:text-white/50 text-xs uppercase tracking-widest font-semibold">
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
      className={`min-h-screen bg-[#f8f9fa] dark:bg-black py-8 transition-opacity duration-1000 ${
        inView ? "animate-fadeInFromBack" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto bg-[#0a0a0a] border border-black/10 dark:border-white/10 rounded-xl p-4 lg:p-8 lg:grid lg:grid-cols-2 lg:gap-8 flex flex-col">
        {/* Back to Products Link */}
        <div className="col-span-full mb-6"> 
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-500 dark:text-white/50 hover:text-[#F47C5A] transition-colors text-[10px] uppercase tracking-widest font-semibold"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <div className="relative w-full max-w-xs sm:max-w-sm h-64 sm:h-80 bg-white/[0.02] border border-white/[0.04] rounded-xl overflow-hidden flex items-center justify-center p-2 mb-4 shadow-none
                        lg:h-[75%] lg:max-w-lg lg:p-4 lg:mb-6"> {/* Desktop styles for PC Main Image */}
              <img
                src={mainImage}
                alt={product.name}
                className="max-w-full max-h-full object-contain"
              />
              {!product.inStock && (
                <div className="absolute inset-0 bg-[#f8f9fa] dark:bg-black/80 backdrop-blur-sm flex items-center justify-center rounded-xl">
                  <span className="bg-black/10 dark:bg-white/10 border border-black/20 dark:border-white/20 text-gray-800 dark:text-white/80 px-4 py-2 text-xs uppercase tracking-widest rounded font-bold"> {/* Smaller badge */}
                    Out of Stock
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnail Images for PC (Mobile - Horizontal scroll) */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2 justify-start w-full max-w-xs sm:max-w-sm lg:justify-center lg:max-w-lg"> {/* Adjusted gap, justify-start for mobile */}
                {product.images.map((imgSrc, index) => (
                  <div
                    key={index}
                    className={`w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border bg-white/[0.02] cursor-pointer transition-all duration-200
                                ${mainImage === imgSrc ? 'border-[#F47C5A]' : 'border-black/10 dark:border-white/10 hover:border-white/30'}
                                lg:w-20 lg:h-20`} /* Desktop sizes */
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
              <div className="flex gap-3 overflow-x-auto pb-2 justify-center w-full mt-4 lg:mt-0 lg:flex-col lg:w-auto"> {/* Horizontal for mobile, vertical for desktop */}
                {product.images.map((imgSrc, index) => (
                  <div
                    key={index}
                    className={`w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border bg-white/[0.02] cursor-pointer transition-all duration-200
                                ${mainImage === imgSrc ? 'border-[#F47C5A]' : 'border-black/10 dark:border-white/10 hover:border-white/30'}
                                lg:w-20 lg:h-20`} /* Desktop sizes */
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
            <div className="relative w-full max-w-xs sm:max-w-sm h-72 sm:h-96 bg-white/[0.02] border border-white/[0.04] rounded-xl overflow-hidden flex items-center justify-center p-2 shadow-none
                        lg:w-[400px] lg:h-[500px] lg:p-4"> {/* Desktop sizes */}
              <img
                src={mainImage}
                alt={product.name}
                className="max-w-full max-h-full object-contain"
              />
              {!product.inStock && (
                <div className="absolute inset-0 bg-[#f8f9fa] dark:bg-black/80 backdrop-blur-sm flex items-center justify-center rounded-xl">
                  <span className="bg-black/10 dark:bg-white/10 border border-black/20 dark:border-white/20 text-gray-800 dark:text-white/80 px-4 py-2 text-xs uppercase tracking-widest rounded font-bold"> {/* Smaller badge */}
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
          <div className="mt-8 lg:mt-0 px-2 lg:px-4"> {/* Reduced top margin, added horizontal padding for mobile */}
            <span className="text-[10px] text-[#F47C5A] uppercase font-semibold tracking-widest block mb-2"> {/* Smaller font */}
              {product.brand}
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4"> {/* Smaller font */}
              {product.name}
            </h1>

            <p className="text-gray-500 dark:text-white/40 font-light leading-relaxed text-sm mb-6"> {/* Smaller font, tighter leading */}
              {product.description1} {/* Can do description2 as well*/}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6"> {/* Reduced gap, margin */}
              <span className="text-4xl font-bold text-white"> {/* Smaller font */}
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 dark:text-white/30 line-through"> {/* Smaller font */}
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              {product.originalPrice && product.price < product.originalPrice && (
                  <span className="ml-2 text-[#F47C5A] font-semibold text-xs uppercase tracking-wider"> {/* Smaller font, margin */}
                    Save ${(product.originalPrice - product.price).toFixed(2)}!
                  </span>
              )}
            </div>

            {/* Specifications */}
            <h2 className="text-xs font-bold text-white uppercase tracking-widest mb-4 border-b border-black/10 dark:border-white/10 pb-2"> {/* Smaller font, padding */}
              Specifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 text-gray-600 dark:text-white/60 font-light mb-8 text-sm"> {/* Smaller gap, font */}
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key}>
                  <p className="font-semibold text-gray-500 dark:text-white/40 inline">{key}:</p>{" "}
                  <span className="inline text-gray-800 dark:text-white/80">{value}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4"> {/* Reduced gap */}
              <button
                onClick={handleBuyNow}
                disabled={!product.inStock}
                className="flex-1 bg-white text-black hover:bg-gray-200 text-xs uppercase tracking-widest font-semibold py-4 px-6 rounded shadow-md hover:bg-[#e06a4a] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                          lg:text-sm lg:py-4 lg:px-8" /* Desktop sizes */
              >
                Buy Now
              </button>
              <button
                onClick={() => addToCart(product, quantity)}
                disabled={!product.inStock}
                className="flex-1 bg-transparent border border-black/20 dark:border-white/20 text-gray-800 dark:text-white/80 text-xs uppercase tracking-widest font-semibold py-4 px-6 rounded shadow-none hover:border-white/50 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                          lg:text-sm lg:py-4 lg:px-8" /* Desktop sizes */
              >
                Add to Cart
              </button>
            </div>
          </div>
          : /* Mobile styles for Non-PC Product Details */
          <div className="space-y-4 mt-8 lg:mt-0 px-2 lg:px-4 text-white"> {/* Reduced top margin, added horizontal padding for mobile */}
            {/* Product Name */}
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">{product.name}</h1> {/* Smaller font */}

            {/* Rating and Stock */}
            <div className="flex items-center gap-2 text-[#F47C5A] text-[10px] uppercase tracking-widest font-semibold"> {/* Smaller font */}
              ★★★★☆
              <span className="text-gray-500 dark:text-white/40 normal-case tracking-normal ml-1">(150 Reviews)</span>
              {product.inStock ? (
                <span className="text-[#F47C5A] ml-2">In Stock</span>
              ) : (
                <span className="text-gray-500 dark:text-white/50 ml-2">Out of Stock</span>
              )}
            </div>

            {/* Price */}
            <div className="text-3xl sm:text-4xl font-bold text-white mb-6"> {/* Smaller font */}
              ${product.price.toFixed(2)}
            </div>

            {/* Description */}
            <p className="text-gray-500 dark:text-white/40 font-light leading-relaxed text-xs sm:text-sm mb-6"> {/* Smaller font, tighter leading */}
              {product.description2}
            </p>

            {/* Colour Options */}
            {product.colors?.length > 0 && (
              <div className="mb-6">
                <h4 className="font-semibold text-xs uppercase tracking-widest text-gray-500 dark:text-white/50 mb-2">Colours:</h4> {/* Smaller font */}
                <div className="flex gap-2 flex-wrap"> {/* Reduced gap */}
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-6 h-6 rounded-full border-2 ${selectedColor === color ? 'border-[#F47C5A]' : 'border-black/10 dark:border-white/10'}`}
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
              <div className="mb-6">
                <h4 className="font-semibold text-xs uppercase tracking-widest text-gray-500 dark:text-white/50 mb-2">Size:</h4> {/* Smaller font */}
                <div className="flex gap-2 flex-wrap"> {/* Reduced gap */}
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1.5 border text-xs uppercase tracking-wider rounded bg-white/[0.02] transition ${ // Reduced padding, font
                        selectedSize === size ? 'border-black/20 dark:border-white/20 text-white' : 'border-black/10 dark:border-white/10 hover:border-white/30 text-gray-800 dark:text-white/80'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity and Buy Now */}
            <div className="flex items-center gap-3 mt-8 flex-wrap">
              <div className="flex items-center border border-black/10 dark:border-white/10 rounded"> {/* Group quantity controls */}
                <button
                  className="w-10 h-10 text-gray-500 dark:text-white/50 hover:text-white hover:bg-black/5 dark:bg-white/5 text-lg font-light rounded-l transition-colors"
                  /* Smaller size */ // Corrected: Moved comment outside the template literal
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  -
                </button>
                <span className="px-4 font-semibold text-sm">{quantity}</span>
                <button
                  className="w-10 h-10 text-gray-500 dark:text-white/50 hover:text-white hover:bg-black/5 dark:bg-white/5 text-lg font-light rounded-r transition-colors"
                  /* Smaller size */ // Corrected: Moved comment outside the template literal
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  +
                </button>
              </div>

              <button
                onClick={() => addToCart(product, quantity)}
                disabled={!product.inStock}
                className="flex-1 min-w-[120px] px-6 py-3 bg-white text-black hover:bg-gray-200 rounded hover:bg-[#e06a4a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-[10px] uppercase tracking-widest font-bold"
              >
                Add to Cart
              </button>

              <button
                onClick={handleBuyNow}
                disabled={!product.inStock}
                className="flex-1 min-w-[120px] px-6 py-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-800 dark:text-white/80 rounded hover:border-white/30 hover:bg-black/10 dark:bg-white/10 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-[10px] uppercase tracking-widest font-bold"
              >
                Buy Now
              </button>
            </div>

            {/* Delivery Options */}
            <div className="mt-8 space-y-4 text-xs font-light text-gray-500 dark:text-white/40 pt-6 border-t border-black/10 dark:border-white/10"> {/* Reduced top margin, space-y, font */}
              <div className="flex items-start gap-3"> {/* Reduced gap */}
                <span className="text-[#F47C5A] text-lg">🚚</span> {/* Slightly smaller icon */}
                <div>
                  <strong className="text-gray-800 dark:text-white/80 font-semibold uppercase tracking-wider text-[10px]">Free Delivery</strong><br />
                  <span className="mt-1 inline-block">Enter your postal code for delivery availability</span>
                </div>
              </div>

              <div className="flex items-start gap-3"> {/* Reduced gap */}
                <span className="text-[#F47C5A] text-lg">↩️</span> {/* Slightly smaller icon */}
                <div>
                  <strong className="text-gray-800 dark:text-white/80 font-semibold uppercase tracking-wider text-[10px]">Return Delivery</strong><br />
                  <span className="mt-1 inline-block">Free 30 days delivery returns</span>
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
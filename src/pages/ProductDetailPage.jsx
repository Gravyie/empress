import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useInView } from "react-intersection-observer";
import { allSampleProducts } from '../data/products';
import RelatedProducts from '../components/RelatedProducts';

const ProductDetailPage = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const { productId } = useParams(); // Get the productId from the URL
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [category, setCategory] = useState(null); 
// to track current category
 // State for the currently displayed main image

  // --- Sample Product Data (Expanded with more images and detailed specs) ---
  // In a real application, this would come from an API or a shared data file.
  // --- useEffect to load product data ---
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
      setCategory(productCategory); // New
    } else {
      navigate('/categories');
    }
  }, [productId, navigate]);
 // Rerun when productId changes

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
  const isPrebuiltPC = allSampleProducts['prebuilt-pcs'].includes(product);
  return (
    <div 
      ref={ref}
      className={`min-h-screen bg-white transition-opacity duration-1000 ${
        inView ? "animate-fadeInFromBack" : "opacity-0"
      }`}>
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
        {isPrebuiltPC ? 
        <div className="flex flex-col items-center">
          {/* Main Image */}
          <div className="relative h-[75%] w-full max-w-lg lg:max-w-none bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center p-4 mb-4 shadow-md">
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
        </div> : 
        <div className="flex gap-6 items-start justify-center">
          {/* Thumbnail Images (Vertical) */}
          {product.images.length > 1 && (
            <div className="flex flex-col gap-4">
              {product.images.map((imgSrc, index) => (
                <div
                  key={index}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 cursor-pointer transition-all duration-200
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

          {/* Main Image */}
          <div className="relative w-[400px] h-[500px] bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center p-4 shadow-md">
            <img
              src={mainImage}
              alt={product.name}
              className="max-w-full max-h-full object-contain"
            />
            {!product.inStock && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-xl">
                <span className="bg-red-600 text-white px-5 py-2 rounded-lg font-bold text-lg">
                  Out of Stock
                </span>
              </div>
            )}
          </div>
        </div>}


        {/* Right Section: Details */}
        {isPrebuiltPC ?
        <div className="mt-8 lg:mt-0">
          <span className="text-sm text-gray-500 uppercase font-semibold tracking-wide block mb-2">
            {product.brand}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {product.name}
          </h1>

          <p className="text-gray-700 leading-relaxed mb-6">
            {product.description2}
          </p>

          {/* Specifications */}
          <h2 className="text-xl font-bold text-gray-800 mb-3 border-b pb-2">
            Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700 mb-8">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key}>
                <p className="font-semibold inline">{key}:</p>{" "}
                <span className="inline">{value}</span>
              </div>
            ))}
          </div>

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
        </div> :
        <div className="space-y-4 mt-6 lg:mt-0 text-gray-800">
          {/* Product Name */}
          <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>

          {/* Rating and Stock */}
          <div className="flex items-center gap-2 text-yellow-500 text-sm">
            ★★★★☆ 
            <span className="text-gray-600">(150 Reviews)</span>
            {product.inStock ? (
              <span className="text-green-600 ml-2 font-medium">In Stock</span>
            ) : (
              <span className="text-red-600 ml-2 font-medium">Out of Stock</span>
            )}
          </div>

          {/* Price */}
          <div className="text-3xl font-semibold text-gray-900">
            ${product.price.toFixed(2)}
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed text-sm">
            {product.description2}
          </p>

          {/* Colour Options */}
          <div>
            <h4 className="font-semibold text-sm mb-1">Colours:</h4>
            <div className="flex gap-2">
              <span className="w-6 h-6 bg-gray-900 rounded-full border border-gray-300"></span>
              <span className="w-6 h-6 bg-red-500 rounded-full border border-gray-300"></span>
              {/* Add more colors if needed */}
            </div>
          </div>

          {/* Size Options */}
          <div>
            <h4 className="font-semibold text-sm mb-1">Size:</h4>
            <div className="flex gap-2 flex-wrap">
              {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                <button
                  key={size}
                  className="px-3 py-1 border text-sm rounded-md hover:bg-gray-100 transition"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Buy Now */}
          <div className="flex items-center gap-4 mt-4">
            <button className="w-8 h-8 border rounded text-lg font-bold">-</button>
            <span className="font-medium">2</span>
            <button className="w-8 h-8 border rounded text-lg font-bold">+</button>

            <button
              onClick={handleBuyNow}
              disabled={!product.inStock}
              className="ml-4 px-5 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Buy Now
            </button>
          </div>

          {/* Delivery Options */}
          <div className="mt-6 space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <span className="text-xl">🚚</span>
              <div>
                <strong>Free Delivery</strong><br />
                <span className="text-gray-600">Enter your postal code for delivery availability</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-xl">↩️</span>
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
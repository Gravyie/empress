import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams and useNavigate
import { useInView } from "react-intersection-observer";
import { allSampleProducts } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductsListingPage = () => {
  const { addToCart } = useCart();
  
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
    addToCart(product);
  };

  const handleProductClick = (productId) => {
    navigate('/product/' + productId);
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
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-black text-white">
      {/* Header */}
      <div className="border-b border-black/10 dark:border-white/10 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-5 py-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <div className="text-gray-500 dark:text-white/50 text-xs uppercase tracking-widest font-semibold mb-3">
                <button
                  onClick={goToCategories}
                  className="hover:text-white transition-colors"
                >
                  Categories
                </button>
                <span className="mx-2">/</span>
                {/* Display the formatted current category name */}
                <span className="text-[#F47C5A]">{formatCategoryName(categoryId)}</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white uppercase tracking-widest">
                {formatCategoryName(categoryId)}
              </h1>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              {/* Brand Filter: Dynamically populate options based on available products in the current category */}
              <select
                className="px-4 py-2.5 rounded bg-[#f8f9fa] dark:bg-black border border-black/20 dark:border-white/20 text-gray-800 dark:text-white/80 focus:ring-1 focus:ring-[#F47C5A] focus:border-[#F47C5A] text-xs uppercase tracking-wider outline-none transition-all cursor-pointer"
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
                className="px-4 py-2.5 rounded bg-[#f8f9fa] dark:bg-black border border-black/20 dark:border-white/20 text-gray-800 dark:text-white/80 focus:ring-1 focus:ring-[#F47C5A] focus:border-[#F47C5A] text-xs uppercase tracking-wider outline-none transition-all cursor-pointer"
                value={filters.priceRange}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              >
                <option value="">All Prices</option>
                <option value="under-200">Under $200</option>
                <option value="200-500">$200 - $500</option>
                <option value="over-500">Over $500</option>
              </select>

              <select
                className="px-4 py-2.5 rounded bg-[#f8f9fa] dark:bg-black border border-black/20 dark:border-white/20 text-gray-800 dark:text-white/80 focus:ring-1 focus:ring-[#F47C5A] focus:border-[#F47C5A] text-xs uppercase tracking-wider outline-none transition-all cursor-pointer"
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
        className={`max-w-7xl mx-auto px-5 py-8 transition-opacity duration-300 ${
        inView ? "animate-fadeInFromBack" : "opacity-0"
        }`}
      >
        {filteredProducts.length === 0 ? (
          <div className="text-center text-white py-20">
            <div className="text-6xl mb-4 opacity-50">🔍</div>
            <h3 className="text-2xl font-bold mb-2 uppercase tracking-widest text-white/90">No products found</h3>
            <p className="text-gray-500 dark:text-white/50 font-light">Try adjusting your filters</p>
            {/* Provide a button to clear filters */}
            {(filters.brand || filters.priceRange || filters.sortBy) && (
              <button
                onClick={() => setFilters({ brand: '', priceRange: '', sortBy: '' })}
                className="mt-6 bg-transparent border border-[#F47C5A]/50 hover:bg-[#F47C5A]/10 text-[#F47C5A] px-6 py-2.5 rounded text-xs uppercase tracking-widest font-semibold transition-colors"
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
                className="group bg-[#0a0a0a] rounded-xl overflow-hidden shadow-none hover:shadow-2xl hover:shadow-white/5 transform transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-black/10 dark:border-white/10 hover:border-white/30 flex flex-col"
              >
                {/* Product Image */}
                <div className="relative h-56 bg-white/[0.02] border-b border-white/[0.04] flex items-center justify-center overflow-hidden p-6">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute top-4 right-4 ${product.badge.color} text-white px-2.5 py-1 rounded text-[10px] uppercase tracking-wider font-bold shadow-lg`}>
                    {product.badge.text}
                  </div>
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-[#f8f9fa] dark:bg-black/80 backdrop-blur-sm flex items-center justify-center">
                      <span className="bg-black/10 dark:bg-white/10 border border-black/20 dark:border-white/20 text-gray-800 dark:text-white/80 px-4 py-2 rounded text-xs uppercase tracking-widest font-bold">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <div className="text-[10px] text-[#F47C5A] uppercase tracking-widest font-semibold mb-2">
                      {product.brand}
                    </div>
                    <h3 className="text-lg font-bold text-white/90 mb-3 line-clamp-2 leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 dark:text-white/40 text-xs font-light mb-6 line-clamp-3 leading-relaxed">
                      {product.description1}
                    </p>
                  </div>

                  {/* Specs */}
                  <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded p-4 mb-6 space-y-2">
                    {Object.entries(product.specs).slice(0, 3).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-xs">
                        <span className="text-gray-500 dark:text-white/40">{key}:</span>
                        <span className="text-gray-800 dark:text-white/80 font-medium text-right">{value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price and Add to Cart */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto pt-4 border-t border-white/[0.04]">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-white">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-gray-400 dark:text-white/30 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={(e) => handleAddToCart(e, product.id)}
                      disabled={!product.inStock}
                      className="bg-white text-black hover:bg-gray-200 px-6 py-2.5 rounded text-[10px] uppercase tracking-widest font-bold hover:bg-[#e06a4a] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
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
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams and useNavigate
import { useInView } from "react-intersection-observer";
import { allSampleProducts } from '../data/products';

const ProductsListingPage = () => {
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
    if (product && product.inStock) {
      console.log(`Added ${product.name} to cart!`);
      // In a real application, you would dispatch an action to add to a global cart state (e.g., using Context API or Redux)
      // For now, it's just a console log.
    } else {
      console.log(`${product.name} is out of stock.`);
    }
  };

  const handleProductClick = (productId) => {
    // console.log(`Navigating to product detail page for: ${productId}`); // You can keep or remove this console.log
    navigate('/product/' + productId); // <--- THIS IS THE REQUIRED CHANGE
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-5 py-5">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <div className="text-black/80 text-sm mb-2">
                <button
                  onClick={goToCategories}
                  className="hover:text-white transition-colors"
                >
                  Categories
                </button>
                <span className="mx-2">/</span>
                {/* Display the formatted current category name */}
                <span className="font-semibold">{formatCategoryName(categoryId)}</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-black drop-shadow-lg">
                {formatCategoryName(categoryId)}
              </h1>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              {/* Brand Filter: Dynamically populate options based on available products in the current category */}
              <select
                className="px-4 py-2 rounded-lg bg-white/90 backdrop-blur-sm border-0 focus:ring-2 focus:ring-purple-300 text-sm"
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
                className="px-4 py-2 rounded-lg bg-white/90 backdrop-blur-sm border-0 focus:ring-2 focus:ring-purple-300 text-sm"
                value={filters.priceRange}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              >
                <option value="">All Prices</option>
                <option value="under-200">Under $200</option>
                <option value="200-500">$200 - $500</option>
                <option value="over-500">Over $500</option>
              </select>

              <select
                className="px-4 py-2 rounded-lg bg-white/90 backdrop-blur-sm border-0 focus:ring-2 focus:ring-purple-300 text-sm"
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
        className={`max-w-7xl mx-auto px-5 py-8 transition-opacity duration-1000 ${
        inView ? "animate-fadeInFromBack" : "opacity-0"
        }`}
      >
        {filteredProducts.length === 0 ? (
          <div className="text-center text-white py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">No products found</h3>
            <p className="text-white/80">Try adjusting your filters</p>
            {/* Provide a button to clear filters */}
            {(filters.brand || filters.priceRange || filters.sortBy) && (
              <button
                onClick={() => setFilters({ brand: '', priceRange: '', sortBy: '' })}
                className="mt-4 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors"
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
                className="group bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-white/20"
              >
                {/* Product Image */}
                <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="max-w-[80%] max-h-[80%] object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute top-3 right-3 ${product.badge.color} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                    {product.badge.text}
                  </div>
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Content */}
                <div className="p-6">
                  <div className='h-[150px]'>
                  <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-2">
                    {product.brand}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {product.description1}
                  </p>
                  </div>

                  {/* Specs */}
                  <div className="bg-gray-50 rounded-lg p-3 mb-4 space-y-1">
                    {Object.entries(product.specs).slice(0, 3).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-xs">
                        <span className="text-gray-500 font-medium">{key}:</span>
                        <span className="text-gray-700 font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price and Add to Cart */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-gray-800">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={(e) => handleAddToCart(e, product.id)}
                      disabled={!product.inStock}
                      className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-2 rounded-full font-semibold hover:from-indigo-600 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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
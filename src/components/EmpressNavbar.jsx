import React, { useState, useEffect } from 'react';
import { ChevronDown, Search, Menu, X, ShoppingBag } from 'lucide-react';

const EmpressNavbar = ({ theme = 'dark' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {

      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);
      
      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Apple-style navigation structure
  const navItems = [
    {
      label: 'Gaming',
      href: '/gaming',
      submenu: {
        sections: [
          {
            title: 'Explore Gaming',
            items: [
              { name: 'Explore All Gaming PCs', desc: 'View the entire gaming lineup', featured: true },
              { name: 'Entry Gaming', desc: 'Starting at ₹59,999', price: '₹59,999' },
              { name: 'Mid-Range Gaming', desc: 'Starting at ₹99,999', price: '₹99,999' },
              { name: 'High-End Gaming', desc: 'Starting at ₹1,99,999', price: '₹1,99,999' },
              { name: 'Ultimate Gaming', desc: 'Starting at ₹2,99,999', price: '₹2,99,999' }
            ]
          },
          {
            title: 'Shop Gaming',
            items: [
              { name: 'ChronoX', desc: 'RTX 4060 Ti Gaming Build' },
              { name: 'Frame Rush', desc: 'RTX 4070 Super Gaming Build' },
              { name: 'Ghost Fury', desc: 'RTX 4060 Gaming Build' },
              { name: 'Ignite One', desc: 'RTX 4070 Gaming Build' },
              { name: 'IronPulse Start', desc: 'Budget Gaming Build' },
              { name: 'Nexora', desc: 'Premium Gaming Build' }
            ]
          },
          {
            title: 'More from Gaming',
            items: [
              { name: 'Gaming Support', desc: 'Expert gaming assistance' },
              { name: 'Gaming Accessories', desc: 'Keyboards, mice, headsets' },
              { name: 'Performance Tuning', desc: 'Optimize your gaming rig' },
              { name: 'Gaming Guides', desc: 'Tips and tutorials' },
              { name: 'Warranty Service', desc: 'Gaming PC protection' }
            ]
          }
        ]
      }
    },
    {
      label: 'Workstation',
      href: "/workstations",
      submenu: {
        sections: [
          {
            title: 'Explore Workstation',
            items: [
              { name: 'Explore All Workstations', desc: 'Professional computing solutions', featured: true },
              { name: 'Content Creation', desc: 'Starting at ₹89,999', price: '₹89,999' },
              { name: 'Video Editing', desc: 'Starting at ₹1,49,999', price: '₹1,49,999' },
              { name: 'AI/ML Workstation', desc: 'Starting at ₹2,49,999', price: '₹2,49,999' },
              { name: 'Server Solutions', desc: 'Starting at ₹3,49,999', price: '₹3,49,999' }
            ]
          },
          {
            title: 'Shop Workstation',
            items: [
              { name: 'Productivity Build', desc: 'Office and business tasks' },
              { name: 'Creator Studio', desc: 'Content creation powerhouse' },
              { name: 'Render Farm', desc: 'High-performance rendering' },
              { name: 'Data Science Rig', desc: 'Analytics and AI processing' }
            ]
          },
          {
            title: 'More from Workstation',
            items: [
              { name: 'Workstation Support', desc: 'Professional assistance' },
              { name: 'Professional Software', desc: 'Licensed applications' },
              { name: 'Custom Configurations', desc: 'Tailored solutions' },
              { name: 'Enterprise Solutions', desc: 'Business-grade systems' }
            ]
          }
        ]
      }
    },
    {
      label: 'Custom PC',
      href: "/custom-pc",
      submenu: {
        sections: [
          {
            title: 'Build Your PC',
            items: [
              { name: 'PC Configurator', desc: 'Build your dream PC online', featured: true },
              { name: 'Budget Builds', desc: 'Starting at ₹45,999', price: '₹45,999' },
              { name: 'Premium Builds', desc: 'Starting at ₹1,99,999', price: '₹1,99,999' },
              { name: 'Extreme Builds', desc: 'Starting at ₹4,99,999', price: '₹4,99,999' }
            ]
          },
          {
            title: 'Components',
            items: [
              { name: 'Graphics Cards', desc: 'Latest GPU technology' },
              { name: 'Processors', desc: 'Intel & AMD CPUs' },
              { name: 'Memory & Storage', desc: 'RAM & SSD solutions' },
              { name: 'Cooling Systems', desc: 'Keep your system cool' },
              { name: 'Power Supplies', desc: 'Reliable PSU units' }
            ]
          },
          {
            title: 'More from Custom PC',
            items: [
              { name: 'Build Consultation', desc: 'Expert guidance' },
              { name: 'Component Compatibility', desc: 'Perfect part matching' },
              { name: 'Performance Estimates', desc: 'Expected benchmarks' },
              { name: 'Assembly Service', desc: 'Professional building' }
            ]
          }
        ]
      }
    },
    {
      label: 'Accessories',
      href: '/accessories',
      submenu: {
        sections: [
          {
            title: 'Explore Accessories',
            items: [
              { name: 'Explore All Accessories', desc: 'Complete accessory lineup', featured: true },
              { name: 'Gaming Peripherals', desc: 'High-performance gaming gear' },
              { name: 'Professional Tools', desc: 'Work-focused accessories' },
              { name: 'Audio Equipment', desc: 'Premium sound solutions' }
            ]
          },
          {
            title: 'Shop Accessories',
            items: [
              { name: 'Mechanical Keyboards', desc: 'Premium typing experience' },
              { name: 'Gaming Mice', desc: 'Precision gaming control' },
              { name: 'Gaming Headsets', desc: 'Immersive audio' },
              { name: 'Monitors', desc: 'High-refresh displays' },
              { name: 'Webcams & Mics', desc: 'Streaming essentials' }
            ]
          },
          {
            title: 'More from Accessories',
            items: [
              { name: 'Accessory Support', desc: 'Setup and troubleshooting' },
              { name: 'Compatibility Guide', desc: 'Perfect accessory matching' },
              { name: 'Gaming Setup Tips', desc: 'Optimize your battlestation' },
              { name: 'Professional Setups', desc: 'Workspace optimization' }
            ]
          }
        ]
      }
    },
    {
      label: 'Contact',
      href: '/contact',
      submenu: {
        sections: [
          {
            title: 'Get Support',
            items: [
              { name: 'Technical Support', desc: '24/7 expert assistance', featured: true },
              { name: 'Warranty Service', desc: 'Comprehensive coverage' },
              { name: 'Installation Help', desc: 'Professional setup service' },
              { name: 'Performance Tuning', desc: 'Optimize your system' }
            ]
          },
          {
            title: 'Self Service',
            items: [
              { name: 'User Manuals', desc: 'Detailed documentation' },
              { name: 'Video Tutorials', desc: 'Step-by-step guides' },
              { name: 'Troubleshooting', desc: 'Common issue solutions' },
              { name: 'Driver Downloads', desc: 'Latest software updates' }
            ]
          },
          {
            title: 'More from Support',
            items: [
              { name: 'Community Forum', desc: 'Connect with users' },
              { name: 'Live Chat', desc: 'Instant assistance' },
              { name: 'Remote Diagnostics', desc: 'Online system check' },
              { name: 'Empress Care+', desc: 'Premium support plans' }
            ]
          }
        ]
      }
    },
    // Adding the new navigation items without submenus
    {
      label: 'Events',
      href: '/events'
    },
    {
      label: 'Blogs',
      href: '/blogs'
    },
    {
      label: 'About',
      href: '/about'
    }
  ];

  const isDark = theme === 'dark';
  const navBg = isDark 
    ? `${isScrolled ? 'bg-black/95' : 'bg-black/80'}` 
    : `${isScrolled ? 'bg-white/95' : 'bg-white/80'}`;

  return (
    <>
      {/* Apple-style top banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-2 text-sm">
        Get up to 12 months of No Cost EMI plus up to ₹80,000 instant cashback on selected products. 
        <span className="ml-2 text-orange-200 hover:text-white transition-colors cursor-pointer">Shop &gt;</span>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-8 left-0 right-0 z-40 ${navBg} backdrop-blur-xl transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            
            {/* Logo */}
            <a href="/">
              <div className="flex-shrink-0">
                <div className="flex items-center cursor-pointer group">
                  <div className="relative">
                    {/* Sprint-style colorful background for logo */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-lg transform rotate-3 opacity-90"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 rounded-lg transform -rotate-3 opacity-80"></div>
                    
                    {/* Logo container with sprint-style background and shadow */}
                    <div className="relative bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-200 rounded-lg p-1.5 shadow-2xl border border-orange-300/30"
                        style={{
                          background: 'linear-gradient(135deg, #fff7ed 0%, #fed7aa 25%, #fdba74 50%, #fb923c 75%, #ea580c 100%)'
                        }}>
                      <img 
                        src="/images/Logo2.png" 
                        alt="Empress PC" 
                        className="h-12 w-auto transform transition-transform duration-200 group-hover:scale-105 drop-shadow-lg"
                        style={{
                          filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3)) drop-shadow(-2px -2px 4px rgba(0,0,0,0.1))'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => item.submenu ? setActiveDropdown(index) : null}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className={`${isDark ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-600'} text-sm font-normal py-2 transition-colors duration-200 cursor-pointer flex items-center space-x-1`}
                  >
                    <span>{item.label}</span>
                    {item.submenu && (
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''}`} />
                    )}
                  </a>
                </div>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <button className={`${isDark ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-600'} transition-colors duration-200`}>
                <Search className="w-4 h-4" />
              </button>
              <button className={`${isDark ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-600'} transition-colors duration-200`}>
                <ShoppingBag className="w-4 h-4" />
              </button>

              {/* Mobile Menu Button */}
              <button
                className={`lg:hidden ${isDark ? 'text-white' : 'text-gray-900'} transition-colors duration-200`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Full-width Apple-style Dropdown */}
        {activeDropdown !== null && navItems[activeDropdown].submenu && (
          <div className="absolute top-full left-0 right-0">
            <div className={`${isDark ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-xl border-t ${isDark ? 'border-white/10' : 'border-black/10'}`}>
              <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-3 gap-16">
                  {navItems[activeDropdown].submenu.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      <h3 className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-xs font-medium uppercase tracking-wide mb-6`}>
                        {section.title}
                      </h3>
                      <div className="space-y-1">
                        {section.items.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href="#"
                            className={`block p-3 rounded-lg transition-all duration-150 ${isDark ? 'hover:bg-white/5' : 'hover:bg-black/5'} group`}
                          >
                            <div className={`${isDark ? 'text-white' : 'text-gray-900'} text-sm font-medium ${subItem.featured ? 'text-orange-500' : ''} group-hover:text-orange-500 transition-colors`}>
                              {subItem.name}
                            </div>
                            {subItem.desc && (
                              <div className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-xs mt-1`}>
                                {subItem.desc}
                              </div>
                            )}
                            {subItem.price && (
                              <div className="text-xs text-orange-500 mt-1 font-medium">
                                {subItem.price}
                              </div>
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Full-screen backdrop blur when dropdown is open */}
      {activeDropdown !== null && (
        <div 
          className="fixed inset-0 z-30 backdrop-blur-sm bg-black/20 transition-all duration-300"
          style={{ top: '140px' }}
          onMouseEnter={() => setActiveDropdown(null)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-30 transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
          onClick={() => setIsMobileMenuOpen(false)} 
        />
        <div className={`absolute right-0 top-0 h-full w-80 ${isDark ? 'bg-gray-900' : 'bg-white'} transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } overflow-y-auto`}>
          <div className="p-6 pt-16">
            <div className="space-y-6">
              <a href="/" className={`block text-lg font-medium ${isDark ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-600'} transition-colors`}>
                Home
              </a>
              {navItems.map((item, index) => (
                <div key={index} className="space-y-3">
                  <a 
                    href={item.href}
                    className={`block text-lg font-medium ${isDark ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-600'} transition-colors`}
                  >
                    {item.label}
                  </a>
                  {item.submenu && (
                    <div className="ml-4 space-y-3">
                      {item.submenu.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                          <div className={`text-xs font-medium uppercase tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-2`}>
                            {section.title}
                          </div>
                          {section.items.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href="#"
                              className={`block text-sm ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors ml-2`}
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a href="/contact" className={`block text-lg font-medium ${isDark ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-600'} transition-colors`}>
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default EmpressNavbar;
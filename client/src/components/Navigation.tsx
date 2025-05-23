/**
 * Navigation.tsx
 * 
 * Primary navigation component for the website that handles both desktop and mobile views.
 * Includes responsive design, dropdown menus, and active link highlighting.
 */
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import Logo from "@/assets/Logo";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

/**
 * Navigation component that provides the main site navigation
 * Features:
 * - Responsive design for both desktop and mobile
 * - Services dropdown menu
 * - Active link highlighting
 * - Mobile menu toggle
 * 
 * @returns JSX for the site-wide navigation header
 */
const Navigation = () => {
  // Get current route for highlighting active links
  const [location] = useLocation();
  
  // State for mobile menu and services dropdown visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  
  // Reference to the dropdown element for click-outside detection
  const dropdownRef = useRef<HTMLDivElement>(null);

  /**
   * Effect for handling clicks outside the services dropdown
   * Closes the dropdown when user clicks anywhere else on the page
   */
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /**
   * Toggles the mobile menu open/closed state
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close services dropdown when mobile menu is toggled
    setServicesDropdownOpen(false);
  };

  /**
   * Closes the mobile menu (used when a link is clicked)
   */
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  /**
   * Toggles the services dropdown menu open/closed state
   */
  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  /**
   * Checks if the given path matches the current location
   * Used for highlighting active links
   * 
   * @param path - The path to check against current location
   * @returns boolean indicating if the path is active
   */
  const isActive = (path: string) => {
    return location === path;
  };

  /**
   * Checks if any services-related page is currently active
   * Used for highlighting the Services dropdown
   * 
   * @returns boolean indicating if any service page is active
   */
  const isServicesActive = () => {
    return ["/services", "/ceramic", "/ppf", "/liquid-wrap"].includes(location);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Our Work", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Company Name and Tagline (visible on all devices) */}
        <Link href="/" className="flex items-center gap-2 lg:gap-3 flex-shrink-0 pr-4">
          {/* Logo - hidden on mobile, visible and positioned first on larger screens */}
          <div className="hidden sm:block order-first">
            <Logo className="h-14 md:h-16" />
          </div>
          
          {/* Company name and tagline - shown on all devices */}
          <div className="flex flex-col flex-shrink-0">
            <span className="font-heading font-bold text-base sm:text-lg lg:text-xl" style={{ color: '#5CA424', textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.3)' }}>Fairway Detailing Company</span>
            <span className="font-heading text-xs lg:text-sm font-medium" style={{ marginTop: '-2px' }}>It's all about a clean drive!</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-3 lg:space-x-6 ml-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              href={link.path}
              className={`font-heading font-semibold text-sm lg:text-base transition-colors ${
                isActive(link.path) ? "text-primary" : "hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={toggleServicesDropdown}
              className={`font-heading font-semibold text-sm lg:text-base transition-colors flex items-center ${
                isServicesActive() ? "text-primary" : "hover:text-primary"
              }`}
            >
              Services <ChevronDown className={`ml-1 h-3 lg:h-4 w-3 lg:w-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>              {servicesDropdownOpen && (
              <div className="absolute top-full right-0 sm:left-0 mt-1 w-48 sm:w-52 bg-white shadow-lg rounded-md py-1 z-50">
                <Link 
                  href="/services" 
                  className={`block px-3 sm:px-4 py-2 font-heading font-semibold text-xs sm:text-sm ${isActive("/services") ? "text-primary" : "hover:text-primary"}`}
                  onClick={() => setServicesDropdownOpen(false)}
                >
                  All Services
                </Link>
                <Link 
                  href="/ceramic" 
                  className={`block px-3 sm:px-4 py-2 font-heading font-semibold text-xs sm:text-sm ${isActive("/ceramic") ? "text-primary" : "hover:text-primary"}`}
                  onClick={() => setServicesDropdownOpen(false)}
                >
                  Ceramic Coatings
                </Link>
                <Link 
                  href="/ppf" 
                  className={`block px-3 sm:px-4 py-2 font-heading font-semibold text-xs sm:text-sm ${isActive("/ppf") ? "text-primary" : "hover:text-primary"}`}
                  onClick={() => setServicesDropdownOpen(false)}
                >
                  Paint Protection Film
                </Link>
                <Link 
                  href="/liquid-wrap" 
                  className={`block px-3 sm:px-4 py-2 font-heading font-semibold text-xs sm:text-sm ${isActive("/liquid-wrap") ? "text-primary" : "hover:text-primary"}`}
                  onClick={() => setServicesDropdownOpen(false)}
                >
                  Liquid Wrap
                </Link>
              </div>
            )}
          </div>
          
          <a 
            href="tel:440-635-6990" 
            className="bg-primary hover:bg-primary/90 text-white font-heading font-semibold px-3 lg:px-5 py-1 lg:py-2 rounded-md transition-colors flex items-center text-sm lg:text-base whitespace-nowrap"
          >
            <Phone className="mr-1 lg:mr-2 h-3 lg:h-4 w-3 lg:w-4" /> 440-635-6990
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-secondary focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-2 space-y-2">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                href={link.path}
                className={`block font-heading font-semibold py-2 transition-colors ${
                  isActive(link.path) ? "text-primary" : "hover:text-primary"
                }`}
                onClick={closeMobileMenu}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Services Menu Item */}
            <div ref={dropdownRef}>
              <button 
                onClick={toggleServicesDropdown}
                className={`w-full text-left font-heading font-semibold py-2 transition-colors flex items-center justify-between ${
                  isServicesActive() ? "text-primary" : "hover:text-primary"
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesDropdownOpen && (
                <div className="ml-4 mt-2 space-y-2 border-l-2 border-gray-100 pl-4">
                  <Link 
                    href="/services" 
                    className={`block font-heading font-semibold py-2 ${isActive("/services") ? "text-primary" : "hover:text-primary"}`}
                    onClick={closeMobileMenu}
                  >
                    All Services
                  </Link>
                  <Link 
                    href="/ceramic" 
                    className={`block font-heading font-semibold py-2 ${isActive("/ceramic") ? "text-primary" : "hover:text-primary"}`}
                    onClick={closeMobileMenu}
                  >
                    Ceramic Coatings
                  </Link>
                  <Link 
                    href="/ppf" 
                    className={`block font-heading font-semibold py-2 ${isActive("/ppf") ? "text-primary" : "hover:text-primary"}`}
                    onClick={closeMobileMenu}
                  >
                    Paint Protection Film
                  </Link>
                  <Link 
                    href="/liquid-wrap" 
                    className={`block font-heading font-semibold py-2 ${isActive("/liquid-wrap") ? "text-primary" : "hover:text-primary"}`}
                    onClick={closeMobileMenu}
                  >
                    Liquid Wrap
                  </Link>
                </div>
              )}
            </div>
            
            <a 
              href="tel:440-635-6990"
              className="bg-primary hover:bg-primary/90 text-white font-heading font-semibold px-5 py-2 rounded-md inline-flex items-center justify-center transition-colors"
              onClick={closeMobileMenu}
            >
              <Phone className="mr-2 h-4 w-4" /> 440-635-6990
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;

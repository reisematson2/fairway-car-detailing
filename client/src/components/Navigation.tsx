import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import Logo from "@/assets/Logo";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const Navigation = () => {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  const isServicesActive = () => {
    return ["/services", "/ceramic", "/ppf", "/liquid-wrap"].includes(location);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo and Company Name */}
        <Link href="/" className="flex items-center gap-3">
          <Logo className="h-12" />
          <span className="font-heading font-bold text-xl hidden sm:block">Fairway Car Detailing</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              href={link.path}
              className={`font-heading font-semibold transition-colors ${
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
              className={`font-heading font-semibold transition-colors flex items-center ${
                isServicesActive() ? "text-primary" : "hover:text-primary"
              }`}
            >
              Services <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-52 bg-white shadow-lg rounded-md py-1 z-50">
                <Link 
                  href="/services" 
                  className={`block px-4 py-2 font-heading font-semibold text-sm ${isActive("/services") ? "text-primary" : "hover:text-primary"}`}
                  onClick={() => setServicesDropdownOpen(false)}
                >
                  All Services
                </Link>
                <Link 
                  href="/ceramic" 
                  className={`block px-4 py-2 font-heading font-semibold text-sm ${isActive("/ceramic") ? "text-primary" : "hover:text-primary"}`}
                  onClick={() => setServicesDropdownOpen(false)}
                >
                  Ceramic Coatings
                </Link>
                <Link 
                  href="/ppf" 
                  className={`block px-4 py-2 font-heading font-semibold text-sm ${isActive("/ppf") ? "text-primary" : "hover:text-primary"}`}
                  onClick={() => setServicesDropdownOpen(false)}
                >
                  Paint Protection Film
                </Link>
                <Link 
                  href="/liquid-wrap" 
                  className={`block px-4 py-2 font-heading font-semibold text-sm ${isActive("/liquid-wrap") ? "text-primary" : "hover:text-primary"}`}
                  onClick={() => setServicesDropdownOpen(false)}
                >
                  Liquid Wrap
                </Link>
              </div>
            )}
          </div>
          
          <a href="tel:5551234567" className="bg-primary hover:bg-primary/90 text-white font-heading font-semibold px-5 py-2 rounded-md transition-colors flex items-center">
            <Phone className="mr-2 h-4 w-4" /> (555) 123-4567
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-secondary focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-2">
          <div className="flex flex-col space-y-3 py-3">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                href={link.path}
                className={`font-heading font-semibold transition-colors ${
                  isActive(link.path) ? "text-primary" : "hover:text-primary"
                }`}
                onClick={closeMobileMenu}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Services Menu Item */}
            <div>
              <button 
                onClick={toggleServicesDropdown}
                className={`font-heading font-semibold transition-colors flex items-center w-full text-left ${
                  isServicesActive() ? "text-primary" : "hover:text-primary"
                }`}
              >
                Services <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesDropdownOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link 
                    href="/services" 
                    className={`block font-heading font-semibold ${isActive("/services") ? "text-primary" : "hover:text-primary"}`}
                    onClick={closeMobileMenu}
                  >
                    All Services
                  </Link>
                  <Link 
                    href="/ceramic" 
                    className={`block font-heading font-semibold ${isActive("/ceramic") ? "text-primary" : "hover:text-primary"}`}
                    onClick={closeMobileMenu}
                  >
                    Ceramic Coatings
                  </Link>
                  <Link 
                    href="/ppf" 
                    className={`block font-heading font-semibold ${isActive("/ppf") ? "text-primary" : "hover:text-primary"}`}
                    onClick={closeMobileMenu}
                  >
                    Paint Protection Film
                  </Link>
                  <Link 
                    href="/liquid-wrap" 
                    className={`block font-heading font-semibold ${isActive("/liquid-wrap") ? "text-primary" : "hover:text-primary"}`}
                    onClick={closeMobileMenu}
                  >
                    Liquid Wrap
                  </Link>
                </div>
              )}
            </div>
            
            <a 
              href="tel:5551234567" 
              className="bg-primary hover:bg-primary/90 text-white font-heading font-semibold px-5 py-2 rounded-md inline-flex items-center justify-center transition-colors"
              onClick={closeMobileMenu}
            >
              <Phone className="mr-2 h-4 w-4" /> (555) 123-4567
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;

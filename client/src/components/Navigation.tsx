import { useState } from "react";
import { Link, useLocation } from "wouter";
import OhioLogo from "@/assets/OhioLogo";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Ceramic", path: "/ceramic" },
    { name: "PPF", path: "/ppf" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="h-12 w-12 mr-3">
            <OhioLogo />
          </div>
          <div>
            <h1 className="font-heading font-bold text-secondary text-lg">FAIRWAY DETAILING</h1>
            <p className="text-primary text-xs font-medium">IT'S ALL ABOUT A CLEAN DRIVE</p>
          </div>
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
          <Link href="/booking" className="bg-primary hover:bg-primary/90 text-white font-heading font-semibold px-5 py-2 rounded-md transition-colors">
            Book Now
          </Link>
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
            <Link 
              href="/booking" 
              className="bg-primary hover:bg-primary/90 text-white font-heading font-semibold px-5 py-2 rounded-md inline-block text-center transition-colors"
              onClick={closeMobileMenu}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;

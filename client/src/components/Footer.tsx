import { Link } from "wouter";
import OhioLogo from "@/assets/OhioLogo";
import { Facebook, Instagram, Twitter, Youtube, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Info */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <div className="h-10 w-10 mr-3">
                <OhioLogo />
              </div>
              <div>
                <h1 className="font-heading font-bold text-white text-lg">FAIRWAY</h1>
                <p className="text-primary text-xs font-medium">IT'S ALL ABOUT A CLEAN DRIVE</p>
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              Ohio's one-stop shop for mobile detailing services. We come to you!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/ceramic" className="text-gray-400 hover:text-white transition-colors">Ceramic Coatings</Link></li>
              <li><Link href="/ppf" className="text-gray-400 hover:text-white transition-colors">Paint Protection Film</Link></li>
              <li><Link href="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Essential Detail</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Premium Refresh</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Showroom Detail</Link></li>
              <li><Link href="/ceramic" className="text-gray-400 hover:text-white transition-colors">Ceramic Coatings</Link></li>
              <li><Link href="/ppf" className="text-gray-400 hover:text-white transition-colors">Paint Protection Film</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Add-on Services</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for tips, news, and special offers.</p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full px-3 py-2 bg-white bg-opacity-10 rounded-l-md border border-gray-700 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-white placeholder-gray-500"
                />
                <button 
                  type="submit" 
                  className="bg-primary hover:bg-primary/90 px-4 py-2 rounded-r-md transition-colors"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </form>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">&copy; {new Date().getFullYear()} Fairway Detailing Company. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

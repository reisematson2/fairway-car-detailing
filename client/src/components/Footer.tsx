import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import fullLogo from "@/assets/fulllogo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Info */}
          <div className="md:col-span-1">
            <Link href="/" className="block mb-4">
              <img 
                src={fullLogo} 
                alt="Fairway Detailing Company Logo" 
                className="w-full max-w-[220px] brightness-[1.3] filter" 
              />
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
              <li><Link href="/gallery" className="text-gray-400 hover:text-white transition-colors">Our Work</Link></li>
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

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 mb-6">
              <p className="text-gray-400">
                <span className="font-semibold text-white">Phone:</span><br />
                (555) 123-4567
              </p>
              <p className="text-gray-400">
                <span className="font-semibold text-white">Email:</span><br />
                info@fairwaydetailing.com
              </p>
              <p className="text-gray-400">
                <span className="font-semibold text-white">Operating Hours:</span><br />
                Mon-Fri: 8am - 6pm<br />
                Sat: 9am - 4pm
              </p>
            </div>
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

import { Link } from "wouter";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-[80vh] bg-hero-pattern bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
        <motion.div 
          className="container mx-auto px-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-2xl">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">It's All About a Clean Drive</h1>
            <p className="text-xl mb-6">Ohio's one-stop shop for mobile detailing. Professional services that protect your investment and keep your vehicle looking showroom-new.</p>
            
            <div className="mb-8">
              <div className="flex items-center mb-2">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:5551234567" className="text-white hover:text-primary-foreground/90 transition-colors text-lg">
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:info@fairwaydetailing.com" className="text-white hover:text-primary-foreground/90 transition-colors text-lg">
                  info@fairwaydetailing.com
                </a>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/services" className="bg-primary hover:bg-primary/90 text-white font-heading font-semibold px-8 py-3 rounded-md text-center transition-colors">
                Our Services
              </Link>
              <Link href="/booking" className="bg-white hover:bg-gray-100 text-secondary font-heading font-semibold px-8 py-3 rounded-md text-center transition-colors">
                Book Now
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

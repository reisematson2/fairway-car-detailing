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
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Reasons to Call Fairway Detailing Company</h2>
            
            <ul className="space-y-4 mb-8">
              <li>
                <h3 className="font-heading font-bold text-lg text-primary">Preserve Vehicle Value</h3>
                <p className="text-gray-100">
                  Regular detailing helps maintain the value of your car—preventing damage from dirt, UV rays, and interior stains. Ideal for lease returns or future resale!
                </p>
              </li>
              <li>
                <h3 className="font-heading font-bold text-lg text-primary">Time-Saving and Hassle-Free</h3>
                <p className="text-gray-100">
                  Drop off your vehicle, or we'll pick it up—or come to you! Schedule easily via text, email, call, or online booking.
                </p>
              </li>
              <li>
                <h3 className="font-heading font-bold text-lg text-primary">One-Stop Shop</h3>
                <p className="text-gray-100">
                  Services include interior/exterior detailing, ceramic coating, PPF, odor removal, pet hair removal, and more.
                </p>
              </li>
              <li>
                <h3 className="font-heading font-bold text-lg text-primary">Proven Experience</h3>
                <p className="text-gray-100">
                  Over 10 years of hands-on experience and proven results in automotive detailing.
                </p>
              </li>
              <li>
                <h3 className="font-heading font-bold text-lg text-primary">Locally Owned and Trusted</h3>
                <p className="text-gray-100">
                  Family-operated in Northeast Ohio—personalized service where we treat every detail like it's for one of our own.
                </p>
              </li>
            </ul>
            
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

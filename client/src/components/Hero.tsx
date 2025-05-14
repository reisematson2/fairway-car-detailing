import { Link } from "wouter";
import { motion } from "framer-motion";
import { Phone, Mail, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-hero-pattern bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative px-4 pt-12 pb-16 md:py-24 lg:py-32">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
            {/* Left side content */}
            <motion.div 
              className="w-full md:w-3/5 text-white mt-4 md:mt-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Reasons to Call Fairway Detailing Company</h2>
              
              <ul className="space-y-4 md:space-y-5 mb-8 md:mb-0">
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-primary brightness-125 mt-1 mr-3 flex-shrink-0 drop-shadow-md" />
                  <div>
                    <h3 className="font-heading font-bold text-lg text-primary brightness-125">Preserve Vehicle Value</h3>
                    <p className="text-gray-100 text-sm md:text-base">
                      Regular detailing helps maintain the value of your car—preventing damage from dirt, UV rays, and interior stains. Ideal for lease returns or future resale!
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-primary brightness-125 mt-1 mr-3 flex-shrink-0 drop-shadow-md" />
                  <div>
                    <h3 className="font-heading font-bold text-lg text-primary brightness-125">Time-Saving and Hassle-Free</h3>
                    <p className="text-gray-100 text-sm md:text-base">
                      Drop off your vehicle, or we'll pick it up—or come to you! Schedule easily via text, email, call, or online booking.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-primary brightness-125 mt-1 mr-3 flex-shrink-0 drop-shadow-md" />
                  <div>
                    <h3 className="font-heading font-bold text-lg text-primary brightness-125">One-Stop Shop</h3>
                    <p className="text-gray-100 text-sm md:text-base">
                      Services include interior/exterior detailing, ceramic coating, PPF, odor removal, pet hair removal, and more.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-primary brightness-125 mt-1 mr-3 flex-shrink-0 drop-shadow-md" />
                  <div>
                    <h3 className="font-heading font-bold text-lg text-primary brightness-125">Proven Experience</h3>
                    <p className="text-gray-100 text-sm md:text-base">
                      Over 10 years of hands-on experience and proven results in automotive detailing.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-primary brightness-125 mt-1 mr-3 flex-shrink-0 drop-shadow-md" />
                  <div>
                    <h3 className="font-heading font-bold text-lg text-primary brightness-125">Locally Owned and Trusted</h3>
                    <p className="text-gray-100 text-sm md:text-base">
                      Family-operated in Northeast Ohio—personalized service where we treat every detail like it's for one of our own.
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
            
            {/* Right side contact card */}
            <motion.div
              className="w-full md:w-2/5 max-w-md my-4 md:my-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                <h3 className="font-heading text-xl font-bold mb-4 text-secondary">Contact Us Today</h3>
                
                <div className="mb-6 space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-primary" />
                    <a href="tel:5551234567" className="text-gray-700 hover:text-primary transition-colors text-lg">
                      (555) 123-4567
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-primary" />
                    <a href="mailto:info@fairwaydetailing.com" className="text-gray-700 hover:text-primary transition-colors">
                      info@fairwaydetailing.com
                    </a>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Link href="/services" className="block bg-primary hover:bg-primary/90 text-white font-heading font-semibold px-6 py-3 rounded-md text-center transition-colors w-full">
                    Our Services
                  </Link>
                  <Link href="/booking" className="block bg-secondary hover:bg-secondary/90 text-white font-heading font-semibold px-6 py-3 rounded-md text-center transition-colors w-full">
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

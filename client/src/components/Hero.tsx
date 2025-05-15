import { Link } from "wouter";
import { motion } from "framer-motion";
import { Phone, Mail, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#5CA424] to-[#2d4e15] text-white overflow-hidden">
      {/* Background pattern for visual interest */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url(/noise.svg)' }}>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      </div>
      <div className="relative py-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
            {/* Left side content */}
            <motion.div 
              className="w-full md:w-3/5 text-white mt-4 md:mt-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white text-center md:text-left">Reasons to Call Fairway Detailing Company</h2>
              
              <ul className="space-y-3 mb-8 md:mb-0 text-left">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-200 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold text-xl md:text-2xl text-white">Preserve Vehicle Value</h3>
                    <p className="text-gray-200 text-lg">
                      Regular detailing helps maintain the value of your car—preventing damage from dirt, UV rays, and interior stains. Ideal for lease returns or future resale!
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-200 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold text-xl md:text-2xl text-white">Time-Saving and Hassle-Free</h3>
                    <p className="text-gray-200 text-lg">
                      Drop off your vehicle, or we'll pick it up—or come to you! Schedule easily via text, email, call, or online booking.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-200 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold text-xl md:text-2xl text-white">One-Stop Shop</h3>
                    <p className="text-gray-200 text-lg">
                      Services include interior/exterior detailing, ceramic coating, PPF, odor removal, pet hair removal, and more.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-200 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold text-xl md:text-2xl text-white">Proven Experience</h3>
                    <p className="text-gray-200 text-lg">
                      Over 10 years of hands-on experience and proven results in automotive detailing.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-200 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold text-xl md:text-2xl text-white">Locally Owned and Trusted</h3>
                    <p className="text-gray-200 text-lg">
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
              <div className="bg-white text-black rounded-xl shadow-lg p-6">
                <h3 className="font-heading text-xl font-bold mb-2 text-secondary">Contact Us Today</h3>
                
                <div className="mb-6 space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-[#5CA424]" />
                    <a href="tel:5551234567" className="text-[#5CA424] font-medium text-lg hover:underline transition-all">
                      (555) 123-4567
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-[#5CA424]" />
                    <a href="mailto:info@fairwaydetailing.com" className="text-[#5CA424] font-medium hover:underline transition-all">
                      info@fairwaydetailing.com
                    </a>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Link href="/services" className="block bg-[#5CA424] hover:bg-[#4c8e1e] text-white py-2 rounded-full transition font-semibold text-center w-full">
                    Our Services
                  </Link>
                  <Link href="/booking" className="block bg-[#5CA424] hover:bg-[#4c8e1e] text-white py-2 rounded-full transition font-semibold text-center w-full">
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

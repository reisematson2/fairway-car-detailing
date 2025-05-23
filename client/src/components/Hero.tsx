/**
 * Hero.tsx
 * 
 * Hero section component for the homepage featuring key value propositions
 * and a contact card for quick conversions. Includes animations and responsive
 * design for various screen sizes.
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Phone, Mail, CheckCircle } from "lucide-react";

/**
 * Hero component that displays at the top of the homepage
 * Contains:
 * - Value proposition bullet points
 * - Contact information card
 * - Call-to-action buttons
 * - Animated entrance effects
 * 
 * @returns JSX for the hero section
 */
const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#5CA424] to-[#2d4e15] text-white overflow-hidden">
      {/* Background pattern with noise texture and decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url(/noise.svg)' }}>
        {/* Decorative blur effect in top corner */}
        <div className="absolute -top-24 -right-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-white/10 blur-3xl"></div>
        {/* Thin gradient line at bottom for visual separation */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      </div>
      {/* Main content container with responsive padding */}
      <div className="relative py-8 sm:py-10 lg:py-12 px-4 sm:px-6">
        <div className="container mx-auto">
          {/* Two-column layout (stacked on mobile, side-by-side on desktop) */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-4 lg:gap-8">
            {/* Left side content - Value propositions */}
            <motion.div 
              className="w-full lg:w-2/3 text-white mt-2 lg:mt-0"
              initial={{ opacity: 0, y: 20 }}  /* Start invisible and slightly below final position */
              animate={{ opacity: 1, y: 0 }}   /* Fade in and move up to final position */
              transition={{ duration: 0.5 }}   /* Animation timing */
            >
              {/* Main heading - responsive sizing */}
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mb-3 sm:mb-4 text-black text-center lg:text-left">Reasons to Call Fairway Detailing Company</h2>
              
              {/* Value proposition bullet points list */}
              <ul className="space-y-2 mb-6 lg:mb-0 text-left">
                {/* Value point 1: Preserve Vehicle Value */}
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-black mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold text-sm sm:text-base md:text-lg text-white">No One Will Beat Our Pricing & Quality</h3>
                    <p className="text-gray-200 text-xs sm:text-sm md:text-base">
                      High quality details starting as low as $130.
                    </p>
                  </div>
                </li>
                {/* Value point 2: Time-Saving and Hassle-Free */}
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-black mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold text-sm sm:text-base md:text-lg text-white">Time-Saving and Hassle-Free</h3>
                    <p className="text-gray-200 text-xs sm:text-sm md:text-base">
                      Drop off your vehicle, or we'll pick it up—or come to you! Schedule easily via text, email, call, or online booking.
                    </p>
                  </div>
                </li>
                {/* Value point 3: One-Stop Shop */}
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-black mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold text-sm sm:text-base md:text-lg text-white">One-Stop Shop</h3>
                    <p className="text-gray-200 text-xs sm:text-sm md:text-base">
                      Services include interior/exterior detailing, ceramic coating, PPF, odor removal, pet hair removal, and more.
                    </p>
                  </div>
                </li>
                {/* Value point 4: Proven Experience */}
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-black mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold text-sm sm:text-base md:text-lg text-white">Proven Experience</h3>
                    <p className="text-gray-200 text-xs sm:text-sm md:text-base">
                      Over 10 years of hands-on experience and proven results in automotive detailing.
                    </p>
                  </div>
                </li>
                {/* Value point 5: Locally Owned and Trusted */}
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-black mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold text-sm sm:text-base md:text-lg text-white">Locally Owned and Trusted</h3>
                    <p className="text-gray-200 text-xs sm:text-sm md:text-base">
                      Family-operated in Northeast Ohio—personalized service where we treat every detail like it's for one of our own.
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
            
            {/* Right side contact card - CTA for quick conversions */}
            <motion.div
              className="w-full lg:w-1/3 max-w-sm mx-auto lg:mx-0 my-4 lg:my-0"
              initial={{ opacity: 0, y: 20 }}  /* Start invisible and below final position */
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white text-black rounded-xl shadow-lg p-3 sm:p-5">
                <h3 className="font-heading text-base sm:text-lg font-bold mb-2 text-secondary">Contact Us Today</h3>
                
                <div className="mb-3 sm:mb-4 space-y-2">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-[#5CA424]" />
                    <a href="tel:440-635-6990" className="text-[#5CA424] font-medium text-sm hover:underline transition-all">
                      440-635-6990
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-[#5CA424]" />
                    <a href="mailto:fairwaydetailingcompany@gmail.com" className="text-[#5CA424] font-medium text-sm hover:underline transition-all">
                      fairwaydetailingcompany@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Link href="/services" className="block bg-[#5CA424] hover:bg-[#4c8e1e] text-white py-1.5 rounded-full transition font-semibold text-center w-full text-xs sm:text-sm">
                    Our Services
                  </Link>
                  <Link href="/booking" className="block bg-[#5CA424] hover:bg-[#4c8e1e] text-white py-1.5 rounded-full transition font-semibold text-center w-full text-xs sm:text-sm">
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

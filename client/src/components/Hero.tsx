/**
 * Hero.tsx
 * 
 * Hero section component for the homepage featuring a video background
 * and simplified content structure.
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import heroVideo from "@assets/videos/hero_background.mov";

const Hero = () => {
  return (
    <section className="relative h-[95vh] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          className="absolute w-full h-full object-cover object-center"
          style={{ objectPosition: "center 35%" }}
          controlsList="nodownload nofullscreen noremoteplayback"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center -mt-[32px]">
        <div className="container mx-auto px-4">
            <motion.div 
            className="max-w-4xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-100 text-shadow-lg">
              Fairway Detailing Company
            </h1>
            <p className="font-heading text-xl md:text-2xl mb-8 text-gray-200">
              It's All About a Clean Drive!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-primary hover:bg-primary/90 text-white font-heading font-semibold px-8 py-4 rounded-md transition-colors text-lg"
              >
                Explore Our Services
              </Link>
              <Link
                href="/booking"
                className="bg-white hover:bg-gray-100 text-primary font-heading font-semibold px-8 py-4 rounded-md transition-colors text-lg"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

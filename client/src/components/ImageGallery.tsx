import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ResponsiveImage from './ResponsiveImage';

interface ImageGalleryProps {
  images: { src: string; alt: string }[];
  interval?: number;
  className?: string;
}

const ImageGallery = ({ images, interval = 5000, className = '' }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          <ResponsiveImage
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full h-full"
            objectFit="cover"
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Optional: Small dots indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery; 
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, Phone } from "lucide-react";

interface CeramicPackageProps {
  title: string;
  duration: string;
  description: string;
  price: string;
  features: string[];
  bestFor: string;
  isPopular?: boolean;
  index: number;
}

const CeramicPackage = ({
  title,
  duration,
  description,
  price,
  features,
  bestFor,
  isPopular = false,
  index
}: CeramicPackageProps) => {
  return (
    <motion.div 
      className={`bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 border border-white border-opacity-20 ${
        isPopular ? 'transform scale-105 hover:scale-110' : 'hover:transform hover:scale-105'
      } transition-transform relative flex flex-col h-full`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {isPopular && (
        <div className="bg-primary text-white text-xs font-bold py-1 px-3 rounded absolute -mt-3 -mr-3 right-6">
          POPULAR
        </div>
      )}
      <div>
        <h3 className="font-heading text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-green-300 mb-4">{duration}</p>
        <p className="mb-4">{description}</p>
        <p className="text-3xl font-heading font-bold mb-4">{price}<span className="text-sm font-normal">+</span></p>
        
        <div className="bg-white bg-opacity-5 p-3 rounded-md mb-4">
          <p className="text-sm font-semibold text-green-300">Best For:</p>
          <p className="text-sm">{bestFor}</p>
        </div>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <Check className="text-green-400 h-4 w-4 mt-1 mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-auto">
        <Link 
          href="/contact" 
          className="flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-heading font-semibold py-3 rounded-md text-center transition-colors"
        >
          <Phone className="w-4 h-4 mr-2" />
          <span>Contact For Booking</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default CeramicPackage;

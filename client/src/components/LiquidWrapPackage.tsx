import { Link } from "wouter";
import { motion } from "framer-motion";
import { Phone, Droplet } from "lucide-react";

interface LiquidWrapPackageProps {
  title: string;
  description: string;
  price: string;
  productType: string;
  productDetails: string;
  features: string[];
  isHighlighted?: boolean;
  index: number;
}

const LiquidWrapPackage = ({
  title,
  description,
  price,
  productType,
  productDetails,
  features,
  isHighlighted = false,
  index
}: LiquidWrapPackageProps) => {
  return (
    <motion.div 
      className="p-6 rounded-lg border border-gray-200 bg-white shadow-sm flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {isHighlighted && (
        <div className="bg-primary text-white text-xs font-bold py-1 px-3 rounded absolute -mt-9 right-6">
          MOST POPULAR
        </div>
      )}
      
      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-heading text-xl font-bold">{title}</h3>
          <p className={`font-bold ${isHighlighted ? 'text-primary' : 'text-gray-700'}`}>{price}</p>
        </div>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className={`p-3 rounded-md mb-4 ${isHighlighted ? 'bg-primary bg-opacity-5' : 'bg-gray-50'}`}>
          <div className="flex items-start mb-2">
            <Droplet className={`h-5 w-5 mt-0.5 mr-2 ${isHighlighted ? 'text-primary' : 'text-gray-500'}`} />
            <div>
              <p className="font-semibold">{productType}</p>
              <p className="text-sm text-gray-600">{productDetails}</p>
            </div>
          </div>
        </div>
        
        <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-2 text-gray-500">Features:</h4>
        <ul className="space-y-2 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <span className={`inline-block w-1.5 h-1.5 rounded-full mt-1.5 mr-2 ${isHighlighted ? 'bg-primary' : 'bg-gray-400'}`}></span>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-auto">
        <Link 
          href="/contact" 
          className={`flex items-center justify-center py-3 px-4 rounded-md font-heading font-semibold transition-colors ${
            isHighlighted 
              ? 'bg-primary text-white hover:bg-primary/90'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          <Phone className="w-4 h-4 mr-2" />
          <span>Contact For Consultation</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default LiquidWrapPackage;
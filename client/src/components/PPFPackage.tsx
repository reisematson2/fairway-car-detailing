import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Shield } from "lucide-react";

interface PPFPackageProps {
  title: string;
  description: string;
  price: string;
  filmType: string;
  filmDetails: string;
  features: string[];
  isHighlighted?: boolean;
  index: number;
}

const PPFPackage = ({
  title,
  description,
  price,
  filmType,
  filmDetails,
  features,
  isHighlighted = false,
  index
}: PPFPackageProps) => {
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
            <Shield className={`h-5 w-5 mt-0.5 mr-2 ${isHighlighted ? 'text-primary' : 'text-gray-500'}`} />
            <div>
              <p className="font-semibold">{filmType}</p>
              <p className="text-sm text-gray-600">{filmDetails}</p>
            </div>
          </div>
        </div>
        
        <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-2 text-gray-500">Coverage Areas:</h4>
        <div className="flex flex-wrap gap-2 mb-6">
          {features.map((feature, i) => (
            <span 
              key={i} 
              className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                isHighlighted 
                  ? 'bg-primary bg-opacity-10 text-primary' 
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {feature}
            </span>
          ))}
        </div>
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
          <span>{price === "Contact Us" ? "Request a Quote" : "Contact For Pricing"}</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default PPFPackage;

import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface PPFPackageProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  isHighlighted?: boolean;
  index: number;
}

const PPFPackage = ({
  title,
  description,
  price,
  features,
  isHighlighted = false,
  index
}: PPFPackageProps) => {
  return (
    <motion.div 
      className={`p-6 rounded-lg ${
        isHighlighted 
          ? 'bg-primary bg-opacity-10 border border-primary border-opacity-20' 
          : 'bg-gray-50'
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-heading text-xl font-bold">{title}</h3>
        <p className="text-primary font-bold">{price}</p>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {features.map((feature, i) => (
          <span 
            key={i} 
            className={`text-xs font-medium px-2.5 py-0.5 rounded ${
              isHighlighted 
                ? 'bg-primary bg-opacity-20 text-primary' 
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            {feature}
          </span>
        ))}
      </div>
      {price === "Contact Us" && (
        <Link 
          href="/contact" 
          className="mt-4 text-primary hover:text-primary/90 font-heading font-semibold flex items-center transition-colors"
        >
          <span>Request a Quote</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      )}
    </motion.div>
  );
};

export default PPFPackage;

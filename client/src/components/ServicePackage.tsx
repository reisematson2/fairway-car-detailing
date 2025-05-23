import { Link } from "wouter";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import ImageGallery from "./ImageGallery";

interface ServiceItem {
  title: string;
  items: string[];
}

interface ServicePackageProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  services: {
    exterior: ServiceItem;
    interior: ServiceItem;
  }
  imageSrc: string | string[];
  isActive?: boolean;
}

const ServicePackage = ({
  id,
  title,
  subtitle,
  description,
  price,
  services,
  imageSrc,
  isActive = false,
}: ServicePackageProps) => {
  // Convert imageSrc to array format for ImageGallery
  const images = Array.isArray(imageSrc)
    ? imageSrc.map(src => ({ src, alt: `${title} Detailing Package` }))
    : [{ src: imageSrc, alt: `${title} Detailing Package` }];

  return (
    <motion.div 
      id={`content-${id}`} 
      className="service-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/3">
          <ImageGallery 
            images={images}
            className="h-full w-full"
          />
        </div>
        <div className="lg:w-2/3 p-6 lg:p-8">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-heading text-2xl font-bold">{title}</h3>
            <p className="bg-gray-100 text-primary font-heading font-bold py-1 px-3 rounded">{price}</p>
          </div>
          <p className="text-gray-600 mb-6">{description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
            <div>
              <h4 className="font-heading font-bold text-lg mb-2">{services.exterior.title}</h4>
              <ul className="space-y-1.5 md:space-y-2">
                {services.exterior.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-primary h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg mb-2">{services.interior.title}</h4>
              <ul className="space-y-1.5 md:space-y-2">
                {services.interior.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-primary h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <Link href="/booking" className="inline-block bg-primary hover:bg-primary/90 text-white font-heading font-semibold px-6 py-3 rounded-md transition-colors">
            Book This Package
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicePackage;

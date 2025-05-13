import { motion } from "framer-motion";

/**
 * A simple map of Cleveland, OH showing our service area
 */
const ServiceAreaMap = () => {
  return (
    <div className="w-full max-w-3xl mx-auto mt-8 rounded-lg overflow-hidden shadow-lg">
      <div className="aspect-[16/9]">
        {/* Google Maps iframe embed centered on Cleveland */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d190578.1651879089!2d-81.76296195!3d41.47992895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1620928285118!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Cleveland Service Area Map"
          className="rounded-lg"
        ></iframe>
      </div>
      
      <div className="bg-white p-4 text-center">
        <p className="text-gray-600">Our mobile detailing services are available within approximately 45 miles of downtown Cleveland</p>
        <p className="text-gray-500 text-sm mt-1">East to Mentor • West to Avon • South to Medina and beyond</p>
      </div>
    </div>
  );
};

export default ServiceAreaMap;

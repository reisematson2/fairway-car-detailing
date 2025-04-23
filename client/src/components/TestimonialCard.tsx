import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  content: string;
  author: string;
  location: string;
  rating: number;
  index: number;
}

const TestimonialCard = ({ content, author, location, rating, index }: TestimonialCardProps) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center mb-4">
        <div className="text-yellow-400 flex">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i}
              className={`h-4 w-4 ${i < rating ? 'fill-yellow-400' : 'fill-gray-300'}`} 
            />
          ))}
        </div>
        <span className="ml-2 text-gray-600">{rating}.0</span>
      </div>
      <p className="text-gray-600 mb-4">"{content}"</p>
      <div className="flex items-center">
        <div className="font-heading font-semibold">{author}</div>
        <div className="ml-2 text-sm text-gray-500">{location}</div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;

import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  imageSrc: string;
  slug: string;
  index: number;
}

const BlogCard = ({ title, excerpt, imageSrc, slug, index }: BlogCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="font-heading font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <Link href={`/blog/${slug}`} className="text-primary hover:text-primary/90 font-heading font-semibold flex items-center transition-colors">
          <span>Read More</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;

import { motion } from "framer-motion";

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  index: number;
}

const ProcessStep = ({ number, title, description, index }: ProcessStepProps) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-heading font-bold text-xl">
        {number}
      </div>
      <h3 className="font-heading font-bold text-xl mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default ProcessStep;

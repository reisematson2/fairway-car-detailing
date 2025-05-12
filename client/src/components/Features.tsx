import { motion } from "framer-motion";
import { Car, Shield, ThumbsUp } from "lucide-react";

const Features = () => {
  const featureItems = [
    {
      icon: <Car className="text-white text-2xl" />,
      title: "Mobile Detailing",
      description: "We come to you! Our mobile service brings professional detailing directly to your location."
    },
    {
      icon: <Shield className="text-white text-2xl" />,
      title: "Paint Protection",
      description: "Protect your vehicle's finish with ceramic coatings and paint protection film."
    },
    {
      icon: <ThumbsUp className="text-white text-2xl" />,
      title: "100% Satisfaction",
      description: "We're committed to excellence with every detail and guarantee your satisfaction."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featureItems.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md text-center"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

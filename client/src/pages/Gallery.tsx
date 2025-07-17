import lexusGxWheelTireBefore from "@assets/beforeAfter_images/lexus_gx_wheel_tire_before.png";
import lexusGxWheelTireAfter from "@assets/beforeAfter_images/lexus_gx_wheel_tire_after.png";
import vwBumperBugsBefore from "@assets/beforeAfter_images/vw_bumper_bugs_before.jpg";
import vwBumperBugsAfter from "@assets/beforeAfter_images/vw_bumper_bugs_after.jpg";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import BeforeAfterImage from "@/components/BeforeAfterImage";

// Using real car detailing photos from the assets folder
import beforeImage1 from "@assets/beforeAfter_images/before1.webp";
import afterImage1 from "@assets/beforeAfter_images/after1.webp";
import beforeImage2 from "@assets/beforeAfter_images/before2.png";
import afterImage2 from "@assets/beforeAfter_images/after2.png";
import beforeImage3 from "@assets/beforeAfter_images/before3.jpg";
import afterImage3 from "@assets/beforeAfter_images/after3.jpg";
import beforeImage4 from "@assets/beforeAfter_images/before4.png";
import afterImage4 from "@assets/beforeAfter_images/after4.png";

interface TransformationItemProps {
  id: number;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  tags: string[];
}

const transformations: TransformationItemProps[] = [
  {
    id: 1,
    title: "Client Vehicle Transformation",
    description: "Real client vehicle transformed with our premium detailing service. Deep cleaning, paint correction and protective coating brought back the vehicle's showroom shine.",
    beforeImage: beforeImage1,
    afterImage: afterImage1,
    tags: ["Paint Correction", "Deep Cleaning", "Client Vehicle"]
  },
  {
    id: 2,
    title: "Interior Deep Clean",
    description: "Complete interior transformation with our Premium Refresh package, including steam cleaning and leather conditioning.",
    beforeImage: beforeImage2,
    afterImage: afterImage2,
    tags: ["Interior Detail", "Steam Cleaning", "Leather Treatment"]
  },
  {
    id: 3,
    title: "Professional Detail",
    description: "Complete exterior transformation showcasing our attention to detail and professional results.",
    beforeImage: beforeImage3,
    afterImage: afterImage3,
    tags: ["Exterior Detail", "Paint Correction", "Professional Results"]
  },
  {
    id: 4,
    title: "Premium Detail",
    description: "Another stunning transformation showing the quality of our premium detailing service.",
    beforeImage: beforeImage4,
    afterImage: afterImage4,
    tags: ["Interior Detail", "Deep Cleaning", "Professional Results"]
  },
  {
    id: 5,
    title: "VW Front Bumper Bug Removal",
    description: "Before and after results of a VW's front bumper after extensive bug removal and detailing.",
    beforeImage: vwBumperBugsBefore,
    afterImage: vwBumperBugsAfter,
    tags: ["Bug Removal", "Exterior Detail"]
  }
  ,{
    id: 6,
    title: "Wheel & Tire Deep Clean",
    description: "Before and after results of a deep clean on wheels and tires, restoring their original look.",
    beforeImage: lexusGxWheelTireBefore,
    afterImage: lexusGxWheelTireAfter,
    tags: ["Tire Cleaning", "Exterior Detailing"]
  }
];

const TransformationItem = ({ item }: { item: TransformationItemProps }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: item.id * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <BeforeAfterImage
        beforeSrc={item.beforeImage}
        afterSrc={item.afterImage}
        beforeAlt={`Before ${item.title}`}
        afterAlt={`After ${item.title}`}
        height="h-64"
      />
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold mb-2">{item.title}</h3>
        <p className="text-gray-600 mb-4">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag, index) => (
            <span key={index} className="bg-gray-100 text-gray-600 text-xs font-semibold py-1 px-2 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Gallery = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#5CA424] to-[#2d4e15] text-white overflow-hidden">
        {/* Background pattern with noise texture and decorative elements */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url(/noise.svg)' }}>
          {/* Decorative blur effect in top corner */}
          <div className="absolute -top-24 -right-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-white/10 blur-3xl"></div>
          {/* Thin gradient line at bottom for visual separation */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </div>
        <div className="relative py-24">
          <div className="container mx-auto px-4 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Work</h1>
              <p className="text-xl max-w-2xl">
                See the transformations we've achieved for our clients. Real results from our mobile detailing services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transformations Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold mb-4">Featured Projects</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Browse through our showcase of real detailing projects. Each transformation demonstrates our commitment to excellence
                and attention to detail.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {transformations.map(item => (
              <TransformationItem key={item.id} item={item} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/booking" className="bg-primary hover:bg-primary/90 text-white font-heading font-semibold px-8 py-3 rounded-md inline-flex items-center transition-colors">
              Book Your Transformation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our satisfied customers have to say about our detailing services.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="italic text-gray-600 mb-4">"I was blown away by the transformation of my car. It looks better than when I first bought it!"</p>
              <p className="font-semibold">Michael T.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="italic text-gray-600 mb-4">"The mobile service was incredibly convenient. They came to my office and did an amazing job while I worked."</p>
              <p className="font-semibold">Sarah J.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="italic text-gray-600 mb-4">"The ceramic coating they applied has made maintaining my car's finish so much easier. Worth every penny!"</p>
              <p className="font-semibold">David R.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;

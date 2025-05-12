import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

// Using real car detailing photos from the assets folder
import beforeImage1 from "@assets/images/damian-karpinski-ipUaqAswEec-unsplash.jpg";
import afterImage1 from "@assets/images/andy-ramos-XiLQ2a4fKbU-unsplash.jpg";
import beforeImage2 from "@assets/images/mohammed-shahan-xb6CKGkHdw4-unsplash.jpg";
import afterImage2 from "@assets/images/joshua-rodriguez-x6uI9XahGjA-unsplash.jpg";
import beforeImage3 from "@assets/images/iwin-EoTNE15v0qs-unsplash.jpg";
import afterImage3 from "@assets/images/leon-kohle-mxBHH7lhiCc-unsplash.jpg";
import beforeImage4 from "@assets/images/humberto-portillo-HWX4b_bB_JU-unsplash.jpg";
import afterImage4 from "@assets/images/mathias-reding--6_4GRipckk-unsplash.jpg";

interface BeforeAfterItemProps {
  id: number;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  tags: string[];
}

const transformations: BeforeAfterItemProps[] = [
  {
    id: 1,
    title: "Exterior Restoration",
    description: "This vehicle received our Showroom Detail package, bringing back its factory shine with paint correction and ceramic coating.",
    beforeImage: beforeImage1,
    afterImage: afterImage1,
    tags: ["Paint Correction", "Ceramic Coating", "Exterior Detail"]
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
    title: "Wheel & Tire Restoration",
    description: "Specialized wheel cleaning and tire dressing as part of our Essential Detail package.",
    beforeImage: beforeImage3,
    afterImage: afterImage3,
    tags: ["Wheel Cleaning", "Tire Dressing", "Detail"]
  },
  {
    id: 4,
    title: "Full Vehicle Transformation",
    description: "Complete interior and exterior detailing with our Showroom Detail package for this luxury vehicle.",
    beforeImage: beforeImage4,
    afterImage: afterImage4,
    tags: ["Complete Detail", "Paint Protection", "Interior Refresh"]
  },
];

const BeforeAfterItem = ({ item }: { item: BeforeAfterItemProps }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: item.id * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <img src={item.beforeImage} alt={`Before ${item.title}`} className="w-full h-64 object-cover" />
          <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-sm font-semibold py-1 px-3 rounded">
            Before
          </div>
        </div>
        <div className="relative">
          <img src={item.afterImage} alt={`After ${item.title}`} className="w-full h-64 object-cover" />
          <div className="absolute top-2 left-2 bg-primary bg-opacity-90 text-white text-sm font-semibold py-1 px-3 rounded">
            After
          </div>
        </div>
      </div>
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

const BeforeAfter = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-hero-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center">
          <div className="container mx-auto px-4 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Before & After Gallery</h1>
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
              <h2 className="font-heading text-3xl font-bold mb-4">Our Transformations</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Browse through our showcase of real detailing transformations. Each project demonstrates our commitment to excellence
                and attention to detail.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {transformations.map(item => (
              <BeforeAfterItem key={item.id} item={item} />
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

export default BeforeAfter;

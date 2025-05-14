import { Link } from "wouter";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TestimonialCard from "@/components/TestimonialCard";
import BlogCard from "@/components/BlogCard";
import ProcessStep from "@/components/ProcessStep";
import FAQSection from "@/components/FAQSection";
import ResponsiveImage from "@/components/ResponsiveImage";
import BeforeAfterImage from "@/components/BeforeAfterImage";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { blogPosts } from "@/data/blogPosts";
import { generalFAQs } from "@/data/faqs";
import { ArrowRight, Phone, Mail } from "lucide-react";
import detailingProcess from "@assets/images/chris-barbalis-CWGLUO6PmtA-unsplash.jpg";
import carWashing from "@assets/images/chris-hardy-qtygLvwYNYE-unsplash.jpg";
import mercedes from "@assets/images/andy-ramos-XiLQ2a4fKbU-unsplash.jpg";
import interior from "@assets/images/deniz-demirci-8kaGBtXl4do-unsplash.jpg";
// Gallery transformation images
import beforeExterior from "@assets/beforeAfter_images/IMG_0677.jpeg";
import afterExterior from "@assets/beforeAfter_images/IMG_0734.jpeg";
import beforeInterior from "@assets/images/humberto-portillo-HWX4b_bB_JU-unsplash.jpg";
import afterInterior from "@assets/images/mathias-reding--6_4GRipckk-unsplash.jpg";

const Home = () => {
  const processSteps = [
    {
      number: 1,
      title: "Assessment",
      description: "We thoroughly inspect your vehicle to identify specific needs and create a customized plan."
    },
    {
      number: 2,
      title: "Preparation",
      description: "Careful washing, decontamination, and surface preparation for the best results."
    },
    {
      number: 3,
      title: "Treatment",
      description: "Application of specialized products and treatments based on your selected service."
    },
    {
      number: 4,
      title: "Quality Check",
      description: "Final inspection and adjustments to ensure everything meets our high standards."
    }
  ];

  return (
    <>
      <Hero />
      
      {/* Our Mission Section */}
      <section id="mission" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold mb-6">Our Mission at Fairway Detailing Company</h2>
              <div className="relative mb-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-4 text-sm text-gray-500">QUALITY & CARE</span>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                "At Fairway Detailing Company, our mission is to provide top-quality detailing with care, precision, and the best products available. We're all about personalized customer service, attention to detail, and making sure every customer drives away satisfied. Whether restoring a vehicle's shine or protecting its finish, we take pride in being your trusted choice for automotive detailing."
              </p>
              <div className="flex justify-center">
                <Link href="/services" className="bg-primary hover:bg-primary/90 text-white font-heading font-semibold px-6 py-3 rounded-md transition-colors">
                  Discover Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Preview */}
      <section id="services-preview" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold mb-4">Our Detailing Services</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive detailing packages tailored to your vehicle's needs. From basic maintenance to premium treatments, our services will keep your car looking its best.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-48 overflow-hidden">
                  <ResponsiveImage 
                    src={service.imageSrc} 
                    alt={service.title} 
                    className="w-full h-full hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-heading text-xl font-bold">{service.title}</h3>
                    <p className="text-primary font-semibold">{service.price}</p>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link href="/services" className="text-primary hover:text-primary/90 font-heading font-semibold flex items-center transition-colors">
                    <span>View Details</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/services" className="inline-block bg-primary hover:bg-primary/90 text-white font-heading font-semibold px-6 py-3 rounded-md transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Ceramic Coating Preview */}
      <section className="py-16 bg-ceramic-pattern bg-cover bg-center">
        <div className="bg-black bg-opacity-75 py-16">
          <div className="container mx-auto px-4 text-white">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-3xl font-bold mb-4">Ceramic Coatings</h2>
                <p className="max-w-3xl mx-auto">
                  Protect your investment with our professional-grade ceramic coatings. These advanced treatments create a durable, transparent layer over your vehicle's paint that provides long-lasting protection and enhances your car's appearance.
                </p>
              </motion.div>
            </div>
            
            <div className="mt-8 text-center">
              <Link href="/ceramic" className="inline-block bg-primary hover:bg-primary/90 text-white font-heading font-semibold px-6 py-3 rounded-md transition-colors">
                Explore Ceramic Coatings
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold mb-4">Our Detailing Process</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We follow a meticulous process to ensure consistent, exceptional results for every vehicle we detail.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold mb-4">What Our Customers Say</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our satisfied customers have to say about their experience with Fairway Detailing.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                content={testimonial.content}
                author={testimonial.author}
                location={testimonial.location}
                rating={testimonial.rating}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Before & After Showcase */}
      <section id="work-preview" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold mb-4">Our Work</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                See the real results of our professional detailing services with these before and after comparisons.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <BeforeAfterImage 
                beforeSrc={beforeExterior}
                afterSrc={afterExterior}
                beforeAlt="Before Exterior Detail"
                afterAlt="After Exterior Detail"
                height="h-48"
              />
              <div className="p-4">
                <h3 className="font-heading text-lg font-bold">Client Vehicle Transformation</h3>
                <p className="text-gray-600 text-sm">Deep cleaning, paint correction and finish protection for this client vehicle.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <BeforeAfterImage 
                beforeSrc={beforeInterior}
                afterSrc={afterInterior}
                beforeAlt="Before Interior Detail"
                afterAlt="After Interior Detail"
                height="h-48"
              />
              <div className="p-4">
                <h3 className="font-heading text-lg font-bold">Interior Transformation</h3>
                <p className="text-gray-600 text-sm">Deep cleaning and conditioning of all interior surfaces.</p>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-12 flex justify-center space-x-4">
            <Link href="/gallery" className="inline-block bg-primary hover:bg-primary/90 text-white font-heading font-semibold px-6 py-3 rounded-md transition-colors">
              View Our Work
            </Link>
            <Link href="/booking" className="inline-block bg-secondary hover:bg-secondary/90 text-white font-heading font-semibold px-6 py-3 rounded-md transition-colors">
              Book Now
            </Link>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <FAQSection faqs={generalFAQs} />
      
      {/* Contact CTA Section */}
      <section id="contact-cta" className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-heading text-3xl font-bold mb-4">Ready to Experience Premium Detailing?</h2>
            <p className="text-xl mb-8">
              Contact us today to discuss your vehicle's needs and schedule an appointment.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white bg-opacity-10 rounded-lg p-8">
                <Phone className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-heading text-xl font-bold mb-2">Call Us</h3>
                <p className="mb-4">Speak directly with our detailing experts</p>
                <a href="tel:5551234567" className="text-primary hover:text-primary/90 font-heading font-bold text-xl">
                  (555) 123-4567
                </a>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-lg p-8">
                <Mail className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-heading text-xl font-bold mb-2">Email Us</h3>
                <p className="mb-4">Send us your questions or service requests</p>
                <a href="mailto:info@fairwaydetailing.com" className="text-primary hover:text-primary/90 font-heading font-bold">
                  info@fairwaydetailing.com
                </a>
              </div>
            </div>
            
            <div className="mt-8">
              <Link 
                href="/contact" 
                className="inline-block bg-primary hover:bg-primary/90 text-white font-heading font-semibold px-8 py-3 rounded-md transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;

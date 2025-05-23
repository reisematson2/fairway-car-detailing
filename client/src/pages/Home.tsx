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
import { ArrowRight, Phone, Mail, CheckCircle } from "lucide-react";
import detailingProcess from "@assets/images/detailing_process/detailing_process1.png";
import carWashing from "@assets/images/services/essential_detail1.png";
import mercedes from "@assets/images/services/showroom_detail1.jpg";
import interior from "@assets/images/services/premium_refresh1.png";
import mobileDetailing from "@assets/images/mobile_detailing/mobile_detailing.png";
import mobileDetailing2 from "@assets/images/mobile_detailing/mobile_detailing2.jpg";
// Gallery transformation images - using the same images as in the Gallery page
import beforeExterior from "@assets/beforeAfter_images/before1.webp";
import afterExterior from "@assets/beforeAfter_images/after1.webp";
import beforeInterior from "@assets/beforeAfter_images/before2.png";
import afterInterior from "@assets/beforeAfter_images/after2.png";
import beforeImage3 from "@assets/beforeAfter_images/before3.jpg";
import afterImage3 from "@assets/beforeAfter_images/after3.jpg";
import beforeImage4 from "@assets/beforeAfter_images/before4.png";
import afterImage4 from "@assets/beforeAfter_images/after4.png";

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
      
      {/* Reasons to Call Section */}
      <section id="reasons" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold mb-6 text-center">Reasons to Choose Fairway Detailing</h2>
              <div className="relative mb-8">
                <div className="absolute inset-0 flex items-center">
                </div>
              </div>
              
              {/* Value proposition bullet points list */}
              <ul className="space-y-8">
                {/* Value point 1: Pricing & Quality */}
                <li className="flex items-start gap-4">
                  <div className="bg-primary rounded-full p-2 mt-1 flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-2">No One Will Beat Our Pricing & Quality</h3>
                    <p className="text-gray-600 text-lg">
                      High quality details starting as low as $130. We pride ourselves on delivering exceptional value without compromising on quality.
                    </p>
                  </div>
                </li>
                
                {/* Value point 2: Convenience */}
                <li className="flex items-start gap-4">
                  <div className="bg-primary rounded-full p-2 mt-1 flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-2">Flexible Service Options</h3>
                    <p className="text-gray-600 text-lg">
                      Choose what works best for you: mobile detailing at your location, drop-off service, or we'll pick up your vehicle. Easy scheduling via text, email, call, or online booking.
                    </p>
                  </div>
                </li>
                
                {/* Value point 3: Comprehensive Services */}
                <li className="flex items-start gap-4">
                  <div className="bg-primary rounded-full p-2 mt-1 flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-2">One-Stop Shop</h3>
                    <p className="text-gray-600 text-lg">
                      From basic detailing to premium services like ceramic coating and PPF, plus specialized treatments for odor removal and pet hair—we do it all with excellence.
                    </p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 text-center">
                <Link href="/services" className="inline-block bg-primary hover:bg-primary/90 text-white font-heading font-semibold px-8 py-4 rounded-md transition-colors">
                  View Our Services
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
                    src={typeof service.imageSrc === 'string' ? service.imageSrc : (service.previewImage || service.imageSrc[0])} 
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
      
      {/* Mobile Detailing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-[500px] overflow-hidden">
                    <ResponsiveImage
                      src={mobileDetailing2}
                      alt="Mobile Detailing Service"
                      className="w-full h-full object-cover object-[center_80%] hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <h2 className="font-heading text-3xl font-bold mb-6">Mobile Detailing Service</h2>
                <div className="relative mb-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-start">
                    <span className="bg-gray-50 pr-4 text-sm text-gray-500">CONVENIENCE AT YOUR DOORSTEP</span>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  At Fairway Detailing Company, we bring the shine and cleanliness directly to your doorstep. Our expert team is dedicated to providing top-notch detailing services that transform your vehicle, making it look and feel brand new. Whether you need a thorough interior cleaning, exterior polishing, or both, we've got you covered.
                </p>
                <Link 
                  href="/contact" 
                  className="bg-primary hover:bg-primary/90 text-white font-heading font-semibold px-6 py-4 rounded-md transition-colors inline-flex items-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  <span>Book Mobile Service</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
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
                <p className="text-gray-600 text-sm">Real client vehicle transformed with our premium detailing service. Deep cleaning, paint correction and protective coating.</p>
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
                <h3 className="font-heading text-lg font-bold">Interior Deep Clean</h3>
                <p className="text-gray-600 text-sm">Complete interior transformation with our Premium Refresh package, including steam cleaning and leather conditioning.</p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <BeforeAfterImage 
                beforeSrc={beforeImage3}
                afterSrc={afterImage3}
                beforeAlt="Before Professional Detail"
                afterAlt="After Professional Detail"
                height="h-48"
              />
              <div className="p-4">
                <h3 className="font-heading text-lg font-bold">Professional Detail</h3>
                <p className="text-gray-600 text-sm">Complete exterior transformation showcasing our attention to detail and professional results.</p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <BeforeAfterImage 
                beforeSrc={beforeImage4}
                afterSrc={afterImage4}
                beforeAlt="Before Premium Detail"
                afterAlt="After Premium Detail"
                height="h-48"
              />
              <div className="p-4">
                <h3 className="font-heading text-lg font-bold">Premium Detail</h3>
                <p className="text-gray-600 text-sm">Another stunning transformation showing the quality of our premium detailing service.</p>
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
                <a href="tel:440-635-6990" className="text-primary hover:text-primary/90 font-heading font-bold text-xl">
                  440-635-6990
                </a>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-lg p-8">
                <Mail className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-heading text-xl font-bold mb-2">Email Us</h3>
                <p className="mb-4">Send us your questions or service requests</p>
                <a href="mailto:fairwaydetailingcompany@gmail.com" className="text-primary hover:text-primary/90 font-heading font-bold">
                  fairwaydetailingcompany@gmail.com
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

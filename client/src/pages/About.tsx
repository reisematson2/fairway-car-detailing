import { motion } from "framer-motion";
import { Link } from "wouter";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import detailingImage from "@assets/images/detailing_process/detailing_process1.png";
import jarettPortrait from "@assets/images/bio/jarett_portrait.jpg";

const About = () => {
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const childVariants = {
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
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">About Fairway Detailing</h1>
              <p className="text-xl max-w-2xl">Delivering premium auto detailing services with attention to detail and customer satisfaction since 2015.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Fairway Detailing was founded in 2015 with a simple mission: to provide exceptional automotive care that goes beyond the standard car wash. As car enthusiasts ourselves, we understand the connection people have with their vehicles and the importance of keeping them in pristine condition.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small mobile detailing service has grown into one of Ohio's premier mobile detailing companies. Our growth has been driven by word-of-mouth from satisfied customers who appreciate our convenience, attention to detail, and commitment to quality.
              </p>
              <p className="text-gray-600 mb-4">
                Today, we offer a comprehensive range of mobile services, from essential maintenance details to premium paint correction, ceramic coatings, and paint protection film. We come to you with all the necessary equipment to deliver professional-quality results right at your location.
              </p>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center">
                <img 
                  src={jarettPortrait}
                  alt="Jarett, Founder of Fairway Detailing" 
                  className="rounded-lg shadow-lg w-full max-w-[400px] h-auto object-cover aspect-[4/5]"
                />
                <div className="mt-4 text-center">
                  <p className="font-heading font-bold text-lg text-gray-900">Jarett Smetana</p>
                  <p className="text-primary font-medium">Owner/Lead Detailer</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At Fairway Detailing, our work is guided by a set of core values that define who we are and how we approach every vehicle we service.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md text-center"
              variants={childVariants}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">Excellence</h3>
              <p className="text-gray-600">We strive for excellence in every detail, from the products we use to the techniques we employ.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md text-center"
              variants={childVariants}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">Integrity</h3>
              <p className="text-gray-600">We operate with honesty and transparency, providing honest assessments and fair pricing for our services.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md text-center"
              variants={childVariants}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">Innovation</h3>
              <p className="text-gray-600">We continuously explore new products, techniques, and technologies to offer the best solutions for your vehicle.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl font-bold mb-4">Visit Our Shop</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our Cleveland facility is equipped with state-of-the-art tools and technology to provide the best care for your vehicle.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-stretch gap-8 max-w-6xl mx-auto min-h-[600px]">
            <motion.div 
              className="flex-1 md:w-1/3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col">
                <h3 className="font-heading text-xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-4 flex-grow">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                      <MapPin className="text-primary" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold">Address</p>
                      <p className="text-gray-600">13857 Hall Rd.</p>
                      <p className="text-gray-600">Chardon, OH 44024</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                      <Phone className="text-primary" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold">Phone</p>
                      <p className="text-gray-600">440-635-6990</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                      <Mail className="text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-heading font-semibold">Email</p>
                      <p className="text-gray-600 break-words">fairwaydetailingcompany@gmail.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-heading font-semibold mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-primary hover:bg-primary/90 text-white p-2 rounded-full transition-colors">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="bg-primary hover:bg-primary/90 text-white p-2 rounded-full transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="bg-primary hover:bg-primary/90 text-white p-2 rounded-full transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="mt-8">
                  <Link href="/contact" className="bg-primary hover:bg-primary/90 text-white font-heading font-semibold px-5 py-2 rounded-md flex items-center justify-center transition-colors">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="flex-1 md:w-2/3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2986.0647814453584!2d-81.19724562342565!3d41.55736828719883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8831076414e0c5b1%3A0x1d0c5bc4c15bc307!2s13857%20Hall%20Rd%2C%20Chardon%2C%20OH%2044024!5e0!3m2!1sen!2sus!4v1709764005034!5m2!1sen!2sus"
                  className="w-full h-full min-h-[600px]"
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Fairway Detailing Location"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl font-bold mb-4">Ready to Experience Premium Detailing?</h2>
            <p className="max-w-3xl mx-auto mb-8">
              Book an appointment today and see why our customers trust us with their vehicles.
            </p>
            <Link href="/booking" className="inline-block bg-white text-primary hover:bg-gray-100 font-heading font-semibold px-8 py-3 rounded-md transition-colors">
              Book Your Service
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;

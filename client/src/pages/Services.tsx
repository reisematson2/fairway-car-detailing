import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { services, addons } from "@/data/services";
import ServicePackage from "@/components/ServicePackage";
import { ArrowRight } from "lucide-react";
import carWashing from "@assets/images/alexander-zaytsev-b1cUCFU-tFA-unsplash.jpg";
import paintCorrection from "@assets/images/andy-ramos-XiLQ2a4fKbU-unsplash.jpg";
import interiorCleaning from "@assets/images/chris-barbalis-CWGLUO6PmtA-unsplash.jpg";
import finalResult from "@assets/images/chris-hardy-qtygLvwYNYE-unsplash.jpg";

const Services = () => {
  const [activeTab, setActiveTab] = useState("standard");
  
  const handleTabClick = (id: string) => {
    setActiveTab(id);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-hero-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center">
          <div className="container mx-auto px-4 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Detailing Services</h1>
              <p className="text-xl max-w-2xl">Professional detailing packages tailored to your vehicle's needs, from quick maintenance to showroom-quality restoration.</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold mb-4">Detailing Service Menu</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive detailing packages tailored to your vehicle's needs. From basic maintenance to premium treatments, our services will keep your car looking its best.
              </p>
            </motion.div>
          </div>
          
          {/* Service Tabs */}
          <div className="max-w-5xl mx-auto">
            <div className="mb-6 flex flex-wrap justify-center">
              {services.map((service) => (
                <button
                  key={service.id}
                  id={`tab-${service.id}`}
                  className={`service-tab ${activeTab === service.id ? 'active' : ''} font-heading font-semibold px-5 py-2 rounded-md mx-2 mb-2 transition-colors`}
                  onClick={() => handleTabClick(service.id)}
                >
                  {service.title}
                </button>
              ))}
              <button
                id="tab-addon"
                className={`service-tab ${activeTab === 'addon' ? 'active' : ''} font-heading font-semibold px-5 py-2 rounded-md mx-2 mb-2 transition-colors`}
                onClick={() => handleTabClick('addon')}
              >
                Add-ons
              </button>
            </div>
            
            {/* Tab Content */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <AnimatePresence mode="wait">
                {services.map((service) => (
                  <ServicePackage
                    key={service.id}
                    id={service.id}
                    title={service.title}
                    subtitle={service.subtitle}
                    description={service.description}
                    price={service.price}
                    services={service.services}
                    imageSrc={service.imageSrc}
                    isActive={activeTab === service.id}
                  />
                ))}
                
                {/* Add-ons */}
                {activeTab === 'addon' && (
                  <motion.div 
                    id="content-addon" 
                    className="service-content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-8">
                      <h3 className="font-heading text-2xl font-bold mb-6">Add-on Services</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {addons.map((addon, index) => (
                          <div key={index} className="bg-gray-50 p-6 rounded-lg">
                            <div className="flex justify-between items-center mb-3">
                              <h4 className="font-heading font-bold text-lg">{addon.title}</h4>
                              <p className="text-primary font-bold">{addon.price}</p>
                            </div>
                            <p className="text-gray-600">{addon.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 md:pr-12 mb-8 md:mb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold mb-4">Our Detailing Process</h2>
              <p className="text-gray-600 mb-6">
                At Fairway Detailing, we follow a meticulous process for every vehicle we service to ensure consistent, exceptional results. Our approach is thorough and systematic:
              </p>
              
              <ol className="space-y-4">
                <li className="flex">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                  <div>
                    <h3 className="font-heading font-bold text-lg">Initial Assessment</h3>
                    <p className="text-gray-600">We thoroughly inspect your vehicle to identify specific needs and create a customized plan.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                  <div>
                    <h3 className="font-heading font-bold text-lg">Surface Preparation</h3>
                    <p className="text-gray-600">Professional washing, decontamination, and clay treatment to create a clean canvas.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                  <div>
                    <h3 className="font-heading font-bold text-lg">Correction & Treatment</h3>
                    <p className="text-gray-600">Paint correction, polishing, and application of protective treatments as specified.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                  <div>
                    <h3 className="font-heading font-bold text-lg">Interior Restoration</h3>
                    <p className="text-gray-600">Deep cleaning, conditioning, and protection of all interior surfaces.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">5</span>
                  <div>
                    <h3 className="font-heading font-bold text-lg">Final Inspection</h3>
                    <p className="text-gray-600">Comprehensive quality check to ensure every detail meets our high standards.</p>
                  </div>
                </li>
              </ol>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-4">
                <img src={carWashing} alt="Car Washing" className="rounded-lg h-48 w-full object-cover" />
                <img src={paintCorrection} alt="Paint Correction" className="rounded-lg h-48 w-full object-cover" />
                <img src={interiorCleaning} alt="Interior Cleaning" className="rounded-lg h-48 w-full object-cover" />
                <img src={finalResult} alt="Final Result" className="rounded-lg h-48 w-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Premium Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold mb-4">Premium Protection Services</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                In addition to our detailing packages, we offer specialized protection services to preserve your vehicle's finish and value.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="h-56 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Ceramic Coating" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl font-bold mb-2">Ceramic Coatings</h3>
                <p className="text-gray-600 mb-4">
                  Professional-grade ceramic coatings that provide long-lasting protection against environmental damage, enhance gloss, and make maintenance easier.
                </p>
                <Link href="/ceramic" className="text-primary hover:text-primary/90 font-heading font-semibold flex items-center transition-colors">
                  <span>Explore Ceramic Coatings</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="h-56 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1611821658059-b17c7d097454?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Paint Protection Film" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl font-bold mb-2">Paint Protection Film</h3>
                <p className="text-gray-600 mb-4">
                  Premium XPEL films that provide the ultimate defense against rock chips, scratches, and road debris while preserving your car's finish.
                </p>
                <Link href="/ppf" className="text-primary hover:text-primary/90 font-heading font-semibold flex items-center transition-colors">
                  <span>Explore PPF Options</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
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
            <h2 className="font-heading text-3xl font-bold mb-4">Ready to Book Your Service?</h2>
            <p className="max-w-3xl mx-auto mb-8">
              Schedule an appointment today and let our team of professionals take care of your vehicle.
            </p>
            <Link href="/booking" className="inline-block bg-white text-primary hover:bg-gray-100 font-heading font-semibold px-8 py-3 rounded-md transition-colors">
              Book Your Appointment
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;

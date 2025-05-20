import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { services, addons } from "@/data/services";
import ServicePackage from "@/components/ServicePackage";
import { ArrowRight } from "lucide-react";
import detailingProcess1 from "@assets/images/detailing_process/detailing_process1.png";
import detailingProcess2 from "@assets/images/detailing_process/detailing_process2.png";
import detailingProcess3 from "@assets/images/detailing_process/detailing_process3.png";
import detailingProcess4 from "@assets/images/detailing_process/detailing_process4.png";
import motorcycle from "@assets/images/motorcycle/motorcycle1.jpg";
import trailer1 from "@assets/images/fleet_trailers/fleet_trailers1.png";
import trailer2 from "@assets/images/fleet_trailers/fleet_trailer2.png";
import ceramicCoating from "@assets/images/services/ceramic_coating1.jpg";
import ppf from "@assets/images/services/ppf1.png";
import carWashing from "@assets/images/chris-barbalis-CWGLUO6PmtA-unsplash.jpg";
import paintCorrection from "@assets/images/chris-hardy-qtygLvwYNYE-unsplash.jpg";
import interiorCleaning from "@assets/images/andy-ramos-XiLQ2a4fKbU-unsplash.jpg";
import finalResult from "@assets/images/deniz-demirci-8kaGBtXl4do-unsplash.jpg";

const Services = () => {
  const [activeTab, setActiveTab] = useState(services[0].id);
  
  const handleTabClick = (id: string) => {
    setActiveTab(id);
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
          <div className="max-w-6xl mx-auto">
            <div className="mb-6 flex flex-wrap justify-center relative z-10">
              {services.map((service) => (
                <button
                  key={service.id}
                  id={`tab-${service.id}`}
                  className={`service-tab ${activeTab === service.id ? 'active' : ''} font-heading font-semibold px-5 py-2 rounded-md mx-2 mb-2 transition-colors hover:bg-primary/10 ${activeTab === service.id ? 'bg-primary text-white' : 'bg-white'}`}
                  onClick={() => handleTabClick(service.id)}
                >
                  {service.title}
                </button>
              ))}
              <button
                id="tab-addon"
                className={`service-tab ${activeTab === 'addon' ? 'active' : ''} font-heading font-semibold px-5 py-2 rounded-md mx-2 mb-2 transition-colors hover:bg-primary/10 ${activeTab === 'addon' ? 'bg-primary text-white' : 'bg-white'}`}
                onClick={() => handleTabClick('addon')}
              >
                Add-ons
              </button>
            </div>
            
            {/* Tab Content */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden relative z-10">
              <AnimatePresence mode="wait">
                {services.map((service) => (
                  activeTab === service.id && (
                    <motion.div 
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ServicePackage
                        id={service.id}
                        title={service.title}
                        subtitle={service.subtitle}
                        description={service.description}
                        price={service.price}
                        services={service.services}
                        imageSrc={service.imageSrc}
                        isActive={true}
                      />
                    </motion.div>
                  )
                ))}
                
                {/* Add-ons */}
                {activeTab === 'addon' && (
                  <motion.div 
                    key="addon"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
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
      <section className="py-16 bg-gray-50">
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
              
              <ol className="space-y-6">
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
                <img src={detailingProcess1} alt="Initial Assessment" className="rounded-lg h-48 w-full object-cover" />
                <img src={detailingProcess2} alt="Surface Preparation" className="rounded-lg h-48 w-full object-cover" />
                <img src={detailingProcess3} alt="Correction & Treatment" className="rounded-lg h-48 w-full object-cover" />
                <img src={detailingProcess4} alt="Final Inspection" className="rounded-lg h-48 w-full object-cover" />
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
                <img src={ceramicCoating} alt="Ceramic Coating" className="w-full h-full object-cover" />
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
                <img src={ppf} alt="Paint Protection Film" className="w-full h-full object-cover" />
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
      
      {/* Motorcycle & Trailer Detailing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold mb-4">Beyond Cars: Specialized Detailing Services</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our premium detailing services extend beyond cars. We provide specialized care for motorcycles, fleet vehicles, and trailers with the same attention to detail and quality results.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Motorcycle Detailing */}
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="h-56 overflow-hidden">
                <img src={motorcycle} alt="Motorcycle Detailing" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex-1">
                  <h3 className="font-heading text-2xl font-bold mb-3">Motorcycle Detailing</h3>
                  <p className="text-gray-600 mb-4">
                    Our specialized motorcycle detailing service keeps your bike looking showroom fresh. We understand the unique challenges of detailing motorcycles and use techniques specifically developed for them.
                  </p>
                  <ul className="text-gray-600 mb-6 space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Chrome polishing and restoration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Engine cleaning and degreasing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Paint protection and ceramic coating</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Leather seat cleaning and conditioning</span>
                    </li>
                  </ul>
                </div>
                <Link href="/contact" className="text-primary hover:text-primary/90 font-heading font-semibold flex items-center transition-colors mt-auto">
                  <span>Contact For Quote</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
            
            {/* Fleet Detailing */}
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="h-56 overflow-hidden">
                <img src={trailer1} alt="Fleet Vehicle Detailing" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex-1">
                  <h3 className="font-heading text-2xl font-bold mb-3">Fleet Detailing</h3>
                  <p className="text-gray-600 mb-4">
                    Keep your fleet vehicles looking professional and representing your brand with pride. Our fleet detailing services are designed for businesses of all sizes.
                  </p>
                  <ul className="text-gray-600 mb-6 space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Regular maintenance programs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Commercial vehicle expertise</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Flexible scheduling options</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Volume pricing available</span>
                    </li>
                  </ul>
                </div>
                <Link href="/contact" className="text-primary hover:text-primary/90 font-heading font-semibold flex items-center transition-colors mt-auto">
                  <span>Contact For Quote</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            {/* Trailer Detailing */}
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="h-56 overflow-hidden">
                <img src={trailer2} alt="Trailer Detailing" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex-1">
                  <h3 className="font-heading text-2xl font-bold mb-3">Trailer Detailing</h3>
                  <p className="text-gray-600 mb-4">
                    Whether it's a utility trailer, boat trailer, or food trailer, our specialized detailing services will protect your investment and maintain its appearance.
                  </p>
                  <ul className="text-gray-600 mb-6 space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Exterior washing and polish</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Rust prevention treatments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Undercarriage cleaning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Surface protection and sealing</span>
                    </li>
                  </ul>
                </div>
                <Link href="/contact" className="text-primary hover:text-primary/90 font-heading font-semibold flex items-center transition-colors mt-auto">
                  <span>Contact For Quote</span>
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

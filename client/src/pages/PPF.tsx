import { motion } from "framer-motion";
import { Link } from "wouter";
import { ppfPackages } from "@/data/ppfPackages";
import PPFPackage from "@/components/PPFPackage";
import { ArrowRight, Check } from "lucide-react";
import ppfImage1 from "@assets/images/chris-barbalis-CWGLUO6PmtA-unsplash.jpg";
import ppfImage2 from "@assets/images/chris-hardy-qtygLvwYNYE-unsplash.jpg";
import ppfImage3 from "@assets/images/andy-ramos-XiLQ2a4fKbU-unsplash.jpg";
import matteBlackMercedes from "@assets/images/services/ppf1.png";
import matteBlackRivian from "@assets/images/services/xpel_stealth.webp";
import matteBlackTesla from "@assets/images/services/xpel_ultimate2.webp";
import ppfInstallation from "@assets/images/services/xpel_ultimate.webp";
import ppfInstallation2 from "@assets/images/services/ppf_process2.webp";
import xpel from "@assets/images/services/xpel.webp";

const PPF = () => {
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
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Paint Protection Film</h1>
              <p className="text-xl max-w-2xl">
                Protect your vehicle's finish with industry-leading XPEL PPF, offering superior protection against rock chips, scratches, and environmental damage.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction */}
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
              <h2 className="font-heading text-3xl font-bold mb-6">Ultimate Paint Protection</h2>
              <p className="text-gray-600 mb-4">
                XPEL's Paint Protection Film is a clear, thermoplastic urethane film that protects your vehicle's paint from rock chips, bug damage, road debris, and minor abrasions. This virtually invisible film maintains your car's appearance while providing peace of mind.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you're looking to protect high-impact areas or want complete vehicle coverage, our certified installers ensure precise fitment and optimal protection for your specific needs.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Check className="text-primary mr-2" />
                  <span className="text-gray-600">Self-healing technology</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-primary mr-2" />
                  <span className="text-gray-600">10-year warranty</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-primary mr-2" />
                  <span className="text-gray-600">Preserves resale value</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-primary mr-2" />
                  <span className="text-gray-600">Professional installation</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img 
                  src={matteBlackMercedes} 
                  alt="Matte Black Mercedes with PPF Protection" 
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg flex items-end">
                  <div className="p-6 text-white">
                    <p className="font-heading font-semibold">Featured: Matte Black Mercedes</p>
                    <p className="text-sm opacity-90">Protected with XPEL Stealth PPF</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl font-bold mb-4">Benefits of Paint Protection Film</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover why Paint Protection Film is the gold standard for defending your vehicle against physical damage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">Impact Protection</h3>
              <p className="text-gray-600">
                Shields your paint from rock chips, road debris, and minor impacts that would otherwise cause permanent damage to your finish.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">Self-Healing</h3>
              <p className="text-gray-600">
                XPEL films feature advanced self-healing technology that allows minor scratches to disappear with heat from the sun or engine.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">Virtually Invisible</h3>
              <p className="text-gray-600">
                Premium XPEL film is optically clear and won't alter the appearance of your vehicle, preserving its original look.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">Stain Resistant</h3>
              <p className="text-gray-600">
                Resists staining and yellowing from environmental contaminants, maintaining clarity and appearance for years.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">Long-Lasting</h3>
              <p className="text-gray-600">
                Provides protection for 5-10 years, making it a long-term investment in your vehicle's appearance and value.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">Preserves Value</h3>
              <p className="text-gray-600">
                Maintains your vehicle's pristine appearance, helping to preserve its resale value by preventing common paint damage.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Film Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl font-bold mb-4">Our Film Options</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer premium XPEL films to meet different aesthetic preferences and protection needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative h-56">
                <img 
                  src={ppfInstallation}
                  alt="XPEL Ultimate Plus Film Installation" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                  <div className="absolute bottom-0 left-0 p-4">
                    <p className="text-white text-sm font-medium">XPEL Ultimate Plus Black PPF</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl font-bold mb-2">XPEL Ultimate Plus</h3>
                <p className="text-gray-600 mb-4">
                  Our most popular film option, XPEL Ultimate Plus offers virtually invisible protection with superior clarity and durability. This film features:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="text-primary h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Industry-leading optical clarity</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Advanced self-healing technology</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Stain resistance against environmental contaminants</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                    <span>10-year warranty against yellowing, cracking, or peeling</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative h-56">
                <img 
                  src={matteBlackRivian}
                  alt="Matte Black Rivian with XPEL Stealth" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                  <div className="absolute bottom-0 left-0 p-4">
                    <p className="text-white text-sm font-medium">Featured: Matte Black Rivian R1T</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl font-bold mb-2">XPEL Stealth</h3>
                <p className="text-gray-600 mb-4">
                  For those seeking a unique satin finish, XPEL Stealth transforms glossy paint into a sleek satin appearance while providing the same protection as Ultimate Plus:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="text-primary h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Uniform satin finish that matches factory matte paint</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Preserves matte/satin finishes while adding protection</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Can transform glossy paint to a satin appearance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Same self-healing and protection properties as Ultimate Plus</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PPF Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl font-bold mb-4">Paint Protection Film Packages</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer a range of coverage options to suit your needs and budget, from focused protection for high-impact areas to complete vehicle coverage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div 
              className="relative rounded-lg overflow-hidden h-96 md:h-auto"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img 
                src={xpel} 
                alt="XPEL Paint Protection Film" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 p-4">
                  <p className="text-white text-sm font-medium">XPEL Paint Protection Film</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {ppfPackages.map((pkg, index) => (
                  <PPFPackage
                    key={index}
                    title={pkg.title}
                    description={pkg.description}
                    price={pkg.price}
                    filmType={pkg.filmType}
                    filmDetails={pkg.filmDetails}
                    features={pkg.features}
                    isHighlighted={pkg.isHighlighted}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Add-On Coverage Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl font-bold mb-4">Add-On Coverage Options</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Customize your protection with these additional coverage options to suit your specific needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading font-bold text-xl mb-2">Headlights / Taillights</h3>
              <p className="text-gray-600 mb-4">Protect your lighting elements from UV damage and yellowing.</p>
              <p className="text-primary font-bold">From $199</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading font-bold text-xl mb-2">Door Edge Guards</h3>
              <p className="text-gray-600 mb-4">Protect vulnerable door edges from chips and scratches.</p>
              <p className="text-primary font-bold">$149</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading font-bold text-xl mb-2">Luggage Area Strip</h3>
              <p className="text-gray-600 mb-4">Protect your trunk/rear cargo area from scratches and wear.</p>
              <p className="text-primary font-bold">$99</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading font-bold text-xl mb-2">Roof & Pillars</h3>
              <p className="text-gray-600 mb-4">Complete protection for your vehicle's roof and pillars.</p>
              <p className="text-primary font-bold">From $599</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading font-bold text-xl mb-2">Carbon Fiber Accents</h3>
              <p className="text-gray-600 mb-4">Custom PPF protection for carbon fiber elements.</p>
              <p className="text-primary font-bold">Custom Pricing</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose XPEL PPF */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl font-bold mb-4">Why Choose XPEL PPF?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of industry-leading paint protection film technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading font-bold text-lg mb-2">Self-healing Technology</h3>
              <p className="text-gray-600">Minor scratches and swirls disappear with heat from the sun or engine.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading font-bold text-lg mb-2">Stain & Discoloration Resistant</h3>
              <p className="text-gray-600">Protection against environmental contaminants and UV damage.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading font-bold text-lg mb-2">10-Year Warranty</h3>
              <p className="text-gray-600">Industry-leading warranty coverage for peace of mind.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading font-bold text-lg mb-2">Expert Installation</h3>
              <p className="text-gray-600">Professional installation by certified technicians for perfect results.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl font-bold mb-4">Our Installation Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Professional PPF installation is a precise, multi-step process that requires extensive training and expertise. Here's how we ensure perfect results every time:
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <ol className="space-y-6">
                  <li className="flex">
                    <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                    <div>
                      <h3 className="font-heading font-bold text-lg">Surface Preparation</h3>
                      <p className="text-gray-600">Thorough washing, clay bar treatment, and surface decontamination to ensure a clean, contaminant-free surface for film adhesion.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                    <div>
                      <h3 className="font-heading font-bold text-lg">Custom Pattern Cutting</h3>
                      <p className="text-gray-600">XPEL's proprietary Design Access Program (DAP) allows us to cut film patterns precisely tailored to your vehicle's exact make, model, and year.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                    <div>
                      <h3 className="font-heading font-bold text-lg">Expert Application</h3>
                      <p className="text-gray-600">Our certified installers meticulously apply the film using special techniques to ensure perfect alignment, smooth edges, and optimal adhesion.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                    <div>
                      <h3 className="font-heading font-bold text-lg">Heat Forming</h3>
                      <p className="text-gray-600">We use precise heat forming to stretch and conform the film perfectly to complex curves and contours, ensuring seamless coverage.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">5</span>
                    <div>
                      <h3 className="font-heading font-bold text-lg">Quality Inspection</h3>
                      <p className="text-gray-600">Each installation undergoes rigorous inspection to ensure perfect alignment, adhesion, and finish with no bubbles, lifting edges, or imperfections.</p>
                    </div>
                  </li>
                </ol>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 gap-4">
                  <div className="relative">
                    <img 
                      src={ppfInstallation} 
                      alt="PPF Installation Process" 
                      className="rounded-lg shadow-md w-full h-[300px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg flex items-end">
                      <div className="p-6 text-white">
                        <p className="font-heading font-semibold">Professional PPF Installation</p>
                        <p className="text-sm opacity-90">Precise application by certified technicians</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src={ppfInstallation2} 
                      alt="PPF Installation Process Detail" 
                      className="rounded-lg shadow-md w-full h-[300px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg flex items-end">
                      <div className="p-6 text-white">
                        <p className="font-heading font-semibold">Detailed Application Process</p>
                        <p className="text-sm opacity-90">Meticulous attention to every detail</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl font-bold mb-4">Caring for Your Paint Protection Film</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              With proper care, your PPF investment will continue to protect and look great for many years. Here are some essential maintenance tips:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">Wait Period</h3>
              <p className="text-gray-600">
                Wait at least 7 days after installation before washing your vehicle to allow the film and adhesive to fully cure.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">Gentle Washing</h3>
              <p className="text-gray-600">
                Use pH-neutral car wash soap and avoid harsh chemicals, abrasive cleaners, or petroleum-based products that can damage the film.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">Self-Healing</h3>
              <p className="text-gray-600">
                Minor scratches will self-heal with heat. Park in direct sunlight or use a hairdryer on low heat to accelerate the healing process.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">Annual Inspection</h3>
              <p className="text-gray-600">
                Schedule an annual inspection with us to check the condition of your film and address any maintenance needs to ensure long-term performance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about paint protection film installation and maintenance.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading font-bold text-xl mb-2">How long does PPF installation take?</h3>
                <p className="text-gray-600">
                  Installation time varies depending on the coverage area. Partial front packages typically take 1-2 days, while full vehicle wraps may require 3-5 days to ensure perfect application.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading font-bold text-xl mb-2">Can PPF be removed without damaging the paint?</h3>
                <p className="text-gray-600">
                  Yes, XPEL films are designed to be safely removed without damaging factory paint when professionally removed. The adhesive is engineered to maintain strong bonding while allowing for clean removal.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading font-bold text-xl mb-2">How does PPF compare to ceramic coatings?</h3>
                <p className="text-gray-600">
                  While ceramic coatings provide chemical protection and enhance gloss, they don't offer physical protection against rock chips and impacts. PPF provides physical barrier protection against road debris. Many clients choose to combine both—applying ceramic coating over PPF for maximum protection.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading font-bold text-xl mb-2">Will the film discolor or yellow over time?</h3>
                <p className="text-gray-600">
                  XPEL films are designed with UV inhibitors and special top coats that prevent yellowing and discoloration. The film is backed by a 10-year warranty against yellowing, discoloration, peeling, cracking, and hazing.
                </p>
              </motion.div>
            </div>
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
            <h2 className="font-heading text-3xl font-bold mb-4">Ready to Protect Your Investment?</h2>
            <p className="max-w-3xl mx-auto mb-8">
              Contact us today to schedule a consultation and get a custom quote for your vehicle's paint protection film installation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/booking" className="inline-block bg-white text-primary hover:bg-gray-100 font-heading font-semibold px-8 py-3 rounded-md transition-colors">
                Book a Consultation
              </Link>
              <Link href="/contact" className="inline-block bg-transparent border-2 border-white text-white hover:bg-white/10 font-heading font-semibold px-8 py-3 rounded-md transition-colors">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PPF;

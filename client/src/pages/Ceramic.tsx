import { motion } from "framer-motion";
import { Link } from "wouter";
import CeramicPackage from "@/components/CeramicPackage";
import { ceramicPackages, ceramicAddons } from "@/data/ceramicPackages";
import { ArrowRight } from "lucide-react";

const Ceramic = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-ceramic-pattern bg-cover bg-center">
        <div className="bg-black bg-opacity-75">
          <div className="container mx-auto px-4 text-white py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Ceramic Coatings</h1>
              <p className="text-xl max-w-2xl">
                Advanced protection that enhances your vehicle's appearance and preserves its value with industry-leading technology.
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
              <h2 className="font-heading text-3xl font-bold mb-6">What Are Ceramic Coatings?</h2>
              <p className="text-gray-600 mb-4">
                Ceramic coatings are widely regarded as one of the best ways to protect your car and preserve your investment. These coatings form a durable, transparent layer over your vehicle's paint that provides long-lasting protection against environmental damage such as UV rays, bird droppings, tree sap, road salts, and chemical contaminants. Unlike traditional waxes or sealants that wear off quickly, ceramic coatings bond with the paint and can last for years with proper care.
              </p>
              <p className="text-gray-600 mb-4">
                The coating also enhances the car's appearance by creating a deep, glossy finish that resists fading and oxidation. Its hydrophobic properties make water, dirt, and grime slide off more easily, reducing the need for frequent washes and making maintenance easier overall.
              </p>
              <p className="text-gray-600">
                By protecting your car's exterior and keeping it looking like new, ceramic coatings help maintain resale value, making them a smart investment for anyone serious about preserving their vehicle's appearance and longevity.
              </p>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img 
                src="/images/iwin-EoTNE15v0qs-unsplash.jpg" 
                alt="Ceramic Coating Application" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
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
            <h2 className="font-heading text-3xl font-bold mb-4">Benefits of Ceramic Coatings</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover why professional ceramic coatings are the preferred choice for long-term protection and appearance enhancement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-xl mb-2 text-center">Superior Protection</h3>
              <p className="text-gray-600">
                Safeguards against UV rays, oxidation, chemical stains, bird droppings, and environmental contaminants that damage paint.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-xl mb-2 text-center">Enhanced Appearance</h3>
              <p className="text-gray-600">
                Creates a deep, wet-look gloss that enhances your vehicle's color and depth, with a finish that lasts years rather than weeks.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-xl mb-2 text-center">Easier Maintenance</h3>
              <p className="text-gray-600">
                Hydrophobic surface repels water, dirt, and contaminants, making your vehicle easier to clean and requiring less frequent washing.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-8">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-xl mb-2 text-center">Cost-Effective</h3>
              <p className="text-gray-600">
                Although initially more expensive than waxes or sealants, the long-term durability (2-7 years) makes ceramic coatings more economical over time, while also helping maintain resale value.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-xl mb-2 text-center">Chemical Resistance</h3>
              <p className="text-gray-600">
                Provides exceptional resistance to chemical stains and etching, protecting against harsh detergents, acidic contaminants, and environmental fallout that can permanently damage paint.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Ceramic Packages */}
      <section className="bg-ceramic-pattern bg-cover bg-center">
        <div className="bg-black bg-opacity-75 py-16">
          <div className="container mx-auto px-4 text-white">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-3xl font-bold mb-4">Ceramic Coating Menu</h2>
                <p className="max-w-3xl mx-auto">
                  Powered by Gtechniq – Professional-Grade Paint Protection
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {ceramicPackages.map((pkg, index) => (
                <CeramicPackage
                  key={index}
                  title={pkg.title}
                  duration={pkg.duration}
                  description={pkg.description}
                  price={pkg.price}
                  features={pkg.features}
                  bestFor={pkg.bestFor}
                  isPopular={pkg.isPopular}
                  index={index}
                />
              ))}
            </div>
            
            <motion.div 
              className="mt-12 max-w-5xl mx-auto bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 border border-white border-opacity-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-xl font-bold mb-4">Recommended Add-Ons:</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {ceramicAddons.map((addon, index) => (
                  <div key={index} className="bg-white bg-opacity-10 rounded-lg p-3 text-center">
                    <h4 className="font-heading font-bold mb-1">{addon.title}</h4>
                    <p className="text-green-300">{addon.price}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <div className="mt-12 text-center">
              <Link href="/contact" className="inline-block bg-white text-secondary hover:bg-gray-100 font-heading font-semibold px-6 py-3 rounded-md transition-colors">
                Ask Us About Ceramic Coatings
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Application Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold mb-4">The Ceramic Coating Process</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Professional ceramic coating application is a meticulous process that requires expertise and attention to detail. Here's how we apply ceramic coatings at Fairway Detailing:
              </p>
            </motion.div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-start">
              <motion.div 
                className="md:w-1/2 md:pr-8 mb-8 md:mb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <ol className="space-y-8 relative before:absolute before:top-0 before:left-4 before:bottom-0 before:w-0.5 before:bg-primary">
                  <li className="pl-12 relative">
                    <div className="absolute left-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-heading font-bold">1</div>
                    <h3 className="font-heading font-bold text-xl mb-2">Thorough Washing</h3>
                    <p className="text-gray-600">The vehicle is thoroughly washed to remove surface contaminants, followed by a clay bar treatment to remove embedded contaminants.</p>
                  </li>
                  <li className="pl-12 relative">
                    <div className="absolute left-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-heading font-bold">2</div>
                    <h3 className="font-heading font-bold text-xl mb-2">Chemical Decontamination</h3>
                    <p className="text-gray-600">Iron removers and other specialized chemicals are used to dissolve bonded contaminants that washing alone cannot remove.</p>
                  </li>
                  <li className="pl-12 relative">
                    <div className="absolute left-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-heading font-bold">3</div>
                    <h3 className="font-heading font-bold text-xl mb-2">Paint Correction</h3>
                    <p className="text-gray-600">Machine polishing to remove swirl marks, scratches, and other imperfections, creating a perfect surface for the coating.</p>
                  </li>
                  <li className="pl-12 relative">
                    <div className="absolute left-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-heading font-bold">4</div>
                    <h3 className="font-heading font-bold text-xl mb-2">Surface Preparation</h3>
                    <p className="text-gray-600">Special panel wipes are used to remove any polishing oils or residues, ensuring a perfectly clean surface for maximum bonding.</p>
                  </li>
                  <li className="pl-12 relative">
                    <div className="absolute left-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-heading font-bold">5</div>
                    <h3 className="font-heading font-bold text-xl mb-2">Coating Application</h3>
                    <p className="text-gray-600">The ceramic coating is carefully applied one panel at a time, then immediately leveled to ensure even coverage and prevent high spots.</p>
                  </li>
                  <li className="pl-12 relative">
                    <div className="absolute left-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-heading font-bold">6</div>
                    <h3 className="font-heading font-bold text-xl mb-2">Curing</h3>
                    <p className="text-gray-600">The vehicle is allowed to cure in a controlled environment for the manufacturer-recommended time before being exposed to the elements.</p>
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
                <div className="grid grid-cols-1 gap-4">
                  <img src="/images/steve-pancrate-0p_31VwkokY-unsplash.jpg" alt="Washing Car" className="rounded-lg shadow-md w-full h-auto object-cover" />
                  <img src="/images/steve-pancrate-TsW5wvJzChE-unsplash.jpg" alt="Paint Correction" className="rounded-lg shadow-md w-full h-auto object-cover" />
                  <img src="/images/steve-pancrate-tVkk8MbcJCg-unsplash.jpg" alt="Coating Application" className="rounded-lg shadow-md w-full h-auto object-cover" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold mb-4">Maintaining Your Ceramic Coating</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Proper maintenance will maximize the performance and longevity of your ceramic coating. Here are some tips to keep your coating in optimal condition:
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading font-bold text-xl mb-4 flex items-center">
                <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                Regular Washing
              </h3>
              <p className="text-gray-600">
                Wash your vehicle every 2-3 weeks with a pH-neutral shampoo. Avoid harsh chemicals and traditional waxes that can diminish the coating's effectiveness.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading font-bold text-xl mb-4 flex items-center">
                <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                Proper Technique
              </h3>
              <p className="text-gray-600">
                Use the two-bucket method with microfiber wash mitts. Dry with clean, soft microfiber towels to prevent water spots and swirling.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading font-bold text-xl mb-4 flex items-center">
                <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
                Boost Products
              </h3>
              <p className="text-gray-600">
                Apply a ceramic booster spray every 3-4 months to enhance hydrophobic properties and extend the coating's performance.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading font-bold text-xl mb-4 flex items-center">
                <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">4</span>
                Annual Inspections
              </h3>
              <p className="text-gray-600">
                Schedule an annual coating inspection with us to assess the condition of your coating and perform maintenance as needed.
              </p>
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
            <h2 className="font-heading text-3xl font-bold mb-4">Ready to Protect Your Investment?</h2>
            <p className="max-w-3xl mx-auto mb-8">
              Book a consultation today and let our ceramic coating specialists recommend the best protection solution for your vehicle.
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

export default Ceramic;

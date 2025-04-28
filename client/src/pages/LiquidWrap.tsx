import { motion } from "framer-motion";
import { Link } from "wouter";
import LiquidWrapPackage from "@/components/LiquidWrapPackage";
import { liquidWrapPackages, liquidWrapBenefits } from "@/data/liquidWrapPackages";
import { Check, Phone } from "lucide-react";
import liquidWrap1 from "@assets/images/chris-barbalis-CWGLUO6PmtA-unsplash.jpg";
import liquidWrap2 from "@assets/images/chris-hardy-qtygLvwYNYE-unsplash.jpg";
import liquidWrap3 from "@assets/images/andy-ramos-XiLQ2a4fKbU-unsplash.jpg";
import heroBackground from "@assets/images/steve-pancrate-tVkk8MbcJCg-unsplash.jpg"
import packagesBackground from "@assets/images/neerob-raihan-iC4Yr60shv4-unsplash.jpg"

const LiquidWrap = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url(${heroBackground})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-4 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Liquid Wrap</h1>
              <p className="text-xl max-w-2xl">
                Transform your vehicle with a removable, protective coating that offers endless color possibilities and unique finishes.
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
              <h2 className="font-heading text-3xl font-bold mb-6">What Is Liquid Wrap?</h2>
              <p className="text-gray-600 mb-4">
                Liquid wrap is a modern, sprayable alternative to traditional vinyl wraps and paint. This advanced polymer coating can be applied to your entire vehicle to change its color and finish while adding a protective layer that shields the original paint from environmental damage.
              </p>
              <p className="text-gray-600 mb-4">
                Unlike permanent paint, liquid wrap is removable, allowing you to change your vehicle's appearance without affecting its resale value. The coating forms a durable, flexible layer that resists chips, scratches, and UV damage, with a lifespan of 3-5 years with proper care.
              </p>
              <p className="text-gray-600">
                At Fairway Detailing, we use premium DYPL™ liquid wrap products that offer superior durability, vibrant colors, and unique finish options that aren't possible with traditional paint or vinyl wraps.
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
                src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Liquid Wrap Application" 
                className="rounded-lg shadow-lg w-full h-auto"
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
            <h2 className="font-heading text-3xl font-bold mb-4">Benefits of Liquid Wrap</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover why more vehicle owners are choosing liquid wrap for its versatility, protection, and value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {liquidWrapBenefits.slice(0, 3).map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2 text-center">{benefit.title}</h3>
                <p className="text-gray-600 text-center">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-8">
            {liquidWrapBenefits.slice(3).map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2 text-center">{benefit.title}</h3>
                <p className="text-gray-600 text-center">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Color & Finish Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl font-bold mb-4">Color & Finish Options</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              With liquid wrap, you have nearly endless possibilities for customizing your vehicle's appearance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-xl font-bold mb-4">Color Options</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                  <span><strong>Standard Colors</strong>: Choose from our catalog of popular shades</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                  <span><strong>Premium Colors</strong>: Specialty and trending colors</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                  <span><strong>Custom Matching</strong>: We can match almost any color sample</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                  <span><strong>Color-Shifting</strong>: Colors that change based on viewing angle</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                  <span><strong>Two-Tone Options</strong>: Combine colors for unique looks</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-xl font-bold mb-4">Finish Options</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                  <span><strong>Gloss</strong>: Vibrant, reflective finish similar to factory paint</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                  <span><strong>Satin</strong>: Semi-gloss with reduced reflectivity</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                  <span><strong>Matte</strong>: Flat, non-reflective appearance</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                  <span><strong>Metallic</strong>: Contains reflective particles for added depth</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                  <span><strong>Pearl</strong>: Subtle color variations that catch the light</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="mt-10 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <img src={liquidWrap1} alt="Gloss Finish" className="rounded-lg h-40 w-full object-cover" />
              <img src={liquidWrap2} alt="Matte Finish" className="rounded-lg h-40 w-full object-cover" />
              <img src={liquidWrap3} alt="Metallic Finish" className="rounded-lg h-40 w-full object-cover" />
              <img src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Satin Finish" className="rounded-lg h-40 w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Liquid Wrap Packages */}
      <section className="bg-cover bg-center" style={{ backgroundImage: `url(${packagesBackground})` }}>
        <div className="bg-black bg-opacity-75 py-16">
          <div className="container mx-auto px-4 text-white">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-3xl font-bold mb-4">Liquid Wrap Packages</h2>
                <p className="max-w-3xl mx-auto">
                  Choose the perfect package for your vehicle transformation.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {liquidWrapPackages.map((pkg, index) => (
                <LiquidWrapPackage
                  key={index}
                  title={pkg.title}
                  description={pkg.description}
                  price={pkg.price}
                  productType={pkg.productType}
                  productDetails={pkg.productDetails}
                  features={pkg.features}
                  isHighlighted={false}
                  index={index}
                />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/contact" className="inline-flex items-center bg-white text-primary hover:bg-gray-100 font-heading font-semibold px-6 py-3 rounded-md transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                <span>Schedule a Consultation</span>
              </Link>
            </div>
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
            <h2 className="font-heading text-3xl font-bold mb-4">Our Application Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Professional liquid wrap application requires meticulous preparation and specialized techniques. Here's how we ensure exceptional results:
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
                      <h3 className="font-heading font-bold text-lg">Consultation & Design</h3>
                      <p className="text-gray-600">We discuss your vision, select colors and finishes, and provide a detailed proposal and timeline.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                    <div>
                      <h3 className="font-heading font-bold text-lg">Vehicle Preparation</h3>
                      <p className="text-gray-600">Thorough washing, clay bar treatment, and surface decontamination to ensure a clean foundation.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                    <div>
                      <h3 className="font-heading font-bold text-lg">Masking & Protection</h3>
                      <p className="text-gray-600">Careful masking of areas not being coated, including trim, windows, and mechanical components.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                    <div>
                      <h3 className="font-heading font-bold text-lg">Base Coating Application</h3>
                      <p className="text-gray-600">Applying the base color in multiple thin layers for perfect coverage and adhesion.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">5</span>
                    <div>
                      <h3 className="font-heading font-bold text-lg">Finish Layer</h3>
                      <p className="text-gray-600">Application of the final finish layers to achieve the desired gloss, satin, or matte appearance.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">6</span>
                    <div>
                      <h3 className="font-heading font-bold text-lg">Quality Inspection</h3>
                      <p className="text-gray-600">Thorough review of the completed work to ensure perfect coverage, finish, and attention to detail.</p>
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
                  <img src="https://images.unsplash.com/photo-1626060893257-2ebbf5139e57?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Liquid Wrap Application Process" className="rounded-lg shadow-md w-full h-auto" />
                  <img src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Liquid Wrap Detail" className="rounded-lg shadow-md w-full h-auto" />
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
            <h2 className="font-heading text-3xl font-bold mb-4">Caring for Your Liquid Wrap</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              With proper care, your liquid wrap will maintain its appearance and protection for years. Here are some essential maintenance tips:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading font-bold text-xl mb-4 border-b border-gray-200 pb-2">Washing Guidelines</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>Wait at least 7 days after application before washing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>Use pH-neutral car wash soap and soft microfiber wash mitts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>Avoid automatic car washes with brushes that can damage the finish</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>Hand dry with clean, soft microfiber towels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>Never use abrasive cleaners, compounds, or polishes</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading font-bold text-xl mb-4 border-b border-gray-200 pb-2">General Care</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>Clean bird droppings and tree sap immediately to prevent staining</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>Use liquid wrap-safe spray detailers for quick cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>Consider covered parking when possible to reduce UV exposure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>Schedule annual inspections with us to assess condition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>Minor repairs can be performed if damage occurs</span>
                </li>
              </ul>
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
            <h2 className="font-heading text-3xl font-bold mb-4">Ready to Transform Your Vehicle?</h2>
            <p className="max-w-3xl mx-auto mb-8">
              Contact us today to schedule a consultation and learn how liquid wrap can give your vehicle a stunning new appearance.
            </p>
            <Link href="/contact" className="inline-flex items-center bg-white text-primary hover:bg-gray-100 font-heading font-semibold px-6 py-3 rounded-md transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              <span>Schedule a Consultation</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default LiquidWrap;
import { motion } from "framer-motion";
import BookingForm, { BookingContact } from "@/components/BookingForm";
import { services } from "@/data/services";

const Booking = () => {
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
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Book Your Service</h1>
              <p className="text-xl max-w-2xl">
                Schedule your mobile detailing appointment. <span className="font-semibold">We come to you!</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Booking Form Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto">
            <BookingContact />
            <BookingForm />
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold mb-4">Our Service Packages</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Choose from our range of detailing packages designed to meet your specific needs.
              </p>
            </motion.div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img src={service.imageSrc} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-heading text-xl font-bold">{service.title} - "{service.subtitle}"</h3>
                      <p className="bg-gray-100 text-primary font-heading font-bold py-1 px-3 rounded">{service.price}</p>
                    </div>
                    <p className="text-gray-600 mb-2">{service.description}</p>
                    <p className="text-gray-500 text-sm mb-4">Estimated time: {service.time}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <h4 className="font-heading font-bold text-sm uppercase text-gray-500 mb-2">Exterior</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {service.services.exterior.items.slice(0, 3).map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-primary mr-1">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                          {service.services.exterior.items.length > 3 && (
                            <li className="text-primary">+{service.services.exterior.items.length - 3} more</li>
                          )}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-sm uppercase text-gray-500 mb-2">Interior</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {service.services.interior.items.slice(0, 3).map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-primary mr-1">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                          {service.services.interior.items.length > 3 && (
                            <li className="text-primary">+{service.services.interior.items.length - 3} more</li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Premium Services */}
      <section className="py-16">
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
                Consider our advanced protection options for long-lasting results.
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
              <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Ceramic Coating" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold mb-2">Ceramic Coatings</h3>
                <p className="text-gray-600 mb-4">
                  Our ceramic coating packages provide exceptional protection and gloss that lasts for years. Prices start at $499 for our 2-year coating.
                </p>
                <a href="/ceramic" className="text-primary hover:text-primary/90 font-heading font-semibold flex items-center transition-colors">
                  <span>Learn More About Ceramic Coatings</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1614935151651-0bea6508db6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Paint Protection Film" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold mb-2">Paint Protection Film</h3>
                <p className="text-gray-600 mb-4">
                  Our XPEL Ultimate Plus and Stealth films provide the ultimate defense against rock chips and road debris. Packages start at $799.
                </p>
                <a href="/ppf" className="text-primary hover:text-primary/90 font-heading font-semibold flex items-center transition-colors">
                  <span>Learn More About PPF</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Booking Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold mb-4">Our Booking Process</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Here's what to expect when you schedule a service with Fairway Detailing.
              </p>
            </motion.div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-heading font-bold text-xl">1</div>
                <h3 className="font-heading font-bold text-lg mb-2">Submit Request</h3>
                <p className="text-gray-600">Complete our booking form with your contact information and service preferences.</p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-heading font-bold text-xl">2</div>
                <h3 className="font-heading font-bold text-lg mb-2">Confirmation</h3>
                <p className="text-gray-600">We'll contact you to confirm appointment details and answer any questions.</p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-heading font-bold text-xl">3</div>
                <h3 className="font-heading font-bold text-lg mb-2">Service Day</h3>
                <p className="text-gray-600">Drop off your vehicle at the scheduled time. We'll perform a walk-around inspection with you.</p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-heading font-bold text-xl">4</div>
                <h3 className="font-heading font-bold text-lg mb-2">Pickup</h3>
                <p className="text-gray-600">We'll notify you when your vehicle is ready and review the results with you upon pickup.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Common questions about booking and preparing for your service.
              </p>
            </motion.div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading font-bold text-lg mb-2">How far in advance should I book?</h3>
                <p className="text-gray-600">
                  We recommend booking at least 1-2 weeks in advance for standard detailing services. For ceramic coatings and PPF installations, we suggest 2-3 weeks advance booking as these services require more scheduling flexibility.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading font-bold text-lg mb-2">How should I prepare my vehicle?</h3>
                <p className="text-gray-600">
                  Please remove all personal belongings from your vehicle before your appointment. We also ask that you remove any child seats if possible, as this allows us to clean thoroughly underneath them.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading font-bold text-lg mb-2">Can I wait while my car is detailed?</h3>
                <p className="text-gray-600">
                  Yes, we have a comfortable waiting area with Wi-Fi, refreshments, and TV. For longer services, we're also within walking distance of several restaurants and shops.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading font-bold text-lg mb-2">What is your cancellation policy?</h3>
                <p className="text-gray-600">
                  We require at least 24 hours notice for cancellations or rescheduling. For ceramic coating and PPF services, we require 48 hours notice due to the significant time blocked in our schedule.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
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
                Hear from our satisfied customers about their experience with Fairway Detailing.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-600">5.0</span>
              </div>
              <p className="text-gray-600 mb-4">"The booking process was so easy, and they were able to fit me in within a few days. My car looks better than when I bought it!"</p>
              <div className="flex items-center">
                <div className="font-heading font-semibold">Jennifer K.</div>
                <div className="ml-2 text-sm text-gray-500">Columbus, OH</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-600">5.0</span>
              </div>
              <p className="text-gray-600 mb-4">"I've been taking all my cars to Fairway for years. Their online booking system makes scheduling simple, and their service is always impeccable."</p>
              <div className="flex items-center">
                <div className="font-heading font-semibold">Robert M.</div>
                <div className="ml-2 text-sm text-gray-500">Dublin, OH</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-600">5.0</span>
              </div>
              <p className="text-gray-600 mb-4">"I had my BMW detailed and ceramic coated here. The staff was informative throughout the process, and the results exceeded my expectations."</p>
              <div className="flex items-center">
                <div className="font-heading font-semibold">Alex T.</div>
                <div className="ml-2 text-sm text-gray-500">Westerville, OH</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;

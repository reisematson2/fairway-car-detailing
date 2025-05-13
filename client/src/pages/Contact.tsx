import { motion } from "framer-motion";
import { ContactForm, ContactInfo } from "@/components/ContactForm";
import ServiceAreaMap from "@/components/ServiceAreaMap";

const Contact = () => {
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
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl max-w-2xl">
                Have questions about our mobile detailing services? Need a custom quote? <strong>We come to you!</strong> We're here to help.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Reach out to us by phone, email, or using the contact form below. We'll get back to you as soon as possible.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div 
              className="md:col-span-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ContactInfo />
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              className="md:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Service Areas */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold mb-4">Our Service Areas</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We proudly serve Cleveland and surrounding areas, covering approximately 45 miles east, west, and south of downtown Cleveland.
              </p>
              <div className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-heading font-bold text-lg mb-3 text-primary">East Side</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Beachwood</li>
                      <li>• Chagrin Falls</li>
                      <li>• Euclid</li>
                      <li>• Mentor</li>
                      <li>• Solon</li>
                      <li>• Willoughby</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-heading font-bold text-lg mb-3 text-primary">West Side</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Avon</li>
                      <li>• Bay Village</li>
                      <li>• Lakewood</li>
                      <li>• North Olmsted</li>
                      <li>• Rocky River</li>
                      <li>• Westlake</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-heading font-bold text-lg mb-3 text-primary">South</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Akron</li>
                      <li>• Brecksville</li>
                      <li>• Brunswick</li>
                      <li>• Medina</li>
                      <li>• Strongsville</li>
                      <li>• Twinsburg</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-8 font-medium">No need to come to us - our mobile detailing service brings the professional car care experience directly to you!</p>
                <p className="mt-2 text-primary font-semibold">Home • Office • Anywhere that's convenient for you</p>
                
                {/* Service Area Map Visual */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mt-12"
                >
                  <ServiceAreaMap />
                  <p className="text-gray-500 text-sm mt-4 max-w-2xl mx-auto">
                    We're based in Cleveland and travel throughout Northeast Ohio to serve you. If your location isn't listed, please contact us to check availability.
                  </p>
                </motion.div>
              </div>
            </motion.div>
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
                Find answers to common questions about our services, scheduling, and policies.
              </p>
            </motion.div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading font-bold text-xl mb-2">What are your business hours?</h3>
                <p className="text-gray-600">
                  We are open Monday through Friday from 8:00 AM to 6:00 PM, and Saturday from 9:00 AM to 4:00 PM. We are closed on Sundays.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading font-bold text-xl mb-2">Do I need to make an appointment?</h3>
                <p className="text-gray-600">
                  Yes, appointments are required for all services. We schedule by appointment to ensure that we can provide the time and attention your vehicle deserves. You can book online, by phone, or by email.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading font-bold text-xl mb-2">How long will my service take?</h3>
                <p className="text-gray-600">
                  Service times vary depending on the package and your vehicle's condition. Essential Detail typically takes 1.5-2 hours, Premium Refresh 3-4 hours, and Showroom Detail 6+ hours. Ceramic coating and PPF installations may require your vehicle to be with us for 1-5 days depending on the coverage area.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md bg-primary bg-opacity-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading font-bold text-xl mb-2">How does your mobile detailing service work?</h3>
                <p className="text-gray-600">
                  Our mobile detailing service brings professional car care to your location - home, office, or anywhere convenient for you. We arrive with our own water and power supply, and all the professional tools needed for your selected service. Just book an appointment, and we'll come to you within our service area!
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading font-bold text-xl mb-2">What forms of payment do you accept?</h3>
                <p className="text-gray-600">
                  We accept all major credit cards, debit cards, cash, and mobile payment methods including Apple Pay and Google Pay. For ceramic coating and PPF services, we require a 50% deposit at the time of booking.
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
            <h2 className="font-heading text-3xl font-bold mb-4">Ready for a Clean Drive?</h2>
            <p className="max-w-3xl mx-auto mb-8">
              Book your appointment today and experience the Fairway difference.
            </p>
            <a href="/booking" className="inline-block bg-white text-primary hover:bg-gray-100 font-heading font-semibold px-8 py-3 rounded-md transition-colors">
              Book Your Appointment
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;

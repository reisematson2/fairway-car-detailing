import { motion } from "framer-motion";
import { ContactForm, ContactInfo } from "@/components/ContactForm";

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
                Have questions about our services? Need a custom quote? We're here to help.
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
      
      {/* Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold mb-4">Our Location</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Visit our facility in Columbus, Ohio. We're conveniently located and ready to serve you.
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            className="max-w-5xl mx-auto bg-white rounded-lg shadow-md overflow-hidden h-[400px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96706.5097994598!2d-83.06088245552139!3d39.97347654377578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883889c1b990de71%3A0xe43266f8cfb1b533!2sColumbus%2C%20OH!5e0!3m2!1sen!2sus!4v1684274278580!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Fairway Detailing Location"
            ></iframe>
          </motion.div>
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
                  Service times vary depending on the package and your vehicle's condition. Standard packages typically take 1.5-2 hours, Deluxe packages 3-4 hours, and Elite packages 6+ hours. Ceramic coating and PPF installations may require your vehicle to be with us for 1-5 days depending on the coverage area.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading font-bold text-xl mb-2">Do you offer mobile detailing services?</h3>
                <p className="text-gray-600">
                  We currently do not offer mobile services. All detailing work is performed at our facility, which is equipped with specialized lighting, tools, and a controlled environment to ensure the highest quality results.
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

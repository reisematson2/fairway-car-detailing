import { motion } from "framer-motion";
import { Link } from "wouter";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blogPosts";
import { ArrowRight } from "lucide-react";

const Blog = () => {
  // Additional blog posts for the full blog page
  const additionalPosts = [
    {
      title: "Understanding Paint Correction",
      excerpt: "Learn about the different levels of paint correction and how they can transform your vehicle's appearance.",
      imageSrc: "https://images.unsplash.com/photo-1606577224006-27637bca2e0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      slug: "understanding-paint-correction"
    },
    {
      title: "The Benefits of Professional Detailing",
      excerpt: "Discover why professional detailing services are worth the investment for maintaining your vehicle's condition and value.",
      imageSrc: "https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      slug: "benefits-of-professional-detailing"
    },
    {
      title: "How to Choose the Right Detailing Service",
      excerpt: "Tips for selecting the best detailing service for your vehicle's needs and your budget.",
      imageSrc: "https://images.unsplash.com/photo-1575239130240-68829ce3f354?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      slug: "choosing-right-detailing-service"
    },
    {
      title: "Paint Protection Film vs. Vinyl Wraps",
      excerpt: "Understanding the differences between PPF and vinyl wraps to make the right choice for your vehicle.",
      imageSrc: "https://images.unsplash.com/photo-1594378943018-9fc955bafa28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      slug: "ppf-vs-vinyl-wraps"
    },
    {
      title: "Interior Detailing: Beyond the Basics",
      excerpt: "Advanced interior detailing techniques that go beyond vacuuming to restore your car's interior to showroom condition.",
      imageSrc: "https://images.unsplash.com/photo-1603145733146-ae562a55031e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      slug: "interior-detailing-beyond-basics"
    },
    {
      title: "Maintaining Your Car Between Details",
      excerpt: "Simple maintenance tips to keep your vehicle looking great between professional detailing appointments.",
      imageSrc: "https://images.unsplash.com/photo-1599552683573-9dc48255fc85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      slug: "maintaining-car-between-details"
    }
  ];

  // Combine original blog posts with additional ones
  const allBlogPosts = [...blogPosts, ...additionalPosts];

  // Featured post
  const featuredPost = {
    title: "Professional Detailing: What Makes the Difference",
    excerpt: "Discover the techniques, tools, and knowledge that separate professional detailing from DIY car care, and why it matters for your vehicle's long-term condition.",
    imageSrc: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    slug: "professional-vs-diy-detailing"
  };

  // Categories
  const categories = [
    "All Posts",
    "Detailing Tips",
    "Paint Protection",
    "Interior Care",
    "Ceramic Coatings",
    "Paint Correction",
    "Maintenance"
  ];

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
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Car Care Blog</h1>
              <p className="text-xl max-w-2xl">
                Expert advice, tips, and insights to help you keep your vehicle in pristine condition.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                className={`px-4 py-2 rounded-md font-heading font-semibold text-sm transition-colors ${
                  index === 0 ? "bg-primary text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img 
                  src={featuredPost.imageSrc} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="bg-primary text-white text-xs font-bold py-1 px-3 rounded inline-block mb-4 w-fit">
                  FEATURED
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <Link href={`/blog/${featuredPost.slug}`} className="text-primary hover:text-primary/90 font-heading font-semibold flex items-center transition-colors w-fit">
                  <span>Read Full Article</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl font-bold mb-4">Latest Articles</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest detailing techniques, product reviews, and care tips from our expert team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {allBlogPosts.map((post, index) => (
              <BlogCard
                key={index}
                title={post.title}
                excerpt={post.excerpt}
                imageSrc={post.imageSrc}
                slug={post.slug}
                index={index}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="inline-block bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-heading font-semibold px-6 py-3 rounded-md transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get the latest detailing tips, exclusive offers, and automotive care advice delivered straight to your inbox.
              </p>
            </motion.div>

            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-primary hover:bg-primary/90 text-white font-heading font-semibold px-6 py-3 rounded-md transition-colors"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-4 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl font-bold mb-4">Explore Our Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover how our professional detailing services can help maintain your vehicle's appearance and value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Detailing Services" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold mb-2">Detailing Packages</h3>
                <p className="text-gray-600 mb-4">Comprehensive detailing solutions tailored to your vehicle's specific needs.</p>
                <Link href="/services" className="text-primary hover:text-primary/90 font-heading font-semibold flex items-center transition-colors">
                  <span>View Packages</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Ceramic Coatings" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold mb-2">Ceramic Coatings</h3>
                <p className="text-gray-600 mb-4">Long-lasting protection that enhances your vehicle's gloss and makes maintenance easier.</p>
                <Link href="/ceramic" className="text-primary hover:text-primary/90 font-heading font-semibold flex items-center transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1614935151651-0bea6508db6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Paint Protection Film" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold mb-2">Paint Protection Film</h3>
                <p className="text-gray-600 mb-4">Premium XPEL films that shield your vehicle from rock chips, scratches, and road debris.</p>
                <Link href="/ppf" className="text-primary hover:text-primary/90 font-heading font-semibold flex items-center transition-colors">
                  <span>Explore Options</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl font-bold mb-4">Ready to Experience the Fairway Difference?</h2>
            <p className="max-w-3xl mx-auto mb-8">
              Book your appointment today and see why our customers trust us with their vehicles.
            </p>
            <Link href="/booking" className="inline-block bg-primary hover:bg-primary/90 text-white font-heading font-semibold px-8 py-3 rounded-md transition-colors">
              Book Your Appointment
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;

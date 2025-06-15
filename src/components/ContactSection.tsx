
import { motion } from 'framer-motion';

export const ContactSection = () => {
  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-background to-card">
      <div className="relative z-10 container mx-auto px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold text-beige mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-beige-dark max-w-2xl mx-auto">
            Interested in collaboration, research opportunities, or just want to discuss ideas?
          </p>
        </motion.div>

        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="text-center">
              <h3 className="font-display text-2xl text-beige mb-4">Academic Inquiries</h3>
              <p className="text-beige-dark mb-4">For research collaboration and academic matters</p>
              <a 
                href="mailto:academic@yourname.com" 
                className="text-bordeaux hover:text-bordeaux-light transition-colors font-medium"
              >
                academic@yourname.com
              </a>
            </div>
            
            <div className="text-center">
              <h3 className="font-display text-2xl text-beige mb-4">General Contact</h3>
              <p className="text-beige-dark mb-4">For all other inquiries and opportunities</p>
              <a 
                href="mailto:hello@yourname.com" 
                className="text-bordeaux hover:text-bordeaux-light transition-colors font-medium"
              >
                hello@yourname.com
              </a>
            </div>
          </div>

          <div className="flex justify-center space-x-8">
            <a 
              href="#" 
              className="px-6 py-3 bg-bordeaux text-beige font-medium rounded-lg hover:bg-bordeaux-light transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a 
              href="#" 
              className="px-6 py-3 bg-bordeaux text-beige font-medium rounded-lg hover:bg-bordeaux-light transition-colors duration-300"
            >
              ResearchGate
            </a>
            <a 
              href="#" 
              className="px-6 py-3 bg-bordeaux text-beige font-medium rounded-lg hover:bg-bordeaux-light transition-colors duration-300"
            >
              ORCID
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

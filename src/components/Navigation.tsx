
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-blue/80 backdrop-blur-md border-b border-medium-blue/20' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-8 py-4">
        <div className="flex justify-between items-center">
          <motion.button 
            onClick={() => scrollToSection('hero')}
            className="font-display text-2xl font-bold text-off-white hover:text-medium-blue transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Your Name
          </motion.button>

          <div className="hidden md:flex space-x-8">
            {[
              { name: 'About', id: 'hero' },
              { name: 'Blog', id: 'blog' },
              { name: 'Papers', id: 'papers' },
              { name: 'Projects', id: 'projects' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-off-white hover:text-medium-blue transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          <motion.button 
            className="md:hidden text-off-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ☰
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

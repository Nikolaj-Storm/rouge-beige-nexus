
import { motion } from 'framer-motion';
import Hero3DBackground from './Hero3DBackground';

interface HeroSectionProps {
  scrollProgress: number;
}

export const HeroSection = ({ scrollProgress }: HeroSectionProps) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Minimal foolproof 3D background */}
      <Hero3DBackground />

      {/* Foreground content with new color scheme */}
      <div className="relative z-10 text-center px-8">
        <motion.h1 
          className="font-display text-6xl md:text-8xl font-bold text-off-white mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Your Name
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-light-teal max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Academic Researcher, Writer & Creative Technologist
        </motion.p>
        
        <motion.div 
          className="flex justify-center space-x-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-medium-blue">15+</div>
            <div className="text-light-teal">Papers Published</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-medium-blue">50+</div>
            <div className="text-light-teal">Blog Articles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-medium-blue">25+</div>
            <div className="text-light-teal">Projects</div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-off-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-off-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};

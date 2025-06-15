
import { motion } from 'framer-motion';
import { Scene3D } from './Scene3D';

interface HeroSectionProps {
  scrollProgress: number;
}

export const HeroSection = ({ scrollProgress }: HeroSectionProps) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D scene: ensure always fills and visible */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Add slightly lower z-index so all UI is above */}
        <Scene3D section="hero" scrollProgress={scrollProgress} />
        {/* Extra fallback for contrast if scene is empty */}
        <div className="absolute inset-0 bg-background opacity-75" style={{pointerEvents: 'none'}} />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 text-center px-8">
        <motion.h1 
          className="font-display text-6xl md:text-8xl font-bold text-beige mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Your Name
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-beige-dark max-w-2xl mx-auto mb-8"
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
            <div className="text-3xl font-bold text-bordeaux">15+</div>
            <div className="text-beige-dark">Papers Published</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-bordeaux">50+</div>
            <div className="text-beige-dark">Blog Articles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-bordeaux">25+</div>
            <div className="text-beige-dark">Projects</div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-beige rounded-full flex justify-center">
          <div className="w-1 h-3 bg-beige rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};


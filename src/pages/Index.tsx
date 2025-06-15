
import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { BlogSection } from '@/components/BlogSection';
import { PapersSection } from '@/components/PapersSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-background text-foreground">
      <Navigation />
      
      <div id="hero">
        <HeroSection scrollProgress={scrollProgress} />
      </div>
      
      <div id="blog">
        <BlogSection scrollProgress={scrollProgress} />
      </div>
      
      <div id="papers">
        <PapersSection scrollProgress={scrollProgress} />
      </div>
      
      <div id="projects">
        <ProjectsSection scrollProgress={scrollProgress} />
      </div>
      
      <div id="contact">
        <ContactSection />
      </div>

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-bordeaux/20 z-50">
        <div 
          className="h-full bg-bordeaux transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </div>
  );
};

export default Index;

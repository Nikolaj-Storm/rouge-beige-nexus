
import { motion } from 'framer-motion';
import { Scene3D } from './Scene3D';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ProjectsSectionProps {
  scrollProgress: number;
}

const projects = [
  {
    title: "AI Research Platform",
    category: "Web Application",
    description: "A comprehensive platform for collaborative AI research with real-time data visualization and analysis tools.",
    technologies: ["React", "Python", "TensorFlow", "PostgreSQL"],
    status: "Live",
    year: "2024"
  },
  {
    title: "Digital Humanities Archive",
    category: "Digital Archive",
    description: "An interactive digital archive preserving and presenting historical documents with advanced search capabilities.",
    technologies: ["Vue.js", "Node.js", "Elasticsearch", "MongoDB"],
    status: "In Development",
    year: "2024"
  },
  {
    title: "Academic Network Analyzer",
    category: "Data Science",
    description: "Network analysis tool for mapping academic collaborations and research impact across institutions.",
    technologies: ["Python", "D3.js", "NetworkX", "FastAPI"],
    status: "Live",
    year: "2023"
  },
  {
    title: "Interactive Research Visualization",
    category: "Data Visualization",
    description: "Dynamic visualization system for presenting complex research data in accessible, interactive formats.",
    technologies: ["React", "Three.js", "D3.js", "WebGL"],
    status: "Live",
    year: "2023"
  }
];

export const ProjectsSection = ({ scrollProgress }: ProjectsSectionProps) => {
  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-25">
        <Scene3D section="projects" scrollProgress={scrollProgress} />
      </div>
      
      <div className="relative z-10 container mx-auto px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold text-beige mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-beige-dark max-w-2xl mx-auto">
            Innovative solutions bridging research, technology, and human experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="cursor-pointer"
            >
              <Card className="h-full bg-card/80 backdrop-blur-sm border-bordeaux/20 hover:border-bordeaux/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm text-bordeaux font-medium">{project.category}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-beige-dark">{project.year}</span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        project.status === 'Live' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-beige text-xl font-display">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-beige-dark mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-bordeaux/10 text-bordeaux text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4 text-sm">
                    <button className="text-bordeaux hover:text-bordeaux-light transition-colors font-medium">
                      View Project
                    </button>
                    <button className="text-bordeaux hover:text-bordeaux-light transition-colors font-medium">
                      Source Code
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <button className="px-8 py-3 bg-bordeaux text-beige font-medium rounded-lg hover:bg-bordeaux-light transition-colors duration-300">
            Explore All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

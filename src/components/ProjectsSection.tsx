
import { motion } from 'framer-motion';

interface ProjectsSectionProps {
  scrollProgress: number;
}

export const ProjectsSection = ({ scrollProgress }: ProjectsSectionProps) => {
  const projects = [
    {
      title: "Digital Archive Platform",
      description: "A modern web platform for organizing and accessing historical documents and artifacts.",
      tech: ["React", "Node.js", "MongoDB", "TypeScript"],
      status: "In Development",
      image: "/placeholder.svg"
    },
    {
      title: "Research Collaboration Tool",
      description: "A collaborative workspace designed specifically for academic researchers to share resources and findings.",
      tech: ["Vue.js", "Firebase", "D3.js", "Python"],
      status: "Completed",
      image: "/placeholder.svg"
    },
    {
      title: "Text Analysis Dashboard",
      description: "An interactive dashboard for analyzing large text corpora using machine learning techniques.",
      tech: ["Python", "Flask", "TensorFlow", "React"],
      status: "Beta",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-8 bg-gradient-to-br from-medium-blue to-dark-blue">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold text-off-white mb-4">
            Projects
          </h2>
          <p className="text-xl text-off-white/80 mb-16 max-w-2xl">
            Digital tools and platforms I've developed to advance research and collaboration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-off-white/95 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-off-white/20 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="h-48 bg-light-teal"></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-dark-blue">
                    {project.title}
                  </h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-dark-blue text-off-white'
                      : project.status === 'Beta'
                      ? 'bg-medium-blue text-off-white'
                      : 'bg-light-teal text-dark-blue'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-medium-blue mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-light-teal text-dark-blue text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

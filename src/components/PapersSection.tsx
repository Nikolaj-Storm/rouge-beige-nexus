
import { motion } from 'framer-motion';

interface PapersSectionProps {
  scrollProgress: number;
}

export const PapersSection = ({ scrollProgress }: PapersSectionProps) => {
  const papers = [
    {
      title: "Machine Learning Applications in Digital Humanities",
      journal: "Journal of Digital Scholarship",
      year: "2024",
      abstract: "This paper explores the intersection of machine learning and digital humanities, presenting novel approaches to text analysis and cultural data mining.",
      status: "Published"
    },
    {
      title: "Collaborative Knowledge Networks in Academic Research",
      journal: "Academic Collaboration Quarterly",
      year: "2023",
      abstract: "An analysis of how digital platforms facilitate collaborative research and knowledge sharing across institutional boundaries.",
      status: "Published"
    },
    {
      title: "The Ethics of AI in Educational Technology",
      journal: "Educational Technology Review",
      year: "2023",
      abstract: "Examining the ethical implications of artificial intelligence integration in educational systems and learning platforms.",
      status: "Under Review"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-8 bg-gradient-to-br from-light-teal to-medium-blue">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold text-off-white mb-4">
            Research Papers
          </h2>
          <p className="text-xl text-off-white/80 mb-16 max-w-2xl">
            Academic contributions and scholarly publications exploring the intersection of technology and humanities.
          </p>
        </motion.div>

        <div className="space-y-8">
          {papers.map((paper, index) => (
            <motion.div
              key={index}
              className="bg-off-white/95 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-off-white/20"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ x: 10 }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-dark-blue mb-2">
                    {paper.title}
                  </h3>
                  <div className="text-medium-blue mb-4">
                    <span className="font-medium">{paper.journal}</span> • {paper.year}
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  paper.status === 'Published' 
                    ? 'bg-dark-blue text-off-white' 
                    : 'bg-medium-blue text-off-white'
                }`}>
                  {paper.status}
                </span>
              </div>
              <p className="text-medium-blue leading-relaxed">
                {paper.abstract}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


import { motion } from 'framer-motion';
import { Scene3D } from './Scene3D';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface PapersSectionProps {
  scrollProgress: number;
}

const papers = [
  {
    title: "Machine Learning Applications in Contemporary Research",
    journal: "Journal of Computational Studies",
    year: "2024",
    authors: "Your Name, Co-Author A., Co-Author B.",
    abstract: "This paper explores the transformative impact of machine learning methodologies on contemporary research practices across multiple disciplines.",
    citations: 47,
    impact: "High Impact"
  },
  {
    title: "Digital Transformation in Academic Institutions",
    journal: "Educational Technology Review",
    year: "2023",
    authors: "Your Name, Collaborator C.",
    abstract: "An comprehensive analysis of how digital technologies are reshaping educational and research paradigms in higher education.",
    citations: 32,
    impact: "Medium Impact"
  },
  {
    title: "Interdisciplinary Approaches to Complex Problem Solving",
    journal: "International Research Quarterly",
    year: "2023",
    authors: "Your Name",
    abstract: "This study examines the effectiveness of interdisciplinary collaboration in addressing complex societal and scientific challenges.",
    citations: 28,
    impact: "Medium Impact"
  }
];

export const PapersSection = ({ scrollProgress }: PapersSectionProps) => {
  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <Scene3D section="papers" scrollProgress={scrollProgress} />
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
            Academic Papers
          </h2>
          <p className="text-xl text-beige-dark max-w-2xl mx-auto">
            Peer-reviewed research contributing to the advancement of knowledge
          </p>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {papers.map((paper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="cursor-pointer"
            >
              <Card className="bg-card/80 backdrop-blur-sm border-bordeaux/20 hover:border-bordeaux/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-bordeaux font-medium text-sm">{paper.journal}</span>
                    <div className="flex items-center space-x-4 text-sm text-beige-dark">
                      <span>{paper.year}</span>
                      <span>{paper.citations} citations</span>
                      <span className="px-2 py-1 bg-bordeaux/20 rounded text-bordeaux text-xs">
                        {paper.impact}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-beige text-2xl font-display mb-2">
                    {paper.title}
                  </CardTitle>
                  <p className="text-beige-dark text-sm">{paper.authors}</p>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-beige-dark text-base leading-relaxed">
                    {paper.abstract}
                  </CardDescription>
                  <div className="mt-4 flex space-x-4">
                    <button className="text-bordeaux hover:text-bordeaux-light transition-colors text-sm font-medium">
                      View PDF
                    </button>
                    <button className="text-bordeaux hover:text-bordeaux-light transition-colors text-sm font-medium">
                      Citations
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
            View Full Publications
          </button>
        </motion.div>
      </div>
    </section>
  );
};

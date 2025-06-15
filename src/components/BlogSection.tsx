
import { motion } from 'framer-motion';
import { Scene3D } from './Scene3D';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface BlogSectionProps {
  scrollProgress: number;
}

const blogPosts = [
  {
    title: "The Future of Academic Research",
    description: "Exploring how digital transformation is reshaping scholarly work and knowledge dissemination.",
    date: "December 2024",
    readTime: "8 min read"
  },
  {
    title: "Interdisciplinary Approaches to Complex Problems",
    description: "Why breaking down silos between disciplines leads to more innovative solutions.",
    date: "November 2024",
    readTime: "12 min read"
  },
  {
    title: "Digital Humanities and Technology",
    description: "The intersection of traditional humanities scholarship with cutting-edge technology.",
    date: "October 2024",
    readTime: "10 min read"
  }
];

export const BlogSection = ({ scrollProgress }: BlogSectionProps) => {
  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <Scene3D section="blog" scrollProgress={scrollProgress} />
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
            Recent Thoughts
          </h2>
          <p className="text-xl text-beige-dark max-w-2xl mx-auto">
            Exploring ideas at the intersection of research, technology, and human experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
            >
              <Card className="h-full bg-card/80 backdrop-blur-sm border-bordeaux/20 hover:border-bordeaux/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm text-bordeaux font-medium">{post.date}</span>
                    <span className="text-sm text-beige-dark">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-beige text-xl font-display">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-beige-dark">
                    {post.description}
                  </CardDescription>
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
            View All Posts
          </button>
        </motion.div>
      </div>
    </section>
  );
};

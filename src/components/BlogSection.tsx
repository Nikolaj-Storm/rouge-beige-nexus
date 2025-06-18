
import { motion } from 'framer-motion';

interface BlogSectionProps {
  scrollProgress: number;
}

export const BlogSection = ({ scrollProgress }: BlogSectionProps) => {
  const posts = [
    {
      title: "The Future of Academic Research",
      excerpt: "Exploring how technology is reshaping the landscape of academic inquiry and publication.",
      date: "2024-01-15",
      readTime: "5 min read"
    },
    {
      title: "Digital Humanities: A New Frontier",
      excerpt: "How computational methods are opening new avenues for humanities research.",
      date: "2024-01-10",
      readTime: "7 min read"
    },
    {
      title: "Collaborative Research in the Digital Age",
      excerpt: "The evolution of research collaboration through digital platforms and tools.",
      date: "2024-01-05",
      readTime: "4 min read"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-8 bg-gradient-to-br from-off-white to-light-teal">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold text-dark-blue mb-4">
            Latest Thoughts
          </h2>
          <p className="text-xl text-medium-blue mb-16 max-w-2xl">
            Insights, reflections, and discoveries from my research journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              className="bg-off-white rounded-lg p-6 shadow-lg border border-medium-blue/10 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-sm text-medium-blue mb-3">
                {post.date} • {post.readTime}
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-3">
                {post.title}
              </h3>
              <p className="text-medium-blue mb-4">
                {post.excerpt}
              </p>
              <motion.button
                className="text-dark-blue font-medium hover:text-medium-blue transition-colors"
                whileHover={{ x: 5 }}
              >
                Read more →
              </motion.button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

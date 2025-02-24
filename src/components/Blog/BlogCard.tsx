import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { ROUTES } from '../../config/routes';
import { useState } from 'react';
import BlogModal from './BlogModal';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

export default function BlogCard({ title, excerpt, date, author, category, image }: BlogCardProps) {
  const slug = title.toLowerCase().replace(/ /g, '-');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className="group bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50 backdrop-blur-sm"
      >
        <div className="relative overflow-hidden aspect-video">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-[#87bc2c]/90 rounded-full text-xs font-medium backdrop-blur-sm">
              {category}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(date).toLocaleDateString('fr-FR', { 
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {author}
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-2 group-hover:text-[#87bc2c] transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 mb-4 line-clamp-2">{excerpt}</p>

          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-[#87bc2c] font-medium"
          >
            Lire la suite
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </motion.article>

      <BlogModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        post={{
          title,
          excerpt,
          date,
          author,
          category,
          image,
          content: `
            <h2>Introduction</h2>
            <p>${excerpt}</p>
            
            <h2>Développement</h2>
            <p>Contenu détaillé à venir...</p>

            <h2>Conclusion</h2>
            <p>Résumé et perspectives...</p>
          `
        }}
      />
    </>
  );
}
